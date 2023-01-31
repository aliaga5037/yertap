import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import About from './about';
import Card from '@components/Card';
import Menu from './menu';
import Highlights from './highlights';
import Reviews from './reviews';
import Location from './location';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ item }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          textColor="inherit"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: 'black',
            },
          }}
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Menu" {...a11yProps(1)} />
          <Tab label="Highlight" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
          <Tab label="Location" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <div className="flex gap-[135px]">
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Menu menuItems={item.menu} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Highlights items={item.highlights} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Reviews
            review={item.review}
            place={{
              title: item.title,
              type: item.type,
              image: item.image,
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Location />
        </TabPanel>

        <div className="ml-auto flex flex-col pt-8">
          <Card
            id={1}
            title="Burger King"
            type="Fast Food"
            image="/images/starbucks.jpg"
            rating={{
              average: 4.5,
              count: 340,
            }}
            tags={[]}
            marked={false}
            className="w-[269px]"
            sponsored
          />
          <Card
            id={2}
            title="Burger King"
            type="Fast Food"
            image="/images/vapiano.jpg"
            rating={{
              average: 4.5,
              count: 340,
            }}
            tags={[]}
            marked={false}
            className="w-[269px]"
            sponsored
          />
        </div>
      </div>
    </Box>
  );
}
