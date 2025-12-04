<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Community System - Complaint Submitted</title>
<link rel="stylesheet" href="style.css">
<style>
body { 
background: url('https://images.unsplash.com/photo-1522206024047-9c925421675b') 
no-repeat center center/cover; 
color: #fff; 
}
.page-box { background: rgba(0,0,0,0.6); color: #fff; padding: 30px; }
.page-box h2 { margin-bottom: 15px; }
.page-box p { font-size: 1.1em; }
</style>
</head>
<body>
<header>
<h1>Community System</h1>
<nav>
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="about.html">About Us</a></li>
<li><a href="services.html">Services</a></li>
<li><a href="gallery.html">Gallery</a></li>
<li><a href="complaints.html" class="active">Complaints</a></li>
<li><a href="contact.html">Contact</a></li>
<li><a href="stats.html">Stats</a></li>
<li><a href="community_fees.php">Fee Management</a></li>
</ul>
</nav>
</header>
<section class="page-box">
<h2>Complaint Submitted Successfully</h2>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$complaint = htmlspecialchars($_POST["complaint"]);
echo "<p><strong>Name:</strong> $name</p>";
echo "<p><strong>Email:</strong> $email</p>";
echo "<p><strong>Complaint:</strong> $complaint</p>";
echo "<p>Thank you for sharing your concern. Our team will review your complaint soon.</p>";
} else {
echo "<p>No complaint data received.</p>";
}
?>
</section>
<footer>
<p>&copy; 2025 Community Management System</p>
</footer>
</body>
</html>
