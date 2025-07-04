import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import { Vans, VanDetail } from './pages/vans'
import Layout from './components/Layout'
import { Dashboard, Income, Reviews } from './pages/host'
import HostLayout from './components/HostLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
