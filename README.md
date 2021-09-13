# WHOIS Lookup Server
## Introduction
This Node.js application interfaces with the [WHOIS XML API](https://main.whoisxmlapi.com/) service by sanitizing an input URL or IP address and returning the resultant WHOIS information.

## How to Build
### Prerequesites
* Node.JS v. 14 or higher  
OR
* Docker
* Docker Compose
  
You must also create a .env file in the root of this project with your API Key.
See `example.env`.
### Docker
If you have Docker installed simply run `docker-compose up -d --build`.  
You can then access the API on `localhost:3030`.
### Node
If you don't have Docker or would prefer to run the server directly, run `npm install` followed by `npm start`.  
You can then access the API on `localhost:3030`.