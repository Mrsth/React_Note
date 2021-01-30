import React from "react";
import { Form, Input, InputNumber, Button, DatePicker } from "antd";
import "antd/dist/antd.css";

class antPurchase extends React.Component {
  state = {
    purchase_item: "",
    purchase_amount: "",
    purchase_date: "",
    purchase_data: [],
    total: 0,
    visible: false,
  };

  //TO GET THE DATA DYNAMICALLY FROM THE INPUT FIELD
  myPurchaseHandler = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  myDateHandler = (date) => {
    console.log(date);
    console.log(date?._d);
    const d = date.format("YYYY-MM-DD");
    console.log(d);
    this.state.purchase_date = d;
    // this.setState({
    //   [date.target.name]: date.target.value,
    // });
  };

  // FOR HANDLING FORM WHEN IT IS SUBMITTED
  handleSubmit = (e) => {
    // let flag = this.salesFormValidation(); // return either true or false

    // if (flag === false) return;
    console.log("clicked");
    const { purchase_item, purchase_amount, purchase_date } = this.state;
    console.log(purchase_item);
    console.log(purchase_amount);
    console.log(purchase_date);
    fetch("http://127.0.0.1:8000/pur/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
      body: JSON.stringify({
        purchaseItem: purchase_item,
        purchaseAmount: purchase_amount,
        purchaseDate: purchase_date,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.setState({
          purchase_item: "",
          purchase_amount: "",
          purchase_date: "",
        });
      })
      .then(() => {
        alert("Message successfully sent....");
      });
  };

  render() {
    const validateMessages = {
      required: "${label} is required!",
      types: {
        number: "${label} is not a valid number!",
        regex: "[A-Za-z]",
      },
    };
    const layout = {
      labelCol: {
        span: 10,
      },
      wrapperCol: {
        span: 16,
      },
    };
    return (
      <div
        className="container p-5"
        style={{ height: "535px", marginTop: "70px" }}
      >
        <h4 className="text-center">Enter Your Purchase</h4>
        <Form
          {...layout}
          className="container my-5 "
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={(e) => this.handleSubmit(e)}
          id="Purchase_form"
        >
          <Form.Item
            name={["Item"]}
            label="Purchase Item"
            rules={[
              {
                required: true,
                pattern: "[^0-9+]",
              },
            ]}
          >
            <Input
              style={{ width: "150px" }}
              name="purchase_item"
              value={this.state.purchase_item}
              onChange={this.myPurchaseHandler}
            />
          </Form.Item>
          <Form.Item
            name={["Amount"]}
            label="Purchase Amount"
            value={this.state.purchase_amount}
            onChange={this.myPurchaseHandler}
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber
              style={{ width: "150px" }}
              name="purchase_amount"
              rules={[
                {
                  required: true,
                },
              ]}
              // value={this.state.sales_amount}
              // onChange={this.mySalseHandler}
            />
          </Form.Item>

          <Form.Item
            name={["Date"]}
            label="Date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              style={{ width: "150px" }}
              name="purchase_date"
              dateFormat="MM/dd/yyyy"
              onChange={this.myDateHandler}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default antPurchase;
