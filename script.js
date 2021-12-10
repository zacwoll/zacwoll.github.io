const heroTypewriter = document.querySelector('.typewriter h2');


const Hobbies = [
    'developer',
    'UI/UX student',
    'musician',
    'rock climber',
]

var i = 0;


setInterval(() => {
    // heroTypewriter.animate([
    //     { transform : 'width: 0%' },
    //     { transform : 'width: 100%' }
    // ]);
    heroTypewriter.textContent = Hobbies[++i % Hobbies.length];
    // heroTypewriter.animate([
    //     { transform: 'width: 100%' },
    //     { transform: 'width: 0%' }
    // ])
}, 5000);

'Photo by <a href = "https://unsplash.com/@anastasiiachepinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Anastasiia Chepinska</a> on <a href ="https://unsplash.com/s/photos/coffee-beans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a>;'

// Handles the likes panels
const likesPanels = document.querySelectorAll('.likes-panel');

likesPanels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(likesPanels);
        panel.classList.add('active');
    });
});

function removeActiveClasses(panels) {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Handles the works panels
const worksPanels = document.querySelectorAll('.works-panel');

worksPanels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Reuse removeActiveClasses from likesPanels
        removeActiveClasses(worksPanels);
        panel.classList.add('active');
    });
});

// handles the likes works tabs
const likesWorksTabs  = document.querySelectorAll('.tabs h2');
const displayContainers = document.querySelectorAll('.LikesWork .display')
const likesContainer = document.querySelector('.LikesContainer');
const worksContainer = document.querySelector('.WorkContainer');

document.addEventListener("DOMContentLoaded", function (event) {
    likesContainer.style.display = 'flex';
    worksContainer.style.display = 'none';
});


likesWorksTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.classList.contains('active')) {
            return;
        }
        removeActiveClasses(likesWorksTabs);
        toggleDisplays(displayContainers);
        tab.classList.add('active');
    });
});

function toggleDisplays(containers) {
    containers.forEach(container => {
        if (container.style.display === 'flex') {
            container.style.display = 'none';
        } else {
            container.style.display = 'flex';
        }
    });
}

function addEmailToClipboard() {
    navigator.clipboard.writeText('zacwoll@gmail.com');
    displayPopup();
}

function displayPopup() {
    const popUpElement = document.querySelector('.CopyMessage');
    popUpElement.style.display = 'flex';
    popUpElement.style.display = 'flex';
    popUpElement.style.opacity = '1';
    animatePopup(popUpElement);
}

let copyAnimationId = null;
function animatePopup(element) {
  let pos = 0;
  clearInterval(copyAnimationId);
  copyAnimationId = setInterval(frame, 5);
  // Bounce up 8px, come down 8px, up 4px, down 4 px
  function frame() {
      topOffset = element.offsetTop;
      element.style.top = topOffset;
      pos++;
      if (pos == 500) {
        element.style.display = 'none';
        clearInterval(copyAnimationId);
      } else if (pos <= 32 && pos % 4 == 0) {
        element.style.top = topOffset - 1 + 'px';
      } else if (pos > 32 && pos <= 64 && pos % 4 == 0) {
        element.style.top = topOffset + 1 + 'px';
      } else if (pos > 64 && pos <= 80 && pos % 4 == 0) {
        element.style.top = topOffset - 1 + 'px';
      } else if (pos > 80 && pos <= 96 && pos % 4 == 0) {
        element.style.top = topOffset + 1 + 'px';
      } else if (pos > 300 && pos % 10 == 0 && element.style.opacity != '0') {
          element.style.opacity = element.style.opacity - 0.1;
      }
  }
}

function daysElaspedFromMoveIn() {
    let today = new Date();
    let movedInOn = new Date('10/7/2021');
    const msInDay = 24 * 60 * 60 * 1000;
    today.setHours(0, 0, 0, 0);
    movedInOn.setHours(0, 0, 0, 0);

    return Math.round((today.getTime() - movedInOn.getTime())/msInDay);
}

// on content load, update days since move
document.addEventListener("DOMContentLoaded", function (event) {
    const daysElement = document.querySelector('.moveIn');
    daysElement.textContent =
        `I just moved here to Tulsa ${ daysElaspedFromMoveIn()} days ago!`;
});