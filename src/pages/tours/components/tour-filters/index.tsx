import { Input, Select, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { inputSearchStyles, selectStyles } from '../../tours.styles.ts';
import { TourFiltersLogicProps, useTourFiltersLogic } from './hooks/useTourFiltersLogic.tsx';
import { useTranslation } from 'react-i18next';
const { Option } = Select;

const TourFilters = ({ handleSearch, handleSort }: TourFiltersLogicProps) => {
  const { t } = useTranslation('tours');
  const { searchTerm, sort, handleSearchChange, handleSortChange } = useTourFiltersLogic({
    handleSearch,
    handleSort,
  });

  return (
    <Row gutter={[16, 16]} justify="space-between" align="middle" className="mb-12">
      <Col xs={24} sm={12} md={8}>
        <Input
          prefix={<SearchOutlined />}
          placeholder={t("tours-search-placeholder")}
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          allowClear
          className={inputSearchStyles()}
        />
      </Col>

      <Col xs={24} sm={12} md={6} className="flex justify-end">
        <Select value={sort} onChange={handleSortChange} className={selectStyles()}>
          <Option value="none">{t('non-selected')}</Option>
          <Option value="price">{t('sort-by-price')}</Option>
          <Option value="date">{t('sort-by-date')}</Option> 
        </Select>
      </Col>
    </Row>
  );
};

export default TourFilters;
