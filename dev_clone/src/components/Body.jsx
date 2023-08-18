import {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import RightSideBar from './RightSideBar'
import BodyCard from './BodyCard'
import BodyNavigation from './BodyNavigation'
import BlogCard from './BlogCard'

import { PostService } from '../service/PostService'

const Body = ({nav, setNav}) => {

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    setPosts(PostService.getPostsData())
  },[])

  console.log(posts)

  return (
    <>
    <section className='py-[90px] max-h-screen w-full px-8 md:px-0 xl:w-[80%] mx-auto relative'>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:px-5">
            <div className="md:col-span-2 max-h-screen w-full">
                <Sidebar nav={nav} setNav={setNav}/>
            </div>

            <div className="col-span-4 w-full">
            <BodyNavigation />
             <BodyCard />
             {posts.map((post) => 
             <div className='' key={post.id}>
                <BlogCard post={post} />
             </div>
             )}
             
            </div>
            <div className="col-span-2  hidden lg:block">
                <RightSideBar />
            </div>
        </div>
    </section>
    </>
  )
}

export default Body