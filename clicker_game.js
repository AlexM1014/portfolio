var hedgegoatCountDisplay = document.getElementById('hedgegoat-count');
var hedgegoatAddOne = document.getElementById('hedgegoat-add-one');
var hedgegoatAddTen = document.getElementById('hedgegoat-add-ten');

//Movement variables
var movementButtonLeft = document.getElementById('movement-button-left');
var movementButtonRight = document.getElementById('movement-button-right');
var movementButtonUp = document.getElementById('movement-button-up');
var movementButtonDown = document.getElementById('movement-button-down');
var resetButton = document.getElementById('reset-position');

var hedgegoatCount = 1;

var hedgegoatNameList = [
    'Sonk', 
    'Tils',
    'Nickles',
];

var hedgegoatObject = {
    name: 'Sonk',
    speed: 1001,
    hasRings: true,
    '🐐ᓚᘏᗢ': 'Sure why not',
};

var updateHedgegoatCount = function () {
    hedgegoatCountDisplay.innerText = hedgegoatCount;
    console.log('what is spikemine?', window.spikemine);
    //to-do
    //we don't know when we have access to a spikemine
    //admiral says there's a way to know when we do
    //gonna check out out, yippie

    if(window.spikemine){
        window.spikemine.scale.setScalar(hedgegoatCount/10);
    }
};

updateHedgegoatCount();

hedgegoatAddOne.addEventListener('click', function () {
    hedgegoatCount += 1;
    updateHedgegoatCount();
});

hedgegoatAddTen.addEventListener('click', function () {
    hedgegoatCount += 10;
    updateHedgegoatCount();
});

//Movement

var moveLeft = function () {
    if(window.spikemine){
        window.spikemine.position.x -= 1;
        console.log(window.spikemine.position);
    }
};

var moveRight = function () {
    if(window.spikemine){
        window.spikemine.position.x += 1;
        console.log(window.spikemine.position);
    }
};

var moveUp = function () {
    if(window.spikemine){
        window.spikemine.position.y += 1;
        console.log(window.spikemine.position);
    }
};

var moveDown = function () {
    if(window.spikemine){
        window.spikemine.position.y -= 1;
        console.log(window.spikemine.position);
    }
};

var resetPosition = function () {
    if(window.spikemine){
        window.spikemine.position.y = 0;
        window.spikemine.position.x = 0;
        console.log(window.spikemine.position);
    }
};


movementButtonLeft.addEventListener('click', function () {
    moveLeft();
});

movementButtonRight.addEventListener('click', function () {
    moveRight();
});

movementButtonUp.addEventListener('click', function () {
    moveUp();
});

movementButtonDown.addEventListener('click', function () {
    moveDown();
});

resetButton.addEventListener('click', function () {
    resetPosition();
});