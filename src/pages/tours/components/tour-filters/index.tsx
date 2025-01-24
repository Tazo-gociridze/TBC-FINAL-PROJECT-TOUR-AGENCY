import { Input, Select, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { inputSearchStyles, selectStyles } from '../../tours.styles.ts';
import { TourFiltersLogicProps, useTourFiltersLogic } from './hooks/useTourFiltersLogic.tsx';
const { Option } = Select;

const TourFilters = ({ handleSearch, handleSort }: TourFiltersLogicProps) => {
  const { searchTerm, sort, handleSearchChange, handleSortChange } = useTourFiltersLogic({
    handleSearch,
    handleSort,
  });

  return (
    <Row gutter={[16, 16]} justify="space-between" align="middle" className="mb-12">
      <Col xs={24} sm={12} md={8}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search for a tour..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          allowClear
          className={inputSearchStyles()}
        />
      </Col>

      <Col xs={24} sm={12} md={6} className="flex justify-end">
        <Select value={sort} onChange={handleSortChange} className={selectStyles()}>
          <Option value="none">Non selected</Option>
          <Option value="price">Sort by Price</Option>
          <Option value="date">Sort by Date</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default TourFilters;
