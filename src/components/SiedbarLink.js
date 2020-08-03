import React from 'react';
import { Link } from 'react-router-dom';
import '../css/siedbarlink.css'


const SiedbarLink = ( { Icon, title, href, selected } ) => {

    return(
        <Link to={href} className={`siedbar__link ${selected && 'selected'}`}>
          <Icon className="siedbar__icon"/>  {title}
        </Link>
    )
}

export default SiedbarLink;
