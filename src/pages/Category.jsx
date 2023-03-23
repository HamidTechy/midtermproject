import React from "react";

function Category(){
    
    return(
       <>
       <div className="bg-gray-100 w-full">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">
            History
          </h2>
          <p className="mt-4 text-lg text-center">
            We started our fitness tracking app with the goal of helping people
            achieve their health and fitness goals.We are a team of fitness
            enthusiasts and tech experts who have come together to create a gym
            tracking app that helps users achieve their fitness goals.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
           
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">fiction</h3>
              <p className="text-gray-700 text-center">
                Swimming is a popular water sport and recreational activity that
                involves moving through water by using the arms and legs. It is
                a low-impact exercise that provides a full-body workout and
                offers numerous physical and mental health benefits.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">International Relations</h3>
              <p className="text-gray-700 text-center">
                Running is a weight-bearing activity that can strengthen bones,
                muscles, and joints, improve cardiovascular fitness, and help
                with weight management. Running also releases endorphins, which
                can reduce stress and improve mood.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Busssiness</h3>
              <p className="text-gray-700 text-center">
                cycling is an excellent form of exercise that can improve
                cardiovascular health, strengthen muscles and bones, and boost
                overall fitness levels. Bicycles are also eco-friendly,
                producing no harmful emissions and promoting sustainable
                transportation.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
           
            <div className="p-4 flex justify-center flex-col items-center">
              <h3 className="font-bold text-xl mb-2">For kids</h3>
              <p className="text-gray-700 text-center">
                Hiking provides numerous benefits for physical and mental
                health. It is a weight-bearing exercise that can strengthen
                bones and muscles, improve cardiovascular health, and help with
                weight management. Hiking also allows you to connect with
                nature.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

       </>
        
    )
}

export default Category;
