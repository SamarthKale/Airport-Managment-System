const pool = require('../config/db');

exports.getAllEmployees = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Employees');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};

exports.addEmployee = async (req, res) => {
  const { Department_ID, Role_ID, full_name, email, salary, contact } = req.body;
  try {
    await pool.query('INSERT INTO Employees (Department_ID, Role_ID, full_name, email, salary, contact) VALUES (?, ?, ?, ?, ?, ?)',
      [Department_ID, Role_ID, full_name, email, salary, contact]);
    res.json({ message: 'Employee added' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { salary, Role_ID } = req.body;
  try {
    await pool.query('UPDATE Employees SET salary=?, Role_ID=? WHERE Employee_ID=?',
      [salary, Role_ID, id]);
    res.json({ message: 'Employee updated' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Employees WHERE Employee_ID=?', [id]);
    res.json({ message: 'Employee deleted' });
  } catch (err) { res.status(500).send(err.message); }
};
