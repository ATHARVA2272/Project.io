import React from 'react';
import girl from '../assets/girl.png';
import boy from '../assets/boy.png';
import user from '../assets/user.png';
import Team from './props/Team';

function About() {
  return (
    <>
      {/* <!-- Team Section --> */}
      <section className="pt-20 pb-48 bg-gray-200 text-black">
        {/* <!-- Section Container --> */}
        <div className="container mx-auto px-4">
          {/* <!-- Text Box --> */}
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our Teams</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Our team helps students find their appropriate jobs and helps recruiters find appropriate candidates. We are professional developers with 0+ years of experience in this business area. We can help your business grow.
              </p>
            </div>
          </div>

          {/* <!-- Flex Row Container --> */}
          <div className="flex flex-wrap justify-between items-center">
            
            {/* <!-- Team Member 1 --> */}
           
            <Team
			 name="Atharva Jadhav" 
			 role="Project Lead & Founder" 
			 image={boy} 
			 ></Team>
            {/* <!-- Team Member 2 --> */}

			<Team
			 name="Harshada Jadhav" 
			 role="Project Lead & Founder" 
			 image={girl} 
			 ></Team>
            
            {/* <!-- Team Member 3 --> */}
            
			<Team
			 name="Atharva Jadhav" 
			 role="Project Lead & Founder" 
			 image={user} 
			 ></Team>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
