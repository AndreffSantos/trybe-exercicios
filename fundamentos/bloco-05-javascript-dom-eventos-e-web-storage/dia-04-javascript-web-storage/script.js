window.onload = function() {
    const padrao = {
        backgroundColor: 'white',
        colorText: 'black',
        fontSize: '15px',
        lineHeight: '15px',
        fontFamily: 'Arial',
    };
    if (typeof(Storage) == 'undefined') {
        for (let index in padrao) {
            localStorage.setItem(index, padrao[index]);
        }
    }

    document.body.style.backgroundColor = localStorage.backgroundColor;
    document.body.style.color = localStorage.colorText;
    document.body.style.fontSize = localStorage.fontSize;
    document.body.style.lineHeight = localStorage.lineHeight;
    document.body.style.fontFamily = localStorage.fontFamily;

    function mudaCorBackground() {
        if (document.body.style.backgroundColor === padrao.backgroundColor) {
            document.body.style.backgroundColor = 'red';
            localStorage.backgroundColor = 'red';
            buttonBackgroudColorRed.innerText = 'Branco';
        } else {
            document.body.style.backgroundColor = padrao.backgroundColor;
            localStorage.backgroundColor = padrao.backgroundColor;
            buttonBackgroudColorRed.innerText = 'Vermelho';
        }
    }

    function mudaCorTexto() {
        if (document.body.style.color === padrao.colorText) {
            document.body.style.color = 'rgb(255, 0, 255)';
            localStorage.colorText = 'rgb(255, 0, 255)';
            buttonColorText.innerText = 'Padrão';
        } else {
            document.body.style.color = padrao.colorText;
            localStorage.colorText = padrao.colorText;
            buttonColorText.innerText = 'Fúcsia';
        }
    }
    
    function mudaTamanhoDaFonte() {
        if (document.body.style.fontSize === padrao.fontSize) {
            document.body.style.fontSize = '25px';
            localStorage.fontSize = '25px';
            buttonFontSize.innerText = '15px';
        } else {
            document.body.style.fontSize = '15px';
            localStorage.fontSize = '15px';
            buttonFontSize.innerText = '25px';

        }
    }

    function mudaEspacamento() {
        if (document.body.style.lineHeight === padrao.lineHeight) {
            document.body.style.lineHeight = '25px';
            localStorage.lineHeight = '25px';
            buttonLineHeight.innerText = '15px';
        } else {
            document.body.style.lineHeight = padrao.lineHeight;
            localStorage.lineHeight = padrao.lineHeight;
            buttonLineHeight.innerText = '25px';
        }
    }

    function mudaFontFamily() {
        if (document.body.style.fontFamily === padrao.fontFamily) {
            document.body.style.fontFamily = 'Courier';
            localStorage.fontFamily = 'Courier';
            buttonFontFamily.innerText = 'Arial';
        } else {
            document.body.style.fontFamily = padrao.fontFamily;
            localStorage.fontFamily = padrao.fontFamily;
            buttonFontFamily.innerText = 'Courier';
        }
    }

    const buttonBackgroudColorRed = document.querySelector('#button-background-color');
    buttonBackgroudColorRed.addEventListener('click', mudaCorBackground);

    const buttonColorText = document.querySelector('#button-color-text');
    buttonColorText.addEventListener('click', mudaCorTexto);

    const buttonFontSize = document.querySelector('#button-font-size');
    buttonFontSize.addEventListener('click', mudaTamanhoDaFonte);

    const buttonLineHeight = document.querySelector('#button-line-height');
    buttonLineHeight.addEventListener('click', mudaEspacamento);

    const buttonFontFamily = document.querySelector('#button-font-family');
    buttonFontFamily.addEventListener('click', mudaFontFamily);
}

