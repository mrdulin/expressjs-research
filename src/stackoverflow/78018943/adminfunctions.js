const db = require('./dbutil');

const adminfunctions = {
	getAllCurrency: function (request, callback) {
		let sqlText = `SELECT * FROM EMPLOYEE LIMIT 25`;
		db.sqlSelect(sqlText, function (data) {
			callback(data);
		});
	},
};

module.exports = adminfunctions;
