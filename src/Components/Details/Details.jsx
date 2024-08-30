import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

const Details = ({ title }) => {
    const classes = useStyles();
    ChartJS.register(ArcElement, Tooltip, Legend);
    const { total, chartData } = useTransactions(title);
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography varient="h5" >₹{total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card >
    )
}

export default Details