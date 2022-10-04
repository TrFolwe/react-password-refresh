import React, {useState} from 'react';
import './HomePage.css';
import PasswordKeyManager from "../../utils/PasswordKeyManager";

function HomePage() {
    const [users, setUsers] = useState([]);

    function register(event) {
        event.preventDefault();
        let formData = {};
        for(let [key, value] of new FormData(event.currentTarget)) formData[key] = value;
        setUsers([formData, ...users]);
        alert(`${formData.email} registered.`)
    }

    function login(event) {
        event.preventDefault();
        let formData = {};
        for(let [key, value] of new FormData(event.currentTarget)) formData[key] = value;
        const {email, password} = formData;
        console.log(users.map(i => i.email));
        if(users.map(i => i.email).includes(email)) {
            if(users.find(i => i.email === email).password !== password) return alert("Şifre yanlış!");
            alert("Şifre kabul edildi\nHoşgeldin: "+email);
        }else {
            alert("Kullanıcı bulunamadı!");
            const resetKey = PasswordKeyManager.randomKey();
            PasswordKeyManager.addKey({
                'email': email,
                key: resetKey
            });
            console.log(PasswordKeyManager.getKey(resetKey));
            alert(`Şifre sıfırlama kodunuz: ${resetKey}`);
        }
    }

    return (
        <div className='homeContainer'>
            <div className='formContainer'>
                <h1 style={{textAlign: 'center'}}>Register</h1>
                <hr/>
                <form onSubmit={register} id='register' className='form'>
                    <div className="form-group">
                        <label>Email <span style={{color: 'red'}}>*</span></label>
                        <input name="email" type="email" className="form-control" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <label>Şifre <span style={{color: 'red'}}>*</span></label>
                        <input minLength='8' name="password" type="password" className="form-control" placeholder="Şifre" required/>
                    </div>
                    <button type="submit" className="btn btn-success">Kayıt ol</button>
                </form>
            </div>
            <div className='formContainer'>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <hr/>
                <form onSubmit={login} id='login' className='form'>
                    <div className="form-group">
                        <label>Email <span style={{color: 'red'}}>*</span></label>
                        <input name='email' type="email" className="form-control" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <label>Şifre <span style={{color: 'red'}}>*</span></label>
                        <input name='password' minLength='8' type="password" className="form-control" placeholder="Şifre" required/>
                    </div>
                    <button type="submit" className="btn btn-success">Giriş yap</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;