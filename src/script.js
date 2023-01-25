const firstSide = document.querySelector(".first");

const handleMove = (e) => {
  firstSide.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
};

document.onmousemove = (e) => handleMove(e);
document.ontouchmove = (e) => handleMove(e.touches[0]);
