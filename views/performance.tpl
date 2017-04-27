<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Go云探针</title>

  <!-- Bootstrap core CSS -->
  <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="static/css/probe.css" rel="stylesheet">
</head>

<body>

<!-- Fixed navbar -->
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="">Go云探针</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a href="/">状态</a></li>
        <!-- <li><a href="/hardware">硬件</a></li> -->
        <li class="active"><a href="/performance">性能</a></li>
        <li><a href="/shell">Shell</a></li>
        <li><a href="/leak">漏洞检测</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>

<div class="container container-main">
  <div class="panel panel-default">
    <div class="panel-body">
      <div id="performance-local">
        <button id="performance-local-test-btn" type="button" class="btn btn-primary btn-lg btn-block">十亿级性能测试</button>
        <table class="table table-hover" id="performance-table">
          <thead>
            <th>整型性能</th>
            <th>浮点性能</th>
            <!-- <th>IO性能</th> -->
          </thead>
          <tbody>
            <tr>
              <td id="performance-int"></td>
              <td id="performance-float"></td>
              <td id="performance-io"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-body">
      <div id="performance-cloud">
        <div class="alert alert-warning" role="alert"><span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>当您点击下方按钮时，表示您同意将您的机器性能及硬件数据上传至云端并参与排名比对。</div>
        <button id="performance-cloud-test-btn" type="button" class="btn btn-success btn-lg btn-block">云性能比对</button>
        <br/>
        <table class="table table-hover" id="performance-cloud-table" style="display: none">
          <tbody>
            <tr><td><b>您的排名</b></td><td id="performance-cloud-table-rank"></td></tr>
            <tr><td></td><td></td></tr>
            <tr id="performance-cloud-table-rank-ace"><td><b>第一名配置</b></td><td></td></tr>
            <tr><td></td><td></td></tr>
            <tr id="performance-cloud-table-rank-up-two"><td><b>您前两名配置</b></td><td></td></tr>
            <tr><td></td><td></td></tr>
            <tr id="performance-cloud-table-rank-down-two"><td><b>您后两名配置</b></td><td></td></tr>
            <tr><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.js"></script>
<script src="static/js/performance/performance.js"></script>
</body>
</html>