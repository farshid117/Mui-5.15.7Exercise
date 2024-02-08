import Main from './Main';
import { AutocompleteTest, ButtonTest } from './component';

export let routes = [
    {
        path: '/', element: <Main />
    },
    {
        path: '/input/autocomplete', element: <AutocompleteTest />
    },
    {
        path: '/input/button', element: <ButtonTest />
    },
    /*todo Nested Route */
 /*    {
        path: '/rrd',
        element: <MainCourse />,
        children: [

            { path: 'courses', element: <Courses /> },
            { path: 'courses/:courseId', element: <CourseDetail /> },
            {
                path: 'about', element: <About />,
                children: [
                    { path: 'dashboard', element: <Dashboard /> },
                    { path: 'setting', element: <Setting /> },
                ]
            },
            { path: 'login', element: <LoginForm /> },
            { path: 'users', element: <Users /> },
            {
                path: '*', element: <PrivateRoute />,
                children: [
                    { path: "panel", element: <Panel /> },
                    { path: "ali", element: <p className='fw-bold mt-5 text-center text-light'>پسر خوب یه مسیر درست وارد کن</p> },
                ]
            },
        ]
    }, */

]

