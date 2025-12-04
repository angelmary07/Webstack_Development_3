<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fee Management | Elite Resident Portal</title>
  <link rel="stylesheet" href="style.css">
  <style>
    body {
      background: url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover;
      color: #fff;
      min-height: 100vh;
    }
    header {
      background: rgba(21,30,65,0.98);
      color: #ffe066;
      padding: 20px 0 10px 0;
      border-radius: 0 0 20px 20px;
      box-shadow: 0 3px 32px #23294633;
      text-align: center;
    }
    header h1 { font-family: 'Georgia', serif; font-size: 2.3em; letter-spacing: 2px; }
    nav ul { list-style: none; padding: 0; margin: 13px 0 0 0;}
    nav ul li { display: inline-block; margin: 0 9px;}
    nav ul li a { color: #ffe066; text-decoration: none; font-weight: 600; padding: 7px 16px; border-radius: 12px; transition: background .21s, color .21s;}
    nav ul li a.active, nav ul li a:hover { background: #ffe066; color: #232946 !important;}
    .fees-box {
      background: rgba(0,0,0,0.68);
      padding: 33px 25px 18px 25px;
      border-radius: 15px;
      max-width: 700px;
      margin: 40px auto 24px auto;
      box-shadow: 0 10px 40px #23294666, 0 2px 14px #ffe06627;
    }
    .gold-box {
      background: linear-gradient(120deg, #ffe066 80%, #232946 120%);
      color: #232946;
      border-radius: 13px;
      box-shadow: 0 2px 16px #151d2e44, 0 1px 7px #ffe06638;
      padding: 17px 20px 13px 20px;
      font-family: 'Georgia';
      font-size: 1.13em;
      text-align: left;
      font-weight: 650;
      letter-spacing: .03em;
      margin-bottom: 15px;
      border-left: 7px solid #fbe96a;
      line-height:1.58em;
    }
    label { color: #ffe066; font-weight: 500; margin-top: 9px; margin-bottom: 2px; display: block;}
    input[type="number"], select {
      padding: 10px; width: 100%; border-radius: 5px; border: none; margin-bottom: 10px;
      background: #faf3ca; color: #232946; font-size:1.05em;
    }
    button {
      background: linear-gradient(90deg,#fff7e1 0%,#ffe066 100%);
      color: #232946; border: none; border-radius: 7px; cursor: pointer; font-weight:600; font-size:1.09em;
      box-shadow: 0 2px 8px #ffe06666; padding: 11px 24px; transition: box-shadow .2s, background .18s;
      margin-top: 13px;
    }
    button:hover { background: #ffe066; color: #181e41; box-shadow: 0 6px 20px #ffe06699;}
    .success-msg {
      background: #f3ffe0;
      color: #226718;
      font-weight: 600;
      border-radius: 8px;
      border-left: 6px solid #48d13d;
      box-shadow: 0 2px 22px #48d13d40;
      padding: 13px 13px 12px 15px;
      margin: 19px 0 7px 0;
      text-align: center;
      font-size: 1.1em;
    }
    .fee-table {
      width: 100%;
      color:#232946;
      font-size:1.03em;
      background: #fffbea;
      border-radius:7px;
      margin-top:14px;
      margin-bottom:10px;
      box-shadow: 0 2px 12px #ffe06622;
    }
    .fee-table th, .fee-table td { padding: 8px 10px;}
    .fee-table th { background: #ffe066; color: #232946;}
    .fee-table td { border-bottom: 1px solid #efe6c2;}
    .fee-table tr:last-child td { border-bottom: none;}
    footer { margin-top:55px;text-align:center;color:#ffe066be;background:rgba(21,30,65,.91);font-size:1.09rem;padding: 18px 0 10px 0;border-radius: 18px 18px 0 0;box-shadow:0 -2px 17px #23294644 inset;}
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
      <li><a href="community_fees.php" class="active">Fee Management</a></li>
      <li><a href="search.html">Search</a></li>
    </ul>
  </nav>
</header>
<div class="fees-box">
  <h2 style="color:#ffe066;font-family:'Georgia';margin-bottom:19px;">Community Fee Summary</h2>
  <!-- Example: dynamic PHP output -->
  <?php
  // Ideally this should fetch from backend DB
  $feePerResident = 1500; // Example
  $totalResidents = 412; // Example
  $totalCollection = $feePerResident * $totalResidents;
  $pendingResidents = 16;
  $status = $totalCollection > 50000 ? "Active" : "Inactive";
  $pendingAmount = $feePerResident * $pendingResidents;
  ?>
  <div class="gold-box">
    <b>Fee Per Resident:</b> ₹<?php echo number_format($feePerResident); ?><br>
    <b>Total Residents:</b> <?php echo $totalResidents; ?>
  </div>
  <div class="gold-box">
    <b>Total Collection:</b> ₹<?php echo number_format($totalCollection); ?><br>
    <b>Status:</b> <?php echo $status; ?>
  </div>
  <div class="gold-box">
    <b>Pending Residents:</b> <?php echo $pendingResidents; ?><br>
    <b>Total Pending Amount:</b> ₹<?php echo number_format($pendingAmount); ?>
  </div>
  <div>
    <table class="fee-table">
      <tr>
        <th>Resident #</th>
        <th>Fee Paid</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>101</td><td>₹1500</td><td>✔ Paid</td>
      </tr>
      <tr>
        <td>102</td><td>₹0</td><td ❌ style="color:#c11;">Pending</td>
      </tr>
      <!-- Repeat dynamically for all residents in real backend -->
    </table>
  </div>
</div>
<footer>
  <p>&copy; 2025 Community Management System</p>
</footer>
</body>
</html>
