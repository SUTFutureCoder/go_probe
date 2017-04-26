//默认已登录
var logined  = 1;
//shell命令执行状态(是否结束)
var exec_end = 0;
//设置dir
var current_dir = "~";

//动态添加消息
function AddMessageBox() {
    var data = arguments[0] ? arguments[0] : "";
    var color = arguments[1] ? arguments[1] : "white";
    $("#main").append("<div class=\"message_box\" style=\"color:" + color + "\">" + data + "</div>");
    $('html, body, #main').animate({scrollTop: $(document).height()}, 0); 
}

//动态添加消息
function AddTickerMessageBox() {
    var data = arguments[0] ? arguments[0] : "";
    var color = arguments[1] ? arguments[1] : "white";
    $("#main").append("<div class=\"message_box ticker\" style=\"color:" + color + "\">" + data + "</div>");
    $('html, body, #main').animate({scrollTop: $(document).height()}, 0); 
}

//动态添加命令输入部分
function AddCommandBox() {
//    if (undefined != $.LS.get("vs_user")) {
//        user_name = $.LS.get("vs_user_name");
//    } else {
//        user_name = "GUEST:$";
////        user_name = "lin@lin-SUTACM:~$";
//    }

    $("#main").append("<div class=\"command_box\"><div class=\"command_title\"><p>" + user_name + ":" + current_dir + "$</p></div><div class=\"command_area\"><input type=\"text\" name=\"command\"></div></div>");
    $("input:last").focus();
    $('html, body, #main').animate({scrollTop: $(document).height()}, 0); 
}

//动态添加命令输入部分
function AddAnyCommandBox() {
    var title = arguments[0] ? arguments[0] : "";
    var command_function = arguments[1] ? arguments[1] : "";
    var type = arguments[2] ? arguments[2] : "text";
    $("#main").append("<div class=\"command_box\"><div class=\"command_title\" id=\"" + title + "\"><p>" + title + "</p></div><div class=\"command_area\"><input type=\"" + type + "\" func=\"" + command_function + "\" name=\"command\"></div></div>");
    $("input:last").focus();
    $('html, body, #main').animate({scrollTop: $(document).height()}, 0); 
}


//处理写命令
function ShellCommand(command) {
    command = $.trim(command);
    var shellcommand = new Array();
    shellcommand = command.split(":");
    
    switch (shellcommand[0]) {
        
        //VirtualShell命令集
        case "$vs":
            switch (shellcommand[1]) {
                //清除屏幕
                case "clear":
                    $("#main").empty();
                    AddCommandBox();
                    break;

                    //关闭VirtualShell
                case "bye":
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_SHUTDOWN"), "red");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_GOODBYE"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_SHUTDOWN_CANCEL"));
                    shutdown = 5;

                    shutdowntimer = setInterval(function () {
                        if ($("input:last").val() != command) {
                            AddMessageBox(eval(DEFAULT_LANGUAGE + "_SHUTDOWN_CANCELE"));
                            clearInterval(shutdowntimer);
                        }

                        if (shutdown >= 0) {
                            shutdown--;
                        } else {
                            AddMessageBox(eval(DEFAULT_LANGUAGE + "_SHUTDOWN_HALT"), "red");
                            ws.close();
                            delete ws;
                            clearInterval(shutdowntimer);
                        }
                    }, 1000);
                    break;

                    //访问github主页
                case "github":
                    window.open("https://github.com/SUTFutureCoder/intelligence_server/tree/master/VirtualShell");
                    AddCommandBox();
                    break;

                    //显示VirtualShell指令集
                case "help":
                case '?':
                case '？':
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_TOPIC"), "red");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_LAN"));                    
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_CLEAR"));                    
                    // AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_LOGIN"));
                    // AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_SAY"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_CLEAN_HISTORY"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_GITHUB"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_AUTHOR"));
                    // AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_BYE"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_NOTICE_ARROW"));                   
                    
                    AddCommandBox();
                    break;

                    //显示作者信息
                case "author":
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_1"), "red");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_2"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_3"), "#00CCFF");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_4"), "red");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_5"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_6"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_7"), "#FFFF00");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_8"), "red");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_9"), "#FFFF00");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_10"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_11"), "#FFFF00");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_12"), "red");
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_13"));
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_AUTHOR_14"), "red");
                    AddCommandBox();
                    break;

                    //用户登录
                case "login":
                    $("#main").empty();
                    AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_COMMAND_LOGIN"), "UserName");
                    if (undefined != $.LS.get("vs_user_name")) {
                        $("input:last").val($.LS.get("vs_user_name"));
                    }                    
                    break;

                    //和其他管理员对话
                case "say":
                    AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_SAY"), "UserSay");
                    break;

                    //清除操作历史记录
                    //推荐退出前清除
                case "clean_history":
                    $.LS.remove("vs_command_stack");
                    if (undefined == $.LS.get("vs_command_stack")) {
                        AddMessageBox(eval(DEFAULT_LANGUAGE + "_HISTORY_CLEAN"));
                    } else {
                        AddMessageBox(eval(DEFAULT_LANGUAGE + "_HISTORY_CLEAN_ERR"), "red");
                    }
                    //恢复shell
                    AddCommandBox();
                    break;
                
                //切换语言
                case 'lan':
                    if (undefined == LANGUAGE_PACK){
                        AddMessageBox('Language Package Lost', "red");
                        return ;
                    }

                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_LAN_SELECT"), "#00CCFF");
                    for (i in LANGUAGE_PACK){
                        AddMessageBox('[' + i + ']' + ' - ' + LANGUAGE_PACK[i]);
                    }
                    
                    AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_LAN"), "SetLan");                    
                    break;
                    
                default:
                    AddMessageBox(eval(DEFAULT_LANGUAGE + "_VS_COMMAND_NOT_REC"), "red");
                    AddCommandBox();
                    break;
            }
            break;
        default:
            //非命令集，发送到服务器
            //解析cd 开头，放入localstorage里面
            if (undefined != $.LS.get("vs_last_dir")) {
                last_dir = $.LS.get("vs_last_dir");
            } else {
                last_dir = "~"
            }

            temp_get_dir = command.split(" ");
            if (temp_get_dir[0] == "cd"){
                last_dir = temp_get_dir[1];

                // //过滤空格
                // var temp_cd_command = "";
                // len_temp_get_dir = temp_get_dir.length;
                // for (var i = 1; i < len_temp_get_dir; ++i){
                //     if (len_temp_get_dir[i] != undefined && len_temp_get_dir[i].length){
                //         temp_cd_command = len_temp_get_dir[i];
                //         break;
                //     }
                // }
                //
                //
                // //判断第一个是./ ../ / 还是空
                // if ('./' == temp_cd_command.substr(0, 2)){
                //     //这个意思是将索引2及以后拼在旧的路径上
                //     last_dir = last_dir + temp_cd_command.substr(2);
                // } else if ('../' == temp_cd_command.substr(0, 3)){
                //     //这个意思是将索引2及以后拼在旧的路径上
                //     last_dir = last_dir + temp_cd_command.substr(3);
                // } else if ('/' == temp_cd_command.substr(0, 1)){
                //     //清除记录，直接到根
                //     last_dir = temp_cd_command;
                // } else {
                //     //和./作用一致
                //     last_dir = last_dir + temp_cd_command;
                // }

                //这里有问题，时间紧迫，先不管了
                $.LS.set("vs_last_dir", last_dir);
                //切换name
                current_dir = last_dir;
            }

            $.ajax({
                type: 'POST',
                url:  '/shell/command',
                data: {
                    'last_dir' : last_dir,
                    'command'  : command
                },
                dataType: 'json',
                success: function (data) {
                    //开始填充
                    data_json = JSON.parse(data);
                    data_json_array = data_json["Result"].split("\n");
                    data_json_array.forEach(
                        function(value, index, array){
                            AddMessageBox(value);
                        }
                    );
                    AddCommandBox();
                },
                error: function(data){
                    console.log(data);
                    AddMessageBox("command exec error", "red");
                    AddCommandBox();
                }
            });
            break;
    }
    return 1;
}

