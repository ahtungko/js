var xkabctt = JSON.parse($response.body);
xkabctt = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]}
$done({body : JSON.stringify(xkabctt)});