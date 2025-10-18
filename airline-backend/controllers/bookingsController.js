const pool = require('../config/db');

exports.bookFlight = async (req, res) => {
  const { passenger_id, flight_id, cabin_class, seat_no } = req.body;
  try {
    await pool.query('CALL BookFlight(?, ?, ?, ?, @msg)', [passenger_id, flight_id, cabin_class, seat_no]);
    const [result] = await pool.query('SELECT @msg AS message');
    res.json(result[0]);
  } catch (err) { res.status(500).send(err.message); }
};

exports.getBookings = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM BookingSummaryView');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};
