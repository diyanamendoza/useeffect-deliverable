import { render } from '@testing-library/react';
import CharacterList from './CharacterList.jsx';

it('should render character list component', () => {
  const { container } = render(
    <CharacterList characters={[{name: 'Ted', origin: 'Wisconsin', species: 'Rodent', gender: 'Unknown', image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/20/1495207668-keanu-reeves-bill-bill-and-ted.jpg', status: 'Coasting'}, {name: 'Bill', origin: 'Wisconsin', species: 'Rodent', gender: 'Unknown', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Murray-8882.jpg/440px-Bill_Murray-8882.jpg', status: 'Coasting'}]} />
  );
  expect(container).toMatchSnapshot();
});