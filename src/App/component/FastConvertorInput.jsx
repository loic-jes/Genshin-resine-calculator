class FastConvertorInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {value : ""};
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(e) {
        this.props.onValueChange(e.target.value);

    }

    render() {
        const value = this.props.value;
        const unit = this.props.unit;

        return (
            <fieldset>
                <legend> {unitNames[unit]}</legend>
                <input value={value} onChange={this.handleChange} type="number"/>
            </fieldset>
        );
    }















}