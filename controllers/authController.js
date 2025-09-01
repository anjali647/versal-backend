const jwt = require("jsonwebtoken");
const User = require("../models/User");

const genToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });
    const user = await User.create({ name, email, password, role });
    res.status(201).json({
      _id: user._id, name: user.name, email: user.email, role: user.role,
      token: genToken(user._id),
    });
  } catch (e) { res.status(500).json({ message: e.message }); }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });
    res.json({ _id: user._id, name: user.name, email: user.email, role: user.role, token: genToken(user._id) });
  } catch (e) { res.status(500).json({ message: e.message }); }
};

exports.me = async (req, res) => {
  res.json(req.user);
};
