import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import {Logo} from "./components/logo/Logo";
import {SearchGroup} from "./components/search-group/SearchGroup";
import {Link} from "react-router-dom";

export const Header = () => {

    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        setIsLogged(!!localStorage.getItem("accesstoken"))
    })
    return (
        <header className={styles.header}>
            <div className={cn('container', styles.container)}>
                <Logo/>
                <Link to={'/films'}><span style={{color: 'white'}}>Catalog</span></Link>
                <Link to={'/best-films'}><span style={{color: 'white'}}>Top 250</span></Link>
                <Link to={'/await-films'}><span style={{color: 'white'}}>Incoming movie</span></Link>
                <Link to={'/popular-films'}><span style={{color: 'white'}}>Popular</span></Link>
                <Link to={'/Login'}><span style={{color: 'white', display: isLogged ? "" : "none"}} onClick={e => {
                    localStorage.removeItem("accesstoken")
                    setIsLogged(false)
                }}>Log out</span></Link>
                {/*<Link to={'/Login'}><button style={{color: 'white', display: isLogged ? "" : "none"}}>Log in</button></Link>*/}
                <SearchGroup/>
            </div>
        </header>
    );
}
