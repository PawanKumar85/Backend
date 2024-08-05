import express from "express";
const app = express();
const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('All Teachers');
  })
  .post('/', (req, res) => {
    res.send('Add New Teacher');
  })
  .put('/', (req, res) => {
    res.send('Update Teacher');
  })
  .delete('/', (req, res) => {
    res.send('Delete Teacher');
  });

export default router;
