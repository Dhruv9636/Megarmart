import React from 'react';
import { ChevronDown } from "lucide-react";

const Dropdowns = ({ came }) => {
  return (
    <div className='showOff'>
      <button className='btns'>
        {came} <ChevronDown className='ChevronDown' />
      </button>
    </div>
  );
};

export default Dropdowns;
