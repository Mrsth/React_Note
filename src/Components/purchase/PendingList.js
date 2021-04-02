import React from 'react'
import { Form, Input, Table, Select, DatePicker, InputNumber, Button, Col, Row } from 'antd';

const PendingList = (props) => {
    // const [data, setData] = useState()
    const { trueFilter, falseFilter } = props

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

    const data = falseFilter


    return (
        <div>

            <Table columns={columns} dataSource={data} style={{ width: '100%' }} scroll={{ x: 500, y: 800 }} />


        </div>
    )
}

export default PendingList
