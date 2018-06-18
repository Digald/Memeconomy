import axios from "axios";

export const GET_PAGES = "GET_PAGES";

export function getPages() {
  return async function(dispatch) {
    const res = await axios.get("/api/pages");
    const pages = await res.data;
    console.log(pages);
    return dispatch({
      type: "GET_PAGES",
      data: pages
    });
  };
}
