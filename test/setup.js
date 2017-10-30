const path = require('path');
require('ts-node').register({ fast: true });
require('jsdom-global/register');

const jsPath = path.resolve(__dirname, '../src/js');
const exclude = /^(store)$/;

require('require-all')({
    dirname: jsPath,
    excludeDirs: exclude,
    filter: /\.(ts|tsx)$/,
    recursive: true
});

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
