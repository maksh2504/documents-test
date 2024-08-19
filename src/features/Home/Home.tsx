import React, { useEffect } from 'react';
import { useAppSelector } from 'utils/hooks/useAppSelector';
import { Spin } from 'antd';
import { CareerGoal, DocumentsTable } from './components';
import {
  getCachedCareerGoal,
  useGetDocumentsQuery,
  useGetUserQuery,
  useLazyGetCareerGoalQuery,
} from 'service';
import { getIsPersonal } from 'utils/constants/localStorage';

import './Home.scss';

export const Home = () => {
  const { data, isLoading: userIsLoading } = useGetUserQuery(getIsPersonal());
  const [getCareerGoal, { isLoading: careerGoalIsLoading }] = useLazyGetCareerGoalQuery();
  const { isLoading: documentsIsLoading } = useGetDocumentsQuery();

  const cachedCareerGoal = useAppSelector(getCachedCareerGoal);

  useEffect(() => {
    if (!data?.current_organisation.is_personal && !cachedCareerGoal.data) {
      getCareerGoal();
    }
  }, [data, cachedCareerGoal, getCareerGoal]);

  return (
    <div className="home-page" data-testid="HomePage">
      {userIsLoading || careerGoalIsLoading || documentsIsLoading ? (
        <Spin />
      ) : (
        <>
          <div className="home-page__intro">
            <h1>Hi, {data?.name} 👋</h1>
            <p className="home-page__intro-description">
              Manage your documents issued by SMU Academy or track your career goal.
            </p>
          </div>

          <div className="home-page__content">
            {!data?.current_organisation.is_personal && (
              <div className="home-page__content-section">
                <h2>Career Goal</h2>
                <CareerGoal />
              </div>
            )}

            <div className="home-page__content-section full-width">
              <div className="home-page__content-section__header">
                <h2>Recent Documents</h2>
                <p className="view-all-documents">View All Documents</p>
              </div>
              <DocumentsTable />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
