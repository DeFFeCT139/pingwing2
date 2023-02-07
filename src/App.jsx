import Loader from "./components/loader/loader";
import Pingwing from "./components/site/pingwing";

function App() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            document.getElementById('loader').classList.add('loaderPasiv')
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none'
                document.getElementById('root').classList.remove('root')
            }, 300);
        }, 1500);
    return(
        <div className="app">
            <Loader/>
            <Pingwing/>
        </div>
    )
}

export default App;