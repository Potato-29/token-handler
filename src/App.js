import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "react-toastify/ReactToastify.css";

function App({ children }) {
  return (
    <div className="h-screen">
      <ToastContainer />
      <Navbar />
      <div className="h-[90%]">{children}</div>
    </div>
  );
}

export default App;
