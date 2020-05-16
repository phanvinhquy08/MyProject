import React from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Delete from '@material-ui/icons/Delete'; 
import Info from '@material-ui/icons/Info';

import { getHotels, openDialogInfo, openDialogDelete } from '../Action/actions';
import DialogInfo from './DialogInfo';
import DialogDelete from './DialogDelete';
import FormHotel from './FormHotel';

const ListHotels = (props) => {
    const { loading, listHotels, getHotels, openDialogInfo, openDialogDelete } = props;

    React.useEffect(() => {
        getHotels();
    }, [getHotels])
    
    
    return (
        <div className="listHotel">
            <Container maxWidth="lg" style={{ marginTop: 10 }}>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", fontWeight: "bold" }} >
                    {loading ? "Loading..." : "List Hotel"}
                </Typography>
                <GridList spacing={0} cols={3}>
                    {listHotels.map(hotel =>
                        <Card style={{ height: 350, marginBottom: 10 }} key={hotel.id}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: 160 }}
                                    image={hotel.imageUrl}
                                    title="Contemplative Reptile"
                                    onClick={() => openDialogInfo(hotel)}
                                />
                                <CardContent onClick={() => openDialogInfo(hotel)} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {hotel.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {`Email: ${hotel.email}`}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {`Tel: ${hotel.tel}`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => openDialogInfo(hotel)}>
                                    <Info/> Information
                                </Button>
                                <Button size="small" color="primary" onClick={() => openDialogDelete(hotel)}>
                                    <Delete/> Remove
                                </Button>
                            </CardActions>
                        </Card>)}
                </GridList>
                <DialogInfo/>
                <DialogDelete />
                <FormHotel/>
            </Container>
        </div>
    )
}
const mapStateToProps = ({ hotelState: { loading, listHotels }}) => {
    return { loading, listHotels };
}

const mapDispatchToProps = { getHotels, openDialogInfo, openDialogDelete }



export default connect(mapStateToProps, mapDispatchToProps)(ListHotels)
