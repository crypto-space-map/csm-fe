import { render } from '@testing-library/react';

import { SocialPanel } from '../social-panel';

describe('<SocialPanel />', () => {
  it('should match snapshot', () => {
    const { container } = render(<SocialPanel />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<SocialPanel />);
    expect(container).toBeDefined();
  });
});
