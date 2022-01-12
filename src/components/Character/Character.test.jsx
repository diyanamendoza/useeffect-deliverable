import { render } from '@testing-library/react';
import Character from './Character.jsx';

it('should render character list component', () => {
  const { container } = render(
    <Character character={{name: 'Ted', origin: 'Wisconsin', species: 'Rodent', gender: 'Unknown', image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/20/1495207668-keanu-reeves-bill-bill-and-ted.jpg', status: 'Coasting'}} />
  );
  expect(container).toMatchSnapshot();
});