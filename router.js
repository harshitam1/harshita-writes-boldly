
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }
    
    addRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const [path, ...paramParts] = hash.split('/');
        const params = {};
        
        // Handle parameterized routes like /journal/:id
        let matchedRoute = null;
        let matchedPath = null;
        
        for (const routePath in this.routes) {
            if (routePath === hash) {
                matchedRoute = this.routes[routePath];
                matchedPath = routePath;
                break;
            }
            
            // Check for parameterized routes
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
        
        if (matchedRoute) {
            this.currentRoute = matchedPath;
            matchedRoute(params);
            this.updateNavigation(hash);
        } else {
            // 404 - redirect to not found or home
            window.location.hash = '/';
        }
    }
    
    updateNavigation(currentPath) {
        // Update navigation active states
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').slice(1); // Remove #
            if (href === currentPath || (href === '/' && currentPath === '')) {
                link.classList.add('active');
            }
        });
    }
    
    navigate(path) {
        window.location.hash = path;
    }
}

const router = new Router();
