interface Props {
  label: string;
  variant?: 'primary' | 'secondary' | 'underlined';
  customStyles?: string;
}

const Button = ({ label, variant = 'primary', customStyles }: Props) => {
  const styles = {
    primary: 'bg-white text-lightRed rounded-full',
    underlined: 'border-2 border-white rounded-full text-white',
    secondary: 'text-white',
  };

  return (
    <button
      className={`flex items-center justify-center font-bold text-lg whitespace-nowrap md:text-xl px-4 py-2 md:px-6 md:py-3 lg:px-12 lg:py-4 ${styles[variant]} ${customStyles}`}
    >
      {label}
    </button>
  );
};

export default Button;
