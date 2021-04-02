import React from "react";
import "../CSS/Purchase.css";

class Purchase extends React.Component {
  state = {
    purchase_item: "",
    purchase_amount: "",
    purchase_date: "",
    purchase_data: [],
  };

  myPurchaseHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // purchaseFormValidation = () => {
  //   let purchase_item_field = document.getElementById("pdemo").value;
  //   let purchase_amount_field = document.getElementById("pdemo1").value;
  //   let purchase_date_field = document.getElementById("pdemo2").value;

  //   let validation = true;

  //   if (
  //     purchase_item_field === "" ||
  //     purchase_amount_field === "" ||
  //     purchase_date_field === ""
  //   ) {
  //     console.log("Empty input field.");
  //     validation = false;
  //   }
  //   if (purchase_item_field.match(/\d/)) {
  //     console.log("Enter only Characters not numbers....");
  //     alert("Purchase item: Enter only Characters not numbers....");
  //     validation = false;
  //   }
  //   if (purchase_amount_field.match(/[a-z]/)) {
  //     console.log("Enter only number not character....");
  //     alert("Purchase amount: Enter only number not character....");
  //     validation = false;
  //   }
  //   if (purchase_date_field.match(/^[0-9]{4}[/:|][0-9]{2}[/:|][0-9]{2}$/g)) {
  //     console.log("Enter date in valid format....");
  //     alert(" purchase date: Enter date in valid format....");
  //     validation = false;
  //   }
  //   // if(purchase_item_field.match(/\d/) || purchase_amount_field.match(/[a-z]/) || purchase_date_field.match(/^[0-9]{4}[|:/][0-9]{2}[|:/][0-9]{2}[|:/]$/g)){
  //   //     alert("Please enter valid credentials....")
  //   //     validation = false;
  //   // }
  //   return validation;
  // };

  handleSubmit = (event) => {
    const { purchase_item, purchase_amount, purchase_date } = this.state;
    event.preventDefault();
    let flag = this.purchaseFormValidation();

    if (flag === false) return;

    fetch("http://127.0.0.1:8000/pur/", {
      method: "POST",
      body: JSON.stringify({
        purchaseItem: purchase_item,
        purchaseAmount: purchase_amount,
        purchaseDate: purchase_date,
      }),
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
    })
      .then(() => {
        this.setState({
          purchase_item: "",
          purchase_amount: "",
          purchase_date: "",
        });
      })
    // .then(() => {
    //   alert("Message successfully sent....");
    // });
  };

  render() {
    const css1 = {
      justifyContent: "center",
      marginLeft: "35%",
      marginTop: "2%",
    };

    const css2 = {
      marginLeft: "35%",
      marginTop: "4%",
    };

    const css3 = {
      marginTop: "1%",
      marginBotton: "1%",
      width: "1000px",
    };

    return (
      <div id="purchase_div">
        <h1 id="Purchase_heading">This is a purchase page.</h1>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          id="Purchase_form"
          className="mb-3 row"
        >
          <label id="purchase_labels">
            Purchase item:
            <input
              type="text"
              value={this.state.purchase_item}
              onChange={this.myPurchaseHandler}
              id="pdemo"
              className="form-control"
              name="purchase_item"
              placeholder="Enter purchase item"
            />
          </label>
          <br />
          <label id="purchase_labels">
            Purchase amount:
            <input
              type="number"
              value={this.state.purchase_amount}
              onChange={this.myPurchaseHandler}
              id="pdemo1"
              className="form-control"
              name="purchase_amount"
              placeholder="Enter purchase amount"
            />
          </label>
          <br />
          <label id="purchase_labels">
            Purchase Date:
            <input
              type="text"
              value={this.state.purchase_date}
              onChange={this.myPurchaseHandler}
              id="pdemo2"
              className="form-control"
              name="purchase_date"
              placeholder="yyyy-mm-dd"
            />
          </label>
          <br />
          <br />
          <br />
          <br />
          <input type="submit" value="Submit" className="btn btn-info btn-lg" />
        </form>
      </div>
    );
  }
}

export default Purchase;
