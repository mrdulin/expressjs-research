function resetModule() {
  delete require.cache[require.resolve('../stubs/input')];
}

module.exports = { resetModule };
