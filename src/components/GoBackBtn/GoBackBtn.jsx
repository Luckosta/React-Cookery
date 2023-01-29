import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackBtn() {
   const navigate = useNavigate();
   return (
      <button className='btn' onClick={() => navigate(-1)}>
         Go Back
      </button>
   );
}

export default GoBackBtn;
