
import Login from '../routes/login/Login'
import UserList from '../routes/form/UserList'
import UploadImages from '../routes/upload/UploadImages';
 const menu = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/UserList',
        component: UserList
    },
    {
        path: '/UploadImages',
        component: UploadImages
    }
]
export default menu;