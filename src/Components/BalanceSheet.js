import React from 'react';

class BalanceSheet extends React.Component{

    state = {
        sales_data : [],
        purchase_data:[],
        isLoading : true,
        error: null,
    }

    componentDidMount(){
        const apiurl = 'http://127.0.0.1:8000/sales';
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            console.log('This is your data.', data)
            this.setState({
                sales_data: data,
                isLoading: false,
                error: null,
            })
        }) 
        const apiurls1 = 'http://127.0.0.1:8000/purchase';
        fetch(apiurls1)
        .then(response => response.json())
        .then(pdata=>{
            console.log('This is your data.', pdata)
            this.setState({
               purchase_data: pdata,
               isLoading: false,
               error:null, 
            })
        })       
    }


    render(){
        const{sales_data, purchase_data, error} = this.state;
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Sales ID</th>
                            <th>Sales Item</th>
                            <th>Sales Amount</th>
                            <th>Sales Date</th>
                        </tr>
                    </thead>
                    {error ? <p>Error occured</p> : null}

                    {sales_data.map(sale => {
                        const{sales_item, sales_amount, sales_date} = sale
                        return(
                            <tbody key={sale.id}>
                                <tr>
                                    {/* {console.log(sale.id)} */}
                                    <td>{sale.id}</td>
                                    <td>{sales_item}</td>
                                    <td>{sales_amount}</td>
                                    <td>{sales_date}</td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>Purchase ID</th>
                            <th>Purchase Item</th>
                            <th>Purchase Amount</th>
                            <th>Purchase Date</th>
                        </tr>
                    </thead>
                    {purchase_data.map(purchase=>{
                        const{purchase_item, purchase_amount, purchase_date} = purchase;
                        return(
                            <tbody key={purchase.id}>
                                <tr>
                                    <td>{purchase.id}</td>
                                    <td>{purchase_item}</td>
                                    <td>{purchase_amount}</td>
                                    <td>{purchase_date}</td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        );
    }
}

export default BalanceSheet;