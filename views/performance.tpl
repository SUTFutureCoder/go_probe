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
</div>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.js"></script>
<script src="static/js/performance/performance.js"></script>
</body>
</html>