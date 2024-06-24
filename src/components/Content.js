import React from "react";
import NotesList from "./NotesList";
import { Input } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NewNote from "./NewNote";

function Content() {
  return (
    <div className="pageContent">
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Notes</Tab>
          <Tab>New note</Tab>
        </TabList>
        <TabPanels>
          <TabPanel mt="20px">
           <NotesList/>
          </TabPanel>
          <TabPanel mt="20px">
            <NewNote/>
          </TabPanel>
        </TabPanels>
      </Tabs> 
    </div>
  );
}

export default Content;
