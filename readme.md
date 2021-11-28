# Simple CRUD API

API is able to _create, read, update_ and _delete_ records of virtual database.
Records contain next fields: _id, name, age_ and array _hobbies_
e.g:
```
    {id: 4b62f49c-fb81-426e-aa42-49355280d11b,
    name: "Bob,
    age: 25,
    hobbies: ["fising", "women"]}
```

where _id_ is UUID of record assigned by API itself

API request contains:

`http://hostname:port/person`

or

`http://hostname:port/person/id`

where:
_port_ is stored in file .env (default PORT = 3000);
  
_hostname_ is stored in .env file (default HOST='localhost')
    
_id_ = uuid


>1. Get and show records of all persons:
   request method = **GET** path= **_http://localhost:port/person_**

>2. Get and show record of person with passed _id_:
   request method = **GET** path= **_http://localhost:port/person/id_**

>3. Create new record of person:
   request method = **POST** path= **_http://localhost:port/person_**

>4. Update record of person with passed _id_:
   request method = **PUT** path= **_http://localhost:port/person/id_**

    ***Note***: it's allowed to pass only options (fields) to be updated: e.g:
    {age: 25} or {name:"Bob", hobbies:[]}
    and it isn't not valid structure of record !!

>5. Delete record of person with passed _id_:
   request method = **DELETE** path= **_http://localhost:port/person/id_**

If not valid _path_ or _id_ passed API returns error, no action to be done in record(s)
If passed other non listed above method, server returns error.

## installation

npm install

_Start server_

npm ./src/index.js
_or_
npm start

_Start webpack in development mode_

npm run dev

_Start webpack in prodaction mode_

npm run build
