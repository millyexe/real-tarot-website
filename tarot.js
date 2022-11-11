var urlArray = [
  "http://www.google.com",
  "http://www.yahoo.com",
  "http://www.stackoverflow.com",
];

function randomUrl() {
  var randomNumber = Math.floor(Math.random() * urlArray.length);
  var newUrl = urlArray[randomNumber];
  window.location.href = newUrl;
}

const tl = gsap.timeline({ defaults: { ease: "power1,out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".shit", { opacity: 0 }, { opacity: 1.5, duration: 1 });
