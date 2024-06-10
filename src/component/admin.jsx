import React from 'react'

 const Admin = () => {
  return (
    <>
   
    <h2 className='mt-16 flex justify-center font-black text-4xl'>Generation Thailand</h2>
    <h2 className='flex justify-center font-black text-4xl'>Home - Admin Sector</h2>
    <div className='mt-16 flex justify-center gap-24'>
        <button className='font-black bg-gray-400'>User Home Sector</button>
        <button className='font-black bg-gray-400'>Admin Home Sector</button>
    </div>
    <div >
      <h1 className='font-black'>Create User Here</h1>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
    <table className='border-2 mt-16 border-slate-950 '>
        <tr className='border-2	border-slate-950	'>
            <th >Name</th>
            <th>Last Name</th>
            <th>Position</th>
        </tr>
        <tr className='border-2 border-slate-950	'>
            <td>k</td>
            <td>k</td>
            <td>k</td>
        </tr>
    </table>
    </>
  )
}
export default Admin