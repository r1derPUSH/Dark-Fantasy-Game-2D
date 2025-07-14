// script

// function playAudio () {
//     audio = new Audio('darkMusic.mp3');
//     audio.volume = .05;
//     audio.loop = true;
//     audio.play();
// }
 changeMusic = false;

window.onload = function playAudio () {
 audio = new Audio('darkMusic.mp3');
    audio.volume = 0;
    audio.loop = true;
    audio.play();
}



const container = document.querySelector('.chooseCharacter');
const containerMagician = document.querySelector('.container_magician');
const containerKnight = document.querySelector('.container_knight');
const typeWriterParent = document.querySelector('.chooseCharText');
const typeWriterChild = document.querySelector('.animatedTypeWriter'); // animated text
const emptyDiv = document.querySelector('.emptyBox');
const svgHome = document.querySelector('.svgHome');
const battleField = document.querySelector('.battleField');
const buttonStart = document.getElementById('startButton');
const magicianButton = document.getElementById('magicianButton');
const knightButton = document.getElementById('knightButton');
const readyText = document.querySelector('.readyText');
svgHome.style.display = 'none';
const resultTimer = document.querySelector('.timerSetTimeout');
const characterImage = document.querySelector('.charImg');
const movingImageChar = document.querySelector('.characterFunctional');
const bullet = document.querySelector('#skill');
const reload = document.querySelector('.reloadText');
const enemyContainer = document.querySelector('.enemy');
// const enemyImg = document.querySelector('.enemyImg');
const enemyHP = document.querySelector('.enemyHP');
const enemyHPInside = document.querySelector('.enemyHPInside');
const enemyImgID = document.getElementById('enemyID');
const coin = document.querySelector('.coin');
const coinImg = document.querySelector('.coinImg');
const result = document.querySelector('.result');

let isMusic = false;
let isMagician = false;
let isKnight = false;
let x = 450;
let y = 400;
let xBullet =  650;
let yBullet = 550;
let moveStep = 10;
let isEnter = false;
let reloadFinished = false;
let reloadAlreadyFinished = true;
let counterDamage = 0;
let isEnemyDefeated = false;
let isEnemyDefeatedFirst = false;
let coinX = 0;
let coinY = 0;
let catchCoin = false;
let score = 1;

function magicianCharacter() {
    document.body.style.backgroundImage = "url('img/real.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'none';
    containerMagician.style.display = 'none';
    containerKnight.style.display = 'none';
    // typeWriterParent.removeChild(typeWriterChild);
    container.style.height = '77.6vh';
    typeWriterChild.textContent = 'Prepare for Battle. Your character is Magician'
    typeWriterChild.color = '#e4e0d8';
    typeWriterChild.classList.add('animatedTypeWriterClicked');
    svgHome.style.display = 'block';
    buttonStart.style.display = 'block';
    isMagician = true;
}

function knightCharacter() {
    document.body.style.backgroundImage = "url('img/Stand\ Up\ Reaction\ GIF\ by\ Xbox.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'none';
    containerMagician.style.display = 'none';
    containerKnight.style.display = 'none';
    container.style.height = '77.6vh';
    typeWriterChild.textContent = 'Prepare for Battle. Your character is Knight';
    typeWriterChild.color = '#e4e0d8';
    typeWriterChild.classList.add('animatedTypeWriterClicked');
    svgHome.style.display = 'block';
    buttonStart.style.display = 'block';
    isKnight = true;
}

// mouseout event
magicianButton.addEventListener('mouseout', event => {
    magicianButton.classList.add('container_magicianMouseOut');
})

knightButton.addEventListener('mouseout', event => {
    knightButton.classList.add('container_knightMouseOut');
})

svgHome.addEventListener('mouseout', event => {
    svgHome.classList.add('svgHomeMouseOut');
})

