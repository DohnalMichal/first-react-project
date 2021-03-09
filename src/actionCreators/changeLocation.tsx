export default function changeLocation(location: string) {
  return { type: "CHANGE_LOCATION", payload: location };
}
