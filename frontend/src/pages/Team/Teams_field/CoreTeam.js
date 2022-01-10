import React, { useContext, useEffect,useState } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'



function CoreTeam() {
    const context = useContext(apiContext)
    const {coreTeam, data, getAllData, getAttribute,getAllTeamData ,teams } = context
    let attribute = "teams"
    useEffect(() => {
        // getAttribute(attribute)
        // getAllData();
        getAllTeamData();
    }, [teams])
    return (
            <div id="CoreTeam" className="Field_view">
            {coreTeam &&
                coreTeam.map((teams) => {
                    return <MemberCard
                    key={teams._id}
                     team={teams}
                />
                })
            }
        </div>
    )}

export default CoreTeam

