import React from 'react';

import Section from './components/Section';
import CardList1 from './components/CardList1';
import CardList2 from './components/CardList2';
import CardList3 from './components/CardList3';
import CardList4 from './components/CardList4';
import data from './dataMockup';

const App = () => {
  return (
    <div className="App">
      <Section title="La Nacion">
        <div className={'modulo-articles-3'}>
          <CardList1 />
        </div>
      </Section>
      <Section title="" url={data.url}>
        <div className="modulo-section">
          <div className={'modulo-articles-1'}>
            <CardList2 />
          </div>
          <div className={'modulo-articles-2'}>
            <CardList3 />
          </div>
        </div>
        <div className="modulo-section2">
          <div className={'modulo-articles-4'}>
            <CardList4 />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
