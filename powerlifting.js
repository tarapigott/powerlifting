
function handleform() {
    let squat = getandconvert("squat");
    let bench = getandconvert("bench");
    let deadlift = getandconvert("deadlift");
    let bodyweight = getandconvert("bw");
    let total = squat + bench + deadlift;
    let sex = getSelectValue();
    console.log(total);
    output2(total);
    console.log(bodyweight);
    let coefficient = calculatecoefficient(bodyweight, sex);
    console.log(coefficient);
    let glp = coefficient * total;
    console.log(glp);
    output(glp);
    return false;
}

function getandconvert(id) {
    let element = document.getElementById(id);
    let value = parseFloat(element.value);
    if (isNaN(value)) {
        return 0.00;
    }
    else {
        return value;
    }
}

function getSelectValue() {
    var selectedValue = document.getElementById("sex").value;
    console.log(selectedValue);
    return selectedValue;
}
function calculatecoefficient(bodyweight, sex) {
    let a, b, c;
    if (sex == "female") {
        a = 610.32796;
        b = 1045.59282;
        c = 0.03048;
    }
    else {
        a = 1199.72839;
        b = 1025.18162;
        c = 0.00921;
    }
    let denominator = a - b * Math.pow(Math.E, -c * bodyweight);
    let numerator = 100;
    return numerator / denominator;
}

function output2(total) {
    document.getElementById("total").innerHTML = "Total: "+ total;
}

function output(glp) {
    if (isNaN(glp)) {
        glp = 0.00;

    }
    document.getElementById("output").innerHTML = glp.toFixed(2);
}

