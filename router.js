
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => {
            console.log('Hash changed:', window.location.hash);
            this.handleRoute();
        });
        
        window.addEventListener('load', () => {
            console.log('Window loaded, handling route:', window.location.hash);
            this.handleRoute();
        });
    }
    
    addRoute(path, handler) {
        console.log('Adding route:', path);
        this.routes[path] = handler;
    }
    
    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        console.log('Handling route:', hash);
        
        const [path, ...paramParts] = hash.split('/');
        const params = {};
        
        // Handle parameterized routes like /journal/:id
        let matchedRoute = null;
        let matchedPath = null;
        
        // First check for exact match
        if (this.routes[hash]) {
            matchedRoute = this.routes[hash];
            matchedPath = hash;
        } else {
            // Check for parameterized routes
            for (const routePath in this.routes) {
                const routeParts = routePath.split('/');
                const hashParts = hash.split('/');
                
                if (routeParts.length === hashParts.length) {
                    let isMatch = true;
                    for (let i = 0; i < routeParts.length; i++) {
                        if (routeParts[i].startsWith(':')) {
                            params[routeParts[i].slice(1)] = hashParts[i];
                        } else if (routeParts[i] !== hashParts[i]) {
                            isMatch = false;
                            break;
                        }
                    }
                    
                    if (isMatch) {
                        matchedRoute = this.routes[routePath];
                        matchedPath = routePath;
                        break;
                    }
                }
            }
        }
        
        if (matchedRoute) {
            console.log('Route matched:', matchedPath, 'params:', params);
            this.currentRoute = matchedPath;
            try {
                matchedRoute(params);
                this.updateNavigation(hash);
            } catch (error) {
                console.error('Error executing route handler:', error);
            }
        } else {
            console.log('No route matched, redirecting to home');
            // 404 - redirect to home
            window.location.hash = '/';
        }
    }
    
    updateNavigation(currentPath) {
        // Update navigation active states
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href) {
                const linkPath = href.slice(1); // Remove #
                if (linkPath === currentPath || (linkPath === '/' && currentPath === '')) {
                    link.classList.add('active');
                }
            }
        });
    }
    
    navigate(path) {
        window.location.hash = path;
    }
}

const router = new Router();
