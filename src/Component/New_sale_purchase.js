import React,{useState, useEffect} from 'react';
import New_balance from './New_balance';


function New_sale_purchase(){

    //######################## SALES SECTION STARTS HERE #########################################
    const[sales_Data, setData] = useState([{
        id:'',
        sales_item:'',
        sales_amount:'',
        sales_date:''
    }])

    const loadData = async()=>{
        await fetch('http://127.0.0.1:8000/sale/')
            .then(response=>response.json())
                .then(response=>setData(response))
                    console.log("Test sales = ", sales_Data);          
    }
    //console.log("Test sales = ", sales_Data);

    useEffect(()=>{loadData();}, []);
    //######################## SALES SECTION ENDS HERE #########################################

    //######################## PURCHASE SECTION STARTS HERE #########################################
    const[purchase_Data, setPData] = useState([{
        id:'',
        purchase_item:'',
        purchase_amount:'',
        purchase_date:''
    }])

    const loadPData = async()=>{
        await fetch('http://127.0.0.1:8000/pur/')
            .then(response=>response.json())
                .then(response=>setPData(response))
    }
    //console.log("Test purchase = ", purchase_Data);
   
    useEffect(()=>{loadPData();}, []);
    //######################## PURCHASE SECTION ENDS HERE #########################################

    return(
        <div>
            <New_balance data={sales_Data} pdata={purchase_Data}/>
        </div>
    );
}

export default New_sale_purchase;