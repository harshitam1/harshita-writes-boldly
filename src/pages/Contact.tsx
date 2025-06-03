
import { Mail, Instagram, Twitter, Github, Heart, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@honestlyharshita.com',
      description: 'Drop me a line',
      color: 'bg-coral-500 hover:bg-coral-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      description: '@honestlyharshita',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      description: '@honestlyharshita',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      description: 'See my code',
      color: 'bg-gray-800 hover:bg-gray-900'
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
              <span className="text-gradient">Let's</span> Connect
            </h1>
            <p className="text-xl text-gray-600">
              I'd love to hear from you!
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow mb-12">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">
                Say Hello!
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Whether you want to share your thoughts on a post, collaborate on something fun, 
                or just say hi - I'm always excited to connect with fellow humans navigating this 
                beautiful mess we call life.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`${link.color} text-white rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-8 h-8" />
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">
                        {link.name}
                      </h3>
                      <p className="opacity-90">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-coral-50 rounded-2xl p-6">
              <h3 className="font-poppins font-semibold text-xl text-coral-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                A Few Things to Know
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>• I read every message (though it might take me a few days to respond)</p>
                <p>• I love hearing about your own experiences and stories</p>
                <p>• Book recommendations are always welcome</p>
                <p>• Coffee shop suggestions if you're ever in my city</p>
                <p>• Constructive feedback helps me grow as a writer</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center bg-gradient-to-r from-coral-500 to-coral-600 rounded-2xl p-8 text-white">
            <blockquote className="font-poppins text-2xl md:text-3xl font-semibold mb-4">
              "Connection is why we're here; it is what gives purpose and meaning to our lives."
            </blockquote>
            <cite className="text-coral-100">— Brené Brown</cite>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
