import NoFound from '../components/NoFound'

export default function Followers({following}) {
  return (
    <>
        { following.length !== 0 ? (
          following?.map(follow => <>
            <div className='d-flex py-2 align-items-center border-bottom' >
              <div className='avatar overflow-hidden border w-40 rounded-circle m-2' >
                <img src={follow.avatar_url} height='100%' width='100%' />
              </div>
              <div className='info' >
                <a href={follow.html_url} target='_blank' className='mb-0 repo-title blue fs-14 pointer' >{follow.login}</a>
              </div>
            </div>
          </>)
        ) : (
          <NoFound name='Following' />
        )}
    </>
  );
}
