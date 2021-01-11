import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sales extends React.Component {

    state = {
        sales_item : "",
        sales_amount : "",
        sales_date : "",
    }

    mySalseHandler=(event)=>{
        console.log(event.target.getAttribute("name"))
        this.setState({
            
        })
    }

    render() {
        return(
            <div>
                <h1>This is a sales page.</h1>
                <form>
                    <label>Sales item:<input type="text" value={this.state.sales_item} name="sales_item" onChange={this.mySalseHandler}/></label><br/>
                    <label>Sales amount:<input type="text" value={this.state.sales_amount} name="sales_amount" onChange={this.mySalseHandler}/></label><br/>
                    <label>Sales Date:<input type="text" value={this.state.sales_date} name="sales_date" onChange={this.mySalseHandler}/></label><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
  }

export default Sales;