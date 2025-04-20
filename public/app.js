import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
