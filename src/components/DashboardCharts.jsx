import React, { useEffect, useState } from 'react';
import Loading from '../pages/Loading';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DashboardCharts = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://paw-mart-server-pi.vercel.app/dashboard-stats')
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const COLORS = ['#f97316', '#eab308', '#3b82f6', '#10b981'];

    if (loading) return <Loading></Loading>

    if (!stats) return <div className="text-center text-error">Failed to load dashboard data</div>;
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {/* 1. Pie Chart - Listings by Category */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Listings by Category</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={stats.pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) => `${name}: ${value}`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {stats.pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 2. Line Chart - Orders in Last 7 Days */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Orders (Last 7 Days)</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={stats.lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="orders" stroke="#f97316" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 3. Bar Chart - Overview Stats (Bonus) */}
                <div className="card bg-base-100 shadow-xl lg:col-span-2">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Overview</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={[
                                { name: 'Total Listings', value: stats.totalListings },
                                { name: 'Total Orders', value: stats.totalOrders }
                            ]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#f97316" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;