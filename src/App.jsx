import { Navigate, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/portfolio.jsx';
import CaseStudy from './pages/case-study.jsx';
import Cursor from './components/misc/cursor/cursor.jsx';

const App = () => (
  <>
    <Cursor />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
