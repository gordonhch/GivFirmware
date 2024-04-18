import Select, { Props } from 'react-select';


const InTableSelect: React.FC<Props> = (props) => {



    return (<Select
        options={props.options}
        placeholder={props.placeholder ?? "Select..."}
        unstyled={false}
        styles={{
            
            control: (baseStyles, state) => ({
                // ...baseStyles,
                borderColor: 'none' ,
                boxShadow: state.isFocused ? "" : "",
                ":focus-visible": { borderColor: 'red', },
                borderRadius: '0px',
                display: 'flex',
                height: '100%',
            }),
        }}
    />)
}
export default InTableSelect;