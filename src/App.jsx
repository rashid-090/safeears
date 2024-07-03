import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  // useNavigate,
} from "react-router-dom";
import {Header,Footer} from './components';


const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about-us"));
const Shop = lazy(() => import("./pages/shop"));
const Testimonial = lazy(() => import("./pages/testimonials"));
const Terms = lazy(() => import("./pages/termsandconditions"));
const PrivacyPage = lazy(() => import("./pages/privacy"));
const OurVideos = lazy(() => import("./pages/video"));



const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '*';
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="2xl:max-w-[1800px] mx-auto min-h-screen flex justify-between flex-col">
      {!hideHeaderFooter  &&<Header/>}
        <Outlet />
        {!hideHeaderFooter  &&<Footer/>}
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <div className='h-[60vh] w-full overflow-hidden grid place-items-center capitalize animate-pulse'>page not found</div>
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Home/>
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Shop/>
          </Suspense>
        ),
      },
      {
        path: "/testimonials",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Testimonial/>
          </Suspense>
        ),
      },
      
      {
        path: "/terms-and-conditions",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Terms/>
          </Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <PrivacyPage/>
          </Suspense>
        ),
      },
      {
        path: "/our-videos",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <OurVideos/>
          </Suspense>
        ),
      },
      
      
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
