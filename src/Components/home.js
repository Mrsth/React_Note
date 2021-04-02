import React from "react";
import { Link } from 'react-router-dom'
import img from '../assets/law.png'

const Home = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center " style={{ minHeight: '100vh' }}>
      <div className="col-md-5">
        <h1 style={{ fontWeight: 'bolder', fontSize: '2.5rem', color: '#555' }}> SALES & BALANCE SYSTEM</h1>
        <div style={{ color: '#777' }}>
          Lorem ipsum dolor maximus risus id orci auctor, eget tincidunt dolor congue. Aliquam dignissim turpis ut mauris accumsan interdum. Quisque sem tellus, porttitor porttitor nulla sed, feugiat porttitor quam. Cras ornare erat quis vehicula bibendum. Suspendisse leo tellus, tincidunt non imperdiet nec, sagittis sit amet augue. Fusce vitae vulputate elit. Aenean venenatis id sem vitae pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac lorem nec tellus cursus elementum ac eu elit.
        </div>
        <div className="mt-3">
          <Link to="/antsales">
            <button className="btn btn-primary mr-3">
              Sales
        </button>
          </Link>
          <Link to="/antpurchase">
            <button className="btn btn-danger">Purchase</button>
          </Link>
        </div>
      </div>
      <div className="col-md-4">
        <img src={img} alt="" />
      </div>
    </div >
  );
};

export default Home;
