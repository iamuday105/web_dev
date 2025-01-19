

function addPara(){
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'kya haal Chaal';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();