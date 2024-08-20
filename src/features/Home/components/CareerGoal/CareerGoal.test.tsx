import { screen, waitFor } from '@testing-library/react';
import { renderWithProvider, mockServer } from 'tests';
import { CareerGoal } from './CareerGoal';

const server = mockServer();

describe('CareerGoal', () => {
  it('Rendered career goal', async () => {
    renderWithProvider(<CareerGoal />);

    expect(screen.getByTestId('CareerGoal')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByTestId('CareerGoalChart')).toBeInTheDocument());
  });
});
