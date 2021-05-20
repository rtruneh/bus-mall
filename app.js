"use strict"

const results = document.getElementById("item-clicks");
const allItems = document.getElementById("all-items");
const rightItemImg = document.getElementById("right_item_img");
const middleItemImg = document.getElementById("middle_item_img");
const leftItemImg = document.getElementById("left_item_img");
const leftItemP = document.getElementById("left_item_p");
const middleItemP = document.getElementById("middle_item_p");
const rightItemP = document.getElementById("right_item_p");

//keep track of total clicks
let totalClicks = 0;

//differentiating the images
let leftItem = null;
let middleItem = null; 
let rightItem = null;

//constructor function
const MallItems = function(item, imagePath){
    this.item = item;
    this.imagePath = imagePath;
    this.clicks = 0;
    this.timesShown = 0;
    //push variables into array
    MallItems.allItems.push(this)
};

//making constructor an array
MallItems.allItems = [];

const renderItems = function(){
        //use right/left global variables for the img and the p to stick the goats on the page.
    leftItemImg.src = leftItem.imagePath;
    middleItemImg.src = middleItem.imagePath;
    rightItemImg.src = rightItem.imagePath;
    leftItemP.textContent = leftItem.item;
    middleItemP.textContent = middleItem.item;
    rightItemP.textContent = rightItem.item;
};

//randomly select picture
function itemSelector(){
    let leftIndex = Math.floor(Math.random() * MallItems.allItems.length)
    let middleIndex = Math.floor(Math.random() * MallItems.allItems.length)
    let rightIndex = Math.floor(Math.random() * MallItems.allItems.length)

while (rightIndex === leftIndex || rightIndex === middleIndex) {
    rightIndex = Math.floor(Math.random() * MallItems.allItems.length)
}

leftItem = MallItems.allItems[leftIndex];
middleItem = MallItems.allItems[middleIndex];
rightItem = MallItems.allItems[rightIndex];
};

function displayVotes(){
    results.innerHTML = '';
    let h2 = document.createElement('h2')
    h2.textContent = 'Item Votes'
    results.appendChild(h2);
    for (let item of MallItems.allItems){
        const li = document.createElement('li')
        li.textContent = `${item.item}: ${item.clicks}`
        results.appendChild(li)
    }
};


function handleClick(event){
    const clickedTarget = event.target;
    const id = clickedTarget.id;
    if (totalClicks < 25){
    if (id === 'left_item_img' || id === 'middle_item_img' || id === 'right_item_img' )
    {
        if (id === 'left_item_img'){
            leftItem.clicks++;
        } else if (id === 'middle_item_img'){
            middleItem.clicks++;

        }else {
            rightItem.clicks++;

        }
        totalClicks++;
        leftItem.timesShown++;
        middleItem.timesShown++;
        rightItem.timesShown++;
    
        itemSelector();
        renderItems();
    }
    }

if(totalClicks === 25){
    allItems.removeEventListener('click', handleClick);
    displayVotes()

}

};

new MallItems('Bag', 'images/bag.jpeg');
new MallItems('Banana', 'images/banana.jpeg');
new MallItems('Bathroom', 'images/bathroom.jpeg');
new MallItems('Boots', 'images/boots.jpeg');
new MallItems('Breakfast', 'images/breakfast.jpeg');
new MallItems('Bubblegum', 'images/bubblegum.jpeg');
new MallItems('Chair', 'images/chair.jpeg');
new MallItems('Cthulhu', 'images/cthulhu.jpeg');
new MallItems('Dog Duck', 'images/dog-duck.jpeg');
new MallItems('Dragon', 'images/dragon.jpeg');
new MallItems('Pen', 'images/pen.jpeg');
new MallItems('Pet Sweep', 'images/pet-sweep.jpeg');
new MallItems('Scissors', 'images/scissors.jpeg');
new MallItems('Shark', 'images/shark.jpeg');
new MallItems('Sweep', 'images/sweep.png');
new MallItems('Tauntaun', 'images/tauntaun.jpeg');
new MallItems('Unicorn', 'images/unicorn.jpeg');
new MallItems('Water Can', 'images/water-can.jpeg');
new MallItems('Wine Glass', 'images/wine-glass.jpeg');

allItems.addEventListener('click', handleClick);

itemSelector();
console.log('left item', leftItem)

renderItems();
