const parallax = (e) => {
  document.querySelectorAll(".backWave").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    layer.style.transitionDuration = "1s";
  });
};

module.exports = parallax;
