const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Security Headers (Helmet)
app.use(helmet());

// 2. Request Logging (Morgan)
app.use(morgan('dev'));

// 3. CORS Configuration (Restricted to Frontend Origin)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

// 4. Rate Limiting (Practice what you preach)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { error: 'Too many transmissions from this endpoint. Please wait 15 minutes.' },
  headers: true,
});

app.use(bodyParser.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'active', message: 'Neural Breach SOC API is live.' });
});

// POST Contact with Validation
app.post('/api/contact', 
  contactLimiter,
  [
    body('name').trim().notEmpty().escape(),
    body('email').isEmail().normalizeEmail(),
    body('subject').isIn(['INTERNSHIP', 'COLLABORATION', 'JUST_HI']),
    body('message').trim().isLength({ min: 10 }).escape()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;
    
    // Log to console with tactical metadata
    const timestamp = new Date().toISOString();
    console.log(`\n[UPLINK_RECEIVED] ${timestamp}`);
    console.log(`[OPERATOR] ${name} <${email}>`);
    console.log(`[PROTOCOL] ${subject}`);
    console.log(`[PAYLOAD] ${message}\n`);

    // success state
    res.status(200).json({ 
       success: true, 
       message: 'TRANSMISSION_RECEIVED. Accessing local storage for persistence.' 
    });
});

process.on('exit', (code) => {
  console.log(`[PROCESS_EXIT] SOC backend process exited with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error('[UNCAUGHT_EXCEPTION] CRITICAL_SYSTEM_FAILURE:', err);
});

app.listen(PORT, () => {
  console.log(`[SERVER_START] Neural Breach SOC online at http://localhost:${PORT}`);
  // Keep alive interval to prevent exit
  setInterval(() => {}, 1000 * 60 * 60);
});
