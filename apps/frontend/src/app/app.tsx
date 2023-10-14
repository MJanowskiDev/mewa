import NxWelcome from './nx-welcome';

import { Input } from '@ems/common-ui';

export function App() {
  return (
    <div>
      <Input
        type="text"
        id="default-input"
        label="Text Input"
        placeholder="Placeholder"
      />
      <NxWelcome title="greetings" />
    </div>
  );
}

export default App;
