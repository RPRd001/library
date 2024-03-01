const bookshelf = document.querySelector('.bookshelf');
const bookForm = document.querySelector('form');
const bookDialog = document.querySelector('dialog');
const newBookButton = document.querySelector('.new-book-button');
const removeBookButton = document.querySelector('.remove-book-button');

/* Forms fields */
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatusRead = document.querySelector('#read');
const bookStatusNotRead = document.querySelector('#not-read')

/* Forms Buttons */
const submitButton = document.querySelector('.submit-button');
const cancelButton = document.querySelector('.cancel')

/* Library Array for Book Objects */
let myLibrary = [];

// Poping out the dialog box
newBookButton.addEventListener('click', () => {
    bookDialog.show()
})

// Getting the Data and Working On It
bookForm.addEventListener('submit', (e) => {
    // prevent html default behavior
    e.preventDefault();
    // Create an object with the constructor FormData() from the 'form data' :-)
    const formData = new FormData(bookForm);
    // adding the book to the library
    addBookToLibrary(formData);
    // closing the dialog
    bookDialog.close()
})

function addBookToLibrary (formData) {

    // Create a Book Object
    // ?

    // Render
    bookshelf.innerHTML += `<div class="book">
    <h2>
        ${formData.get('title')}
    </h2>
    <p>
        ${formData.get('author')}
    </p>
    <p>
        ${formData.get('status')}
    </p>
</div>`;

    
}