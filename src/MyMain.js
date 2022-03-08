

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MyApp from "./MyApp";
import Expenses from "./routes/expenses.jsx";
import Invoices from "./routes/invoices.jsx";
import Contact from "./routes/contact.jsx";


export default function MyMain() {
    console.log("location ============= " + window.location.hash);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyApp />}>
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/contact" element={<Contact />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}