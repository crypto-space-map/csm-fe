import { render } from '@testing-library/react';

import { Footer } from '../footer';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<Footer />);
    expect(container).toBeDefined();
  });
});
