import logo from './BespokeBikes.jpg';
import './App.css';
import React from 'react';
import {initializeApp} from "firebase/app";
import {getDatabase, ref, push, onValue, remove, child} from "firebase/database";
import CreateOptions from './CreateOptions';
import ProductInputs from './ProductInputs';
import SalesPersonInputs from './SalesPersonInputs';
import CustomerInputs from './CustomerInputs';
import SalesInputs from './SalesInputs';
import DiscountInputs from './DiscountInput';
import ViewData from './ViewData';
import EditData from './EditData';
import SampleData from './SampleData';


const appSettings = {
  databaseURL: "https://profisee-database-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const productsInDB = ref(database, "Products")
const salesPersonDB = ref(database, "Salesperson")
const customerInDB = ref(database, "Customer")
const salesInDB = ref(database, "Sales")
const discountInDB = ref(database, "Discount")


function App() {


  const [prodState, setProdState] = React.useState(false)
  const [salespState, setSalespState] = React.useState(false)
  const [custState, setCustState] = React.useState(false)
  const [saleState, setSaleState] = React.useState(false)
  const [disState, setDisState] = React.useState(false)
  const [sampState, setSampState] = React.useState(false)
  const [viewDataState, setViewDataState] = React.useState(false)
  const [editState, setEditState] = React.useState(false)
  const snapshotVar = React.useState(true)


  function setDispS() {
    setProdState(false)
    setSalespState(false)
    setCustState(false)
    setSaleState(false)
    setDisState(false)
    setSampState(false)
    setViewDataState(false)
    setEditState(false)
    setRoaches(true)
    setSalesp(false)
    setViewProd(false)
    setViewCust(false)
    setViewSale(false)
    setViewReport(false)
    setEditScreen(true)
    setEditSales(false)
    setEditPrody(false)
    setSecondProductOn(false)
    setSecondSales(false)
    setProductVals({
      name: "",
      manufacturer: "",
      style: "",
      purchasePrice: 0,
      salePrice: 0,
      quantity: 0,
      commission: 0,
    })
    setSalespVals({
      firstName: "",
      lastName: "",
      address: "",
      phone: 0,
      date: "",
      termination: "",
      manager: "",
    })
    setFname("")
    setLname("")
    setSearchProd("")
    setSearchManu("")
    setSearchStyle("")
    const least = document.getElementById("theform")
    least.innerHTML = ""
    const done = document.getElementById("theform1")
    done.innerHTML = ""
  }

  async function handleFileSelect(event) {
    event.preventDefault()
    let file = document.getElementById('bust').files[0]
    const fileContent = await file.text()
    const second = JSON.parse(fileContent)
    const lazy = Object.entries(second)
    for (let i = 0; i < lazy.length; i++) {
      let theData = lazy[i][1]
      parser(theData)
    }
    const jim = document.getElementById("successMessage")
    jim.innerText = "Successfully Processed"
    setTimeout(function() {
      jim.innerHTML = ''
    },2000)
  }

  function parser(theData) {
    let dataArray = Object.entries(theData)
    dataArray.shift()
    dataArray = Object.fromEntries(dataArray)
    dataArray = JSON.stringify(dataArray)
    if (theData.typeData.toUpperCase() === 'SALESPERSONS') {
      push(salesPersonDB, dataArray)
    } else if (theData.typeData.toUpperCase() === 'CUSTOMERS') {
      push(customerInDB, dataArray)
    } else if (theData.typeData.toUpperCase() === 'PRODUCTS') {
      push(productsInDB, dataArray)
    } else if (theData.typeData.toUpperCase() === 'DISCOUNTS') {
      push(discountInDB, dataArray)
    } else if (theData.typeData.toUpperCase() === 'SALES') {
      push(salesInDB, dataArray)
    }
  }

  const [productVals, setProductVals] = React.useState({
    name: "",
    manufacturer: "",
    style: "",
    purchasePrice: 0,
    salePrice: 0,
    quantity: 0,
    commission: 0,
  })


  const [salespVals, setSalespVals] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: 0,
    date: "",
    termination: "",
    manager: "",
  })


  const [custVals, setCustVals] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: 0,
    date: "",
  })


  const [saleVal, setSaleVals] = React.useState({
    productName: "",
    salesPersonName: "",
    customerName: "",
    salesDate: "",
  })


  const [disVal, setDisVals] = React.useState({
    productName1: "",
    begDate: "",
    endDate: "",
    discountP: 0,
  })


  function handleProductChange(event) {
    const {name, value} = event.target
    setProductVals(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function handleSalespChange(event) {
    const {name, value} = event.target
    setSalespVals(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function handleCustChange(event) {
    const {name, value} = event.target
    setCustVals(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function handleSaleChange(event) {
    const {name, value} = event.target
    setSaleVals(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function handleDiscChange(event) {
    const {name, value} = event.target
    setDisVals(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function addSalespeople() {
    onValue(salesPersonDB, function(snapshot) {
      const outputVar = document.getElementById("salesMeng")
      outputVar.innerHTML = ''
      if (snapshot.exists) {
        outputVar.innerHTML += `<tr>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Address</th>
                                  <th>Phone Number</th>
                                  <th>Start Date</th>
                                  <th>Termination Date</th>
                                  <th>Manager</th>
                                </tr>`
        let salespeople = Object.entries(snapshot.val())
        for (let i = 0; i < salespeople.length; i++) {
          let salesg = salespeople[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          outputVar.innerHTML += `<tr>
                                    <td>${selling.firstName}</td>
                                    <td>${selling.lastName}</td>
                                    <td>${selling.address}</td>
                                    <td>${selling.phone}</td>
                                    <td>${selling.date}</td>
                                    <td>${selling.termination}</td>
                                    <td>${selling.manager}</td>
                                  </tr>`
        }
      }
    })
  }

  function addProducts() {
    onValue(productsInDB, function(snapshot) {
      const outputVar = document.getElementById("viewProducts1")
      outputVar.innerHTML = ''
      if (snapshot.exists) {
        outputVar.innerHTML += `<tr>
                                  <th>Name</th>
                                  <th>Manufacturer</th>
                                  <th>Style</th>
                                  <th>Purchase Price</th>
                                  <th>Sale Price</th>
                                  <th>Quantity on Hand</th>
                                  <th>Commission</th>
                                </tr>`
        let salespeople = Object.entries(snapshot.val())
        for (let i = 0; i < salespeople.length; i++) {
          let salesg = salespeople[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          outputVar.innerHTML += `<tr>
                                    <td>${selling.name}</td>
                                    <td>${selling.manufacturer}</td>
                                    <td>${selling.style}</td>
                                    <td>${selling.purchasePrice}</td>
                                    <td>${selling.salePrice}</td>
                                    <td>${selling.quantity}</td>
                                    <td>${selling.commission}</td>
                                  </tr>`
        }
      }
    })
  }

  function addCustomer() {
    onValue(customerInDB, function(snapshot) {
      const outputVar = document.getElementById("viewCust")
      outputVar.innerHTML = ''
      if (snapshot.exists) {
        outputVar.innerHTML += `<tr>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Address</th>
                                  <th>Phone</th>
                                  <th>Start Date</th>
                                </tr>`
        let salespeople = Object.entries(snapshot.val())
        for (let i = 0; i < salespeople.length; i++) {
          let salesg = salespeople[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          outputVar.innerHTML += `<tr>
                                    <td>${selling.firstName}</td>
                                    <td>${selling.lastName}</td>
                                    <td>${selling.address}</td>
                                    <td>${selling.phone}</td>
                                    <td>${selling.date}</td>
                                  </tr>`
        }
      }
    })
  }

  const [filterDate, setFilterDate] = React.useState("")

  function addSales() {
    onValue(salesInDB, function(snapshot) {
      const outputVar = document.getElementById("viewSale")
      outputVar.innerHTML = ''
      if (snapshot.exists) {
        outputVar.innerHTML += `<tr>
                                  <th>Salesperson</th>
                                  <th>Product Name</th>
                                  <th>Customer</th>
                                  <th>Sale Date</th>
                                  <th>Price</th>
                                  <th>Commission</th>
                                </tr>`
        let salespeople = Object.entries(snapshot.val())
        for (let i = 0; i < salespeople.length; i++) {
          let salesg = salespeople[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          if (filterDate !== "") {
            if (Date.parse(selling.salesDate) >= Date.parse(filterDate)) {
              outputVar.innerHTML += `<tr id = "elephant${i}">
                                        <td>${selling.salesPersonName}</td>
                                        <td>${selling.productName}</td>
                                        <td>${selling.customerName}</td>
                                        <td>${selling.salesDate}</td>`
              const degen = document.getElementById(`elephant${i}`)
              onValue(productsInDB, function(snapshot) {
                if (snapshot.exists) {
                  let pro = Object.entries(snapshot.val())
                  for (let m = 0; m < pro.length; m++) {
                    let king = pro[m]
                    let kingMaker = king[1]
                    kingMaker = JSON.parse(kingMaker)
                    if (kingMaker.name === selling.productName) {
                      degen.innerHTML += `<td>${kingMaker.purchasePrice}</td>
                                          <td>${kingMaker.commission}</td>`
                    }
                  }
                }
                degen.innerHTML += `</tr>`
              })
            }
          } else {
            outputVar.innerHTML += `<tr id = "lessen${i}">
                                      <td>${selling.salesPersonName}</td>
                                      <td>${selling.productName}</td>
                                      <td>${selling.customerName}</td>
                                      <td>${selling.salesDate}</td>
                                    </tr>`
            const lord = document.getElementById(`lessen${i}`)
            onValue(productsInDB, function(snapshot) {
              if (snapshot.exists) {
                let pro = Object.entries(snapshot.val())
                for (let m = 0; m < pro.length; m++) {
                  let king = pro[m]
                  let kingMaker = king[1]
                  kingMaker = JSON.parse(kingMaker)
                  if (kingMaker.name === selling.productName) {
                    lord.innerHTML += `<td>${kingMaker.purchasePrice}</td>
                                        <td>${kingMaker.commission}</td>`
                  }
                }
              }
              lord.innerHTML += `</tr>`
            })
          }
        }
      }
    })
  }

  function handleFilter(event) {
    event.preventDefault()
    addSales()
  }

  function handles(event) {
    const {value} = event.target
    setFilterDate(value)
  }

  function addReport() {
    let date = new Date()
    let milli = date.getTime()
    let monthstomilli = 1000 * 60 * 60 * 24 * 7 * 4
    let runningQuarter = milli - monthstomilli
    const writein = document.getElementById('qu')
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let today = mm + '/' + dd + '/' + yyyy
    let other = (mm - 3) + '/' + dd + '/' + yyyy
    writein.innerText = `Quarterly Report from ${other} to ${today}`
    onValue(salesInDB, function(snapshot) {
      const outputVar = document.getElementById("viewReport")
      outputVar.innerHTML = ''
      if (snapshot.exists) {
        outputVar.innerHTML += `<tr>
                                  <th>Salesperson</th>
                                  <th>Product Name</th> 
                                  <th>Customer</th>                                 
                                  <th>Sale Date</th>
                                  <th>Commission </th>                                  
                                  <th>Purchase Price</th>
                                  <th>Sale Price</th>
                                </tr>`
        let salespeople = Object.entries(snapshot.val())
        for (let i = 0; i < salespeople.length; i++) {
          let salesg = salespeople[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          if (Date.parse(selling.salesDate) >= runningQuarter) {
            outputVar.innerHTML += `<tr id = "reach${i}">
                                      <td>${selling.salesPersonName}</td>
                                      <td>${selling.productName}</td>
                                      <td>${selling.customerName}</td>
                                      <td>${selling.salesDate}</td>`
            const box = document.getElementById(`reach${i}`)
            onValue(productsInDB, function(snapshot) {
              if (snapshot.exists) {
                let pro = Object.entries(snapshot.val())
                for (let m = 0; m < pro.length; m++) {
                  let king = pro[m]
                  let kingMaker = king[1]
                  kingMaker = JSON.parse(kingMaker)
                  if (kingMaker.name === selling.productName) {
                    box.innerHTML += `<td>${kingMaker.commission}</td>
                                      <td>${kingMaker.purchasePrice}</td>
                                      <td>${kingMaker.salePrice}</td>`
                  }
                }
              }
              box.innerHTML += `</tr>`
            })
          }
        }
      }
    })
  }

  function productPush(event) {
    event.preventDefault()
    let present = false
    onValue(productsInDB, function(snapshot) {
      if (snapshot.exists()) {
        let currProducts = Object.entries(snapshot.val())
        for (let i = 0; i < currProducts.length; i++) {
          let curr = currProducts[i]
          let prodContents = curr[1]
          prodContents = JSON.parse(prodContents)
          if (prodContents.name === productVals.name 
            && prodContents.manufacturer === productVals.manufacturer
            && prodContents.style === productVals.style) {
              present = true
          }
        }
      }      
    })   
    if (!present) {
      push(productsInDB, JSON.stringify(productVals))
    }
    setProductVals({
      name: "",
      manufacturer: "",
      style: "",
      purchasePrice: 0,
      salePrice: 0,
      quantity: 0,
      commission: 0,
    })
  }

  function salespPush(event) {

    event.preventDefault()
    let present = false

    onValue(salesPersonDB, function(snapshot) {
      if (snapshot.exists()) {
        let salesMen = Object.entries(snapshot.val())
        for (let i = 0; i < salesMen.length; i++) {
          let salesg = salesMen[i]
          let selling = salesg[1]

          selling = JSON.parse(selling)

          if (selling.firstName === salespVals.firstName 
            && selling.lastName === salespVals.lastName) {

              present = true

          }
        }
      }
      
    })

    if (!present) {
      push(salesPersonDB, JSON.stringify(salespVals))
    }
    setSalespVals({
      firstName: "",
      lastName: "",
      address: "",
      phone: 0,
      date: "",
      termination: "",
      manager: "",
    })
  }

  function custPush(event) {
    event.preventDefault()
    push(customerInDB, JSON.stringify(custVals))
    setCustVals({
      firstName: "",
      lastName: "",
      address: "",
      phone: 0,
      date: "",
    })
  }

  function salePush(event) {
    event.preventDefault()
    push(salesInDB, JSON.stringify(saleVal))
    setSaleVals({
      productName: "",
      salesPersonName: "",
      customerName: "",
      salesDate: "",
    })
  }

  function disPush(event) {
    event.preventDefault()
    push(discountInDB, JSON.stringify(disVal))
    setDisVals({
      productName1: "",
      begDate: "",
      endDate: "",
      discountP: 0,
    })
  }

  const [roaches, setRoaches] = React.useState(true)
  const [viewSalesp, setSalesp] = React.useState(false)
  const [viewProd, setViewProd] = React.useState(false)
  const [viewCust, setViewCust] = React.useState(false)
  const [viewSale, setViewSale] = React.useState(false)
  const [viewReport, setViewReport] = React.useState(false)

  function changePerson() {
    setRoaches(false)
    setViewProd(false)
    setViewCust(false)
    setViewSale(false)
    setViewReport(false)
    setSalesp(true)
    addSalespeople()
  }

  function changeProd() {
    setRoaches(false)
    setSalesp(false)
    setViewCust(false)
    setViewSale(false)
    setViewReport(false)
    setViewProd(true)
    addProducts()
  }

  function changeCust() {
    setRoaches(false)
    setSalesp(false)
    setViewCust(true)
    setViewSale(false)
    setViewReport(false)
    setViewProd(false)
    addCustomer()
  }

  function changeSale() {
    setRoaches(false)
    setSalesp(false)
    setViewCust(false)
    setViewSale(true)
    setViewReport(false)
    setViewProd(false)
    addSales()
  }

  function changeReport() {
    setRoaches(false)
    setSalesp(false)
    setViewCust(false)
    setViewSale(false)
    setViewReport(true)
    setViewProd(false)
    addReport()
  }

  const [editScreen, setEditScreen] = React.useState(true)
  const [editSalesp, setEditSales] = React.useState(false)
  const [editprody, setEditPrody] = React.useState(false)
  const [searchFname, setFname] = React.useState("")
  const [searchLname, setLname] = React.useState("")
  const [secondSalesOn, setSecondSales] = React.useState(false)

  function handleSearchF(event) {
    const {value} = event.target
    setFname(value)
  }

  function handleSearchL(event) {
    const {value} = event.target
    setLname(value)
  }

  function editSalesmen() {
    setEditScreen(false)
    setEditSales(true)
    setEditPrody(false)
  }

  function editProducer() {
    setEditScreen(false)
    setEditSales(false)
    setEditPrody(true)
  }

  function searchSales(event) {
    event.preventDefault()
    let present = false
    onValue(salesPersonDB, function(snapshot) {
      const actual = document.getElementById("theform")
      const forms = document.createElement("div")
      forms.setAttribute("id", "please")
      actual.appendChild(forms)
      const outputVar = document.createElement("table")
      outputVar.setAttribute("id", "nova")
      const errorNon = document.getElementById("nothing")
      errorNon.innerText = ''
      outputVar.innerHTML = ''
      if (snapshot.exists()) {
        let currProducts = Object.entries(snapshot.val())
        for (let i = 0; i < currProducts.length; i++) {
          let curr = currProducts[i]
          let prodContents = curr[1]
          let salesData = JSON.parse(prodContents)
          if (salesData.firstName === searchFname
            && salesData.lastName === searchLname) {
            present = true      
            setSalespVals({
              firstName: salesData.firstName,
              lastName: salesData.lastName,
              address: salesData.address,
              phone: salesData.phone,
              date: salesData.date,
              termination: salesData.termination,
              manager: salesData.manager,
            })
            outputVar.innerHTML += `<tr>
                                      <th>First Name</th>
                                      <th>Last Name</th>
                                      <th>Address</th>
                                      <th>Phone Number</th>
                                      <th>Start Date</th>
                                      <th>Termination Date</th>
                                      <th>Manager</th>
                                    </tr>
                                    <tr>
                                    <td>${salesData.firstName}</td>
                                    <td>${salesData.lastName}</td>
                                    <td>${salesData.address}</td>
                                    <td>${salesData.phone}</td>
                                    <td>${salesData.date}</td>
                                    <td>${salesData.termination}</td>
                                    <td>${salesData.manager}</td>
                                  </tr>`
            forms.appendChild(outputVar)
          }
        }
        if (present === false) {
          errorNon.innerText = "There is no data matching the name provided."
        } else {
          setSecondSales(true)
        }
      } else {
        errorNon.innerText = "Please add Salespersons before attempting to Edit"
      }   
      setTimeout(function() {
        errorNon.innerText = ''
      },2000)   
    }) 
  }

  function repush(event) { //may need to take in a key
    event.preventDefault()
    let present = false
    const theTable = document.getElementById("please")
    const smurf = document.getElementById("nova")
    const least = document.getElementById("theform")
    let key = ""
    onValue(salesPersonDB, function(snapshot) {
      if (snapshot.exists()) {
        let salesMen = Object.entries(snapshot.val())
        for (let i = 0; i < salesMen.length; i++) {
          let salesg = salesMen[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          if (selling.firstName === salespVals.firstName 
            && selling.lastName === salespVals.lastName) {
              present = true
          }
          if (searchFname === selling.firstName
            && searchLname === selling.lastName) {
              key = salesg[0]
            }
        }
        if (!present) {
          remove(child(salesPersonDB, key))
          push(salesPersonDB, JSON.stringify(salespVals))
          document.getElementById("urus").innerText = "Successfully Updated"
          setSecondSales(false)
          smurf.remove()
          theTable.remove()
          least.innerHTML = ""
          setFname("")
          setLname("")

        } else {
          document.getElementById("urus").innerText = "Cannot Add Duplicate Data"
        }
      } else {
        document.getElementById("urus").innerText = "No Data to Update"
      }  
    })
    setTimeout(function() {
      document.getElementById("urus").innerHTML = ''
    },2000)
  }

  const [secondProductOn, setSecondProductOn] = React.useState(false)
  const [searchProd, setSearchProd] = React.useState("")
  const [searchManu, setSearchManu] = React.useState("")
  const [searchStyle, setSearchStyle] = React.useState("")

  function searchPrody(event) {
    event.preventDefault()
    let present = false
    onValue(productsInDB, function(snapshot) {
      const actual = document.getElementById("theform1")
      const forms = document.createElement("div")
      forms.setAttribute("id", "pleaser")
      actual.appendChild(forms)
      const outputVar = document.createElement("table")
      outputVar.setAttribute("id", "supernova")
      const errorNon = document.getElementById("nothing1")
      errorNon.innerText = ''
      outputVar.innerHTML = ''
      if (snapshot.exists()) {
        let currProducts = Object.entries(snapshot.val())
        for (let i = 0; i < currProducts.length; i++) {
          let curr = currProducts[i]
          let prodContents = curr[1]
          let salesData = JSON.parse(prodContents)
          if (salesData.name === searchProd
            && salesData.manufacturer === searchManu
            && salesData.style === searchStyle) {
            present = true      
            setProductVals({
              name: salesData.name,
              manufacturer: salesData.manufacturer,
              style: salesData.style,
              purchasePrice: salesData.purchasePrice,
              salePrice: salesData.salePrice,
              quantity: salesData.quantity,
              commission: salesData.commission,
            })
            outputVar.innerHTML += `<tr>
                                      <th>Product Name</th>
                                      <th>Manufacturer</th>
                                      <th>Style</th>
                                      <th>Purchase Price</th>
                                      <th>Sale Price</th>
                                      <th>Quantity</th>
                                      <th>Commission</th>
                                    </tr>
                                    <tr>
                                    <td>${salesData.name}</td>
                                    <td>${salesData.manufacturer}</td>
                                    <td>${salesData.style}</td>
                                    <td>${salesData.purchasePrice}</td>
                                    <td>${salesData.salePrice}</td>
                                    <td>${salesData.quantity}</td>
                                    <td>${salesData.commission}</td>
                                  </tr>`
            forms.appendChild(outputVar)
          }
        }
        if (present === false) {
          errorNon.innerText = "There is no data matching the name provided."
        } else {
          setSecondProductOn(true)
        }
      } else {
        errorNon.innerText = "Please add Salespersons before attempting to Edit"
      } 
      setTimeout(function() {
        errorNon.innerText = ''
      },2000)    
    }) 
  }

  function repushProd(event) { 
    event.preventDefault()
    let present = false
    const theTable = document.getElementById("pleaser")
    const smurf = document.getElementById("supernova")
    const least = document.getElementById("theform1")
    let key = ""
    onValue(productsInDB, function(snapshot) {
      if (snapshot.exists()) {
        let salesMen = Object.entries(snapshot.val())
        for (let i = 0; i < salesMen.length; i++) {
          let salesg = salesMen[i]
          let selling = salesg[1]
          selling = JSON.parse(selling)
          if (selling.name === productVals.name
            && selling.manufacturer === productVals.manufacturer
            && selling.style === productVals.style) {
              present = true
          }
          if (selling.name === searchProd
            && selling.manufacturer === searchManu
            && selling.style === searchStyle) {
              key = salesg[0]
            }
        }
        if (!present) {
          remove(child(productsInDB, key)) //Where update occurs
          push(productsInDB, JSON.stringify(productVals))
          document.getElementById("burus").innerText = "Successfully Updated"
          setSecondProductOn(false)
          smurf.remove()
          theTable.remove()
          least.innerHTML = ""
          setSearchProd("")
          setSearchManu("")
          setSearchStyle("")
        } else {
          document.getElementById("burus").innerText = "Cannot Add Duplicate Data"
        }
      } else {
        document.getElementById("burus").innerText = "No Data to Update"
      }  
    })
    setTimeout(function() {
      document.getElementById("burus").innerHTML = ''
    },2000)
  }

  function handleSearchP(event) {
    const {value} = event.target
    setSearchProd(value)
  }

  function handleSearchM(event) {
    const {value} = event.target
    setSearchManu(value)
  }

  function handleSearchS(event) {
    const {value} = event.target
    setSearchStyle(value)
  }

  return (
    <div className="App">
      <h1 id = "intro">Welcome to Bespoked Bikes Sales Channel</h1>
      <img id="logoImage" src={logo} alt="Bespoke Bikes"></img>
      <CreateOptions 
        work = {setDispS} 
        prod = {prodState} 
        prodf = {setProdState}
        salesp = {salespState}
        salespf = {setSalespState}
        cust = {custState}
        custf = {setCustState}
        sale = {saleState}
        salef = {setSaleState}
        dis = {disState}
        disf = {setDisState}
        sam = {sampState}
        samf = {setSampState}
        vie = {viewDataState}
        vief = {setViewDataState}
        ana = {editState}
        anaf = {setEditState}
      />
      <ProductInputs 
        handleSubmit = {productPush} 
        productOn = {prodState}
        {...productVals}
        handleChange = {handleProductChange}
      />
      <SalesPersonInputs 
        handleSubmit = {salespPush} 
        salespOn = {salespState}
        {...salespVals}
        handleChange = {handleSalespChange}
      />
      <CustomerInputs 
        handleSubmit = {custPush} 
        custOn = {custState}
        {...custVals}
        handleChange = {handleCustChange}
      />
      <SalesInputs 
        handleSubmit = {salePush} 
        saleOn = {saleState}
        {...saleVal}
        handleChange = {handleSaleChange}
      />
      <DiscountInputs 
        handleSubmit = {disPush} 
        disOn = {disState}
        {...disVal}
        handleChange = {handleDiscChange}
      />
      <ViewData 
        viewOn = {viewDataState}
        snapshot = {snapshotVar}
        notOff = {roaches}
        viewSalesp = {viewSalesp}
        viewProd = {viewProd}
        viewCust = {viewCust}
        viewSale = {viewSale}
        viewReport ={viewReport}
        changeSalesp = {changePerson}
        changeProd = {changeProd}
        changeCust = {changeCust}
        changeSale = {changeSale}
        changeReport = {changeReport}
        handles = {handles}
        handleFilter = {handleFilter}
      />
      <EditData 
        editOn = {editState}
        active = {editScreen}
        editSales = {editSalesp}
        editProd = {editprody}
        editProducts = {editProducer}
        editSalesperson = {editSalesmen}

        searchFname = {searchFname}
        searchLname = {searchLname}
        handleFChange = {handleSearchF}
        handleLChange = {handleSearchL}
        handleSubmit = {searchSales}
        salesSub = {repush} 
        salespOn = {secondSalesOn}
        entirety = {salespVals}
        handleChange = {handleSalespChange}

        handleSearchP = {handleSearchP}
        handleSearchM = {handleSearchM}
        handleSearchS = {handleSearchS}
        searchProd = {searchProd}
        searchManu = {searchManu}
        searchStyle = {searchStyle}
        handleSubmit1 = {searchPrody}
        repush = {repushProd} 
        productOn = {secondProductOn}
        some = {productVals}
        handleProductChange = {handleProductChange}
      />
      <SampleData 
        shown = {sampState}
        handleFileSelect = {handleFileSelect}  
      />
    </div>
  );
}

export default App;