import axios from "axios";

export async function fetchMenu() {
  const { data } = await axios.get("http://localhost:3000/menu");
  return data;
}
