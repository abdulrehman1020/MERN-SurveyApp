// import react from 'react'

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import Navbar from './components/Header/Navbar';
import Home from './components/Header/Home';
import CreateQuestion from './components/question/CreateQuestion'
import ShowQuestions from './components/question/ShowQuestions';

console.log(Home)
function App() {
  return (
    <>
    <Navbar />
    {/* <Home />
    <CreateQuestion /> */}
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/question-create" element={<CreateQuestion />} />
         <Route path='/all-questions' element={<ShowQuestions />}/>
       </Routes>
    </Router>
  
    </>
  );
}

export default App;
