import { render } from '@testing-library/react';

import { RefferalArc } from '../arc';

describe('<RefferalArc />', () => {
  it('should match snapshot', () => {
    const { container } = render(<RefferalArc percents={5} radius={70} />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<RefferalArc percents={100} radius={80} />);
    expect(container).toBeDefined();
  });
});
