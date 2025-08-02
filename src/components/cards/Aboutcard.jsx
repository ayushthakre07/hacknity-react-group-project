import React from 'react'

function Aboutcard( individualMember) {
  return (
          <div
            className='px-28 py-6 rounded-2xl flex flex-col items-center text-center'
            key={individualMember.name} // Using noun as key,as each noun is diff.//
          >
            <img
              src={individualMember.profilephoto}
              className='size-44 mb-4 rounded-t-2xl border-2 border-gray-100' 
              alt={`${individualMember.noun}'s profile`}
            />
            <p className='py-2 px-6 bg-amber-500 rounded-lg text-lg font-semibold mb-2 mt-[-10px]'>{individualMember.noun}</p>
            <p className='text-gray-700 text-sm'>{individualMember.role}</p>
            <div className='flex mt-4 gap-4'> 

              {individualMember.social.map((socialLink, socialIndex) => (
                <a
                  href={socialLink.url}
                  target='_blank'
                  key={socialLink.url}>
                  <img
                    src={socialLink.icon}
                    className='size-8 bg-gray-200 p-1 rounded-xl transition-transform duration-200 hover:scale-120 hover:bg-gray-300'
                    alt={`${socialLink.noun} icon`}
                  />
                </a>
              ))}
    </div>
    </div>
  )
}

export default Aboutcard
