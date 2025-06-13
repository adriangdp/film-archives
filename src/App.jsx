import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useCredentials } from './stores/authStore'
import { useEffect } from 'react'



import MainLayout from './layout/main-layout'
import IndexPage from './pages'
import Redirect from './pages/redirect'
import FilmDetails from './pages/film-details'
import PersonDetails from './pages/person-details'
import UserLists from './pages/user-lists'
import About from './pages/about'
import NotFound from './pages/404'


import '@styles/main.style.css'
import ListDetails from './pages/list-details'


const queryClient = new QueryClient();

const router= createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<IndexPage />
      },
      {
        path:'redirect',
        element:<Redirect />
      },
      {
        path:'/films/:filmId',
        element:<FilmDetails />
      },
      {
        path:'/user',
        children:[
          {
            path:'lists',
            element:<UserLists />,
          },
          {
            path:'lists/:listId',
            element:<ListDetails />
          }
        ]       
      },
      {
        path:'/people/:personId',
        element:<PersonDetails />
      },
      {
        path:'/about',
        element:<About />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
const App =()=> {

  useEffect(()=>{
    useCredentials.getState().getValidSession();

    const interval = setInterval(()=>{
      useCredentials.getState().getValidSession();
    }, 60 * 1000)

    return ()=>{
      clearInterval(interval)
    }
  },[])
  
  return (
   <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
   
  )
}

export default App
