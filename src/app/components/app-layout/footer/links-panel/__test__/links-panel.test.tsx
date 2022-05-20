import { render } from '@testing-library/react';

import { LinksPanel } from '../links-panel';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = render(<LinksPanel />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<LinksPanel />);
    expect(container).toBeDefined();
  });
});
