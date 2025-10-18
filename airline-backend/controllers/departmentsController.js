const pool = require('../config/db');

exports.getDepartments = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Department');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};

exports.addDepartment = async (req, res) => {
  const { Admin_ID, Dept_Name, description } = req.body;
  try {
    await pool.query('INSERT INTO Department (Admin_ID, Dept_Name, description) VALUES (?, ?, ?)',
      [Admin_ID, Dept_Name, description]);
    res.json({ message: 'Department added' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.deleteDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Department WHERE Department_ID=?', [id]);
    res.json({ message: 'Department deleted' });
  } catch (err) { res.status(500).send(err.message); }
};
