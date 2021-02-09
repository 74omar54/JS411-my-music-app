// I will make my login spot where user can acces their 
//personal experience 
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

function LogIn (props) {
   
    return (
        <div id='login'>
            <Grid className ="login" container direction='column' alignItems='center' justify='space-between'>
                <Grid item>
                    <TextField placeholder='Username *'/>
                </Grid>
                <Grid item>
                    <TextField placeholder='Password *' />
                </Grid>
                <br/>
                <Grid item >
                    <Button 
                        variant='contained' 
                        size='large' 
                        color="primary"
                        onClick={() => {
                            props.loginButton(true)
                        }}
                        >LOG IN
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
    
}
export default LogIn;
