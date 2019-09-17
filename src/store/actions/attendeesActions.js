export const addAttendee = attendee => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("attendees")
      .add({
        ...attendee
      })
      .then(() =>
        dispatch({
          type: "ADD_ATTENDEE",
          attendees: attendee
        })
      )
      .catch(err => {
        dispatch({
          type: "ADD_ATTENDEE_FAILED",
          attendees: err
        });
      });
  };
};
