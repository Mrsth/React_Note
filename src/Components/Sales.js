import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Sales.css';

class Sales extends React.Component {
    
    state = {
        sales_item : "",
        sales_amount : "",
        sales_date : "",
        sales_data : [],
        total: 0,
        visible:false,
        sales_item_alert: "ALERT: Enter only Characters not numbers....",
        alert:"",
    }

    //TO GET THE DATA DYNAMICALLY FROM THE INPUT FIELD
    mySalseHandler=(event)=>{
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    salesFormValidation=()=>{
            
        let sales_item_field = document.getElementById("sdemo").value
        let sales_amount_field = document.getElementById("sdemo1").value
        let sales_date_field = document.getElementById("sdemo2").value


        let validation = true;

        if(sales_item_field==="" || sales_amount_field==="" || sales_date_field===""){
            console.log("Empty input field.")
            validation = false
        }
        if(sales_item_field.match(/\d/)){
            console.log("Enter only Characters not numbers....")
            alert(" Sales Item: Enter only Characters not numbers....")
            //document.getElementById("sales_item_span").innerHTML = "Enter only Characters not numbers...."
            validation = false
        }
        if(sales_amount_field.match(/[a-z]/)){
            console.log("Enter only numbers not characters....")
            alert("Sales amount: Enter only numbers not characters....")
            //document.getElementById("sales_amount_span").innerHTML="Enter only numbers not characters...."
            validation = false
        }
        if(sales_date_field.match(/^[0-9]{4}[/:|][0-9]{2}[/:|][0-9]{2}$/g)){
            console.log("Enter date in valid format....")
            alert("Sales date: Enter date in valid format....")
            //document.getElementById("sales_date_span").innerHTML="Enter date in valid format...."
            validation = false
        }

        return validation
    };

    // FOR HANDLING FORM WHEN IT IS SUBMITTED    
    handleSubmit(event){
        event.preventDefault()
        let flag = this.salesFormValidation()  // return either true or false

        if(flag === false) return;


        event.preventDefault();
        const{sales_item, sales_amount, sales_date} = this.state;
        fetch('http://127.0.0.1:8000/sale/', 
        {method: "POST", 
        headers: {
            'Content-Type': 'application/json; charset = UTF-8',
          },
        body: JSON.stringify({salesItem:sales_item, salesAmount:sales_amount, salesDate:sales_date})},
         ).then(response=>response.json())
         .then(()=>{
             this.setState({
                sales_item: '', sales_amount:'', sales_date:''
             })
         }).then(()=>{
             alert("Message successfully sent....")
         });
    }




    render() {
 
        return(
            <div id="sales_div">
                {/* {this.state.alert && alert(this.state.alert)} */}
                <h1 id="Sales_heading">This is a sales page</h1>
                <form onSubmit={(e)=>this.handleSubmit(e)} id="Sales_form" className="mb-3 row">
                {/* <form onSubmit={handleSubmit} style={css2}>    */}
                    <label id="sales_labels">Sales item 
                        <input required type="text" id="sdemo" value={this.state.sales_item} name="sales_item" onChange={this.mySalseHandler} className="form-control" placeholder="Enter sales item"/>
                        {/* <span id="sales_item_span" className="text-danger font-weight-bold"></span> */}
                    </label><br/>
                    <label id="sales_labels">Sales amount 
                        <input required  type="text" id="sdemo1" value={this.state.sales_amount} name="sales_amount" onChange={this.mySalseHandler} className="form-control" placeholder="Enter sales amount"/>
                        {/* <span id="sales_amount_span" className="text-danger font-weight-bold"></span> */}
                    </label><br/>
                    <label id="sales_labels">Sales Date 
                        <input required type="text" id="sdemo2" value={this.state.sales_date} name="sales_date" onChange={this.mySalseHandler} placeholder="yyyy-mm-dd" className="form-control"/>
                        {/* <span id="sales_date_span" className="text-danger font-weight-bold"></span> */}
                    </label><br/><br/><br/><br/>
                    <input type="submit" value="Submit" id="myBtn" className="btn btn-info btn-lg"/>
                </form>
            </div>
        );
        
    }

  

  }

export default Sales;