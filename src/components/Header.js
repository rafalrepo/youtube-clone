import React from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import '../css/header.css';
import { useVideoContext } from '../context/VideoContext';

function Header() {

    const [{ toggleSiedbar } , dispatch] = useVideoContext();

    const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

    return (
        <header className="header">
            <div className="header__brand">
                <button className="header__siedbarBtn" onClick={() => dispatch({ type: 'TOGGLE_SIEDBAR'})}>
                    <MenuSharpIcon className="header__icon"/>
                </button>
                <img src={logoUrl} />
            </div>
            <div className="header__search">
                <input type="text" placeholder="Szukaj"/>
                <button>
                    <SearchIcon className="header__searchIcon"/>
                </button>
            </div>
            <div className="header__icons">
                <VideoCallRoundedIcon className="header__icon"/>
                <AppsRoundedIcon className="header__icon"/>
                <NotificationsSharpIcon className="header__icon"/>
                <Avatar />
            </div>
        </header>
    )
}

export default Header
