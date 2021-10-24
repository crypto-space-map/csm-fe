import { render } from '@testing-library/react';

import { MenuItem } from '..';

describe('<MenuItem />', () => {
  it('should match snapshot', () => {
    const { container } = render(<MenuItem value="snapshot">snapshot</MenuItem>);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<MenuItem value="snapshot">defined</MenuItem>);
    expect(container).toBeDefined();
  });
});
