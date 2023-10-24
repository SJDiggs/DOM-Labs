console.log("JS Loaded")
//Task 3.0
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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
console.log(topMenuEl)

//Task 2.1 (Set the height topMenuEl element to be 100%.)
topMenuEl.style.height = "100%"

//Task 2.2 (Set background color of topMenuEl to--top-menu-bg)
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//Task 2.3 (Add a class of flex-around to topMenuEl.)
topMenuEl.classList.add("flex-around")

//Task 3.1
// // iterate over the menulinks array,for each link object create an <a> element
menuLinks.forEach(link => {
  const anchorEl= document.createElement('a');
// //on the new element add an href attribute with prop = link object
  anchorEl.href = link.href;
  anchorEl.textContent = link.text;
// //append the new element to top menu El
  topMenuEl.appendChild(anchorEl);
});
