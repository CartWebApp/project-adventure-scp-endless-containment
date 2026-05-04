
//Defining our arrays
const imageslevel0 = [
    {image: 'images/level0.png', weight: 10, arrows: [{top: '57%', left: '46%'}, {top: '60%', right: '68%'}, {top: '65%', right: '19%'}]},
    {image: 'images/door.png', weight: 1, arrows: [{top: '56%', left: '47.5%', exiteer: true}]},
    {image: 'images/arrows.png', weight: 10, arrows: [{top: '79%', left: '32%'}, {top: '67%', right: '52%'}, {top: '72%', right: '27%'}, {bottom: '-18%', left: '51%'}]},
    {image: 'images/dark 1.png', weight: 10, arrows: [{top: '63%', left: '41%'}, {top: '63%', right: '53%'}, {top: '63%', right: '53%'}, {bottom: '-20%', left: '60%'}]},
    {image: 'images/iconic.png', weight: 10, arrows: [{top: '40%', left: '21%'}, {top: '38%', right: '40%'}, {top: '38%', right: '40%'}, {bottom: '-10%', left: '35%'}]},
    {image: 'images/view.png', weight: 10, arrows: [{top: '30%', left: '40%'}, {top: '30%', right: '53.5%'}, {top: '30%', right: '53.5%'}, {bottom: '-20%', left: '70%'}]},
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
                window.location.href = 'gameover.html';
            }
        }, 2000);
    }

    const imgElementImage = imgElement;
    
    
    if (imgElementImage && selected) {
        lastImage = selected.image;
        selectedItem = selected;
        imgElementImage.src = selected.image;
        repositionArrows(selected); 
    }
}

const mapElement = document.getElementById('mappytainer');

const playerElement = document.getElementById('player');

const exitElement = document.getElementById('exit');

function maptrack() {
    const cells = document.querySelector('#mappytainer');

    if (typeof playerRow !== 'undefined' && typeof exitRow !== 'undefined' && playerRow === exitRow && playerCol === exitCol) {
        goToNextLevel();
    }

    const distanceToExit = Math.sqrt(Math.pow(playerX - exitX, 2) + Math.pow(playerY - exitY, 2));
}

function ExitToLevel() {
    goToNextLevel();
}

// Ensuring that the Html function is available globally
window.changeImage = changeImage;
window.onArrowClick = onArrowClick;
window.goToNextLevel = goToNextLevel;

