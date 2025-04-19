"use strict";
// classes
class Invoice {
    // readonly client : string;
    // private details : string;
    // public amount : number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //this.client = 'Yoshi'; // Error: Cannot assign to 'client' because it is a read-only property.
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    //inv.client = 'Yoshi'; // Error: Cannot assign to 'client' because it is a read-only property.
    console.log(inv.client, inv.amount, inv.format());
});
