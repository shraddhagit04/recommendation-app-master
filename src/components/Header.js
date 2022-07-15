import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><Link to="/home" >BookLook</Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/BookData" >Book Data</Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/SignIn" >Sign In</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/SignUp" >Sign Up</Link></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Horror</a>
          <a class="dropdown-item" href="#">Romance</a>
          <a class="dropdown-item" href="#">Thriller</a>
        </div>
      </li>
    </ul>
  </div>
  <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <div class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">Search Your Book</div>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</nav>


    );
}            

export default Header;

// import { Link } from 'react-router-dom';

// const Header = () => {

//     return (
//         <div>
//             <div>
//                 <Link to="/" >
//                        <img height='30px' src='https://i.pinimg.com/originals/34/e1/56/34e156f3d3c9a9222c9e725b17abbf13.jpg' alt='App Logo' />
//                 </Link>
//                 <Link to="/home" >Home</Link>
//                 <Link to="/bookdata" >Book Data</Link>
//                 <Link to="/signIn" >Sign In</Link>
//                 <Link to="/signUp" >Sign Up</Link>
//                 <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Category
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Romance</a>
//           <a class="dropdown-item" href="#">Horror</a>
//          </div>
//           </li>
//             </div>
//             </div>

        
//     );
// }

// export default Header;


