package controllers

import (
    "github.com/astaxie/beego"
)

type PerformanceController struct {
    beego.Controller
}

func (c *PerformanceController) Get(){
    c.TplName = "performance.tpl"
}
