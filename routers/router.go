package routers

import (
	"go_probe/controllers"
	"github.com/astaxie/beego"
)

func init() {
	//探针首页渲染 数据交互使用ajax
    beego.Router("/", &controllers.MainController{})


    //shell页
    beego.Router("/shell", &controllers.ShellController{})
    //执行shell
    beego.Router("/shell/command", &controllers.ShellController{}, "post:Command")
}
