import React from 'react'

export const Items = ({img,item,detail,price,sale}) => {
  return (
    <div>
        {sale && (
<span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] sm:text-xs w-8 h-8 flex items-center justify-center rounded-full z-10">
          SALE
        </span>
      )}
        <img className='h-48 sm:h-56 w-full object-cover' src={img} alt="Img" />
        <p className='text-gray-700'>{item}</p>
        <h3 className='text-sm sm:text-lg font-medium'>{detail}</h3>
        <div className='text-yellow-500'>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </div>
        <p className='text-gray-700'>{price}</p>
    </div>
  )
}
