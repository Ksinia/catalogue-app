# Catalogue app

This is the catalogue frontend for the products and reviews visualisation.

# Start

With default values in docker-compose.yml, products API URL is http://localhost:3001", and reviews API is http://localhost:3002.

To start the application under Mac and Windows:

```
docker-compose up
```

Linux:

```
docker-compose up cors-anywhere
npm ci
PORT=3003 npm start
```

After that, it will be available at http://localhost:3003.

## Configuration

You can adjust API URLs using docker-compose.yml environment variables:

- _REACT_PRODUCT_API_: default http://cors-anywhere:3004/http://host.docker.internal:3001
- _REACT_REVIEWS_API_: default http://cors-anywhere:3004/http://host.docker.internal:3002

[cors-anywhere](https://hub.docker.com/r/redocly/cors-anywhere) service is needed for case API doesn't set [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) rendering its direct usage in the frontend impossible.

host.docker.internal is a way of accessing `localhost` ports from within the container, but it works only under Mac and Windows.
