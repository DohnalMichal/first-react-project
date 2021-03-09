export default function location(
  state = "Seattle, WA",
  action: { type: string; payload: any }
) {
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
