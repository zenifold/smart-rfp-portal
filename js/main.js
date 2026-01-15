// ===================================
   SMART RFP Portal - Main JavaScript
   ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('SMART RFP Portal initialized');
    
    try {
        // Initialize all features
        initSmoothScroll();
        initMobileMenu();
        initFormValidation();
        initCountdown();
    } catch (error) {
        console.error('Error initializing portal features:', error);
    }
});

// ===================================
   Smooth Scroll
   ===================================

function initSmoothScroll() {
    try {
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
    } catch (error) {
        console.error('Error initializing smooth scroll:', error);
    }
}

// ===================================
   Mobile Menu (for future enhancement)
   ===================================

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// ===================================
   Form Validation
   ===================================

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validate email format
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                if (field.value && !isValidEmail(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields correctly.');
            }
        });
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
   Countdown Timer (for deadline)
   ===================================

function initCountdown() {
    try {
        const deadline = new Date('2026-02-13T15:00:00-05:00');
        const countdownElement = document.getElementById('countdown');
        
        if (!countdownElement) return;
        
        function updateCountdown() {
            const now = new Date();
            const diff = deadline - now;
            
            if (diff <= 0) {
                countdownElement.innerHTML = '<span class="countdown-over">DEADLINE PASSED</span>';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-value">${days}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${hours}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${minutes}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${seconds}</span>
                    <span class="countdown-label">Seconds</span>
                </div>
            `;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    } catch (error) {
        console.error('Error initializing countdown:', error);
    }
}

// ===================================
   Progress Bar Animation
   ===================================

function animateProgressBars() {
    try {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const target = bar.getAttribute('data-progress');
            if (target) {
                bar.style.width = target + '%';
            }
        });
    } catch (error) {
        console.error('Error animating progress bars:', error);
    }
}

// ===================================
   Copy to Clipboard
   ===================================

function copyToClipboard(text) {
    if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('Failed to copy to clipboard');
    });
}

// ===================================
   Notification Toast
   ===================================

function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// ===================================
   Tab Switching (for document viewer)
   ===================================

function initTabs() {
    try {
        const tabs = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        if (tabs.length === 0 || tabContents.length === 0) return;
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and target content
                tab.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    } catch (error) {
        console.error('Error initializing tabs:', error);
    }
}

// ===================================
   Accordion (for FAQ or details)
   ===================================

function initAccordion() {
    try {
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        if (accordionItems.length === 0) return;
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            if (header && content) {
                header.addEventListener('click', () => {
                    const isOpen = item.classList.contains('open');
                    
                    // Close all items
                    accordionItems.forEach(i => {
                        i.classList.remove('open');
                        const content = i.querySelector('.accordion-content');
                        if (content) {
                            content.style.maxHeight = '0';
                        }
                    });
                    
                    // Open clicked item if it was closed
                    if (!isOpen) {
                        item.classList.add('open');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            }
        });
    } catch (error) {
        console.error('Error initializing accordion:', error);
    }
}

// ===================================
   Modal Functions
   ===================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===================================
   Local Storage Helpers (for task tracking)
   ===================================

function saveTasks(tasks) {
    try {
        localStorage.setItem('smartRfpTasks', JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks:', error);
    }
}

function loadTasks() {
    try {
        const saved = localStorage.getItem('smartRfpTasks');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading tasks:', error);
        return [];
    }
}

function updateTaskStatus(taskId, status) {
    try {
        const tasks = loadTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = status;
            saveTasks(tasks);
        }
    } catch (error) {
        console.error('Error updating task status:', error);
    }
}

// ===================================
   Export Functions
   ===================================

window.SmartRFP = {
    copyToClipboard,
    showNotification,
    openModal,
    closeModal,
    saveTasks,
    loadTasks,
    updateTaskStatus,
    animateProgressBars,
    initTabs,
    initAccordion
};
