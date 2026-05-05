
//Defining our arrays
const imageslevel0 = [
    {image: 'images/level0.png', weight: 10, arrows: [{top: '57%', left: '46%'}, {top: '60%', right: '68%'}, {top: '65%', right: '19%'}]},
    {image: 'images/door.png', weight: 1, arrows: [{top: '56%', left: '47.5%', exiteer: true}]},
    {image: 'images/arrows.png', weight: 1000, arrows: [{top: '71%', left: '36%'}, {top: '63.5%', right: '52%'}, {top: '72%', right: '27%'}, {bottom: '-18%', left: '51%'}]},
    {image: 'images/dark 1.png', weight: 10, arrows: [{top: '63%', left: '43%'}, {top: '63%', right: '53%'}, {top: '63%', right: '64%'}, {bottom: '-20%', left: '60%'}]},
    {image: 'images/iconic.png', weight: 10, arrows: [{top: '40%', left: '21%'}, {top: '38%', right: '40%'}, {top: '38%', right: '40%'}, {bottom: '-10%', left: '35%'}]},
    {image: 'images/view.png', weight: 10, arrows: [{top: '30%', left: '42.4%'}, {top: '30%', right: '53.5%'}, {top: '30%', right: '53.5%'}, {bottom: '-15%', left: '70%'}]},
    {image: 'images/THEimage.png', weight: 10, arrows: [{top: '70%', left: '66%'}, {top: '60%', right: '18%'}, {top: '70%', right: '28%'}, {bottom: '-18%', left: '50%'}]},
    {image: 'images/vhs.png', weight: 10, arrows: [{top: '70%', left: '12%'}, {top: '62%', right: '35%'}, {top: '62%', right: '54%'}, {bottom: '-25%', left: '75%'}]},
    {image: 'images/hall 1.png', weight: 10, arrows: [{top: '51%', left: '32%'}, {top: '50%', right: '45%'}, {top: '50%', right: '45%'}, {bottom: '-15%', left: '40%'}]},
    {image: 'images/chairs.png', weight: 10, arrows: [{top: '90%', left: '5%'}, {top: '70%', right: '8%'}, {top: '64%', right: '17%'}, {bottom: '-25%', left: '50%'}]},
    {image: 'images/noshelves.png', weight: 10, arrows: [{top: '40%', left: '35%'}, {top: '44%', right: '15%'}, {top: '44%', right: '15%'}, {bottom: '3%', left: '50%'}]},
    {image: 'images/lizart(1).png', enemyactive: true, weight: 3, arrows: [{top: '90%', left: '5%'}, {top: '70%', right: '8%'}, {top: '64%', right: '17%'}, {bottom: '-25%', left: '50%'}]},
    {image: 'images/lizart(2).png', enemyactive: true, weight: 3, arrows: [{top: '51%', left: '32%'}, {top: '50%', right: '45%'}, {top: '50%', right: '45%'}, {bottom: '-15%', left: '40%'}]}
];

const imageslevel1 = [//make sure to position all arrrows.
    {image: 'images/parkingarge.png', weight: 10, arrows: [{top: '53%', left: '77%'}, {top: '53%', right: '17%'}, {top: '53%', right: '17%'}, {bottom: '-20%', left: '20%'}]},
    {image: 'images/flickering 1.png', weight: 10, arrows: [{top: '60%', left: '5%'}, {top: '60%', right: '5%'}, {top: '60%', right: '5%'}, {bottom: '-20%', left: '50%'}]},
    {image: 'images/idkitslevel1.png', weight: 10, arrows: [{top: '60%', left: '20%'}, {top: '55%', right: '30%'}, {top: '55%', right: '30%'}, {bottom: '-20%', left: '30%'}]},
    {image: 'images/image 67.png', weight: 10, arrows: [{top: '50%', left: '5%'}, {top: '59%', right: '4%'}, {top: '59%', right: '4%'}, {bottom: '-15%', left: '43%'}]},
    {image: 'images/rako games 1.png', weight: 10, arrows: [{top: '80%', left: '95%'}, {top: '65%', right: '40%'}, {top: '65%', right: '40%'}, {bottom: '-20%', left: '10%'}]},
    {image: 'images/whichway.png', weight: 10, arrows: [{top: '90%', left: '34%'}, {top: '75%', right: '10%'}, {top: '75%', right: '10%'}, {bottom: '-25%', left: '75%'}]},
    {image: 'images/shyguy(2).png', enemyactive: true, weight: 3, arrows: [{top: '90%', left: '34%'}, {top: '75%', right: '10%'}, {top: '75%', right: '10%'}, {bottom: '-25%', left: '75%'}]},
    {image: 'images/shyguy(1).png', enemyactive: true, weight: 3, arrows: [{top: '90%', left: '34%'}, {top: '75%', right: '10%'}, {top: '75%', right: '10%'}, {bottom: '-25%', left: '75%'}]},
    {image:  'images/Door 2.png', weight: 1, arrows: [{top: '53%', left: '77%', exiteer: true}, {top: '53%', right: '17%'}, {top: '53%', right: '17%'}, {bottom: '-20%', left: '20%', exiteer: true}]}
];

