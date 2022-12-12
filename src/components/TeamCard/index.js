// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails
  return (
    <Link className="team-link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
