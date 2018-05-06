// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	//input = input.split("\n");
	tmp = input.split(" ");
	//文字列から10進数に変換するときはparseIntを使います
	var a = parseInt(tmp[0], 10);
	var b = parseInt(tmp[1], 10);
	var output_string="";
	output_string= a * b % 2 == 0 ? "Even" : "Odd" ;
	//出力
	console.log(output_string);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//動作確認用

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
