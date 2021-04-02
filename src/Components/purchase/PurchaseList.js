import React, { useState, } from 'react'
import './purchaseList.css'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { Pagination } from 'antd';
import { useContext } from 'react';
import { SalesContext } from '../Context/Sales_context';

const PurchaseList = ({ purchaseData, ptotal }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [order, setOrder] = useState("desc")
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
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
            purchaseData = purchaseData.sort(
                (a, b) => a[name] > b[name] ? 1 : -1
            )
        }
        else {
            setOrder("desc")
            purchaseData = purchaseData.sort((a, b) => a[name] < b[name] ? 1 : -1)
        }
    }

    // const trueFilter = useContext(SalesContext).trueFilter;
    // console.log(trueFilter, "tutututututruuuuuuuuuuuuu");


    return (
        <div>
            <h3 className="text-center">Purchase Table:{ptotal}</h3>
            <div className="purchase">
                <table className="table">
                    <thead className=" text-light position-sticky" style={{ backgroundColor: '#FF6384', cursor: 'pointer' }}>
                        <tr>
                            <th onClick={handleClick} name="id">id
                            </th>
                            <th onClick={handleClick} name="purhaseItem">purchaseItem
                            {order === "desc" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                            <th onClick={handleClick} name="purchaseAmount">purchaseAmount
                            {order === "desc" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                            <th onClick={handleClick} name="purchaseDate">purchaseDate
                            {order === "desc" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseData && purchaseData.length > 0 && purchaseData.map((list) => {
                            return (
                                <tr >
                                    <td>{list.id}</td>
                                    <td>{list.purchaseItem}</td>
                                    <td>{list.purchaseAmount}</td>
                                    <td>{list.purchaseDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* <div className="text-center">
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={numEachPage} //default size of page
                    onChange={handleChange}
                    total={purchaseData.length}
                />
            </div> */}
        </div>
    )
}

export default PurchaseList
