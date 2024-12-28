import { useEffect } from "react";
import OrderComponent from "../../components/OrderComponent/OrderComponent";

function Order() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn về đầu trang
      }, []);
    return ( <div style={{padding: '0 300px'}}>
        <OrderComponent />
    </div> );
}

export default Order;