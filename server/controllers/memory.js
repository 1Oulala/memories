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

// // gets all the memories
// exports.getAll = (req, res) => {
//   Memory.find({})
//     .then((data) => {
//       console.log(':::', data);
//       res.status(200).json(data);
//     })
//     .catch((err) => res.sendStatus(500));
// };

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

// deletes one memory using the memory id
// gets all the memories
exports.deleteByID = (req, res) => {
  console.log('params::::', req.params);
  const { id } = req.params;
  Memory.findByIdAndDelete({ _id: id }) // findByIdAndDelete
    .then((data) => {
      // console.log(':::', data);
      res.status(200).send('Memory deleted successfully');
    })
    .catch((err) => res.sendStatus(500));
};
