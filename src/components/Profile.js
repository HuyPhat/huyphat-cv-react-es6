/**
 * Created by phathuy on 12/10/16.
 */
import React from 'react'

const Profile = (props) => {
    const json = props.profileData
    return (
        <div>
            <div className="profileImg">
                <img role="presentation" className="img-circle center-block" width="200" src={json.picture}/>
            </div>
            <h1 className="text-center">{json.name}</h1>
            <h2 className="text-center">{json.label}</h2>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links text-center">
                <li><i className="fa fa-lg fa-location-arrow"/>{json.location.city}, {json.location.countryCode}</li>
                <li><i className="fa fa-lg fa-envelope"/><a href={"mailto:" + json.email}>{json.email}</a></li>
            </ul>
            <div className="divider"></div>
            <ul className="profileLinks list-inline text-center">
                <li><a className="fa fa-github fa-2x" href={'https://github.com/'+json.profiles[1].username}></a></li>
            </ul>
            <div className="divider"></div>
            <p>I built this CV with <a href="https://facebook.github.io/react/">React</a> UI library and a css framework <a href="http://getbootstrap.com/">Bootstrap</a>, use icons from <a href="http://fontawesome.io/icons/">FontAwesome</a>, and build by <a href="https://webpack.github.io/">Webpack</a>. The full source code can be found in <a href="https://github.com/HuyPhat">my Github repo</a>.</p>
        </div>
    )
}

export default Profile