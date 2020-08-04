import React from 'react';
import { Link } from 'react-router-dom';
import '../css/siedbarsmalllink.css'

const SiedbarSmallLink = ({ Icon, title, href, selected }) => {
    return(
        <Link to={href} className={`siedbar__smallLink ${selected && 'selected'}`}>
          <Icon className="siedbar__icon"/>  {title}
        </Link>
    )
}

export default SiedbarSmallLink;