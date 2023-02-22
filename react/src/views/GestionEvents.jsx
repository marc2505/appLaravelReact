import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GestionEvents() {
  const [value, setValue] = React.useState(0);
  const [resa, setResa] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: '0 20px' }}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Demandes" {...a11yProps(0)} />
          <Tab label="A Venir" {...a11yProps(1)} />
          <Tab label="Annulés" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Prestation</th>
                <th>Client</th>
                <th>Prix, CHF</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* TOURNER DANS LE TABLEAU DE RESERVATION */}
              <tr>
                <td>2023-02-12</td>
                <td>Cuisine italienne</td>
                <td>Oliver Greub</td>
                <td>55.00</td>
                <td>
                  <button href="#">...</button>
                </td>
              </tr>
              <tr>
                <td>2023-02-11</td>
                <td>Disc Joquet</td>
                <td>Yann Felicio</td>
                <td>120.00</td>
                <td>
                  <button href="#">...</button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </div>
  );
}




