const body = document.querySelector("body");
body.style.backgroundColor = "#222831";
body.style.color = "#f96d00";

function calculateEMI(p, annualrate, tenureMonths) {
   let monthlyRate = annualrate / 100 / 12;
   let emi = p * monthlyRate * Math.pow((1 + monthlyRate), tenureMonths) / (Math.pow((1 + monthlyRate), tenureMonths) - 1);
   return emi.toFixed(2);
}

const p = document.querySelector("#emi-displayer");
const resetBtn = document.querySelector("#resetBtn");

const btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    let principal = document.querySelector("#loan_amnt").value;
    let rate = document.querySelector("#annual_interset_rate").value;
    let time = document.querySelector("#time").value;
    if(principal && rate && time){
        console.log(calculateEMI(principal,parseFloat(rate),time));
        p.innerHTML = `<p>&#x20B9; ${calculateEMI(principal,parseFloat(rate),time)}</p>`;
    }
    else{
        p.textContent = "*Please fill all fields*";
    }
    

})

resetBtn.addEventListener('click',()=>{
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input)=>{
        input.value = "";
    })
    p.textContent = "-----";
})

