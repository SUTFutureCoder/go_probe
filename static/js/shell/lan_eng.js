//英文语言包初始化
LANGUAGE_PACK.push("ENG");

//初始界面
var ENG_INIT_WELCOME = 'Welcome to use the virtual shell2';

var now = new Date(); 
var ENG_INIT_COPY_RIGHT = "(C) SUT-ACM 2014-" + now.getFullYear() + " *Chen";

var ENG_INIT_HELP = 'USE $vs:help to get more information';
 
//服务端关闭连接
var ENG_LOST_CONNECTION = 'Lost connection to server';

//用户中断执行进程
var ENG_INTERRUPTED = 'User interrupt execution process';

//说
var ENG_SAY = 'say: ';

//虚拟终端将会在5秒后关闭
var ENG_SHUTDOWN = 'Virtual Shell will shutdown in 5 seconds...';

//再见
var ENG_GOODBYE = 'Good Bye!';

//按下【Ctrl+C】键取消关闭进程
var ENG_SHUTDOWN_CANCEL = 'Press Ctrl+C to cancel';

//虚拟终端关闭进程已取消
var ENG_SHUTDOWN_CANCELED = 'Virtual Shell shutdown process canceled';

//已关闭进程，请关闭虚拟终端
var ENG_SHUTDOWN_HALT = 'Now HALT, Please Close The Shell';

//以下是提示部分
var ENG_NOTICE_TOPIC = 'Welcome to use Virtual Shell2';

var ENG_NOTICE_LAN = '$vs:lan - Change the language';

var ENG_NOTICE_CLEAR = '$vs:clear - Clean the screen';

var ENG_NOTICE_LOGIN = '$vs:login - Login the server';

var ENG_NOTICE_SAY = '$vs:say - Interactive with other users';

var ENG_NOTICE_CLEAN_HISTORY = '$vs:clean_history - Clean the command history';

var ENG_NOTICE_GITHUB = '$vs:github - Visit the project source code in Github';

var ENG_NOTICE_AUTHOR = '$vs:author - Show the authors of the Virtual Shell';

var ENG_NOTICE_BYE = '$vs:bye - Shutdown the Virtual Shell';

var ENG_NOTICE_ARROW = 'PRESS - ↑/↓ - Display or switch the history of commands';

//作者信息
var ENG_AUTHOR_1 = '========================================================';

var ENG_AUTHOR_2 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual Shell2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_3 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shenyang University of Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_4 = '========================================================';

var ENG_AUTHOR_5 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interface Designer & Websocket Kernel Engineer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_6 = '■&nbsp;&nbsp;System Interaction API Engineer & Global Language Support&nbsp;&nbsp;■';

var ENG_AUTHOR_7 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Chen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_8 = '========================================================';

var ENG_AUTHOR_9 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Special Thanks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_10 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japanese Professional Translation Support&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_11 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☆RYUU☆ - Majoring In Japanese&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_12 = '========================================================';

var ENG_AUTHOR_13 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanks For Using Virtual Shell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var ENG_AUTHOR_14 = '========================================================';

//登录
var ENG_COMMAND_LOGIN = 'Login:';

//密码
var ENG_COMMAND_PSW = 'Password:';

//成功清除历史记录
var ENG_HISTORY_CLEAN = 'Clean succeed';

//历史记录清除出错
var ENG_HISTORY_CLEAN_ERR = 'Clean ERROR';

//未识别的内部命令
var ENG_VS_COMMAND_NOT_REC = 'Internal command is not recognized, please enter "$vs:help" or "$vs:?" to query the command set';

//未输入用户名
var ENG_USER_NAME_EMPTY = 'Undefined User Name';

//拒绝登录
var ENG_USER_ACCESS_DENY = 'Access Deined';

//请先登录
var ENG_USER_LOGIN_FIRST_PLEASE = 'Please Login First';

//切换语言提示
var ENG_LAN = 'Language ID:';

//语言包切换
var ENG_LAN_SELECT = 'Please select language by insert the id of languages';

//语言包切换成功
var ENG_LAN_SUCCESS = 'Language changed successfully!';
