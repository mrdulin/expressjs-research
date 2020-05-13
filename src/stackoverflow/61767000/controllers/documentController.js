var path = require('path');
var file = path.join(__dirname, '../views/docs/community_service_log.docx');

module.exports = {
  community_service_log: (req, res) => {
    res.download(file, function(err) {
      if (err) {
        console.log('Error');
        console.log(err);
      } else {
        console.log('Success');
      }
    });
  },
};
