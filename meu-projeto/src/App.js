
import './App.css';
import HelloWorld from '../src/components/HelloWorld';

function App() {
const name = "Gabriel";

function soma(a,b){
return a+b;

}
const url = "https://via.placeholder.com/150"
const newName = name.toUpperCase();

  return (
    <div className="App">

<h2>Alterando o JSX</h2>
<p>Olá,{newName}</p>
<p>soma:{soma(10,1)}</p>

<img src={url} alt=''/>

<HelloWorld/>

    </div>
  );
}

export default App;
