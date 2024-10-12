import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading"; // Fallback component

const DashBoard = lazy(() => import("./pages/DashBoard"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <DashBoard />
      </Suspense>
    </div>
  );
};

export default App;
