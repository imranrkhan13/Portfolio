function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
const typed = new Typed('#element', {
    strings: ['{Web developer', '{Designer ', '{Freelancer'],
    typeSpeed: 70,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "}"
});
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
  }, { passive: false });


