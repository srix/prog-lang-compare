const https = require('https');

function fetchGitHubStars() {
    return new Promise((resolve) => {
        const options = {
            hostname: 'api.github.com',
            path: '/repos/srix/prog-lang-compare',
            headers: {
                'User-Agent': 'ProgLangCompare-BuildScript'
            }
        };

        const req = https.get(options, (res) => {
            if (res.statusCode !== 200) {
                console.warn(`Warning: Failed to fetch GitHub stars. Status Code: ${res.statusCode}`);
                resolve(null);
                return;
            }

            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.stargazers_count !== undefined) {
                        resolve(json.stargazers_count);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    console.warn('Warning: Failed to parse GitHub API response');
                    resolve(null);
                }
            });
        });

        req.on('error', (e) => {
            console.warn(`Warning: GitHub API request failed: ${e.message}`);
            resolve(null);
        });

        req.end();
    });
}


function generateGitHubButtonHtml(stars) {
    const starCountHtml = stars !== null
        ? `<span class="gh-count">${stars}</span>`
        : '';

    // Inline styling removed, now in styles.css
    return `
    <a href="https://github.com/srix/prog-lang-compare" target="_blank" rel="noopener noreferrer" class="github-button-static" aria-label="Star srix/prog-lang-compare on GitHub">
        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true" style="fill: currentColor; margin-right: 4px; vertical-align: text-bottom;">
            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.719-4.192-3.046-2.97a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
        </svg>
        <span>Star</span>
        ${starCountHtml}
    </a>
    `;
}

module.exports = { fetchGitHubStars, generateGitHubButtonHtml };
