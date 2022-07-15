var selEle = document.getElementById('year-id');
var optEle;

// create year option
for (i = 1972; i <= 2006; i++) {
    optEle = document.createElement('option');
    optEle.innerHTML = i;
    selEle.appendChild(optEle);
}

// get value from select box
var leap;
function fun(x) {
    leap = (~~x);
    // console.log(leap);
}

// create month option
var birthMonth;
function monName(monthName) {
    birthMonth = (~~monthName);
    // console.log(~~birthMonth);

    // append days in month container
    var dayEle = document.getElementById('day-cont');
    // clear days in loop
    dayEle.innerHTML = "";
    var dayOption;
    if (leap % 4 == 0 && monthName == 1) {
        for (i = 1; i <= 29; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            // console.log(dayEle);
        }
    }

    else if (monthName == 1) {
        for (i = 1; i <= 28; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            // console.log(dayEle);
        }
    }
    else if (monthName == 0 || monthName == 2 || monthName == 4 || monthName == 6 || monthName == 7 || monthName == 9 || monthName == 11) {
        for (i = 1; i <= 31; i++) {
            dayOption = document.createElement('option');
            dayOption.innerText = i;
            dayEle.appendChild(dayOption);
            // console.log(dayEle); 
        }
    }
    else if (monthName == 3 || monthName == 5 || monthName == 8 || monthName == 10) {
        for (i = 1; i <= 30; i++) {
            dayOption = document.createElement('option');
            dayOption.innerHTML = i;
            dayEle.appendChild(dayOption);
            // console.log(dayEle);
        }
    }
}

// get days
var birthDate;
function days(date) {
    birthDate = (~~date);
    // console.log(birthDate);
}

// display year
var displayRetireYear;
displayRetireYear = document.querySelector('.show-year');

// retierment age select box
var retAge = document.querySelector('#retire-id');
retAge.setAttribute('onchange','changeValue(this.value)');
var retValue;
// clear option
    retAge.innerHTML = "";
    for (i = 45; i <= 60; i++) {
        retireAge = document.createElement('option');
        retireAge.innerHTML = i;
        retAge.appendChild(retireAge);
        // console.log(i);
    }
 function changeValue(value) {
    retValue = (~~value);
    console.log(retValue);
};

// get result-div
var result = document.querySelector('.result-div');
// go-btn event
var checkBtn = document.querySelector('#go-btn');
checkBtn.addEventListener('click', function () {

    // clear option
    result.innerHTML = "";
    
    // Calculation
    var retirementYear = leap + retValue;
    console.log(retirementYear);
    var presentYear = new Date();
    var thisYear = presentYear.getFullYear();
    var remainingYear = retirementYear - thisYear;
    console.log(remainingYear);


    // var date = new Date(leap,birthMonth,birthDate);
    // console.log(date.getFullYear()); 

    // PastYear Calculation
    pastYears = thisYear - leap;
    console.log(pastYears);

    //  PastYear Indicator
    var lostingYear;
    for (i = 0; i < pastYears; i++) {
        lostingYear = document.createElement('p');
        lostingYear.setAttribute('class', 'box-1');
        result.appendChild(lostingYear);
    }

    // Remaining Year Indicator
    var remainingIndicator;
    for (i = 0; i < remainingYear; i++) {
        remainingIndicator = document.createElement('p');
        remainingIndicator.setAttribute('class', 'box-2');
        result.appendChild(remainingIndicator);
    }
    displayRetireYear.innerHTML = 'Retirement Year: ' + retirementYear;
});














