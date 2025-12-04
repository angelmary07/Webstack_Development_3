<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$test = $_GET['test'] ?? 'success';
switch($test) {
case 'success':
http_response_code(200);
echo json_encode(['status'=>'success','message'=>'Complaint submitted','id'=>123]);
break;
case '400':
http_response_code(400);
echo json_encode(['error'=>'Bad Request','details'=>'Invalid data provided']);
break;
case '401':
http_response_code(401);
echo json_encode(['error'=>'Unauthorized','details'=>'Please login first']);
break;
case '404':
http_response_code(404);
echo json_encode(['error'=>'Not Found','details'=>'Service not available']);
break;
case '500':
http_response_code(500);
echo json_encode(['error'=>'Server Error','details'=>'Database connection failed']);
break;
default:
http_response_code(200);
echo json_encode(['status'=>'success']);
}
?>
