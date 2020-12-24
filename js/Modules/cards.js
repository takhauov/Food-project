import {getResource} from '../Services/services';
function cards () {
    const menu = document.querySelectorAll('.menu__item');
    class MenuItem {
        constructor (image, alt, name, describe, price, parrentSelector, ...classes) {
            this.image = image;
            this.alt = alt;
            this.name = name;
            this.describe = describe;
            this.price = price;
            this.classes = classes;
            this.parrent = document.querySelector(parrentSelector);
        }
        activate (i) {
            menu[i].querySelector('img').src = this.image;
            menu[i].querySelector('.menu__item-subtitle').innerHTML = this.name;
            menu[i].querySelector('.menu__item-descr').innerHTML = this.describe;
            menu[i].querySelector('span').innerHTML = this.price;
        }
    }
    getResource ('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}, i) => {
            new MenuItem(img, altimg, title, descr, price).activate(i);
        });
    });
    // axios.get('http://localhost:3000/menu')
    // .then(data => {
    //     data.data.forEach(({img, altimg, title, descr, price}, i) => {
    //         new MenuItem(img, altimg, title, descr, price).activate(i);
    //     });
    // });

}

export default cards;