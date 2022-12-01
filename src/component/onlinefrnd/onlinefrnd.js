import React from 'react'
import "./onlinefrnd.scss"
import {users} from "../../dummyData"

function Onlinefrnd() {
  return (
    <div>
       <div className="online">
                    <h3>Online frinds</h3>
                    <div className="frndlist py-1 ">
                        
                      {users.filter(statuss=>statuss.status===ononline).map((o)=>(
                        <>
                        <div className="d-flex align-items-center pt-1">
                            <div className="position-relative">
                                <img src={require("../../asset/images/person/"+o.profilePicture)} alt="" className="position-relative" />
                                <p className="online-icon position-absolute"></p>
                            </div>
                            <h4 className="ps-1">{o.userName}</h4>
                        </div>
                        </>
                      ))}
                    </div>
                </div>
    </div>
  )
}

export default Onlinefrnd
