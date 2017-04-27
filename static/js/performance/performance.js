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
                    dom.performance_local.find("#performance-float").html(data.result  / 1000000000 + "s")
                },
                error: function(data){
                }
            });
        }
    };

    funcLib.init();
})();

