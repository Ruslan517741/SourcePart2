/* const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value.slice(0, 5)) * (+materialBlock.value.slice(0, 3)) + (+optionsBlock.value.slice(0, 5)));
        console.log(+sizeBlock.value.slice(0, 5)); 
        console.log(sizeBlock.value); 
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выбирите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
            state.total = sum;
        }
        
    };

    function bindAction (event, elem, property) {
        
            elem.addEventListener(event, () => {
                if (elem.getAttribute('id') === 'size' || elem.getAttribute('id') === 'options'){
                    state[property] = elem.value.slice(6);
                } else {
                    state[property] = elem.value.slice(4);
                }
               
                console.log(state); 
            });
                

        console.log(state);
    }
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

    bindAction('change', sizeBlock, 'size');
    bindAction('change', materialBlock, 'material');
    bindAction('change', optionsBlock, 'option');
    bindAction('input', promocodeBlock, 'promcode');
};

export default calc; */

//Другой способ
import {getResourse} from "../services/requests";

const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;
    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        state.promcode = promocodeBlock.value;
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
            state.total = sum;
            state.promcode = promocodeBlock.value;
        }
    };

    function bindAction (event, elem, property) {
        
        
        elem.addEventListener(event, () => {
            if(event === 'change') {
                state[property] = elem.options[elem.selectedIndex].text;
            }
            
        });
    }

    getResourse('assets/db.json')
        .then(res => {
            createCalcForm(res.size, size);
            createCalcForm(res.material, material);
            createCalcForm(res.options, options);
        })
        .catch(error => console.log(error));

    function createCalcForm(response, nameBlock) {
        response.forEach(item => {
            let block = document.querySelector(nameBlock);
            let calcForm = document.createElement('option');
            Object.keys(item).forEach(key => {
                if (key === "value" || key === "title") {
                    calcForm.setAttribute( key, item[key]);
                } else {
                    calcForm.innerHTML = item[key];
                }
            });
            block.appendChild(calcForm);
        });
    }

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

    bindAction('change', sizeBlock, 'size');
    bindAction('change', materialBlock, 'material');
    bindAction('change', optionsBlock, 'option');
};

export default calc;