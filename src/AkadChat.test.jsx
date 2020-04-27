import React from 'react';
import { render } from '@testing-library/react';
import AkadChat from './AkadChat';

test('renders learn react link', () => {
  const { getByText } = render(<AkadChat />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
