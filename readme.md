# GraphQL API for United States Founding Fathers

<hr>

# Notes and Documentation

## Technologies Used

GraphQL: An API standard for declarative data fetching

Apollo Server 2.18: Fully-featured GraphQL Server with focus on easy setup, performance and great developer experience, graphql-js and more.

Prisma: Replaces traditional ORMs. Use Prisma Client to access your database inside of GraphQL resolvers.

GraphQL Playground: A “GraphQL IDE” that allows you to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to Postman which offers comparable functionality for REST APIs. Among other things, GraphQL Playground:

- Auto-generates comprehensive documentation for all available API operations.
- Provides an editor where you can write queries, mutations & subscriptions, with auto-completion(!) and syntax highlighting.
- Lets you easily share your API operations.

## Terminal Commands

### Initial Setup
mkdir mynewproject
cd mynewproject
npm init -y
mkdir src
touch src/index.js

### Apollo Setup
npm install apollo-server

### Prisma and SQLite Setup
npm install @prisma/cli --save-dev
npx prisma init
npx prisma migrate dev *
npx prisma generate *

*Run every time you make changes to the prisma.schema file

### Run the API
node src/index.js - run the server
npx prisma studio - run the Prisma Studio Database GUI
