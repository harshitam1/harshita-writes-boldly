
import { Coffee, BookOpen, Camera, Music } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-grotesk font-bold text-5xl md:text-6xl mb-6">
              <span className="text-gradient">About</span> Me
            </h1>
            <p className="text-xl text-gray-600">
              The person behind the stories
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hi there! I'm Harshita, and I'm honestly just figuring life out one day at a time. 
                This blog is my way of processing thoughts, sharing stories, and connecting with others 
                who are also navigating the beautiful chaos of existence.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I believe in the power of honest storytelling, the magic of unexpected conversations, 
                and the importance of taking up space unapologetically. You'll find me writing about 
                everything from late-night revelations to coffee shop observations, personal growth 
                struggles to tiny moments of joy.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This space is for anyone who's ever felt like they're still figuring things out 
                (spoiler alert: we all are). Welcome to my corner of the internet where vulnerability 
                is celebrated and authenticity is the only requirement.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-navy-50 rounded-2xl p-6">
                <h3 className="font-grotesk font-semibold text-xl text-navy-800 mb-4">
                  Things That Fuel Me
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-navy-600" />
                    <span className="text-gray-700">Way too much coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-navy-600" />
                    <span className="text-gray-700">Books that make me cry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-navy-600" />
                    <span className="text-gray-700">Capturing random moments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-navy-600" />
                    <span className="text-gray-700">Playlists for every mood</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-grotesk font-semibold text-xl text-slate-800 mb-4">
                  Currently Learning
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>• How to say no without feeling guilty</p>
                  <p>• That it's okay to change your mind</p>
                  <p>• The art of being present</p>
                  <p>• That growth isn't always comfortable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center bg-gradient-to-r from-navy-600 to-navy-800 rounded-2xl p-8 text-white">
            <blockquote className="font-grotesk text-2xl md:text-3xl font-semibold mb-4">
              "The most authentic thing about us is our capacity to create, to overcome, 
              to endure, to transform, to love and to be greater than our suffering."
            </blockquote>
            <cite className="text-navy-200">— Ben Okri</cite>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
