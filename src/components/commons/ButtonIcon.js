/**
 * @param {props.icon} the icon inside the button
 * @param {props.alt} the alt description of the button
 * @returns Renders a button component
 */
function ButtonIcon({ icon, alt }) {
  return (
    <button
      type="button"
      className="bg-white w-16 h-16 flex items-center justify-center rounded-md">
      <img src={icon} alt={alt} />
    </button>
  );
}

export default ButtonIcon;
