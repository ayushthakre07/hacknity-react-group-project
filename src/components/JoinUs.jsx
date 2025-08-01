import React from 'react'

function JoinUs({Img, Alt, Heading, Description}) {
  return (
    <div>
       <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <img
                    src={Img}
                    alt={Alt}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  {Heading}
                </h3>
                <p className="text-gray-600">
                  {Description}
                </p>
              </div>
    </div>
  )
}

export default JoinUs
