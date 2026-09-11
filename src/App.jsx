import { useTemplateEffects } from './hooks/useTemplateEffects';
import HomePage from './pages/HomePage';

export default function App() {
  useTemplateEffects();
  return <HomePage />;
}
