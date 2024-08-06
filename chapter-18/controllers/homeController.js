const homeController = (req, res) => {
  // res.send("home");
  res.sendFile('D:\\Developer\\BackEnd\\Youtube\\chapter-18\\views\\home.html')
};

export { homeController };
