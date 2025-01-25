//----------------Like button for image 1--------------------------
// Get references to the button and like count elements

const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

let count = localStorage.getItem('likeCount') || 0; // Retrieve the like count from local storage or set it to 0 if not present
likeCount.textContent = count; // Set the initial like count on page load

likeButton.addEventListener('click', () => {
    count++; // Increment the count
    likeCount.textContent = count; // Update the like count text

    localStorage.setItem('likeCount', count); // Save the like count to local storage
});

//----------Function to save the image button click event------------------
// Select all image buttons with the class "imgBtn"
const saveButtons = document.querySelectorAll(".imgBtn");


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
