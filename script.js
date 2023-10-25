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
const topMenuEl = document.querySelector('nav')
//console.log(topMenuEl)

//Task 2.1 (Set the height topMenuEl element to be 100%.)
topMenuEl.style.height = "100%"

//Task 2.2 (Set background color of topMenuEl to--top-menu-bg)
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//Task 2.3 (Add a class of flex-around to topMenuEl.)
topMenuEl.classList.add("flex-around")

//Task 3.1
// iterate over the menulinks array,for each link object create an <a> element
menuLinks.forEach(link => {
  const anchorEl= document.createElement('a');
// on the new element add an href attribute with prop = link object
  anchorEl.href = link.href;
  anchorEl.textContent = link.text;
// append the new element to top menu El
  topMenuEl.appendChild(anchorEl);
});

//Lab Part 2 begins here

//Task 4.0
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu")
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
const topMenuLinks = topMenuEl.querySelectorAll('a')
console.log("top menu links " + topMenuLinks)
//Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false

//Task 5.2
//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object’s preventDefault() method.
topMenuEl.addEventListener("click", function(e) {
    e.preventDefault();
    //check to see if the clicked element is an <a> element
    if (e.target.tagName !== "A") {
        console.log(e.target.innerText, e.target.tagName)
        return
    }
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
        showingSubMenu = false
        subMenuEl.style.top = "0"
        console.log("click a valid menu item")
        return
        }
});

//Task 5.3  See code in above /\
/* In the event listener, if the clicked <a> link has a class of active:
    1. Remove the active class from the clicked <a> element.
    2. Set the showingSubMenu to false.
    3. Set the CSS top property of subMenuEl to 0.
    4. Return; from the event listener function.
*/