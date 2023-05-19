import React from 'react';
 
export default function DiscountInputs(props) {
    const styles = {
        display: props.disOn ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'productInputs'>
            <h2>Add Discounts</h2>
            <form onSubmit={props.handleSubmit}>
                <div className = "within">
                    <div className = "boxes">
                        <label htmlFor='productName1'> Product Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'BMX Bike'
                            name = 'productName1'
                            value = {props.productName1}
                            onChange = {props.handleChange}
                            id = 'productName1'
                            className = 'prodIn'
                            required
                        />
                    </div>

                    <div className = "boxes">
                        <label htmlFor='begDate'>Begin Date:</label>
                        <input 
                            type = "date"
                            placeholder = '2023-06-07'
                            name = 'begDate'
                            value = {props.begDate}
                            onChange = {props.handleChange}
                            id = 'begDate'
                            className = 'prodIn'
                            required
                        />
                    </div>

                    <div className = "boxes">
                        <label htmlFor='endDate'>End Date:</label>
                        <input 
                            type = "date"
                            placeholder = '2023-01-11'
                            name = 'endDate'
                            value = {props.endDate}
                            onChange = {props.handleChange}
                            id = 'endDate'
                            className = 'prodIn'
                            required
                        />
                    </div>

                    <div className = "boxes">
                        <label htmlFor='discountP'>Discount Percentage:</label>
                        <input 
                            type = "number"
                            placeholder = '25'
                            name = 'discountP'
                            value = {props.discountP}
                            onChange = {props.handleChange}
                            id = 'discountP'
                            className = 'prodIn'
                            required
                        />
                    </div>
                </div>
                
                <button>Add Discount</button>
            </form>
        </div> 
    );
}
