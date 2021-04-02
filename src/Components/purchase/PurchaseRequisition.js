import React, { useState } from 'react'
import { Form, Input, Select, DatePicker, InputNumber, Button, Col, Row, message } from 'antd';
import moment from "moment";
import Swal from 'sweetalert2'
import './requisition.css'
const { Option } = Select;

const PurchaseRequisition = () => {
    const [data, setData] = useState({
        purchaseItem: '',
        unitPrice: '',
        quantity: '',
        purchaseAmount: '',
        purchaseDate: '',
        vendorName: '',
        phoneNo: '',
        approve: false,

    })

    const [form] = Form.useForm();

    const onFinish = e => {
        fetch("http://127.0.0.1:8000/pr/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset = UTF-8",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(() => {
                form.resetFields();
                message.success("Successfully submitted")
            })
    };

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current > moment().endOf("day");
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            +977
        </Form.Item>
    );

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.getAttribute("name")]: e.target.value })
    }
    const myDateHandler = (date) => {
        const d = date?.format("YYYY-MM-DD");
        setData({ ...data, purchaseDate: d })

    };

    const onChange = (value) => {
        setData({ ...data, vendorName: value })
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <Row>
                <Col span={15} offset={1}>
                    <div className="title">
                        <p >Purchase Requisition Form</p>
                    </div>

                    <Form
                        form={form}
                        layout="horizontal"
                        name="complex-form"
                        onFinish={onFinish}
                        className="requisition"
                    >

                        <Form.Item
                            label="Purchase Item"
                            name="purchaseItem"
                            rules={[
                                {
                                    required: true,
                                    pattern: "^[a-zA-Z]+$",
                                    message: "Purchase Item should be in characters",
                                },
                            ]}
                        >
                            <Input
                                name="purchaseItem"
                                value={data.purchaseItem}
                                // onChange={this.myPurchaseHandler}
                                onChange={handleChange}
                            />
                        </Form.Item>


                        <Form.Item
                            label="Quantity"
                            name={["quantity"]}
                            rules={[
                                {
                                    required: true,
                                    pattern: "^[0-9]+$",
                                    message: "Quantity should be in numbers",
                                },
                            ]}
                        >
                            <Input
                                name="quantity"
                                value={data.quantity}
                                onChange={handleChange}

                            />
                        </Form.Item>

                        <Form.Item
                            // name={["unit-price"]}
                            label="Unit price"
                            name={["unitPrice"]}
                            rules={[
                                {
                                    required: true,
                                    pattern: "^[0-9]+$",
                                    message: "Unit Price should be in numbers",
                                },
                            ]}
                        >
                            <Input
                                name="unitPrice"
                                onChange={handleChange}
                                value={data.unitPrice}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Purchase Amount"
                            name="purchaseAmount"
                            rules={[
                                {
                                    required: true,
                                    pattern: "^[0-9]+$",
                                    message: "Purchase Amount shoud be in numbers only",
                                },
                            ]}
                        >

                            <Input
                                name="purchaseAmount"
                                value={data.purchaseAmount}
                                onChange={handleChange}
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
                                // name="purchaseDate"
                                dateFormat="MM/dd/yyyy"
                                // onChange={handleChange}
                                value={data.purchaseDate}
                                disabledDate={disabledDate}
                                onChange={myDateHandler}
                            />
                        </Form.Item>

                        <Form.Item label="Vendor Name" name="vendorName">
                            <Form.Item
                                rules={[{ required: true, message: 'Vendor Name is required' }]}
                            >

                                <Select placeholder="Please select a vendor" onChange={onChange} >
                                    <Option value="Gyan Enterprises">Gyan Enterprises</Option>
                                    <Option value="Century Food">Century Food</Option>
                                    <Option value="Himalaya Industries">Himalaya Industries</Option>
                                    <Option value="other">other</Option>
                                </Select>

                            </Form.Item>
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phoneNo"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input
                                name="phoneNo"
                                type="tel"
                                addonBefore={prefixSelector}
                                style={{ width: '100%' }}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item colon={false}>
                            <Button htmlType="submit">
                                Request
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </div >
    )
}

export default PurchaseRequisition
