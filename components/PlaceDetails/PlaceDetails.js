import React from 'react';
import { Box, Typography, Button, Card, CardMedia, cardContent, cardActions, Chip, CardActions } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.linguahouse.com%2Flinguafiles%2Fmd5%2Fd01dfa8621f83289155a3be0970fb0cb&imgrefurl=https%3A%2F%2Fwww.linguahouse.com%2Fru%2Flearning-english%2Fgeneral-english%2Fat-the-restaurant&tbnid=sTvbxgz8DZNqkM&vet=12ahUKEwjVk_Dljfr1AhUNcxoKHWkKDD8QMygHegUIARDeAQ..i&docid=BJb0GmvR_d9ngM&w=1000&h=667&q=restaurants&ved=2ahUKEwjVk_Dljfr1AhUNcxoKHWkKDD8QMygHegUIARDeAQ'}
                title={place.name}
            />
            <cardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Rating value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant='subtitle1'>Out of {place.num_reviews}reviews</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle2'>{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                        <img src={award.images.small} alt={award.display_name}/>                        
                  </Box>  
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size='small' label={name} margin='5px 5px 0' />
                ))} 
                {place?.address && (
                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
                        <LocationOnIcon/> {place.address}
                    </Typography>  
                )}
                {place?.phone && (
                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
                        <PhoneIcon/> {place.phone}
                    </Typography>  
                )}
                <CardActions>
                    <Button size='small' color='primary' onClick={()=>window.open(place.web_url,'_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size='small' color='primary' onClick={()=>window.open(place.website,'_blank')}>
                        Website
                    </Button>
                </CardActions>
            </cardContent>
        </Card>
    );
};
export default PlaceDetails;