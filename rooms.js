
//Defining our arrays
const imageslevel0 = [
    {image: 'images/level0.png', weight: 10, arrows: [{top: '67%', left: '50%'}, {top: '67%', right: '69%'}, {top: '69%', right: '15%'}],        
    dialogue: {
            text: "Where am I? What is this place?",
            delay: 1500
        }},
    {image: 'images/door.png', weight: 6, arrows: [{top: '56%', left: '47.5%', exiteer: true}],        
    dialogue: {
            text: "This is new",
            delay: 1500
        } },
    {image: 'images/arrows.png', weight: 10, arrows: [{top: '71%', left: '35%'}, {top: '63.5%', right: '52%'}, {top: '72%', right: '32%'}, {bottom: '-18%', left: '51%'}]},
    {image: 'images/dark 1.png', weight: 10, arrows: [{top: '63%', left: '42.6%'}, {top: '63%', right: '53%'}, {top: '63%', right: '53%'}, {bottom: '-20%', left: '63%'}]},
    {image: 'images/iconic.png', weight: 10, arrows: [{top: '50%', left: '28%'}, {top: '45%', right: '45%'}, {top: '45%', right: '45%'}, {bottom: '-20%', left: '35%'}],         
    dialogue: {
            text: "",
            delay: 2000,
            choices: [
                ["Y’know what– whatever, I’ll just stay here. The hole will open back up and everything will be fine.. Right?”", "stay_Put"],
                ["I need to get out here. I shouldn’t stay too long in one place, it doesn’t seem like a good idea..", "go_Explore"]
            ]
        }},
    {image: 'images/view.png', weight: 10, arrows: [{top: '30%', left: '42.2%'}, {top: '30%', right: '53.5%'}, {top: '30%', right: '53.5%'}, {bottom: '-15%', left: '70%'}]},
    {image: 'images/THEimage.png', weight: 10, arrows: [{top: '70%', left: '66%'}, {top: '70%', right: '29.7%'}, {top: '70%', right: '29.7%',}, {bottom: '-18%', left: '50%', id: 'rotate180'}]},
    {image: 'images/vhs.png', weight: 10, arrows: [{top: '70%', left: '24.1%'}, {top: '62%', right: '35%'}, {top: '62%', right: '54%'}, {bottom: '-25%', left: '70%'}]},
    {image: 'images/hall 1.png', weight: 10, arrows: [{top: '51%', left: '36%'}, {top: '50%', right: '45%'}, {top: '50%', right: '45%'}, {bottom: '-15%', left: '40%'}]},
    {image: 'images/chairs.png', weight: 10, arrows: [{top: '77%', left: '68.7%', id: 'rotate90'}, {bottom: '-16%', left: '20%', id: 'rotate270'}, {top: '67%', right: '100000%'}, {bottom: '-25%', left: '50%', id: 'rotate180'}]},
    {image: 'images/noshelves.png', weight: 10, arrows: [{top: '53%', left: '45%'}, {top: '44%', right: '100000%'}, {top: '64%', right: '24%', id: 'rotate90'}, {bottom: '-23%', left: '50%', id: 'rotate180'}]},
    {image: 'images/lizart(1).png', enemyactive: true, weight: 3, arrows:[{top: '77%', left: '68.7%', id: 'rotate90'}, {bottom: '-16%', left: '20%', id: 'rotate270'}, {top: '67%', right: '100000%'}, {bottom: '-25%', left: '50%', id: 'rotate180'}]},
    {image: 'images/lizart(2).png', enemyactive: true, weight: 3, arrows: [{top: '51%', left: '32%'}, {top: '50%', right: '45%'}, {top: '50%', right: '45%'}, {bottom: '-15%', left: '40%'}]}

];

