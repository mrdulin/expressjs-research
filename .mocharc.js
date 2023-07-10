module.exports = {
	extension: ['.js', '.cjs'],
	// spec: ['test'],

	// spec: ['test/**/*.spec.js'],
	// spec: ['test/a.spec.js', 'test/b.test.js'],

	// extension: ['.spec.js'],
	timeout: 5000,
	require: ['ts-node/register', 'jsdom-global/register'],
};
