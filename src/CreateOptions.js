import React from 'react';

export default function CreateOptions(props) {
    function num1() {
        props.work()
        props.prodf(true)
    }
    function num2() {
        props.work()
        props.salespf(true)
    }
    function num3() {
        props.work()
        props.custf(true)
    }
    function num4() {
        props.work()
        props.salef(true)
    }
    function num5() {
        props.work()
        props.disf(true)
    }
    function num6() {
        props.work()
        props.samf(true)
    }
    function num7() {
        props.work()
        props.vief(true)
    }
    function num8() {
        props.work()
        props.anaf(true)
    }
    return (
        <div className = "selectors">
            <button onClick = {num7} className = "options">View Data</button>
            <button onClick = {num8} className = "options">Edit Data</button>
            <button onClick = {num1} className = "options">Add Products</button>
            <button onClick = {num2} className = "options">Add Salespersons</button>
            <button onClick = {num3} className = "options">Add Customers</button>
            <button onClick = {num4} className = "options">Add Sales</button>
            <button onClick = {num5} className = "options">Add Discounts</button>
            <button onClick = {num6} className = "options">Add Sample Data</button>
            <hr></hr>
        </div>
    );
}