import HomePages from "../pages/HomePages/HomPages";
import LoginGoogle from "../pages/LoginGoogle/LoginGoogle";
import NewPages from "../pages/NewPages/NewPages";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Order from "../pages/OrderPages/OderPages";
import SearchPage from "../pages/Searchpage/SearchPage";
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
    {
        path : '/signin-google',
        page : LoginGoogle,
        isShowHeader : false
    },
    // {
    //     path : '/tour-detail/',
    //     page : TourDetail,
    //     isShowHeader : true
    // },
    {
         path: '/news',
         page: NewPages,
         isShowHeader: true
    },
    {
        path: '/search',
        page: SearchPage,
        isShowHeader: true
   },

    {
        path : '*',
        page : NotFoundPage
        
    }

]
