const tipFive = document.getElementById('five');
const tipTen = document.getElementById('ten');
const tipFifteen = document.getElementById('fifteen');
const tipTwentyFive = document.getElementById('twenty_five');
const tipFifty = document.getElementById('fifty');
const custom = document.getElementById('custom');

const calculate = document.getElementById('calculate');

function tip(tipValue) {
  return function () {
    const billInput = document.getElementById('bill');
    const billValue = parseFloat(billInput.value);

    let customTip = 0;
    if (tipValue === 'custom') {
      customTip = parseFloat(custom.value);
    } else {
      customTip = tipValue;
    }

    const numberPeople = document.getElementById('number_of_people');
    const numberPeopleValue = parseFloat(numberPeople.value);

    const tipRate = billValue * (customTip / 100);
    const tipAmount = tipRate / numberPeopleValue;
    const totalTip = document.getElementById('tip_total');
    totalTip.textContent = tipAmount.toFixed(2);

    const totalAmount = (billValue + tipAmount) / numberPeopleValue;
    const tipTotal = document.getElementById('total');
    tipTotal.textContent = totalAmount.toFixed(2);
  };
}

tipFive.addEventListener('click', tip(5));
tipTen.addEventListener('click', tip(10));
tipFifteen.addEventListener('click', tip(15));
tipTwentyFive.addEventListener('click', tip(25));
tipFifty.addEventListener('click', tip(50));
calculate.addEventListener('click', tip('custom'));
