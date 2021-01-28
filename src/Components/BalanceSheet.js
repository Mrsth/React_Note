import React from 'react';

class BalanceSheet extends React.Component{
    render(props){
        return(
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default BalanceSheet;