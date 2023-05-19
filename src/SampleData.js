import React from 'react';

export default function SampleData(props) {
    const styles = {
        display: props.shown ? "inline" : "none"
    }
    return (
        <div style = {styles} id = "sample">
            <h2>Add Sample Data</h2>
            <p id = "instruct">To add data directly to the database, please follow the following instructions.</p>
            <ol>
                <li className='pore'>
                    1. Submit a JSON file. No other file types will work correctly. If this rule is not followed, your data will not be added
                </li>
                <li className='pore'>2. Order the data in the JSON file properly using the following conventions and object names.</li>
                <ul>
                    <li className='pore'>For products: {'{"typeData":"products","name":"iPhone 8","manufacturer":"Apple","style":"Red","purchasePrice":"920.99","salePrice":"920.99","quantity":"123","commission":"20"}'}</li>
                    <li className='pore'>For salespersons: {`{"typeData":"salespersons","firstName":"Emmanuel","lastName":"Ebhohimen","address":"89 Bogwalk Drive","phone":"7700990033","date":"2023-05-18","termination":"2023-06-02","manager":"Mr. Jacobs"}`}</li>
                    <li className='pore'>For Customers: {`{"typeData":"customers","firstName":"Jonah","lastName":"Hill","address":"75 Beverly Hills Road","phone":"8489330404","date":"2023-05-12"`}</li>
                    <li className='pore'>For Sales: {`{"typeData":"sales","productName":"iphone 8","salesPersonName":"Hercules","customerName":"Zeus","salesDate":"2021-02-16","}`}</li>
                    <li className='pore'>For Discounts: {`{"typeData":"discounts","productName1":"iPhone 8","begDate":"2023-05-08","endDate":"2023-06-03","discountP":"10"}`}</li>
                </ul>
                <li className='pore'>
                    3. Here is a <a href="https://drive.google.com/file/d/113YKqzzW0nyhuxCktkRElUFvCaXFLTZx/view?usp=sharing" 
                    download>sample file</a> that you can use as reference or test functionality.
                </li>
                <li className='pore'>4. Now all you have to do is submit!</li>
            </ol>
            
            <form id = "gosh" onSubmit = {props.handleFileSelect}>
                <p id = "successMessage"></p>
                <input type = "file" id = "bust" accept = ".json"/>
                <button id = "last">Submit</button>
            </form>
        </div>
    );
}