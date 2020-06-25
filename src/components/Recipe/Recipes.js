import React from 'react';
import Recipe from './Recipe';
import '../../App.css';

const Recipes =( {recipes}) => {
    const data = Array.from(recipes);
    return (
        <div className='recipes'>
          {data.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              totalWeight={recipe.recipe.totalWeight} />
          ))}
        </div>
    );
}

export default Recipes;
