// inputに入力データ全体が入る
function Main(input) {
	var args = input.split("\n");
	var num = args[0];
	args.shift();args.pop();
	var mochi_list = args;
	var output = 0;
	var mochi_uniq={};

	for (var i in mochi_list){
		mochi_uniq[mochi_list[i]] = 1;
	}

output = Object.keys(mochi_uniq).length;
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
