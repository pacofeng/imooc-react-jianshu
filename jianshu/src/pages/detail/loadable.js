import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: function() {
    return <div>Loading</div>
  },
});

export default () => <LoadableComponent/>;
