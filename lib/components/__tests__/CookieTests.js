import React from 'react';
import renderer from 'react-test-renderer';

import Cookie from '../Cookie';

describe('Cookie Component', () => {
  it('displays picture of cookie', () => {
    const component = renderer.create(
      <Cookie />
    );
    let tree = component.toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0].props.style.backgroundImage).toBe('url(images/cookie.png)');
  });
});