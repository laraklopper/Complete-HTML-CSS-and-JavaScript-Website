// Like button for image 1
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
let count = sessionStorage.getItem('likeCount') || 0; // Retrieve the like count from local storage or set it to 0 if not present
likeCount.textContent = count;

likeButton.addEventListener('click', () => {
    count++; // Increment the count
    likeCount.textContent = count; // Update the like count text
    sessionStorage.setItem('likeCount', count); // Save the like count to local storage
    console.log('Like count for image 1:', count); // Log the like count to the console
});

// Like button for image 2
const likeButton2 = document.getElementById('likeButton2');
const likeCount2 = document.getElementById('likeCount2');
let count2 = localStorage.getItem('likeCount2') || 0;
likeCount2.textContent = count2;

likeButton2.addEventListener('click', () => {
    count2++;
    likeCount2.textContent = count2;
    localStorage.setItem('likeCount2', count2);
    console.log('Like count for image 2:', count2);
});

// Like button for image 3
const likeButton3 = document.getElementById('likeButton3');
const likeCount3 = document.getElementById('likeCount3');
let count3 = sessionStorage.getItem('likeCount3') || 0;
likeCount3.textContent = count3;

likeButton3.addEventListener('click', () => {
    count3++;
    likeCount3.textContent = count3;
    sessionStorage.setItem('likeCount3', count3);
    console.log('Like count for image 3:', count3);
});

// Like button for image 4
const likeButton4 = document.getElementById('likeButton4');
const likeCount4 = document.getElementById('likeCount4');
let count4 = sessionStorage.getItem('likeCount4') || 0;
likeCount4.textContent = count4;

likeButton4.addEventListener('click', () => {
    count4++;
    likeCount4.textContent = count4;
    sessionStorage.setItem('likeCount4', count4);
    console.log('Like count for image 4:', count4);
});

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

    }}