// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./config/db'); // ✅ Database connection

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SHOW TABLES');
    res.json(rows);
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).send('Database connection failed');
  }
});

// ✅ Import route modules
const passengersRoute = require('./routes/passengers');
const flightsRoute = require('./routes/flights');
const bookingsRoute = require('./routes/bookings');
const employeesRoute = require('./routes/employees');
const logsRoute = require('./routes/logs');
const departmentsRoute = require('./routes/departments');
const rolesRoute = require('./routes/roles');

// ✅ Register all routes
app.use('/api/passengers', passengersRoute);
app.use('/api/flights', flightsRoute);
app.use('/api/bookings', bookingsRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/logs', logsRoute);
app.use('/api/departments', departmentsRoute);
app.use('/api/roles', rolesRoute);

// ✅ Root route (for browser check)
app.get('/', (req, res) => {
  res.send('✈️ Airline Management System Backend is running');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
