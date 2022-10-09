console.log("Script Initiated");

const submitbutton = document.getElementById("submit")
var cups = (document.getElementById("cupsofcoffee").value);
var strength = (document.getElementById("strength").value);


submitbutton.addEventListener("click", function () {

    if (strength === "mild") {
        document.getElementById("result").value =
            cups * 70
    }
    if (strength === "medium") {
        document.getElementById("result").value =
            cups * 100
    }
    if (strength === "strong"){
        document.getElementById("result").value =
            cups * 140
    }
}
);


























