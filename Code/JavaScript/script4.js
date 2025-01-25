//----------Function to handle the image button click event------------------
function saveImage(image) {
    if (confirm("Save image?")) {     // Prompt the user to save the image 
        let savedImgs = JSON.parse(localStorage.getItem("savedImages")) || [];
        savedImgs.push(image)
        localStorage.setItem('savedImages', JSON.stringify(savedImgs))
        alert(`Image saved you have ${savedImgs.length}`);// If the user chooses "OK", display a success message
        console.log(savedImgs);
    }
    else {
        alert("Image not saved");// If the user chooses "Cancel", display a message indicating the image was not saved

    }
}

// Retrieve contact details from local storage or initialize an empty array
let details = JSON.parse(sessionStorage.getItem("contactDetails")) || [];
let formContacts = document.getElementById("contacts")

// Get the form element by its ID
let form = document.getElementById("form");

//========Add contacts to the contact list in sessionStorage====================
form.addEventListener('submit', (e) => {// Add a submit event listener to the form
    e.preventDefault();// Prevent the default form submission behavior

    // Get the input values from the form
    let firstName = document.getElementById("fName");
    let lastName = document.getElementById("lName");
    let email = document.getElementById("email");
    let postalAdd = document.getElementById("postal");

    // Create a new contact details object
    let contactDetails = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        postalAddress: postalAdd.value,
    };

    details.push(contactDetails);
    console.log(details);//log the details in the console

    // Store the updated details array in session storage
    sessionStorage.setItem("contactDetails", JSON.stringify(details));

    displayContacts()

});

//---------------function to display the contacts in console and sessionStorage---------------------
function displayContacts() {

    details.forEach((contact, i) => {
       console.log("contactDetails", i);
    });

}
displayContacts()

//-----------------function to display comments---------------------------
// document.addEventListener('DOMContentLoaded', function () {
//     // Select the comment form and comment list elements
//     let commentForm = document.getElementById('comment-form');
//     let commentList = document.getElementById('comment-list');

    // Handle form submission
   // commentForm('submit', function (event) {
      //  event.preventDefault(); // Prevent form submission

        // Get the input values
//         let nameInput = document.getElementById('name');
//         let commentInput = document.getElementById('comment');

//         console.log(`${nameInput}: ${commentInput}`);
        

//         // Create a new comment item
//         let listItem = document.createElement('li');
//         listItem.textContent = nameInput+ ': ' + commentInput;

//         commentList.appendChild(listItem);        // Append the new comment item to the comment list


//         // Clear the form inputs
//         nameInput = '';
//         commentInput= '';
//   //  });
// });

//---------------------
