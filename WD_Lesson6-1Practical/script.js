/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [15.99, 12.99, 18.99, 22.99];
let meat_titles = ["Beef Tips", "Brisket", "Ribeye", "Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = [8.99, 14.99, 24.99, 12.99, 16.99, 10.99];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [6.99, 7.99, 5.99];
let dessert_titles = ["Flan", "Passion Berry Tart", "Oreo Cup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = "";

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container.
  for(let i = 0; i < meat_images.length; i++){
    build += `
      <div class="card">
        <img src="images/${meat_images[i]}" alt="${meat_titles[i]}">
        <h3>${meat_titles[i]}</h3>
        <p>$${meat_prices[i].toFixed(2)}</p>
      </div>
    `;
  }
  m.innerHTML = build;


  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  build = "";
  for(let i = 0; i < seafood_images.length; i++){
    build += `
      <div class="card">
        <img src="images/${seafood_images[i]}">
        <h3>${seafood_titles[i]}</h3>
        <p>$${seafood_prices[i].toFixed(2)}</p>
      </div>
    `;
  }
  s.innerHTML = build;

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  build = "";
  for(let i = 0; i < dessert_images.length; i++){
    build += `
      <div class="card">
        <img src="images/${dessert_images[i]}" alt="${dessert_titles[i]}">
        <h3>${dessert_titles[i]}</h3>
        <p>$${dessert_prices[i].toFixed(2)}</p>
      </div>
    `;
  }
  d.innerHTML = build;

}
