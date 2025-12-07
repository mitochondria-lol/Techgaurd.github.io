const newsData = [
    {
        id: 1,
        title: "New Zero-Day Vulnerability Affects Major Web Browsers",
        excerpt: "Security researchers have discovered a critical zero-day vulnerability affecting all major web browsers...",
        category: "Cybersecurity",
        date: "May 15, 2023",
        readTime: "4 min read",
        image: "https://source.unsplash.com/random/600x400/?cybersecurity"
    },
    {
        id: 2,
        title: "The Future of AI: What to Expect in 2024",
        excerpt: "As artificial intelligence continues to evolve, experts predict several groundbreaking developments in the coming year...",
        category: "AI & ML",
        date: "May 14, 2023",
        readTime: "6 min read",
        image: "https://source.unsplash.com/random/600x400/?ai"
    },
    {
        id: 3,
        title: "How to Protect Your Business from Ransomware Attacks",
        excerpt: "With ransomware attacks on the rise, businesses need to implement robust security measures to protect their data...",
        category: "Security",
        date: "May 13, 2023",
        readTime: "5 min read",
        image: "https://source.unsplash.com/random/600x400/?security"
    },
    {
        id: 4,
        title: "The Impact of Quantum Computing on Cryptography",
        excerpt: "Quantum computing poses both opportunities and challenges for modern cryptographic systems...",
        category: "Technology",
        date: "May 12, 2023",
        readTime: "7 min read",
        image: "https://source.unsplash.com/random/600x400/?quantum"
    },
    {
        id: 5,
        title: "New Privacy Laws Coming into Effect in 2024",
        excerpt: "Several countries are introducing new privacy regulations that will affect how companies handle user data...",
        category: "Privacy",
        date: "May 11, 2023",
        readTime: "4 min read",
        image: "https://source.unsplash.com/random/600x400/?privacy"
    },
    {
        id: 6,
        title: "The Rise of AI-Powered Cybersecurity Solutions",
        excerpt: "Artificial intelligence is revolutionizing the way organizations detect and respond to cyber threats...",
        category: "AI & ML",
        date: "May 10, 2023",
        readTime: "5 min read",
        image: "https://source.unsplash.com/random/600x400/?ai-security"
    }
];

// DOM Elements
const newsContainer = document.getElementById('newsContainer');
const themeToggle = document.getElementById('themeToggle');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load news articles
    renderNews();
    
    // Set theme from localStorage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Add event listeners
    themeToggle.addEventListener('click', toggleTheme);
    loginBtn.addEventListener('click', () => showModal('login'));
    signupBtn.addEventListener('click', () => showModal('signup'));

    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
});

// Render news articles
function renderNews() {
    if (!newsContainer) return;
    
    newsContainer.innerHTML = newsData.map(article => `
        <div class="news-card">
            <img src="${article.image}" alt="${article.title}" class="card-image">
            <div class="card-content">
                <span class="card-category">${article.category}</span>
                <h3 class="card-title">${article.title}</h3>
                <p class="card-excerpt">${article.excerpt}</p>
                <div class="card-meta">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle between light and dark theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Show modal for login/signup
function showModal(type) {
    // In a real application, this would show a modal
    alert(`${type === 'login' ? 'Login' : 'Sign Up'} functionality would be implemented here.`);
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a link to a section that doesn't exist
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to fetch more news (can be used with an API in the future)
async function fetchMoreNews(page = 1, limit = 6) {
    try {
        // In a real application, this would be an API call
        // const response = await fetch(`/api/news?page=${page}&limit=${limit}`);
        // const data = await response.json();
        // return data;
        
        // For now, we'll return a portion of our sample data
        const start = (page - 1) * limit;
        const end = start + limit;
        return newsData.slice(start, end);
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

// Function to handle infinite scroll (can be implemented if needed)
function setupInfiniteScroll() {
    // This would be implemented to load more news when user scrolls to bottom
    // window.addEventListener('scroll', () => {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
    //         // Load more content
    //     }
    // });
}

// Function to handle search functionality
function setupSearch() {
    // This would be implemented to filter news based on search input
    // const searchInput = document.getElementById('searchInput');
    // if (searchInput) {
    //     searchInput.addEventListener('input', (e) => {
    //         const searchTerm = e.target.value.toLowerCase();
    //         const filteredNews = newsData.filter(article => 
    //             article.title.toLowerCase().includes(searchTerm) || 
    //             article.excerpt.toLowerCase().includes(searchTerm)
    //         );
    //         renderNews(filteredNews);
    //     });
    // }
}

// Initialize additional functionality when the window loads
window.addEventListener('load', () => {
    setupInfiniteScroll();
    setupSearch();
});