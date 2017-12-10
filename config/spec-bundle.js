Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');
require('core-js/es7/array');
require('core-js/es7/object');

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const testContext = require.context('../src', true, /\.spec\.(ts|tsx)/);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

// eslint-disable-next-line no-unused-vars
const modules = requireAll(testContext);
