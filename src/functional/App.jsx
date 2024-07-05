import React, { useState } from 'react'
import Input from './Input';
import List from './List';

export default function App() {
   let [todos,] = useState(["breakfast", "lunch", "snacks", "dinner"]) 
    return (
        <div className="container mt-5">
          <Input />
          <List todos={todos} />
        </div>
    );
}
