let slideimage = document.querySelectorAll('img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dot = document.querySelectorAll(".dot");

let counter = 0;
let deleteinterval;

next.addEventListener('click', slidenext);
prev.addEventListener('click', slideprev);

function slidenext() {
    slideimage[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideimage.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideimage[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

function slideprev() {
    slideimage[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideimage.length - 1;
    } else {
        counter--;
    }
    slideimage[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Auto slide
function autoslide() {
    deleteinterval = setInterval(function () {
        slidenext();
        indicators();
    }, 3000);
}

// Start auto slide
autoslide();

// Stop auto slide on mouseover
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(deleteinterval);
});

// Resume auto slide on mouseout
container.addEventListener('mouseout', function () {
    autoslide();
});

// Add and remove active class for indicators
function indicators() {
    dot.forEach(function (dotItem) {
        dotItem.classList.remove('active');
    });
    dot[counter].classList.add('active');
}

function switchimage(currentimage) {
    currentimage.classList.add('active');
    var imageid = currentimage.getAttribute('attr');
    if (imageid > counter) {
        slideimage[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageid;

        slideimage[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if (imageid == counter) {
        return;
    }
    else {
        slideimage[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageid;
        slideimage[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}