import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Home } from "./pages";
import * as actions from "./redux/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.sectionTypeDisplay("spring_garden"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.STAR} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
