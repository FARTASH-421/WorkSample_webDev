const input = document.getElementById('password');
const label = document.getElementById('myLabel2');

input.addEventListener('focus', () => {
    label.style= `
    position: absolute;
    z-index: 1;
    top: -12px;
    left: 0px;
    background-color: rgb(255, 255, 255);
    padding: 0px 15px;
    font-size: 20px;
    `
    
});

input.addEventListener('blur', () => {
    label.style.backgroundColor = '';
});