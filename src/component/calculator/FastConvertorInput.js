import React, { Component } from 'react';
import { UserPreferences } from '../UserPreferences'


class FastConvertorInput extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.unitLangageName = this.unitLangageName.bind(this)
    }

    static contextType = UserPreferences;

    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }

    unitLangageName() {
        const { preferences } = this.context

        if (this.props.unit === "r") {
            return (<>{preferences === "Français" ? <>Génération de Résine</> : <> Resin Regeneration</>}</>)
        }
        if (this.props.unit === "t") {
            return (<>{preferences === "Français" ? <>Temps (en minutes)</> : <> Time (in minutes)</>}</>)
        }

        return (<>Unit name - Error</>)
    }

    render() {
        const value = this.props.value;

        return (
            <fieldset>
                <legend> {this.unitLangageName()}</legend>
                <input value={value} onChange={this.handleChange} type="number" />
            </fieldset>
        );
    }
}

export { FastConvertorInput }