import React from 'react';

export const TabPage = () => (
  <Tabs>
    <Tab title='All Jobs'>
      React has been designed from the start for gradual adoption, and you can
      use as little or as much React as you need. Whether you want to get a
      taste of React, add some interactivity to a simple HTML page, or start a
      complex React-powered app, the links in this section will help you get
      started
    </Tab>
    <Tab title='Frontend'>
      The React Framework for Production Next.js gives you the best developer
      experience with all the features you need for production: hybrid static &
      server rendering, TypeScript support, smart bundling, route pre-fetching,
      and more. No config needed.
    </Tab>
    <Tab title='Backend'>
      The Intuitive Vue Framework Build your next Vue.js application with
      confidence using NuxtJS. An open source framework making web development
      simple and powerful.
    </Tab>
    <Tab title='Application Development'>
      The Intuitive Vue Framework Build your next Vue.js application with
      confidence using NuxtJS. An open source framework making web development
      simple and powerful.
    </Tab>
  </Tabs>
);

/* Tab logic */

const style = {
  notSelected: `text-xl font-semibold text-center transition-all duration-150 lg:text-2xl hover:text-text-brand text-text-secondary`,
  selected: `text-xl font-semibold text-center transition-all duration-150 lg:text-2xl hover:text-text-brand text-text-secondary border-b-4 border-text-brand `,
  default: `inline-block mr-10 bg-blue-400`,
};

function Tabs({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = React.useState(childrenArray[0].key);

  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child, { selected: child?.key === current })
  );

  return (
    <nav>
      {childrenArray.map((child) => (
        <div
          role='link'
          tabIndex={0}
          onClick={() => setCurrent(child?.key)}
          key={child?.key}
          className={`${style.default} 
          ${current === child?.key ? style.selected : style.notSelected}`}
        >
          <div className=''>{child?.props.title}</div>
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
}

function Tab({ children, selected }) {
  return (
    <div hidden={!selected} className='mt-4'>
      {children}
    </div>
  );
}
