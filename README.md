# Express-mongo-connect

This is Database connectivity basic :-

1. create index.js in the main then create folder router for routing operation within
   it then we can create mutiple files for endpoint operation,

2. Packages required are npm i express,mongodb for backend operation and nodemon for 
   connectivity in result within local,

3. Then we have to include config folder within it config.js file set dbname and and 
   include mongodbURL (for this we have to create account in mongodbatlas webversion
   deploy Database to know more quick start in mongodb connect via compass gives cluster
   Databaselink),

3. Here we have created CRUD operation that stores the data we have inserted and can be 
   accessed whenever we start the server,

   *For localhost in postman - 
   *GET all user we have added - http://localhost:8000/users - Viewing all data we entered,
   *POST add new user          - http://localhost:8000/users - JSON data is added - in postman -body-raw-JSON,
   *(while we are addind via postman through mongodb it will create own id for each data),
   *GET user by id             - http://localhost:8000/users/:id - shows specific user (egid:-64b592c7a4e8cbb202432abe) id                                   should be entered in params value colomn,
   *PUT edit user by id        - http://localhost:8000/users/:id - with specific id we can edit data -body-raw-JSON,
   *Delete user by id          - http://localhost:8000/users/:id - deletes specific data,

   *Then we can see connected Database via mongocompass with our set dbname and datas within it,
