import { Wrapper, Icon, Input, FormButton } from "./Searchbar.styled";



const Searchbar = ({ onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <FormButton type="submit">
        <Icon />
      </FormButton>
      
      <Input
        type="text"
        name="query"
        // value={value}
        // onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
}

export default Searchbar;
