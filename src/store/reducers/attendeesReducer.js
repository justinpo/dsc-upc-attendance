const initState = {
  attendees: [
    { id: "1", name: "Justin Po", date_and_time: null },
    { id: "2", name: "Justin Po", date_and_time: null },
    { id: "3", name: "Justin Po", date_and_time: null }
  ]
};

const attendeesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ATTENDEE":
      console.log("added attendee", action.attendees);
      return state;
    case "ADD_ATTENDEE_FAILED":
      console.log("add atendee error", action.attendees);
      return state;
    default:
      break;
  }
  return state;
};

export default attendeesReducer;
