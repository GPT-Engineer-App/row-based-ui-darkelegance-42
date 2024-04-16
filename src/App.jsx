import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { supabase } from "./lib/helper/supabase.js";
import AuthComponent from "./components/Auth.jsx";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={session ? <Navigate to="/app" /> : <AuthComponent supabaseClient={supabase} />}
        />
        <Route path="/app" element={session ? <Index /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
