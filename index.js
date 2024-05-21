//console.log(document);

// const heading = document.querySelector("h1");
// console.log(heading);

//const toShow = document.querySelector(".stat>div");

//const toShow = document.querySelector(".hello");

// const toShow = document.querySelectorAll("button");
// console.log(toShow);

// Get a list of all `<h3>` elements
//const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
// for (let element of heading3List.values()) {
//   console.log(element);
// }

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
//   }

// const toShow = document.querySelectorAll("div.rating-display");
// for (let element of toShow){console.log(element);}


console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");


//editing inner text
const descriptions = document.querySelectorAll(".description-display");
console.log("keys", descriptions.keys());
console.log(descriptions.values());
console.log(descriptions.length);
for (let desc of descriptions.values()){
    let content = desc.innerText;
    if ((content.length)>250){
        content=content.slice(0,250)+'<a href="#">...</a>';
    }
    //console.log(content);
desc.innerHTML=content;    
}

// // bold ratings over 4.7
// const ratings = document.querySelectorAll(".rating-display.stat .value");
// for (let rate of ratings){
//     let val = rate.innerText;
//     //console.log("got a rating",val);
//     if(val>4.7){
//         //rate.style.fontWeight="bold";
//         rate.classList.add("high-rating");
//         rate.classList.remove("value");
//     }
// }

const parks=document.querySelectorAll(".park-display");
let numberOfParks=parks.length;
let newElement=document.createElement("div");
newElement.innerText=`${numberOfParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

//removing an elemnt
let main=document.querySelector("main"); //this is where all the parks are
let firstPark=document.querySelector(".park-display");
main.removeChild(firstPark);

//Event listeners lesson
//Event listener: A mechanism that detects an event and contains an event name and an event handler
const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
    //console.log("You clicked the button", event);
  });
  // the event here is:
  //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

  firstBtn.addEventListener("click", (event) => {
    //console.log(event.target);
  });
  //target is:
  //<button class="rate-button" title="Add to Favourites">☆</button>

  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    //console.log(event.target.parentNode);
    //console.log(event.target);

    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});


// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault(); //stop the page from refreshing after the click
    console.log("You clicked the name sorter");

    // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
const parksArray = Array.from(parksList);


// function parkComparerByName(parkA, parkB) {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }

//   parksArray.sort(parkComparerByName());

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
  });


//sort by rating

  // Select the `nameSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");
  
  // Add an event listener
  ratingSorter.addEventListener("click", (event) => {
      event.preventDefault(); //stop the page from refreshing after the click
  
  // Function for sorting by name
const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value")?.innerText;
    const parkBRating = parkB.querySelector(".rating-display .value")?.innerText;
    // console.log("A is ",parkARating,parkA);
    // console.log("B is ",parkBRating,parkB);
    return (parkARating-parkBRating); 
  };
  
  // Function for handling the `ratingSorter` click
//   const ratingSorterClickHandler = (event) => {
//     event.preventDefault();
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByRating);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  })
