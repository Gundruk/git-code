 const { constants } = require("../constants")
 const errorhandler = (err, req, res, next) => {
     const statusCode = res.statusCode ? res.statusCode : 400;
     switch (statusCode) {

         case constants.valitdation_error:
             res.json({ title: "Validation failed", message: err.message, stackTrace: err.stack });
             break;

         case constants.NOT_FOUND:
             res.json({ title: "not found", message: err.message, stackTrace: err.stack });
             break;

         case constants.unauthorized:
             res.json({ title: "unauthorized", message: err.message, stackTrace: err.stack });
             break;

         case constants.server_error:
             res.json({ title: "server error", message: err.message, stackTrace: err.stack });
             break;

         case constants.forbidden:
             res.json({ title: "forbidden", message: err.message, stackTrace: err.stack });
         default:
             console.log("all good");
             break;

     }



 };
 module.exports = errorhandler;