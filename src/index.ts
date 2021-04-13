/* eslint-disable no-console */

import figlet from "figlet";

figlet("Hello World", (err, data) => {
  if (err) {
    console.dir(err);
  }

  console.log(data);
});
