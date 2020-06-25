import React, { useState, useEffect } from 'react';
import Recipe from '../src/components/Recipe/Recipe';
import Header from '../src/components/Header/Header'
import Recipes from '../src/components/Recipe/Recipes';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AppImage from '../src/components/AppImage/AppImage';

const App = () => {

  const APP_ID = "a40ae522";
  const APP_KEY = "a62f0c129cab9b801eb0298e3c157a0f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header getSearch={getSearch} search={search} updateSearch={updateSearch} />

        <div className="app-wrapper-content">
          <Route exact path="/" component={AppImage} />
          <Route path="/recipe">
            <div className='recipes'>
              {recipes.map(recipe => (
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  totalWeight={recipe.recipe.totalWeight}
                 />
              ))}
            </div>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


{/* <div className='recipes'>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              totalWeight={recipe.recipe.totalWeight} />
          ))}
        </div> */}