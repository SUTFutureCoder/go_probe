package controllers

import (
    "github.com/astaxie/beego"
    "time"
    "strconv"
    "math"
)

type PerformanceController struct {
    beego.Controller
}

func (c *PerformanceController) Get(){
    c.TplName = "performance.tpl"
}


//性能数据测试
//整型测试
type PerformanceTestResult struct {
    Result string `json:"result"`
}
func (c *PerformanceController) TestInt(){
    var PerformanceResult PerformanceTestResult
    PerformanceResult.Result = TestIntExec()
    c.Data["json"] = PerformanceResult
    c.ServeJSON()
}
func TestIntExec() string{
    t := 0
    nanoStart := time.Now().UnixNano()

    for i := 0; i < 30000000; i++ {
        t = 1 + 1
    }

    nanoEnd   := time.Now().UnixNano()
    _ = t
    return strconv.FormatInt((nanoEnd - nanoStart), 10)
}
//浮点测试
func (c *PerformanceController) TestFloat(){
    var PerformanceResult PerformanceTestResult
    PerformanceResult.Result = TestFloatExec()
    c.Data["json"] = PerformanceResult
    c.ServeJSON()
}
func TestFloatExec() string{
    pi := math.Pi
    nanoStart := time.Now().UnixNano()
    for i := 0; i < 30000000; i++ {
        //开平方操作
        _ = math.Sqrt(pi)
    }
    nanoEnd   := time.Now().UnixNano()
    return strconv.FormatInt((nanoEnd - nanoStart), 10)
}

//IO能力测试
func (c *PerformanceController) TestIO() {
    //var PerformanceResult PerformanceTestResult


}

//性能云比对
type LocalInfo struct {
    BasicInfo    BasicInfo
    HardwareInfo HardwareInfo
    IntTest      string
    FloatTest    string
}
func (c *PerformanceController) GetCloud() {
    //先收集本机数据
    var localInfo LocalInfo
    localInfo.BasicInfo = GetBasicInfoExec()
    localInfo.HardwareInfo = GetHardWareInfoExec("")
    localInfo.IntTest = TestIntExec()
    localInfo.FloatTest = TestFloatExec()
    c.Data["json"] = localInfo
    c.ServeJSON()
}
