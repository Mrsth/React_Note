import React from 'react';

function Use(props){
    return(
        <div>
            <h1>This is use page</h1>
            {console.log("From Use page = ", props.data)}
            {props.data.map((item)=>{
                return(
                    <div key={item.id}>
                    {/* <p>{item.id}</p>
                    <p>{item.purchase_item}</p> */}
                    <li>{item.id}{item.purchase_item}</li>
                    </div>
                )
            })}
        </div>
    );
}
export default Use;