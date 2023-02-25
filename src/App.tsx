import React from "react";
import AppLayout from "./layouts/AppLayout";
import Dnd from "./features/dnd/Dnd";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AppLayout>
      <Dnd></Dnd>
      </AppLayout>
    </div>
  );
}

export default App;
