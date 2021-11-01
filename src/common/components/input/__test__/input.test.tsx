import { render } from '@testing-library/react';

import { Input } from '..';

describe('<Input />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Input value="snapshot" errorMessage="This is ERROR" />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<Input value="snapshot" errorMessage="This is ERROR" />);
    expect(container).toBeDefined();
  });
});