const imageslevel1 = [//make sure to position all arrrows.
    {image: 'images/parkingarge.png', weight: 10, arrows: [{top: '69%', left: '68.5%', id: 'rotate90'}, {top: '53%', right: '100000%'}, {top: '56%', left: '57%'}, {bottom: '-20%', left: '30%', id: 'rotate180'}]},
    {image: 'images/flickering 1.png', weight: 10, arrows: [{top: '70%', left: '22%'}, {top: '70%', right: '25%'}, {top: '10000%', right: '25%'}, {bottom: '-20%', left: '50%', id: 'rotate180'}]},
    {image: 'images/idkitslevel1.png', weight: 10, arrows: [{top: '69%', left: '28%'}, {top: '55%', right: '100000%'}, {top: '61%', right: '38%'}, {bottom: '-20%', left: '45%', id: 'rotate180'}]},
    {image: 'images/image 67.png', weight: 10, arrows: [{top: '45%', left: '20%'}, {top: '59%', right: '24%'}, {top: '59%', right: '24%'}, {bottom: '-15%', left: '43%'}]},
    {image: 'images/rako games 1.png', weight: 10, arrows: [{top: '80%', left: '45%'}, {top: '65%', right: '400000%'}, {top: '65%', right: '40000000%'}, {bottom: '-20%', left: '80%', id: 'rotate90'}]},
    {image: 'images/whichway.png', weight: 10, arrows: [{top: '90%', left: '39%'}, {top: '75%', right: '22%'}, {top: '75%', right: '22%'}, {bottom: '-25%', left: '69%', id: 'rotate180'}]},
    {image: 'images/shyguy(2).png', enemyactive: true, weight: 3, arrows: [{top: '60%', left: '22%'}, {top: '60%', right: '25%'}, {top: '60%', right: '25%'}, {bottom: '-20%', left: '50%'}]},
    {image: 'images/shyguy(1).png', enemyactive: true, weight: 3, arrows: [{top: '60%', left: '22%'}, {top: '60%', right: '29%'}, {top: '60%', right: '29%'}, {bottom: '-25%', left: '50%'}]},
    {image:  'images/Door 2.png', weight: 7, arrows: [{top: '53%', left: '77%', exiteer: true}, {top: '53%', right: '17%'}, {top: '53%', right: '17%'}, {bottom: '-20%', left: '20%', exiteer: true}]}
];

const imageslevel5 = [
    {image: 'images/The_Hotel 1.png', weight: 10, arrows: [{top: '60%', left: '49%'}, {top: '60%', right: '47%'}, {top: '60%', right: '47%'}, {bottom: '25%', left: '49%'}]},
    {image: 'images/redcarpet.png', weight: 10, arrows: [{top: '60%', left: '48%'}, {top: '60%', right: '48%'}, {top: '60%', right: '48%'}, {bottom: '25%', left: '48%'}]},
    {image: 'images/checkin.png', weight: 10, arrows: [{top: '80%', left: '78%'}, {top: '80%', right: '18%'}, {top: '80%', right: '18%'}, {bottom: '5%', left: '78%'}]},
    {image: 'images/Level-5-Ballroom 1.png', weight: 10, arrows: [{top: '55%', left: '24%'}, {top: '55%', right: '72%'}, {top: '53%', right: '25%'}, {bottom: '32%', left: '71%'}]},
    {image: 'images/level5hall.jpg', weight: 10, arrows: [{top: '54%', left: '48%'}, {top: '54%', right: '48%'}, {top: '54%', right: '48%'}, {bottom: '31%', left: '48%'}]},
    {image: 'images/mainhall.png', weight: 10, arrows: [{top: '70%', left: '52%'}, {top: '90%', right: '67%'}, {top: '90%', right: '31%'}, {bottom: '15%', left: '43%'}]},
    {image: 'images/doctor(1).png', enemyactive: true, weight: 6, arrows: [{top: '55%', left: '24%'}, {top: '55%', right: '72%'}, {top: '53%', right: '25%'}, {bottom: '32%', left: '71%'}]},
    {image: 'images/doctor(2).png', enemyactive: true, weight: 6, arrows: [{top: '60%', left: '49%'}, {top: '60%', right: '47%'}, {top: '60%', right: '47%'}, {bottom: '25%', left: '49%'}]},
    {image: 'images/Door 5.png', weight: 10, arrows: [{top: '70%', left: '50%', exiteer: true}, {top: '70%', right: '46%'}, {top: '70%', right: '46%'}, {bottom: '15%', left: '50%'}]},
];

const imageslevel37 = [
    {image: 'images/poolhall.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/pools 1.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/stairs.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/winding.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/mask(1).png', enemyactive: true, weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/mask(2).png', enemyactive: true, weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/courtyard.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/Door 37.png', weight: 1, arrows: [{top: '20%', left: '30%', exiteer: true}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]}
];

