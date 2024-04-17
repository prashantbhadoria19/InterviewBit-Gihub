import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';

function Repoinfo({ repoId }) {

    const [langs, setLangs] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchLang = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${repoId}/languages`,
                {
                    headers: {
                        'X-Github-Api-Version': '2022-11-28',
                        'Authorization': 'Bearer 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'
                    }
                });
            setLangs(response.data || []);
            console.log(response.data)
            setLoading(false);
            // Initialize as empty array if undefined
        } catch (error) {
            console.error('Error searching for user:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLang();
    }, [])

    const transformDataForChart = (data) => {
        return Object.keys(data).map((key, index) => ({
            id: index,
            value: data[key],
            label: key,
        }));
    };

    const pieChartData = transformDataForChart(langs);

    if (loading) {
        return (
            <div></div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            {
                loading
                && <p>Loaing Data</p>
            }
            <div style={{ width: '100%' }}>
                <div className="card mb-4">
                    <div className="card-header">Languages Chart</div>
                    <div className="card-body">
                        <PieChart
                            series={[
                                {
                                    data: pieChartData,
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repoinfo