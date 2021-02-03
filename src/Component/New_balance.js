import React,{useState, useEffect} from 'react';
import '../CSS/BalanceSheet.css'

function New_balance(){
    //USING A HOOK
    const [fetchData, setFetchData] = useState([]);

    useEffect(()=>{
             fetch('http://127.0.0.1:8000/sale/')
                .then(response=> response.json())
                .then(data=>setFetchData(data))
    },[])

    const [pfetchData, psetFetchData] = useState([]);

    useEffect(()=>{
              fetch('http://127.0.0.1:8000/pur/')
                .then(response=> response.json())
                .then(data=>psetFetchData(data))
    },[])

   

    
    // let sales_total = 0;
    // props.data.map((sdata)=>{
    //    return sales_total += sdata.salesAmount
    // })

    // let purchase_total = 0;
    // fetchData.map((pur_data)=>{
    //     return purchase_total += pur_data.purchaseAmount
    // })

    let total = 0
    console.log("lol = ",fetchData)
    {fetchData.map((list)=>{
        total += list.salesAmount
        })}
    console.log("Sale total = ", total)    

    let ptotal = 0
    console.log("plol = ",pfetchData)
    {pfetchData.map((list)=>{
        ptotal += list.purchaseAmount
        })}  
    console.log("Purchase total = ", ptotal)      
  
    // let total = 0;
    // fetchData.data.map((item)=>{
    //     return total += item.salesAmount   
    // })
    // console.log("New API sales total = ", total)

    // let ptotal = 0;
    // pfetchData.pdata.map((item)=>{
    //     return ptotal += item.purchaseAmount
    // })
    // console.log("New API purchase total = ", ptotal)


    let message = "";
    if(total>ptotal){
        message = "Profit";
    }else if(total<ptotal){
        message = "Loss";
    }else{
        message="Equal";
    }

    return(
        <>
        <h1 style={{textAlign: "center"}}>{message}</h1>
        <div className="row container-fluid">
            <div className="col-sm">
                <h1 style={{textAlign: "center"}}>Sales Table:{total}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>salesItem</th>
                            <th>salesAmount</th>
                            <th>salesDate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {fetchData.map((list)=>{
                    return(
                        <tr key={list.id}>
                            <td>{list.id}</td>
                            <td>{list.salesItem}</td>
                            <td>{list.salesAmount}</td>
                            <td>{list.salesDate}</td>
                        </tr>
                    )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="col-sm">
             <h1 style={{textAlign: "center"}}>Purchase Table:{ptotal}</h1>
            <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>purchaseItem</th>
                            <th>purchaseAmount</th>
                            <th>purchaseDate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pfetchData.map((list)=>{
                    return(
                        <tr key={list.id}>
                            <td>{list.id}</td>
                            <td>{list.purchaseItem}</td>
                            <td>{list.purchaseAmount}</td>
                            <td>{list.purchaseDate}</td>
                        </tr>
                    )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default New_balance;