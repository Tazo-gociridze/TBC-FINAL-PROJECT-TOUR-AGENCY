import { TourData } from "@/api/tours/tours-data";
import { cardMetaStyles } from "@/pages/tours/tours.styles";
import { formatDate } from "@/utils/FormatDate/FormatDate";
import { Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";


const TourCardDescription:FC<{ tour: TourData }>  = ({tour}) => {
    const {id, title, description, start_date, end_date, price} = tour
  return (
    <Link to={`/tours/${id}`}>
    <Card.Meta
      title={
        <h3 className="text-lg font-medium text-gray-800 sm:text-2xl sm:font-semibold dark:text-white">
          {title}
        </h3>
      }
      description={
        <div>
          <p className="line-clamp-2 text-[12px] text-gray-700 sm:line-clamp-3 sm:text-base dark:text-gray-300">
            {description}
          </p>
          <div className="mt-3">
            <p className="text-sm font-semibold text-yellow-500 sm:text-lg">{`Price: $${price}`}</p>
            {start_date && (
              <p className="text-[11px] text-gray-600 sm:text-lg dark:text-gray-400">
                Start Date: {formatDate(start_date)}
              </p>
            )}
            {end_date && (
              <p className="mb-5 text-[11px] text-gray-600 sm:text-lg dark:text-gray-400">
                End Date: {formatDate(end_date)}
              </p>
            )}
          </div>
        </div>
      }
      className={cardMetaStyles()}
    />
  </Link>
  )
};

export default TourCardDescription;
