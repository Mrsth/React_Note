import React, { useState } from 'react'
import { Pagination } from 'antd';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import './salesList.css'

const SalesList = ({ total, salesData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [order, setOrder] = useState("desc")
    const numEachPage = 5

    const handleChange = (value) => {
        setMinValue((value - 1) * numEachPage);
        setMaxValue(value * numEachPage);
    }

    const handleClick = (e) => {
        console.log("clicked");
        let name = e.target.getAttribute("name");
        if (order === "desc") {
            setOrder("asc")
            salesData = salesData.sort((a, b) => a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1)
            return <FaAngleUp />
        }
        else {
            setOrder("desc")
            salesData = salesData.sort((a, b) => a[name].toLowerCase() < b[name].toLowerCase() ? 1 : -1)
        }
    }

    return (
        <div>
            <h3 className="text-center">Sales Table:{total}</h3>
            <div className="sales">
                <table className="table">
                    <thead className=" text-light position-sticky" style={{ backgroundColor: "#36A2EB", cursor: 'pointer' }}>
                        <tr>
                            <th name="id" onClick={handleClick}>id</th>
                            <th name="salesItem" onClick={handleClick}>salesItem
                            {order === "desc" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                            <th name="salesAmount" onClick={handleClick}>salesAmount
                            {order === "desc" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                            <th name="salesDate" onClick={handleClick} > salesDate
                            {order === "desc" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            salesData && salesData.length > 0 && salesData.map(list => {
                                return (

                                    <tr key={list.id}>
                                        <td>{list.id}</td>
                                        <td>{list.salesItem}</td>
                                        <td>{list.salesAmount}</td>
                                        <td>{list.salesDate}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>

                </table>
            </div>


            {/* <div className="text-center">
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={numEachPage} //default size of page
                    onChange={handleChange}
                    total={salesData.length}
                />
            </div> */}
        </div >
    )
}

export default SalesList
