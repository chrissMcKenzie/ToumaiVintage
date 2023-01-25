import React from 'react'

import "./MenuGauche.css"
const MenuGauche = ()=> {
  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div id="MenuGauche" className="col-auto col-md-3 col-xl-2 px-sm-5 px-0">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Accueil</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Panier</span> </a>
                            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                                <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>1</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>2</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>3</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span>4</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                            <span className="d-none d-sm-inline mx-1">loser</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/Déconnexion">Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col py-3">
                Content area...
            </div>
        </div>
    </div>
  )
}

export default MenuGauche
