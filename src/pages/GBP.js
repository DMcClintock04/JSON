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

            var subButton = document.getElementById("subButton");
        subButton.addEventListener("click", calculate, false);
    
    function calculate() {
        var inputnum = document.getElementById('inum').value;
        var result = document.getElementById('result');
        
        
        if (inputnum.length < 1) {
            result.textContent = 'Username must contain at least 3 characters';
            //alert('Username must contain at least 3 characters');
        } else {
            result.textContent = inputnum + 'Bitcoins, honestly you live in England, your economy is down the drain do not look for crypto.';
            //alert(nameField);
        }
        }
    },[])
    return(
        <>
            <h1>GBP: {Data.Rate}</h1>
            <form method="get">
                <label for="inum">Number of Bitcoin:</label>
                <input type="text" id="inum" name="input_number"/>
            <div class='form-sub'>
                <button id='subButton' type='button'>Calculate!</button>
            </div>
            </form>
            <div>
                <p id='result'></p>
            </div>
        </>
    )
};
  
export default GBP;