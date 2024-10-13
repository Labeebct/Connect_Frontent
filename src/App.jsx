import React, { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/Loading"; // Fallback component

const DashBoard = lazy(() => import("./pages/DashBoard"));

const App = () => {
  return (
    <div>
      <Analytics />
      <Suspense fallback={<Loading />}>
        <DashBoard />
      </Suspense>
    </div>
  );
};

export default App;
