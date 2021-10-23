const routes = (app) => {

    app.route('/contacts')
       .get((req, res) => res.send('GET Request Successful'))
       .post((req, res) => res.send('POST Request Successful'));
    
    app.route('/contacts/:id')
       .put((req, res) => res.send('PUT Request Successful'))
       .delete((req, res) => res.send('DELETE Request Successful'));

}

export default routes;