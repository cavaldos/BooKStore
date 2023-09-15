const userController = {
  getall: async (req, res) => {
    try {
      res.json({ message: "getall" });
    } catch (error) {
      console.log(error);
    }
  },
  find: async (req, res) => {
    try {
      res.json({ message: "find" });
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      res.json({ message: "create" });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      res.json({ message: "delete" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      res.json({ message: "update" });
    } catch (error) {
      console.log(error);
    }
  },
};
export default userController;
