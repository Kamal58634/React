

import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

export default function useFilterData(id_) {
    const [filterData, setFilterData] = useState([]);
    let url='https://hiva-sabzlearn-js-default-rtdb.firebaseio.com/Products.json'
    const [data] = useFetch(url);


    useEffect(() => {
        const lastData = Object.entries(data)
            .filter(([id, value]) => id === id_)
            .map(([id, value]) => ({ title: value.title, sale: value.price, quantity: value.quantity }));
        
        setFilterData(lastData);
    }, [data, id_]);

    return [filterData];
}
