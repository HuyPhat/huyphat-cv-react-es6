/**
 * Created by phathuy on 12/10/16.
 */
import React from 'react'
import WorkItem from './WorkItem'


const Work = ({workData}) => {

    return (
        <section className="work">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
            {workData.map((val, index) => <WorkItem key={index} workItemData={val}/>)}
        </section>
    )
}

export default Work