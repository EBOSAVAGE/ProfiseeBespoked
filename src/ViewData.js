import React from 'react';
import jimmy from './jimmy.png';
import bicycle from './Bicycle.png';
import parents from './parents.png';
import sales from './sales.png';
import report from './report.png';
 
export default function ViewData(props) {
    const styles = {
        display: props.viewOn ? "inline" : "none"
    }
    const roaches = {
        display: props.notOff ? "inline" : "none"
    }
    const sword = {
        display: props.viewSalesp ? "inline" : "none"
    }
    const laser = {
        display: props.viewProd ? "inline" : "none"
    }
    const sirius = {
        display: props.viewCust ? "inline" : "none"
    }
    const mount = {
        display: props.viewSale ? "inline" : "none"
    }
    const smart = {
        display: props.viewReport ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'viewer'>
             <div style = {roaches}>
                {!props.snapshot && <h2 id="warning">Add Data First!</h2>}
                {props.snapshot && <h2>View Your Data</h2>}
                
                <div className = "earth">
                    <div className = "container" onClick = {props.changeSalesp}>
                        <img className = "cont" id = "jim" src = {jimmy} alt = "Salesperson"/>
                        <h3 className = "viewerShip">View Salespersons</h3>
                    </div>
                    <div className = "container" onClick = {props.changeProd}>
                        <img className = "cont" id = "bicycle" src = {bicycle} alt = "Bicycle Product"/>
                        <h3 className = "viewerShip">View Products</h3>
                    </div>
                    <div className = "container" onClick = {props.changeCust}>
                        <img className = "cont" id = "parents" src = {parents} alt = "Customers"/>
                        <h3 className = "viewerShip">View Customers</h3>
                    </div>
                    <div className = "container" onClick = {props.changeSale}>
                        <img className = "cont" id = "salee" src = {sales} alt = "Sales"/>
                        <h3 className = "viewerShip">View Sales</h3>
                    </div>
                    <div className = "container" onClick = {props.changeReport}>
                        <img className = "cont" id = "report" src = {report} alt = "Quarterly Report"/>
                        <h3 className = "viewerShip">View Quarterly Salesperson Report</h3>
                    </div>
                </div>
             </div>
            <div style = {sword}>
                <h2>View Salespersons</h2>
                <table className = "table" id="salesMeng"></table>
            </div>
            <div style = {laser}>
                <h2>View Products</h2>
                <table className = "table" id="viewProducts1"></table>
            </div>
            <div style = {sirius}>
                <h2>View Customers</h2>
                <table className = "table" id="viewCust"></table>
            </div>
            <div style = {mount}>
                <h2>View Sales</h2>
                <p id = "fruit"></p>
                <form onSubmit={props.handleFilter}>
                    <input 
                        type = "date"
                        placeholder = '2023-02-03'
                        name = 'filterDate'
                        value = {props.filterDate}
                        onChange = {props.handles}
                        className = 'prodIn'
                    />
                    <button>Filter</button>
                </form>
                <table className = "table" id="viewSale"></table>
            </div>
            <div style = {smart}>
                <h2>View Quarterly Salesperson Report</h2>
                <p id = 'qu'></p>
                <table className = "table" id="viewReport"></table>
            </div>
        </div> 
    );
}