function homeButton() {
    typeWriterParent.style.display = 'none';
    isMagician = false;
    isKnight = false;

    x = 450;
    y = 400;
    xBullet = 650;
    yBullet = 550;
    moveStep = 10;
    isEnter = false;
    reloadFinished = false;
    reloadAlreadyFinished = true;
    counterDamage = 0;
    isEnemyDefeated = false;
    isEnemyDefeatedFirst = false;

    coinX = 0;
    coinY = 0;
    catchCoin = false;
    score = 1;
    enemyHP.style.backgroundColor = 'hsl(40, 16%, 4%)';
    enemyImgID.classList.add('enemyRelived');
    counterDamage = 0;
    containerMagician.style.display = 'flex';
    containerKnight.style.display = 'flex';
    document.body.style.backgroundColor = 'hsl(258, 34%, 41%)';
    document.body.style.backgroundImage = "url('img/Art\ Wtf\ GIF\ by\ Kenaim.gif')";
    document.body.style.animationName = 'bodyLoad';
    document.body.style.animationDuration = '2s';
    document.body.style.color = '#ddd';
    document.body.style.textShadow = '1px 1px 3px #000';
    document.body.style.fontSize = '42px';
    document.body.style.fontFamily = "'MedievalSharp', cursive";
    document.body.style.margin = '0';
    typeWriterChild.textContent = 'Choose Your Character ⚔';
    typeWriterChild.className = 'animatedTypeWriter';
    container.style.height = '74.5vh';
    svgHome.style.display = 'none';
    buttonStart.style.display = 'none';
    isMagician = false;
    isKnight = false;
    movingImageChar.style.display = 'none';
}


