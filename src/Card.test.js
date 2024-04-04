

import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

//smoke test for Card component
test('renders Card component without crashing', () => {
    const caption = 'Test Caption';
    const src = 'test.jpg';
    const currNum = 1;
    const totalNum = 2;
  
    render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
  });


//snapshot test for Card component

test('renders Card component correctly', () => {
  const caption = 'Test Caption';
  const src = 'test.jpg';
  const currNum = 1;
  const totalNum = 2;

  const { container } = render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
  expect(container.firstChild).toMatchSnapshot();
});
