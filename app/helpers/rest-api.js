"use strict";
// make a query to the API
export default async function queryApi(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw "error";
    const data = await resp.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
}
