import React from 'react';
 
export default function ProductInputs(props) {
    const styles = {
        display: props.productOn ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'productInputs'>
            <h2>Add Products</h2>
            <form onSubmit={props.handleSubmit}>
                <div className = "within">
                    <div className = "boxes">
                        <label htmlFor='nameInput'>Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'Mountain Bike'
                            name = 'name'
                            value = {props.name}
                            onChange = {props.handleChange}
                            id = 'nameInput'
                            className = 'prodIn'
                            required
                        />
                        
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='manuInput'>Manufacturer:</label>
                        <input 
                            type = "text"
                            placeholder = 'Bespoke Bikes'
                            name = 'manufacturer'
                            value = {props.manufacturer}
                            onChange = {props.handleChange}
                            id = 'manuInput'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='styleInput'>Style:</label>
                        <input 
                            type = "text"
                            placeholder = 'Hot Safari'
                            name = 'style'
                            value = {props.style}
                            onChange = {props.handleChange}
                            id = 'styleInput'
                            className = 'prodIn'
                            required
                        />
                    </div>
                </div>
                
                <div className = "within">
                    <div className = "boxes">
                        <label htmlFor='purchaseInput'>Purchase Price:</label>
                        <input 
                            type = "number"
                            placeholder = '800'
                            name = 'purchasePrice'
                            value = {props.purchasePrice}
                            onChange = {props.handleChange}
                            id = 'purchaseInput'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='saleInput'>Sale Price:</label>
                        <input 
                            type = "number"
                            placeholder = '700'
                            name = 'salePrice'
                            value = {props.salePrice}
                            onChange = {props.handleChange}
                            id = 'saleInput'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='quantInput'>Quantity on Hand:</label>
                        <input 
                            type = "number"
                            placeholder = '100'
                            name = 'quantity'
                            value = {props.quantity}
                            onChange = {props.handleChange}
                            id = 'quantInput'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='commInput'>Commission:</label>
                        <input 
                            type = "number"
                            placeholder = '10'
                            name = 'commission'
                            value = {props.commission}
                            onChange = {props.handleChange}
                            id = 'commInput'
                            className = 'prodIn'
                            required
                        />
                    </div>
                </div>

                <button>Add Product</button>
                
            </form>
        </div> 
    );
}