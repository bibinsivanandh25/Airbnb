let loginLink = document.querySelector('#login');
let modalBlock = document.querySelector('.modalBlock');
//? dom events
loginLink.addEventListener(
  'click',
  e => {
    console.log(e.target);
    e.preventDefault();
    modalBlock.style.display = 'block';
    modalBlock.classList.add('open');
    document.querySelector('.dropDownMenu').style.display = 'none';
  },
  true
);

document.addEventListener(
  'click',
  e => {
    console.log(e.target.closest);
    if (
      e.target.matches('.modalBlock span i') ||
      !e.target.closest('.modalBlock')
    ) {
      modalBlock.style.display = 'none';
    }
  },
  true
);
