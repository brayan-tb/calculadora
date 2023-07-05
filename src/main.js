function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Erro';
    }
}

function clearValue() {
    document.getElementById('result').value = '';
}

function appendValue(value) {
    document.getElementById('result').value += value;
}

function removeValue() {
    let input = document.getElementById('result');
    if(input.value.length > 0) input.value = input.value.slice(0, -1)
}

window.onload = function() {
    document.addEventListener("keydown", function (event){
        if (event.key >= 0 && event.key <= 9) { appendValue(event.key); }
        else if(event.key == "Escape"){clearValue();}
        else if(event.key == "Enter"){calculate();}
        else if(event.key == "." || event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*"){appendValue(event.key);}
        else if (event.key == "Backspace"){removeValue()}
        event.preventDefault(); 
    })
}
