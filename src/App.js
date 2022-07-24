import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'

import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import User from './components/Pages/User'
import NotFound from './components/Pages/NotFound'

function App() {

  return (
    <GithubProvider>
      <AlertProvider>
      <BrowserRouter>
        <div className="App flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto pb-12 px-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
