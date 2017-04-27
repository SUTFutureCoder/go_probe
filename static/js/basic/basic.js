/**
 * Created by lin on 17-4-27.
 */
(function (){
    var dom = {
        basicStat:  $('#basic-stat'),
        hostInfo:   $('#hostinfo'),
        modal:      $('#modal')
    };

    var funcLib = {
        init: function(){
            this.bindFuncOnButton();
            this.fillData();
        },

        bindFuncOnButton: function () {
            //绑定事件
            dom.basicStat.on('click', '.btn', function (){
                var click_html = $(this).html();
                $.ajax({
                    type: 'POST',
                    url:  '/basic/info',
                    data: {
                        'hardware' : click_html
                    },
                    dataType: 'json',
                    success: function (data) {
                        // console.log(data);
                        //清空modal
                        var modal_body = dom.modal.find('.modal-body');
                        modal_body.html('');
                        dom.modal.find('#mySmallModalLabel').html(click_html);
                        //开始填充
                        if (data.cpu_info != null){
                            data.cpu_info.forEach(function(val, index, arr){
                                modal_body.append("<p>#" + index + "</p>");
                                modal_body.append("<table><tbody>");
                                modal_body.append("<tr><td>" + static.cpu_info.modelName + "</td><td>" + val.modelName + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.mhz + "</td><td>" + val.mhz + "mhz</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.vendorId + "</td><td>" + val.vendorId + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.family + "</td><td>" + val.family + "代</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.cacheSize + "</td><td>" + val.cacheSize + "K</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.coreId + "</td><td>" + val.coreId + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.cores + "</td><td>" + val.cores + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.cpu + "</td><td>" + val.cpu + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.microcode + "</td><td>" + val.microcode + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.physicalId + "</td><td>" + val.physicalId + "</td></tr>");
                                modal_body.append("<tr><td>" + static.cpu_info.stepping + "</td><td>" + val.stepping + "</td></tr>");
                                modal_body.append("</tbody></table>");
                                modal_body.append("<hr>");
                            });
                        }

                        if (data.mem_info != null){
                            //内存
                            modal_body.append("<table><tbody>");
                            modal_body.append("<tr><td>" + static.mem_info.total + "</td><td>" + data.mem_info.total / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.used + "</td><td>" + data.mem_info.used / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.free + "</td><td>" + data.mem_info.free / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.usedPercent + "</td><td>" + data.mem_info.usedPercent + "%</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.active + "</td><td>" + data.mem_info.active / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.available + "</td><td>" + data.mem_info.available / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.buffers + "</td><td>" + data.mem_info.buffers / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.cached + "</td><td>" + data.mem_info.cached / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.dirty + "</td><td>" + data.mem_info.dirty / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.inactive + "</td><td>" + data.mem_info.inactive / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.pagetables + "</td><td>" + data.mem_info.pagetables / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.shared + "</td><td>" + data.mem_info.shared / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.slab + "</td><td>" + data.mem_info.slab / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.swapcached + "</td><td>" + data.mem_info.swapcached / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.total + "</td><td>" + data.mem_swap_info.total / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.used + "</td><td>" + data.mem_swap_info.used / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.usedPercent + "</td><td>" + data.mem_swap_info.usedPercent + "%</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.free + "</td><td>" + data.mem_swap_info.free / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.sin + "</td><td>" + data.mem_swap_info.sin / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.sout + "</td><td>" + data.mem_swap_info.sout / 1000 / 1000 + "M</td></tr>");
                            modal_body.append("</tbody></table>");
                            modal_body.append("<hr>");
                        }

                        if (data.disk_info != null){
                            //磁盘
                            for (var tmp_data in data.disk_info){
                                modal_body.append("<p>#" + tmp_data + "</p>");
                                val = data.disk_info[tmp_data];
                                modal_body.append("<table><tbody>");
                                modal_body.append("<tr><td>" + static.disk_info.name + "</td><td>" + val.name + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.serialNumber + "</td><td>" + val.serialNumber + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.ioTime + "</td><td>" + val.ioTime + "s</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.iopsInProgress + "</td><td>" + val.iopsInProgress + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.mergedReadCount + "</td><td>" + val.mergedReadCount + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.mergedWriteCount + "</td><td>" + val.mergedWriteCount + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.readBytes + "</td><td>" + val.readBytes / 1000 / 1000 + "M</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.readCount + "</td><td>" + val.readCount + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.readTime + "</td><td>" + val.readTime + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.weightedIO + "</td><td>" + val.weightedIO + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.writeBytes + "</td><td>" + val.writeBytes / 1000 / 1000 + "M</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.writeCount + "</td><td>" + val.writeCount + "</td></tr>");
                                modal_body.append("<tr><td>" + static.disk_info.writeTime + "</td><td>" + val.writeTime + "</td></tr>");
                                modal_body.append("</tbody></table>");
                                modal_body.append("<hr>");
                            }
                        }

                        if (data.net_info != null){
                            data.net_info.forEach(function(val, index, arr){
                                modal_body.append("<p>#" + index + "</p>");
                                modal_body.append("<table><tbody>");
                                modal_body.append("<tr><td>" + static.net_info.name + "</td><td>" + val.name + "</td></tr>");
                                modal_body.append("<tr><td>" + static.net_info.bytesRecv + "</td><td>" + val.bytesRecv / 1000 / 1000 + "M</td></tr>");
                                modal_body.append("<tr><td>" + static.net_info.bytesSent + "</td><td>" + val.bytesSent / 1000 / 1000 + "M</td></tr>");
                                modal_body.append("<tr><td>" + static.net_info.packetsRecv + "</td><td>" + val.packetsRecv + "</td></tr>");
                                modal_body.append("<tr><td>" + static.net_info.packetsSent + "</td><td>" + val.packetsSent + "</td></tr>");
                                modal_body.append("<tr><td>" + static.net_info.err + "</td><td>" + (val.errin +  val.errout) + "</td></tr>");
                                modal_body.append("<tr><td>" + static.net_info.drop + "</td><td>" + (val.dropin +  val.dropout) + "</td></tr>");
                                modal_body.append("</tbody></table>");
                                modal_body.append("<hr>");
                            });
                        }

                        //显示modal
                        dom.modal.modal('show');
                    },
                    error: function(data){
                    }
                });
            })
        },

        fillData: function(){
            //获取并填充数据
            $.ajax({
                type: 'POST',
                url:  '/basic/poll',
                data: {
                },
                dataType: 'json',
                success: function (data) {
                    //CPU信息
                    console.log(data);
                    dom.basicStat.find("#progress-cpu").attr("aria-valuenow", data.cpu_percent[0]).css("width", data.cpu_percent[0] + "%").html(parseInt(data.cpu_percent[0]) + "%");
                    //mem信息
                    dom.basicStat.find("#progress-mem").attr("aria-valuenow", data.mem_info.usedPercent).css("width", data.mem_info.usedPercent + "%").html(parseInt(data.mem_info.usedPercent) + "%");
                    //磁盘信息
                    dom.basicStat.find("#progress-disk").attr("aria-valuenow", data.disk_info.usedPercent).css("width", data.disk_info.usedPercent + "%").html(parseInt(data.disk_info.usedPercent) + "%");

                    //集中变色
                    if (data.cpu_percent[0] <= 50) {
                        dom.basicStat.find("#progress-cpu").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-success");
                    }
                    if (data.cpu_percent[0] <= 75 && data.cpu_percent[0] > 50) {
                        dom.basicStat.find("#progress-cpu").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-warning");
                    }
                    if (data.cpu_percent[0] > 75){
                        dom.basicStat.find("#progress-cpu").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-danger");
                    }

                    if (data.mem_info.usedPercent <= 50) {
                        dom.basicStat.find("#progress-mem").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-success");
                    }
                    if (data.mem_info.usedPercent <= 75 && data.mem_info.usedPercent > 50) {
                        dom.basicStat.find("#progress-mem").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-warning");
                    }
                    if (data.mem_info.usedPercent > 75){
                        dom.basicStat.find("#progress-mem").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-danger");
                    }

                    if (data.disk_info.usedPercent <= 50) {
                        dom.basicStat.find("#progress-disk").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-success");
                    }
                    if (data.disk_info.usedPercent <= 75 && data.disk_info.usedPercent > 50) {
                        dom.basicStat.find("#progress-disk").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-warning");
                    }
                    if (data.disk_info.usedPercent > 75){
                        dom.basicStat.find("#progress-disk").removeClass("progress-bar-success progress-bar-warning progress-bar-danger").addClass("progress-bar-danger");
                    }

                    //网络参数
                    dom.basicStat.find("#net-recv").html(data.net_info[0].bytesRecv / 1000 / 1000 + "M");
                    dom.basicStat.find("#net-sent").html(data.net_info[0].bytesSent / 1000 / 1000 + "M");
                    dom.basicStat.find("#net-recvP").html(data.net_info[0].packetsRecv);
                    dom.basicStat.find("#net-sentP").html(data.net_info[0].packetsSent);
                    dom.basicStat.find("#net-errP").html(data.net_info[0].errin + data.net_info[0].errout);
                    dom.basicStat.find("#net-droP").html(data.net_info[0].dropin + data.net_info[0].dropout);

                    //用户信息填充
                    var hostinfo_table = dom.hostInfo.find("#hostinfo-table");
                    var hostinfo_user_table = dom.hostInfo.find("#hostinfo-user-table");
                    hostinfo_table.html("");
                    hostinfo_table.append("<tr><td>" + static.host_info.os + "</td><td>" + data.host_info.os + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.platform + "</td><td>" + data.host_info.platform + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.platformVersion + "</td><td>" + data.host_info.platformVersion + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.platformFamily + "</td><td>" + data.host_info.platformFamily + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.kernelVersion + "</td><td>" + data.host_info.kernelVersion + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.hostname + "</td><td>" + data.host_info.hostname + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.hostid + "</td><td>" + data.host_info.hostid + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.procs + "</td><td>" + data.host_info.procs + "</td></tr>");
                    var now = new Date(parseInt(data.host_info.bootTime) * 1000);
                    var start_time = now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
                    hostinfo_table.append("<tr><td>" + static.host_info.bootTime + "</td><td>" + start_time + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.uptime + "</td><td>" + data.host_info.uptime + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.virtualizationRole + "</td><td>" + data.host_info.virtualizationRole + "</td></tr>");
                    hostinfo_table.append("<tr><td>" + static.host_info.virtualizationSystem + "</td><td>" + data.host_info.virtualizationSystem + "</td></tr>");

                    dom.hostInfo.find("#hostinfo-user-table").html("");
                    data.host_info_user.forEach(function(val, index, arr){
                        hostinfo_user_table.append("<tr><td>#" + index + "</td><td></td></tr>");
                        hostinfo_user_table.append("<tr><td>" + static.host_info_user.user + "</td><td>" + val.user + "</td></tr>");
                        hostinfo_user_table.append("<tr><td>" + static.host_info_user.terminal + "</td><td>" + val.terminal + "</td></tr>");
                        hostinfo_user_table.append("<tr><td>" + static.host_info_user.host + "</td><td>" + val.host + "</td></tr>");
                        var now = new Date(parseInt(val.started) * 1000);
                        var start_time = now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
                        hostinfo_user_table.append("<tr><td>" + static.host_info_user.started + "</td><td>" + start_time + "</td></tr>");
                    });
                },
                error: function(data){
                }
            });
        }
    };


    var static = {
        cpu_info: {
            "cacheSize":    "二级缓存大小",
            "coreId":       "物理核心所在编号",
            "cores":        "核心数",
            "cpu":          "核心序号",
            "family":       "家族代号",
            "mhz":          "核心频率",
            "microcode":    "微指令",
            "model":        "系列中代号",
            "modelName":    "CPU标称",
            "physicalId":   "单个CPU标号",
            "stepping":     "制作更新版本",
            "vendorId":     "CPU制造商"

        },
        mem_info: {
            "total":        "内存总计",
            "used":         "已使用",
            "usedPercent":  "使用率",
            "active":       "活跃内存",
            "available":    "可用内存",
            "buffers":      "缓冲区",
            "cached":       "已缓存",
            "dirty":        "被污染",
            "free":         "空余内存",
            "inactive":     "闲置内存",
            "pagetables":   "分页",
            "shared":       "共享内存",
            "slab":         "slab算法分配",
            "swapcached":   "交换空间缓存"
        },
        mem_swap_info: {
            "total":        "交换空间总量",
            "used":         "交换空间已用",
            "usedPercent":  "交换空间使用率",
            "free":         "交换空间剩余",
            "sin":          "交换空间sin",
            "sout":         "交换空间sout"
        },
        disk_info: {
            "name":         "系统磁盘名",
            "serialNumber": "磁盘标识",
            "ioTime":       "io时间",
            "iopsInProgress": "进行每秒读写",
            "mergedReadCount": "聚合后读操作数",
            "mergedWriteCount": "聚合后写操作数",
            "readBytes":    "已读数据量",
            "readCount":    "读取次数",
            "readTime":     "读取消耗时间",
            "weightedIO":   "weightedIO",
            "writeBytes":   "已写入数据量",
            "writeCount":   "写入次数",
            "writeTime":    "写消耗时间",
        },
        net_info: {
            "name":         "网络名称",
            "bytesRecv":    "接收",
            "bytesSent":    "发送",
            "packetsRecv":  "接受包",
            "packetsSent":  "发送包",
            "err":          "错误包",
            "drop":         "丢弃包"
        },
        host_info: {
            "os":           "内核",
            "platform":     "操作系统",
            "platformVersion": "操作系统版本",
            "platformFamily":  "操作系统家族",
            "kernelVersion":   "内核版本",
            "hostname":     "主机名",
            "hostid":       "主机识别码",
            "procs":        "进程数",
            "bootTime":     "启动时间",
            "uptime":       "启动时长",
            "virtualizationRole": "虚拟化",
            "virtualizationSystem": "虚拟化系统"
        },
        host_info_user: {
            "user":         "用户名",
            "host":         "用户编号",
            "started":      "启动时间",
            "terminal":     "终端tty"
        }
    };

    funcLib.init();
    setInterval(funcLib.fillData, 1000);
})();