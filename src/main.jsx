import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { TimelineProvider } from "./context/TimelineContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <TimelineProvider>
        <App />
        <Toaster />
      </TimelineProvider>
    </HashRouter>
  </StrictMode>
);
