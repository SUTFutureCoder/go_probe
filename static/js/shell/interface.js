//初始界面
$(function(){
    AddMessageBox(eval(DEFAULT_LANGUAGE + "_INIT_WELCOME"));
    AddMessageBox(eval(DEFAULT_LANGUAGE + "_INIT_COPY_RIGHT"));
    AddMessageBox(eval(DEFAULT_LANGUAGE + "_INIT_HELP"));
    AddCommandBox();
    $("input:last").focus();
})


//设定按键部分 
$(function(){
    $(this).keydown(function(e){
        //除alt的任意键聚焦
        if (e.which != 18){
            $("input:last").focus();        
        }
    
        //按下回车
        if (e.which == 13){
            $("input").attr("disabled", "disabled");
            //记录命令历史
            if (logined){
                if (undefined != $.LS.get("vs_command_stack")){
                    now_command = command_array.length;
                }
                if (now_command != -1){      
                    command_array.push($("input:last").val());
                    now_command++;
                } else {
                    now_command++;                    
                    command_array[now_command] = $("input:last").val();
                }
                
                $.LS.set("vs_command_stack", JSON.stringify(command_array));               
                
            }
            
            //检测是否有自定义函数
            if ('' !== $("input:last").attr("func") && undefined != $("input:last").attr("func")){     
                eval($("input:last").attr("func") + '()');
            } else {                
                //匹配VirtualShell指令集
                if (!ShellCommand($("input:last").val())){
                    //发送命令ajax

                    // ws.send('{"type":"shell","command":"' + $("input:last").val() + '"}');
                    //执行状态复位
                    exec_end = 0;
                }
            }
            
            $("input:last").focus();
            //逻辑运算
        }
        
        //ctrl+C
        if (e.ctrlKey && e.which == 67){
            $("input").attr("disabled", "disabled");
            if (!logined){
                //未登录则无法绕过登录过程
                $("#main").empty();
                AddAnyCommandBox(eval(DEFAULT_LANGUAGE + "_COMMAND_LOGIN"), "UserName");
                if (undefined != $.LS.get("vs_user_name")) {
                    $("input:last").val($.LS.get("vs_user_name"));
                }                    
            } else {
                AddCommandBox();
                $("input:last").focus();

                //判断是否正在执行
                if (!exec_end){
                    // ws.send('{"type":"shell","command":"!"}');
                }
            }
        }
        
        //上下键
        if ((e.which == 38 || e.which == 40) && logined){
            CommandHistory(e.which);
        }
        
    })
 })