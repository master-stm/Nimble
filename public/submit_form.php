<?php
header("Access-Control-Allow-Origin: hhttps://getnimbleapp.com"); // Allow requests from your React app
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow specific HTTP methods

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); // Respond OK to preflight
    exit();
}

// Database connection details
$servername = "localhost";
$username = "gorzzmmy_Omole"; // Replace with your DB username
$password = "Vq8anbYhj)0B"; // Replace with your DB password
$database = "gorzzmmy_wait_list"; // Replace with your database name

// Establish database connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Automatically create the table if it doesn't exist
$tableCreationQuery = "
CREATE TABLE IF NOT EXISTS waitlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($tableCreationQuery) === FALSE) {
    die("Error creating table: " . $conn->error);
}

// Get form data
$name = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : '';
$email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';

// Validate input
if (empty($name) || empty($email)) {
    http_response_code(400); // Bad Request
    die("Invalid input: Both name and email are required.");
}
$emailCheckQuery = "SELECT * FROM waitlist WHERE email = '$email'";
$result = $conn->query($emailCheckQuery);

if ($result->num_rows > 0) {
    http_response_code(409); // Conflict
    die("This email is already on the waitlist.");
}

// Insert data into the database
$insertQuery = "INSERT INTO waitlist (name, email) VALUES ('$name', '$email')";
if ($conn->query($insertQuery) === TRUE) {
    http_response_code(200); // Success
    echo json_encode(["message" => "Data submitted successfully!"]);
} else {
    http_response_code(500); // Internal Server Error
    die("Error: " . $conn->error);
}

// Close the database connection
$conn->close();
?>

