import { BellIcon,PlusIcon,BadgeCheckIcon } from '@heroicons/react/outline'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {getPro,getOver,getFollwer,getFo,getOv} from '../slices/search'

export default function Header() {
  const input = useRef()
  const router = useRouter()
  const [search,setSearch] = useState()
  const [getFollwers,setGetFollwers] = useState(null)
  const [getFollwing,setGetFollwing] = useState(null)
  const [getOverview,setGetOverview] = useState(null)
  const [getRepos,setGetRepos] = useState(null)
  const [getProfile,setGetProfile] = useState(null)
  const dispatch = useDispatch()

  const getSearch = (e) => {
    e.preventDefault()
    getData()
    getRepo()
    getFollowers()
    getFollowing()
    getOvervi()
    if (router.pathname == '/') {router.push('/overview')}
  }

  const getData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json()
      if (data.message === "Not Found") {
        setGetProfile(false);
      } else {
        setGetProfile(data);
      }

    } catch (error) {
      setGetProfile(null);
    }
  }

  const getRepo = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}/repos`);
      const data = await res.json();
      setGetRepos(data);
    } catch {
      setGetRepos(null);
    }
  }

  const getFollowers = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}/followers`)
      const data = await res.json();
      setGetFollwers(data);
    } catch {
      setGetFollwers(null);
    }
  };

  const getFollowing = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}/following`)
      const data = await res.json();
      setGetFollwing(data);
    } catch {
      setGetFollwing(null);
    }
  };

  const getOvervi = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}/repos?per_page=8&sort=asc`)
      const data = await res.json();
      setGetOverview(data);
    } catch {
      setGetOverview(null);
    }
  };

  getProfile && dispatch(getPro(getProfile))
  getRepos && dispatch(getOver(getRepos))
  getFollwers && dispatch(getFollwer(getFollwers))
  getFollwing && dispatch(getFo(getFollwing))
  getOverview && dispatch(getOv(getOverview))

  return (
    <>
      <div className="header main-bg" >
        <div className='header-top d-flex justify-content-between align-items-center container py-2' >
          
          <div className='header-left d-flex align-items-center' >
            <img onClick={() => router.push('/')} className='me-3 pointer' src='https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png' width='30px' />

            <form onSubmit={getSearch} >
              <input 
                ref={input}
                className='input' 
                type='text' 
                placeholder='Search or jump to...' 
                onChange={() => setSearch(input.current.value)}
                value={search}
              />              
            </form>

          </div>

          <div className='header-right' >
            <BellIcon className='w-20 me-2 color icon-hov' />
            <PlusIcon className='w-20 me-2 color icon-hov' />
            <BadgeCheckIcon className='w-20 color icon-hov' />
          </div>

        </div>
      </div>
    </>
  );
}