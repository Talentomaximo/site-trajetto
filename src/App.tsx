import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import SobreNosPage from './pages/SobreNos';
import ServicosPage from './pages/Servicos';
import EquipePage from './pages/Equipe';
import ContatoPage from './pages/Contato';
import PortfolioPage from './pages/Portfolio';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<SobreNosPage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="equipe" element={<EquipePage />} />
          <Route path="portfolio/:id" element={<PortfolioPage />} />
          <Route path="contato" element={<ContatoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
