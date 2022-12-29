import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {Container} from "semantic-ui-react";
import {Activity} from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined> (undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
        .then(response => {
          setActivities(response.data);
        })
  }, []);

  function handleSelectedActivity(id: string){
      setSelectedActivity(activities.find(a => a.id === id));
  }

  function handleCancelSelectActivity() {
      setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
      id ? handleSelectedActivity(id) : handleCancelSelectActivity();
      setEditMode(true);
  }

  function handleFormClose() {
      setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity){
      activity.id
          ? setActivities([...activities.filter(a => a.id !== activity.id), activity])
          : setActivities([...activities, {...activity, id: uuid()}]);
      setEditMode(false);
      setSelectedActivity(activity);
  }

  return (
    <Fragment>
      <NavBar openForm = {handleFormOpen}/>
        <Container style={{marginTop: '7em'}}>
            <ActivityDashboard
                activities={activities}
                selectedActivity={selectedActivity}
                selectActivity = {handleSelectedActivity}
                cancelSelectActivity = {handleCancelSelectActivity}
                editMode = {editMode}
                openForm = {handleFormOpen}
                closeForm = {handleFormClose}
                createOrEdit = {handleCreateOrEditActivity}
            />
        </Container>
    </Fragment>
  );
}

export default App;
