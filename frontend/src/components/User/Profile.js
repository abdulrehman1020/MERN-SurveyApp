import React from 'react'
import { useGetDetailQuery } from '../../redux/user'


const Profile = () => {
    const {responseInfo} = useGetDetailQuery()
    // const { data } = responseInfo
    // const nav = useNavigate();
    // console.log(data)
    // console.log(responseInfo)
  return (
    <div>Profile</div>
  )
}

export default Profile