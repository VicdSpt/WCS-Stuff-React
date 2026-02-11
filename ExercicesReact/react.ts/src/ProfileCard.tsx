import {useProfile} from "./ProfileContext"
import Card from "./Card"


function ProfileCard() {
    const {username} = useProfile()
  return (
    <div>
      <Card title={username} variant={username ? "success" : "warning"}>
        <p>{username ? `WELCOME, ${username}` : "No username set"}</p>
      </Card>
    </div>
  )
}

export default ProfileCard
