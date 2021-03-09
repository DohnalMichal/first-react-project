export default function theme(
  state = "darkblue",
  action: { type: string; payload: any }
) {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}
