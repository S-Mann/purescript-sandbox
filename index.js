// Generated by purs bundle 0.14.4
var PS = {};
(function(exports) {
  "use strict";

  exports.showIntImpl = function (n) {
    return n.toString();
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Show"] = $PS["Data.Show"] || {};
  var exports = $PS["Data.Show"];
  var $foreign = $PS["Data.Show"];
  var showInt = {
      show: $foreign.showIntImpl
  };
  var show = function (dict) {
      return dict.show;
  };
  exports["show"] = show;
  exports["showInt"] = showInt;
})(PS);
(function(exports) {
  "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect.Console"] = $PS["Effect.Console"] || {};
  var exports = $PS["Effect.Console"];
  var $foreign = $PS["Effect.Console"];
  exports["log"] = $foreign.log;
})(PS);
(function($PS) {
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Data_Show = $PS["Data.Show"];
  var Effect_Console = $PS["Effect.Console"];                
  var fact = function (v) {
      if (v === 0) {
          return 1;
      };
      return v * fact(v - 1 | 0) | 0;
  };
  var main = function __do() {
      Effect_Console.log("The factorial of 5 is:")();
      return Effect_Console.log(Data_Show.show(Data_Show.showInt)(fact(5)))();
  };
  exports["fact"] = fact;
  exports["main"] = main;
})(PS);
PS["Main"].main();