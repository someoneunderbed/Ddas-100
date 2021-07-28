let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");


btn.addEventListener('click', () => {

    let text = input.value;
    if (text == '') {
        alert('You must write something');
    } else {
        li = document.createElement('li');
        li.innerHTML = text;
        btn = document.createElement('button')
        btn.setAttribute('class', 'del')
        btn.innerHTML = 'delete'
        list.append(li);
        list.append(btn);
        input.value = '';
    }
})

list.addEventListener('click', a => {
    if (a.target.tagName == 'LI') {
        a.target.classList.toggle('checked');
    }
})

// let delBtn = document.querySelector('.del')

// for (let i = 0; i < delBtn.length; i++) {
//     delBtn[i].onclick = function () {
//     }
// }

// delBtn.addEventListener('click', () => { 
// })




