import { Tab } from 'react-tabs';
import React from 'react';

const CareersTab = ({ children, selected }) => {
  return (
    <Tab>
      <div
        className={
          selected
            ? 'cursor-pointer border-b-4 border-text-brand'
            : 'cursor-pointer'
        }
      >
        <h1 className='text-xl font-semibold text-center transition-all duration-150 lg:text-2xl text-text-secondary hover:text-text-brand'>
          {children}
        </h1>
      </div>
    </Tab>
  );
};

CareersTab.tabsRole = 'Tab';

export default CareersTab;
