// ===================================
//   Partner Dashboard - Specific JavaScript
//   ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Partner Dashboard initialized');
    
    // Initialize partner-specific features
    initDocumentLoader();
    initTaskInteractions();
    initProgressTracking();
});

// ===================================
//   Document Loader (Markdown Auto-Update)
// ===================================

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
    
    // Show loading state
    viewer.classList.add('active');
    contentElement.innerHTML = '<div class="loading">Loading document...</div>';
    
    try {
        // Fetch markdown file
        const response = await fetch(documentPaths[docKey]);
        
        if (!response.ok) {
            throw new Error(`Failed to load ${documentPaths[docKey]}`);
        }
        
        const markdownText = await response.text();
        
        // Convert markdown to HTML using marked.js
        const htmlContent = marked.parse(markdownText);
        
        // Update modal
        titleElement.textContent = getDocumentTitle(docKey);
        contentElement.innerHTML = htmlContent;
        
        // Add table of contents if needed
        addTableOfContents(contentElement);
        
    } catch (error) {
        console.error('Error loading document:', error);
        contentElement.innerHTML = `
            <div class="error-message">
                <h3>Unable to Load Document</h3>
                <p>${error.message}</p>
                <p>Please ensure the markdown files are in the correct directory.</p>
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
    viewer.classList.remove('active');
    document.body.style.overflow = '';
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
//   Task Interactions
// ===================================

function initTaskInteractions() {
    // Load saved task completion status from localStorage
    loadTaskCompletion();
    
    // Add click handlers to partner tasks
    const partnerTasks = document.querySelectorAll('.task-item.clickable');
    
    partnerTasks.forEach(taskItem => {
        taskItem.addEventListener('click', function() {
            toggleTaskCompletion(this);
        });
    });
    
    // Initialize filter buttons
    initTaskFilters();
    
    // Initialize "Mark All Complete" button
    initMarkAllComplete();
    
    // Update progress display
    updateProgressDisplay();
}

function toggleTaskCompletion(taskItem) {
    const taskId = taskItem.getAttribute('data-task');
    
    // Toggle completed class
    if (taskItem.classList.contains('completed')) {
        taskItem.classList.remove('completed');
        taskItem.classList.add('uncompleting');
        
        setTimeout(() => {
            taskItem.classList.remove('uncompleting');
            updateTaskIcon(taskItem, false);
        }, 500);
        
        // Remove from localStorage
        removeCompletedTask(taskId);
    } else {
        taskItem.classList.add('completed');
        taskItem.classList.add('completing');
        
        setTimeout(() => {
            taskItem.classList.remove('completing');
            updateTaskIcon(taskItem, true);
        }, 500);
        
        // Save to localStorage
        saveCompletedTask(taskId);
    }
    
    // Update progress display
    updateProgressDisplay();
    
    // Update partner task count
    updatePartnerTaskCount();
}

function updateTaskIcon(taskItem, isComplete) {
    const checkbox = taskItem.querySelector('.task-checkbox');
    if (checkbox) {
        checkbox.className = isComplete ? 'fas fa-check-circle task-checkbox' : 'fas fa-circle task-checkbox';
    }
}

function saveCompletedTask(taskId) {
    let completedTasks = JSON.parse(localStorage.getItem('partnerCompletedTasks') || '[]');
    
    if (!completedTasks.includes(taskId)) {
        completedTasks.push(taskId);
        localStorage.setItem('partnerCompletedTasks', JSON.stringify(completedTasks));
    }
}

function removeCompletedTask(taskId) {
    let completedTasks = JSON.parse(localStorage.getItem('partnerCompletedTasks') || '[]');
    completedTasks = completedTasks.filter(id => id !== taskId);
    localStorage.setItem('partnerCompletedTasks', JSON.stringify(completedTasks));
}

function loadTaskCompletion() {
    const completedTasks = JSON.parse(localStorage.getItem('partnerCompletedTasks') || '[]');
    
    completedTasks.forEach(taskId => {
        const taskItem = document.querySelector(`[data-task="${taskId}"]`);
        if (taskItem) {
            taskItem.classList.add('completed');
            updateTaskIcon(taskItem, true);
        }
    });
}

function initTaskFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter tasks
            const filter = this.getAttribute('data-filter');
            filterTasks(filter);
        });
    });
}

function filterTasks(filter) {
    const partnerTasks = document.querySelectorAll('#partner-task-list .task-item');
    
    partnerTasks.forEach(task => {
        let isVisible = true;
        
        switch(filter) {
            case 'pending':
                isVisible = !task.classList.contains('completed');
                break;
            case 'completed':
                isVisible = task.classList.contains('completed');
                break;
            case 'high':
                isVisible = task.classList.contains('high-priority');
                break;
            case 'all':
            default:
                isVisible = true;
        }
        
        task.style.display = isVisible ? 'flex' : 'none';
    });
}

function initMarkAllComplete() {
    const markAllButton = document.getElementById('mark-all-complete');
    
    if (markAllButton) {
        markAllButton.addEventListener('click', function() {
            const pendingTasks = document.querySelectorAll('#partner-task-list .task-item:not(.completed)');
            
            if (pendingTasks.length === 0) {
                SmartRFP.showNotification('All tasks already completed!');
                return;
            }
            
            if (confirm(`Mark all ${pendingTasks.length} pending tasks as complete?`)) {
                pendingTasks.forEach(task => {
                    if (!task.classList.contains('completed')) {
                        toggleTaskCompletion(task);
                    }
                });
                
                SmartRFP.showNotification(`Completed ${pendingTasks.length} tasks!`);
            }
        });
    }
}

function updatePartnerTaskCount() {
    const totalPartnerTasks = document.querySelectorAll('#partner-task-list .task-item').length;
    const completedPartnerTasks = document.querySelectorAll('#partner-task-list .task-item.completed').length;
    const countElement = document.getElementById('partner-progress');
    
    if (countElement) {
        countElement.textContent = `${completedPartnerTasks}/${totalPartnerTasks}`;
    }
}

function markTaskComplete(taskId) {
    // This would update localStorage and UI
    const tasks = SmartRFP.loadTasks();
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.status = 'completed';
        SmartRFP.saveTasks(tasks);
        updateTaskUI(taskId, 'completed');
    }
}

function updateTaskUI(taskId, status) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.classList.remove('task-pending', 'task-completed');
        taskElement.classList.add(`task-${status}`);
    }
}

// ===================================
//   Progress Tracking
// ===================================

function initProgressTracking() {
    updateProgressDisplay();
    
    // Listen for task completion events
    window.addEventListener('taskCompleted', updateProgressDisplay);
}

function updateProgressDisplay() {
    const totalTasks = 25; // Total tasks (completed + pending)
    const completedMaxTasks = 14; // Maximilian's completed tasks
    const totalPartnerTasks = 8; // Partner's total tasks
    
    // Get completed partner tasks from localStorage
    const completedTasksData = JSON.parse(localStorage.getItem('partnerCompletedTasks') || '[]');
    const completedPartnerTasks = completedTasksData.length;
    
    const totalCompleted = completedMaxTasks + completedPartnerTasks;
    const progressPercentage = Math.round((totalCompleted / totalTasks) * 100);
    
    // Update progress ring
    const progressCircle = document.querySelector('.progress-ring-circle');
    if (progressCircle) {
        progressCircle.style.strokeDasharray = `${progressPercentage}, 100`;
    }
    
    // Update progress text
    const progressValue = document.querySelector('.progress-value');
    if (progressValue) {
        progressValue.textContent = `${progressPercentage}%`;
    }
    
    // Update stats
    const completedTasksElement = document.getElementById('completed-tasks');
    if (completedTasksElement) {
        completedTasksElement.textContent = completedMaxTasks;
    }
    
    const pendingTasksElement = document.getElementById('pending-tasks');
    if (pendingTasksElement) {
        pendingTasksElement.textContent = totalPartnerTasks - completedPartnerTasks;
    }
    
    // Update "Your Completed" stat
    const yourCompletedElement = document.getElementById('your-completed');
    if (yourCompletedElement) {
        yourCompletedElement.textContent = completedPartnerTasks;
    }
}

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
}

// ===================================
//   Export Functions
// ===================================

window.loadDocument = loadDocument;
window.closeDocumentViewer = closeDocumentViewer;
window.markTaskComplete = markTaskComplete;
window.printDocument = printDocument;
