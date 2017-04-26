package controllers

import (
    "github.com/astaxie/beego"
    "os"
    "fmt"
    "os/exec"
    "encoding/json"
)

type ShellController struct {
    beego.Controller
}

/**
 * 初始化并且渲染模板
 */
func (c *ShellController) Get(){
    //获取用户名、机器信息
    shell_user, _ := exec.Command("/bin/sh", "-c", "whoami").Output()

    c.Data["shell_user"]    = string(shell_user)
    c.Data["shell_host"], _ = os.Hostname()
    fmt.Println(c.Data)
    c.TplName = "shell.tpl"
}

/**
 * 执行shell命令
 */
type CommandExecReturn struct {
    Result string
}
func (c *ShellController) Command(){
    var command string
    var lastdir string
    var cmd     []byte
    c.Ctx.Input.Bind(&command, "command")
    c.Ctx.Input.Bind(&lastdir, "last_dir")

    if lastdir != "" {
        cmd, _ = exec.Command("/bin/sh", "-c", "cd " + lastdir + " && " + command).Output()
    } else {
        cmd, _ = exec.Command("/bin/sh", "-c", command).Output()
    }

    var result CommandExecReturn
    result.Result  = string(cmd)
    jsonData, _   := json.Marshal(result)
    c.Data["json"] = string(jsonData)
    c.ServeJSON()
}


