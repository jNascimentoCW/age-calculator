let btn = document.querySelector("button");

getMonthDifferences = function(endDate) {
    let startDate = new Date();
    let days = 0;
    let months = 0;
    let years = 0;

    //Checking the year;
    years = startDate.getFullYear() - endDate.getFullYear();
    
    // Checking the months
    if(endDate.getMonth() > startDate.getMonth()){
        years--;
        months = 12 + startDate.getMonth() - endDate.getMonth();
    } else {
        months = startDate.getMonth() - endDate.getMonth();
    }

    // checking the days
    if(endDate.getDate() > startDate.getDate()){
        days =  30 + startDate.getDate() - endDate.getDate();
    } else {
        days = startDate.getDate() - endDate.getDate();
    }
    
    document.querySelector(".daysTxt").innerHTML = days + " days"
    document.querySelector(".monthsTxt").innerHTML = months + " months"
    document.querySelector(".yearsTxt").innerHTML = years + " years"
    console.log(months);
    console.log(days);

}

btn.addEventListener("click", function() {
    let day = document.querySelector(".day").value;
    let month = document.querySelector(".month").value;
    let year = document.querySelector(".year").value;

    let spanDay = document.querySelector(".span-day");
    let spanMonth = document.querySelector(".span-month");
    let spanYear = document.querySelector(".span-year");

    let date = new Date(`${year}/${month}/${day}`);
    console.log(date);
    let bool = (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day); 

    // Check if is a valid date
    if(!bool || date > new Date()){
        // Check if the day is correct
        if(day != date.getDate()) {
            //To style the span text
            spanDay.innerHTML = "Must be a valid day";
            spanDay.style.color = "red";

            // To style the imput
            document.querySelector(".day").style.borderColor = "red";
            document.querySelector(".label-day p").style.color = "red";

            // To show the text beneath the span
            spanDay.style.visibility = "visible";
        }
        // Month between Jan and Dez
        if(month > 12 || month <= 0 ){
            //To style the span text
            spanMonth.innerHTML = "Must be a valid month";
            spanMonth.style.color = "red";

            //To style the imput
            document.querySelector(".month").style.borderColor = "red";
            document.querySelector(".label-month p").style.color = "red";
            
            //To show the text beneath the span
            spanMonth.style.visibility = "visible";
        }
        // Year is not in the future
        if(year > new Date().getFullYear()){
            //To style the span text
            spanYear.innerHTML = "Must be in the past";
            spanYear.style.color = "red";

            //To style the imput
            document.querySelector(".year").style.borderColor = "red";
            document.querySelector(".label-year p").style.color = "red";
            
            //To show the text beneath the span
            spanYear.style.visibility = "visible";
        }

    } else {
        console.log('ok')
        spanDay.innerHTML = "";
        spanMonth.innerHTML = "";
        spanYear.innerHTML = "";

        getMonthDifferences(date);
    }
});
