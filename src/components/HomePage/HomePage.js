import React from 'react';
import Truncate from '../TextTruncate/TextTruncate';

import './HomePage.scss';

export default class HomePage extends React.Component {
  render() {
    const desc = "If i dont specify an image in yml, it picks up ruby by default. it picks up ruby by default it picks up ruby by default"
    return (
      <section className="HomePage--description">
        <Truncate lines = { 2 }>
          { desc }
        </Truncate>
      </section>
    );
  }
}
