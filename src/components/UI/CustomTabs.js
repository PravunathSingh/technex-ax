import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const CustomTab = ({ children }) => (
  <Tab>
    <span>{children}</span>
  </Tab>
);

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab
