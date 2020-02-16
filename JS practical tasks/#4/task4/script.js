var p = document.getElementsByTagName('p');

function addElem(arr, tag) {
    
    for (let i = 0; i < arr.length; i++) {
        let elem = document.createElement(tag);
        arr[i].after(elem);
    } 

}

addElem(p, 'hr');