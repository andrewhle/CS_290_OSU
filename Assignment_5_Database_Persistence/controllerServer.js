const user = require("./userModel");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/create", (req, res) => {
  console.log(req.query);
  user
    .createUser(
      req.query.name,
      req.query.age,
      req.query.email,
      req.query.phoneNumber
    )
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      console.error(error);
      res.send({ error: "Request failed" });
    });
});

let totalCount = 0;
let zeroCount = 0;
let moreThanOneCount = 0;
function middlewareCount(req, res, next) {
  if (Object.keys(req.query).length === 0) {
    zeroCount++;
  } else {
    moreThanOneCount++;
  }
  totalCount = zeroCount + moreThanOneCount;

  if (totalCount % 10 === 0) {
    console.log(`Total retrieve requests = ${totalCount}`);
    console.log(`Retrieve requests with 0 query parameters = ${zeroCount}`);
    console.log(
      `Retrieve requests with 1 or more query parameters = ${moreThanOneCount}`
    );
  }
  next();
}

app.use(middlewareCount);

app.get("/retrieve", async (req, res) => {
  try {
    const find = await user.findUser(req.query);
    res.send(find);
  } catch (error) {
    console.error(error);
    res.send({ error: "Request failed" });
  }
});

app.get("/update", (req, res) => {
  console.log(req.query);
  user
    .updateUser(req.query)
    .then(update => {
      console.log(update);
      res.send({ updateCount: 1 });
    })
    .catch(error => {
      console.log(error);
      res.send({ error: "Not found" });
    });
});

app.get("/delete", (req, res) => {
  console.log(req.query);
  user
    .deleteUser(req.query)
    .then(deletedCount => {
      console.log(`deleteCount = ${deletedCount}`);
      res.send({ deletedCount: deletedCount });
    })
    .catch(error => {
      console.error(error);
      res.send({ error: "Request failed" });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
