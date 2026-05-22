# Week 2 - OOP, Copying & Backend Intro

Intermediate JavaScript and first Express server from Week 2.

## Assignments

- **library-books.js** — Book class: borrow, return, getInfo, isLongBook; manage a library collection.
- **shallow-copy.js** — Shallow copy with spread; change nested fields and compare originals.
- **deep-copy.js** — Deep copy with structuredClone; modify nested order data safely.
- **spread-array.js** — Copy a fruits array and append with spread without mutating the original.
- **spread-object.js** — Clone a user object and add a property without changing the original.
- **rest-sum.js** — Sum any number of arguments using a rest parameter.
- **otp-countdown.js** — OTP sent message with a 10-second resend countdown (setInterval).
- **exam-portal.js** — Exam submit flow with delayed status updates (setTimeout).

## backend/

Express REST API (`cd backend`, `npm install`, `node server.js`). Test with `req.http`.

- **server.js** — Main app: JSON middleware, verify middleware, mounts routers on port 3000.
- **APIs/users.js** — User router: GET/POST/PUT/DELETE on `/users`.
- **APIs/products.js** — Product router: CRUD and GET by brand on `/product`.
- **req.http** — Sample HTTP requests for testing endpoints.
- **package.json** — Express dependency and ES module setup.
- **README.md** — Quick setup steps for the backend folder.
