var allCars=[];
var submitBtn= document.getElementById('submit');
var carsTable= document.getElementById('carsTable');
var carForm = document.getElementById('carForm');

if (JSON.parse(localStorage.getItem('allCars'))){
    allCars=JSON.parse(localStorage.getItem('allCars')) || [];
    
    tableHeader();
    tableContent();
}else{
    tableHeader();
}
// var model = document.getElementById('carModel');
// var modelYear = document.getElementById('modelYear');
// var selectedManufacturerId=document.getElementById('manufacturer').selectedIndex;
// var manufacturer =document.getElementById('manufacturer')[selectedManufacturerId].value;


function estimatedPrice(){
  return Math.floor(Math.random()*(100000-7000 + 1)+7000);
}

function Car(carModel,modelYear,manufacturer){
    this.carModel=carModel;
    this.modelYear=modelYear;
    this.price=estimatedPrice();
    this.manufacturer=manufacturer;
    allCars.push(this);
    localStorage.setItem("allCars",JSON.stringify(allCars));
}


function tableHeader(){
    
   var tr = document.createElement('tr')
    carsTable.appendChild(tr);
    var th1 = document.createElement('th');
    th1.textContent= 'Car Model';
    tr.appendChild(th1);

    var th2 = document.createElement('th');
    th2.textContent= 'Model Year';
    tr.appendChild(th2);

    var th3 = document.createElement('th');
    th3.textContent= 'Price';
    tr.appendChild(th3);

    var th4 = document.createElement('th');
    th4.textContent= 'Car Manufacturer';
    tr.appendChild(th4);

}

function tableContent(){
    for(var i =0 ; i<allCars.length; i++){
    var tr1= document.createElement('tr');
    carsTable.appendChild(tr1);

    var td1 = document.createElement('td');
    td1.textContent= allCars[i].carModel;
    tr1.appendChild(td1);

    var td2 = document.createElement('td');
    td2.textContent= allCars[i].modelYear;
    tr1.appendChild(td2);

    var td3 = document.createElement('td');
    td3.textContent= allCars[i].price;
    tr1.appendChild(td3);

    var td4 = document.createElement('td');
    td4.textContent= allCars[i].manufacturer;
    tr1.appendChild(td4);
}}



carForm.addEventListener('submit', hadleSubmit);
function hadleSubmit(event){
event.preventDefault();
var carModel = event.target.carModel.value;
var modelYear = event.target.modelYear.value;
var selectedIndex = event.target.manufacturer.options.selectedIndex;
var manufacturer = event.target.manufacturer.options[selectedIndex].value;
new Car(carModel,modelYear,manufacturer);
carsTable.textContent='';
tableHeader();
tableContent();
}
