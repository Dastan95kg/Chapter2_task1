let array = document.getElementsByClassName('element');
    
function changeColor(arr, red, green) {
    
    for (let i = 0; i < arr.length; i++) {
        (i < 3) ? arr[i].style.color = red : arr[i].style.color = green;
    }

}

changeColor(array, '#fc0303', '#18d100');