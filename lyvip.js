var xkabctt = $response.body;
var obj = JSON.parse(xkabctt);
var vipInfo = {vip_end_time: 4090438518000, is_vip: 1, permanent_vip: 1, volume_total: 99999900};
for (let key in obj.result) {
  if (vipInfo.hasOwnProperty(key)) {
    obj.result[key] = vipInfo[key];
  }
}
xkabctt = JSON.stringify(obj);
$done(xkabctt);