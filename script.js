// select year in id
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

// retierment age select box
var retAge = document.querySelector('#retire-id');
retAge.setAttribute('onchange', 'changeValue(this.value)');
var retValue;
// clear option
retAge.innerHTML = "";

// create retirement age option
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

    // find current year
    var currentYeartime = new Date().getTime();
    // console.log(currentYeartime);

    //  get pastDays value in Milliseconds using gettime method
    var pastDays = new Date(leap, birthMonth, birthDate).getTime();
    // console.log(pastDays);

    // get retierment value in Milliseconds using gettime method()
    var choseRetiermentYear = new Date((leap + retValue), birthMonth, birthDate).getTime();
    // console.log(choseRetiermentYear);

    // total days difference
    var daysDifference = (choseRetiermentYear - pastDays);
    // console.log(daysDifference);

    // find total days
    var daysCalculation = Math.ceil(daysDifference / (1000 * 3600 * 24));
    console.log(daysCalculation);

    // PastYear Calculation
    var pastYears = currentYeartime - pastDays;
    // console.log(pastYears);
    var pastYearDays = Math.ceil(pastYears / (1000 * 3600 * 24));
    console.log(pastYearDays);

    //  PastYear Indicator
    var lostingYear;
    for (i = 0; i < pastYearDays; i++) {
        lostingYear = document.createElement('p');
        lostingYear.setAttribute('class', 'box-1');
        result.appendChild(lostingYear);
    }

    // RemainingYear Calculation
    var remainingYear = daysCalculation - pastYearDays;
    console.log(remainingYear);

    // Remaining Year Indicator
    var remainingIndicator;
    for (i = 0; i < remainingYear; i++) {
        remainingIndicator = document.createElement('p');
        remainingIndicator.setAttribute('class', 'box-2');
        result.appendChild(remainingIndicator);
    }
    // display Retirement Year
    var displayRetireYear;
    displayRetireYear = document.querySelector('.show-year');
    displayRetireYear.innerHTML = 'Retirement Year: ' + (leap + retValue);
});


// sample gettime() code

// var past = new Date(2000,10,17)
// var pastTime = past.getTime();

// var current = new Date();
// var curTime =current.getTime();

// var cal = curTime - pastTime;
// console.log(cal);

// var totalday = Math.ceil(cal / (1000 * 3600 * 24));
// console.log(totalday);




















