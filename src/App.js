import './App.css';
import React from 'react';

const PRODUCTS = [
    {Name:"Tiger Nixon",Position:"System Architect",Office:"Edinburgh",age:61,Start_date:"2011/04/25",salary:"$320,800"},
    {Name:"Airi Satou",Position:"Accountant",Office:"Tokyo",age:33,Start_date:"2008/11/28",salary:"$162,700"},
    {Name:"Garrett Winters",Position:"Junior Technical Author",Office:"Tokyo",age:63,Start_date:"2011/07/25",salary:"$170,750"},
    {Name:"Ashton Cox",Position:"Senior Javascript Developer",Office:"Edinburgh",age:22,Start_date:"2012/03/29",salary:"$433,060"},
    {Name:"Cedric Kelly",Position:"Accountant",Office:"Tokyo",age:33,Start_date:"2008/11/28",salary:"$162,700"},
    {Name:"Brielle Williamson",Position:"Integration Specialist",Office:"TNew York",age:61,Start_date:"2012/12/02",salary:"$372,000"},
    {Name:"Herrod Chandler",Position:"Sales Assistant",Office:"San Francisco",age:55,Start_date:"2012/08/06",salary:"$137,500"},
    {Name:"Rhona Davidson",Position:"Integration Specialist",Office:"Tokyo",age:33,Start_date:"2010/10/14",salary:"$327,900"},
    {Name:"Colleen Hurst",Position:"Javascript Developer",Office:"San Francisco",age:39,Start_date:"2009/09/15",salary:"$205,500"},
    {Name:"Rhona Davidson",Position:"Software Engineer",Office:"Edinburgh",age:23,Start_date:"2010/10/14",salary:"$327,900"},
]

const PRODUCTS2 = [
    {Name:"Quinn Flynn",Position:"Support Lead",Office:"Edinburgh",age:22,Start_date:"2013/03/03",salary:"$342,000"},
    {Name:"Charde Marshall",Position:"Regional Director",Office:"San Francisco",age:36,Start_date:"2008/10/16",salary:"$470,600"},
    {Name:"Haley Kennedy",Position:"Senior Marketing Designer",Office:"London",age:43,Start_date:"2012/12/18",salary:"$500,600"},
    {Name:"Tatyana Fitzpatrick",Position:"Regional Director",Office:"London",age:19,Start_date:"2010/03/17",salary:"$385,750"},
    {Name:"Michael Silva",Position:"Marketing Designer",Office:"London",age:33,Start_date:"2012/11/27",salary:"$198,500"},
    {Name:"Paul Byrd",Position:"Chief Financial Officer (CFO)",Office:"New York",age:59,Start_date:"2010/06/09",salary:"$725,000"},
    {Name:"Gloria Little",Position:"Systems Administrator",Office:"New York",age:33,Start_date:"2009/04/10",salary:"$237,500"},
    {Name:"Bradley Greer",Position:"Software Engineer",Office:"London",age:33,Start_date:"2012/10/13",salary:"$132,000"}
    
]
   
function ProductRow ({product}){
    return <tr>
    <td>{product.Name}</td>
    <td>{product.Position}</td>
    <td>{product.Office}</td>
    <td>{product.age}</td>
    <td>{product.Start_date}</td>
    <td>{product.salary}</td>
</tr>
}
function ProductCategoryRow ({category}){
    return <tr>
        <th colSpan='6'>{category}</th>
    </tr>
}

function ProductTable ({products}){
    const rows =[];
    let lastCategory = null;
    products.forEach(product =>{
        if(product.category !== lastCategory){
            lastCategory = product.category ;
            rows.push(<ProductCategoryRow category={product.category}/>)
        }
        rows.push(<ProductRow product={product}/>)
    })
    return (
        <table className='table'>
             <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </thead>
        <tbody>
            {rows}
        </tbody>
        </table>
       
    );
}
class FilterableProductTable extends React.Component {
    render(){
        const{products}=this.props;
        return <ProductTable products={products}/>
    }
}


function App(){
    return ( 
        <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Layouts
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="login.html">Login</a>
                                            <a class="nav-link" href="register.html">Register</a>
                                            <a class="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                            <FilterableProductTable products={PRODUCTS}/>
                            </div>
                            
                                     
                        </div>
                    </div>
                
                    </main>
                    </div>
           
        </div>
    </body>

    )
}

export default App;
