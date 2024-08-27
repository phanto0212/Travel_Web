import HomePages from "../pages/HomePages/HomPages";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Order from "../pages/OrderPages/OderPages";
import SignIn from "../pages/SignInPages/SignIn";
import Signup from "../pages/SignupPages/Signup";
import TourDetail from "../pages/TourDetailPages/TourDetail";
import ToursPages from "../pages/ToursPages/ToursPages";

export const routes = [
    {
        path : '/',
        page : HomePages,
        isShowHeader : true
    },
    {
        path : '/tours',
        page : ToursPages,
        isShowHeader : true
    },
    {
        path : '/order',
        page : Order,
        isShowHeader : true
    },
    {
        path : '/sign-up',
        page : Signup,
        isShowHeader : false
    },
    {
        path : '/sign-in',
        page : SignIn,
        isShowHeader : false
    },
    // {
    //     path : '/tour-detail/',
    //     page : TourDetail,
    //     isShowHeader : true
    // },
    
    {
        path : '*',
        page : NotFoundPage
        
    }

]
