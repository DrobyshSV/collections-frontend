import React, { memo } from 'react';

const App = memo(() => {
  return <a className="link-success">Hello</a>;
});
App.displayName = 'App';

export default App;
