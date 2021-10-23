import { addNewContact, getContacts, getcontactWithID } from './../controllers/crmController'
const routes = (app) => {

    app.route('/contacts')
       .get((req, res, next) => {
         console.log('REQ Method>', req.method)
         console.log('REQ Url>', req.originalUrl)
         next()
       }, getContacts)
       .post(addNewContact);
    
    app.route('/contacts/:id')
       .get(getcontactWithID)
       .put((req, res) => res.send('PUT Request Successful'))
       .delete((req, res) => res.send('DELETE Request Successful'));

}

export default routes;