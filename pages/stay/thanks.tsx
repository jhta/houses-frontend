import Router from 'next/router';
import { H1, FormButton } from '../../components/atoms';

const ThankYouPage = () => (
  <div className="flex justify-center items-center py-4 h-screen session-gradient">
    <div className="bg-white rounded-lg p-16 flex flex-col items-center">
      <H1>Gracias por dar hospedaje</H1>
      <p>El registro de tu información ha quedado guardado con éxito.</p>
      <FormButton
        action={() => {
          Router.push('/');
        }}
      >
        Continuar
      </FormButton>
    </div>
  </div>
);

export default ThankYouPage;
