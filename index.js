var i18n   = require("i18next-client");

module.exports = require("lib.Controller").extend("I18nextController", {

  data: {
    t: function(s){return s;},
    i18n: i18n
  },

  init: function(options, cb){
    var self = this;
    i18n.init(this.config || {}, function(err, t){
      if(err) return cb(err);
      self.app.set("t", t);
      cb();
      self.trigger("init");
    });
  }
});
