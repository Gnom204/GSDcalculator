
const sugar = document.querySelector('input[name="a"]');
const pressure = document.querySelector('input[name="b"]');
const waist = document.querySelector('input[name="c"]');
const button = document.querySelector('button[type="click"]');
const formulaValue = document.querySelector('#formula');
const itog = document.querySelector('#result');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (sugar.value === '' || pressure.value === '' || waist.value === '') {
        itog.textContent = 'Заполните все поля';
        formulaValue.textContent = '';
        return;
    }
let {result, formula} = getGSD(sugar.value, pressure.value, waist.value);
itog.textContent = result;
formulaValue.textContent = `Риск ГСД: ${formula}`;

});

function getGSD(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let formula = (-17.042+0.931*a)+(0.080*b)+(0.038*c);
    if(formula > 0.17){
        result = 'Высокий риск развития ГСД';
    }  else if (formula < 0.17) {
        result = 'Низкий риск развития ГСД';
    }
    console.log(formula, a, b, c);
    return {result, formula:Math.round(formula * 1000) / 1000};
}
