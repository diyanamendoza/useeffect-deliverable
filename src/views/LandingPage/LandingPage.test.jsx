import {screen, render} from '@testing-library/react';
import LandingPage from './LandingPage';

it('should render landing page', () => {
  const { container } = render(<LandingPage />);
  expect(container).toMatchSnapshot();
  const loading = screen.getByText('Loading');
  expect(loading).toBeInTheDocument();
});
