import { useCallback, useEffect, useRef } from "react";
import { useForceUpdate } from "../use-force-update";
import { type UseSwrResult } from "./types";

export const useSwr = <TData, TError>(
  fetchData: () => Promise<TData>,
): UseSwrResult<TData, TError> => {
  const forceUpdate = useForceUpdate();

  const isLoadingRef = useRef(true);
  const errorRef = useRef<TError | null>(null);
  const dataRef = useRef<TData | undefined>(undefined);
  const lastLoadIndexRef = useRef(0);

  const loadData = useCallback(async () => {
    lastLoadIndexRef.current += 1;
    const loadIndex = lastLoadIndexRef.current;

    isLoadingRef.current = true;
    dataRef.current = undefined;
    errorRef.current = null;

    try {
      const data = await fetchData();

      if (loadIndex !== lastLoadIndexRef.current) {
        return;
      }
      dataRef.current = data;
    } catch (error) {
      if (loadIndex !== lastLoadIndexRef.current) {
        return;
      }
      errorRef.current = error as TError;
    } finally {
      isLoadingRef.current = false;
      forceUpdate();
    }
  }, [fetchData, forceUpdate]);

  const refetch = useCallback(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    isLoadingRef.current = true;
    errorRef.current = null;
    dataRef.current = undefined;
    loadData();
  }, [loadData]);

  if (isLoadingRef.current) {
    return {
      isLoading: isLoadingRef.current,
      error: null,
      data: undefined,
      refetch,
    };
  }

  if (errorRef.current !== null) {
    return {
      isLoading: isLoadingRef.current,
      error: errorRef.current,
      data: undefined,
      refetch,
    };
  }

  if (typeof dataRef.current !== "undefined") {
    return {
      isLoading: isLoadingRef.current,
      error: null,
      data: dataRef.current,
      refetch,
    };
  }

  return {
    isLoading: true,
    error: null,
    data: undefined,
    refetch,
  };
};
