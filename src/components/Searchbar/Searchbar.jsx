import { Wrapper, Icon, Input } from "./Searchbar.styled";

const Searchbar = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <button type="submit">
        <Icon />
      </button>
      
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
}

export default Searchbar;
