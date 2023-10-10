import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

it('renders the home page', () => {
 render(<Home />); // Arrange

 expect(screen.getByText('Gilded Rose')).toBeInTheDocument(); // Assert
});
