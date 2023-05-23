import { getResource } from "Resource_name"; //TODO

function cards() {
    class MenuCard {
        constructor(src, alt, title, description, price, course, container) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.course = course;
            this.price = this.transfer();
            this.container = document.querySelector(container);
        }

        transfer() {
            return this.price * this.course;
        }

        render() {
            let element = document.createElement('div');
            element.classList.add("menu__item");
            element.innerHTML = `
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.description}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                        </div>`;
            this.container.append(element);
        }
    }

    axios.get('URL') //TODO
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, 70, "[data-cards]").render();
            })
        });
}

export default cards;