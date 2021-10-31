import { socialPanelLinks } from '@global-constants/links';
import { render } from '@testing-library/react';

import { IconLink } from '../icon-link';

describe('<IconLink />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <>
        {socialPanelLinks.map(item => (
          <IconLink {...item} key={item.title} />
        ))}
      </>
    );
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(
      <>
        {socialPanelLinks.map(item => (
          <IconLink {...item} key={item.title} />
        ))}
      </>
    );
    expect(container).toBeDefined();
  });
  it('should have href', () => {
    const { container } = render(
      <>
        {socialPanelLinks.map(item => (
          <IconLink {...item} key={item.title} />
        ))}
      </>
    );
    const hrefArray = socialPanelLinks.map(({ href }) => href);
    expect(container.closest('a')).toHaveAttribute('href', (item: typeof hrefArray[number]) =>
      hrefArray.includes(item)
    );
  });
});
