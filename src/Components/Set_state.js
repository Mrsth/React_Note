import React, {useState, useEffect} from 'react';
import Use from './Use';

function Set_state(){
    const[data, setData] = useState([{
        id:'',
        purchase_item:'',
        purchase_amount:'',
        purchase_date:''
    }]);

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async ()=>{
        await fetch('http://127.0.0.1:8000/purchase/')
        .then(response=>response.json())
        .then(receivedData=>setData(receivedData));
    }
    console.log("Data via async = ",data);

    console.log(data[0]);
    return(
        <div>
            <Use data={data}/>
            {
                data.map((item, index)=>{
                    return(
                        <li key={index}>
                        {console.log({item})}
                        {item.id}
                        {item.purchase_item}
                    </li>
                    );
                })
            }
        </div>
    );
}

export default Set_state;