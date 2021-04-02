import React, { useState, useEffect, useContext } from 'react'
import { Form, Input, Select, DatePicker, InputNumber, Button, Col, Row } from 'antd';
import PendingList from './PendingList';
import { Table } from 'antd';
import { SalesContext } from '../Context/Sales_context';


const PurchasePendingList = () => {
    // const [pending, setPending] = useState([])
    // useEffect(async () => {
    //     const response = await fetch("http://127.0.0.1:8000/pr/", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json; charset = UTF-8",
    //         },
    //         // body: JSON.stringify(data),
    //     })
    //     const data = await response.json();
    //     setPending(data)

    // }, [])

    const [pending, setPending] = useContext(SalesContext).pendingList

    const trueFilter = pending.filter((list) => list.approve === true)

    const falseFilter = pending.filter((list) => list.approve !== true)


    const columns = [
        {
            title: 'Purchase Item',
            width: 100,
            dataIndex: 'purchaseItem',
            key: 'name',
        },
        {
            title: 'Quantitiy',
            width: 100,
            dataIndex: 'quantity',
            key: 'age',

        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            key: '1',
            width: 150,
        },
        {
            title: 'Purchase Amount',
            dataIndex: 'purchaseAmount',
            key: '2',
            width: 150,
        },
        {
            title: 'Vendor Name',
            dataIndex: 'vendorName',
            key: '3',
            width: 150,
        },
        {
            title: 'Purchase Date',
            dataIndex: 'purchaseDate',
            key: '4',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'approve',
            key: '4',
            width: 150,
        },
    ];

    const data = pending;



    return (
        <div style={{ minHeight: "100vh" }}>
            <Row>
                <Col span={22} offset={1}>


                    <div className="title">
                        <p >Purchase Pending Table</p>
                    </div>
                    {/* <Table columns={columns} dataSource={data} style={{ width: '100%' }} scroll={{ x: 500, y: 800 }} /> */}

                    {/* {
                        pending.map((list) => {
                            return ( */}
                    <PendingList trueFilter={trueFilter} falseFilter={falseFilter} />
                    {/* )
                        })
                    } */}


                </Col>
            </Row>
        </div >
    )
}

export default PurchasePendingList
