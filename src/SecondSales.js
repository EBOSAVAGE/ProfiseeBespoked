import React from 'react';
 
export default function SecondSales(props) {
    const styles = {
        display: props.salespOn ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'productInputs'>
            <form onSubmit={props.handleSubmit}>
                <div className = "within">
                    <div className = "boxes1">
                        <label htmlFor='firstName'>First Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'Emmanuel'
                            name = 'firstName'
                            value = {props.firstName}
                            onChange = {props.handleChange}
                            id = 'firstName'
                            className = 'prodIns'
                            required
                        />
                        
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='lastName'>Last Name:</label>
                        <input 
                            type = "text"
                            placeholder = 'Ebhohimen'
                            name = 'lastName'
                            value = {props.lastName}
                            onChange = {props.handleChange}
                            id = 'lastName1'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='address'>Address:</label>
                        <input 
                            type = "text"
                            placeholder = '7 Coconut Road'
                            name = 'address'
                            value = {props.address}
                            onChange = {props.handleChange}
                            id = 'address'
                            className = 'prodIns'
                            required
                        />
                    </div>
                </div>
                
                <div className = "within">
                    <div className = "boxes1">
                        <label htmlFor='phone'>Phone Number (include area code!):</label>
                        <input 
                            type = "number"
                            placeholder = '1234567890'
                            name = 'phone'
                            value = {props.phone}
                            onChange = {props.handleChange}
                            id = 'phone'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='date'>Start Date:</label>
                        <input 
                            type = "date"
                            placeholder = '2023-05-17'
                            name = 'date'
                            value = {props.date}
                            onChange = {props.handleChange}
                            id = 'date'
                            className = 'prodIns'
                            required
                        />
                    </div>
                    
                    <div className = "boxes1">
                        <label htmlFor='termination'>Termination Date:</label>
                        <input 
                            type = "date"
                            placeholder = '2023-08-19'
                            name = 'termination'
                            value = {props.termination}
                            onChange = {props.handleChange}
                            id = 'termination'
                            className = 'prodIns'
                            required
                        />
                    </div>

                    <div className = "boxes1">
                        <label htmlFor='manager'>Manager:</label>
                        <input 
                            type = "text"
                            placeholder = 'John Appleseed'
                            name = 'manager'
                            value = {props.manager}
                            onChange = {props.handleChange}
                            id = 'manager'
                            className = 'prodIns'
                            required
                        />
                    </div>
                </div>
                <button className = "sally">Update Salesperson</button>
            </form>
        </div> 
    );
}
