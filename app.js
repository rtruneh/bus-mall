"use strict"


let allItems = [];

//keep track of total clicks
let totalClicks= 0;
let voteRounds= 25;

//constructor function
function MallItems(item, imagePath){
    this.item = item;
    this.source = imagePath;
    this.clicks = 0;
    this.timesShown = 0;
    //push variables into array
    allItems.push(this)
};

let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");



//randomly select picture
function itemSelector(){
    let leftIndex = Math.floor(Math.random() * allItems.length)
    let middleIndex = Math.floor(Math.random() * allItems.length)
    let rightIndex = Math.floor(Math.random() * allItems.length)

while (rightIndex === leftIndex || rightIndex === middleIndex) {
    rightIndex = Math.floor(Math.random() * MallItems.allItems.length)
}

leftItem = allItems[leftIndex];
middleItem = allItems[middleIndex];
rightItem = allItems[rightIndex];
};

function renderItems(){
    //use right/left global variables for the img and the p to stick the images on the page.
leftItemImg.src = leftItem.imagePath;
middleItemImg.src = middleItem.imagePath;
rightItemImg.src = rightItem.imagePath;
leftItemP.textContent = leftItem.item;
middleItemP.textContent = middleItem.item;
rightItemP.textContent = rightItem.item;
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

const productRank = {
  viewResults: document.getElementById('viewResults'),
  resultsButton: document.getElementById('showResults'),
  resetButton: document.getElementById('reset'),

  getRandom: function(){
      return Math.floor(Math.random() * allItems.length)
  },


}

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

