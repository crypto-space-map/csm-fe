import { render } from '@testing-library/react';

import { MainLogo } from '../header-logo';

describe('<MainLogo />', () => {
  it('should match snapshot', () => {
    const { container } = render(<MainLogo />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<MainLogo />);
    expect(container).toBeDefined();
  });
});
