 exports.respond = function () {
     return function (req, res, next) {
         res.json([{"name":"key"}]);
         next();
     };
 };
