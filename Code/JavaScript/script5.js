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
//--------------------FUNCTION TO DISPLAY SAVED IMAGES------------------------------
// Function to display the saved images
function displaySavedImages() {
    let savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];    // Retrieve the saved images from localStorage

console.log(savedImages);
    // Get the container element to hold the saved images
    let savedImagesContainer = document.getElementById("savedImagesContainer");

    savedImages.forEach(function (image) {    // Iterate over the saved images and create HTML elements to display them
        // Create the image container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("savedImageContainer");

        // Create the image element
        let imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.classList.add("svdImgs")

        // Append the image  to the container
        imageContainer.appendChild(imageElement);
        // Append the container to the saved images container
        savedImagesContainer.appendChild(imageContainer);
    });
}

// Call the displaySavedImages function when the page loads
window.onload = displaySavedImages;



// Like button functionality
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

let count = 0;

likeButton.addEventListener("click", () => {
    count++;
    likeCount.textContent = count;
});


// Retrieve the like counts from local storage
const likeCount1 = sessionStorage.getItem('likeCount') || 0;
const likeCount2 = sessionStorage.getItem('likeCount2') || 0;
const likeCount3 = sessionStorage.getItem('likeCount3') || 0;
const likeCount4 = sessionStorage.getItem('likeCount4') || 0;

// Display the like counts in the console 
console.log('Like count for wild Dog:', likeCount1);
document.getElementById("wildDog").innerHTML = `Wild Dog image likes: ${likeCount1}`;
console.log('Like count for image 2:', likeCount2);
document.getElementById("africanElephant").innerHTML = `African Elephant image likes: ${likeCount2}`
console.log('Like count for image 3:', likeCount3);
document.getElementById("hornBill").innerHTML = "Hornbill Image likes: " + likeCount3;
console.log('Like count for image 4:', likeCount4);
document.getElementById("lion").innerHTML = "Lion image likes: " + likeCount4;