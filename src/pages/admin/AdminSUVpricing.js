import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminSUVpricing = () => {
    const {suv} = useOutletContext()
  return (
    <div>
    <h1>{suv.price}</h1>
    </div>
  )
}

export default AdminSUVpricing