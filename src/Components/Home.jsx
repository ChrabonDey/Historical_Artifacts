import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Featured from './Featured';
import HistoryTrackerSections from './HistoryTrackerSections';

const Home = () => {
 

  return (
    <div>
      

      <section className="text-gray-800 dark:text-gray-100">
       
        <Banner />
      </section>
      <section className="text-gray-800 dark:text-gray-100">
       
        <Featured></Featured>
      </section>
      <section className="text-gray-800 dark:text-gray-100">
       
        <HistoryTrackerSections></HistoryTrackerSections>
      </section>
     
    
    </div>
  );
};

export default Home;
