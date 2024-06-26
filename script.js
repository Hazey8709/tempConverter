//* Get Elements
const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

//* Clear Button
const clearBtn = document.getElementById("clear-Btn");

//* Convert temps (Switch Statement)
function computeTemp(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(
                2
            );
            break;
        default:
            break;
    }
}

//* Clear inputs values
clearBtn.addEventListener("click", () => {
    celsiusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
});

// !     Another way of doing it
// const conversionFormulas = {
//     celsius: {
//         kelvin: (value) => value + 273.32,
//         fahrenheit: (value) => value * 1.8 + 32,
//     },
//     fahrenheit: {
//         celsius: (value) => (value - 32) / 1.8,
//         kelvin: (value) => (value - 32) / 1.8 + 273.32,
//     },
//     kelvin: {
//         celsius: (value) => value - 273.32,
//         fahrenheit: (value) => (value - 273.32) * 1.8 + 32,
//     },
// };

// function computeTemp(event) {
//     const currentValue = +event.target.value;
//     const inputName = event.target.name;

//     const formulas = conversionFormulas[inputName];

//     celsiusEl.value = formulas.celsius(currentValue).toFixed(2);
//     fahrenheitEl.value = formulas.fahrenheit(currentValue).toFixed(2);
//     kelvinEl.value = formulas.kelvin(currentValue).toFixed(2);
// }
