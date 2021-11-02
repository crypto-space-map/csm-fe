import { render } from '@testing-library/react';

import { HeaderInput } from '../input';

describe('<HeaderInput />', () => {
  it('should match snapshot', () => {
    const { container } = render(<HeaderInput />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<HeaderInput />);
    expect(container).toBeDefined();
  });
});
