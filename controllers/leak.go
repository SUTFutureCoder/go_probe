package controllers

import (
    "github.com/astaxie/beego"
)

type LeakController struct {
    beego.Controller
}

func (c *LeakController) Get() {

    c.TplName = "leak.tpl"

}
