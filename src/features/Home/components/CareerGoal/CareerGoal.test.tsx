import { screen } from '@testing-library/react';
import { careerGoal, mockRTKQueryHookReturnValue, mockRTKQuery, renderWithProvider } from 'tests';
import { useGetCareerGoalQuery } from 'service';
import CareerGoal from './CareerGoal';

mockRTKQuery();

describe('CareerGoal with RTL', () => {
  test('renders CareerGoal', async () => {
    mockRTKQueryHookReturnValue(useGetCareerGoalQuery, {
      data: careerGoal,
      isLoading: false,
    });

    renderWithProvider(<CareerGoal />);

    const chart = screen.getByTestId('CareerGoalChart');
    expect(chart).toBeInTheDocument();
  });
});
