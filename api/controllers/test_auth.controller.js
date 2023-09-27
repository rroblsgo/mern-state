export const signup = (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  res
    .status(200)
    .json({
      message: 'success',
      data: req.body,
      params: req.params,
      query: req.query,
    });
};
