import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Fade, makeStyles, Typography } from '@material-ui/core';
import LayoutAlignCenterBox from '../components/layout/LayoutAlignCenterBox';
import Page from './Page';

const useStyles = makeStyles(theme => ({
    infoContainer: {
        paddingBottom: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginBottom: theme.spacing(1),
        borderRadius: '50%',
        border: `1px solid ${theme.palette.secondary.main}`,
    },
}));

function UserProfile() {
    const classes = useStyles();

    const { user, isLoading } = useAuth0();
    if (!user || isLoading) {
        return null;
    }

    return (
        <Fade in timeout={600}>
            <Page title="User preferences">
                <LayoutAlignCenterBox>
                    <Typography component="div">
                        <div className={classes.infoContainer}>
                            <img alt="" src={user.picture} className={classes.avatar} />
                            <Typography variant="h4" component="p">
                                {user.name}
                            </Typography>
                            <Typography>{user.email}</Typography>
                        </div>
                        <div className={classes.infoContainer}>
                            <Typography variant="body1">User and Organization details</Typography>
                        </div>
                    </Typography>
                </LayoutAlignCenterBox>
            </Page>
        </Fade>
    );
}

export default UserProfile;
