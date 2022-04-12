import React from 'react';

import MainArea from './MainArea';
import Header from './Header';

export interface AppState {
  term: string | null;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      term: null,
    };
  }

  setTerm = (term: string) => {
    this.setState({ term });
  };

  render() {
    return (
      <div>
        <Header onSearchSumbit={this.setTerm} />
        <MainArea term={this.state.term} />
      </div>
    );
  }
}
