let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return title +" by " + author + ", " + pages + ", " + read
      }
  }

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function openTheForm() {
    document.getElementById('bookPopup').style.display
     = "block";
    console.log('button pressed');
}

function clearCards() {
    // const card = document.querySelector('.card')
    while (document.querySelectorAll('.card').length != 0) {
        document.querySelector('.libraryContainer').removeChild(document.querySelector('.card'));
    }
}

const book1 = new Book("Lord of the Rings", "Tolkien", "297","Not yet read")
const book2 = new Book("Alice in Wonderland", "Lewis Carrol", "450", "read")
const newbook = document.getElementById('newbook');
const submit = document.getElementById('submit');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const newBook = new Book(title.value, author.value, pages.value, "yes")
    console.log(newBook)
    addBookToLibrary(newBook)
    clearCards();
    displayLibrary();
});

newbook.addEventListener("click", function(){
    openTheForm();
});

// submit.addEventListener("click", function(){
//     const newBook = new Book(title.value, author.value, pages.value, "yes")
//     console.log(newBook)
//     addBookToLibrary(newBook)
// });


addBookToLibrary(book1);
addBookToLibrary(book2);

function displayLibrary() {
    myLibrary.forEach(book => {

        const card = document.createElement('div');
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
        btag.textContent = book.title;
        ptag.innerHTML = 'Author: '+book.author+'<br />'
        +'Pages: '+book.pages+'<br />'+'Read?: '+book.read;
        document.querySelector('.libraryContainer').appendChild(card);
        card.appendChild(img);
        card.appendChild(container);
        container.appendChild(h4);
        h4.appendChild(btag);
        container.appendChild(ptag);
        
    });
}

displayLibrary();

