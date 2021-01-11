import React from 'react';

class Purchase extends React.Component{

    componentDidMount(){
        const apiUrl = 'http://127.0.0.1:8000/purchase/';
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=> console.log('This is your purchase data',data))
    }

    render(){
        return(
            <div>
                <h1>This is a purchase page.</h1>
                <form>
                    <label>Purchase item:<input type="text" name="purchase_item" /></label><br/>
                    <label>Purchase amount:<input type="text" name="purchase_amount" /></label><br/>
                    <label>Purchase Date:<input type="text" name="purchase_date" /></label><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Purchase;