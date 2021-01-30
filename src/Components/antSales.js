import React from "react";
import { Form, Input, InputNumber, Button, DatePicker } from "antd";
import "antd/dist/antd.css";

class antSales extends React.Component {
  state = {
    sales_item: "",
    sales_amount: "",
    sales_date: "",
    sales_data: [],
    total: 0,
    visible: false,
  };

  //TO GET THE DATA DYNAMICALLY FROM THE INPUT FIELD
  mySalseHandler = (event) => {
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
    this.state.sales_date = d;
    // this.setState({
    //   [date.target.name]: date.target.value,
    // });
  };

  // FOR HANDLING FORM WHEN IT IS SUBMITTED
  handleSubmit = (e) => {
    // let flag = this.salesFormValidation(); // return either true or false

    // if (flag === false) return;
    console.log("clicked");
    const { sales_item, sales_amount, sales_date } = this.state;
    console.log(sales_item);
    console.log(sales_amount);
    console.log(sales_date);
    fetch("http://127.0.0.1:8000/sale/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
      body: JSON.stringify({
        salesItem: sales_item,
        salesAmount: sales_amount,
        salesDate: sales_date,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.setState({
          sales_item: "",
          sales_amount: "",
          sales_date: "",
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
        regexp: "no",
      },
    };
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };

    return (
      <div
        className="container p-5"
        style={{
          height: "535px",
          marginTop: "70px",
        }}
      >
        <h4 className="text-center">Enter Your Sales</h4>
        <Form
          {...layout}
          className="container my-5 "
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={(e) => this.handleSubmit(e)}
          id="Sales_form"
        >
          <Form.Item
            name={["Item"]}
            label="Sales Item"
            rules={[
              {
                required: true,
                pattern: "[A-Za-z]",
              },
            ]}
          >
            <Input
              style={{ width: "180px" }}
              name="sales_item"
              value={this.state.sales_item}
              onChange={this.mySalseHandler}
            />
          </Form.Item>
          <Form.Item
            name={["Amount"]}
            label="Sales Amount"
            value={this.state.sales_amount}
            onChange={this.mySalseHandler}
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber
              style={{ width: "150px" }}
              name="sales_amount"
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
              name="sales_date"
              dateFormat="MM/dd/yyyy"
              onChange={this.myDateHandler}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default antSales;
