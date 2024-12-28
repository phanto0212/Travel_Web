import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/request";
import CartComponent from "../../components/CartComponent/CartComponent";
import { useEffect, useState } from "react";
function SearchPage() {
    const [tours, setTours] = useState([]);
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const location = useLocation();
    // Phân tích query string từ URL
    const queryParams = new URLSearchParams(location.search);
    const searchKey = queryParams.get('key'); // Lấy giá trị của 'key'
  
    const fetchTour = async (key) => {
      try {
        const response = await newRequest.post("/api/tours/get/tour/by/key", { key: key });
        setTours(response.data.tours || []);
        setError(null); // Xóa lỗi nếu API thành công
      } catch (error) {
        console.log(error);
        setError("Không thể tải danh sách phim. Vui lòng thử lại!");
      }
    };
    useEffect(() => {
      window.scrollTo(0, 0); // Cuộn về đầu trang
    }, []);
  
    useEffect(() => {
      if (searchKey) {
        fetchTour(searchKey);
      } else {
        setTours([]); // Nếu không có từ khóa, danh sách phim rỗng
      }
    }, [searchKey]);
  
    return (
      <>
      <div style={{ padding: '0 120px', backgroundColor: '#fff', height: '4000px', marginTop: '91.5px' }}>
        <div style={{ marginTop: '60px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '25px' }}>
          {error && <div style={{ color: "red", margin: "20px 0" }}>{error}</div>}
          {tours.length === 0 && !error && (
            <div style={{ color: "black", textAlign: "center", marginTop: "20px" }}>
              Không tìm thấy tour nào với từ khóa "{searchKey}".
            </div>
          )}
           <div>
          {tours.length !== 0 && !error && (
            <div style={{ color: "black", textAlign: "center", marginTop: "20px" }}>
              Có {tours.length} kết quả cho từ khóa: "{searchKey}".
            </div>
          )}
          <div style={{marginTop: '20px',  display: 'flex',flexWrap: 'wrap', alignItems: 'center', gap: '25px'}} >
               {tours.map((tour, index) => (
                    <CartComponent key={index} tour={tour} onClick={()=>Navigate(`/tour-detail/${tour.tourId}`)} />
                ))}
               </div>
          </div>
        </div>
      </div>
      </>
     
    );
  }
  
  export default SearchPage;