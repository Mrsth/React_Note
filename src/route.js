import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Components/home";
import New_balance from './Components/balance-sheet/New_balance';
import Antfooter from "./Components/antfooter";
import RouterGuard from './Components/routerGuard/routeGuard'
import { AuthContext, AuthProvider } from "./Components/Context/authContext";
import Login from "./Components/social/Login";
import AntNav from "./Components/antnav";
import AntSales from "./Components/antSales";
import AntPurchase from "./Components/purchase/antPurchase";
import Register from './Components/social/Register';
import { Layout, Menu } from "antd";
import './Components/antnav.css'
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaDoorOpen } from 'react-icons/fa'
import PurchaseRequisition from './Components/purchase/PurchaseRequisition';
import PurchasePendingList from './Components/purchase/PurchasePendingList';

const { Header, Content, Sider, Footer } = Layout;

const Routes = () => {
    const [isLoggedin, setIsLoggedin] = useContext(AuthContext).login;
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    const handleOut = () => {
        localStorage.clear();
        setIsLoggedin(false)
    }

    return (
        <div>
            <BrowserRouter>
                <Layout className="layout">
                    {isLoggedin ? <AntNav collapsed={collapsed} /> : null}
                    <Layout className="site-layout">
                        {isLoggedin ?
                            <Header className="site-layout-background" style={{ color: 'silver' }}>
                                {collapsed ? <FaRegArrowAltCircleRight size={30} onClick={toggle} className="trigger" /> : <FaRegArrowAltCircleLeft size={30} onClick={toggle} className="trigger" />
                                }
                                <div className="logout" style={{ float: 'right' }}>
                                    <Link href="/" onClick={handleOut}>
                                        <FaDoorOpen size={20} /> Logout
                            </Link>
                                </div>
                            </Header>
                            : null
                        }

                        <Content>
                            <Route
                                exact
                                path="/login"
                                component={Login}
                                auth={!isLoggedin}
                                redirect="/login"
                            />
                            <Route path="/register" exact component={Register} />

                            <RouterGuard
                                path={"/dff"}
                                exact
                                component={New_balance}
                                auth={!isLoggedin}
                                redirect="/login"
                            />

                            <RouterGuard
                                path="/antsales"
                                exact
                                component={AntSales}
                                auth={!isLoggedin}
                                redirect="/login"
                            />

                            <RouterGuard
                                path="/antpurchase"
                                exact
                                component={AntPurchase}
                                auth={!isLoggedin}
                                redirect="/login"
                            />
                            <RouterGuard
                                path="/"
                                exact
                                component={Home}
                                auth={!isLoggedin}
                                redirect="/login"
                            />
                            <RouterGuard
                                path="/form"
                                exact
                                component={PurchaseRequisition}
                                auth={!isLoggedin}
                                redirect="/login"
                            />
                            <RouterGuard
                                path="/purchasePending"
                                exact
                                component={PurchasePendingList}
                                auth={!isLoggedin}
                                redirect="/login"
                            />
                        </Content>
                    </Layout>
                </Layout>
                {/* <Antfooter /> */}
            </BrowserRouter>

        </div >
    )
}

export default Routes
