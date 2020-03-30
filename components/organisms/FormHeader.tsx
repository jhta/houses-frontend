import classnames from 'classnames';
import Router from 'next/router';

export const FormHeader = (props) => {
  const { centerTitle, rightTitle, leftTitle, srcImg, currentForm, setIsCurrentForm } = props;
  const isRegister = currentForm === 'register';
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-center">
        <img src={srcImg} alt="icon" className="mx-auto" />
        <h1 className="text-gray-2 font-bold text-2xl">{centerTitle}</h1>
        <div className="flex py-2 outline-none">
          <button
            className={classnames(
              'outline-none',
              { 'text-white font-bold text-2xl mx-2': isRegister },
              {
                'flex text-secondary mx-2 w-20 justify-center items-center bg-fourth rounded-full h-8 my-2 mx-2': !isRegister,
              }
            )}
            disabled={isRegister}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/session/register');
            }}
          >
            <label className="cursor-pointer">{leftTitle}</label>
          </button>
          <strong className="text-primary text-3xl">|</strong>
          <button
            className={classnames(
              'outline-none',
              { 'text-white font-bold text-2xl mx-2': !isRegister },
              {
                'flex text-secondary mx-2 w-24 justify-center items-center bg-fourth rounded-full h-8 my-2 mx-2': isRegister,
              }
            )}
            disabled={!isRegister}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/session/login');
            }}
          >
            <label className="cursor-pointer">{rightTitle}</label>
          </button>
        </div>
      </div>
    </div>
  );
};
