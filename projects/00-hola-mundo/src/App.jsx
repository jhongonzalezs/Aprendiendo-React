import {TwitterFollowCard} from './TwitterFollowCard.jsx'



export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="johnwick3774" name="Jhon Gonzalez" isFollowing />
            <TwitterFollowCard userName="FCBarcelona" name="FC Barcelona" isFollowing />
            <TwitterFollowCard userName="minutojuniorist" name="Minuto Juniorista" isFollowing />
            <TwitterFollowCard userName="ManjaroLinux" name="Linux Manjaro" isFollowing />
            <TwitterFollowCard userName="Activision" name="Activision" isFollowing={false} />
            <TwitterFollowCard></TwitterFollowCard>
        </section>
    )
}