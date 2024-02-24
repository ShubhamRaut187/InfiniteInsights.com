import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <img src='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/01/Republic-Day-Parade-46946516.jpg?fit=1200%2C630&ssl=1' alt='' style={{width:'100%',height:'600px'}}/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
