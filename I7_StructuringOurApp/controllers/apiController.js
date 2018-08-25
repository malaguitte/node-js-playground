module.exports = function(app) {
  app.get('/api/person/:id', function(request, response) {
    // get that data from database
    response.json({ firstname: 'John', lastname: 'Doe' });
  });
  
  app.post('/api/person', function(request, response) {
    // save to the database
  });
  
  app.delete('/api/person/:id', function(request, response) {
    // delete from the database
  });  
}