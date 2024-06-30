import express from "express";
// import all our route which will be handle by express
import { AdminRoute, VendorRoute } from "./routes";
const app = express();

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.listen(8000, () => {
  console.clear();
  console.log("Server started on port 8000");
});
