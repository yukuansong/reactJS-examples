
import {Link, Outlet} from "react-router-dom";


export default function MyApp() {
    return (
        <div>
            <h1>Bookkeeper!</h1>

            <nav
                style={{
                    borderBottom: "solid 10px",
                    paddingBottom: "10rem",
                    borderTop: "solid 5px",
                    paddingTop: "5rem"
                }}
            >
                 <Outlet />
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link> |{" "}

                <a href="/contact"
                    onClick={event => {
                        event.preveentDefault();
                        Window.history.pushState({}, undefined, "/contact");
                        // console.log("location ============= " + window.location.pathname);
                    }}
                >Contact</a>

               
            </nav>
        </div>
    );
    
}