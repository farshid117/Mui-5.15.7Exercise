import { useRoutes } from "react-router-dom";

import MainLayout from "./Layout/MainLayout"
import { routes } from "./routes";

function App() {

  let router = useRoutes(routes) // routes is Array of objects
 
  return (
    <MainLayout>
      {router}
    </MainLayout>
  );
}

export default App;
