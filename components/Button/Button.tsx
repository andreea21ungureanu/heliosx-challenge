export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
