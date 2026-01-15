const fs = require('fs');
const path = require('path');

// Since we're using marked.js in browser, we'll use a simple markdown parser
// For now, let's create HTML templates that will load markdown dynamically

const files = [
    'SMART-RFP-26-4364-Technical-Proposal.md',
    'SMART-RFP-26-4364-Pricing-Proposal.md',
    'SMART-RFP-26-4364-Required-Forms.md',
    'SMART-RFP-26-4364-Action-Plan.md',
    'SMART-RFP-26-4364-Submission-Checklist.md',
    'SMART-RFP-26-4364-Executive-Summary.md',
    'SMART-RFP-26-4364-Grant-Compliance-Matrix.md',
    'SMART-RFP-26-4364-Risk-Management-Playbook.md',
    'SMART-RFP-26-4364-Change-Management-Strategy.md',
    'SMART-RFP-26-4364-Data-Migration-Playbook.md',
    'SMART-RFP-26-4364-Reference-Package-Templates.md',
    'SMART-RFP-26-4364-Project-Charter-Outline.md'
];

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${file.replace('.md', '').replace('SMART-RFP-26-4364-', '')}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #37352f;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: #ffffff;
        }
        h1, h2, h3, h4 {
            color: #1a365d;
            margin-top: 2em;
            margin-bottom: 1em;
        }
        h1 { font-size: 2.5em; border-bottom: 3px solid #00a8e8; padding-bottom: 0.5em; }
        h2 { font-size: 2em; border-bottom: 1px solid #e0e0e0; padding-bottom: 0.3em; }
        h3 { font-size: 1.5em; }
        h4 { font-size: 1.25em; }
        p { margin: 1em 0; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5em 0;
            border: 1px solid #e0e0e0;
        }
        th, td {
            border: 1px solid #e0e0e0;
            padding: 0.75rem;
            text-align: left;
        }
        th {
            background: #f7f6f3;
            font-weight: 600;
        }
        tr:nth-child(even) {
            background: #faf9fc;
        }
        ul, ol {
            margin: 1em 0;
            padding-left: 2em;
        }
        li { margin: 0.5em 0; }
        code {
            background: #f1f5f9;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        pre {
            background: #1e1e1e;
            color: #f8f8f2;
            padding: 1em;
            border-radius: 8px;
            overflow-x: auto;
        }
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }
        strong { color: #00a8e8; }
        blockquote {
            border-left: 4px solid #00a8e8;
            padding-left: 1em;
            margin: 1em 0;
            color: #666;
        }
        hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 2em 0;
        }
    </style>
</head>
<body>
    <!-- This file loads the markdown content via JavaScript -->
    <div id="markdown-content"></div>
    
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
        // Load the markdown file
        fetch('${file}')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load ${file}');
                return response.text();
            })
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById('markdown-content').innerHTML = html;
            })
            .catch(error => {
                document.getElementById('markdown-content').innerHTML = 
                    '<p style="color: red;">Error loading document: ' + error.message + '</p>';
            });
    </script>
</body>
</html>`;

        const outputPath = file.replace('.md', '.html');
        fs.writeFileSync(outputPath, htmlContent);
        console.log(`✓ Converted: ${file} → ${outputPath}`);
    } catch (error) {
        console.error(`✗ Error converting ${file}:`, error.message);
    }
});

console.log('\n✓ All markdown files converted to HTML!');
console.log('Now update JavaScript files to fetch .html instead of .md');
