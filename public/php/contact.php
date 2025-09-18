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
    if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
        exit;
    }
    
    $name = htmlspecialchars($data['name']);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : '';
    $subject = isset($data['subject']) ? htmlspecialchars($data['subject']) : 'Contact Form Inquiry';
    $message = htmlspecialchars($data['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit;
    }
    
    $to = "info@vraland.com.ph";
    $email_subject = "VRA Land Contact Form: " . $subject;
    
    $email_body = "New contact form submission from VRA Land website:\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message\n\n";
    $email_body .= "---\n";
    $email_body .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
    $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $email_body .= "Date: " . date('Y-m-d H:i:s') . "\n";
    
    $headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you for your message! We\'ll get back to you soon.',
            'contact' => [
                'name' => $name,
                'email' => $email,
                'subject' => $subject
            ],
            'confirmation' => [
                'title' => 'Message Sent Successfully!',
                'description' => 'Your inquiry has been received and we will respond within 24 hours.',
                'estimatedResponse' => '24 hours',
                'referenceId' => 'VRA-' . date('Ymd') . '-' . substr(md5($email . time()), 0, 6),
                'nextSteps' => [
                    'We will review your inquiry',
                    'A team member will contact you within 24 hours',
                    'Check your email for our response'
                ]
            ]
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
