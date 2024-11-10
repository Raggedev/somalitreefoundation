import React from 'react';
import { Users } from 'lucide-react';

export const CommunityGrowth: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Community Growth</h2>
        </div>
        
        <div className="prose prose-green max-w-none">
          <p className="text-gray-600 leading-relaxed">
            At the heart of the Somali Tree Foundation is our belief in the power of communities 
            to drive meaningful change. We work hand-in-hand with local pastoralists, youth, and 
            families to restore tree cover and revive the natural environment. By involving 
            communities directly, we aim to foster not only ecological recovery but also a sense 
            of ownership and pride in the land. Our mission is rooted in the idea that by 
            empowering communities, we can create a lasting impact that benefits both people 
            and the environment for generations to come.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Empowerment Through Education
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our approach to community growth is centered around empowerment and education. 
            Through workshops, hands-on training, and awareness campaigns, we provide the 
            knowledge and tools that communities need to protect and expand their natural 
            resources. We focus on creating opportunities for everyone to get involved, whether 
            through planting initiatives, environmental stewardship, or sustainable land 
            management practices. Together, we celebrate each small victory—whether it's a 
            newly planted sapling, a flourishing tree nursery, or a restored piece of 
            land—as a step toward a greener, more resilient future.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            A Vision for Sustainable Communities
          </h3>
          <p className="text-gray-600 leading-relaxed">
            By nurturing community-led growth, we envision a Somalia where natural ecosystems 
            thrive and communities live sustainably in harmony with their environment. This 
            journey is not just about planting trees; it's about planting the seeds of 
            resilience, hope, and a brighter tomorrow for generations to come. We are 
            committed to supporting communities in their efforts to rebuild and sustain 
            healthy environments, ensuring that every individual has the chance to contribute 
            to and benefit from a thriving landscape. Together, we can transform not just the 
            land, but also the future of the people who depend on it.
          </p>
        </div>
      </div>
    </div>
  );
};