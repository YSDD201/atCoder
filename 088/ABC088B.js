// inputに入力データ全体が入る
function Main(input) {
	var args = input.split("\n");
	var num = parseInt(args[0],10);
	var num = parseInt(args[0],10);
	var sum_alice = 0;
	var sum_bob = 0;

	var array = args[1].split(" ").map(function(element,index,array){return parseInt(element,10)});
	array.sort(function(a,b){
		if(a>b) return -1;//not swap
		if(a<b) return 1;//swap
		return 0;
	});

	for(var i in array){
		if(i % 2 ==0){//alice
			sum_alice += array[i];
		}else{//bob
			sum_bob += array[i];
		}
	}
	//出力
	console.log(sum_alice - sum_bob);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
//Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//windows動作確認用
//type testcase.txt | ~~~.js

process.stdin.resume();
process.stdin.setEncoding('utf8');

var g_input = '';
process.stdin.on('data', function(chunk) {
    g_input += chunk;

});
process.stdin.on('end', function() {
    Main(g_input);
});
