import React, {useState} from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, totalWeight, ingredients }) => {
    const [list, setList] = useState(true);

      const toggleList=()=>{
       setList(!list)
      }

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <div className={style.recipeBox}>
                <img onClick={toggleList} className={style.image} src={image} />
                 <div className={list ? style.none : style.listBox}>
                    <ol className={style.list}>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    <p><span className={style.text}>Total weight: </span> {totalWeight.toFixed(0)}</p>
                    <p><span className={style.text}>Calories: </span> {calories.toFixed(0)}</p>
                </div>
            </div>
        </div>
    );
};

export default Recipe;