import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const ImageResults = ({ images }) => {
    return (
        <GridList cols={3}>
            {images.map(img => <GridTile
                title={img.tags}
                key={img.id}
                subtitle={
                    <span>
                        by <strong>{img.user}</strong>
                    </span>}
                actionIcon={
                    <IconButton>
                        <ZoomIn color="white" />
                    </IconButton>
                }
            >
                <img src={img.largeImageURL} />
            </GridTile>)}
        </GridList>
    )
}

export default ImageResults;
