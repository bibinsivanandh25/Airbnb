let dropLink = document.querySelector('#dropLink');
let dropDownMenu = document.querySelector('.dropDownMenu');
dropLink.addEventListener('click', e => {
  console.log(e.target);
  let active = dropDownMenu.classList.toggle('active');
  if (active === true) {
    dropDownMenu.style.display = 'block';
  } else {
    dropDownMenu.style.display = 'none';
  }
});

document.addEventListener(
  'click',
  e => {
    console.log(e.target.closest);
    if (
      e.target.matches('.dropDownMenu') ||
      !e.target.closest('.dropDownMenu')
    ) {
      dropDownMenu.style.display = 'none';
    }
  },
  true
);

let block = document.querySelector('.block');
let locationBlock = document.querySelector('.locationBlock');
block.addEventListener('click', e => {
  console.log(e.target);
  let active = locationBlock.classList.toggle('active');
  if (active === true) {
    locationBlock.style.display = 'block';
  } else {
    locationBlock.style.display = 'none';
  }
});

document.addEventListener(
  'click',
  e => {
    console.log(e.target.closest);
    if (
      e.target.matches('.locationBlock') ||
      !e.target.closest('.locationBlock')
    ) {
      locationBlock.style.display = 'none';
    }
  },
  true
);

let targetElement = document.getElementById('_HeaderSection');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    targetElement.classList.add('scrolled');
    document.querySelector('.logoBlock a svg').style.fill = 'red';
    document.querySelector('.authBlock ul li a').style.color = '#111';
    document.querySelector('.authBlock ul li span i').style.color = '#111';
    document.querySelector('.hiddenBlock').style.display = 'flex';
    document.querySelector('nav').style.display = 'none';
  } else {
    targetElement.classList.remove('scrolled');
    document.querySelector('.logoBlock a svg').style.fill = '#fff';
    document.querySelector('.authBlock ul li a').style.color = '#fff';
    document.querySelector('.authBlock ul li span i').style.color = '#fff';
    document.querySelector('.hiddenBlock').style.display = 'none';
    document.querySelector('nav').style.display = 'flex';
  }
});
