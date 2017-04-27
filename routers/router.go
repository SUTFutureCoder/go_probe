package routers

import (
	"go_probe/controllers"
	"github.com/astaxie/beego"
)

func init() {
	//探针首页渲染 数据交互使用ajax
    beego.Router("/", &controllers.MainController{})
    //轮询获取数据接口
    beego.Router("/basic/poll", &controllers.MainController{}, "get,post:GetBasicInfo")
    //获取基本硬件详情数据接口
    beego.Router("/basic/info", &controllers.MainController{}, "get,post:GetHardWareInfo")

    //硬件部分
    beego.Router("/hardware",   &controllers.HardwareController{});


    //shell页
    beego.Router("/shell", &controllers.ShellController{})
    //执行shell
    beego.Router("/shell/command", &controllers.ShellController{}, "post:Command")


    //漏洞检测
    beego.Router("/leak", &controllers.LeakController{})

    //性能测试
    beego.Router("/performance", &controllers.PerformanceController{})
    beego.Router("/performance/int", &controllers.PerformanceController{}, "get,post:TestInt")
    beego.Router("/performance/float", &controllers.PerformanceController{}, "get,post:TestFloat")
    beego.Router("/performance/cloud", &controllers.PerformanceController{}, "get,post:GetCloud")
}
