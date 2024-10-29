import "../../button.css";

interface Props {
  label: string;
  pMethod: () => void;
}

export const Button = ({ label, pMethod }: Props) => {
  return (
    <button className="custom-button" onClick={pMethod}>
      {label}
    </button>
  );
};
