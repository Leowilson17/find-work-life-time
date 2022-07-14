var selEle = document.getElementById('year-id');
// selEle.setAttribute('onchange', 'fun(this.value)');
var optEle;

for (i = 1972; i <= 2006; i++) {
    optEle = document.createElement('option');
    optEle.innerHTML = i;
    selEle.appendChild(optEle);
}
var leap;
function fun(x) {
  leap = (~~x);
//  console.log(leap);
 
} 

//  append year container 
var yearCon = document.querySelector('.year-con');
yearCon.appendChild(selEle);

// create month option
var month = document.createElement('select');

function monName(monthName) {
    // console.log(monthName);

    // append days in month container

    var dayEle = document.getElementById('day-cont');
    var dayOption;

    if (leap % 4 == 0 && monthName == 'feb') {
        for (i = 1; i <= 29; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            console.log(dayEle);
        }
    }
    else if (monthName == 'feb') {
        for (i = 1; i <= 28; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            console.log(dayEle);
        }
    }
    else if (monthName == 'jan' || monthName == "mar" || monthName == 'may' || monthName == 'july' || monthName == 'aug' || monthName == "oct" || monthName == 'dec') {
        for (i = 1; i <= 31; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            console.log(dayEle);
        }
    }
    else if (monthName == 'apr' || monthName == "june" || monthName == "sep" || monthName == "nov") {
        for (i = 1; i <= 30; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            console.log(dayEle);
        }
    
    }
}
monName.clear();
