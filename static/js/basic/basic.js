/**
 * Created by lin on 17-4-27.
 */
(function (){
    var dom = {
        basicStat:  $('#basic-stat'),
        hostInfo:   $('#hostinfo-table'),
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
                        console.log(data);
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
                            modal_body.append("<tr><td>" + static.mem_info.total + "</td><td>" + data.mem_info.total + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.used + "</td><td>" + data.mem_info.used + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.free + "</td><td>" + data.mem_info.free + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.usedPercent + "</td><td>" + data.mem_info.usedPercent + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.active + "</td><td>" + data.mem_info.active + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.available + "</td><td>" + data.mem_info.available + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.buffers + "</td><td>" + data.mem_info.buffers + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.cached + "</td><td>" + data.mem_info.cached + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.dirty + "</td><td>" + data.mem_info.dirty + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.inactive + "</td><td>" + data.mem_info.inactive + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.pagetables + "</td><td>" + data.mem_info.pagetables + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.shared + "</td><td>" + data.mem_info.shared + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.slab + "</td><td>" + data.mem_info.slab + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_info.swapcached + "</td><td>" + data.mem_info.swapcached + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.total + "</td><td>" + data.mem_swap_info.total + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.used + "</td><td>" + data.mem_swap_info.used + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.usedPercent + "</td><td>" + data.mem_swap_info.usedPercent + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.free + "</td><td>" + data.mem_swap_info.free + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.sin + "</td><td>" + data.mem_swap_info.sin + "</td></tr>");
                            modal_body.append("<tr><td>" + static.mem_swap_info.sout + "</td><td>" + data.mem_swap_info.sout + "</td></tr>");
                            modal_body.append("</tbody></table>");
                            modal_body.append("<hr>");
                        }

                        if (data.disk_info != null){
                            //磁盘

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
            "modelName":    "名字、编号、主频",
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
        }
    };

    funcLib.init();
})();