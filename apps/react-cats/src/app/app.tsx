// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Products } from '@react-monorepo/products';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Products />
      <NxWelcome title="react-cats" />
    </div>
  );
}

export default App;
