// let myLibrary = [];
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toString() {
        return `${this.title} by  ${this.author}, ${this.pages} pages long, has read: ${this.read}`
    }
}
setLibrary();


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function openTheForm() {
    document.getElementById('bookPopup').style.display
     = "block";
}

function closeTheForm() {
    document.getElementById('bookPopup').style.display
     = "none";
}

function clearCards() {
    while (document.querySelectorAll('.card').length != 0) {
        document.querySelector('.libraryContainer').removeChild(document.querySelector('.card'));
    }
}

function deleteCard(e) {
    window.test = e;
    myLibrary.splice(window.test.target.parentNode.parentElement.getAttribute('data-index'),
    1);
    document.querySelector('.libraryContainer').removeChild
    (window.test.target.parentElement.parentElement);
    saveArray();
    

}

function changeReadStatus(e) {
    eventClick = e;
    let readStatus = e.target.parentElement.querySelector('.readStatus')
    const isRead = (readStatus.innerText === 'Read?: Read')
    // let readInner = eventClick.target.parentElement.
    // querySelector('.readStatus').innerHTML
    if (isRead){
            readStatus.innerHTML = 'Read?: Not read yet';
            myLibrary[eventClick.target.parentElement.
                querySelector('.readStatus').parentNode.
                parentNode.getAttribute('data-index')].read = false
    } else {
        eventClick.target.parentElement.
    querySelector('.readStatus').innerHTML = 'Read?: Read';
    myLibrary[eventClick.target.parentElement.
        querySelector('.readStatus').parentNode.
        parentNode.getAttribute('data-index')].read = true
    }
}

function setLibrary(){
    if(!localStorage.getItem('libArray')){ //If no local storage make empty library array
        myLibrary = [];
    } else {
       myLibrary = JSON.parse(localStorage.getItem('libArray'))
       myLibrary = myLibrary.map(data => new Book(data.title, data.author, data.pages, data.read)) //Readds the class to the objects from json
    }
}

function saveArray() {
    let jsonLib = JSON.stringify(myLibrary)
    localStorage.setItem('libArray', jsonLib);
}


const newbookBtn = document.getElementById('newbook');
const submit = document.getElementById('submit');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const freshBook = new Book(title.value, author.value, pages.value, read.checked)
    console.log(freshBook)
    addBookToLibrary(freshBook)
    clearCards();
    displayLibrary();
    saveArray();
});

newbookBtn.addEventListener("click", function(){
    openTheForm();
});


function displayLibrary() {
    myLibrary.forEach((book,index) => {
        const card = document.createElement('div');
        const button = document.createElement('button')
        const readButton = document.createElement('button')
        button.addEventListener('click', deleteCard)
        readButton.addEventListener('click', changeReadStatus)
        button.classList.add('cardButton');
        button.innerHTML = 'Remove'
        readButton.innerHTML = 'Change read'
        readButton.classList.add('readButton');
        card.setAttribute('data-index', index);
        card.classList.add('card');
        const container = document.createElement('div');
        container.classList.add('cardContainer');
        const img = document.createElement('img');
        img.setAttribute("src", "https://i.pinimg.com/736x/49/f7/25/49f725a9f2b62ea80603f3fe51289735--le-design-icon-design.jpg");
        img.setAttribute("alt", "book icon");
        img.setAttribute("style", "width: 100%");
        const h4 = document.createElement('h4');
        const btag = document.createElement('b');
        const ptag = document.createElement('p');
        const ptag2 = document.createElement('p');
        ptag.style.marginBottom = '0';
        ptag2.style.marginTop = '0';
        ptag2.setAttribute('class', 'readStatus')
        btag.textContent = book.title;
        ptag.innerHTML = 'Author: '+book.author+'<br />'
        +'Pages: '+book.pages
        ptag2.innerHTML = 'Read?: '+ (book.read ? 'Read' : "Not read yet");
        document.querySelector('.libraryContainer').appendChild(card);
        card.appendChild(img);
        card.appendChild(container);
        container.appendChild(h4);
        h4.appendChild(btag);
        container.appendChild(ptag);
        container.appendChild(ptag2);
        container.appendChild(button);
        container.appendChild(readButton);
    });
}

displayLibrary();
