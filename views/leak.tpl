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
        <li><a href="/performance">性能</a></li>
        <li><a href="/shell">Shell</a></li>
        <li class="active"><a href="/leak">漏洞检测</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- <li class="active"><a href="./"></a></li> -->
        <li><a id="login_button" href="https://github.com/SUTFutureCoder/go_probe" target="_blank">©*Chen@GIT</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>

<div class="container container-main">
  <div class="alert alert-danger" role="alert">实在抱歉，因为时间有限，即使爆肝也做不完这一块了</div>
  <div class="alert alert-success" role="alert">迭代二会加上这一块～敬请期待</div>

  <div class="panel panel-default">
    <div class="panel-body">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="input_url" class="col-sm-2 control-label">URL或IP</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="input_url" placeholder="URL">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox">SQL注入
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox">CSRF攻击
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox">XSS攻击
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox">弱密码猜测
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-danger" disabled="disabled">开始测试</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.js"></script>
<script src="static/js/basic/basic.js"></script>
</body>
</html>