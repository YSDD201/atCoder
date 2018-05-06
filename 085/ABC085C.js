// inputに入力データ全体が入る
function Main(input) {
	var args = input.split(" ");
	var N = parseInt(args[0],10);
	var sum = parseInt(args[1],10);
	var output = "";

	double_loop:
	for(var x = 0;x <= N;x++){
		for(var y = 0;y<= N - x;y++){
			z = N-x-y;
			if(10000*x+5000*y+1000*z == sum){
				output = `${x} ${y} ${z}`;
				break double_loop;
			}
		}
	}
	if(!output) output = "-1 -1 -1";
	//出力
	console.log(output);
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
