
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

                    <!-- Fun Facts -->
                    <div class="grid md:grid-cols-2 gap-6 mt-12">
                        <div class="bg-navy-50 rounded-2xl p-6">
                            <h3 class="font-serif font-semibold text-xl text-navy-800 mb-4">
                                Things That Fuel Me
                            </h3>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="text-gray-700">Way too much coffee</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    <span class="text-gray-700">Books that make me cry</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="text-gray-700">Capturing random moments</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                                    </svg>
                                    <span class="text-gray-700">Playlists for every mood</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 rounded-2xl p-6">
                            <h3 class="font-serif font-semibold text-xl text-gray-800 mb-4">
                                Currently Learning
                            </h3>
                            <div class="space-y-2 text-gray-700">
                                <p>• How to say no without feeling guilty</p>
                                <p>• That it's okay to change your mind</p>
                                <p>• The art of being present</p>
                                <p>• That growth isn't always comfortable</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quote -->
                <div class="text-center bg-navy-600 rounded-2xl p-8 text-white" style="background: linear-gradient(to right, #4c63d2, #2d3373);">
                    <blockquote class="font-serif text-2xl md:text-3xl font-semibold mb-4">
                        "The most authentic thing about us is our capacity to create, to overcome, 
                        to endure, to transform, to love and to be greater than our suffering."
                    </blockquote>
                    <cite class="text-navy-200">— Ben Okri</cite>
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
            router.navigate('/journal');
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

                        <h1 class="font-serif font-bold text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
                            ${post.title}
                        </h1>

                        <div class="flex flex-wrap items-center gap-3">
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
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
                        <div class="flex justify-center mb-6">
                            <div class="w-20 h-20 bg-navy-600 rounded-full flex items-center justify-center" style="background: linear-gradient(to bottom right, #4c63d2, #2d3373);">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                            </div>
                        </div>
                        
                        <h2 class="font-serif font-bold text-3xl text-gray-800 mb-4">
                            Say Hello!
                        </h2>
                        
                        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Whether you want to share your thoughts on a post, collaborate on something fun, 
                            or just say hi - I'm always excited to connect with fellow humans navigating this 
                            beautiful mess we call life.
                        </p>
                    </div>

                    <!-- Social Links -->
                    <div class="grid md:grid-cols-2 gap-6 mb-12">
                        <a href="mailto:hello@honestlyharshita.com" class="bg-navy-600 hover:bg-navy-700 text-white rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in">
                            <div class="flex items-center gap-4">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <div>
                                    <h3 class="font-serif font-semibold text-lg">Email</h3>
                                    <p class="opacity-90">Drop me a line</p>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="text-white rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in" style="background: linear-gradient(to right, #8b5cf6, #ec4899); animation-delay: 0.1s">
                            <div class="flex items-center gap-4">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 6.5l-1 1-8-8 1-1c1-1 3-1 4 0l3 3c1 1 1 3 0 4zM3 21l9-9m6-6l-6 6"></path>
                                </svg>
                                <div>
                                    <h3 class="font-serif font-semibold text-lg">Instagram</h3>
                                    <p class="opacity-90">@honestlyharshita</p>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in" style="animation-delay: 0.2s">
                            <div class="flex items-center gap-4">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <div>
                                    <h3 class="font-serif font-semibold text-lg">Twitter</h3>
                                    <p class="opacity-90">@honestlyharshita</p>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="bg-gray-800 hover:bg-gray-900 text-white rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in" style="animation-delay: 0.3s">
                            <div class="flex items-center gap-4">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                <div>
                                    <h3 class="font-serif font-semibold text-lg">GitHub</h3>
                                    <p class="opacity-90">See my code</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- Additional Info -->
                    <div class="bg-navy-50 rounded-2xl p-6">
                        <h3 class="font-serif font-semibold text-xl text-navy-800 mb-4">
                            A Few Things to Know
                        </h3>
                        <div class="space-y-3 text-gray-700">
                            <p>• I read every message (though it might take me a few days to respond)</p>
                            <p>• I love hearing about your own experiences and stories</p>
                            <p>• Book recommendations are always welcome</p>
                            <p>• Coffee shop suggestions if you're ever in my city</p>
                            <p>• Constructive feedback helps me grow as a writer</p>
                        </div>
                    </div>
                </div>

                <!-- Quote -->
                <div class="text-center bg-navy-600 rounded-2xl p-8 text-white" style="background: linear-gradient(to right, #4c63d2, #2d3373);">
                    <blockquote class="font-serif text-2xl md:text-3xl font-semibold mb-4">
                        "Connection is why we're here; it is what gives purpose and meaning to our lives."
                    </blockquote>
                    <cite class="text-navy-200">— Brené Brown</cite>
                </div>
            </div>
        </div>
    `
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Set up routes
    router.addRoute('/', () => {
        document.getElementById('main-content').innerHTML = pages.home();
    });

    router.addRoute('/about', () => {
        document.getElementById('main-content').innerHTML = pages.about();
    });

    router.addRoute('/journal', () => {
        document.getElementById('main-content').innerHTML = pages.journal();
    });

    router.addRoute('/journal/:id', (params) => {
        document.getElementById('main-content').innerHTML = pages.blogPost(params);
    });

    router.addRoute('/categories', () => {
        document.getElementById('main-content').innerHTML = pages.categories();
    });

    router.addRoute('/contact', () => {
        document.getElementById('main-content').innerHTML = pages.contact();
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('mobile-nav-link')) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Start the router
    router.handleRoute();
});
