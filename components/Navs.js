import { BookOpenIcon,BookmarkAltIcon,UsersIcon,RssIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'

export default function Navs() {
  const router = useRouter()
  const repo = useSelector(stat => stat.search.repose)
  
  return (
    <>
      <div className="navs">
        <div className='navs-content pt-3 pb-2 border-bottom d-flex justify-content-center' >
          <p onClick={() => router.push('/overview')} href='/' className='fs-13 me-4 pointer mb-0' ><BookOpenIcon className='me-1 w-17 icon-col-bl' /> Overview </p>
          <p onClick={() => router.push('/reposetory')} href='/' className='fs-13 me-4 pointer mb-0' ><BookmarkAltIcon className='me-1 w-17 icon-col-bl' /> Reposetory <span >{repo?.length}</span> </p>
          <p onClick={() => router.push('/follower')} href='/' className='fs-13 me-4 pointer mb-0' ><UsersIcon className='me-1 w-17 icon-col-bl' /> Followers </p>
          <p onClick={() => router.push('/following')} href='/' className='fs-13 me-4 pointer mb-0' ><RssIcon className='me-1 w-17 icon-col-bl' /> Following </p>
        </div>
      </div>
    </>
  )
}