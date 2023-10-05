interface Props {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-4 py-4 px-7 font-montserrat text-lg rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : `bg-coral-red text-white border-coral-red`
      }
      ${fullWidth && `w-full`}
    `}
    >
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow right icon" />}
    </button>
  );
};

export default Button;
