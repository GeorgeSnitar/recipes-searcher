import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ updateSearch, getSearch, search }) => {
    return (
        <div>
            <header className={style.header}>
                <div className={style.headerBox}>
                    <NavLink to="/"><h1>HOME</h1></NavLink>

                    <form className={style.searchForm} onSubmit={getSearch}>
                    <NavLink to="/recipe"><input className={style.searchBar} type="text" value={search} placeholder="Write here some ingredient ..." onChange={updateSearch} /></NavLink>
                        <button className={style.searchButton} type="submit"><NavLink to="/recipe">Search</NavLink></button>
                    </form>
                </div>
                <div className={style.titleBox}><h1 className={style.title}>"Choose your recipe"</h1></div>
            </header>
        </div>
    );
}

export default Header;
