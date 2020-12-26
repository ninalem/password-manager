import express from "express";
import { getConnection } from "./db/mongo-client";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("Hello World!"));

getConnection()
  .then(async () => {
    app.listen(port, () =>
      console.log(`passManager app listening at http://localhost:${port}`)
    );
  })
  .catch((error) => console.error(error));
