const express = require("express");
const app = express();

app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// Fetch data from the user
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }

  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// send data to the server(request done by the user)
app.post("/", function (req, res) {
  // console.log(req.body);
  // Query Parameter
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done !!",
  });
});

// Update
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

function isThereAtLeastOneUnhealthyKidney() {
  let atleastoneunhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastoneunhealthyKidney = true;
    }
  }
  return atleastoneunhealthyKidney;
}

// Delete
app.delete("/", function (req, res) {
  if (isThereAtLeastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done !" });
  } else {
    res.status(411).json({
      msg: "You have no Unhealthy kidneys",
    });
  }
});

app.listen(3000);
