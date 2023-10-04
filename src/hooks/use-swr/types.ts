interface UseSwrBaseResult<Data = unknown, Error = unknown> {
  data: Data | undefined;
  error: Error | null;
  isLoading: boolean;
  refetch: () => void;
}

interface UseSwrLoadingResult<Data = unknown, Error = unknown>
  extends UseSwrBaseResult<Data, Error> {
  data: undefined;
  error: null;
  isLoading: true;
  refetch: () => void;
}

interface UseSwrLoadingErrorResult<Data = unknown, Error = unknown>
  extends UseSwrBaseResult<Data, Error> {
  data: undefined;
  error: Error;
  isLoading: false;
  refetch: () => void;
}

interface UseSwrSuccessResult<Data = unknown, Error = unknown>
  extends UseSwrBaseResult<Data, Error> {
  data: Data;
  error: null;
  isLoading: false;
  refetch: () => void;
}

export type UseSwrDefinedResult<
  Data = unknown,
  Error = unknown,
> = UseSwrSuccessResult<Data, Error>;

export type UseSwrResult<Data = unknown, Error = unknown> =
  | UseSwrDefinedResult<Data, Error>
  | UseSwrLoadingErrorResult<Data, Error>
  | UseSwrLoadingResult<Data, Error>;
