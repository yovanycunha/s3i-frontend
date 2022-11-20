import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

import style from './Form.module.scss';

const Form = () => {
  return (
    <form className={style.form}>
      <Input name="Tema Anual" placeholder="Tema Anual" />
      <Input name="Objetivo" placeholder="Objetivo" />
      <Input name="Atividades" placeholder="Atividades" />

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default Form;
