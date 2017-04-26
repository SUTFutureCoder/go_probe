//中文语言包初始化
LANGUAGE_PACK.push("CHN");

//定义变量样式：ENG_ETC
//eval(DEFAULT_LANGUAGE + "_LOST_CONNECTION")
//eval(DEFAULT_LANGUAGE + "_")

//初始界面
var CHN_INIT_WELCOME = '欢迎使用第二代虚拟终端！';

var now = new Date(); 
var CHN_INIT_COPY_RIGHT = "版权所有 (C) SUT-ACM 2014-" + now.getFullYear() + " *Chen";

var CHN_INIT_HELP = '输入【$vs:help】以获取更多信息';
 
//服务端关闭连接
var CHN_LOST_CONNECTION = '和服务器的连接断开';

//用户中断执行进程
var CHN_INTERRUPTED = '用户中断执行进程';

//说
var CHN_SAY = '说： ';

//虚拟终端将会在5秒后关闭
var CHN_SHUTDOWN = '虚拟终端将会在5秒后关闭...';

//再见
var CHN_GOODBYE = '再见！';

//按下【Ctrl+C】键取消关闭进程
var CHN_SHUTDOWN_CANCEL = '按下【Ctrl+C】键取消关闭进程';

//虚拟终端关闭进程已取消
var CHN_SHUTDOWN_CANCELED = '虚拟终端关闭进程已取消';

//已关闭进程，请关闭虚拟终端
var CHN_SHUTDOWN_HALT = '已关闭进程，请关闭虚拟终端';

//以下是提示部分
var CHN_NOTICE_TOPIC = '欢迎使用第二代虚拟终端';

var CHN_NOTICE_LAN = '输入【$vs:lan】来更改语言';

var CHN_NOTICE_CLEAR = '输入【$vs:clear】来清除屏幕显示';

var CHN_NOTICE_LOGIN = '输入【$vs:login】来登录服务器';

var CHN_NOTICE_SAY = '输入【$vs:say】来和其他用户进行交流';

var CHN_NOTICE_CLEAN_HISTORY = '输入【$vs:clean_history】来清除命令行历史';

var CHN_NOTICE_GITHUB = '输入【$vs:github】来访问项目开源库';

var CHN_NOTICE_AUTHOR = '输入【$vs:author】来显示项目开发成员';

var CHN_NOTICE_BYE = '输入【$vs:bye】来关闭虚拟终端';

var CHN_NOTICE_ARROW = '按下【↑或↓】来显示或切换历史记录';

//作者信息
var CHN_AUTHOR_1 = '====================================================';

var CHN_AUTHOR_2 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二代虚拟终端&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_3 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沈阳工业大学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_4 = '====================================================';

var CHN_AUTHOR_5 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;界面设计 & Websocket 核心工程师&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_6 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统交互接口工程师 & 国际化语言支持&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_7 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Chen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_8 = '====================================================';

var CHN_AUTHOR_9 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特别感谢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';


var CHN_AUTHOR_10 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日语专业翻译支持&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_11 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☆RYUU☆ - 日语专业&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_12 = '====================================================';

var CHN_AUTHOR_13 = '■&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感谢使用虚拟终端&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■';

var CHN_AUTHOR_14 = '====================================================';

//登录
var CHN_COMMAND_LOGIN = '登录用户名：';

//密码
var CHN_COMMAND_PSW = '密码：';

//成功清除历史记录
var CHN_HISTORY_CLEAN = '成功清除历史记录';

//历史记录清除出错
var CHN_HISTORY_CLEAN_ERR = '历史记录清除出错';

//未识别的内部命令
var CHN_VS_COMMAND_NOT_REC = '未识别的内部命令，请输入【$vs:help】或【$vs:?】查询命令集';

//未输入用户名
var CHN_USER_NAME_EMPTY = '未输入用户名';

//拒绝登录
var CHN_USER_ACCESS_DENY = '拒绝登录';

//请先登录
var CHN_USER_LOGIN_FIRST_PLEASE = '请先登录';

//切换语言提示
var CHN_LAN = '语言ID：';

//语言包切换
var CHN_LAN_SELECT = '请输入语言id以切换语言';

//语言包切换成功
var CHN_LAN_SUCCESS = '切换语言成功';




