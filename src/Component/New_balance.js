import React from 'react';
import '../CSS/BalanceSheet.css'

function New_balance(props){
    console.log("Passed props = ",props)
    console.log("Passed sales props = ",props.data)
    console.log("Passed purchase props = ",props.pdata)
    
    let sales_total = 0;
    props.data.map((sdata)=>{
       return sales_total += sdata.salesAmount
    })
    console.log("Sales total = ", sales_total)

    let purchase_total = 0;
    props.pdata.map((pur_data)=>{
        return purchase_total += pur_data.purchaseAmount
    })
    console.log("Purchase total = ", purchase_total)

    // let total = 0;
    // props.data.map((item)=>{
    //     return total += item.sales_amount   
    // })
    // console.log("New API sales total = ", total)

    // let ptotal = 0;
    // props.pdata.map((item)=>{
    //     return ptotal += item.purchase_amount
    // })
    // console.log("New API purchase total = ", ptotal)


    let message = "";
    if(sales_total>purchase_total){
        message = "Profit";
    }else if(sales_total<purchase_total){
        message = "Loss";
    }else{
        message="Equal";
    }

    return(
        <div>
            {/* <div id="Balance_sheet">            
                <h1 id="total_sales">Total sales = {sales_total}</h1> 
            </div>
            <div><h1 id="total_purchase">Total purchase = {purchase_total}</h1></div>
            <div> <h1 id="result">{message}</h1> </div> */}

            <div className="row">
                <div className="col-sm"><h1 id="total_sales">Total sales = {sales_total}</h1></div>
                <div className="col-sm"><h1 id="result">{message}</h1> </div>
                <div className="col-sm"><h1 id="total_purchase">Total purchase = {purchase_total}</h1></div>
            </div>

            <div className="row">
                <div className="col-sm">
                {/* //################################# SALES TABLE STARTS HERE #######################################################    */}
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Sales ID</th>
                                    <th>Sales Items</th>
                                    <th>Sales Amount</th>
                                    <th>Sales Date</th>
                                </tr>
                            </thead>
                        
                        {props.data.map((sitem)=>{
                            {console.log(sitem)}
                        return( 
                                <tbody key={sitem.id}>
                                    <tr>
                                        <td>{sitem.id}</td>
                                        <td>{sitem.salesItem}</td>
                                        <td>{sitem.salesAmount}</td>
                                        <td>{sitem.salesDate}</td>
                                    </tr>
                                </tbody>
                            
                        )
                        })}
                        </table>
                    </div>  
            {/* //#################################### SALES TABLE ENDS HERE #######################################################   */}
                </div>
                <div className="col-sm">
                {/* //#################################### PURCHASE TABLE ENDS HERE #######################################################   */}
                <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Purchase ID</th>
                                    <th>Purchase Items</th>
                                    <th>Purchase Amount</th>
                                    <th>Purchase Date</th>
                                </tr>
                            </thead>
                        
                        {props.pdata.map((pitem)=>{
                            {console.log(pitem)}
                        return( 
                                <tbody key={pitem.id}>
                                    <tr>
                                        <td>{pitem.id}</td>
                                        <td>{pitem.purchaseItem}</td>
                                        <td>{pitem.purchaseAmount}</td>
                                        <td>{pitem.purchaseDate}</td>
                                    </tr>
                                </tbody>
                            
                        )
                        })}
                        </table>
                    </div>  
                
                {/* //#################################### PURCHASE TABLE ENDS HERE #######################################################  */}
                </div>
            </div>    
        </div>
    );
}

export default New_balance;