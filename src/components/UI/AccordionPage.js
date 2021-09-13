import React from 'react';

export const AccordionPage = ({ className }) => {
  return (
    <Accordion defaultPanel='section-1'>
      <AccordionItem toggle='section-1'>Internet Of Things</AccordionItem>
      <AccordionPanel id='section-1'>
        <p className={`mb-4 ${className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button
          className={`mb-8 ${className} text-lg font-medium text-text-brand`}
        >
          Learn More
        </button>
      </AccordionPanel>
      <AccordionItem toggle='section-2'>Cloud Computing</AccordionItem>
      <AccordionPanel id='section-2'>
        <p className={`mb-4 ${className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <button
          className={`mb-8 ${className} text-lg font-medium text-text-brand`}
        >
          Learn More
        </button>
      </AccordionPanel>
      <AccordionItem toggle='section-3'>Cyber Security</AccordionItem>
      <AccordionPanel id='section-3'>
        <p className={`mb-4 ${className}`}>
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus, iaculis.
        </p>
        <button
          className={`mb-8 ${className} text-lg font-medium text-text-brand`}
        >
          Learn More
        </button>
      </AccordionPanel>
      <AccordionItem toggle='section-4'>Chatbots</AccordionItem>
      <AccordionPanel id='section-4'>
        <p className={`mb-4 ${className}`}>
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus, iaculis.
        </p>
        <button
          className={`mb-8 ${className} text-lg font-medium text-text-brand`}
        >
          Learn More
        </button>
      </AccordionPanel>
      <AccordionItem toggle='section-5'>
        Machine Learning & Artificial Intelligence
      </AccordionItem>
      <AccordionPanel id='section-5'>
        <p className={`mb-4 ${className}`}>
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus, iaculis.
        </p>
        <button
          className={`mb-8 ${className} text-lg font-medium text-text-brand`}
        >
          Learn More
        </button>
      </AccordionPanel>
      <AccordionItem toggle='section-6'>Blockchain</AccordionItem>
      <AccordionPanel id='section-6'>
        <p className={`mb-4 ${className}`}>
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus, iaculis.
        </p>
        <button
          className={`mb-8 ${className} text-lg font-medium text-text-brand`}
        >
          Learn More
        </button>
      </AccordionPanel>
    </Accordion>
  );
};

/* Logic */

const Context = React.createContext({});

function Accordion({ children, defaultPanel }) {
  const [selected, setSelected] = React.useState(defaultPanel || '');

  const toggleItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ''));
    },
    []
  );
  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

const style = {
  item: `block border-gray-200 border font-medium shadow-shadow-brand lg:hidden rounded-md bg-opacity-70 backdrop-filter backdrop-blur-xl focus:outline-none bg-gray-100 border-b my-2 p-3 text-text-primary`,
  panel: `overflow-hidden block px-3 lg:hidden md:overflow-x-hidden  transition-height ease duration-300 text-gray-600`,
};

function AccordionItem({ toggle, children }) {
  const { selected, toggleItem } = useAccordion();
  return (
    <div role='button' onClick={toggleItem(toggle)} className={style.item}>
      {children}
      <span className='float-right'>
        {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
      </span>
    </div>
  );
}

function AccordionPanel({ children, id }) {
  const { selected } = useAccordion();
  const ref = React.useRef();
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
      {children}
    </div>
  );
}

const AngleUpIcon = () => (
  <svg
    fill='#333'
    strokeWidth='0'
    viewBox='0 0 320 512'
    xmlns='http://www.w3.org/2000/svg'
    className='h-4 mt-1'
  >
    <path d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z' />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    stroke='currentColor'
    fill='#333'
    strokeWidth='0'
    viewBox='0 0 320 512'
    xmlns='http://www.w3.org/2000/svg'
    className='h-4 mt-1'
  >
    <path d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z' />
  </svg>
);
