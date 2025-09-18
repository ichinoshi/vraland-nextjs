<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Validate required fields
    if (!isset($data['email'])) {
        echo json_encode(['success' => false, 'message' => 'Email is required.']);
        exit;
    }
    
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit;
    }
    
    $to = "info@vraland.com.ph";
    $subject = "VRA Land Newsletter Subscription";
    
    $message = "New newsletter subscription:\n\n";
    $message .= "Email: $email\n";
    $message .= "Subscribed on: " . date('Y-m-d H:i:s') . "\n";
    $message .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $message .= "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "\n";
    
    $headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you for subscribing to our newsletter!'
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to subscribe. Please try again later.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
