import { render, screen } from '@testing-library/react';
import Matching from './page';

describe('Matching', () => {
  test('renders matching skills and jobs components', async () => {
    // Mock getCvSkills function
    const mockGetCvSkills = jest.fn().mockResolvedValue(['Node', 'JavaScript', 'MongoDB']);
    jest.mock('./getCvSkills', () => ({
      getCvSkills: mockGetCvSkills,
    }));

    render(<Matching />);

    // Wait for getCvSkills to resolve
    await screen.findByText('cvSkills', {}, { timeout: 5000 });

    // Assert that matching skills and jobs components are rendered
    expect(screen.getByTestId('matching-skills')).toBeInTheDocument();
    expect(screen.getByTestId('matching-jobs')).toBeInTheDocument();
  });
});