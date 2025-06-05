import { Coffee, BookOpen, Camera, Music } from 'lucide-react';
import Layout from '../components/Layout';
const About = () => {
  return <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-grotesk font-bold text-5xl md:text-6xl mb-6">
              <span className="text-gradient">About</span> Me
            </h1>
            <p className="text-xl text-gray-600">the person behind the stories</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow mb-12">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hi! I'm Harshita Madhan, a UC Riverside student studying biology with dreams of working in healthcare. I'm especially drawn to the intersection of health, society, and human experience.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Life in California has shaped me into someone who thrives on connection and spontaneity. I'm someone who finds joy in life's simple moments: impromptu adventures with friends, deep conversations over coffee, quiet evenings with my dog Panda, and those perfect California sunsets that make everything feel possible. I try to say "yes" to every experience that comes my way and embrace uncertainty as part of the journey.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This blog is my digital journal, a space where I process thoughts, share snippets of my life, and hopefully connect with others on similar journeys. I believe deeply in the power of storytelling: how our narratives shape us, heal us, and bring us together. Whether I'm writing about my EMT training experiences, reflections from volunteering, or random epiphanies, this space helps me make sense of it all. I hope to document the messy, beautiful process of becoming—whatever that ends up meaning.
              </p>
            </div>

            {/* Removed Fun Facts and Currently Learning sections */}
          </div>

          {/* Quote */}
          <div className="text-center bg-navy-800 rounded-2xl p-8 text-white">
            <blockquote className="font-grotesk text-2xl md:text-3xl font-semibold mb-4">
              "The most authentic thing about us is our capacity to create, to overcome, 
              to endure, to transform, to love and to be greater than our suffering."
            </blockquote>
            <cite className="text-navy-200">— Ben Okri</cite>
          </div>
        </div>
      </div>
    </Layout>;
};
export default About;