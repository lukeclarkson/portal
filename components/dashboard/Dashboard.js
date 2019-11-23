import React from 'react';
import {cyan, pink, purple, orange} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {AddShoppingCart, ThumbUp, Assessment, Face} from '@material-ui/icons';
import PieChartIcon from '@material-ui/icons/PieChart';


import SummaryBox from './SummaryBox';
import Product from './Product';

const data = {
    recentProducts: [
        {id: 1, title: 'Event Name # 1', text: 'Detail of event.'},
        {id: 2, title: 'Event Name # 2', text: 'Detail of event.'},
        {id: 3, title: 'Event Name # 3', text: 'Detail of event.'},
        {id: 4, title: 'Event Name # 4', text: 'Detail of event.'}
    ]
};

const Dashboard = () => {

    return (
        <div>
            <h2 style={{paddingBottom: '15px'}}>Dashboard (temporary)</h2>

            <Grid container spacing={2}>
                <Grid item xs>
                    <SummaryBox Icon={PieChartIcon}
                                color="#ee434b"
                                value="000"
                                title="Days"
                                title2="Next Evaluation"
                    />
                </Grid>

                <Grid item xs>
                    <SummaryBox Icon={ThumbUp}
                                color="#ee434b"
                                value="005"
                                title="Sick Leave"
                                title2="Credits"
                    />
                </Grid>

                <Grid item xs>
                    <SummaryBox Icon={Assessment}
                                color="#ee434b"
                                value="000"
                                title="Vacation Leave"
                                title2="Credits"
                    />
                </Grid>

                <Grid item xs>
                    <SummaryBox Icon={Face}
                                color="#ee434b"
                                value="010"
                                title="Unpaid Leave"
                                title2="Credits"
                    />
                </Grid>

            </Grid>

            <Grid container spacing={2}>
                <Grid item xs>
                    <Product data={data.recentProducts}/>
                </Grid>
            </Grid>

        </div>
    );
};

export default Dashboard;