import React from 'react';
import SiedbarLink from './SiedbarLink';
import { useVideoContext } from '../context/VideoContext';
import '../css/siedbar.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SiedbarSmallLink from './SiedbarSmallLink';

const Siedbar = () => {

    const [{ toggleSiedbar } , dispatch] = useVideoContext();

    console.log(toggleSiedbar);

    return(
        <div className={!toggleSiedbar ? 'siedbar siedbar--scrollBar' : 'siedbar'} style={{flex: !toggleSiedbar ? '0.2' : '0.05', overflow: toggleSiedbar ?? 'hidden'}}>
            {!toggleSiedbar ? 
                <>
                <SiedbarLink Icon={ HomeIcon } title={'Główna'} href={'/'} selected/>
                <SiedbarLink Icon={ WhatshotIcon } title={'Na czasie'} href={'/'}/>
                <SiedbarLink Icon={ SubscriptionsIcon } title={'Subskrypcje'} href={'/'}/>
                <hr />
                <SiedbarLink Icon={ VideoLibraryIcon } title={'Biblioteka'} href={'/'}/>
                <SiedbarLink Icon={ HistoryIcon } title={'Historia'} href={'/'}/>
                <SiedbarLink Icon={ SlideshowIcon } title={'Twoje filmy'} href={'/'}/>
                <SiedbarLink Icon={ WatchLaterIcon } title={'Do obejrzenia'} href={'/'}/>
                <SiedbarLink Icon={ ThumbUpAltIcon } title={'Filmy, które mi się po...'} href={'/'}/>
                <hr />
                <h4>Więcej z youtube</h4>
                <SiedbarLink Icon={ SettingsIcon } title={'YouTube Premium'} href={'/'}/>
                <SiedbarLink Icon={ TheatersIcon } title={'Filmy'} href={'/'}/>
                <SiedbarLink Icon={ SportsEsportsIcon } title={'Gry'} href={'/'}/>
                <SiedbarLink Icon={ WatchLaterIcon } title={'Na żywo'} href={'/'}/>
                <hr />
                <SiedbarLink Icon={ YouTubeIcon } title={'Ustawienia'} href={'/'}/>
                <SiedbarLink Icon={ FlagIcon } title={'Historia raportów'} href={'/'}/>
                <SiedbarLink Icon={ HelpIcon } title={'Pomoc'} href={'/'}/>
                <SiedbarLink Icon={ LiveHelpIcon } title={'Prześlij opinię'} href={'/'}/>
                <hr />
            </> : 
            <>
                <SiedbarSmallLink Icon={ HomeIcon } title={'Główna'} href={'/'} selected/>
                <SiedbarSmallLink Icon={ WhatshotIcon } title={'Na czasie'} href={'/'}/>
                <SiedbarSmallLink Icon={ SubscriptionsIcon } title={'Subskrypcje'} href={'/'}/>
                <SiedbarSmallLink Icon={ VideoLibraryIcon } title={'Biblioteka'} href={'/'}/>
            </>}
        </div>
    )
}

export default Siedbar;