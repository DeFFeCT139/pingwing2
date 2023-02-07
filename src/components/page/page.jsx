import { Route, Routes } from "react-router-dom";
import Paralax from "../site/paralax/paralx";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error404";
import Portfolio from "./pages/portfolio";

function Page({languageContent}) {
    return(
        <div id="page" className="page">
                <Routes>
                        <Route  path="/" element={<Paralax languageContent={languageContent}/>}/>
                        <Route path="/contact" element={<Contact languageContent={languageContent}/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                </Routes>
        </div>
    )
}

export default Page;