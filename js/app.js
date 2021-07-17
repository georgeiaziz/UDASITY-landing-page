/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// a variable matrex I will sort all the necesary data from the Sections with the same order
let geoMainVariable = [] ;

// this variable will used to detect how the page scroll to avoide dublicating the prosess
let geoMenuScroll = false;

// this variable will store the last section called the function by ecrooling
// so it will not be able to call again untill the section change
let theCalledSection = 0


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// this function will detect which section in view
function detectSectionInView(myScrool){
    //if the scrooling comming from the menue this function will not work 
    if (geoMenuScroll === myScrool){
        for (let i = 0 ; i < geoMainVariable.length; i++){
            let myPlace = geoMainVariable[i][1].getBoundingClientRect();
            // this if will check the section top and the bottom and will affect if the section fill 75% of the page
            // or it will get the focus to the next section
                    
            if(myPlace.top >= 0 || myPlace.bottom >= (self.innerHeight * 0.75)){
                if(geoMainVariable[i][0] === theCalledSection){break;}
                getChangeilClass(geoMainVariable[i][0], false, geoMainVariable[i][0]);
                break;
            }

        }
    }
}


// By this function I read the text of the section header
// i send an element as a function parameter, this element always have only one h2
// so I don't need any loops
function getMyh2Text(myP) {
    let mySectionText = myP.querySelector('h2').innerHTML ;
    return mySectionText;
};


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//this is my main function
// by this function I will do every thing, respond to the menu click and the page scroll
//I will change the classes for the menu and the section if thay active or not

function getChangeilClass(myMenuIndex, theSource, theLastSection) {
    // by useing the variable theCalledSection I detect if the function will run for a new section 
    // then I will not repeate the function for somthing alredy don
    if(theLastSection !== theCalledSection){
        
    // this will check the source caller, is it the mnue or scrool
    // if it is the mneu I will remive the event from scrolling document
        if (theSource === true){
            geoMenuScroll=true;
            document.removeEventListener("scroll", function(){detectSectionInView(false)});
        }
        // here I will loop throw my main variable and check which variable need to scrolled and be spesial
        for (let i = 0; i < geoMainVariable.length; i++){

            if (geoMainVariable[i][0] == myMenuIndex){
                geoMainVariable[i][3].className = "navbar__menu menu__link";
                geoMainVariable[i][1].className = "your-active-class";
                geoMainVariable[i][2] = true;
                theCalledSection = geoMainVariable[i][0];
                // itis will scroll only if the menue clicked
                if(theSource === true){
                    geoMainVariable[i][1].scrollIntoView();
                }
     
            } else {
                geoMainVariable[i][3].className = "navbar__menu";
                if(geoMainVariable[i][1].className==="your-active-class"){
                    geoMainVariable[i][1].classList.remove("your-active-class");
                }
                geoMainVariable[i][2] = false;
            }
        } 
        // if I removed the event document scroll I will put it acck
        if (theSource === true){
            geoMenuScroll=false;
            document.addEventListener("scroll", function(){detectSectionInView(false)});
        }
    }
}; 


// frist I will add 2 sections to the landing page
let myOldSection = document.getElementById('section3');
const oldSectionouterText =  myOldSection.outerHTML;

// select the sections parant
const mySectionParent = document.querySelector('main');
// I will add 2 mor new sections 4 & 5
for (i = 4; i < 6; i++){
    // Change the necesary text to the new section
    let newSectionouterText = oldSectionouterText.replace("section3", "section"+i);
    newSectionouterText = newSectionouterText.replaceAll("Section 3", "Section "+i); 
    // creating and appending the new section
    let myNewSection = document.createElement('section');
    mySectionParent.appendChild(myNewSection);
    myNewSection.outerHTML = newSectionouterText;
}
//Fill My Main Variable as an array
// the array have 3 partes(the index, the element, a boolean I use to know which section vave the view now)
const mySectionElem = document.querySelectorAll('section');
// check if the section is active then put the boolean to true
for (let i = 0; i < mySectionElem.length ; i++) {
    if(mySectionElem[i].className==='your-active-class'){
        geoMainVariable[i] = [i, mySectionElem[i], true];
    } else{
        geoMainVariable[i] = [i, mySectionElem[i], false];
    }
  }



// here I'm generating the HTML which will gives me the navigation menu
  const ulList = document.querySelector('ul');
  let liNew = '';
  for (let i = 0; i < geoMainVariable.length; i++){
      if (geoMainVariable[i][2] === true){
            liNew = liNew + '<li Id="menu'+geoMainVariable[i][0] +'" class="navbar__menu menu__link">'+getMyh2Text(geoMainVariable[i][1] )+'</li>';
        }     else {
            liNew = liNew + '<li Id="menu'+geoMainVariable[i][0] +'" class="navbar__menu">'+getMyh2Text(geoMainVariable[i][1] )+'</li>';
        }
  }
  ulList.innerHTML=liNew;


// add the navigation menu to may main variable, so I can do every thing from one place
let myQuer = ""
for (let i = 0; i < mySectionElem.length ; i++) {
    myQuer = '#menu'+i;
    geoMainVariable[i].push(document.querySelector(myQuer));
//    geoMainVariable[i][3].addEventListener("click", getChangeilClass(geoMainVariable[i][3],geoMainVariable[i][1],geoMainVariable[i][2]), true);
    
    let myParm = geoMainVariable[i][3].id.slice(-1);
    geoMainVariable[i][3].addEventListener("click", function(){getChangeilClass(myParm, true, geoMainVariable[i][0])});
  }


 // add the scroll event
  document.addEventListener("scroll", function(){detectSectionInView(false)});
/*Document.querySelectorAll();

 Document.getElementById();

 forEach();

 Document.createDocumentFragment();

 Document.createElement();

 Document.createTextNode();

 appendChild();

 getAttribute();

 scrollIntoView({'behavior':'smooth'});*/

/*let btn = document.querySelector('.btn');
let el = document.querySelector('.special');

btn.addEventListener('click', function () {
    el.scrollIntoView(true);
});*/






// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
