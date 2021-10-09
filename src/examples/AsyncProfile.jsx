import ErrorBoundary from "../components/ErrorBoundary";

import { CurrentProfile } from "../components/AsyncProfile/CurrentProfile";
import { Suspense, useEffect } from "react";
import { useAsyncProfileStore } from "../store/asyncProfile/asyncProfileStore";

export const AsyncProfile = () => {
  const { profileGender, queryProfile, clearProfile } = useAsyncProfileStore();

  useEffect(() => {
    queryProfile();

    return () => {
      clearProfile();
    };
  }, [profileGender, clearProfile]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrentProfile />
      </Suspense>
    </ErrorBoundary>
  );
};
