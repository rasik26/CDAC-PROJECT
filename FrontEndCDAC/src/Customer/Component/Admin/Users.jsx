import React from 'react'

const Users = () => {
  return (
    <div>
        <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="flex items-center justify-between pb-6">
    <div>
      <h1 class="font-semibold text-gray-700">Users Page</h1>
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">First Name</th>
            <th class="px-5 py-3">Last Name</th>
            <th class="px-5 py-3">Email</th>
            
            {/*<th class="px-5 py-3">Action</th>*/}
            
          </tr>
        </thead>
        <tbody>
          <tr>
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">1</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">John</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Wick</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Wick@gmail.com</p>
            </td>
           {/*<td class="border-b border-gray-200 bg-white space-x-4">
              <button className='px-6 py-2 text-white font-normal bg-black rounded-lg'>Add</button>
              <button className='px-6 py-2 text-white font-normal bg-black rounded-lg'>Delete</button> 
            </td> */} 
            </tr>
        </tbody>
          
      </table>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Users