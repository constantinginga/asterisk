import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* if the user typed in the input anything, shrink label */}
      <input className="form-input" {...otherProps} />
      {/* if label exists, render the label */}
      {label && (
        <label
          htmlFor={otherProps.id}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
