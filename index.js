const jsonServer = require("json-server");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

app.use(middlewares);
app.use(router);

app.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

export default app;