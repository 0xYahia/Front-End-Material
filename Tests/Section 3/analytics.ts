let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  logged = "Yahia";
  console.log(logged);
}

sendAnalytics("the data");

//! For variables this is okay. For parameters it's not okay.
