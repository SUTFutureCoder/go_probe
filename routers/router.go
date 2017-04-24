package routers

import (
	"go_probe/controllers"
	"github.com/astaxie/beego"
)

func init() {
	//探针首页渲染 数据交互使用ajax
    beego.Router("/", &controllers.MainController{})

}
