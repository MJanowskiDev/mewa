type Props = {
  type: HTMLInputElement['type'];
  id: string;
  label: string;
  placeholder?: string;
};

export const Input = ({ type, id, label, placeholder }: Props) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      placeholder={placeholder}
      style={{
        border: '1px solid black',
        borderRadius: '4px',
        margin: '8px',
        padding: '2px 4px',
      }}
      id={id}
      type={type}
    />
  </div>
);
