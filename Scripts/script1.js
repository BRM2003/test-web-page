let MonthlyOption = document.querySelector(".monthly");
let YearlyOption = document.querySelector(".yearly");
let month = document.querySelector('.Month');
let year = document.querySelector('.year');

YearlyOption.addEventListener("click", () => {
    year.style.animationName = "visible";
    year.style.display = "flex";
    MonthlyOption.style.background = "#F8F8F8";
    MonthlyOption.style.color = "black";
    YearlyOption.style.background = "#5454d4";
    YearlyOption.style.color = "white";
    month.style.display = "none";
})

MonthlyOption.addEventListener("click", () => {
    year.style.display = "none";
    month.style.animationName = "visible";
    month.style.display = "flex";
    MonthlyOption.style.background = "#5454d4";
    MonthlyOption.style.color = "white";
    YearlyOption.style.background = "#F8F8F8";
    YearlyOption.style.color = "black"
})


function RandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}