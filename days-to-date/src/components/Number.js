import React, { useState, useEffect } from 'react';

function Number({ startDate, endDate }) {

        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          const interval = setInterval(() => {
            setTime(new Date());
          }, 1000);
      
          return () => clearInterval(interval);
        }, []);

    const currentTime = new Date().getTime();
    const endTime = new Date(endDate).getTime();
    const timeDiff = endTime - currentTime;
    const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const totalDays = Math.floor((endTime - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return (
    <div>
        <div>
            <div>
                <h1>Today is {time.toLocaleString()}</h1>
            </div>
            <p>just</p>
            <p>{`Days: ${diffDays} (out of ${totalDays}!)`}</p>
            <p>{`Hours: ${diffHours}`}</p>
            <p>{`Minutes: ${diffMinutes}`}</p>
            <p>until big day!</p>
        </div>
    </div>
    );
}

export default Number