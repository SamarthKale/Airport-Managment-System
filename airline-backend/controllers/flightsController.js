const pool = require('../config/db');

exports.getAllFlights = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Flight');
    res.json(rows);
  } catch (err) { res.status(500).send(err.message); }
};

exports.addFlight = async (req, res) => {
  const { flight_no, Aircraft_ID, origin_airport_id, destination_airport_id, departure, arrival, ticket_price, seats_total } = req.body;
  try {
    await pool.query(`INSERT INTO Flight (flight_no, Aircraft_ID, origin_airport_id, destination_airport_id, departure, arrival, ticket_price, seats_total, seats_available)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [flight_no, Aircraft_ID, origin_airport_id, destination_airport_id, departure, arrival, ticket_price, seats_total, seats_total]);
    res.json({ message: 'Flight added' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.updateFlight = async (req, res) => {
  const { id } = req.params;
  const { flight_no, status, ticket_price } = req.body;
  try {
    await pool.query('UPDATE Flight SET flight_no=?, status=?, ticket_price=? WHERE Flight_ID=?',
      [flight_no, status, ticket_price, id]);
    res.json({ message: 'Flight updated' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.deleteFlight = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Flight WHERE Flight_ID=?', [id]);
    res.json({ message: 'Flight deleted' });
  } catch (err) { res.status(500).send(err.message); }
};
