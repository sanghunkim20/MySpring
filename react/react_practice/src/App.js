import logo from './logo.svg';
import './App.css';
const App = () => {
  const fnum = 10
  const snum = 5

  return (
    <div>
     <h2>First number is {fnum}</h2>
     <h2>Second number is {snum}</h2>
     <h3>Basic function: {basic_multi(fnum, snum)}</h3>
     <h3>Arrow function: {arrow_multi(fnum, snum)}</h3>
     <h3>Skipped arrow function: {skipped_multi(fnum, snum)}</h3>
    </div>
   );
}

// Basic function
function basic_multi(x1, x2) {
  return x1 * x2;
}
// arrow function
const arrow_multi = (x1, x2) => {
  return x1 * x2;
}
// Skipped arrow function
const skipped_multi = (x1, x2) => x1 * x2;

export default App;
