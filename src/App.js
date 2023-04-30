import Animal from './components/Animal';
import './index.css';

// Images
import crocodile from "./Imgs/crocodile.png";
import giraffe from "./Imgs/Giraffe.png";
import elephant from "./Imgs/elephant.png";
import fox from "./Imgs/fox.png";
import hippo from "./Imgs/hippo.png";
import lion from "./Imgs/lion.png";
import monkey from "./Imgs/monkey.png";
import penguin from "./Imgs/penguin.jpg";
import rabbit from "./Imgs/rabbit.png";
import squirell from "./Imgs/squirell.png";
import tiger from "./Imgs/tiger.png";
import zebra from "./Imgs/zebra.png";


function App() {

  return (
    <div className="App">

    <h1>ANIMAL FACTS 🐤</h1>
      <div className="container">
        <Animal img = {crocodile} details= "They Are the Largest Reptiles on Earth."/>
        <Animal img = {giraffe} details= "A giraffe uses its head for fighting."/>
        <Animal img = {elephant} details= "Elephants Have “Fingers” on Their Trunk For Grasping."/>
        <Animal img = {fox} details= "Foxes can make over 40 different sounds."/>
        <Animal img = {hippo} details= "They Can Hold Their Breath for Up to Five Minutes"/>
        <Animal img = {lion} details= "A lion's roar can be heard five miles away."/>
        <Animal img = {monkey} details= "Europe has only one species of wild monkey."/>
        <Animal img = {penguin} details= "Penguins poop every 20 minutes."/>
        <Animal img = {rabbit} details= "Baby rabbits are called 'kittens'"/>
        <Animal img = {squirell} details= "A squirrel's front teeth never stop growing."/>
        <Animal img = {tiger} details= "Tigers live for about 25 years."/>
        <Animal img = {zebra} details= "White-colored stripes can be 18 degrees cooler than their dark counterparts."/>
      </div>
    </div>
  );
}

export default App;
