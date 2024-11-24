
import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';


export const DataProvider = ({ children }) => {
    const [data, setData] = useState({ categories: [], products: [] });
  
    // Fetch data (simulate fetching from `db.json`)
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/db.json'); // Adjust path as needed
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);
  
    return (
      <DataContext.Provider value={data}>
        {children}
      </DataContext.Provider>
    );
  };
  