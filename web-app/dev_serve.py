import http.server
import socketserver
import os

PORT = 8080
# Use absolute path relative to this script's location
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DIRECTORY = os.path.join(SCRIPT_DIR, "public")
ERROR_PAGE_PATH = os.path.join(DIRECTORY, "404.html")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def send_error(self, code, message=None, explain=None):
        # Serve custom 404.html if the file exists
        if code == 404 and os.path.exists(ERROR_PAGE_PATH):
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open(ERROR_PAGE_PATH, 'rb') as f:
                self.wfile.write(f.read())
        else:
            super().send_error(code, message, explain)

if __name__ == "__main__":
    print(f"Starting server on http://0.0.0.0:{PORT}")
    print(f"Serving directory: {DIRECTORY}")
    
    # Ensure we are in the correct directory (web-app) before serving public
    if not os.path.exists(DIRECTORY):
        # Fallback for running from within web-app directory
        if os.path.exists(os.path.join(os.getcwd(), "public")):
             DIRECTORY = os.path.join(os.getcwd(), "public")
             ERROR_PAGE_PATH = os.path.join(DIRECTORY, "404.html")
        else:
            print(f"Error: '{DIRECTORY}' directory not found. Please run this script from the 'web-app' folder.")
            exit(1)

    print(f"Custom 404 page enabled.")
    
    # Allow address reuse to prevent "Address already in use" errors on restart
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            httpd.shutdown()
