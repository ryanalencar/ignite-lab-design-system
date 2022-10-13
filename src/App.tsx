import { Heading, ReactLogo, Text } from './components';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <ReactLogo />

      <Heading size="lg">Ignite Lab</Heading>
      <Text size="lg" className="text-gray-400">Faça login e comece a usar!</Text>
    </div>
  );
}
