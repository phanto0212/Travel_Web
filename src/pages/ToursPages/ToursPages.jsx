import { Col, Pagination, Row } from "antd";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CartComponent from "../../components/CartComponent/CartComponent";
import { useEffect, useState } from "react";
import newRequest from "../../utils/request";
import { useNavigate } from "react-router-dom";
import ImageNoProduct from '../../assets/images/no-tour.webp';

function ToursPages() {
    const navigate = useNavigate();
    const [tours, setTours] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ text: null, price: null });
    const pageSize = 20; // Số lượng sản phẩm trên mỗi trang
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn về đầu trang
      }, []);
    const handleClick = (tourId) => {
        navigate(`/tour-detail/${tourId}`);
    };

    const fetchTours = async (filters) => {
        try {
            const response = await newRequest.get('/api/tours/get/all', {
                params: {
                    text: filters.text,
                    price: filters.price
                }
            });

            setTours(response.data.tours || []);
            setTotal(response.data.total || 0);

        } catch (error) {
            console.error('Failed to fetch tours:', error);
        }
    };

    useEffect(() => {
        fetchTours(filters);
    }, [filters]);

    const onChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div style={{ marginTop: '100px', padding: '50px 25px' }}>
            <Row>
                <Col span={4}>
                    <NavbarComponent onFilterChange={handleFilterChange} />
                </Col>
                <Col span={20}>
                    {tours.length > 0 ? (
                        <>
                            <Row gutter={[16, 16]}>
                                {tours.map((tour, index) => (
                                    <Col key={index} span={6.5}>
                                        <CartComponent tour={tour} onClick={() => handleClick(tour.tourId)} />
                                    </Col>
                                ))}
                            </Row>
                            <Pagination
                                showQuickJumper
                                current={currentPage}
                                pageSize={pageSize}
                                total={total}
                                onChange={onChange}
                                style={{ margin: '30px 0 20px 350px' }}
                            />
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', marginRight:'100px' }}>
                            <img src={ImageNoProduct} alt="No tours available" style={{ maxWidth: '500px', height: 'auto' }} />
                            <p>Hiện tại không có tour nào phù hợp với bộ lọc của bạn.</p>
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default ToursPages;
