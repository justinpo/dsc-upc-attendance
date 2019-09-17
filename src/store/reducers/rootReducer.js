import attendeesReducer from "./attendeesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  attendees: attendeesReducer
});

export default rootReducer;
