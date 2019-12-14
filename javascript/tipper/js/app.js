// Tip Calculator

// SET Tab 
// SET Tip via If-else 
// CALC Tab + Tip
// SET totTip = Tab + Tip
// CALC totTip + Tab
// SET bill = totTip + Tab

// print bill


let tip = 0;
let tab = 0;
let totTip = 0;
let bill = 0;


tab = prompt("Enter the value of your tab: ");
parseInt(tab);
tip = prompt("Select your tip by entering 15, 20, or 25: 15%, 20%, 25%");
parseInt(tip);

if (tip == 15) {

    tip = tip/100;
    totTip = Number(tip) * Number(tab);
    console.log(typeof(tip));
    
    bill = Number(totTip) + Number(tab);
    let output1 = document.getElementById('output1');
    output1.innerText = tip;
    let output2 = document.getElementById('output2');
    output2.innerText = tab;
    let output3 = document.getElementById('output3');
    output3.innerText = totTip;
    let output4 = document.getElementById('output4');
    output4.innerText = bill;

} else if (tip == 20) {
    tip = 20/100;
    totTip = Number(tip) * Number(tab);
    console.log(typeof(tip));
    
    bill = Number(totTip) + Number(tab);
    let output1 = document.getElementById('output1');
    output1.innerText = tip;
    let output2 = document.getElementById('output2');
    output2.innerText = tab;
    let output3 = document.getElementById('output3');
    output3.innerText = totTip;
    let output4 = document.getElementById('output4');
    output4.innerText = bill;
} else if (tip == 25) {
    tip = 25/100;
    totTip = Number(tip) * Number(tab);
    console.log(typeof(tip));
    
    bill = Number(totTip) + Number(tab);
    let output1 = document.getElementById('output1');
    output1.innerText = tip;
    let output2 = document.getElementById('output2');
    output2.innerText = tab;
    let output3 = document.getElementById('output3');
    output3.innerText = totTip;
    let output4 = document.getElementById('output4');
    output4.innerText = bill;
}
    
