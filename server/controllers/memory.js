const Memory = require('../../db/models/Memory');

// adds a memory
exports.add = (req, res) => {
  console.log(':::', req.body);
  Memory.create(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => res.sendStatus(500));
};

// gets all the memories
exports.getAll = (req, res) => {
  Memory.find({})
    .then((data) => {
      console.log(':::', data);
      res.status(200).json(data);
    })
    .catch((err) => res.sendStatus(500));
};

// gets one memory based on the chosen filed from all available memories
exports.getByTerms = (req, res) => {
  const prop = req.query;
  const keys = Object.keys(prop);
  console.log('keys::', keys);
  console.log('prop::', prop);
  Memory.find(prop)
    .then((data) => {
      console.log(':::', data);
      res.status(200).json(data);
    })
    .catch((err) => res.sendStatus(500));
};
