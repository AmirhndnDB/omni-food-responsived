console.log("Hello world!")

const myName = 'amir hd';
const h1 =document.querySelector('.heading-primery');
console.log(myName);
console.log(h1);



// h1.addEventListener('click', function() {
// h1.textContent =myName
// h1.style.backgroundColor = 'red';
// h1.style.padding = "5rem";  
// });


// set corent year 
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////////
// Make mobile navigatin work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener('click',function () {
    headerEl.classList.toggle('nav-open');
});

// //////////////////////////////////////////////////////////
// smoth scroling animation
const allLinks = document.querySelectorAll("a:link");


allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');

    // scrool back to the top
    if(href === "#" ) window.scrollTo({
        top:0,
        behavior:"smooth",
    });
    // scroll to other links
    if(href !== "#" && href.startsWith('#'))
    {
     const sectionEl = document.querySelector(href) ;
     sectionEl.scrollIntoView({behavior:"smooth"});
    }

    // close mobile nav
    if(link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});


/////////////////////////////////////////////////////////////
//  STICKIY NAVIGATION //

const sectionHiroEl = document.querySelector(".section-hiro");

const obs = new IntersectionObserver (
 function (entries) {
  const ent = entries [0] ;
  console.log(ent);


 if(!ent.isIntersecting === false) {
   document.body.classList.add("sticky") ;
 }

 if(ent.isIntersecting === true ) {

  document.body.classList.remove("sticky") ;
}

},
  {
  // insid the viewport
 root :  null,
 threshold: 0,
 rootMargin: '-80px',
  }
);
obs.observe(sectionHiroEl);



/////////////////////////////////////////////////////////////
//////////////////////////////////////
function checkFlexGap() {
var flex =document.createElement("div");
flex.style.display ="flex";
flex.style.flexDirection ="flex";
flex.style.rowGap ="flex";

flex.appendChild(document.createElement("div"));
flex.appendChild(document.createElement("div"));

document.body.appendChild(flex)
var isSupported = flex.scrollHeight === 1;
flex.parentNode.removeChild(flex);
console.log(isSupported);

if (!isSupported) document.body.classList.add("no-flexbox-gap");

}
checkFlexGap();



//https://unpkg.com/smothscroll-polyfill@0.4.4/dist/smoothscroll.min.js 