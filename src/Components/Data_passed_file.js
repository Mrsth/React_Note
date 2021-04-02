import React from 'react';

function Data_passed_file(props){
    return(
        <div>
            <h1>This is bill gates</h1>
            {console.log("LOL = ", props.data)}
            {props.data.map((item)=>{
                return(
                    <div key={item.id}>
                        <li>{item.sales_item}</li>
                        <li>{item.sales_amount}</li>
                        <li>{item.sales_date}</li>
                    </div>
                );
            })}
        </div>
    );
}

export default Data_passed_file;