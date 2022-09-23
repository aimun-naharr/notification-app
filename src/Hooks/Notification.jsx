import React, { useEffect, useState } from 'react';

const useNotification = () => {
   const [notifications, setNotications]=useState([])
   const [loading, setLoading]=useState(false)
   useEffect(()=>{
    setLoading(true)
    fetch('data.json').then(res=>res.json())
    .then(data=>{
      setNotications(data)
    setLoading(false)})
   },[])
   return [notifications, setNotications, loading ]
};

export default useNotification;