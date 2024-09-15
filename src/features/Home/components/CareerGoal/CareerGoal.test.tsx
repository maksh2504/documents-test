import { screen } from '@testing-library/react';
import { careerGoal, renderWithProvider } from 'tests';
import { useGetCareerGoalQuery } from 'service';
import CareerGoal from './CareerGoal';

jest.mock('service', () => {
  const originalModule = jest.requireActual('service');
  return {
    ...originalModule,
    useGetCareerGoalQuery: jest.fn(),
  };
});

describe('CareerGoal with RTL', () => {
  test('renders CareerGoal', async () => {
    await (useGetCareerGoalQuery as jest.Mock).mockReturnValue({
      data: careerGoal,
      error: undefined,
      isFetching: false,
      isLoading: false,
    });

    renderWithProvider(<CareerGoal />);

    const chart = screen.getByTestId('CareerGoalChart');
    expect(chart).toBeInTheDocument();
  });
});
