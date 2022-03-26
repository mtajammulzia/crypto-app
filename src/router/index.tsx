import { FC } from "react";
import { Landing } from "pages";
import { Routes, Route } from "react-router-dom";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
