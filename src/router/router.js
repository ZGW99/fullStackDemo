import Login from "../components/Login";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Main from "../tabs/main";

const routers = [
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/home',
    element: <Main></Main>,
    children: [
      {
        path: '/home/first',
        element: <Page1></Page1>
      },
      {
        path: '/home/second',
        element: <Page2></Page2>
      },
      {
        path: '/home/third',
        element: <Page3></Page3>
      }
    ]
  },
]

export default routers; 