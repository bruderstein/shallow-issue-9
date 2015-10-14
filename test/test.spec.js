import React from 'react';
import Button from 'components/base-widgets/button';
import TestUtils from 'react-addons-test-utils';
import Chance from 'chance';
import unexpected from 'unexpected';
import unexpectedReactShallow from 'unexpected-react-shallow';

const expectDOM = unexpected.clone()
    .installPlugin(unexpectedReactShallow);
const chance = new Chance();

describe('components/base-widgets/button', function () {
    it('should render correctly with DEFAULT random parameters', function () {
        const props = {
            className: chance.word(),
            id: chance.guid(),
            disabled: chance.bool()
        };
        const children = ['Button Name'];
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(Button, props, children));
        expectDOM(shallowRenderer, 'to have rendered', (
            <button id={props.id} className={`dxp-button ${props.className}`} disabled={props.disabled}>{'Button Name'}</button>
        ));
    });
});
