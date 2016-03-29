var fs = require('fs');
var defaultRes = {
  "success": {"total": 1},
  "contents": {
    "quote": "Please check back for a fresh chunk of wisdom.",
    "author": "oMdo",
    "id": "0",
    "requested_category": "sanity",
    "categories": []
  }
};

module.exports = {
  getQuote: function(req, res, next) {
    fs.stat(__dirname + '/quote.json', function(err, stats) {
      if (err) res.send(defaultRes);
      if (!stats.isFile()) res.send(defaultRes);
      fs.readFile(__dirname + '/quote.json', 'utf8', function(err, data) {
        if (err) res.send(defaultRes);
        if (!data.length) res.send(defaultRes);
        res.json(JSON.parse(data));
      });
    });
  }
};
