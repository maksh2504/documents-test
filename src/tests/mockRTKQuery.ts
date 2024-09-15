jest.mock('service');

export const mockRTKQuery = () => {
  jest.mock('service', () => {
    const originalModule = jest.requireActual('service');
    return {
      ...originalModule,
      useGetDocumentsQuery: jest.fn(),
      useGetCareerGoalQuery: jest.fn(),
    };
  });
};

export const mockRTKQueryHookReturnValue = (hook: any, value: any) => {
  return (hook as jest.Mock).mockReturnValue(value);
};
