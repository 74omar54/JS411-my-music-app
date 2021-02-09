import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const SwitchIt =(props) => {
    
    const handleChange = (event) => {
        console.log(` before we change the state: ${props.qualityCheck}`)
        props.setQuality(event.target.value)
        console.log(` the current state is: ${props.qualityCheck}`)
    }
    
    return(
        <div className ='cardThree'>
        <Grid container>
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant='h5' align='center'>
                            Sound Quality
                        </Typography>
                        <br/>
                        <Typography>
                            Manually control the music quality in event of poor connection
                        </Typography>
                        <br/>
                        <CardActions>
                            <InputLabel>Quality: </InputLabel>
                            <Select 
                                value={props.qualityCheck}
                                onChange={handleChange}
                            >

                                <MenuItem value={3}>Low</MenuItem>
                                <MenuItem value={2}>Normal</MenuItem>
                                <MenuItem value={1}>High</MenuItem>
                            </Select>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </div>
    )
}

export default SwitchIt;