//获取历史命令
var command_array = new Array();
var now_command = -1;
if (undefined != $.LS.get("vs_command_stack")) {
    command_array = JSON.parse($.LS.get("vs_command_stack"));
    //当前命令
    now_command = command_array.length - 1;
}

//处理上下按键
//获取上命令
//direction = 38; 向上
//direction = 40; 向下
function CommandHistory(direction) {
    switch (direction) {
        case 38:
            if (now_command > 0) {
                $("input:last").val(command_array[now_command--]);
            }
            break;

        case 40:
            if (now_command + 1 <= command_array.length - 1) {
                $("input:last").val(command_array[++now_command]);
            }
            break;
    }
}

//用户登录
function UserName(){
    user_name = $("input:last").val();
    $.LS.set("vs_user_name", user_name);
    AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_COMMAND_PSW"), "UserPassword", "password");
}

function UserPassword(){
    if (undefined != user_name || '' == user_name){
        ws.send('{"type":"login","name":"' + user_name + '", "password":"' + $("input:last").val() + '", "group":"VirtualShell"}');
    } else {
        AddMessageBox(eval(DEFAULT_LANGUAGE + "_USER_NAME_EMPTY"), "red");
        AddMessageBox(eval(DEFAULT_LANGUAGE + "_USER_ACCESS_DENY"), "red");
        AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_COMMAND_LOGIN"), "UserName");
        $("input:last").focus();
        return ;
    }
}

//用户交流
function UserSay(){
    if (undefined != user_name && logined){
        ws.send('{"type":"say","name":"' + user_name + '","group":"VirtualShell","content":"' + $("input:last").val() + '"}');
    } else {
        AddMessageBox(eval(DEFAULT_LANGUAGE + "_USER_LOGIN_FIRST_PLEASE"), "red");
        AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_COMMAND_LOGIN"), "UserName");
        $("input:last").focus();
        return ;
    }
}

//设定语言
function SetLan(){
    if ('' == $("input:last").val() || undefined == LANGUAGE_PACK[$("input:last").val()]){
        AddMessageBox(eval(DEFAULT_LANGUAGE + "_LAN_SELECT"), "#00CCFF");
        for (i in LANGUAGE_PACK){
            AddMessageBox('[' + i + ']' + ' - ' + LANGUAGE_PACK[i]);
        }
        AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_LAN"), "SetLan");                 
    } else {
        DEFAULT_LANGUAGE = LANGUAGE_PACK[$("input:last").val()];
        $.LS.set('vs_language', DEFAULT_LANGUAGE);
        AddMessageBox(eval(DEFAULT_LANGUAGE + "_LAN_SUCCESS"), "red");
    }
    AddCommandBox();
}