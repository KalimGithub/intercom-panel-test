import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CopilotTab from "./CopilotTab";
import DetailsTab from "./DetailsTab";

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="CoPilot" sx={{ marginY: "0.5rem" }} {...a11yProps(0)} />
          <Tab label="Details" sx={{ marginY: "0.5rem" }} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        sx={{ margin: "0", padding: "0" }}
      >
        <CopilotTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DetailsTab />
      </CustomTabPanel>
    </Box>
  );
}
