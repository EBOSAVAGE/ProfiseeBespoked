//First Name, Last Name, Address, Phone, Start Date
import React from 'react';
 
export default function CustomerInputs(props) {
    const styles = {
        display: props.custOn ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'productInputs'>
            <h2>Add Customers</h2>
            <form onSubmit={props.handleSubmit}>
                <div className = "within">
                    <div className = "boxes">
                        <label htmlFor='firstName'> First Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'Emmanuel'
                            name = 'firstName'
                            value = {props.firstName}
                            onChange = {props.handleChange}
                            id = 'firstName'
                            className = 'prodIn'
                            required
                        />
                        
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='lastName'>Last Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'Ebhohimen'
                            name = 'lastName'
                            value = {props.lastName}
                            onChange = {props.handleChange}
                            id = 'lastName'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='address'>Address:</label>
                        <input 
                            type = "text"
                            placeholder = '7 Coconut Road'
                            name = 'address'
                            value = {props.address}
                            onChange = {props.handleChange}
                            id = 'address'
                            className = 'prodIn'
                            required
                        />
                    </div>
                </div>
                
                <div className = "within">
                    <div className = "boxes">
                        <label htmlFor='phone'>Phone Number (include area code!):</label>
                        <input 
                            type = "text"
                            placeholder = '1234567890'
                            name = 'phone'
                            value = {props.phone}
                            onChange = {props.handleChange}
                            id = 'phone1'
                            className = 'prodIn'
                            required
                        />
                    </div>
                    
                    <div className = "boxes">
                        <label htmlFor='date'>Start Date:</label>
                        <input 
                            type = "date"
                            placeholder = '2023-05-17'
                            name = 'date'
                            value = {props.date}
                            onChange = {props.handleChange}
                            id = 'date1'
                            className = 'prodIn'
                            required
                        />
                    </div>
                </div>

                <button>Add Customer</button>
            </form>
        </div> 
    );
}
