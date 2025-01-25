import { fetchSpecificTour } from "@/api/tours/specific-tour";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Card, Typography, Image, Spin, Space, Descriptions, Alert } from "antd";

const { Title, Paragraph, Text } = Typography;

const TourDetails = () => {
  const { tourId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetch-specific-tour", tourId],
    queryFn: () => fetchSpecificTour(tourId as string),
    enabled: !!tourId,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert
          message="Error"
          description="Failed to load tour details. Please try again later."
          type="error"
          showIcon
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert
          message="Not Found"
          description="The requested tour was not found."
          type="warning"
          showIcon
        />
      </div>
    );
  }

  const { created_at, description, end_date, image_url, price, start_date, title } = data;

  return (

    <div className="flex justify-centeritems-center w-full h-screen bg-gray-100 rounded-2xl shadow-lg">
      <Card className="rounded-2xl overflow-hidden flex justify-center items-center">
        <div className="flex flex-col md:flex-row shadow-lg">

          <div className="w-full  md:w-1/2 h-1/2 md:h-full">
            <Image
              src={`${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}${image_url}`}
              alt={title}
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              fallback="https://via.placeholder.com/800x600?text=Image+Not+Available"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
            <Space direction="vertical" size="large" className="w-full">
              <Title level={2}>{title}</Title>
              <Text type="secondary">
                Created At: {new Date(created_at).toLocaleDateString()}
              </Text>
              <Paragraph>{description}</Paragraph>
              <Descriptions bordered column={1} size="small">
                <Descriptions.Item label="Price">${price}</Descriptions.Item>
                <Descriptions.Item label="Start Date">
                  {new Date(start_date).toLocaleDateString()}
                </Descriptions.Item>
                <Descriptions.Item label="End Date">
                  {new Date(end_date).toLocaleDateString()}
                </Descriptions.Item>
              </Descriptions>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TourDetails;

