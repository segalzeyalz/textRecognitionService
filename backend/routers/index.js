module.exports = express => {
  const router = express.Router();
  router.get("/api", (req, res) => {
    res.send("api");
  });
  return router;
};
