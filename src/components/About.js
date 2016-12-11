/**
 * Created by phathuy on 12/10/16.
 */
import React from 'react'

const About = ({aboutData}) => {
    console.log(aboutData)
    return (
        <section className="about">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i>About</h2>
            <div>{aboutData}</div>
        </section>
    )
}

export default About