import React ,{useState, useEffect} from 'react';
import Data_passed_file from './Data_passed_file';

function Data_fetch_file(){

    //USING A HOOK
    const [fetchData, setData] = useState([{
        id: '', sales_item: '', sales_amount:'', sales_date:''
    }]);

    
    const loadData = async ()=>{
        await fetch('http://127.0.0.1:8000/sales/')
        .then(response=> response.json())
        .then(response=>setData(response))
    }
    console.log("Data after fetching = ", fetchData)

    useEffect(()=>{loadData();},[])

    return(
        <div>
            <h1>This is Elon musk.</h1>
            <Data_passed_file data={fetchData}/>
        </div>
    );
}

export default Data_fetch_file;