import React,{useEffect,useState} from 'react';
import axios from 'axios';
  
const USD = () => {


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
            result.textContent = inputnum + ' Bitcoins cost more than you can afford';
            //alert(nameField);
        }
        }

    },[])
   
    
    

    return(
        <>
            <h1>USD: {Data.Rate}</h1>
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
  
export default USD;