import React from 'react';
 
export default function SecondProduct(props) {
    const styles = {
        display: props.productOn ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'productInputs'>
            <form onSubmit={props.handleSubmit}>
                <div className = "within">
                    <div className = "boxes1">
                        <label htmlFor='nameInput'>Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'Mountain Bike'
                            name = 'name'
                            value = {props.name}
                            onChange = {props.handleChange}
                            id = 'nameInput'
                            className = 'prodIns'
                            required
                        />
                        
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='manuInput'>Manufacturer:</label>
                        <input 
                            type = "text"
                            placeholder = 'Bespoke Bikes'
                            name = 'manufacturer'
                            value = {props.manufacturer}
                            onChange = {props.handleChange}
                            id = 'manuInput'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='styleInput'>Style:</label>
                        <input 
                            type = "text"
                            placeholder = 'Hot Safari'
                            name = 'style'
                            value = {props.style}
                            onChange = {props.handleChange}
                            id = 'styleInput'
                            className = 'prodIns'
                            required
                        />
                    </div>
                </div>
                
                <div className = "within">
                    <div className = "boxes1">
                        <label htmlFor='purchaseInput'>Purchase Price:</label>
                        <input 
                            type = "number"
                            placeholder = '800'
                            name = 'purchasePrice'
                            value = {props.purchasePrice}
                            onChange = {props.handleChange}
                            id = 'purchaseInput'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='saleInput'>Sale Price:</label>
                        <input 
                            type = "number"
                            placeholder = '700'
                            name = 'salePrice'
                            value = {props.salePrice}
                            onChange = {props.handleChange}
                            id = 'saleInput'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='quantInput'>Quantity on Hand:</label>
                        <input 
                            type = "number"
                            placeholder = '100'
                            name = 'quantity'
                            value = {props.quantity}
                            onChange = {props.handleChange}
                            id = 'quantInput'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='commInput'>Commission:</label>
                        <input 
                            type = "number"
                            placeholder = '10'
                            name = 'commission'
                            value = {props.commission}
                            onChange = {props.handleChange}
                            id = 'commInput'
                            className = 'prodIns'
                            required
                        />
                    </div>
                </div>
                <p id="burus"></p>
                <button className = "sally">Update Product</button>
            </form>
        </div> 
    );
}