function startGame() {
    document.body.style.backgroundImage = "url('img/gifcheck111.gif')";
    document.body.style.animationName = 'secondBodyStart';
    document.body.style.animationDuration = '2s';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'none';
    document.body.style.height = '105vh';
    typeWriterChild.textContent= '';
    setTimeout(() => {
        resultTimer.textContent = '3';
    }, 0)
    setTimeout(() => {
        resultTimer.textContent = '2';
    }, 1000)
    setTimeout(() => {
        resultTimer.textContent = '1';
    }, 2000)
    setTimeout(() => {
        resultTimer.textContent = 'Go!';
    }, 3000)
    buttonStart.style.display = 'none';
    setTimeout(() => {
        resultTimer.textContent = '';
        movingImageChar.style.display = 'block';
    }, 4000)
    setTimeout(() => {
        if (isMagician) {
            movingImageChar.style.display = 'block';
            characterImage.src = 'img/wizard_transparent.png';
            characterImage.style.width = '250px';
            characterImage.style.height = '350px';
            document.addEventListener('keydown', event => {
                if (event.key.startsWith('Arrow')) {
                    console.log(x);
                    console.log(y);
                    if (event.key == 'ArrowUp') {
                        y -= moveStep;
                        yBullet -= moveStep;
                    }
                    else if(event.key == 'ArrowLeft') {
                        x -= moveStep;
                        xBullet -= moveStep;
                    }
                    else if(event.key == 'ArrowRight') {
                        x += moveStep;
                        xBullet += moveStep;
                    }
                    else if(event.key == 'ArrowDown') {
                        y += moveStep;
                        yBullet += moveStep;
                    }
                    // console.log(coinX);
                    // console.log(coinY);
                }
                if (!reloadAlreadyFinished && event.key == 'Enter') {
                    return;
                }
                if (!reloadFinished && !isEnter && event.key == 'Enter')  {
                    // createCoins();
                    bullet.className = 'skills';
                    reloadFinished = false;
                    reloadAlreadyFinished = false;
                    setTimeout(() => {
                        reload.textContent = "Reload: 5s";
                    }, 0)
                    setTimeout(() => {
                        reload.textContent = "Reload: 4s";
                        enemyImgID.style.backgroundColor = 'red';
                        setTimeout(() => {
                            enemyImgID.style.backgroundColor = 'transparent';
                        }, 100)
                    }, 1000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 3s";
                    }, 2000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 2s";
                    }, 3000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 1s";
                    }, 4000)
                    setTimeout(() => {
                         if(!catchCoin && x >= coinX && y >= coinY) {
                            console.log('you catch a coin');
                            catchCoin = true;
                            coinImg.classList.add('coinChange');
                        }   
                        reload.textContent = "Reload finished";
                        reloadFinished = true;
                        reloadAlreadyFinished = true;
                        coinImg.className = 'coinChangeAdd';
                        if (catchCoin) {
                             result.textContent = `Score: ${score++}`
                        }
                        createCoins ();
                    }, 5000)
                    isEnter = true;
                    counterDamage++;
                }
                // event.preventDefault();
                characterImage.style.top = `${y}px`;
                characterImage.style.left = `${x}px`;
                bullet.style.top = `${yBullet}px`;
                bullet.style.left = `${xBullet}px`;

                if (counterDamage == 1) {
                    enemyHPInside.classList.add('enemyHPDamaged');
                    enemyHP.style.backgroundColor = 'hsl(29, 87%, 28%)';
                }
                else if (counterDamage == 2) {
                    enemyHPInside.classList.add('enemyHPDamaged2');
                }
                else if (counterDamage == 3) {
                    enemyHPInside.classList.add('enemyHPDamaged3');
                }
                else if (counterDamage == 4) {
                    enemyHPInside.classList.add('enemyHPDamaged4');
                }
                else if (counterDamage == 5) {
                    enemyHPInside.classList.add('enemyHPDamaged5');
                }
                else if (counterDamage == 6) {
                    enemyHPInside.classList.add('enemyHPDamaged6');
                }
                else if (counterDamage == 7) {
                    enemyHPInside.classList.add('enemyHPDamaged7');
                }
                else if (counterDamage == 8) {
                    enemyHPInside.classList.add('enemyHPDamaged8');
                }
                else if (counterDamage == 9) {
                    enemyHPInside.classList.add('enemyHPDamaged9');
                }
                else if (counterDamage == 10) {
                    enemyHPInside.classList.add('enemyHPDamagedDefeated');
                    enemyHP.style.backgroundColor = 'transparent';
                    enemyImgID.classList.add('enemyDie');
                    isEnemyDefeatedFirst = true;
                    counterDamage = 11;
                }
                if (isEnemyDefeatedFirst) {
                    enemyImgID.classList.add('enemyDie');
                    setTimeout(() => {
                        enemyImgID.src = 'img/secondEnemy.png';
                        enemyImgID.style.opacity = '1';
                        console.log('Enemy is Defeated')
                    }, 2000)
                    setTimeout(() => {
                        enemyImgID.classList.add('enemyRelived');
                        // enemyImgID.style.opacity = '1';
                    }, 1000)
                    if (!reloadFinished && !isEnter && event.key == 'Enter')  {
                    bullet.className = 'skills';
                    setTimeout(() => {
                        reload.textContent = "Reload: 5s";
                    }, 0)
                    setTimeout(() => {
                        reload.textContent = "Reload: 4s";
                        enemyImgID.style.backgroundColor = 'red';
                        setTimeout(() => {
                            enemyImgID.style.backgroundColor = 'transparent';
                        }, 100)
                    }, 1000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 3s";
                    }, 2000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 2s";
                    }, 3000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 1s";
                    }, 4000)
                    setTimeout(() => {
                        reload.textContent = "Reload finished";
                        reloadFinished = true;
                        reloadAlreadyFinished = true;
                        // coinImg.className = 'coinChangeAdd';
                        // createCoins ();
                    }, 5000)
                    isEnter = true;
                    counterDamage++;
                }
                // event.preventDefault();
                characterImage.style.top = `${y}px`;
                characterImage.style.left = `${x}px`;
                bullet.style.top = `${yBullet}px`;
                bullet.style.left = `${xBullet}px`;
                if (counterDamage == 11) {
                    enemyHPInside.classList.add('enemyHPDamaged');
                    enemyHP.style.backgroundColor = 'hsl(29, 87%, 28%)';
                }
                else if (counterDamage == 12) {
                    enemyHPInside.classList.add('enemyHPDamaged2');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '180px';
                }

                //height: 50px;
                // width: 180px;
                else if (counterDamage == 13) {
                    enemyHPInside.classList.add('enemyHPDamaged3');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '160px';
                }
                else if (counterDamage == 14) {
                    enemyHPInside.classList.add('enemyHPDamaged4');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '140px';
                }
                else if (counterDamage == 15) {
                    enemyHPInside.classList.add('enemyHPDamaged5');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '120px';
                }
                else if (counterDamage == 16) {
                    enemyHPInside.classList.add('enemyHPDamaged6');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '100px';
                }
                else if (counterDamage == 17) {
                    enemyHPInside.classList.add('enemyHPDamaged7');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '80px';
                }
                else if (counterDamage == 18) {
                    enemyHPInside.classList.add('enemyHPDamaged8');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '60px';
                }
                else if (counterDamage == 19) {
                    enemyHPInside.classList.add('enemyHPDamaged9');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '20px';
                }
                else if (counterDamage >= 20) {
                    enemyHPInside.classList.add('enemyHPDamagedDefeated');
                    enemyContainer.classList.add('enemyDie');
                    enemyHP.style.backgroundColor = 'transparent';
                    isEnemyDefeated = true;
                    // enemyContainer.style.opacity = '.3'
                }
                if (isEnemyDefeated) {
                    setTimeout(() => {
                        svgHome.style.display = 'none';
                        typeWriterParent.style.display = 'block';
                        h1 = document.createElement('h1');
                        h1.textContent = 'You won against Dark Warriors!';
                        typeWriterParent.appendChild(h1);
                        h1.classList.add('animatedTypeWriter');
                        document.body.style.backgroundImage = "url('img/testee.gif')";
                        enemyContainer.style.display = 'none';
                        enemyHP.style.display = 'none';
                        movingImageChar.style.display = 'none';
                        reload.style.display = 'none';
                    }, 1500)
                }
            }
                isEnter = false;
                reloadFinished = false;
                // if(!catchCoin && x >= coinX && y >= coinY) {
                //     console.log('you catch a coin');
                //     catchCoin = true;
                //     coinImg.classList.add('coinChange');
                // }   
            })
            document.addEventListener('keyup', event => {
                setTimeout(() => {
                    bullet.className = 'emptyskill';
                }, 2000)
                isEnter = false;
                reloadFinished = false;
                catchCoin = false;
            });
        }
        else if (isKnight) {
            characterImage.src = 'img/knight_transparent.png';
            characterImage.style.width = '250px';
            characterImage.style.height = '350px';
            document.addEventListener('keydown', event => {
                setTimeout(() => {
                if (event.key.startsWith('Arrow')) {
                    if (event.key == 'ArrowUp') {
                        y -= moveStep;
                        yBullet -= moveStep;
                    }
                    else if(event.key == 'ArrowLeft') {
                        x -= moveStep;
                        xBullet -= moveStep;
                    }
                    else if(event.key == 'ArrowRight') {
                        x += moveStep;
                        xBullet += moveStep;
                    }
                    else if(event.key == 'ArrowDown') {
                        y += moveStep;
                        yBullet += moveStep;
                    }
                }
                if (!reloadAlreadyFinished && event.key == 'Enter') {
                    return;
                }
                if (!reloadFinished && !isEnter && event.key == 'Enter')  {
                    // console.log(counterDamage);
                    bullet.className = 'skills';
                    reloadFinished = false;
                    reloadAlreadyFinished = false;
                    setTimeout(() => {
                        reload.textContent = "Reload: 5s";
                    }, 0)
                    setTimeout(() => {
                        reload.textContent = "Reload: 4s";
                        enemyImgID.style.backgroundColor = 'red';
                        setTimeout(() => {
                            enemyImgID.style.backgroundColor = 'transparent';
                        }, 100)
                    }, 1000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 3s";
                    }, 2000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 2s";
                    }, 3000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 1s";
                    }, 4000)
                    setTimeout(() => {
                         if(!catchCoin && x >= coinX && y >= coinY) {
                            console.log('you catch a coin');
                            catchCoin = true;
                            coinImg.classList.add('coinChange');
                        }   
                        reload.textContent = "Reload finished";
                        reloadFinished = true;
                        reloadAlreadyFinished = true;
                        coinImg.className = 'coinChangeAdd';
                        if (catchCoin) {
                             result.textContent = `Score: ${score++}`
                        }
                        createCoins ();
                    }, 5000)
                    isEnter = true;
                    counterDamage++;
                }
                // event.preventDefault();
                characterImage.style.top = `${y}px`;
                characterImage.style.left = `${x}px`;
                bullet.style.top = `${yBullet}px`;
                bullet.style.left = `${xBullet}px`;


                if (counterDamage == 1) {
                    enemyHPInside.classList.add('enemyHPDamaged');
                    enemyHP.style.backgroundColor = 'hsl(29, 87%, 28%)';
                }
                else if (counterDamage == 2) {
                    enemyHPInside.classList.add('enemyHPDamaged2');
                }
                else if (counterDamage == 3) {
                    enemyHPInside.classList.add('enemyHPDamaged3');
                }
                else if (counterDamage == 4) {
                    enemyHPInside.classList.add('enemyHPDamaged4');
                }
                else if (counterDamage == 5) {
                    enemyHPInside.classList.add('enemyHPDamaged5');
                }
                else if (counterDamage == 6) {
                    enemyHPInside.classList.add('enemyHPDamaged6');
                }
                else if (counterDamage == 7) {
                    enemyHPInside.classList.add('enemyHPDamaged7');
                }
                else if (counterDamage == 8) {
                    enemyHPInside.classList.add('enemyHPDamaged8');
                }
                else if (counterDamage == 9) {
                    enemyHPInside.classList.add('enemyHPDamaged9');
                }
                else if (counterDamage == 10) {
                    enemyHPInside.classList.add('enemyHPDamagedDefeated');
                    enemyHP.style.backgroundColor = 'transparent';
                    enemyImgID.classList.add('enemyDie');
                    isEnemyDefeatedFirst = true;
                    counterDamage = 11;
                }
                if (isEnemyDefeatedFirst) {
                    enemyImgID.classList.add('enemyDie');
                    setTimeout(() => {
                        enemyImgID.src = 'img/secondEnemy.png';
                        enemyImgID.style.opacity = '1';
                        console.log('Enemy is Defeated');
                        enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    }, 2000)
                    setTimeout(() => {
                        enemyImgID.classList.add('enemyRelived');
                        // enemyImgID.style.opacity = '1';
                    }, 1000)
                    if (!reloadFinished && !isEnter && event.key == 'Enter')  {
                    // console.log(counterDamage);
                    bullet.className = 'skills';
                    setTimeout(() => {
                        reload.textContent = "Reload: 5s";
                    }, 0)
                    setTimeout(() => {
                        reload.textContent = "Reload: 4s";
                        enemyImgID.style.backgroundColor = 'red';
                        setTimeout(() => {
                            enemyImgID.style.backgroundColor = 'transparent';
                        }, 100)
                    }, 1000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 3s";
                    }, 2000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 2s";
                    }, 3000)
                    setTimeout(() => {
                        reload.textContent = "Reload: 1s";
                    }, 4000)
                    setTimeout(() => {
                        reload.textContent = "Reload finished";
                        reloadFinished = true;
                        reloadAlreadyFinished = true;
                    }, 5000)
                    isEnter = true;
                    counterDamage++;
                }
                // event.preventDefault();
                characterImage.style.top = `${y}px`;
                characterImage.style.left = `${x}px`;
                bullet.style.top = `${yBullet}px`;
                bullet.style.left = `${xBullet}px`;
                if (counterDamage == 11) {
                    enemyHPInside.classList.add('enemyHPDamaged');
                    enemyHP.style.backgroundColor = 'hsl(29, 87%, 28%)';
                }
                else if (counterDamage == 12) {
                    enemyHPInside.classList.add('enemyHPDamaged2');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '180px';
                }

                //height: 50px;
                // width: 180px;
                else if (counterDamage == 13) {
                    enemyHPInside.classList.add('enemyHPDamaged3');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '160px';
                }
                else if (counterDamage == 14) {
                    enemyHPInside.classList.add('enemyHPDamaged4');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '140px';
                }
                else if (counterDamage == 15) {
                    enemyHPInside.classList.add('enemyHPDamaged5');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '120px';
                }
                else if (counterDamage == 16) {
                    enemyHPInside.classList.add('enemyHPDamaged6');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '100px';
                }
                else if (counterDamage == 17) {
                    enemyHPInside.classList.add('enemyHPDamaged7');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '80px';
                }
                else if (counterDamage == 18) {
                    enemyHPInside.classList.add('enemyHPDamaged8');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '60px';
                }
                else if (counterDamage == 19) {
                    enemyHPInside.classList.add('enemyHPDamaged9');
                    enemyHPInside.style.backgroundColor = 'hsl(40, 16%, 4%)';
                    enemyHPInside.style.height = '50px';
                    enemyHPInside.style.width = '20px';
                }
                else if (counterDamage >= 20) {
                    enemyHPInside.classList.add('enemyHPDamagedDefeated');
                    enemyContainer.classList.add('enemyDie');
                    enemyHP.style.backgroundColor = 'transparent';
                    isEnemyDefeated = true;
                    // enemyContainer.style.opacity = '.3'
                }
                if (isEnemyDefeated) {
                    setTimeout(() => {
                        svgHome.style.display = 'none';
                        document.body.style.backgroundImage = "url('testee.gif')";
                        enemyContainer.style.display = 'none';
                        enemyHP.style.display = 'none';
                        movingImageChar.style.display = 'none';
                        reload.style.display = 'none';
                        typeWriterParent.style.flexWrap = 'nowrap';
                    }, 1500)}
            }
                isEnter = false;
                reloadFinished = false;
            })})
            document.addEventListener('keyup', event => {
                setTimeout(() => {
                    bullet.className = 'emptyskill';
                }, 2000)
                isEnter = false;
                reloadFinished = false;
            });
        }
    }, 5100)

    function createCoins () {
        const randomCoinX = Math.floor(Math.random() * (400 - (-200) + 1)) + (-200);
        const randomCoinY = Math.floor(Math.random() * (300 - (-200) + 1)) + (-200);
        if (randomCoinX >= coinX && randomCoinY >= coinY) {
            coinImg.classList.add("coinChange");
        }
        coinX = randomCoinX + 250;
        coinY = randomCoinY + 200;
        coin.style.top = `${randomCoinY}px`;
        coin.style.left = `${randomCoinX}px`;
        console.log(coinX);
        console.log(coinY);
    }

}






