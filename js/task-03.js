const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const fotosList = document.querySelector('.gallery')

const galeryMarkup = images.map(item => `<li class = "js-item"><img class="js-img" src=${item.url} width='700' height='400' alt='${item.alt}'></li>`).join('');

fotosList.insertAdjacentHTML("afterbegin", galeryMarkup);


const li = document.querySelectorAll('.js-item');

fotosList.style.listStyle = 'none';
fotosList.style.display = 'flex';
fotosList.style.flexWrap = 'wrap';
fotosList.style.background = 'black';
fotosList.style.justifyContent = 'center';


