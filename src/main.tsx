import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Routes, Route } from "react-router";
import AddTask from './pages/AddTask';
import TaskPage from './pages/TaskPage';
import { Provider } from 'react-redux';
import { store } from './store/index';

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <div className="container w-screen m-auto flex justify-center min-h-screen">
            <div className="w-screen h-max p-10 bg-gray-900 rounded-md mt-20">
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/addTask" element={<AddTask />} />
                <Route path="/taskPage" element={<TaskPage />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
