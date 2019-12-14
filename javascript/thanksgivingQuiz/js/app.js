function survey() {
    event.preventDefault;

    let q1 = Number(document.querySelector('input[name=personality]:checked').value);
    let q2 = Number(document.querySelector('input[name=religion]:checked').value);
    let q3 = Number(document.querySelector('input[name=fave]:checked').value);
    let q4 = Number(document.querySelector('input[name=arrival]:checked').value);
    let q5 = Number(document.querySelector('input[name=exit]:checked').value);

    let total = q1 + q2 + q3 + q4 + q5;

    if (total <= 9) {
        message = "Portugual";
    } else if ((total > 9) && (total <= 12)) {
        message = "Netherlands";
    } else if ((total > 12) && (total <= 16)) {
        message = "England";
    } else if ((total > 16) && (total <= 20)) {
        message = "France";
    } else if ((total > 20)) {
        message = "Spain";
    }

    let message = '';

    let output = document.getElementById('output');
    output.innerText = message;
}