const allStudent = (req, res) => {
  res.send("All Student");
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  if (parseInt(id) === 10) res.send("This is resevered.So,it can't me deleted");
  else res.send(`Deleted Student ID : ${req.params.id}`);
};

export { allStudent, deleteStudent };
