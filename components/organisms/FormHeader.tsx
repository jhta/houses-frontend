import classnames from 'classnames';
import Router from 'next/router';

const FormHeaderButton = ({ isDisable, route, title }) => (
  <button
    className={classnames(
      'outline-none',
      { 'text-white font-bold text-2xl mx-2 text-shadow': isDisable },
      {
        'flex text-secondary  justify-center items-center bg-fourth rounded-full  m-2 px-4 p-1': !isDisable,
      }
    )}
    disabled={isDisable}
    onClick={(e) => {
      e.preventDefault();
      Router.push(route);
    }}
  >
    <label className="cursor-pointer">{title}</label>
  </button>
);

export const FormHeader = (props) => {
  const { centerTitle, rightTitle, leftTitle, srcImg, currentForm } = props;
  const isRegister = currentForm === 'register';
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-center">
        <img src={srcImg} alt="icon" className="mx-auto" />
        <h1 className="text-gray-2 font-bold text-2xl">{centerTitle}</h1>
        <div className="flex py-2 outline-none">
          <FormHeaderButton isDisable={isRegister} route="/session/register" title={leftTitle} />
          <strong className="text-primary text-3xl">|</strong>
          <FormHeaderButton isDisable={!isRegister} route="/session/login" title={rightTitle} />
        </div>
      </div>
    </div>
  );
};
