package controllers

import (
    "github.com/astaxie/beego"
)

type HardwareController struct {
    beego.Controller
}

func (c *HardwareController) Get(){
    //这里演示报价功能
    teat := "hello"
    c.Ctx.Output.Body([]byte(teat))


}


