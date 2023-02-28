import React from "react";
import AppLayout from "./components/AppLayout";
import Dnd from "./features/dnd/Dnd";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DndSpell from "./features/dndspell/DndSpell";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="app">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dnd />}></Route>
          <Route path="/api/spells/:index" element={<DndSpell />}> </Route>
          <Route path="*" element={<PageNotFound />}> </Route>
        </Routes>
      </AppLayout >
    </div >
  );
}

export default App;
