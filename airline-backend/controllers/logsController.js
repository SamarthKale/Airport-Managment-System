const pool = require('../config/db');

exports.getTransactionLogs = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Transaction_Log ORDER BY created_on DESC');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};

exports.getSystemLogs = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM System_Log ORDER BY created_on DESC');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};
