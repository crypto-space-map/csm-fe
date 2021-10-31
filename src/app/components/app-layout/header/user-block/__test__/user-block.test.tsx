import { render } from '@testing-library/react';

import { HeaderUserBlock } from '../user-block';

describe('<HeaderUserBlock />', () => {
  it('should match snapshot', () => {
    const { container } = render(<HeaderUserBlock haveUnreadMessages avatarSrc="http://a.a.a.com" />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<HeaderUserBlock haveUnreadMessages avatarSrc="http://a.a.a.com" />);
    expect(container).toBeDefined();
  });
});
