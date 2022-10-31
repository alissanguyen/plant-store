import * as React from 'react';

interface Props {

}

const BlogPage: React.FC<Props> = ({ }) => {
 return (
 <div className='px-[10%] my-12 custom:my-20'>
    <span className="font-semibold text-4xl sm:text-6xl md:text-7xl sm:mb-5">Plant Care Blog</span>
 </div>
 )
}

export default BlogPage