const imageslevel5 = [
    {image: 'images/The_Hotel 1.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/redcarpet.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/checkin.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/Level-5-Ballroom 1.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/levl5hall.jpg', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/mainhall.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/doctor(1).png', enemyactive: true, weight: 1, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/doctor(2).png', enemyactive: true, weight: 1, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/Door 5.png', weight: 1, arrows: [{top: '20%', left: '30%', exiteer: true}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
];

const imageslevel37 = [
    {image: 'images/poolhall.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/pools 1.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/stairs.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/winding.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/courtyard.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/Door 37.png', weight: 1, arrows: [{top: '20%', left: '30%', exiteer: true}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]}
];

const imageslevel232 = [
    {image: 'images/endless.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/cart.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/smiler.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/door 232.png', weight: 1, arrows: [{top: '20%', left: '30%', exiteer: true}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
];

const imageslevel94 = [
    {image: 'images/house clear view.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/insidehouse(1).png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/stop.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/brokeninside.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/nooutlet.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/stop.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]}
];


const imageslevellimbo = [
    {image: 'images/youcheated.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/limbostair.jpg', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]}
];

//all documents used
const levTitl = {
    'Level 0': 0,
    'Level 1': 1,
    'Level 5': 2,
    'Level 37': 3,
    'Level 232': 4,
    'Level 94': 5,
    'limbo': 6
};

const levelOrder = [
    'Level0.html',
    'level1.html',
    'level5.html',
    'level37.html',
    'level232.html',
    'level94.html',
    'limbo.html'
];

const pageTitle = document.title.trim();
let Current = levTitl[pageTitle];
if (Current === undefined) {
    const fallbackLevel = parseInt(pageTitle.replace('Level ', '').trim(), 10);
    Current = Number.isFinite(fallbackLevel) ? fallbackLevel : 0;
}

const imageArrays = [
    imageslevel0,
    imageslevel1,
    imageslevel5,
    imageslevel37,
    imageslevel232,
    imageslevel94,
    imageslevellimbo
];


console.log('imageArrays.indexof imageslevel 0:', imageArrays['0']);
console.log('imageArrays.indexof imageslevel 1:', imageArrays['1']);
console.log('imageArrays.indexof imageslevel 5:', imageArrays['2']);
console.log('imageArrays.indexof imageslevel 37:', imageArrays['3']);
console.log('imageArrays.indexof imageslevel 232:', imageArrays['4']);
console.log('imageArrays.indexof imageslevel 94:', imageArrays['5']);

let lastImage = null;


function weightedRandom(items) {
    if (!items || items.length === 0) return null;
    
    // Filter to avoid immediate image repeats
    let availableItems = items.length > 1 
    ? items.filter(item => item.image !== lastImage) 
    : items;

    const weightedItems = availableItems.map(item => {
        let currentweight = item.weight || 10;
        if (typeof DepleteSanity !== 'undefined' && DepleteSanity === true && item.enemyactive === true) {
            const multiplier = typeof threat !== 'undefined' ? threat : 1;
            currentweight = currentweight * multiplier;
        }
        return { ...item, tempweight: currentweight };
    });

    const totalWeight = weightedItems.reduce((sum, item) => sum + item.tempweight, 0);
    let random = Math.random() * totalWeight;
    
    for (const item of weightedItems) {
        random -= item.tempweight;
        if (random <= 0) return item;
    }
    
    return weightedItems[0];
}

let currentData = imageArrays[Current];
let selectedItem = weightedRandom(currentData);

function getSavedImageForLevel(levelName, currentPool) {
    if (!currentPool) return null;

    const savedLevel = localStorage.getItem('savedGameLevel');
    const savedImage = localStorage.getItem('savedGameImage');

    if (savedLevel === levelName && savedImage) {
        const match = currentPool.find(item => item.image === savedImage);
        if (match) {
            localStorage.removeItem('savedGameLevel');
            localStorage.removeItem('savedGameImage');
            return match;
        }
    }
    return null;
}

function repositionArrows(imageData) {
    const arrows = document.querySelectorAll('.arrow');
    
    arrows.forEach((arrow, index) => {
        const position = imageData && imageData.arrows ? imageData.arrows[index] : null;
        if (position) {
            arrow.style.top = 'auto';
            arrow.style.bottom = 'auto';
            arrow.style.left = 'auto';
            arrow.style.right = 'auto';
            arrow.style.display = 'block';
            arrow.dataset.index = index;
            arrow.dataset.exit = position.exiteer ? 'true' : 'false';
            arrow.classList.toggle('exit-arrow', !!position.exiteer);
            
            if (position.top) arrow.style.top = position.top;
            if (position.bottom) arrow.style.bottom = position.bottom;
            if (position.left) arrow.style.left = position.left;
            if (position.right) arrow.style.right = position.right;
        } else {
            arrow.style.display = 'none';
            arrow.dataset.index = '';
            arrow.dataset.exit = 'false';
            arrow.classList.remove('exit-arrow');
        }
    });
}

function onArrowClick(event) {
    const arrow = event.currentTarget;
    const clickIndex = parseInt(arrow.dataset.index, 10);
    const arrowData = selectedItem?.arrows?.[clickIndex];

    if (arrowData?.exiteer) {
        goToNextLevel();
        return;
    }

    changeImage();
}

function goToNextLevel() {
    if (Current >= 0 && Current < levelOrder.length - 1) {
        const nextPage = levelOrder[Current + 1];
        window.location.href = nextPage;
    } else {
        console.log('No next level available for:', pageTitle);
    }
}


function changeImage() {
    const imgElement = document.getElementById('roomImage');
    const aroow = document.getElementById('arrow-container');
    if (!imgElement) return;

    if (imgElement.tagName === 'VIDEO') {
        const selectedVideo = localStorage.getItem('selectedGameVideo');
        const source = imgElement.querySelector('source');
        if (selectedVideo && source) {
            source.src = selectedVideo;
            imgElement.load();
        }
        return;
    }

    const levelName = document.title.trim();
    const currentPool = imageArrays[Current];
    
    if (!currentPool) {
        console.error("Could not find image pool for:", levelName);
        return;
    }
    
    const selected = getSavedImageForLevel(levelName, currentPool) || weightedRandom(currentPool);

    let playerDamage;

    clearInterval(playerDamage);

    if (selected.enemyactive === true){
        let playerDamage = setInterval(() => {
            health.value -= 5;
            if (health.value <= 0) {
                clearInterval(playerDamage);
                localStorage.setItem(Current, JSON.stringify(Current));
                window.location.href = 'gameover.html';
            }
        }, 2000);
    }

    const imgElementImage = imgElement;
    
    if (imgElementImage && selected) {
    //transition wow
        imgElementImage.classList.remove('fading-in');
        imgElementImage.classList.add('fading-out');
        
        setTimeout(() => {
            lastImage = selected.image;
            selectedItem = selected;
            imgElementImage.src = selected.image;
            repositionArrows(selected);
            
            imgElementImage.classList.remove('fading-out');
            imgElementImage.classList.add('fading-in');
        }, 300);
    }
}

const mapElement = document.getElementById('mappytainer');
const playerElement = document.getElementById('player');
const exitElement = document.getElementById('exit');
const mapHintElement = document.getElementById('mapHint') || document.querySelector('.story');

const gridSize = 6;
let playerRow = 0;
let playerCol = 0;
let exitRow = 0;
let exitCol = 0;
let previousDistance = null;
let mapActive = false;
let exitFound = false;
let activeExitArrowIndex = null;

function getRandomGridCell() {
    return {
        row: Math.floor(Math.random() * gridSize),
        col: Math.floor(Math.random() * gridSize)
    };
}

function getDistance() {
    return Math.abs(playerRow - exitRow) + Math.abs(playerCol - exitCol);
}

function updateMap() {
    if (!mapElement || !playerElement || !exitElement) return;

    playerElement.style.gridRowStart = playerRow + 1;
    playerElement.style.gridColumnStart = playerCol + 1;
    exitElement.style.gridRowStart = exitRow + 1;
    exitElement.style.gridColumnStart = exitCol + 1;

    const distance = getDistance();
    exitFound = playerRow === exitRow && playerCol === exitCol;
    activeExitArrowIndex = exitFound ? 0 : null;

    if (mapHintElement) {
        if (exitFound) {
            mapHintElement.textContent = 'Exit located! Find the glowing exit arrow.';
        } else if (previousDistance === null) {
            mapHintElement.textContent = 'Use the arrows to move. The map shows your position and the exit.';
        } else if (distance < previousDistance) {
            mapHintElement.textContent = 'You are getting closer to the exit.';
        } else if (distance > previousDistance) {
            mapHintElement.textContent = 'You are getting farther from the exit.';
        } else {
            mapHintElement.textContent = 'You are moving on the same path. Try a different direction.';
        }
    }

    previousDistance = distance;
}

function initializeThePowerSequence() {
    if (!mapElement || !playerElement || !exitElement) {
        mapActive = false;
        return;
    }

    mapActive = true;
    exitFound = false;

    exitRow = Math.floor(Math.random() * gridSize);
    exitCol = Math.floor(Math.random() * gridSize);

    do {
        playerRow = Math.floor(Math.random() * gridSize);
        playerCol = Math.floor(Math.random() * gridSize);
    } while (Math.abs(playerRow - exitRow) + Math.abs(playerCol - exitCol) < 3);

    previousDistance = getDistance();
    updateMap();
}

function moveitmoveit(clickIndex) {
    if (!mapActive) return;

    const moves = [
        { dr: -1, dc: 0 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: -1 },
        { dr: 1, dc: 0 }
    ];

    const move = moves[clickIndex] || { dr: 0, dc: 0 };
    const newRow = playerRow + move.dr;
    const newCol = playerCol + move.dc;

    if (newRow < 0 || newRow >= gridSize || newCol < 0 || newCol >= gridSize) {
        if (mapHintElement) {
            mapHintElement.textContent = 'You hit a wall. Try a different direction.';
        }
        return;
    }

    playerRow = newRow;
    playerCol = newCol;
    updateMap();
}

function repositionArrows(imageData) {
    const arrows = document.querySelectorAll('.arrow');

    arrows.forEach((arrow, index) => {
        const position = imageData && imageData.arrows ? imageData.arrows[index] : null;
        if (position) {
            arrow.style.top = 'auto';
            arrow.style.bottom = 'auto';
            arrow.style.left = 'auto';
            arrow.style.right = 'auto';
            arrow.style.display = 'block';
            arrow.dataset.index = index;
            const isExit = position.exiteer || (exitFound && activeExitArrowIndex === index);
            arrow.dataset.exit = isExit ? 'true' : 'false';
            arrow.classList.toggle('exit-arrow', isExit);

            if (position.top) arrow.style.top = position.top;
            if (position.bottom) arrow.style.bottom = position.bottom;
            if (position.left) arrow.style.left = position.left;
            if (position.right) arrow.style.right = position.right;
        } else {
            arrow.style.display = 'none';
            arrow.dataset.index = '';
            arrow.dataset.exit = 'false';
            arrow.classList.remove('exit-arrow');
        }
    });
}

function onArrowClick(event) {
    const arrow = event.currentTarget;
    const clickIndex = parseInt(arrow.dataset.index, 10);
    const arrowData = selectedItem?.arrows?.[clickIndex];
    const isExitArrow = arrow.dataset.exit === 'true';

    if (arrowData?.exiteer || isExitArrow) {
        if (isExitArrow && exitFound) {
            goToNextLevel();
            return;
        }
        if (arrowData?.exiteer) {
            goToNextLevel();
            return;
        }
    }

    moveitmoveit(clickIndex);
    changeImage();
}

function ExitToLevel() {
    goToNextLevel();
}

// Ensuring that the Html function is available globally
window.changeImage = changeImage;
window.onArrowClick = onArrowClick;
window.goToNextLevel = goToNextLevel;

document.addEventListener('DOMContentLoaded', () => {
 initializeThePowerSequence();
    changeImage();

    const startButton = document.getElementById('start-button');
    const newGameButton = document.getElementById('new-game-button');
    const quitButton = document.getElementById('quit-button');

    if (startButton) {
        startButton.addEventListener('click', () => {
            const selected = weightedRandom(imageslevel0);
            if (selected) {
                localStorage.setItem('savedGameImage', selected.image);
                localStorage.setItem('savedGameLevel', 'Level 0');
            }
            window.location.href = 'Level0.html';
        });
    }

    if (newGameButton) {
        newGameButton.addEventListener('click', () => {
            const selectedVideo = 'opening cut scene Nate.mp4';
            localStorage.setItem('selectedGameVideo', selectedVideo);
            window.location.href = 'beninging.html';
        });
    }

    if (quitButton) {
        quitButton.addEventListener('click', () => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        });
    }

    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.onclick = onArrowClick;
    });

    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.play().catch(e => console.log('Autoplay blocked for audio:', e));
    });
});

