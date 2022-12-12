import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Home=()=>{
    const [Data,setData]=useState({
        Rate:'',
    })
    
    
    useEffect(()=>{
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.bpi.USD.rate)
                console.log(res.data.bpi.USD.rate)
                let companyData=res.data.bpi.USD;
                setData({Rate:companyData.rate})
                values.push(res.data.bpi.USD.rate)
            })
        
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>USD: {Data.Rate}</h1>
        </>
    )
}

export default Home;
