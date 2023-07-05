
function calculate() {
    try {
        var result = eval(document.getElementById('result').value);
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

window.onload = function() {
    document.addEventListener("keydown", function (event){
        if (event.key >= 0 && event.key <= 9) { appendValue(event.key); }
        else if(event.key == "Escape"){clearValue();}
        else if(event.key == "." || event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*"){
            appendValue(event.key);
        }
        else if(event.key == "Enter"){calculate();}
    })
}