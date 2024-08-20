import { screen, waitFor } from '@testing-library/react';
import { renderWithProvider, mockServer, careerGoal } from 'tests';
import { CareerGoal } from './CareerGoal';

const server = mockServer();

describe('CareerGoal', () => {
  it('should return mock careerGoal data', async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/goals.json',
    );
    const data = await response.json();
    expect(data).toEqual(careerGoal); // Проверка, что данные корректно возвращаются
  });

  it('Rendered career goal', async () => {
    renderWithProvider(<CareerGoal />);

    await waitFor(() => expect(screen.getByTestId('CareerGoalChart')).toBeInTheDocument());
  });
});
