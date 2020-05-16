import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

export default class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '15572473-14106c42610c161ecd4aaab5d',
        images: []
    }
    onTextChange = (e) => {
        const { searchText, amount, apiKey, apiUrl, images } = this.state;
        this.setState({ [e.target.name] : e.target.value} , () => {
            axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount} `)
            .then((res) => {
                this.setState({images: res.data.hits});
            }
            )
        })

    }
    onAmountChange = (e, i, value) => {
        this.setState({amount: value});

    }

    render() {
        const { searchText, amount, apiKey, apiUrl, images } = this.state;

        return (
            <>
                <TextField
                    name="searchText"
                    floatingLabelText="Search for images"
                    value={searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="̀5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={50} primaryText="50"/>
                </SelectField>
            </>
        )
    }
}
