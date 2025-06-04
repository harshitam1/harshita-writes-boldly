
// Page Components
const pages = {
    home: () => `
        <!-- Hero Section -->
        <section class="py-24 relative">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="animate-fade-in">
                    <h1 class="font-serif text-6xl md:text-7xl font-bold text-navy-800 mb-6">
                        honestly, harshita
                    </h1>
                    
                    <p class="text-xl md:text-2xl font-body text-navy-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                        welcome to my corner of the internet where i share thoughts, stories, and the messy journey of figuring life out
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="#/journal" class="btn btn-primary">
                            Read My Journal
                            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <a href="#/about" class="btn btn-secondary">
                            Get to Know Me
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Latest Posts Section -->
        <section class="py-20 relative">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="font-serif text-4xl md:text-5xl font-bold text-navy-800 mb-4">
                        Latest Thoughts
                    </h2>
                    <p class="text-lg text-navy-600 font-body">fresh from my journal</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="latest-posts">
                    ${blogPosts.slice(0, 3).map((post, index) => `
                        <article class="scrapbook-card animate-fade-in hover-lift" style="animation-delay: ${index * 0.2}s">
                            <div class="flex items-center gap-2 text-sm text-navy-600 mb-4 font-sans">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>${post.readTime} min read</span>
                                <span>•</span>
                                <span>${new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric'
                                })}</span>
                            </div>
                            
                            <h3 class="font-serif text-2xl font-bold text-navy-800 mb-4 leading-tight">
                                ${post.title}
                            </h3>
                            
                            <p class="text-navy-700 mb-6 leading-relaxed font-body">
                                ${post.excerpt}
                            </p>
                            
                            <div class="flex flex-wrap gap-2 mb-6">
                                ${post.categories.slice(0, 2).map(category => `
                                    <span class="px-3 py-1 bg-cream-200 text-navy-700 text-sm rounded-lg font-sans border border-navy-200">
                                        ${category}
                                    </span>
                                `).join('')}
                            </div>
                            
                            <a href="#/journal/${post.id}" class="inline-flex items-center text-navy-600 font-sans font-medium hover:text-navy-800 transition-all duration-300">
                                Read more
                                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </article>
                    `).join('')}
                </div>

                <div class="text-center mt-16">
                    <a href="#/journal" class="inline-flex items-center px-6 py-3 text-navy-600 font-sans font-medium hover:text-navy-800 transition-colors bg-cream-100 rounded-lg hover:bg-cream-200">
                        View All Posts
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    `,

    about: () => `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="text-center mb-16">
                    <h1 class="font-serif font-bold text-5xl md:text-6xl mb-6">
                        <span class="text-gradient">About</span> Me
                    </h1>
                    <p class="text-xl text-gray-600">the person behind the stories</p>
                </div>

                <!-- Main Content -->
                <div class="bg-white rounded-3xl p-8 md:p-12 card-shadow mb-12">
                    <div class="prose max-w-none">
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Hi there! I'm Harshita, and I'm honestly just figuring life out one day at a time. 
                            This blog is my way of processing thoughts, sharing stories, and connecting with others 
                            who are also navigating the beautiful chaos of existence.
                        </p>

                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            I believe in the power of honest storytelling, the magic of unexpected conversations, 
                            and the importance of taking up space unapologetically. You'll find me writing about 
                            everything from late-night revelations to coffee shop observations, personal growth 
                            struggles to tiny moments of joy.
                        </p>

                        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                            This space is for anyone who's ever felt like they're still figuring things out 
                            (spoiler alert: we all are). Welcome to my corner of the internet where vulnerability 
                            is celebrated and authenticity is the only requirement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,

    journal: () => `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="text-center mb-16">
                    <h1 class="font-serif font-bold text-5xl md:text-6xl mb-6">
                        <span class="text-gradient">My</span> Journal
                    </h1>
                    <p class="text-xl text-gray-600">thoughts, stories, and life lessons</p>
                </div>

                <!-- Posts Grid -->
                <div class="grid md:grid-cols-2 gap-8" id="journal-posts">
                    ${blogPosts.map((post, index) => `
                        <article class="scrapbook-card animate-fade-in hover-lift" style="animation-delay: ${index * 0.1}s">
                            <div class="flex items-center gap-2 text-sm text-navy-600 mb-4 font-sans">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span>${new Date(post.date).toLocaleDateString('en-US', { 
                                    year: 'numeric',
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</span>
                                <span>•</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>${post.readTime} min read</span>
                            </div>
                            
                            <h2 class="font-serif text-2xl font-bold text-navy-800 mb-4 leading-tight">
                                ${post.title}
                            </h2>
                            
                            <p class="text-gray-700 mb-6 leading-relaxed font-body">
                                ${post.excerpt}
                            </p>
                            
                            <div class="flex flex-wrap gap-2 mb-6">
                                ${post.categories.map(category => `
                                    <span class="px-3 py-1 bg-cream-200 text-navy-700 text-sm rounded-lg font-sans border border-navy-200">
                                        ${category}
                                    </span>
                                `).join('')}
                            </div>
                            
                            <a href="#/journal/${post.id}" class="inline-flex items-center text-navy-600 font-sans font-medium hover:text-navy-800 transition-all duration-300">
                                Read full post
                                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </article>
                    `).join('')}
                </div>
            </div>
        </div>
    `,

    blogPost: (params) => {
        const post = blogPosts.find(p => p.id === params.id);
        if (!post) {
            window.location.hash = '/journal';
            return '';
        }

        return `
            <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="animate-fade-in">
                    <!-- Back Link -->
                    <a href="#/journal" class="inline-flex items-center text-navy-600 hover:text-navy-700 transition-colors mb-8">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back to Journal
                    </a>

                    <!-- Header -->
                    <header class="mb-12">
                        <h1 class="font-serif font-bold text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
                            ${post.title}
                        </h1>

                        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span>${new Date(post.date).toLocaleDateString('en-US', { 
                                    year: 'numeric',
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>${post.readTime} min read</span>
                            </div>
                        </div>

                        <div class="flex flex-wrap items-center gap-3">
                            ${post.categories.map(category => `
                                <span class="px-3 py-1 text-sm rounded-lg bg-cream-200 text-navy-700 border border-navy-200">
                                    ${category}
                                </span>
                            `).join('')}
                        </div>
                    </header>

                    <!-- Content -->
                    <div class="bg-white rounded-3xl p-8 md:p-12 card-shadow">
                        <div class="prose max-w-none">
                            ${post.content.split('\n\n').map(paragraph => `
                                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                    ${paragraph}
                                </p>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div class="mt-12 flex justify-between items-center">
                        <a href="#/journal" class="btn btn-primary">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Back to Journal
                        </a>
                        
                        <a href="#/contact" class="text-navy-600 hover:text-navy-700 font-semibold transition-colors">
                            Share your thoughts →
                        </a>
                    </div>
                </div>
            </article>
        `;
    },

    categories: () => `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="animate-fade-in">
                <div class="text-center mb-16">
                    <h1 class="font-serif font-bold text-5xl md:text-6xl mb-6">
                        <span class="text-gradient">Categories</span>
                    </h1>
                    <p class="text-xl text-gray-600">explore by topic</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    ${categories.map((category, index) => `
                        <div class="scrapbook-card animate-fade-in" style="animation-delay: ${index * 0.1}s">
                            <h3 class="font-serif text-xl font-semibold text-navy-800 mb-2">${category.name}</h3>
                            <p class="text-gray-600 mb-4">${category.count} ${category.count === 1 ? 'post' : 'posts'}</p>
                            <a href="#/journal" class="text-navy-600 hover:text-navy-700 font-medium">
                                View posts →
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `,

    contact: () => `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="text-center mb-16">
                    <h1 class="font-serif font-bold text-5xl md:text-6xl mb-6">
                        <span class="text-gradient">Let's</span> Connect
                    </h1>
                    <p class="text-xl text-gray-600">
                        I'd love to hear from you!
                    </p>
                </div>

                <!-- Main Content -->
                <div class="bg-white rounded-3xl p-8 md:p-12 card-shadow mb-12">
                    <div class="text-center mb-12">
                        <h2 class="font-serif font-bold text-3xl text-gray-800 mb-4">
                            Say Hello!
                        </h2>
                        
                        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Whether you want to share your thoughts on a post, collaborate on something fun, 
                            or just say hi - I'm always excited to connect with fellow humans navigating this 
                            beautiful mess we call life.
                        </p>
                    </div>

                    <!-- Contact Info -->
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-navy-600 text-white rounded-2xl p-6">
                            <h3 class="font-serif font-semibold text-lg mb-2">Email</h3>
                            <p class="opacity-90">hello@honestlyharshita.com</p>
                        </div>

                        <div class="bg-gray-800 text-white rounded-2xl p-6">
                            <h3 class="font-serif font-semibold text-lg mb-2">Social</h3>
                            <p class="opacity-90">@honestlyharshita</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    
    // Get the main content element
    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
        console.error('Main content element not found!');
        return;
    }

    // Set up routes
    router.addRoute('/', () => {
        console.log('Loading home page...');
        mainContent.innerHTML = pages.home();
    });

    router.addRoute('/about', () => {
        console.log('Loading about page...');
        mainContent.innerHTML = pages.about();
    });

    router.addRoute('/journal', () => {
        console.log('Loading journal page...');
        mainContent.innerHTML = pages.journal();
    });

    router.addRoute('/journal/:id', (params) => {
        console.log('Loading blog post...', params);
        mainContent.innerHTML = pages.blogPost(params);
    });

    router.addRoute('/categories', () => {
        console.log('Loading categories page...');
        mainContent.innerHTML = pages.categories();
    });

    router.addRoute('/contact', () => {
        console.log('Loading contact page...');
        mainContent.innerHTML = pages.contact();
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on links
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('mobile-nav-link')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Start the router
    console.log('Starting router...');
    router.handleRoute();
});
