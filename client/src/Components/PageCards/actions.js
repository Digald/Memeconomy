import axios from "axios";

export const GET_PAGES = "GET_PAGES";
export const UPDATE_CARD = "UPDATE_CARD";

export function getPages() {
  return async function(dispatch) {
    const res = await axios.get("/get/pages");
    const pages = await res.data;
    return dispatch({
      type: "GET_PAGES",
      data: pages
    });
  };
}

export function handleMouseOver(num) {
  return {
    type: 'UPDATE_CARD',
    data: num
  }
}
