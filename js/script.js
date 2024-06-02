
var typed = new Typed (".typing",{
  strings:["Student", "Anime Lover", "Cat Owner"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop:true
})


var typed = new Typed (".writing",{
  strings:["Welcome to My Website!"],
  typeSpeed: 100,
  BackSpeed: 60

})
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

document.querySelector('.scroll-down').addEventListener('click', function() {
  // Get the .home section element
  const homeSection = document.querySelector('.home');

  // Calculate the position to scroll to
  // This is the top of the home section plus its height, minus the viewport height
  const scrollToPosition = homeSection.offsetTop + homeSection.offsetHeight - window.innerHeight;

  // Check if calculated position is beyond the document's height and adjust
  const maxScrollTop = document.body.scrollHeight - window.innerHeight;
  const finalScrollPosition = scrollToPosition > maxScrollTop ? maxScrollTop : scrollToPosition;

  // Scroll to the calculated position
  window.scrollTo({
      top: finalScrollPosition,
      behavior: 'smooth'
  });
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";

  // Check if the user is in the home section
  const aboutSection = document.getElementById("about");
  const rect = aboutSection.getBoundingClientRect();
  const isInaboutSection = y >= rect.top && y <= rect.bottom;

  cursor.style.display = isInaboutSection ? "block" : "none";
});

