let globeLink = document.getElementById('globeLink');
let globeBlock = document.getElementById('globeBlock');

globeLink.addEventListener('click', e => {
  console.log(e.target);
  globeBlock.style.display = 'block';
  globeBlock.classList.add('open');
});

document.addEventListener('click', e => {
  if (
    e.target.matches('.globeBlock span i') ||
    !e.target.closest('.globeBlock')
  ) {
    globeBlock.style.display = 'none';
  }
});
