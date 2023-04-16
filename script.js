var from, to;
var result_temp = document.querySelector("#temp-res");
var result_unit = document.querySelector("#unit-res");

function calculate() {
    var temp = Number(document.querySelector("#temp").value);
    from = document.querySelector("#fromunit").value;
    to = document.querySelector("#tounit").value;


    //celsius to farenheit
    const celtofah = (cel) => {
        let farenheit = ((cel * 9 / 5) + 32).toFixed(2);
        return farenheit;
    }

    //celsius to kelvin
    const celtokel = (cel) => {
        let kelvin = (cel + 273.15).toFixed(2);
        return kelvin;
    }

    ///farenheit to celsius
    const fahtocel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(2);
        return celsius;
    }

    //farenheit to kelvin
    const fahtokel = (fah) => {
        let kelvin = ((fah - 32) * (5 / 9) + 273.15).toFixed(2);
        return kelvin;
    }

    ///kelvin to celsius
    const keltocel = (kel) => {
        let celsius = (kel - 273.15).toFixed(2);
        return celsius;
    }

    ///kelvin to farenheit
    const keltofah = (kel) => {
        let farenheit = ((kel - 273.15) * (9 / 5) + 32).toFixed(2);
        return farenheit;
    }


    if (from == "cel") {
        if (to == "fah") {
            result_temp.textContent = celtofah(temp)
            result_unit.textContent = '°F'
        } else if (to == "kel") {
            result_temp.textContent = celtokel(temp)
            result_unit.textContent = 'K'
        } else {
            result_temp.textContent = temp
            result_unit.textContent = '°C'
        }
    } else if (from == "fah") {
        if (to == "cel") {
            result_temp.textContent = fahtocel(temp)
            result_unit.textContent = '°C'
        } else if (to == "kel") {
            result_temp.textContent = fahtokel(temp)
            result_unit.textContent = 'K'
        } else {
            result_temp.textContent = temp
            result_unit.textContent = '°F'
        }
    } else {
        if (to == "cel") {
            result_temp.textContent = keltocel(temp)
            result_unit.textContent = '°C'
        } else if (to == "fah") {
            result_temp.textContent = keltofah(temp)
            result_unit.textContent = '°F'
        } else {
            result_temp.textContent = temp
            result_unit.textContent = 'K'
        }
    }

}

document.querySelector("#convert").addEventListener('click', function () {
    calculate();
})