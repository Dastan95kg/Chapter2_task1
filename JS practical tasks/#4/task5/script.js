let arr = document.getElementsByClassName('item');
arr[1].remove();
arr[3].firstChild.nodeValue = 'Canned Fish';
let spanArr = document.getElementsByClassName('qty');
let span = spanArr[4];
let newSpan = document.createElement('span');
newSpan.textContent = 'x 4';
arr[3].replaceChild(newSpan, span);

