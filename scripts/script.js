const seats = document.querySelectorAll('.seat');

let count = 0;
let seatLeft = document.getElementById('seat-left').innerText;


for(const seat of seats){
    seat.addEventListener('click', function(event){
 count++;
 if(count > 4){
    alert('you cannot select more than four seat')
    return;
    
 }

 seatLeft--;
       const title = seat.innerText;
       const price = 550;
       const className = 'Economoy';


setInnerText('seat-count', count);
setInnerText('seat-left', seatLeft);
const selectedContainer = document.getElementById('count-container');

const tbody = document.createElement('thead');

selectedContainer.appendChild(tbody);

const td = document.createElement('td');
td.innerText = title;
const td1 = document.createElement('td');
td1.innerText = className;
const td2 = document.createElement('td');
td2.innerText = price;

tbody.appendChild(td);
tbody.appendChild(td1);
tbody.appendChild(td2);
// total section

if(count === 4){
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.removeAttribute('disabled');
    
    }

const totalPrice = document.getElementById('totalPrice').innerText;
const convertedTotalPrice = parseInt(totalPrice);

document.getElementById('totalPrice').innerText = convertedTotalPrice + parseInt(price);


const grandTotal = document.getElementById('grandTotal').innerText;
document.getElementById('grandTotal').innerText = parseInt(document.getElementById('totalPrice').innerText);

event.target.style.backgroundColor = "#1DD100";
    event.target.style.color = "white";
    event.target.disabled = true;

    // modal
    const seatCount = document.getElementById("seat-count").innerText;

    if (seatCount > 0) {
      const numberInput = document.getElementById("number-input");
      const modalBtn = document.getElementById("modalBtn");
      numberInput.addEventListener("input", function () {
        if (this.value.length > 0) {
          modalBtn.removeAttribute("disabled");
       
        } else {
          modalBtn.setAttribute("disabled", true);
        }
      });
    }
    
    })
}


// cupon section
const btn = document.getElementById('apply-btn')
btn.addEventListener('click', function(){
 


    // input value
    const cuponElement = document.getElementById('input-field').value;

if(cuponElement === 'NEW15' || cuponElement === 'Couple 20'){
const discountContainer = document.getElementById('discountContainer');
discountContainer.classList.remove('hidden');
if(cuponElement === 'NEW15'){
    const discountElement = document.getElementById('discountPrice');
    const discountAmount = document.getElementById('totalPrice').innerText * 0.15;
    discountElement.innerText = discountAmount.toFixed(2);
grandTotal.innerText = document.getElementById('totalPrice').innerText - parseInt(discountAmount);
const cuponContainer = document.getElementById('cuponContainer');
cuponContainer.classList.add('hidden');
}if(cuponElement === 'Couple 20'){

    const discountElement = document.getElementById('discountPrice');
    const discountAmount = document.getElementById('totalPrice').innerText * 0.2;
 
    discountElement.innerText = discountAmount.toFixed(2);
    grandTotal.innerText = document.getElementById('totalPrice').innerText - parseInt(discountAmount);
    const cuponContainer = document.getElementById('cuponContainer');
cuponContainer.classList.add('hidden');

}

}else{
    alert('please apply valid cupon code')
}



})




function setInnerText(id, value){
document.getElementById(id).innerText = value;

}