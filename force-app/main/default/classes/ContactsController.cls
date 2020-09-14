public with sharing class ContactsController {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getContactsList(){
        return [SELECT Id, Name from Account];
    }
}
