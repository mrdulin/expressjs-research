process.on('warning', (warning) => {
  console.info('Warning, Message: ' + warning.message + ' Stack: ' + warning.stack, 'warning');
});
