var body = $response.body.replace(/vipDays":\d/g,'vipDays":1')
.replace(/nickname":".*?"/g,'nickname":"Jenny"')
.replace(/inviteCode":".*?"/g,'inviteCode":"xkabctt"')
.replace(/expireDays":\w+/g,'expireDays":9999')
$done({ body });