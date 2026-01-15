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
    const taskItems = document.querySelectorAll('.task-item.task-pending');
    
    taskItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
            
            // Show task details modal (future enhancement)
            showTaskDetails(this);
        });
    });
}

function showTaskDetails(taskItem) {
    const title = taskItem.querySelector('h4').textContent;
    const description = taskItem.querySelector('p').textContent;
    const deadline = taskItem.querySelector('.deadline').textContent;
    const priority = taskItem.querySelector('.priority-badge').textContent;
    
    // For now, just show a notification
    SmartRFP.showNotification(`Task: ${title} - ${deadline}`);
    
    // In future, this could open a modal with full details
    // and allow marking as complete
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
    const completedTasks = 11; // Maximilian's completed tasks
    const yourPendingTasks = 14; // Partner's pending tasks
    const completedPartnerTasks = 0; // Tasks partner has completed
    
    const totalCompleted = completedTasks + completedPartnerTasks;
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
        completedTasksElement.textContent = totalCompleted;
    }
    
    const pendingTasksElement = document.getElementById('pending-tasks');
    if (pendingTasksElement) {
        pendingTasksElement.textContent = yourPendingTasks - completedPartnerTasks;
    }
}

// ===================================
//   Export Functions
// ===================================

window.loadDocument = loadDocument;
window.closeDocumentViewer = closeDocumentViewer;
window.markTaskComplete = markTaskComplete;
