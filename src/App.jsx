import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const users  =[{ id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Akanksha ', email: 'heroien@chutad.com' }
]


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element={
    <div>
      {users.map(user=>(
        <UserCard key = {user.id} user = {user}/>
      ))}
    </div>
  }/>
</Routes>
</BrowserRouter>
  )
}

export default App;
