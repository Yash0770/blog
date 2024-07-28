import React from 'react'
import appwritService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({
    $id,
    title,
    featuredImage
}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full w-100 bg-gray rounded p-4">
            <div className="w-full w-100 d-flex justify-content-center mb-4">
                <img src={appwritService.getFilePreview(featuredImage)} alt={title} className='rounded' />
            </div>
            <h2 className='font-bold text-xl'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard