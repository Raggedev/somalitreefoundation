import React from 'react';
import { Leaf } from 'lucide-react';

export const ConservationMethods: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="w-6 h-6 text-yellow-600" />
          <h2 className="text-lg font-semibold text-gray-800">Conservation Methods</h2>
        </div>
        
        <div className="prose prose-green max-w-none">
          <p className="text-gray-600 leading-relaxed">
            The Somali Tree Foundation employs a range of conservation methods aimed at restoring 
            and preserving the natural environment. Our efforts focus on promoting the growth of 
            native tree species, protecting existing forests, and establishing sustainable land 
            management practices.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Reforestation and Afforestation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We actively engage in reforestation and afforestation initiatives to increase tree 
            cover in degraded areas. By planting native species that are well-adapted to the 
            local climate, we aim to restore ecological balance, improve soil health, and enhance 
            biodiversity. These efforts also help mitigate the effects of desertification and 
            climate change, providing long-term benefits for both the environment and local communities.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Soil and Water Conservation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To ensure that newly planted trees thrive, we implement soil and water conservation 
            techniques. These include building small check dams, using terracing methods, and 
            applying mulching to retain soil moisture. These techniques not only support tree 
            growth but also help reduce soil erosion and improve water availability, creating 
            a more resilient landscape.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Community-Led Conservation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We believe that conservation is most effective when communities are at the forefront. 
            By training local pastoralists, youth, and families in sustainable land use practices, 
            we empower them to take an active role in protecting their environment. Community-led 
            conservation efforts, such as establishing tree nurseries and local monitoring groups, 
            help ensure the long-term success of our initiatives and build a culture of 
            environmental stewardship.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Agroforestry Systems
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Agroforestry is a sustainable land-use approach that integrates trees and shrubs 
            into agricultural systems. By promoting agroforestry, we help communities enhance 
            soil fertility, improve crop yields, and create diversified sources of income. 
            This approach not only contributes to food security but also helps restore degraded 
            land and supports biodiversity conservation.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Windbreaks and Shelterbelts
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Establishing windbreaks and shelterbelts using native tree species is an effective 
            method to combat soil erosion caused by strong winds. These barriers protect farmland, 
            reduce wind speed, and help retain moisture in the soil. Windbreaks also create 
            microclimates that support agricultural productivity and provide habitats for local wildlife.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Controlled Grazing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Controlled grazing practices help prevent overgrazing, which is a significant cause 
            of land degradation in Somalia. By working with local pastoralists to manage grazing 
            patterns and rest periods for pastures, we allow vegetation to regenerate, reduce 
            soil erosion, and improve the health of rangelands. This approach helps maintain a 
            balance between livestock needs and ecological sustainability.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Rainwater Harvesting
          </h3>
          <p className="text-gray-600 leading-relaxed">
            In arid and semi-arid regions like Somalia, efficient water management is crucial. 
            We promote rainwater harvesting techniques, such as constructing water catchment 
            systems and using tanks to collect and store rainwater. This water can be used for 
            irrigation, ensuring that young trees and plants receive adequate hydration, even 
            during dry periods. Rainwater harvesting also reduces dependency on limited 
            groundwater resources.
          </p>
        </div>
      </div>
    </div>
  );
};