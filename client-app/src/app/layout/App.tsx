import React, {Fragment, useEffect, useState} from 'react';
import {Container} from "semantic-ui-react";
import {Activity} from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined> (undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
      agent.Activities.list().then(response => {
          let activities: Activity[] = [];
          response.forEach(a => {
              a.date = a.date.split('T')[0];
              activities.push(a);
          });
          setActivities(response);
          setLoading(false);
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
      setSubmitting(true);
      if (activity.id) {
          agent.Activities.update(activity).then(() => {
              setActivities([...activities.filter(a => a.id !== activity.id), activity]);
              setSelectedActivity(activity);
              setEditMode(false);
              setSubmitting(false);
          });
      } else {
          activity.id = uuid();
          agent.Activities.create(activity).then(() => {
              setActivities([...activities, activity]);
              setSelectedActivity(activity);
              setEditMode(false);
              setSubmitting(false);
          });
      }
  }

  function handleDeleteActivity(id: string){
      setSubmitting(true);
      agent.Activities.delete(id).then(() => {
          setActivities([...activities.filter(a => a.id !== id)]);
          setSubmitting(false);
      });
  }

  if(loading)
      return <LoadingComponent content={"Loading activity data..."} />

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
                deleteActivity = {handleDeleteActivity}
                submitting = {submitting}
            />
        </Container>
    </Fragment>
  );
}

export default App;
