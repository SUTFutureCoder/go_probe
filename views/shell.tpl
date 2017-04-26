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
  <link href="static/css/shell.css" rel="stylesheet" type="text/css">
  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="static/js/localstorage.js"></script>
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
        <li class="active"><a href="/shell">Shell</a></li>
        <li><a href="/leak">漏洞检测</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>

<div class="container container-main">
  <div id="main"></div>
</div>
<script>
    //用户名
    var user_name = "{{.shell_user}}@{{.shell_host}}"
    //初始化国际化语言包
    var LANGUAGE_PACK = new Array();

    //选定语言
    if (undefined == $.LS.get('vs_language')){
        var DEFAULT_LANGUAGE = 'CHN';
    } else {
        var DEFAULT_LANGUAGE = $.LS.get('vs_language');
    }
</script>
<script type="text/javascript" src="static/js/shell/lan_chn.js"></script>
<script type="text/javascript" src="static/js/shell/lan_eng.js"></script>
<script type="text/javascript" src="static/js/shell/lan_jpn.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="static/js/shell/shell.js"></script>
<script type="text/javascript" src="static/js/shell/interface.js"></script>
<script type="text/javascript" src="static/js/json.js"></script>

</body>
</html>