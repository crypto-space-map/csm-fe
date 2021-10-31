import { render } from '@testing-library/react';

import { SvgGradient } from '../svg-gradient';

describe('<SvgGradient />', () => {
  it('should match snapshot', () => {
    const { container } = render(<SvgGradient />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<SvgGradient />);
    expect(container).toBeDefined();
  });
});
