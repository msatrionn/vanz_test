import Home from "./Pages/Home";
import Admin from "./Pages/Admin/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./Pages/Admin/Create";
import Edit from "./Pages/Admin/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
