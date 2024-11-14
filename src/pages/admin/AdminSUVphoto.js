import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminSUVphoto = () => {
    const {suv} = useOutletContext()
  return (
    <div>
        <img className='w-24 mt-4' src={suv.image} alt="" />
    </div>
  )
}

export default AdminSUVphoto