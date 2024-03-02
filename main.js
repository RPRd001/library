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
    index = (myLibrary.length + 1)
    return {title, author, status, index}
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
    bookshelf.innerHTML += `<div title="${book.title}" class="book" id=book-${book.index}></div>`; 
}


/*
    Pending:
    1. Make the remove book button functionality
    2. Make a nice design for the books and the library itself
    3. Make an extra function for displaying dialogs when clicking the books with the options for removing or changing the status of the book
        3.1. The book status will be denoted by a changing in the books img (an image of the book in green is a read book, otherwise it is a non-read book)
*/