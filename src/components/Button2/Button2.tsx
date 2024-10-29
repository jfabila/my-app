interface Props {
  label: string;
  pMethod: () => void;
}

export const Button2 = ({ label, pMethod }: Props) => {
  return (
    <button
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      onClick={pMethod}
    >
      {label}
    </button>
  );
};
