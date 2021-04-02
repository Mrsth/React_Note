import React from "react";
import { Form, Input, Row, Col, InputNumber, message, Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import Swal from 'sweetalert2'

class antPurchase extends React.Component {
  state = {
    purchase_item: "",
    purchase_amount: "",
    purchase_date: "",
    purchase_data: [],
    total: 0,
    visible: false,
  };

  formRef = React.createRef();

  //TO GET THE DATA DYNAMICALLY FROM THE INPUT FIELD
  myPurchaseHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  myDateHandler = (date) => {

    const d = date?.format("YYYY-MM-DD");
    this.state.purchase_date = d;
    // this.setState({
    //   [date.target.name]: date.target.value,
    // });
  };

  // FOR HANDLING FORM WHEN IT IS SUBMITTED
  handleSubmit = (e) => {

    const { purchase_item, purchase_amount, purchase_date } = this.state;

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
        this.formRef.current.resetFields();
        message.success("Successfully submitted")
      })

  };


  render() {
    function disabledDate(current) {
      // Can not select days before today and today
      return current && current > moment().endOf("day");
    }
    const validateMessages = {
      required: "${label} is required!",
      types: {
        number: "${label} is not a valid number!",
        regex: "[A-Za-z]",
      },
    };
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 12,
      },
    };
    return (
      <div style={{ minHeight: "100vh" }}>
        <Row>
          <Col span={15} offset={1}>
            <div className="title">
              <p >Enter Your Purchase</p>
            </div>
            <Form
              ref={this.formRef}
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
                    pattern: "^[a-zA-Z]+$",
                    message: "Purchase Item should be in characters",
                  },
                ]}
              >
                <Input

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
                    pattern: "^[0-9]+$",
                    message: "Purchase Amount shoud be in numbers only",
                  },
                ]}
              >
                <Input
                  name="purchase_amount"

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
                  name="purchase_date"
                  dateFormat="MM/dd/yyyy"
                  disabledDate={disabledDate}
                  onChange={this.myDateHandler}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                <Button type="primary" htmlType="submit">
                  Submit
            </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default antPurchase;
