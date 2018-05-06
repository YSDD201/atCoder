// inputに入力データ全体が入る
function Main(input) {
	var args = input.split(" ");
	var N = parseInt(args[0],10);
	var min = parseInt(args[1],10);
	var max = parseInt(args[2],10);
	var array = [];
	var sum = 0;
	var answer = 0;

	for(var i = 0;i <= N;i++){
		sum = 0;
		var num_string = i + "";
		var num_array = num_string.split("");
		for(var j in num_array){
		sum += parseInt(num_array[j],10);
		}
		if(sum >= min && sum<= max) array.push(i);
	}

	for(var i =0;i < array.length; i++){
		answer += array[i];
	}
	//出力
	console.log(answer);
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
