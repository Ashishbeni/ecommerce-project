import style from "../AdminPanel/Home.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminHome() {
  const navigate = useNavigate();

  //Redirect to login page to unauthorized users.
  useEffect(()=>{
    const isLogin = localStorage.getItem("adminLogin");
    if(!isLogin){
      navigate("/login");
    }
  },[]);

  
//Manage logout flow.
  const handleLogout = ()=>{
  localStorage.removeItem("adminLogin");
  alert("Logout Successfully");
  navigate("/login");
}

  return(
    <div className={style.formContainer}>

      <div className={style.sideBar}>
        <ul>

          <li  className={style.menuItems}>
               <Link to="/admin/add-product">
                  Add Product
                </Link>
            <ul className={style.subMenu}>
              <li>All Products</li>
            </ul>
          </li>

        </ul>
        <button id={style.logOut} onClick={handleLogout}>
                Logout
        </button>
      </div>

    </div>
  )
}

export default AdminHome;
