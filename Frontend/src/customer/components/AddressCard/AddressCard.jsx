import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div className='mb-5'>
      <div className=' space-y-3'>
        <p className='font-semibold capitalize'>{address?.firstname+" "+address?.lastname}</p>
        <p className='capitalize'>{address?.address+", "+address?.city+" , "+address?.state+","+address?.zip}</p>
        <div className='flex items-center gap-1   '>
          <p className=''>Phone Number:</p>
          <p className=''> {address?.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
