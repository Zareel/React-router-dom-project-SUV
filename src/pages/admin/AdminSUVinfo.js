import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminSUVinfo = () => {
    const {suv} = useOutletContext()
  return (
    <div>
        <section>
        <h4>Name: {suv.title}</h4>
        <h4>Details: {suv.details}</h4>
        <h4>Visibility: {suv.visibility}</h4>
        </section>
    </div>
  )
}

export default AdminSUVinfo