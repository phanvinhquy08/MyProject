import React, { useState } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

import ImageResults from '../ImageResults/ImageResults';

const FindImg = () => {
    const [amount, setAmount] = useState(15);
    const [findText, setFindText] = useState('');
    const [images, setImages] = useState([]);
    const [apiKey, setApiKey] = useState('15572473-14106c42610c161ecd4aaab5d');
    const [apiUrl, setApiUrl] = useState('https://pixabay.com/api');

    const onTextChange = (e) => {
        setFindText(e.target.value);
        axios.get(`${apiUrl}?key=${apiKey}&q=${findText}&image_type=photo&pretty=true&per_page=${amount}`)
            .then((res) => {
                setImages(res.data.hits);
            }
            )
    }
    const onSelectChange = (e, i, value) => {
        axios.get(`${apiUrl}?key=${apiKey}&q=${findText}&image_type=photo&pretty=true&per_page=${value}`)
            .then((res) => {
                setImages(res.data.hits);
                setAmount(value)
            }
            )

    }

    return (
        <>
            <TextField
                floatingLabelText="Search for image"
                name="find"
                onChange={onTextChange}
                value={findText}
                fullWidth={true}
            />
            <br />
            <SelectField
                floatingLabelText="Amount"
                name="amount"
                onChange={onSelectChange}
                value={amount}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            {images.length > 0 && <ImageResults images={images} />}
        </>
    )
}

export default FindImg
