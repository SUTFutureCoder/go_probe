package controllers

import (
	"github.com/astaxie/beego"
    "github.com/shirou/gopsutil/mem"
    "github.com/shirou/gopsutil/cpu"
    "github.com/shirou/gopsutil/host"
    "time"
    "github.com/shirou/gopsutil/net"
    "github.com/shirou/gopsutil/disk"
    //"github.com/shirou/gopsutil/process"
)

type MainController struct {
	beego.Controller
}


type BasicInfo struct {
    MemInfo    *mem.VirtualMemoryStat  `json:"mem_info"`
    CpuPercent []float64               `json:"cpu_percent"`
    DiskInfo   *disk.UsageStat         `json:"disk_info"`
    HostInfo   *host.InfoStat          `json:"host_info"`
    NetInfo    []net.IOCountersStat     `json:"net_info"`
}

func (c *MainController) Get() {
	c.TplName = "index.tpl"
}

/**
    获取基础信息
 */
func (c *MainController) GetBasicInfo() {
    var basicinfo BasicInfo
    basicinfo.MemInfo, _       = mem.VirtualMemory()
    basicinfo.CpuPercent, _    = cpu.Percent(time.Second, false)
    basicinfo.HostInfo, _      = host.Info()
    basicinfo.DiskInfo, _      = disk.Usage("/")
    basicinfo.NetInfo, _       = net.IOCounters(false)
    c.Data["json"] = basicinfo
    c.ServeJSON()
}

/**
    获取详细信息
 */
type HardwareInfo struct {
    MemInfo  *mem.VirtualMemoryStat     `json:"mem_info"`
    MemSwapInfo *mem.SwapMemoryStat     `json:"mem_swap_info"`
    CpuInfo  []cpu.InfoStat          `json:"cpu_info"`
    DiskInfo map[string]disk.IOCountersStat   `json:"disk_info"`
}
func (c *MainController) GetHardWareInfo() {
    var hardware string
    var hardwareInfo HardwareInfo
    c.Ctx.Input.Bind(&hardware, "hardware")

    if hardware == "CPU" {
        hardwareInfo.CpuInfo, _ = cpu.Info()
    } else if hardware == "MEM" {
        hardwareInfo.MemInfo, _ = mem.VirtualMemory()
        hardwareInfo.MemSwapInfo, _ = mem.SwapMemory()
    } else if hardware == "DISK" {
        hardwareInfo.DiskInfo, _ = disk.IOCounters()
    }
    c.Data["json"] = hardwareInfo
    c.ServeJSON()
}

/**
    轮询接口
 */
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
