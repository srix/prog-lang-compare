
# results from https://seositecheckup.com/seo-audit/programming-languages.com
Following items are marked red and needs to be addressed. 



- [x] This website lacks a "robots.txt" file. This file can protect private content from appearing online, save bandwidth, and lower load time on your server. A missing "robots.txt" file also generates additional errors in your apache log whenever robots request one. Read more about the robots.txt file, and how to create one for your site.

- [x] This website either doesn't have a favicon or this has not been referenced correctly!

- The size of this webpage's HTML is 100.47 Kb, and is greater than the average size of 33 Kb! This can lead to slower loading times, lost visitors, and decreased revenue. Good steps to reduce HTML size include: using HTML compression, CSS layouts, external style sheets, and moving javascript to external files.

- [ ] -The Document Object Model (DOM) of this webpage has 13,444 nodes which is greater than the recommended value of 1,500 nodes! A large DOM size negatively affects site performance and increases the page load time
    > **Note**: Skipped for now per user decision. Requires complex virtualization/pagination which changes UX.

- [x] This webpage is using render blocking resources! Eliminating render-blocking resources can help this webpage to load significantly faster and will improve the website experience for your visitors.


- The Largest Contentful Paint duration of this webpage is 3.16 seconds. To provide a good user experience, Google recommends that sites should strive to have Largest Contentful Paint of 2.5 seconds or less.

- [ ] This DNS server is not using an SPF record! SPF (Sender Policy Framework) allows administrators to specify which hosts are allowed to send mail from a given domain by creating a specific SPF record or TXT record in the Domain Name System (DNS). You can find more information about SPF records here.
    > **Action Required**: Add TXT record: `v=spf1 include:_spf.google.com ~all` (See Implementation Plan).


- [x] This webpage is using the canonical link tag. This tag specifies that the URL: https://prog-lang-compare.netlify.app/ should be the preferred version of this page. The canonical tag can be useful when there are similar versions of the same content on several URLs (e.g., such as e-commerce sites where URL modifiers like sort parameters are appended to a product page's URL). Please ensure that this specification is correct, as canonical tags are often hard-coded and may not always reflect the latest changes in a site's URL structure.


- [x] This website is not using a custom 404 error page! Default 404 error pages result in a poor experience - it can mislead users into thinking an entire site is down or broken, greatly increases the chance they leave the website entirely, and looks unprofessional. We recommend to have a custom 404 error page in order to improve the website's user experience by letting users know that only a specific page is missing/broken (and not the entire site), providing them helpful links, the opportunity to report bugs, and potentially track the source of broken links.


- [x] Social Media Meta Tags refer to netlfiy domain not the actual domain Open Graph Meta Tags	
og:type	website
og:url	https://prog-lang-compare.netlify.app/
og:title	Programming Language Comparison - Side by Side Concept Reference
og:description	Compare programming concepts across 23+ languages side by side. Learn syntax differences for variables, loops, functions, classes, and more.
og:image	https://prog-lang-compare.netlify.app/social-preview.png
og:site_name	Prog Lang Compare

