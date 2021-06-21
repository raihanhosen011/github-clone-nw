import Navs from "../../components/Navs";
import { UsersIcon,OfficeBuildingIcon,LocationMarkerIcon,GlobeAltIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Repos from '../../components/Repos'
import Followers from '../../components/Followers'
import Following from '../../components/Following'
import Overview from '../../components/Overview'

export default function index() {
  const router = useRouter()
  const pro = useSelector(stat => stat.search.profile)
  const repo = useSelector(stat => stat.search.repose)
  const followerss = useSelector(stat => stat.search.follower)
  const following = useSelector(stat => stat.search.following)
  const overview = useSelector(stat => stat.search.overview)
  
  const profile = pro[0]

  return (
    <div>
      {
        profile != false ? (
          <main className="home">
        <Navs />
        <div className="main-content px-3 d-grid grid-temp">

          <div className="profie me-4 d-flex flex-column">
            
            <div className='avatar mx-auto border overflow-hidden rounded-circle w-75' >
              <img src={profile?.avatar_url} width='100%' height='100%' />
            </div>

            <div className='more-info px-2' >

              <div className='names my-3' >
                <h5 className='mb-0' >{profile?.name == null ? profile?.login : profile?.name}</h5>
                <p className='mb-0 col-bl fs-14' >{profile?.login}</p>
              </div>

              <button className='btn border rounded text-center w-100 bg-light' >Follow</button>
              <p className="bio my-3" >{profile?.bio}</p>
              
              <div className='d-flex align-items-center' >
                <UsersIcon className='me-1 w-17 icon-col-bl' /> <p className='mb-0' > {profile?.followers} <span onClick={() => router.push('/follower')} className='pointer' >Follower</span> . {profile?.following} <span onClick={() => router.push('/following')} className='pointer'>Following</span></p>
              </div>

              <div className='user-info my-3' >
                {profile?.company && <div className='d-flex me-1 mb-1 fs-13 align-items-center' ><OfficeBuildingIcon className='me-1 w-17 icon-col-bl' /> <p className='mb-0' >{profile?.company}</p></div>}
                {profile?.location && <div className='d-flex me-1 mb-1 fs-13 align-items-center' ><LocationMarkerIcon className='me-1 w-17 icon-col-bl' /> <p className='mb-0' >{profile?.location}</p></div>}
                {profile?.twitter_username && <div className='d-flex me-1 mb-1 fs-13 align-items-center' ><GlobeAltIcon className='me-1 w-17 icon-col-bl' /> <p className='mb-0' ><a href={`https://www.twitter.com/${profile?.twitter_username}`} target='_blank' >{profile?.twitter_username}</a></p></div>}
              </div>

            </div>
          </div>

          <div className="repos align-self border rounded my-2 p-2">
             {router.query.repos == 'reposetory' && <Repos reposetory={repo} />}
             {router.query.repos == 'follower' && <Followers followers={followerss} />}
             {router.query.repos == 'following' && <Following following={following} />}
             {router.query.repos == 'overview' && <Overview overview={overview} />}
          </div>

        </div>
      </main>
        ) : (router.push('/'))
      }
    </div>
  )
}