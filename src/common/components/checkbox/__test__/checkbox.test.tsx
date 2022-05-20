import { render } from '@testing-library/react';

import { CheckBox } from '..';

describe('<CheckBox />', () => {
  it('should match snapshot', () => {
    const { container } = render(<CheckBox label="a" />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<CheckBox label="b" />);

    expect(container).toBeDefined();
  });
});
