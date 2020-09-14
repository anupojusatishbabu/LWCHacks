import { LightningElement, track, wire } from 'lwc';

import getContactsList from '@salesforce/apex/ContactsController.getContactsList';

export default class HelloWorld extends LightningElement {
 
    @track greeting = 'World';
    @wire(getContactsList)contactsList;
    
   
   
    // contactsList = [
    //     {
    //         Id : '1',
    //         Name : 'Satish',
    //         Title : 'Software Engineer'
    //     },
    //     {
    //         Id : '2',
    //         Name : 'Somesh',
    //         Title : 'Lawyer'
    //     },
    // ];
    changeHandler(event) {
        this.greeting = event.target.value;
  }
}