import React from 'react';
import wolf from './business.png';
import bicycle from './cool.png';
import SecondSales from './SecondSales';
import SecondProduct from './SecondProduct';
 
export default function EditData(props) {
    const styles = {
        display: props.editOn ? "inline" : "none"
    }
    const roaches = {
        display: props.active ? "inline" : "none"
    }
    const sword = {
        display: props.editSales ? "inline" : "none"
    }
    const laser = {
        display: props.editProd ? "inline" : "none"
    }
    return (
        <div style = {styles} className = 'viewer'>
             <div style = {roaches}>
                <h2 id="second"></h2>
                <h2>Edit Your Data</h2>
                
                <div className = "earth">
                    <div className = "container" onClick = {props.editSalesperson}>
                        <img className = "cont" src = {wolf} alt = "Edit Salesperson"/>
                        <h3 className = "viewerShip">Edit Salespersons</h3>
                    </div>
                    <div className = "container" onClick = {props.editProducts}>
                        <img className = "cont" src = {bicycle} alt = "Edit Product"/>
                        <h3 className = "viewerShip">Edit Products</h3>
                    </div>
                </div>
             </div>
            <div style = {sword}>
                <h2>Edit Salespersons</h2>
                <form onSubmit={props.handleSubmit}>
                    <label className = "slabs" htmlFor='searchFname'>Search for Salespersons:</label>
                    <input
                        type = "text"
                        placeholder = "Emmanuel"
                        id = "searchFname"
                        className = "prodIn"
                        value = {props.searchFname}
                        onChange = {props.handleFChange}
                        required
                    />
                    <input
                        type = "text"
                        placeholder = "Ebhohimen"
                        id = "searchLname"
                        className = "prodIn"
                        value = {props.searchLname}
                        onChange = {props.handleLChange}
                        required
                    />
                    <button id="searcher">Enter</button>
                </form>
                <p className = "warning1" id = "nothing"></p>
                <p id="urus"></p>
                <div id = "theform">  
                </div>
                <div id="fargo">
                    <SecondSales 
                        handleSubmit = {props.salesSub} 
                        salespOn = {props.salespOn}
                        {...props.entirety}
                        handleChange = {props.handleChange}
                    />
                </div>
            </div>
            <div style = {laser}>
                <h2>Edit Products</h2>
                <form onSubmit={props.handleSubmit1}>
                    <label className = "slabs" htmlFor='searchProd'>Search for Products:</label>
                    <input
                        type = "text"
                        placeholder = "Product Name"
                        id = "searchProd"
                        className = "prodIn"
                        value = {props.searchProd}
                        onChange = {props.handleSearchP}
                        required
                    />
                    <input
                        type = "text"
                        placeholder = "Manufacturer"
                        id = "searchManu"
                        className = "prodIn"
                        value = {props.searchManu}
                        onChange = {props.handleSearchM}
                        required
                    />
                    <input
                        type = "text"
                        placeholder = "Style"
                        id = "searchStyle"
                        className = "prodIn"
                        value = {props.searchStyle}
                        onChange = {props.handleSearchS}
                        required
                    />
                    <button id="searcher">Enter</button>
                </form>
                <p className = "warning1" id = "nothing1"></p>
                <p id="burus"></p>
                <div id = "theform1">  
                </div>
                <div id="fargo1">
                    <SecondProduct
                        handleSubmit = {props.repush} 
                        productOn = {props.productOn}
                        {...props.some}
                        handleChange = {props.handleProductChange}
                    />
                </div>
            </div>
        </div> 
    );
}