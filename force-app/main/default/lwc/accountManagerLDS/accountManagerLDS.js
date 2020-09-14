import { LightningElement, track } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
export default class AccountManagerLDS extends LightningElement {

    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    accountNameChangeHandler(event){
        this.accountName = event.traget.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.traget.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.traget.value;
    }

    createAccount(){
        const fields = {
            'Name' : this.accountName,
            'Phone' : this.accountPhone,
            'Website' : this.accountWebsite
        }

        const recordInput = {apiName : 'Account', fields};
        createRecord(recordInput).then(response =>{
            console.log('Account has been create successfully :',response.id);
        }).catch(error =>{
            console.error('Soemthing went wrong with Account creation');
        });
    }


}