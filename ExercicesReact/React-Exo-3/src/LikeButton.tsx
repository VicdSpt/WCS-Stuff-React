import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState<number>(50);
  const [liked, setLiked] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleLike = () => {
    setProcessing(true);
    setTimeout(() => {
      if (liked) {
        setLikes((prev) => prev - 1);
      } else {
        setLikes((prev) => prev + 1);
      }
      setLiked((prev) => !prev);
      setProcessing(false);
    }, 1000);
  };
  return (
    <div>
      <button onClick={handleLike} disabled={processing}>
        {processing ? "..." : liked ? "❤️" : "🤍"} {likes}
      </button>
    </div>
  );
}
