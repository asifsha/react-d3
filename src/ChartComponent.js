import React from 'react';
import { BarChart, PieChart } from 'react-d3-components';

export function ChartComponent() {


   var dataBarChart = [
        {
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
        },
        {
        label: 'somethingB',
        values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
        },
        {
        label: 'somethingC',
        values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
        }
    ];
    
    var sort = null;

    var dataPie = {
        label: 'somethingA',
        values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }]
    };
    return (
        <div >
            <BarChart
                data={dataBarChart}
                width={400}
                height={300}
                margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />

            <PieChart
                data={dataPie}
                width={600}
                height={400}
                margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
                sort={sort}
            />
        </div>
    )

}