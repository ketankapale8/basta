import {useRouter} from 'next/router'

function profileInformation(){
    const router = useRouter()
    const profileInformation = router.query.profileinfo
    return  <h1>Data doesnt match with desired query {profileInformation}</h1>
    


}

export default profileInformation