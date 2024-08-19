export type BaseDto<T> = {
  record: T;
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
    name: string;
  };
};
