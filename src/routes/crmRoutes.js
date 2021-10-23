import { addNewContact, getContacts, getcontactWithID, updateContact } from './../controllers/crmController'
const routes = (app) => {

    app.route('/contacts')
       .get((req, res, next) => {
         next()
       }, getContacts)
       .post(addNewContact);
    
    app.route('/contacts/:id')
       .get(getcontactWithID)
       .put(updateContact)
       .delete((req, res) => res.send('DELETE Request Successful'));

}

export default routes;