import { Routes, Route } from "react-router-dom";
import Clientsignin from "./Components/Client/Clientsignin";
import Clientsignup from "./Components/Client/Clientsignup";
import Freesignin from "./Components/Freelancer/Freesignin";
import Freesignup from "./Components/Freelancer/Freesignup";
import Post from "./Components/Client/Post";
import Viewproject from "./Components/Client/Viewproject";
import Applyproject from "./Components/Freelancer/Applyproject";
import Freeview from "./Components/Freelancer/Freeview";
import Home from "./Components/Hompage/Home";
import Header from "./Components/Navbar/Header";
import Privateroutes from "./Components/ProtectedRoute/Privateroutes";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientsignin" element={<Clientsignin />} />
        <Route path="/clientsignup" element={<Clientsignup />} />
        <Route path="/freesignin" element={<Freesignin />} />
        <Route path="/freesignup" element={<Freesignup />} />
        <Route path="/viewproject" element={<Viewproject />} />
        <Route path="/freeview" element={<Freeview />} />

        <Route element={<Privateroutes />}>
          <Route path="/post" element={<Post />} />

          <Route path="/applyproject" element={<Applyproject />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
