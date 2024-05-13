import React, { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [fetchedOnce, setFetchedOnce] = useState(second ?false:true); // State to track if data has been fetched once

    useEffect(() => {
      fetch (url)
            .then(response=>response.json())
            .then(dataFetch=>setData(dataFetch))
            .catch(err=>console.log(err))
      
    }, [url]); // Include fetchedOnce in the dependency array
    console.log(data)
    return [data];
}
