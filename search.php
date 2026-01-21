<?php
http_response_code(500);
exit;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cms_db";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$search_term = "";
if (isset($_GET['query'])) {
$search_term = trim($_GET['query']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Community System - Search Results</title>
<link rel="stylesheet" href="style.css">
<style>
body { 
background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') 
no-repeat center center/cover; 
color: #fff; 
}
.page-box { background: rgba(0,0,0,0.7); padding: 30px; margin: 50px auto; max-width: 900px; border-radius:12px; }
.page-box h2 { margin-bottom: 15px; }
.page-box h3 { margin-top: 20px; color: #1abc9c; }
.page-box p { font-size: 1.1em; }
mark { background: #1abc9c; color: #000; }
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
<li><a href="complaints.html">Complaints</a></li>
<li><a href="contact.html">Contact</a></li>
<li><a href="stats.html">Stats</a></li>
<li><a href="community_fees.php">Fee Management</a></li>
<li><a href="search.html">Search</a></li>
</ul>
</nav>
</header>
<section class="page-box">
<h2>Search Results for "<?php echo htmlspecialchars($search_term); ?>"</h2>
<?php
if ($search_term != "") {
$highlight = "<mark>$search_term</mark>";
$found = false;
$like = "%" . $search_term . "%";
$stmt1 = $conn->prepare("SELECT page_name, content FROM site_content WHERE content LIKE ?");
$stmt1->bind_param("s", $like);
$stmt1->execute();
$res1 = $stmt1->get_result();
while ($row = $res1->fetch_assoc()) {
$content = preg_replace("/($search_term)/i", $highlight, htmlspecialchars($row['content']));
echo "<h3>Page: " . htmlspecialchars($row['page_name']) . "</h3>";
echo "<p>$content</p>";
$found = true;
}
$stmt1->close();
$stmt2 = $conn->prepare("SELECT name, apartment_no, email, contact_no, facilities 
FROM residents 
WHERE name LIKE ? OR apartment_no LIKE ? OR facilities LIKE ?");
$stmt2->bind_param("sss", $like, $like, $like);
$stmt2->execute();
$res2 = $stmt2->get_result();
while ($row = $res2->fetch_assoc()) {
$name = preg_replace("/($search_term)/i", $highlight, htmlspecialchars($row['name']));
$apartment = preg_replace("/($search_term)/i", $highlight, htmlspecialchars($row['apartment_no']));
$contact = htmlspecialchars($row['contact_no']);
$email = htmlspecialchars($row['email']);
$facilities = preg_replace("/($search_term)/i", $highlight, htmlspecialchars($row['facilities']));
echo "<h3>Resident: $name (Apartment: $apartment)</h3>";
echo "<p>Email: $email<br>Phone: $contact<br>Facilities: $facilities</p>";
$found = true;
}
$stmt2->close();
$stmt3 = $conn->prepare("SELECT resident_name, complaint, date_submitted 
FROM complaints 
WHERE resident_name LIKE ? OR complaint LIKE ?");
$stmt3->bind_param("ss", $like, $like);
$stmt3->execute();
$res3 = $stmt3->get_result();
while ($row = $res3->fetch_assoc()) {
$resident = preg_replace("/($search_term)/i", $highlight, htmlspecialchars($row['resident_name']));
$complaint = preg_replace("/($search_term)/i", $highlight, htmlspecialchars($row['complaint']));
$date = htmlspecialchars($row['date_submitted']);
echo "<h3>Complaint by $resident</h3>";
echo "<p>$complaint<br><small>Submitted: $date</small></p>";
$found = true;
}
$stmt3->close();
if (!$found) {
echo "<p>No results found for '<strong>" . htmlspecialchars($search_term) . "</strong>'.</p>";
}
} else {
echo "<p>Please enter a search term.</p>";
}
?>
</section>
<section class="page-box">
<h2>Search Again</h2>
<form action="search.php" method="get">
<input type="text" name="query" placeholder="Enter keyword (facility, resident, complaint...)" 
value="<?php echo htmlspecialchars($search_term); ?>" required>
<button type="submit">Search</button>
</form>
</section>
<footer>
<p>&copy; 2025 Community Management System</p>
</footer>
</body>
</html>
