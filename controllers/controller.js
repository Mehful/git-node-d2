exports.getdefault = function(req, res){ 
  res.send('You are on the root route.'); 
};
//
exports.aboutu = function(req, res){
  res.send('You are on the about us route.');
};
//
exports.addemployee = function(req, res){
  res.send('You are on the addemployee route');
};