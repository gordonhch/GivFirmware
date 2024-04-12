import Select, { Props } from 'react-select';


const ReactSelect: React.FC<Props> = (props) => {



    return (<Select
        options={props.options}
        unstyled={false}
        styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'none' : '#F1F2F3',
                boxShadow: state.isFocused ? "0px 4px 32px 4px rgba(31,65,116,0.02), 0px 4px 4px 0 rgba(27,87,131,0.04)" : "0px 4px 32px 4px rgba(31,65,116,0.02), 0px 4px 4px 0 rgba(27,87,131,0.04)",
                ":focus-visible": { borderColor: 'red',boxShadow: "0px 4px 32px 4px rgba(31,65,116,0.02), 0px 4px 4px 0 rgba(27,87,131,0.04)", },
            }),
        }}
    />)
}
export default ReactSelect;