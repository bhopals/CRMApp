import { addNewContact, deleteContact, getContacts, getcontactWithID, updateContact } from './../controllers/crmController'
const routes = (app) => {

    app.route('/contacts')
       .get((req, res, next) => {
         //middleware 
         next()
       }, getContacts)
       .post(addNewContact);
    
    app.route('/contacts/:id')
       .get(getcontactWithID)
       .put(updateContact)
       .delete(deleteContact);

}

export default routes;