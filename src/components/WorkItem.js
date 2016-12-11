/**
 * Created by phathuy on 12/10/16.
 */
import React from 'react'
import moment from 'moment'

const WorkItem = ({workItemData}) => {

    const getWorkDates = () => {
        const startdate = moment(workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (workItemData.endDate !== '') {
            enddate = moment(workItemData.endDate).format('MMM, YYYY');
        } else {
            enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = workItemData.highlights.map((item, index) =>
        <li key={index}>{item}</li>
    )

    return (
        <div className="workItem">
            <h3>{workItemData.position}, <span>{workItemData.company}</span></h3>
            <p className="workDates">{getWorkDates()}</p>
            <p>{workItemData.summary}</p>
            <ul>{getHighlights}</ul>
        </div>
    )
}

export default WorkItem