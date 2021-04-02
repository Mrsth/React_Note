import React, { useState, useEffect } from 'react';
// import '../CSS/BalanceSheet.css'
import sData from './salesApi'
import pData from './purchaseApi'
import SalesList from '../sales/SalesList';
import { Pagination } from 'antd';
import PurchaseList from '../purchase/PurchaseList';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import { SalesContext } from '../Context/Sales_context';


function New_balance() {
    //USING A HOOK
    const [fetchData, setFetchData] = useState([]);

    // const [salesData, setSalesData] = useState(sData)
    // const [purchaseData, setPurchaseData] = useState(pData)


    const trueFilter = useContext(SalesContext).trueFilter;

    useEffect(() => {
        fetch('http://127.0.0.1:8000/sale/')
            .then(response => response.json())
            .then(data => setFetchData(data))
    }, [])

    const [pfetchData, psetFetchData] = useState([]);
    trueFilter.map((item) => {
        pfetchData.push(item)
    })


    useEffect(() => {
        fetch('http://127.0.0.1:8000/pur/')
            .then(response => response.json())
            .then(data => psetFetchData(data))
    }, [])

    let total = 0
    {
        fetchData.map((list) => {
            total += list.salesAmount
        })
    }

    let ptotal = 0
    {
        pfetchData.map((list) => {
            ptotal += list.purchaseAmount
        })
    }
    const data = {
        labels: [
            'Sales',
            'Purchase',

        ],
        datasets: [{
            data: [total, ptotal],
            backgroundColor: [
                '#36A2EB',
                '#FF6384',

            ],
            hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384',

            ]
        }]
    };


    const result = () => {
        if (total > ptotal) {
            return (
                <div>
                    <h2 style={{ color: 'green' }}> Profit</h2>
                    <h5 style={{ color: 'green' }}>({total - ptotal})</h5>

                </div>)
        } else if (total < ptotal) {
            return (
                <div>
                    <h2 style={{ color: 'red' }}> Loss</h2>
                    <h5 style={{ color: 'red' }}>({total - ptotal})</h5>

                </div>
            )
        } else {
            return (
                <div>
                    <h2 style={{ color: 'orange' }}> Equal</h2>
                    <h5 style={{ color: 'orange' }}>({total - ptotal})</h5>

                </div>)
        }

    }

    return (
        <div style={{ minHeight: "100vh" }}>

            {/* <h1 style={{ textAlign: "center" }}>{message}</h1> */}
            <div className=" text-center">
                {result()}

                <Doughnut
                    data={data}
                    width={80}
                    height={30}
                    options={{ maintainAspectRatio: false }}
                    style={{ maxHeight: '10px' }}
                />

            </div>
            <div className="site-layout-background"></div>
            <div className="container">
                <div className="row container-fluid">
                    <div className="col-sm">
                        <SalesList total={total} salesData={fetchData} />
                    </div>
                    <div className="col-sm">
                        <PurchaseList purchaseData={pfetchData} ptotal={ptotal} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New_balance;