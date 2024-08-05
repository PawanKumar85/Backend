import express from "express";
const app = express();
const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('All Student');
  })
  .post('/', (req, res) => {
    res.send('Add New Student');
  })
  .put('/', (req, res) => {
    res.send('Update Student');
  })
  .delete('/', (req, res) => {
    res.send('Delete Student');
  });

export default router;
