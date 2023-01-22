import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';

function Date() {
  
    const [selectedRange, setSelectedRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      });
    
      const handleSelect = (ranges) => {
        setSelectedRange((prevState) => ({
            ...prevState,
            ...ranges.selection
        }));
      };
    
      const daysSelected = (selectedRange.endDate - selectedRange.startDate) / (1000 * 60 * 60 * 24);
    
      return (
        <div>
          <DateRange onChange={[handleSelect, handleSelect]} />
          <p>Number of days selected: {daysSelected}</p>
        </div>
      );
  
}

export default Date
