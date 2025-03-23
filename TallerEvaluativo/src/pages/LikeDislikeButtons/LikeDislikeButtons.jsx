import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Main } from "../../Layouts/Main/Main"

export const LikeDislikeButtons = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  return (
    <Main>
<div className="flex space-x-4">
      
      <button onClick={() => setLikes(likes + 1)}className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all"><ThumbsUp size={20} /><span>{likes}</span></button>

      
      <button onClick={() => setDislikes(dislikes + 1)}className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all"><ThumbsDown size={20} /><span>{dislikes}</span></button>
    </div>
    </Main>
      
  )
}
