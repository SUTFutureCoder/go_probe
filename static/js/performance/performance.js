/**
 * Created by lin on 17-4-27.
 */
(function (){
    var dom = {
        performance_local: $("#performance-local"),
        performance_cloud: $("#performance-cloud")
    };

    var funcLib = {
        init: function(){
            this.bindFuncOnButton();
        },

        bindFuncOnButton: function(){
            dom.performance_local.find("#performance-local-test-btn").on("click", "", this.getLocalPerformance);
            dom.performance_cloud.find("#performance-cloud-test-btn").on("click", "", this.getCloudPerformance);
        },

        getLocalPerformance: function(){
            //int
            $.ajax({
                type: 'POST',
                url:  '/performance/int',
                data: {
                },
                dataType: 'json',
                success: function (data) {
                    dom.performance_local.find("#performance-int").html(data.result / 1000000000 + "s")
                },
                error: function(data){
                }
            });

            //float
            $.ajax({
                type: 'POST',
                url:  '/performance/float',
                data: {
                },
                dataType: 'json',
                success: function (data) {
                    dom.performance_local.find("#performance-float").html(data.result  / 1000000000 + "s")
                },
                error: function(data){
                }
            });
        },
        getCloudPerformance: function(){
            $.ajax({
                type: 'POST',
                url:  '/performance/cloud',
                data: {
                },
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    dom.performance_cloud.find('#performance-cloud-test-btn').remove();
                    var cloud_table = dom.performance_cloud.find('#performance-cloud-table');
                    cloud_table.show();
                    //加载名次
                    cloud_table.find("#performance-cloud-table-rank").html(data.rank);

                    //加载第一硬件信息
                    var cloud_table_ace = cloud_table.find('#performance-cloud-table-rank-ace');

                    //同一dom操作
                    var dom_ace = '';
                    dom_ace += "<tr><td><b>" + param.host_id + "</b></td><td>" + data.ace[0].host_id + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.test_int + "</b></td><td>" + data.ace[0].test_int / 1000 / 1000 + "s</td></tr>";
                    dom_ace += "<tr><td><b>" + param.test_float + "</b></td><td>" + data.ace[0].test_float / 1000 / 1000 + "s</td></tr>";
                    dom_ace += "<tr><td><b>" + param.test_io + "</b></td><td>" + data.ace[0].test_io + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.os + "</b></td><td>" + data.ace[0].os + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.platform + "</b></td><td>" + data.ace[0].platform + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.platform_version + "</b></td><td>" + data.ace[0].platform_version + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.kernel_version + "</b></td><td>" + data.ace[0].kernel_version + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.mem_percent + "</b></td><td>" + data.ace[0].mem_percent + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.mem_total + "</b></td><td>" + data.ace[0].mem_total + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.mem_swap_percent + "</b></td><td>" + data.ace[0].mem_swap_percent + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.mem_swap_total + "</b></td><td>" + data.ace[0].mem_swap_total + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.cpu_percent + "</b></td><td>" + data.ace[0].cpu_percent + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.cpu_model_name + "</b></td><td>" + data.ace[0].cpu_model_name + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.cpu_vendor + "</b></td><td>" + data.ace[0].cpu_vendor + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.cpu_mhz + "</b></td><td>" + data.ace[0].cpu_mhz + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.cpu_cache_size + "</b></td><td>" + data.ace[0].cpu_cache_size + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.cpu_family + "</b></td><td>" + data.ace[0].cpu_family + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.disk_percent + "</b></td><td>" + data.ace[0].disk_percent + "</td></tr>";
                    dom_ace += "<tr><td><b>" + param.disk_fstype + "</b></td><td>" + data.ace[0].disk_fstype + "</td></tr>";

                    var now = new Date(parseInt(data.ace[0].create_time) * 1000);
                    var time = now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
                    dom_ace += "<tr><td><b>" + param.disk_fstype + "</b></td><td>" + time + "</td></tr>";

                    cloud_table_ace.after(dom_ace);

                },
                error: function(data){
                }
            });
        }
    };

    var param = {
        "host_id": "主机识别码",
        'test_int': "整型测试成绩【越小越好】",
        'test_float': "浮点型测试成绩【越小越好】",
        'test_io': "磁盘IO测试成绩【越小越好】",
        'os': "内核",
        'platform': "操作系统",
        'platform_version': "操作系统版本",
        'kernel_version': "内核版本",
        'mem_percent': "内存使用率",
        'mem_total': "内存总量",
        'mem_swap_percent': "交换空间使用率",
        'mem_swap_total': "交换空间大小",
        'cpu_percent': "CPU使用率",
        'cpu_model_name': "CPU标称",
        'cpu_vendor': "CPU制造商",
        'cpu_mhz': "核心频率",
        'cpu_cache_size': "二级缓存",
        'cpu_family': "家族代号",
        'disk_percent': "磁盘占用率",
        'disk_total': "磁盘总大小",
        'disk_fstype': "磁盘分区类型",
        'create_time': "提交时间"
    };
    funcLib.init();
})();

