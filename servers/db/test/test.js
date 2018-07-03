let Mock  = require('mockjs');
let Random = Mock.Random;


module.exports = function() {
  var data = { 
      news: [],
      type:{
        a:"a",
        b:"b"
      }
  };
  
  
  for (var i = 0; i < 10; i++) {
      
    var content = Random.cparagraph(0,10);
    
    data.news.push({
        "id": i,
        "title": Random.string('upper', 5),
        "desc": content.substr(0,40),
        "tag": Random.cword(2,6),
        "views": Random.integer(100,5000),
        "createtime":Random.natural(1530002343000, 1550602343000)
    })
  }

  return data
}