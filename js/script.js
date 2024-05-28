
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

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i = 0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j= 0; j< totalNavList ; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
           this.classList.add("active")
           showSection(this);
        })


      }
      function showSection(element)
      {
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
        
      }

document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.aside .nav-toggler');
    const aside = document.querySelector('.aside');
    const mainContent = document.querySelector('.main-content');

    toggler.addEventListener('click', function() {
        aside.classList.toggle('open');
        mainContent.classList.toggle('active'); // Adjust the whole page or just the content area
    });
});

