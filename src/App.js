import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .catch((err)=>{
      console.log('login err:',err);
    })
    .finally(() => setLoading(false))
  },[])

 return !loading ? (
  <>
    <div className='container-fluid px-2 m-0'>
      <div className="container my-">
        <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
      </div>
    </div>
  </>
 ) : null
}

export default App;
