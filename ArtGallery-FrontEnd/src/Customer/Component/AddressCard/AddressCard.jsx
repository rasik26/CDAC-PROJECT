import React from 'react';

const AddressCard = ({ formData }) => {
  // Check if formData is an array
  if (!Array.isArray(formData)) {
    return null;
  }

  return (
    <div>
      {formData.map((data, index) => (
        <div key={index} className='space-y-3'>
          <p className='font-semibold'>{data.firstName} {data.lastName}</p>
          <p>{data.streetAddress} {data.city} {data.state} {data.zipCode}</p>
          <div className='space-y-1'>
            <p className='font-semibold'>Phone Number</p>
            <p>{data.mobile}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressCard;
