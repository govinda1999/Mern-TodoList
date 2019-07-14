import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='container mt-4'>
      <h3 className='text-center text-capitalize text-info'>{title}</h3>
    </div>
  );
};

export default Title;
