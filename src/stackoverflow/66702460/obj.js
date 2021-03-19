const bookService = require('./bookService');

const getBook = () => {
  const bookName = 'book';
  const bookID = '111';
  return new Promise((resolve, reject) => {
    bookService.InfoRequest(bookName, bookID, 'GET', (res) => {
      if (res.error) {
        reject(res);
      } else {
        const list = res['allPages'] || [];
        if ((list = [])) {
          resolve({
            pageNumber: 0,
            note: 'book is no longer exist',
          });
        } else {
          resolve(res['allPages']);
        }
      }
    });
  });
};

module.exports = { getBook };
