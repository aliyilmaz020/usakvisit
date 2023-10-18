import React from 'react'

export default function Card12({ image }) {
  return (
    <div className='h-full'>
      <div className='flex '>
        <div className=' h-full'>
          <img src={image} alt="" className="w-[324px] h-[324px] object-cover rounded-3xl MyStil	" />
        </div>
      </div>
    </div>
  )
}