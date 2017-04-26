package controllers

import (
	"github.com/astaxie/beego"
    "github.com/shirou/gopsutil/mem"
    "fmt"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
    v, _ := mem.VirtualMemory()
    fmt.Println(v)
	c.TplName = "index.tpl"
}