function playoption () {
    
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('roomImage');
        const endState = document.getElementById('end-state');

    if (video && endState) {
            video.addEventListener('ended', () => {
            video.style.display = 'none';
            endState.style.display = 'block';
        });
    }
});


//health and sanity bar
function updateHealthBar(health) {
    if (health < 0) health = 0;
    if (health > 100) health = 100;
}

const health = document.getElementById("health");

DepleteSanity = false;

function updateSanityBar(sanity) {
    if (sanity < 0) sanity = 0;
    if (sanity > 20) sanity = 20;    
}

const bar = document.getElementById("sanity");

let timer = setInterval(() => {
    sanity.value -= 0.1;
    if (sanity.value <= 0) {
        DepleteSanity = true;
    }
}, 1000);

let threat = 1

let threatLevel = setInterval(() => {
    if (DepleteSanity === true) {    
        threat += 1;
}
}, 1000);

// TEST** tryna make a typewriter effect text for dialogue/storytelling :p //
const div = document.querySelector(".text");
const text = "What is this place..? Where am I?";

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }

    element.textContent += text[i];
    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

textTypingEffect(div, text);

//story stuff
 let storyContainer = document.getElementById("story");
    
let buttonContainer = document.getElementById("dialogue");

let history = ["intro"];

 const story = {
     intro : {
         text : "Ugh, my head.. hollup, where am I? What is this place?",
         choices : [
             ["Move around", "moving"],
             ["Stay put", "staying"],
         ]
     },
     staying : {
         text : "Y'know what- whatever, I'll just stay here. That portal hole thing will just open back up and I'll just go back to my world. Everything will be just fine, right?",
         choices : [
             ["Stay put", "staying"]
         ]
     },

     //^^ bad choice, resulting in bad ending #1^^

     moving : {
         text : "I need to get out of here. I shouldn't stay here for too long, I'm already getting bad vibes just sitting here.",
         choices : [
             ["Move around", "moving"],
             ["Stay put", "staying"],
         ]
     },
     moving : {
         text : "Hello? Is anyone there?",
         choices : [
             ["Look around", "moving"],
             ["Stay put", "staying"],
         ]
     },

     moving : {
         text : "Oh god, who are you? Are you okay?! What happened to you? Are you even real? I don't know what's going on, I just fell into this weird hole and all a sudden I-",
         choices : [
            ["Go to page 5", "page5"]
         ]
     },
     placeholder : {
         text : "Massa tincidunt dui ut ornare lectus. Pretium quam vulputate dignissim suspendisse in est. Aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa. Neque convallis a cras semper auctor neque vitae. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Amet mauris commodo quis imperdiet massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Praesent elementum facilisis leo vel fringilla est ullamcorper. Eget velit aliquet sagittis id consectetur purus. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Odio tempor orci dapibus ultrices in iaculis nunc. Semper quis lectus nulla at volutpat diam. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
         choices : []
     }
 };

 function makeButton(btnText, choice){
     let button = document.createElement("button");

     button.innerHTML = btnText;

     buttonContainer.appendChild(button);

     button.addEventListener ("click", function() {
         history.push(choice);
         showStory();
     });
 }


 function buildStory(text) {
     let storyItem = document.createElement("p");

     storyItem.innerText = text;

     storyContainer.appendChild(storyItem);

 }

 function showStory(){

     let currentPage = history[history.length - 1]; // set currentPage to last index of history array.

    storyContainer.innerHTML = ""; // reset html
    buttonContainer.innerHTML = ""; // reset buttons
    

     for(let page of history){ // build story text from items in history array
         buildStory(story[page].text);
    }
    
     for(let choice of story[currentPage].choices){ // build buttons from choices property of most recent story choice
         makeButton(choice[0], choice[1])
     }
 }

 showStory();
