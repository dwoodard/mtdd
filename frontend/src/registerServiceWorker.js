import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);
  console.log(wb);
  
  wb.addEventListener("controlling", () => {
    window.location.reload();
  });
  
  wb.register();
} else {
  wb = null;
}

export default wb;