document.addEventListener('DOMContentLoaded', () => {
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

//story stuff
// let storyContainer = document.getElementById("story");
    
// let buttonContainer = document.getElementById("dialogue");

// let history = ["intro"];

// const story = {
//     intro : {
//         text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam. Ultricies mi eget mauris pharetra et ultrices neque ornare. Non curabitur gravida arcu ac tortor dignissim. Nec ullamcorper sit amet risus. Quam quisque id diam vel quam. Ac tortor vitae purus faucibus ornare. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Scelerisque viverra mauris in aliquam sem fringilla ut. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Enim ut tellus elementum sagittis vitae. Lorem sed risus ultricies tristique nulla aliquet. Accumsan sit amet nulla facilisi morbi. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ut aliquam purus sit amet luctus venenatis lectus. Aliquet bibendum enim facilisis gravida neque. Eleifend mi in nulla posuere sollicitudin aliquam. Accumsan tortor posuere ac ut consequat semper viverra nam libero.",
//         choices : [
//             ["Move around", "Stay Put"],
//             ["Go to page 2", "page2"],
//             ["Go to page 3", "page3"]
//         ]
//     },
//     page1 : {
//         text : "Faucibus in ornare quam viverra orci sagittis eu. Arcu ac tortor dignissim convallis aenean et. Sodales ut etiam sit amet nisl purus in mollis nunc. Non nisi est sit amet facilisis magna etiam tempor orci. Dignissim sodales ut eu sem integer vitae justo eget. Integer feugiat scelerisque varius morbi enim nunc. Sed felis eget velit aliquet sagittis id consectetur purus. Vitae congue eu consequat ac felis. Non blandit massa enim nec dui. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Eget nulla facilisi etiam dignissim diam quis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque viverra justo nec ultrices dui sapien eget mi. Sapien et ligula ullamcorper malesuada proin libero nunc. Fermentum et sollicitudin ac orci. Ut eu sem integer vitae justo. Vivamus at augue eget arcu dictum varius duis. Tortor id aliquet lectus proin nibh nisl condimentum.",
//         choices : [
//             ["Go to page 2", "page2"],
//             ["Go to page 3", "page3"],
//             ["Go to page 4", "page4"]
//         ]
//     },
//     page2 : {
//         text : "Faucibus in ornare quam viverra orci sagittis eu. Arcu ac tortor dignissim convallis aenean et. Sodales ut etiam sit amet nisl purus in mollis nunc. Non nisi est sit amet facilisis magna etiam tempor orci. Dignissim sodales ut eu sem integer vitae justo eget. Integer feugiat scelerisque varius morbi enim nunc. Sed felis eget velit aliquet sagittis id consectetur purus. Vitae congue eu consequat ac felis. Non blandit massa enim nec dui. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Eget nulla facilisi etiam dignissim diam quis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Neque viverra justo nec ultrices dui sapien eget mi. Sapien et ligula ullamcorper malesuada proin libero nunc. Fermentum et sollicitudin ac orci. Ut eu sem integer vitae justo. Vivamus at augue eget arcu dictum varius duis. Tortor id aliquet lectus proin nibh nisl condimentum.",
//         choices : [
//             ["Go to page 3", "page3"],
//             ["Go to page 4", "page4"],
//             ["Go to page 5", "page5"]
//         ]
//     },
//     page3 : {
//         text : "Interdum velit euismod in pellentesque massa placerat duis. Ut sem nulla pharetra diam sit amet. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Tortor aliquam nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Aliquam eleifend mi in nulla. Mus mauris vitae ultricies leo. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae tortor condimentum lacinia quis vel eros. Sem integer vitae justo eget magna fermentum iaculis. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Quam id leo in vitae turpis massa sed elementum tempus. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Amet luctus venenatis lectus magna fringilla urna porttitor. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ultrices sagittis orci a scelerisque.",
//         choices : [
//             ["Go to page 4", "page4"],
//             ["Go to page 5", "page5"]
//         ]
//     },
//     page4 : {
//         text : "Vitae justo eget magna fermentum iaculis eu non diam. Pellentesque elit eget gravida cum sociis natoque. Et tortor consequat id porta nibh venenatis cras sed felis. Cursus risus at ultrices mi tempus. In ornare quam viverra orci sagittis eu. Sapien nec sagittis aliquam malesuada. Suscipit tellus mauris a diam. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Egestas tellus rutrum tellus pellentesque. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Arcu risus quis varius quam quisque id diam vel quam. Aenean euismod elementum nisi quis eleifend quam adipiscing.",
//         choices : [
//             ["Go to page 5", "page5"]
//         ]
//     },
//     page5 : {
//         text : "Massa tincidunt dui ut ornare lectus. Pretium quam vulputate dignissim suspendisse in est. Aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa. Neque convallis a cras semper auctor neque vitae. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Amet mauris commodo quis imperdiet massa tincidunt. Leo in vitae turpis massa sed elementum tempus egestas. Praesent elementum facilisis leo vel fringilla est ullamcorper. Eget velit aliquet sagittis id consectetur purus. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Odio tempor orci dapibus ultrices in iaculis nunc. Semper quis lectus nulla at volutpat diam. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
//         choices : []
//     }
// }

// function makeButton(btnText, choice){
//     let button = document.createElement("button");

//     button.innerHTML = btnText;

//     buttonContainer.appendChild(button);

//     button.addEventListener ("click", function() {
//         history.push(choice);
//         showStory();
//     });
// }


// function buildStory(text) {
//     let storyItem = document.createElement("p");

//     storyItem.innerText = text;

//     storyContainer.appendChild(storyItem);

// }

// function showStory(){

//     let currentPage = history[history.length - 1]; // set currentPage to last index of history array.

//     storyContainer.innerHTML = ""; // reset html
//     buttonContainer.innerHTML = ""; // reset buttons
    

//     for(let page of history){ // build story text from items in history array
//         buildStory(story[page].text);
//     }
    
//     for(let choice of story[currentPage].choices){ // build buttons from choices property of most recent story choice
//         makeButton(choice[0], choice[1])
//     }
// }

// showStory();
