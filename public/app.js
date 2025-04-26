import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshi', age: 40 });
console.log(docOne);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["SHOPPING"] = 5] = "SHOPPING";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceName: 'person',
    resourceType: ResourceType.PERSON,
    data: { name: 'Shaun' }
};
const docThree = {
    uid: 2,
    resourceName: 'shopping list',
    resourceType: ResourceType.SHOPPING,
    data: ['bread', 'butter']
};
const docFour = {
    uid: 3,
    resourceName: 'Name of the wind by Patrick Rothfuss',
    resourceType: ResourceType.BOOK,
    data: { name: 'Name of the wind', author: 'Patrick Rothfuss' }
};
console.log(docTwo, docThree, docFour);
