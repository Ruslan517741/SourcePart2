const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
            input.value.replace(/[a-z]/ig, '');
        });
    });
    txtInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[a-z]/ig, '');
        });
    });
};

export default checkTextInputs;