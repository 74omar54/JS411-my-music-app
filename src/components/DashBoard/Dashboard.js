import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import VolumeCard from '../Slider';
import SwitchIt from '../Select';





const DashBoard = (props) => {
    const [volumeCheck, setVolume] = useState(20);
    const [qualityCheck, setQuality] = useState(3);

    const switchButton = () => {
        return props.switchButton(!props.state)
    }
    
    
    return (
        <div className="dash">
            <h1 align='left' className='heading'>Welcome User!</h1>
            <br/>
            <br/>
            <Grid container justify='space-around' alignItems='center'>
                <Grid item className="isOnline">
                    <Card>
                        <CardContent>
                            <Typography variant='h5' align='center'>
                                Online Mode
                            </Typography>
                            <br/>
                            <Typography>
                                Is this application connected to the internet?
                            </Typography>
                            <br/>
                            <CardActions>
                                <Switch onClick={() => {
                                    switchButton()
                                    console.log(`the state is currently: ${props.state}`)
                                }} />
                            </CardActions>
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid item className="slider">
                    <VolumeCard setVolume={setVolume} volumeCheck = {volumeCheck} />
                </Grid>
                <Grid item className='select'>
                    <SwitchIt  setQuality={setQuality} qualityCheck={qualityCheck}/>            
                    
                </Grid>
            </Grid>
            <br/>
            <h1 className="notifications"> System Notifications:</h1>
            <hr/>
            {props.state ? (
                <p align='center'>Your application is offline. You won't be able to share or stream music to other devices.</p>
            ) : (
                <p></p>
            )}
            {volumeCheck > 80 ? (
                <p align='center'>Listening to music at a high volume could cause long-term hearing loss.</p>
            ) : (
                <p></p>
            )}
            {qualityCheck === 3 ? (
                <p align="center">Music quality is degraded. Increase quality if your connection allows it.</p>
            ): (
                <p></p>
            )}

        </div>
    )
    
}



export default DashBoard;
