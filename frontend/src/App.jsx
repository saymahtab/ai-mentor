import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import RoadmapGenerator from "./pages/roadmap/roadmapGenerator";
import ResumeFeature from "./pages/resume/resumeFeature";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/roadmap" element={<RoadmapGenerator />} />
      <Route path="/resume" element={<ResumeFeature />}/>
    </Routes>
  )
}

export default App
