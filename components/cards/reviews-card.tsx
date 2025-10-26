import Rating from "../general/Rating";

interface IReviewsCard {
  text: string;
}

function ReviewsCard({ text }: IReviewsCard) {
  return (
    <li className="space-y-2 border border-gray-300 rounded-xl p-3">
      <div className="flex items-center gap-3 text-gray-700">
        <span className="size-9 rounded-full bg-gray-400"></span>
        <div className="">
          <b>User11113687311626</b>
          <p className="font-medium truncate text-xs">4 days ago</p>
        </div>
      </div>
      <Rating />
      <p className="text-xs leading-normal line-clamp-3">{text}</p>
    </li>
  );
}

export default ReviewsCard;
