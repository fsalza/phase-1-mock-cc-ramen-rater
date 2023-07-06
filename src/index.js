// write your code here
const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenuDiv = el('ramen-menu');
const newRamenForm = el('new-ramen');


// Deliverable 1: See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.
fetch(ramenAPI)
    .then(res => res.json())
    .then(renderRamens);

//Iterates over each element
function renderRamens(ramens){
    ramens.forEach(renderRamen);
}

//Displays the image for each of the ramens
function renderRamen(ramen){
    const ramenImageElement = document.createElement('img');
    ramenImageElement.src = ramen.image;
    ramenMenuDiv.append(ramenImageElement);

    ramenImageElement.addEventListener('click', () => ramenClickHandler(ramen))
}

//Function that is passed as a callback to the event listener
function ramenClickHandler(ramen){
    console.log(ramen)
    el('detail-image').src = ramen.image;
    el('detail-name').textContent = ramen.name;
    el('detail-restaurant').textContent = ramen.restaurant;
    el('rating-display').textContent = ramen.rating;
    el('comment-display').textContent = ramen.comment;
}

function el(id) {
    return document.getElementById(id);
}


// Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.
//SEE ABOVE

//Deliverable 3:
newRamenForm.addEventListener('submit', handleNewRamen)

function handleNewRamen(e){
    e.preventDefault();

    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }

    renderRamen(newRamen);
    e.target.reset();
}