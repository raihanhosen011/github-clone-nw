import { StarIcon,ShareIcon } from '@heroicons/react/outline'
import NoFound from './NoFound'

export default function Repos({reposetory}) {
    return (
        <>
         <div>
          {
            reposetory.length !== 0 ? (
              reposetory?.map(repos => 
                <div className='reposetory mb-1 pt-3 d-flex p-1 border-bottom' >
                  <div className='left' >
                    <a href={repos.html_url} target='_blank' className='mb-0 repo-title blue fs-18 pointer text-clamp-1' >{repos.name}</a>
                    <p className='mb-4 fs-14 text-clamp-1' >{repos.description}</p>
                    <div className=' d-flex pb-3 align-items-center' >
                      
                      {
                        repos.language && <div className='leng fs-13 align-items-center d-flex me-3' >
                          <div className='leng-col me-1' />{repos.language}</div>
                      }
                      
                      {
                        repos.stargazers_count > 0 && <div className='d-flex fs-13 me-3 align-items-center' >
                        <StarIcon className='w-17 me-1' />{repos.stargazers_count}</div>
                      }
                      
                      {
                      repos.forks_count > 0 && <div className='d-flex me-3 fs-13 align-items-center' >
                        <ShareIcon className='w-17 me-1' />
                        {repos.forks_count}
                      </div>
                      }

                      <p className='mb-0 fs-13' >
                        updated {new Date(repos.pushed_at).getDay()} day ago
                      </p>

                    </div>
                  </div>
                  <div className='right' >

                  </div>
                </div>)
            ) : (
              <NoFound name='Reposetory' />
            )
          }
          </div>
        </>
    )
}
