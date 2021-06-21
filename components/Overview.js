import { StarIcon,ShareIcon,BookmarkAltIcon } from '@heroicons/react/outline'
import NoFound from './NoFound'

export default function Overview({ overview }) {
    
    return (
        <>
         <div className='d-grid temp' >
          {
            overview.length !== 0 ? (
                overview?.map(over => 
                <div className='reposetory m-2 d-flex p-1 ps-2 border rounded' >
                  <div className='left' >

                    <div  className='d-flex me-3 mb-1 fs-13 align-items-center' >
                      <BookmarkAltIcon  className='w-17 col-bl me-1' />  
                      <a href={over.html_url} target='_blank' className='mb-0 repo-title blue fs-14 pointer text-clamp-1' >{over.name}</a>
                    </div>

                    <p className='mb-3 fs-14 text-clamp-1' >{over.description}</p>
                    <div className=' d-flex pb-1 align-items-center' >
                      
                      {
                        over.language && <div className='leng fs-13 align-items-center d-flex me-3' >
                          <div className='leng-col me-1' />{over.language}</div>
                      }
                      
                      {
                        over.stargazers_count > 0 && <div className='d-flex fs-13 me-3 align-items-center' >
                        <StarIcon className='w-17 me-1' />{over.stargazers_count}</div>
                      }
                      
                      {
                      over.forks_count > 0 && <div className='d-flex me-3 fs-13 align-items-center' >
                        <ShareIcon className='w-17 me-1' />
                        {over.forks_count}
                      </div>
                      }

                    </div>
                  </div>
                  <div className='right' >

                  </div>
                </div>)
            ) : (
              <NoFound name='Overview' />
            )
          }
          </div>
        </>
    )
}
