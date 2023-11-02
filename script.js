console.log("JS Loaded")
//Task 3.0 && 5.0
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Task 1.0 (cache the main element into variable mainEl)
const mainEl = document.querySelector('main')
//console.log(mainEl)

//Task 1.1 (set the main background color to main-bg custom css prop)
mainEl.style.backgroundColor = "var(--main-bg)"

//Task 1.2 (set main content to have an H1)
mainEl.innerHTML =  "<h1>SEI Rocks!</h1>"

//Task 1.3 (add class of flex-ctr to main (mainEl))
mainEl.classList.add("flex-ctr")

//Task 2.0 (select and cache <nav id="top-menu"> in variable topMenuEl
//const topMenuEl = document.querySelector('nav')
topMenuEl = document.getElementById('top-menu')
console.log(topMenuEl)

//Task 2.1 (Set the height topMenuEl element to be 100%.)
topMenuEl.style.height = "100%"

//Task 2.2 (Set background color of topMenuEl to--top-menu-bg)
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//Task 2.3 (Add a class of flex-around to topMenuEl.)
topMenuEl.classList.add("flex-around")

//Task 3.1
// iterate over the menulinks array,for each link object create an <a> element
menuLinks.forEach(function(link) {
  const anchorEl= document.createElement('a')
// on the new element add an href attribute with prop = link object
//  anchorEl.href = link.href;
  anchorEl.setAttribute('href', link.href)
  anchorEl.textContent = link.text
// append the new element to top menu El
  topMenuEl.appendChild(anchorEl);
});

//Lab Part 2 begins here

//Task 4.0
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
//const subMenuEl = document.querySelector("#sub-menu")
const subMenuEl = document.getElementById("sub-menu")
//console.log(subMenuEl)

//Task 4.1
//Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%"

//Task 4.2
//Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

//Task 4.3
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around")

//Task 4.4
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute"

//Task 4.5
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0"
//console.log(subMenuEl)

// Task 5.1
//Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//const topMenuLinks = topMenuEl.querySelectorAll('a')
const topMenuLinks = topMenuEl.querySelectorAll('#top-menu a')
console.log("top menu links " + topMenuLinks)
//Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false

//Task 5.2
//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object’s preventDefault() method.
topMenuEl.addEventListener("click", function(e) {
    e.preventDefault();
    const link = e.target 
    //check to see if the clicked element is an <a> element
    console.log(link)
    if (link.tagName !== "A") return
    // if (e.target.tagName !== "A") {
    //     console.log(e.target.innerText, e.target.tagName)
    //     return
    // }
    if (link.classList.contains("active")) {
        link.classList.remove("active")
    //if (e.target.classList.contains('active')) {
        // e.target.classList.remove('active')
        showingSubMenu = false
        subMenuEl.style.top = "0"
        console.log("clicked a valid menu item")
        return
        }
    //5.4 iterate (forEach) over each <a> element in topMenuLinks and removes the class name of active
    topMenuLinks.forEach(function(link) {
        link.classList.remove("active")
    })
    // 5.5 add a class name of active to the <a> element that was clicked.
    link.classList.add("active")

    //5.6

    //*********************** STUCK HARD HERE ***************************
    const linkData = menuLinks.find(function(linkObj) {
        //return true if the text property of linkObj matches the link text content
        return linkObj.text === link.textContent;
      });
      // showingSubMenu will be true if clicked
      showingSubMenu = 'subLinks' in linkData;
      //console.log("Showing sub menu value = " + showingSubMenu)

      if (showingSubMenu) {
//      If showingSubMenu 'true': Call a buildSubMenu function, passing to it the subLinks array for the clicked <a> element.
//      and set the CSS top property of subMenuEl to 100%.
        buildSubMenu(linkData.subLinks);
        subMenuEl.style.top = '100%';
      } else {
//          Set the CSS top property of subMenuEl to 0.
//          Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
            subMenuEl.style.top = '0';
            mainEl.innerHTML = '<h1>about</h1>';
      }
    
});
// Task 5.8
function buildSubMenu(subLinks) {
    //Clear the contents of subMenuEl by using setting innerHTML to ''
    subMenuEl.innerHTML = '';
    //Then iterate over the subLinks array (passed as an argument) and for each “link” object: Create an <a> element (**see 3.1)
    subLinks.forEach(function(link) {
      const linkEl = document.createElement('a');
      //
      linkEl.setAttribute('href', link.href);
      //Set the new element’s content (.textContent) to the value of the text property of the “link” object.
      linkEl.textContent = link.text;
      //Append the new element to the subMenuEl element.
      subMenuEl.appendChild(linkEl);
    });
  }

//Task 5.3  See code in above /\
/* In the event listener, if the clicked <a> link has a class of active:
    1. Remove the active class from the clicked <a> element.
    2. Set the showingSubMenu to false.
    3. Set the CSS top property of subMenuEl to 0.
    4. Return; from the event listener function.
*/
//Task 5.4
//Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and 
//removes the class name of active, regardless of whether the <a> element has a class of active or not.

//Task 5.5
//The event listener should add a class name of active to the <a> element that was clicked.

//Task 5.6
//add code in the event listener that sets showingSubMenu to true if the clicked <a> element’s “link” object 
// within menuLinks has a subLinks property (all do, except for the “link” object for ABOUT), otherwise, set it to false.

//Task 5.7
/* in the event listener…

If showingSubMenu is true:

Call a buildSubMenu function, passing to it the subLinks array for the clicked <a> element.
Set the CSS top property of subMenuEl to 100%.
Otherwise (showingSubMenu is false):

Set the CSS top property of subMenuEl to 0.
Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
*/

//Task 5.8
/*Code the buildSubMenu function so that it:

Clears the contents of subMenuEl.
Iterates over the subLinks array passed as an argument; and for each “link” object: Create an <a> element.
On the new element, add an href attribute with its value set to the href property of the “link” object.
Set the new element’s content to the value of the text property of the “link” object.
Append the new element to the subMenuEl element.
*/
