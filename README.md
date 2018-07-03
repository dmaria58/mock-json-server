## 模拟数据

# mock 常用方法例举

Random.boolean() 【随机返回 true / false】

Random.natural(60, 100) 【大于60小于100自然数】

Random.string('upper', 5) 【大写5位 例如（MGTOG）】

Random.string('lower', 5) 【大写5位 例如（kbyjp）】

Random.datetime('yyyy-MM-dd A HH:mm:ss') 【"1982-05-24 AM 11:47:34"】

Random.date('yyyy-MM-dd') 【"1983-03-18"】

Random.time('A HH:mm:ss')  【"AM 00:43:40"】


具体文档地址 http://mockjs.com/examples.html


# 使用方法

npm install  安装依赖包

npm run dev 起服务 http://127.0.0.1:3003


# 实例

可使用在线 https://getman.cn/ 测试服务情况

1、post方式 http://127.0.0.1:3003/test/
   返回数据 
    {
    "news": [
        {
            "id": 0,
            "title": "DHRLA",
            "desc": "值形美存家济劳革带总表政识外克运始况。命族因细治斯增设各然片道眼。又值议万那济管",
            "tag": "边历大文队",
            "views": 2103,
            "createtime": 1531597641072
        },
        {
            "id": 1,
            "title": "BTOYH",
            "desc": "工车由世生系速其阶象资动。水参者平影多切识线下照口。往点山用声同品对为格可十教。",
            "tag": "响体定",
            "views": 3152,
            "createtime": 1538696576290
        },
        {
            "id": 2,
            "title": "UGEKJ",
            "desc": "六手应时表须必斗区当说白置形使类口。产制际内时细引结今却次置务以。",
            "tag": "列权比",
            "views": 1448,
            "createtime": 1549682620244
        },
        {
            "id": 3,
            "title": "LCWJB",
            "desc": "好设品厂置保制志至回式容非才。步六今产么力列此价交在铁么。我定根至己其温保确厂几",
            "tag": "温化专她科求",
            "views": 3917,
            "createtime": 1541795587995
        },
        {
            "id": 4,
            "title": "HOYYB",
            "desc": "上系委土节群织事海认织技时基青清。局示比权这数住面多即用技候级处。自太人六斯维候",
            "tag": "便求",
            "views": 4875,
            "createtime": 1549618594057
        },
        {
            "id": 5,
            "title": "PGRPP",
            "desc": "标满期满才织期精者间号快种压议那号。界会消受由商济后团认军合况解但教响。",
            "tag": "百院红着强",
            "views": 3264,
            "createtime": 1548265325619
        },
        {
            "id": 6,
            "title": "SDETS",
            "desc": "适是划被历传林消入正布样将本现石。目值交器却片满复受术每技这院。政生月利证状区程",
            "tag": "该历五",
            "views": 3021,
            "createtime": 1534944083971
        },
        {
            "id": 7,
            "title": "FYJMD",
            "desc": "没四必义同里路五老分观格什圆部。白事把里带并机阶们基采见还。装发交则民才持低老意",
            "tag": "你从它",
            "views": 2309,
            "createtime": 1531879319567
        },
        {
            "id": 8,
            "title": "OGYYV",
            "desc": "十科照支及进张为月万进温研体装计标。工事水儿济同何阶这明三气办名之。",
            "tag": "目单任确",
            "views": 4856,
            "createtime": 1536695852943
        },
        {
            "id": 9,
            "title": "JJJKG",
            "desc": "",
            "tag": "适济维王",
            "views": 1049,
            "createtime": 1530715580332
        }
    ],
    "type": {
        "a": "a",
        "b": "b"
    }
}

2、post方式 http://127.0.0.1:3003/success/
  返回
  {
    "success": true,
    "message": [],
    "rows": [],
    "row": {},
    "note": ""
  }
  
3、post 方式 http://127.0.0.1:3003/error/
  返回
  {
    "success": false,
    "message": {
        "code": "ERROR_MESSAGE",
        "message": "error message"
    },
    "rows": [],
    "row": {},
    "totalCount": null,
    "note": ""
  }
    
