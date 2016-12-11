import React  from 'react'
import Profile from './Profile'
import About from './About'
import Work from './Work'
import Skills from './Skills'
import Education from './Education'

const App = ({cvjson}) => {
    const profileData = cvjson.basics
    const aboutData = profileData.summary
    const workData = cvjson.work
    const skillsData = cvjson.skills
    const eduData = cvjson.education
    return (
        <div className="container">
            <div className="row">
                <aside className="col-md-4">
                    <div className="inner">
                        <Profile profileData={profileData}/>
                    </div>
                </aside>
                <main className="col-md-8">
                    <div className="inner">
                        <About aboutData={aboutData}/>
                        <Work workData={workData} />
                        <Skills skillsData={skillsData} />
                        <Education eduData={eduData} />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
