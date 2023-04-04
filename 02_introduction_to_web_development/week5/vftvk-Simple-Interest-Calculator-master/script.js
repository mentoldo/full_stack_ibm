function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;
    var amount = principal + interest;
    var result = document.getElementById("result");

    if (principal <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }

    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>"
        + ",\<br\>at an interest rate of " + "<mark>" + rate + "</mark>"
        + "%.\<br\>You will receive an amount of $" + "<mark>" + amount + "</mark>"
        + ",\<br\>In the year " + "<mark>" + year + "</mark>" 
        + "\<br\>";
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
