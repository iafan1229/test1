import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello name="하영" color="purple" isTrueFalse={true} />
      <Hello name="하영"  isTrueFalse={false} />

      </>
  );
}

export default App;
