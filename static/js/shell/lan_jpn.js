//日文语言包初始化
LANGUAGE_PACK.push("JPN");

//初始界面
var JPN_INIT_WELCOME = '第二世代の仮想ターミナルへようこそ';

var now = new Date(); 
var JPN_INIT_COPY_RIGHT = "著作権所有 (C) SUT-ACM 2014-" + now.getFullYear() + " *Chen";

var JPN_INIT_HELP = '「$vs:help」を入力して詳細な情報を得る。';
 
//服务端关闭连接
var JPN_LOST_CONNECTION = 'サーバーから切れられる';

//用户中断执行进程
var JPN_INTERRUPTED = 'ユーザーの中断執行プロセス';

//说
var JPN_SAY = '言う： ';

//虚拟终端将会在5秒后关闭
var JPN_SHUTDOWN = '仮想端末は 5 秒後に終了する...'; 

//再见
var JPN_GOODBYE = 'さようなら！'; 

//按下【Ctrl+C】键取消关闭进程
var JPN_SHUTDOWN_CANCEL = '「CTRL + c」-をクリックして、プロセスがシャットダウンをキャンセルする'; 

//虚拟终端关闭进程已取消
var JPN_SHUTDOWN_CANCELED = '仮想端末をプロセスをシャットダウンは取り消されした'; 

//已关闭进程，请关闭虚拟终端
var JPN_SHUTDOWN_HALT = 'プロセスがシャットダウンした仮想端末をシャットダウンしてください。'; 

//以下是提示部分
var JPN_NOTICE_TOPIC = '第二世代の仮想ターミナルへようこそ';

var JPN_NOTICE_LAN = '「$vs:lan」を入力して言語を変更する。';

var JPN_NOTICE_CLEAR = '「$vs:clear」を入力してスクリーンの画面を取り除く。';

var JPN_NOTICE_LOGIN = '「$vs:login」を入力してサーバーにログオンする';

var JPN_NOTICE_SAY = '「$vs:say」を入力して他のユーザーと通信する';

var JPN_NOTICE_CLEAN_HISTORY = '「$vs:clean_history」を入力してコマンド・ラインの歴史を除去する。';

var JPN_NOTICE_GITHUB = '「$vs:github」を入力して増収庫のプロジェクトを訪問する';

var JPN_NOTICE_AUTHOR = '「$vs:author」を入力してプロジェクト開発のメンバーを表示する';

var JPN_NOTICE_BYE = '「$vs:bye」を入力して仮想端末をシャットダウンする';

var JPN_NOTICE_ARROW = '「↑/↓」キーを押して歴史の切り替えを表示する';

//作者信息
var JPN_AUTHOR_1 = '============================================================';

var JPN_AUTHOR_2 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二世代の仮想端末&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_3 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瀋陽工業大学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_4 = '============================================================';

var JPN_AUTHOR_5 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;コアと Websocket インターフェイス デザイン エンジニア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_6 = '■&nbsp;&nbsp;システム インターフェイス エンジニア、国際化と言語サポート&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_7 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Chen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_8 = '============================================================';

var JPN_AUTHOR_9 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;心から感謝の意を&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_10 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日本語の翻訳サポート&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_11 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☆RYUU☆ - 日本語教育専攻&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_12 = '============================================================';

var JPN_AUTHOR_13 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仮想端末を使用していただきありがとうございます。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var JPN_AUTHOR_14 = '============================================================';

//登录
var JPN_COMMAND_LOGIN = 'ユーザー名をログインする:';

//密码
var JPN_COMMAND_PSW = 'パスワード:';

//成功清除历史记录
var JPN_HISTORY_CLEAN = '歴史の記録を除去することは成功する。';

//历史记录清除出错
var JPN_HISTORY_CLEAN_ERR = '歴史記録を除去ことはミスをおかす。';

//未识别的内部命令
var JPN_VS_COMMAND_NOT_REC = '内部コマンドが認識されなくて「$vs:help」または「$vs:?」を入力してコマンド セットクエリする。';

//未输入用户名
var JPN_USER_NAME_EMPTY = 'ユーザー名を入力しません。';

//拒绝登录
var JPN_USER_ACCESS_DENY = 'ログインは拒否されました';

//请先登录
var JPN_USER_LOGIN_FIRST_PLEASE = 'ログインしてください。';

//切换语言提示
var JPN_LAN = '言語のid：';

//语言包切换
var JPN_LAN_SELECT = '言語を変更する言語 ID を入力してください。';

//语言包切换成功
var JPN_LAN_SUCCESS = '言語の切り替え成功';
