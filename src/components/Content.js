import React, { useEffect, useState } from "react";
import NotesList from "./NotesList";
import { Input, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NewNote from "./NewNote";
import EditNote from "./EditNote";


function Content() {
  const [tab, setTab] = useState(0);
  const [willEditedNote, setWillEditedNote] = useState(null);

  // export the component theme

  return (
    <div className="pageContent">
      <Tabs
        color="white"
        index={tab}
        onChange={(i) => setTab(i)}
        variant="soft-rounded"
        colorScheme="black"
      >
        <TabList>
          <Tab><Text color="#85fff6">Notes</Text></Tab>
          <Tab><Text color="#85fff6">New note</Text></Tab>
        </TabList>
        <TabPanels>
          <TabPanel mt="20px">
            <NotesList setWillEditedNote={setWillEditedNote} setTab={setTab}/>
          </TabPanel>
          <TabPanel mt="20px">
            <NewNote setTab={setTab} />
          </TabPanel>
          <TabPanel mt="20px">
            <EditNote note={willEditedNote} setTab={setTab} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Content;
