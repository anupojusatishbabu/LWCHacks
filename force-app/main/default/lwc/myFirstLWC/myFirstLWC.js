import { LightningElement,api,track} from 'lwc';

export default class MyFirstLWC extends LightningElement {

    @api name = 'Veera Venka Satyanarayana';
    @track title = 'Software Engineer';
    email = 'anupojusatishbabu@gmail.com';
    phone = '469-686-0192';

    handleRequest(){
        this.name = 'Satishbabu Anupoju';
        this.title = 'Salesforce Lightning Developer';
        this.email = 'satish.liferay@gmail.com';
        this.phone = '+91 9963817481';
    }

}