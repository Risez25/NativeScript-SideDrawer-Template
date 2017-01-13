var topmost = require("ui/frame").topmost;
var drawer;

exports.loaded = function(args) {
  var page = args.object;
  drawer = page.getViewById("drawer");
};
exports.toggleDrawer = function() {
  drawer.toggleDrawerState();
};
exports.navigate = function(args) {
  var pageName = args.view.text;
  topmost().navigate(pageName == "Main Page" ? "main-page" : "other-page");
};