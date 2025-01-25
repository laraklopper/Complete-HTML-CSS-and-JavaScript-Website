//------------------Like button-------------------------
// Get references to the button and like count elements
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

let count = 0;// Set the initial like count

likeButton.addEventListener('click', () => {// Attach an event listener to the button
    count++;    // Increment the count
    likeCount.textContent = count;    // Update the like count text

});

//----------Function to save the image button click event------------------
// Select all image buttons with the class "imgBtn"
//const saveButtons = document.querySelectorAll(".imgBtn");


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
//-----------------Function to save the responsive image----------------------------
// Bind the saveImage function to the click event of the responsive image button
const altImgBtn = document.getElementById('altImgBtn');
altImgBtn.addEventListener('click', () => {
    saveImage('./Images/Victoriafalls.jpg');
});
