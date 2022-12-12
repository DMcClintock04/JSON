import React,{useEffect,useState} from 'react';
import axios from 'axios';
  
const GBP = () => {
    const [Data,setData]=useState({
        Rate:'',
    })
    
    
    useEffect(()=>{
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.bpi.GBP.rate)
                console.log(res.data.bpi.GBP.rate)
                let companyData=res.data.bpi.GBP;
                setData({Rate:companyData.rate})
            })
        
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>GBP: {Data.Rate}</h1>
        </>
    )
};
  
export default GBP;