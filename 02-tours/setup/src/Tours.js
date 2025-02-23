import React from 'react';
import Tour from './Tour';

const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className='title'>
      <h2>our Tours</h2>
      <div className="uderline"></div>
      </div>
      <div>
        {tours.map((tour)=>{
        return <Tour
         key={tour.id} {...tour} 
         removeTour={removeTour}> 
        </Tour>
        }
        )}
      </div>
    </section>
    )
};








export default Tours;
