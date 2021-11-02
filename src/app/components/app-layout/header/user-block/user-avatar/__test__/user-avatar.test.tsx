import { render } from '@testing-library/react';

import { UserButtonAvatar } from '../user-avatar';

describe('<UserButtonAvatar />', () => {
  it('should match snapshot', () => {
    const { container } = render(<UserButtonAvatar />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<UserButtonAvatar />);
    expect(container).toBeDefined();
  });
});
