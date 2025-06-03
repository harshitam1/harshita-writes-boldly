
import { Link } from "react-router-dom";
import { Home, Heart } from "lucide-react";
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="font-poppins font-bold text-6xl md:text-8xl text-gray-300 mb-4">
            404
          </h1>
          
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Oops! Page not found
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Looks like this page got lost in the internet void. 
            Let's get you back to somewhere familiar.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-coral-500 text-white font-semibold rounded-full hover:bg-coral-600 transition-all duration-200 hover-lift card-shadow"
          >
            <Home className="w-5 h-5 mr-2" />
            Take me home
          </Link>
          
          <div className="mt-8">
            <p className="text-gray-500 mb-4">Or check out these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/journal" className="text-coral-600 hover:text-coral-700 font-medium">
                Journal
              </Link>
              <Link to="/about" className="text-coral-600 hover:text-coral-700 font-medium">
                About Me
              </Link>
              <Link to="/contact" className="text-coral-600 hover:text-coral-700 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
