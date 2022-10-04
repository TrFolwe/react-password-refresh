import {useParams} from "react-router-dom";
import PasswordKeyManager from "../../utils/PasswordKeyManager";
import {useEffect} from "react";

export default function PasswordReset() {
    const {key} = useParams();

    useEffect(() => {
        console.log(PasswordKeyManager.getKeys())
    }, []);

    return (
        <>
        <div className="ResetContainer">
            <h2 style={{position: 'absolute', left: '50%', top: '50%', transform: "translate(-50%, -50%)"}}>{PasswordKeyManager.isKey(key) ? `Şifreniz başarıyla sıfırlandı<br>Email: ${PasswordKeyManager.getKey(key).email}` : "Kod geçerli değil!"}</h2>
        </div>
        </>
    )
}