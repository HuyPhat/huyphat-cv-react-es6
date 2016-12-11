/**
 * Created by phathuy on 12/10/16.
 */
import React from 'react'

const Skills = ({skillsData}) => {
    return (
        <section className="skills">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
            <ul className="skills-list list-inline">{skillsData[0].keywords.map((item, index) =>
                <li key={index}><span className="label label-success">{item}</span></li>
            )}</ul>
        </section>
    )
}

export default Skills