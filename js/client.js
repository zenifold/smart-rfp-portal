// ===================================
   Client Page (SMART) - Specific JavaScript
   ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Client Proposal Page initialized');
    
    // Initialize client-specific features
    initDocumentLoader();
    initAnimations();
    initSmoothScroll();
});

// ===================================
   Document Loader (Markdown Auto-Update)
   ===================================

const documentPaths = {
    technical: 'SMART-RFP-26-4364-Technical-Proposal.md',
    pricing: 'SMART-RFP-26-4364-Pricing-Proposal.md',
    forms: 'SMART-RFP-26-4364-Required-Forms.md',
    action: 'SMART-RFP-26-4364-Action-Plan.md',
    checklist: 'SMART-RFP-26-4364-Submission-Checklist.md',
    executive: 'SMART-RFP-26-4364-Executive-Summary.md',
    compliance: 'SMART-RFP-26-4364-Grant-Compliance-Matrix.md',
    risk: 'SMART-RFP-26-4364-Risk-Management-Playbook.md',
    change: 'SMART-RFP-26-4364-Change-Management-Strategy.md',
    migration: 'SMART-RFP-26-4364-Data-Migration-Playbook.md',
    references: 'SMART-RFP-26-4364-Reference-Package-Templates.md',
    charter: 'SMART-RFP-26-4364-Project-Charter-Outline.md'
};

async function loadDocument(docKey) {
    const viewer = document.getElementById('document-viewer');
    const titleElement = document.getElementById('viewer-title');
    const contentElement = document.getElementById('viewer-content');
    
    if (!viewer || !titleElement || !contentElement) {
        console.error('Document viewer elements not found');
        return;
    }
    
    // Show loading state
    viewer.classList.add('active');
    contentElement.innerHTML = '<div class="loading">Loading document...</div>';
    document.body.style.overflow = 'hidden';
    
    try {
        // Check if marked.js is available
        if (typeof marked === 'undefined') {
            throw new Error('Markdown parser not loaded. Please ensure marked.js is included.');
        }
        
        // Fetch markdown file
        const response = await fetch(documentPaths[docKey]);
        
        if (!response.ok) {
            throw new Error(`Failed to load ${documentPaths[docKey]} (Status: ${response.status})`);
        }
        
        const markdownText = await response.text();
        
        // Convert markdown to HTML using marked.js
        const htmlContent = marked.parse(markdownText);
        
        // Update modal
        titleElement.textContent = getDocumentTitle(docKey);
        contentElement.innerHTML = htmlContent;
        
        // Add table of contents if needed
        addTableOfContents(contentElement);
        
        // Scroll to top of modal
        viewer.scrollTop = 0;
        
    } catch (error) {
        console.error('Error loading document:', error);
        contentElement.innerHTML = `
            <div class="error-message" style="text-align: center; padding: 2rem;">
                <h3 style="color: var(--accent-color);">Unable to Load Document</h3>
                <p>${error.message}</p>
                <p style="margin-top: 1rem;">Please ensure the markdown files are in the correct directory.</p>
                <p style="font-size: 0.875rem; opacity: 0.7; margin-top: 1rem;">
                    Technical files should be available for viewing. If you're experiencing issues, 
                    please contact the proposal team.
                </p>
                <button onclick="closeDocumentViewer()" style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer; background: var(--primary-color); color: white; border: none; border-radius: 4px;">Close</button>
            </div>
        `;
    }
}

function getDocumentTitle(docKey) {
    const titles = {
        technical: 'Technical Proposal',
        pricing: 'Pricing Proposal',
        forms: 'Required Forms',
        action: 'Action Plan',
        checklist: 'Submission Checklist',
        executive: 'Executive Summary',
        compliance: 'Grant Compliance Matrix',
        risk: 'Risk Management Playbook',
        change: 'Change Management Strategy',
        migration: 'Data Migration Playbook',
        references: 'Reference Package Templates',
        charter: 'Project Charter Outline'
    };
    return titles[docKey] || 'Document';
}

function closeDocumentViewer() {
    const viewer = document.getElementById('document-viewer');
    if (viewer) {
        viewer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function addTableOfContents(contentElement) {
    const headings = contentElement.querySelectorAll('h1, h2, h3');
    
    if (headings.length < 3) return; // Don't add TOC for short documents
    
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Table of Contents</h3>';
    
    const tocList = document.createElement('ul');
    
    headings.forEach(heading => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = heading.textContent;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        // Add indentation based on heading level
        if (heading.tagName === 'H2') {
            listItem.style.paddingLeft = '1rem';
        } else if (heading.tagName === 'H3') {
            listItem.style.paddingLeft = '2rem';
        }
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
        
        // Add ID if not present
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        }
    });
    
    toc.appendChild(tocList);
    contentElement.insertBefore(toc, contentElement.firstChild);
}

// ===================================
   Animations
   ===================================

function initAnimations() {
    // Stagger animation for cards
    const cards = document.querySelectorAll('.problem-card, .methodology-card, .differentiator-item, .team-card');
    
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Animate pricing breakdown items
    const breakdownItems = document.querySelectorAll('.breakdown-item');
    breakdownItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
    
    // Animate timeline phases
    const phases = document.querySelectorAll('.timeline-phase');
    if (phases.length > 0) {
        phases.forEach((phase, index) => {
            phase.style.opacity = '0';
            phase.style.transform = 'translateY(30px)';
            phase.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                phase.style.opacity = '1';
                phase.style.transform = 'translateY(0)';
            }, 500 + (index * 150));
        });
    }
}

// ===================================
   Smooth Scroll
   ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
   Export Functions
   ===================================

// ===================================
//   Print Function
// ===================================

function printDocument() {
    const viewerContent = document.getElementById('viewer-content');
    if (!viewerContent) return;
    
    // Create print window
    const printWindow = window.open('', '_blank');
    const titleElement = document.getElementById('viewer-title');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${titleElement ? titleElement.textContent : 'Document'}</title>
            <style>
                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1, h2, h3, h4, h5, h6 {
                    color: #1a365d;
                    margin-top: 1.5em;
                    margin-bottom: 0.5em;
                }
                h1 { font-size: 2em; }
                h2 { font-size: 1.5em; }
                h3 { font-size: 1.25em; }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1em 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background: #1a365d;
                    color: white;
                }
                code {
                    background: #f4f4f4;
                    padding: 2px 4px;
                    border-radius: 3px;
                    font-family: monospace;
                }
                pre {
                    background: #2d2d2d;
                    color: #f8f8f2;
                    padding: 1em;
                    border-radius: 8px;
                    overflow-x: auto;
                }
                pre code {
                    background: none;
                    padding: 0;
                }
                ul, ol {
                    margin: 1em 0;
                    padding-left: 2em;
                }
                @media print {
                    body { font-size: 12pt; }
                    h1 { font-size: 18pt; }
                    h2 { font-size: 14pt; }
                    h3 { font-size: 12pt; }
                }
            </style>
        </head>
        <body>
            ${viewerContent.innerHTML}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Wait for content to load, then print
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// ===================================
//   Export Functions
// ===================================

window.loadDocument = loadDocument;
window.closeDocumentViewer = closeDocumentViewer;
window.printDocument = printDocument;
