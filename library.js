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
    myLibrary.push(book)
}

const book1 = new Book("Lord of the Rings", "Tolkien", "297","Not yet read")
const book2 = new Book("Alice in Wonderland", "Lewis Carrol", "450", "read")

addBookToLibrary(book1);
addBookToLibrary(book2);

// const card = document.createElement('div');
// card.classList.add('card');
// const container = document.createElement('div');
// container.classList.add('cardContainer');

// const img = document.createElement('img');
// img.setAttribute("src", "https://i.pinimg.com/736x/49/f7/25/49f725a9f2b62ea80603f3fe51289735--le-design-icon-design.jpg");
// img.setAttribute("alt", "book icon");
// img.setAttribute("style", "width: 100%");

// const h4 = document.createElement('h4');
// const btag = document.createElement('b');
// const ptag = document.createElement('p');
// btag.textContent = 'Book Title';
// ptag.textContent = 'Book Description';


// document.body.appendChild(card);
// card.appendChild(img);
// card.appendChild(container);
// container.appendChild(h4);
// h4.appendChild(btag);
// container.appendChild(ptag);
  


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
    document.body.appendChild(card);
    card.appendChild(img);
    card.appendChild(container);
    container.appendChild(h4);
    h4.appendChild(btag);
    container.appendChild(ptag);
    
});


//Create a div, add card class, append it to body
//create a div, add cardContainer class, append
//to previous div.
//add img to card using JS
//add <h4> and <p> content to cardContainer div

//Loop through array
//for each object, dynamically make a div,
//append those divs to cardContainer
//textContent "Title: this.title"