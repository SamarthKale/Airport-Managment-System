const pool = require('../config/db');

exports.getAllPassengers = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Passengers');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};

exports.addPassenger = async (req, res) => {
  const { full_name, email, contact, balance } = req.body;
  try {
    await pool.query('INSERT INTO Passengers (full_name, email, contact, balance) VALUES (?, ?, ?, ?)',
      [full_name, email, contact, balance || 0]);
    res.json({ message: 'Passenger added' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.updatePassenger = async (req, res) => {
  const { id } = req.params;
  const { full_name, email, contact } = req.body;
  try {
    await pool.query('UPDATE Passengers SET full_name=?, email=?, contact=? WHERE Passenger_ID=?',
      [full_name, email, contact, id]);
    res.json({ message: 'Passenger updated' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.addMoney = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  try {
    await pool.query('UPDATE Passengers SET balance = balance + ? WHERE Passenger_ID=?', [amount, id]);
    res.json({ message: 'Balance updated' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.deletePassenger = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Passengers WHERE Passenger_ID=?', [id]);
    res.json({ message: 'Passenger deleted' });
  } catch (err) { res.status(500).send(err.message); }
};
