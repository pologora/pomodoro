import './OptionsForm.style.css';
import { Color, Color as backgroundColor } from '../../enums/Enums';

type OptionsFormProps = {
  color: Color;
};

const OptionsForm = ({ color }: OptionsFormProps) => {
  const handleSubmitClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const buttonFontColor = (color: Color) => {
    switch (color) {
      case Color.Color1:
        return '#fff';

      default:
        return 'black';
    }
  };

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='form__title'></div>
        <div className='form__time-selector'></div>
        <div className='form__font-selector'></div>
        <div className='form__color-selector'></div>
        <button
          type='submit'
          className='form__submit-button'
          onClick={handleSubmitClick}
          style={{ backgroundColor: color, color: `${buttonFontColor(color)}` }}
        >
          Apply
        </button>
      </form>
    </div>
  );
};
export default OptionsForm;
