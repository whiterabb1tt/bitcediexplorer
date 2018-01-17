var api = 'http://45.32.232.11:32348';
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'bxc';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "bxc": [
		["bxc.mypool.name", "http://bxc.mypool.name:32351"],
		["democats.org/pool/?name=bitcedi", "http://pool2.democats.org:7673"],
		["pool.bitcedi.com", "http://pool.bitcedi.com:8117"],
		["pool2.bitcedi.com", "http://pool2.bitcedi.com:8117"],
		["bxc.cryptonotepool.com", "http://5.189.135.137:8618"],
		["bxc.tfoto.com.ua", "http://178.150.34.202:8117"],
		["bxc.crypto-coins.club", "http://bxc.crypto-coins.club:8118"],
		["bxc.sberex.com", "http://bxc.sberex.com:7006"],
		["amazon.sberex.com", "http://amazon.sberex.com:7006"],
		["xcrypto.org", "http://xcrypto.org:8117"],
		["bxc.cryptomine.pro", "http://bxc.cryptomine.pro:8117"],
		["bityce.ddns.net", "http://bityce.ddns.net:9884"],
		["pool.bitcedi.com.ua", "http://zacent.com.ua:8117"],
		["bxc-pool.pp.ua", "http://bxc-pool.pp.ua:25417"],
	//	["54.223.133.248", "http://54.223.133.248:8117"],
		["bitcache.cc", "http://bitcache.cc:8117"],
		["bxc.sick.al", "http://bxc.s1ck.ws:99"],
		["bxc.btcgo.org", "http://btcgo.org:8117"],
		["mine4all.pp.ua", "http://mine4all.pp.ua:8877"],
		["magicpool.tk", "http://magicpool.tk:8117"],
		["bxc.eslime.net", "http://bxc.eslime.net:8117"],
		["bxc.igloopool.org", "http://bxc.igloopool.org:8117"],
		["karbopool.club", "http://51.15.45.142:8117"],
		["bxc.mininghub.eu", "http://bxc.mininghub.eu:8117"],
		["easyhash.io/pools/bxc", "https://api-bxc.easyhash.io"],
		["bxcpool.ml", "http://bxcpool.ml:8117"],
		["bxc.kopanka.com", "http://kopanka.com:8117"],
		["usa.bxc.kopanka.com", "http://usa.bxc.kopanka.com:8117"],
		["bitcedi.zpool.fun", "http://bitcedi.zpool.fun:8117"],
		["bitcedi.hashparty.io", "http://bitcedi.hashparty.io:8117"],
		["bxc.coinminer.space", "http://bxc.coinminer.space:8101"],
		["bxc.miningpool.org.ua", "http://165.227.163.153:7118"],
		["bitcedi.cryptopool.in", "http://bitcedi.cryptopool.in:8117"],
		["bxcpool.com", "http://pool.bxcpool.com:8117"],
		["karbo.top", "http://karbo.top:8117"],
		["pool.poolbt.com", "http://bxc.poolbt.com:8117"],
		["bxc.multipool.online", "http://bxc.multipool.online:8117"],
		["bxc.mininggood.com", "http://us2.mininggood.com:8137"],
		["bxc.miner.rocks", "https://bxc.miner.rocks/api"],
		["pool.karbo.co.in", "http://pool.karbo.co.in:8117"],
		["bxc.dreampool.info", "https://bxc.dreampool.info/api"]
		
    ]
};

var networkStat2 = {
    "bxc": [
		["bitcedi.hashvault.pro", "https://bitcedi.hashvault.pro/api"]
		]
};