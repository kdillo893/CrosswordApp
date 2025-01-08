import { readdir } from "node:fs/promises";

export async function puzzleFilenames() {

  try {
    //this is node.js specific; could look for generic file fetching later
    const files = await readdir("../../../resources/puzzles");

    if (typeof (files) !== 'object') {
      console.log("Bad");
    }

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {

  }
  return [];
}

