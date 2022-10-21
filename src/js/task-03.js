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


const listGalleryElement = document.querySelector('.gallery')
console.log(listGalleryElement)

const creatingAnImageGallery = images
  .map((element) => 
    `<li class ='list__item'><img src = '${element.url}' alt = '${element.alt}' width = '200' height = '150'/></li>`
).join('\n')
console.log(creatingAnImageGallery)

listGalleryElement.insertAdjacentHTML('afterend', creatingAnImageGallery)
