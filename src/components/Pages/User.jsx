import {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import { getUserAndRepos } from '../../context/github/GithubActions'
import { FaCode, FaStore, FaUserFriends, FaUsers, FaArrowCircleLeft, FaGithub } from 'react-icons/fa'
import Spinner from '../shared/Spinner'
import RepoList from '../repos/RepoList'
import {ACTIONS} from '../../reducers/GithubReducer'

const User = () => {

    const {user, isLoading, repos, dispatch} = useContext(GithubContext)

    const params = useParams()

    useEffect(() =>{
        dispatch({type: ACTIONS.LOADING_TRUE})
        const fetchUserData = async () =>{
            const userData = await getUserAndRepos(params.login)
            dispatch({type: ACTIONS.GET_USER_AND_REPOS, payload: userData}) 
        }
        fetchUserData()
    }, [params.login, dispatch]);
        
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user

    if(isLoading) return <Spinner />

    return (<>
        <div className='w-full mx-auto lg:w-10/12'>
            {/* back btn */}
            <div className='mb-6'>
                <Link to='/' className='btn btn-ghost pl-0'>
                    <span className='mr-2'><FaArrowCircleLeft /></span>Back To Search
                </Link>
            </div>

            {/* PROFILE TOP GRID */}
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>

                {/* avatar */}
                <div className='custom-card-image mb-6 md:mb-0'>
                    <div className='rounded-lg shadow-xl card image-full'>
                        <figure>
                            <img src={avatar_url} alt='avatar' />
                        </figure>
                        <div className='card-body h-fit mt-auto'>
                            <h2 className='card-title mb-0'>{name}</h2>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>

                {/* Profile user details */}
                <div className='col-span-2'>
                    <div className='mb-6'>
                        <h1 className='text-3xl card-title'>
                            {name}
                            <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                            {hireable && (
                                <div className='mx-1 badge badge-info'>Hireable</div>
                            )}
                        </h1>
                        <p>{bio}</p>
                        <div className='mt-4 card-actions'>
                            <a
                                href={html_url}
                                target='_blank'
                                rel='noreferrer'
                                className='btn btn-outline'
                            >
                                <span className='mr-2'>
                                    <FaGithub size="1.5em"/></span>Visit Github Profile
                            </a>
                        </div>
                    </div>
                    <div className='w-full lg:w-fit rounded-lg shadow-md bg-base-100 stats stats-vertical lg:stats-horizontal'>
                            {/* if user has a locaton */}
                            {location && (
                                <div className="stat">
                                    <div className="stat-title">Location</div>
                                    <div className="stat-value text-lg">{location}</div>
                                </div>
                            )}
                            {/* if user has a website */}
                            {blog && (
                                <div className="stat">
                                    <div className="stat-title">Website</div>
                                    <div className="stat-value text-lg">
                                        <a
                                            href={blog.startsWith('http') ? blog : 'https://' + blog}
                                            target='_blank' rel='noreferrer'
                                            className="hover:text-primary">
                                            {blog}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {/* if user has a twitter */}
                            {twitter_username && (
                                <div className="stat">
                                    <div className="stat-title">Twitter</div>
                                    <div className="stat-value text-lg">
                                        <a
                                            href={`https://twitter.com/${twitter_username}`}
                                            target='_blank'
                                            rel='noreferrer'
                                            className="hover:text-primary"
                                        >
                                            {twitter_username}
                                        </a>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>

            {/* GITHUB STATS */}
            <div className='w-full stats stats-vertical lg:stats-horizontal mb-6 rounded-lg shadow-md bg-base-100'>
                    {/* followers */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title">Followers</div>
                        <div className="stat-value">
                            {followers}
                        </div>
                    </div>
                    {/* following */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title">Following</div>
                        <div className="stat-value">
                            {following}
                        </div>
                    </div>
                    {/* public Repos */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCode className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title">Public Repos</div>
                        <div className="stat-value">
                            {public_repos}
                        </div>
                    </div>
                    {/* public gists */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title">Public Gists</div>
                        <div className="stat-value">
                            {public_gists}
                        </div>
                    </div>
            </div>

            {/* USER REPOS */}
            <RepoList repos={repos}/>
        </div>
    </>);
}
 
export default User;