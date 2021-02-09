import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';




function VolumeCard (props) {

    const handleVolumeChange = (event, newValue) => {
        props.setVolume(newValue)
        console.log(`I am changing my new state is ${props.volumeCheck}`)
    }

    return (
        <div className="cardTwo">
        <Grid container>
            <Grid item className='slider'>
                <Card>
                    <CardContent>
                        <Typography variant='h5' align="center">
                            Master Volume
                        </Typography>
                        <br/>
                        <Typography>
                            Overides all other sound settings on this application
                        </Typography>
                        <br/>
                        <CardActions>
                            <VolumeDown/>
                            <Slider
                                valueLabelDisplay='auto'
                                step={10}
                                marks
                                min={0}
                                max={100}
                                onChange={handleVolumeChange}
                                
                            />
                            <VolumeUp/>
                        </CardActions>
                    </CardContent>
                </Card>

            </Grid>
        </Grid>
        </div>
    )
}

export default VolumeCard;