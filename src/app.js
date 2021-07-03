import Welcome from '~/pages/welcome/welcome';
import '~/styles/columns.css';

function App()
{
    return(
        <div>
            <div className="col-3"> </div>
            <div className="col-6">
                <Welcome />
            </div>
            <div className="col-3"> </div>
        </div>
    );
};

export default App;
