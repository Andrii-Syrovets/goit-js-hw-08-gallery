const pictures = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const modal = document.querySelector(".lightbox");
const originalImg = document.querySelector(".lightbox__image");
const pictiresList = document.querySelector('.js-gallery');
const createsPictures = createPicturesCards(pictures);

pictiresList.insertAdjacentHTML('beforeend', createsPictures);

pictiresList.addEventListener('click', onPicturesClick);

console.log(createPicturesCards(pictures))

function createPicturesCards(pictures) {
  return pictures.map(({preview, original, description}) => {
    return  `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${description}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>
  `    
  })
    .join('')
}

function onPicturesClick(evt) {

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  console.log(evt.target);
  
  evt.preventDefault();
  // const swachEl = evt.target;
  // const parrentPictureItem = swachEl('.js-lightbox');
  // parrentPictureItem.classList.add("is-open")

  modal.classList.add("is-open");
  originalImg.src = evt.target.src;
  originalImg.alt = evt.target.alt;
}

window.addEventListener("click", onClose);
function onClose(evt) {
  console.log(evt.target.classList);
  if (
    evt.target.nodeName === "BUTTON" ||
    evt.target.classList.contains("lightbox__overlay")
  ) {
    originalImg.src = "";
    modal.classList.remove("is-open");
  }
  return;
}