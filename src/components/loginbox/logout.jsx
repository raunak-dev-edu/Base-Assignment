import {GoogleLogout} from 'react-google-login';

const clientId = '160843245016-0i9muulevmqigfrqabvtca2bbvi2laiq.apps.googleusercontent.com'

const Logout = () => {
    const onSuccess = () => {
        alert('Logout made successfully');
    };
    
    return (
        <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
        </div>
    );
    }

export default Logout;