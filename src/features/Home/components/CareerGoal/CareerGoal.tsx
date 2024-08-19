import React from 'react';
import { DoughnutChart } from 'components/DoughnutChart';
import { useGetCareerGoalQuery } from 'service';

import './CareerGoal.scss';

export const CareerGoal = () => {
  const { data } = useGetCareerGoalQuery();

  return (
    <div className="career-goal" data-testid="CareerGoal">
      <div className="career-goal__section">
        <p className="career-goal__title">Your Progress</p>
        <div className="career-goal__chart">
          {data && <DoughnutChart value={data.progress} testId="CareerGoalChart" />}
        </div>
      </div>

      <div className="career-goal__section">
        <div className="career-goal__description">
          <p>I want to become a</p>
          <p className="bold">Tax Manager</p>
        </div>
        <p className="career-goal__view-insights">View Insights</p>
      </div>
    </div>
  );
};

export default CareerGoal;
