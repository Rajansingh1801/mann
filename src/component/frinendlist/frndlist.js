import React from 'react'
import "./frndlist.scss"
import "../../dummyData"
import { users } from '../../dummyData'
function Frndlist() {
  return (
    <div>
      <div className="frnd">
      <div className="friendlist">
                    <ul>
                    {users.map((u)=>(
                        <>
                        <li>
                            <img src={require("../../asset/images/person/"+u.profilePicture)} alt="" className="img-fluid" />
                            <span>{u.userName}</span>
                        </li>
                        </>
                    ))}
                    </ul>
                </div>
      </div>
    </div>
  )
}

export default Frndlist
