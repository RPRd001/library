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

cancelButton.addEventListener('click', () => {
    // Reset the form data
    bookForm.reset()
    // Close the dialog
    bookDialog.close()
})

// Book Object Constructor Function
function Book(title, author, status) {
    return {title, author, status}
}

function addBookToLibrary (formData) {

    // Create a Book Object
    const book = new Book(
        formData.get('title'),
        formData.get('author'),
        formData.get('status')
    )

    // Add to Library's Array
    myLibrary.push(book)

    // Alternative Rendering
    bookshelf.innerHTML += `<div class="book">
    <h2>
        ${book.title}
    </h2>
    <p>
        ${book.author}
    </p>
    <p>
        ${book.status}
    </p>
</div>`;    
}


/*
    Pending:
    1. Make the remove book button functionality
    2. Make a nice design for the books and the library itself
*/