import React from 'react';
 
export default function SalesInputs(props) {
    const styles = {
        display: props.saleOn ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'productInputs'>
            <h2>Add Sales</h2>
            <form onSubmit={props.handleSubmit}>
                <div className = "within">
                    <div className = "boxes">
                        <label htmlFor='productName'> Product Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'BMX Bike'
                            name = 'productName'
                            value = {props.productName}
                            onChange = {props.handleChange}
                            id = 'productName'
                            className = 'prodIn'
                            required
                        />
                        
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='salesPersonName'>Salesperson:</label>
                        <input 
                            type = "text"
                            placeholder = 'Emmanuel Ebhohimen'
                            name = 'salesPersonName'
                            value = {props.salesPersonName}
                            onChange = {props.handleChange}
                            id = 'salesPersonName'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='customerName'>Customer:</label>
                        <input 
                            type = "text"
                            placeholder = 'David Piraban'
                            name = 'customerName'
                            value = {props.customerName}
                            onChange = {props.handleChange}
                            id = 'customerName'
                            className = 'prodIn'
                            required
                        />
                    </div>

                    <div className = "boxes">
                        <label htmlFor='salesDate'>Sale Date:</label>
                        <input 
                            type = "date"
                            placeholder = '2023-05-31'
                            name = 'salesDate'
                            value = {props.salesDate}
                            onChange = {props.handleChange}
                            id = 'salesDate'
                            className = 'prodIn'
                            required
                        />
                    </div>
                </div>
                
                <button>Add Sale</button>
            </form>
        </div> 
    );
}
