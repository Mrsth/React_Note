import React from "react";
import { Form, Input, Row, Col, Button, DatePicker, message } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import Swal from 'sweetalert2'
import './antSales.css'

class AntSales extends React.Component {
  state = {
    sales_item: "",
    sales_amount: "",
    sales_date: "",
    sales_data: [],
    total: 0,
    visible: false,
  };
  formRef = React.createRef();

  //TO GET THE DATA DYNAMICALLY FROM THE INPUT FIELD
  mySalseHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  myDateHandler = (date) => {
    console.log(date);
    console.log(date?._d);
    const d = date?.format("YYYY-MM-DD");
    console.log(d);
    this.state.sales_date = d;

  };

  // FOR HANDLING FORM WHEN IT IS SUBMITTED
  onFinish = (values) => {
    const { sales_item, sales_amount, sales_date } = this.state;
    this.formRef.current.resetFields();

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
        this.formRef.current.resetFields();
        message.success("Successfully submitted")
      });

  };

  render() {
    const validateMessages = {
      required: "${label} is required!",
      types: {
        number: "${label} is not a valid number!",
      },
    };

    function disabledDate(current) {
      // Can not select days before today and today
      return current && current > moment().endOf("day");
    }

    return (
      <div style={{ minHeight: "100vh" }} className="sales">
        <Row>
          <Col span={15} offset={1}>
            <div className="title">
              <p >Enter Your Sales</p>
            </div>

            <Form
              // {...layout}
              ref={this.formRef}
              className="container my-5 "
              name="nest-messages"
              validateMessages={validateMessages}
              onFinish={this.onFinish}
              id="Sales_form"
            >
              <Form.Item
                name={["Item"]}
                label="Sales Item"
                //help="Item should be in characters"
                rules={[
                  {
                    required: true,
                    pattern: "^[a-zA-Z]+$",
                    message: "Sales Item should be in characters only",
                  },
                ]}
              >
                <Input
                  name="sales_item"
                  value={this.state.sales_item}
                  onChange={this.mySalseHandler}
                />
              </Form.Item>
              <Form.Item
                name={["Amount"]}
                label="Sales Amount"
                type="number"

                rules={[
                  {
                    required: true,
                    pattern: "^[0-9]+$",
                    message: "Sales Amount should be in numbers",
                  },
                ]}
              >
                <Input
                  name="sales_amount"
                  value={this.state.sales_amount}
                  onChange={this.mySalseHandler}
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
                  name="sales_date"
                  dateFormat="MM/dd/yyyy"
                  disabledDate={disabledDate}
                  value={this.state.sales_date}
                  onChange={this.myDateHandler}
                />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Submit
            </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div >

    );
  }
}

export default AntSales;
