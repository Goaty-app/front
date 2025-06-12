"use client";

import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Containers, Typography } from "@/components/atoms";
import { Form, Template } from "@/components/template";

const tabStyle = {
  borderBottom: 1,
  borderColor: "divider",
};

const BirthPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Containers.Simple className="bg-layer-1 p-4 rounded shadow-md">
      <Typography.Title className="mb-4 dark-text">
        Gestion des Naissances
      </Typography.Title>

      <Box sx={tabStyle}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="tabs gestion des naissances"
        >
          <Tab label="Accouplement" />
          <Tab label="Naissance interne" />
          <Tab label="Naissance externe" />
          <Tab label="Historique" />
        </Tabs>
      </Box>

      <Box className="mt-4">
        {currentTab === 0 && <Form.BreedingForm />}
        {currentTab === 1 && <Form.BirthFromBreedingForm />}
        {currentTab === 2 && <Form.BirthFromExternalForm />}
        {currentTab === 3 && <Template.BirthHistoricTemplate />}
      </Box>
    </Containers.Simple>
  );
};

export default BirthPage;
