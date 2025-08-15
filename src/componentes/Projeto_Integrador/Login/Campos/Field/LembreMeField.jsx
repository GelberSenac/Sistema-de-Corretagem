import MeLembreInput from '../Inputs/LembreMeInpuy.jsx';
function Lembreme() {
  return (

    <div className="content-a">
        <label className="remember-me">
            <MeLembreInput />
        <span>Lembre-me</span>
        </label>
        <a href="#" className="forgot-password">Esqueci minha senha</a>
    </div>

  )
}
export default Lembreme;