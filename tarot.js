var urlArray = [
  "https://dreamy-cranachan-dd9809.netlify.app/judgment.html",
  "https://dreamy-cranachan-dd9809.netlify.app/tenof.html",
  "https://dreamy-cranachan-dd9809.netlify.app/hermit.html",
  "https://dreamy-cranachan-dd9809.netlify.app/thechariot.html",
  "https://dreamy-cranachan-dd9809.netlify.app/queenof.html",
  "https://dreamy-cranachan-dd9809.netlify.app/thelovers.html",
  "https://dreamy-cranachan-dd9809.netlify.app/sevenpentacles.html",
  "https://dreamy-cranachan-dd9809.netlify.app/aceofwands.html",
  "https://dreamy-cranachan-dd9809.netlify.app/aceofcups.html",
  "https://dreamy-cranachan-dd9809.netlify.app/thefool.html",
  "https://dreamy-cranachan-dd9809.netlify.app/theeofcops.html",
  "https://dreamy-cranachan-dd9809.netlify.app/theworld.html",
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
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".shit", { opacity: 0 }, { opacity: 1.5, duration: 1 });
