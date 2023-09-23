# Try api fake

A quick template for generating api fakes using json-server and faker. Useful for prototyping front-ends.

Start the API server `npm start`

- Provides an API as per config in `./json-server.json`
- API definition is defined in `./generate.js` which is watched by the API service
- Provides a static file server from `/public`

In this case we're using [@faker-js/faker](https://github.com/faker-js/faker) to generate data

For more details see the docs at https://github.com/typicode/json-server#readme
