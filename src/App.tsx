import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import Loader from './components/common/Loader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Contact = lazy(() => import('./pages/Contact'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NewsEvents = lazy(() => import('./pages/NewsEvents'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "doctors", element: <Doctors /> },
      { path: "facilities", element: <Facilities /> },
      { path: "contact", element: <Contact /> },
      { path: "appointment", element: <Appointment /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:id", element: <BlogPost /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-of-service", element: <TermsOfService /> },
      { path: "news-events", element: <NewsEvents /> },
      { path: "gallery", element: <Gallery /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "*", element: <div className="pt-32 text-center h-screen">Page Coming Soon</div> },
    ],
  },
]);

export default function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}
