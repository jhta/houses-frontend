import styled from 'styled-components';
import classnames from 'classnames';

export const ToggleSwitch = (props) => {
  const { children, isChecked, onChange, className, isGrow } = props;
  return (
    <div
      className={`flex w-full ${classnames(
        { ' items-center justify-center ': !isGrow },
        { 'my-2': isGrow }
      )} ${className}`}
    >
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <CheckboxToggle onChange={onChange} checked={isChecked} id="toogleA" type="checkbox" className="hidden" />
          <div className="toggle__line w-10 h-6 bg-gray-3 rounded-full shadow-inner"></div>
          <ToogleDot className="toggle__dot absolute w-6 h-6 border-solid border border-primary bg-white rounded-full shadow inset-y-0 left-0"></ToogleDot>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{children}</div>
      </label>
    </div>
  );
};

const ToogleDot = styled.div`
  top: 0;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
`;

const CheckboxToggle = styled.input`
  :checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: #fff;
  }
`;
