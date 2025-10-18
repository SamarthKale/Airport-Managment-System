const pool = require('../config/db');

exports.getAllRoles = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Role');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};

exports.addRole = async (req, res) => {
  const { Role_Name } = req.body;
  try {
    await pool.query('INSERT INTO Role (Role_Name) VALUES (?)', [Role_Name]);
    res.json({ message: 'Role added' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Role WHERE Role_ID=?', [id]);
    res.json({ message: 'Role deleted' });
  } catch (err) { res.status(500).send(err.message); }
};
