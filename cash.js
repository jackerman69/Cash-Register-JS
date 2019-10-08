// create cashRegister object
const cashRegister = {
    total: 0,
    items: 0,
    add: function(itemCost){
        return this.total += itemCost;
    }
}
// Assign query selectors
const selectItemScan = document.querySelector('#button');
const selectPrintButton = document.querySelector('#print');
const selectPrintTotal = document.querySelector('#printTotal');

//Scan Function 
function scan(){
    cashRegister.items = prompt("Please enter the total amount of items");
    // loop through user item input
    for (let i = 0; i < cashRegister.items; i++) {
        // hold total
        let add = prompt("Enter the cost of each item");
        // add user total
        cashRegister.add(parseFloat(add)); 
                
    }
     
}

// Print function
function print(){
    if(cashRegister.total === 0){
        confirm("Please enter your items");
    }
    else{
        // append users total to DOM
        console.log(cashRegister.total);
        selectPrintTotal.innerHTML = "Your total is: $" + cashRegister.total;
    }
        selectPrintTotal.setAttribute('style', 'display: block');
}




// assign event listeners
selectItemScan.addEventListener('click', e => {
    const button = e.target;
    scan();
})

selectPrintButton.addEventListener('click', e => {
    const printButton = e.target;
    print();
    
})


