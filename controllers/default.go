package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
	"os"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
	host, err := os.Hostname()
	if err != nil {

	}
	fmt.Println(host)
}
