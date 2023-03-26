const express = require("express");
const body_parser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");
const {
    ApolloServerPluginLandingPageProductionDefault,
} = require("apollo-server-core");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const cors = require("cors");
const path = require("path");
const static_path = path.join(__dirname, "./public");
const port = process.env.PORT || 4000;
const app = express();
require("dotenv").config();

app.use(cors());
app.use(body_parser.json());
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.render("index.html");
});

const graphql_server = async () => {
    const apollo = new ApolloServer({
        typeDefs,
        resolvers,
        // plugins: [
        //     ApolloServerPluginLandingPageProductionDefault({
        //         footer: false,
        //     }),
        // ],
    });
    await apollo.start();
    apollo.applyMiddleware({ app: app });
};

graphql_server();
app.listen(port, () => {
    console.log(`Listning on port ${port}`);
});
