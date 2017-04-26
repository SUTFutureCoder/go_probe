package controllers

import (
	"github.com/astaxie/beego"
    "github.com/shirou/gopsutil/mem"
    "github.com/shirou/gopsutil/cpu"
    "github.com/shirou/gopsutil/host"
    "time"
    "fmt"
    "github.com/shirou/gopsutil/net"
    "github.com/shirou/gopsutil/disk"
    //"encoding/json"
    //"github.com/shirou/gopsutil/process"
)

type MainController struct {
	beego.Controller
}


type BasicInfo struct {
    Mem_info *mem.VirtualMemoryStat `json:"mem_info"`
}

func (c *MainController) Get() {
    test_2 := struct {
        Vm []*mem.VirtualMemoryStat
    }{}
    var basicinfo BasicInfo
    temp, _ := mem.VirtualMemory()
    basicinfo.Mem_info = temp
    test_2.Vm = append(test_2.Vm, temp)

    fmt.Println(test_2)
    c.Data["json"] = basicinfo
    c.ServeJSON()
    fmt.Println(basicinfo)

    cpu_load_avg, _ := cpu.Percent(time.Second, false)
    host_info, _ := host.Info()
    disk, _ := disk.Usage("/")
    net, _ := net.IOCounters(false)
    fmt.Println(net)
    fmt.Println(host_info)

    //fmt.Println(mem_info)
    fmt.Println(cpu_load_avg)
    fmt.Println(disk)
	c.TplName = "index.tpl"
}


func (c *MainController) GetBasicInfo() {
    test_2 := struct {
        Vm []*mem.VirtualMemoryStat
    }{}
    temp, _ := mem.VirtualMemory()
    test_2.Vm = append(test_2.Vm, temp)

    fmt.Println(test_2)

    cpu_load_avg, _ := cpu.Percent(time.Second, false)
    host_info, _ := host.Info()
    disk, _ := disk.Usage("/")
    net, _ := net.IOCounters(false)
    fmt.Println(net)
    fmt.Println(host_info)

    //fmt.Println(mem_info)
    fmt.Println(cpu_load_avg)
    fmt.Println(disk)

    //c.Data["json"] = string(jsonData)
}

//轮询接口
//func (c *MainController) Poll() {
//    mem_info, _ := mem.VirtualMemory()
//    cpu_load_avg, _ := cpu.Percent(time.Second, false)
//    host_info, _ := host.Info()
//    disk, _ := disk.Usage("/")
//    var result CommandExecReturn
//    result.Result  = string(cmd)
//    jsonData, _   := json.Marshal(result)
//    c.Data["json"] = string(jsonData)
//    c.ServeJSON()
//}
