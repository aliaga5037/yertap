import React from 'react';
import { Tabs, Tab } from '@mui/material';

const CategoryTabs = ({ categories, onChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="relative w-full">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'black',
          },
          '& .MuiTab-textColorPrimary.Mui-selected': {
            color: '#343846',
          },
          '& .MuiTab-textColorPrimary': {
            color: '#848C9E',
          },

          '& .MuiTab-root': {
            borderBottom: '2px solid #DDE0E8',
          },

          '& .MuiTabs-scrollButtons.Mui-disabled': {
            opacity: 0.3,
          },
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category.id}
            label={
              <span className="flex items-center p-3">
                <i className={`icon icon-${category.icon} mr-3 flex text-xl`} />
                <span>{category.title}</span>
              </span>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