const imageslevel232 = [
    {image: 'images/endless.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/cart.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/smiler.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/oohdark.jpg', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/atmosphere.jpg', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/Bargain.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/zomboi(1).png', enemyactive: true, weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/zomboi(2).png', enemyactive: true, weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/door 232.png', weight: 1, arrows: [{top: '20%', left: '30%', exiteer: true}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
];

const imageslevel94 = [
    {image: 'images/house clear view.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/insidehouse(1).png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/stop.png', weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/4666(2).png', enemyactive: true, weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
    {image: 'images/4666(1).png', enemyactive: true, weight: 10, arrows: [{top: '20%', left: '30%'}, {top: '60%', right: '10%'}, {top: '15%', right: '5%'}, {bottom: '10%', left: '50%'}]},
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
            if (position.id) { arrow.id = position.id; }
        } else {
            arrow.style.display = 'none';
            arrow.dataset.index = '';
            arrow.dataset.exit = 'false';
            arrow.classList.remove('exit-arrow');
            arrow.removeAttribute('id');
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
                localStorage.setItem("savedGameLevel", levelOrder[Current]);
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
            triggerDialogue(selected);
        }, 300);
    }
}


function triggerDialogue(imageData) {
    clearDialogue();
    const dialogue = imageData?.dialogue;
    if (!dialogue) return;

    const delay = typeof dialogue.delay === 'number' ? dialogue.delay : 1000;
    setTimeout(() => renderDialogue(dialogue), delay);
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
            mapHintElement.textContent = 'Nearest point of instability located! Proceed to red dot.';
        } else if (previousDistance === null) {
            mapHintElement.textContent = 'Use arrows to move. The map shows your position and the exit.';
        } else if (distance < previousDistance) {
            mapHintElement.textContent = 'getting closer to nearest instability point(exit).';
        } else if (distance > previousDistance) {
            mapHintElement.textContent = ' further from nearest instability point(exit).';
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
            if (position.id) {
                arrow.id = position.id;
            } else {
                arrow.removeAttribute('id');
            }
        } else {
            arrow.style.display = 'none';
            arrow.removeAttribute('id');
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
    
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.play().catch(e => console.log('Autoplay blocked for audio:', e));
    });
    });
    
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
    const RewindIt = document.getElementById('Rewind');
    if (RewindIt) {
        RewindIt.addEventListener('click', (event) => {
            event.preventDefault();
            const savedFile = localStorage.getItem('savedGameLevel');
            window.location.href = (savedFile && savedFile.trim()) ? savedFile : 'Level0.html';
        });
    }
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.onclick = onArrowClick;
    });

    //auzio
    const audios = document.querySelectorAll('audio');
    const startAudio = () => {
        audios.forEach(audio => {
            audio.play().catch(e => console.log('Audio play blocked or deferred:', e));
        });
        window.removeEventListener('click', startAudio);
        window.removeEventListener('keydown', startAudio);
    };

    if (audios.length > 0) {
        window.addEventListener('click', startAudio, { once: true });
        window.addEventListener('keydown', startAudio, { once: true });
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

const sanityBar = document.getElementById("sanity");

let timer = setInterval(() => {
    if (!sanityBar) return;

    sanityBar.value = Math.max(0, sanityBar.value - 0.1);
    if (sanityBar.value <= 0) {
        DepleteSanity = true;
    }
}, 1000);

let threat = 1

let threatLevel = setInterval(() => {
    if (DepleteSanity === true) {    
        threat += 1;
}
}, 1000);

// Inline dialogue support for image-based events
const storyContainer = document.getElementById('story');
const buttonContainer = document.getElementById('dialogue');

function clearDialogue() {
    if (storyContainer) storyContainer.textContent = '';
    if (buttonContainer) buttonContainer.innerHTML = '';
}

function makeDialogueButton(label, onClick) {
    if (!buttonContainer) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', onClick);
    buttonContainer.appendChild(button);
}

function renderDialogue(dialogue) {
    if (!storyContainer || !buttonContainer || !dialogue) return;
    clearDialogue();

    if (dialogue.text) {
        storyContainer.textContent = dialogue.text;
    }

    if (Array.isArray(dialogue.choices) && dialogue.choices.length) {
        dialogue.choices.forEach(([label, action]) => {
            makeDialogueButton(label, () => {
                clearDialogue();
                if (typeof action === 'function') {
                    action();
                }
            });
        });
    } else {
        makeDialogueButton('Continue', clearDialogue);
    }
}

function triggerDialogue(imageData) {
    clearDialogue();
    const dialogue = imageData?.dialogue;
    if (!dialogue) return;

    const delay = typeof dialogue.delay === 'number' ? dialogue.delay : 1000;
    setTimeout(() => renderDialogue(dialogue), delay);
}

