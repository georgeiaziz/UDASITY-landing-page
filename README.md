# Landing Page Project


## Table of Contents
* [About](#About)
* [Instructions](#instructions)
* [What_I_Did](#What_I_Did)
** [The_idea](#The_Idea)
** [Main_Variables](#Main_Variables)
** [functions](#functions)
** [Workflow](#Workflow)


## About 
This is my first UDACITY project, it is the landing page project.
George Ibrahim Aziz
george.i.aziz@gmail.com

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## what_I_did

### The_idea
My idea was to sort everything I need in one variable.
 I declared a matrix , stored the sections and the menu elements there as an objects, also I store the index which is the same for both, and a boolean shows me which opjects are in focus now.

 ### Main_Variables
 I have 3 main variables

#### geoMainVariable:
this is the matrix where I store every thing
geoMainVariable[i][0] is the index
geoMainVariable[i][1] is the section element
geoMainVariable[i][2] is the boolean (will be true if this [i] element is in vew
geoMainVariable[i][2] is the li element

#### geoMenuScroll:
I use this variable to detect if scrolling the document coming from the menu or from a user scroll

#### theCalledSection:
theCalledSection
I use this variable to know which section or menu going to the function, if it is the same as previous one, I abort the function.
this is very useful when scrolling the document, because the event will triger the function hundreds time.
this variable will abort the function untill a new section apeare in the view

### functions
I have 3 functions, one main function and two helper functions

#### getMyh2Text
this is a helper function, I use it to get the sections h2 text, it goes thru the sections to make the menus with the same name as sections

#### detectSectionInView
this is a helper function, scrolling the document target this function.
I use it to detect which section is in view
first it detect if scrolling coming from pressing the menu, in this case it abort the function.
if it finde that it is a user scrolling, it detect which section in view, the section top should be more than 0 or the bottom more than 75% of the view height
scrolling cause a lot of function trgering, so the function detect if the section in view is the same as befor or new one, if it is the same it break, if it is a new section in the view it call the main function.

#### getChangeilClass
This is my main function, it is trgerd from both menu and scrolling, it detect who is trgerd it, and it works as it should.
the function have 3 variable: myMenuIndex, theSource and theLastSection
myMenuIndex have the index of my matrix telles which elemnts will be in the view and which menu will be special
theSource tells is it clicking or scrolling.
theLastSection it tells which section is calling, and it is the first check, if it is the same as the befor call it will abort the function.
the second check is it a click or scroll, if it is a click i remove the event listener for the scroll, and at the end of the function I add it again. after these two checks, the loop start to check my matrix(geoMainVariable), if the index of the matrix equal to the index of the function then I add the necesanecessary classes to the menu and section, also let the global variable theCalledSection equal to the current section
finaly if the action coming from click I will scroll iInto view the section, thats will not hapend if the function called from a user scrolling.
finally if the index of the matrix not equal to the index of the function then I remove the necessary classes from the menus and sections.
I did not use smooth with scrollIntoView because I add it to CSS file (html {scroll-behavior: smooth;}).

### Workflow
1- I add two new Sections (Section 4 and Section 5) by createElement and appendChild after changing the necessary texts.
2- I start to fill my matrix with data, [0] index, [1] section element, [2] boolean will be true if the section in view
3- I created the menus (li elements) in the (ui element) and I used (push) to add the li elements to my matrix [i][3]
4- finaly I add addEventListener click for li and scroll for document
