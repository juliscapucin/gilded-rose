import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home', () => {
 it('renders the home page', () => {
  render(<Home />); // Arrange

  expect(screen.getByText('Gilded Rose')).toBeInTheDocument(); // Assert
 });

 it('should contain an h1 element', () => {
  render(<Home />); // Arrange

  const h1Element = screen.getByRole('heading', { level: 1 }); // Act

  expect(h1Element).toBeInTheDocument(); // Assert
 });
});
