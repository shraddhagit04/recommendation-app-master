import React from 'react';
import { useState } from 'react';
import AppUser from '../models/AppUser';

const SignIn = () => {

    const [appUser, setAppUser] = useState(new AppUser());

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        if (appUser.userName === "Sonu" && appUser.password === "Sonu") {
            alert(`SignIn for ${appUser.userName} is successful!`);
            setAppUser({ userName: '', password: '', role: '' });
        }
        else {
            alert(`SignIn failed for ${appUser.userName}!`);
            setAppUser({ userName: '', password: '', role: '' });
        }
        event.preventDefault();
    }

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Sign In Component</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Sign In</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                               
                                <option value="USER">USER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary mb-3"
                            value="Sign In"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default SignIn;




// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppUser from '../models/AppUser';

// const SignIn = () => {

//     const [appUser, setAppUser] = useState(new AppUser());

//     const handleAppUser = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitAppUser = (event) => {
//         if (appUser.userName === "Priya" && appUser.password === "Priya") {
//             alert(`SignIn for ${appUser.userName} is successful!`);
//             setAppUser({ userName: '', password: '', role: '' });
//         }
//         else {
//             alert(`SignIn failed for ${appUser.userName}!`);
//             setAppUser({ userName: '', password: '', role: '' });
//         }
//         event.preventDefault();
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary py-3">SignIn Component</p>
//             <hr />
//             <div className="col-3 mt-3 py-3 shadow bg-white" >
//                 <h1 className="lead text-primary pb-2">SignIn</h1>
//                 <form className="form form-group form-dark " onSubmit={submitAppUser}>
//                     <div>
//                         <input
//                             type="text"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={appUser.userName}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={appUser.password}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <div class="form-group">
//                             <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
//                                 <option value="Role">Select a role</option>
//                                 <option value="ADMIN">ADMIN</option>
//                                 <option value="EMPLOYEE">USER</option>
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-outline-primary mb-3"
//                             value="signIn"
//                             onClick={submitAppUser}
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="py-3 ">
//                 <Link to="/register" className="btn btn-outline-primary col-3">You can also Sign Up</Link>
//             </div>
//         </div >
//     )
// }
// export default SignIn;


// // import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppUser from '../models/AppUser';

// const SignIn = () => {

//     const [appUser, setAppUser] = useState(new AppUser());

//     const handleAppUser = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitAppUser = (event) => {
//         console.log(appUser);
//         axios.post('http://localhost:9988/user/sign-in', appUser)
//             .then((response) => {
//                 alert(`SignIn successful for ${response.data.userName}!`);
//             })
//             .catch((error) => {
//                 alert(`Something is wrong ${error.message}!`);
//             });
//         event.preventDefault();
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary py-3">SignIn</p>
//             <hr />
//             <div className="col-3 mt-3 py-3 shadow bg-white" >
//                 <h1 className="lead text-primary pb-2">SignIn</h1>
//                 <form className="form form-group form-dark " onSubmit={submitAppUser}>
//                     <div>
//                         <input
//                             type="text"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={appUser.userName}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={appUser.password}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <div class="form-group">
//                             <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
//                                 <option value="Role">Select a role</option>
//                                 <option value="ADMIN">ADMIN</option>
//                                 <option value="USER">USER</option>
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-outline-primary"
//                             value="SignIn"
//                             onClick={submitAppUser}
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="py-3 ">
//                 <Link to="/register" className="btn btn-outline-primary col-3">You can also Sign Up</Link>
//             </div>
//         </div >
//     )
// }
// export default SignIn;