import React, { useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'

import Main from './Components/Main/Main'
import Details from './Components/Details/Details'
import useStyles from './styles'

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
                <Grid items xs={12} sm={4} className={classes.mobile} >
                    <Details title="Income" />
                </Grid>
                <Grid itmes xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid items xs={12} sm={4} className={classes.desktop} >
                    <Details title="Income" />
                </Grid>
                <Grid itmes xs={12} sm={4} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
            </PushToTalkButtonContainer>
        </div>

    );
};

export default App