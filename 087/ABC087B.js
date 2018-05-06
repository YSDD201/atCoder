// inputに入力データ全体が入る
function Main(input) {
	var args = input.split("\n");
	var A = parseInt(args[0],10);
	var B = parseInt(args[1],10);
	var C = parseInt(args[2],10);
	var X = parseInt(args[3],10);
	var count = 0;

	for(var i = 0 ; i <= A ; i++){//500
		for(var j = 0 ; j <= B ; j++){//100
			for(var k = 0 ; k <= C ; k++){//50
				var sum = 500 * i + 100 * j + 50 * k;
				if(sum == X) count++;
			}
		}
	}
	//出力
	console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
//Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//動作確認用
//type testcase.txt | ~~~.js
process.stdin.resume();
process.stdin.setEncoding('utf8');

var g_input = '';
process.stdin.on('data', function(chunk) {
    g_input += chunk;

});
process.stdin.on('end', function() {
	//console.log(g_input);
    //Main(g_input.split(/\r?\n/));
    Main(g_input);
});
