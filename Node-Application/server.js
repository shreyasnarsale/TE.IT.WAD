// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Initialize Express application
const app = express();

// Define port number - can be changed via environment variable
const PORT = process.env.PORT || 3000;

// Path to store form submissions (JSON file-based database)
const dataFilePath = path.join(__dirname, 'data', 'submissions.json');

// ============================================
// MIDDLEWARE SETUP
// ============================================

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(bodyParser.json());

// Middleware to serve static files from 'public' folder
// This serves HTML, CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// ============================================
// HELPER FUNCTION: Load submissions from JSON file
// ============================================
function loadSubmissions() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading submissions file:', error);
  }
  return [];
}

// ============================================
// HELPER FUNCTION: Save submissions to JSON file
// ============================================
function saveSubmissions(submissions) {
  try {
    // Ensure the data directory exists
    if (!fs.existsSync(path.join(__dirname, 'data'))) {
      fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
    }
    // Write submissions to JSON file with pretty formatting
    fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2), 'utf8');
    console.log('Submission saved successfully');
  } catch (error) {
    console.error('Error saving submissions:', error);
  }
}

// ============================================
// ROUTE: GET / (Serve home page)
// ============================================
app.get('/', (req, res) => {
  // Send the index.html file as the home page
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================
// ROUTE: POST /submit (Handle form submission)
// ============================================
app.post('/submit', (req, res) => {
  // Extract form data from request body
  const { name, email, message } = req.body;

  // Validate form data (basic validation)
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate email format (simple validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address'
    });
  }

  // Create a new submission object with timestamp
  const newSubmission = {
    id: Date.now(), // Simple unique ID using timestamp
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    submittedAt: new Date().toISOString()
  };

  // Load existing submissions from file
  let submissions = loadSubmissions();

  // Add the new submission to the array
  submissions.push(newSubmission);

  // Save updated submissions back to file
  saveSubmissions(submissions);

  // Send success response
  res.json({
    success: true,
    message: 'Thank you for your submission! We will get back to you soon.',
    data: newSubmission
  });
});

// ============================================
// ROUTE: GET /admin/submissions (View all submissions)
// ============================================
app.get('/admin/submissions', (req, res) => {
  // Load and return all submissions
  const submissions = loadSubmissions();
  res.json({
    total: submissions.length,
    submissions: submissions
  });
});

// ============================================
// ERROR HANDLING: 404 Not Found
// ============================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found'
  });
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
  console.log('='.repeat(50));
});
