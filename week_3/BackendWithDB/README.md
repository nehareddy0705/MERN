1. generate package.json

2. create express server

3. install Mongoose and connect to MongoDB server
    rest api - MongoDB native driver --> db server
    rest api - Mongoose odm tool --> db server

4. build user rest api
    - create user
    - read all users by id
    - update a user by id
    - delete a user by id

5. create schema and model of the resource(user)

6. create user api define routes



-> handling unavailable resources
-> validators during update
-> hashing password(becrypt.js)
-> unique fields
-> refined version of error handling middleware


status code
    200 - success
    201 - created
    400 - bad request
    401 - unauthorised
    404 - not found
    500 - server error


Routes
    - public routes - anyone can use it 
    - protected routes - only authenticated users can use it


user authentication(login)
    - submit credentials and get tokens
    req --> public routes(by anyone)
    req --- middleware --- protected routes(by authentication user only)



---> When you want to excute middleware only for one specific route, pass that middleware as  second argument

--> to access the cookie property we need cookie parser middleware.otherwise req.cookie is undefined.

XSF
CSRF


same origin vs cross orign

--> cookies will send along with request automatically in same origin req. but in cross orign req, the token should be exlictly send along with req


