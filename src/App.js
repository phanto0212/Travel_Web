import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import TourDetail from './pages/TourDetailPages/TourDetail';
import PaymentPages from './pages/PaymentPages/PaymentPages'
export function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          {
            routes.map((route) =>{
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return(
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                 } />
              )
            })
          }
         
          <Route path="/tour-detail/:tourId" element={
                    <TourDetail />} />
          <Route path="/tour/payments/:bookingId" element={<PaymentPages />}   />
        </Routes>
      </Router>
      
    </div>
  )
}


export default App;