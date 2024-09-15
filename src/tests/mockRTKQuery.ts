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

export const mockRTKQueryHookReturnValue = (hook: unknown, value: unknown) => {
  return (hook as jest.Mock).mockReturnValue(value);
};
