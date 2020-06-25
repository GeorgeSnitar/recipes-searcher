import React from 'react';
import style from './AppImage.module.css';
const AppImage = () => {
    return (
        <div className={style.recipesImageBox}>
            <img src={require('../../assets/image.png')}/>
        </div>
    );
}

export default AppImage;
