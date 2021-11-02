import { render } from '@testing-library/react';

import { Header } from '../header';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });
});
