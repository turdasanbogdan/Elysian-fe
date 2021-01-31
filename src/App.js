import './App.css';
import { useEffect, useState } from 'react';
import Pharmacy from './components/pharmacy';
import axios from 'axios';
import TextInput from 'react-autocomplete-input';


function App() {

  const [pharmacies, setPharmacies] = useState([]);
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState(0);

  const getPharmasByCity = (city) => {
    const url = `http://localhost:8080/pharmacies/city/${city}`;
    axios
      .get(url)
      .then(response => {
        setPharmacies(response.data);
        console.log(response.data);
      },
      (error) => { console.log(error); })
    
  }

  const getPharmasForDrug = (drug) => {
    const url = `http://localhost:8080/stocks/${drug}`;
    axios
      .get(url)
      .then(response => {
        setPharmacies(response.data);
        console.log(response.data);
      })
    
  }

  const findDrugQuantityByCity = (drug) => {

    const url = `http://localhost:8080/stocks/${city}/${drug}`;
    axios
      .get(url)
      .then(response => {
        setQuantity(response.data);
        console.log(city);
        console.log(quantity);
        console.log(response.data);
      })
    
  }

  // useEffect(getPharmasByCity,[]);
  // useEffect(getPharmasForDrug,[]);

  return (

      <div style = {{ textAlign: 'center' }}>

          <h1>Enter city to find all pharmacies from here</h1>
            <input list = "cities"
              type = "text"
              onChange = { e => getPharmasByCity(e.target.value)}
            />
            <datalist id ="cities">
              <option value="Bucuresti"/>
              <option value="Cluj"/>
              <option value="Iasi"/>
              <option value="Timisoara"/>
            </datalist>  
       <hr style= {{ width: '100%' }}></hr>   
       <h1>Enter Drug to find all pharmacies that had it on stock</h1>
            <input 
              list = "drugs"
              type = "text"
              onChange = { e => getPharmasForDrug(e.target.value)}
            />
             <datalist id ="drugs">
              <option value="Olaflur"/>
              <option value="Clorhexidina"/>
              <option value="Alle gel"/>
              <option value="Fenol"/>
              <option value="Adrenalina Terapia"/>
              <option value="Calciu"/>
            </datalist>  
       <hr style= {{ width: '100%' }}></hr>   
       <h1>Enter Drug and City to find the quantity in the city</h1>
            <input 
              list = "cities"
              type = "text"
              onChange = { e => setCity(e.target.value)}
            />
             <datalist id ="cities">
              <option value="Bucuresti"/>
              <option value="Cluj"/>
              <option value="Iasi"/>
              <option value="Timisoara"/>
            </datalist>  
             <input 
              list = "drugs"
              type = "text"
              onChange = { e => findDrugQuantityByCity(e.target.value)}
            />
              <datalist id ="drugs">
              <option value="Olaflur"/>
              <option value="Clorhexidina"/>
              <option value="Alle gel"/>
              <option value="Fenol"/>
              <option value="Adrenalina Terapia"/>
              <option value="Calciu"/>
            </datalist>  
              <p>{quantity === 0 ? 'No qunatity to display' : quantity}</p>
  
       <hr style= {{ width: '100%' }}></hr>   
        
        <Pharmacy pharmacies = {pharmacies}/>
      </div>  
 
);
}

export default App;
