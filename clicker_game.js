var hedgegoatAdmin = document.getElementById('hedgegoat-admin');
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

window.handle3DContentLoaded = function (loadedObjects) {
    var { spikemine } = loadedObjects;

    hedgegoatAdmin.removeAttribute('style');

    var updateHedgegoatCount = function () {
        hedgegoatCountDisplay.innerText = hedgegoatCount;
        console.log('what is spikemine?', spikemine);
        spikemine.scale.setScalar((hedgegoatCount / 10) + 0.5);
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
    var moveAmount = 0.1; 

    var moveLeft = function () {
        spikemine.position.x -= moveAmount;
        console.log(spikemine.position);
    };

    var moveRight = function () {
        spikemine.position.x += moveAmount;
        console.log(spikemine.position);
    };

    var moveUp = function () {
        spikemine.position.y += moveAmount;
        console.log(spikemine.position);
    };

    var moveDown = function () {
        spikemine.position.y -= moveAmount;
        console.log(spikemine.position);
    };

    var resetPosition = function () {
        spikemine.position.y = 0;
        spikemine.position.x = 0;
        console.log(spikemine.position);
    };

    movementButtonLeft.addEventListener('click', moveLeft);

    movementButtonRight.addEventListener('click', moveRight);

    movementButtonUp.addEventListener('click', moveUp);

    movementButtonDown.addEventListener('click', moveDown);

    resetButton.addEventListener('click', resetPosition);
};

