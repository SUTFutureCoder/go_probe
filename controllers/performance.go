package controllers

import (
    "github.com/astaxie/beego"
    "time"
    "strconv"
    "math"
    "encoding/json"
    "net/http"
    "bytes"
    "io/ioutil"
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

    for i := 0; i < 1000000000; i++ {
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
    for i := 0; i < 1000000000; i++ {
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
    IOTest       string
}
func (c *PerformanceController) GetCloud() {
    //先收集本机数据
    var localInfo LocalInfo
    localInfo.BasicInfo = GetBasicInfoExec()
    localInfo.HardwareInfo = GetHardWareInfoExec("")
    localInfo.IntTest = TestIntExec()
    localInfo.FloatTest = TestFloatExec()

    //发送数据到远程服务器
    jsonRet, _ := json.Marshal(localInfo)

    url    := "http://data.project256.com/index.php"
    client := &http.Client{}
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonRet))

    req.Header.Set("Content-Type", "application/json")
    response, _ := client.Do(req)
    var body []byte
    if response.StatusCode == 200 {
        body, _ = ioutil.ReadAll(response.Body)
        _ = body
    }
    //
    c.Ctx.Output.Header("Content-type", "application/json")
    c.Ctx.Output.Body(body)
}
