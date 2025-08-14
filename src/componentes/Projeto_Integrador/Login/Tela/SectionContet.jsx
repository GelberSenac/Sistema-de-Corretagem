
import LogoPrincipalField from '../Campos/Field/LogoPrincipalField.jsx';
import TextoPrincipalField from '../Campos/Field/TextoPrincipalField.jsx';
import FormLogin from '../Campos/Forms/FormLogin.jsx';

import CriarNovaConta from '../Campos/Field/CriarNovaContaField.jsx';


 
function SectionContet() {
  return (
    <section className="content">
        <LogoPrincipalField />
        <TextoPrincipalField />
        <FormLogin />
        <CriarNovaConta />

    </section>
  );
}
export default SectionContet;