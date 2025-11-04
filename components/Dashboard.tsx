import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { StatCard } from './StatCard';
import { engagementData, recentActivity, stats } from '../services/mockData';
import { UsersIcon } from './icons/UsersIcon';
import { ActivityIcon } from './icons/ActivityIcon';
import { CampaignsIcon } from './icons/CampaignsIcon';
import { AccountsIcon } from './icons/AccountsIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { XIcon } from './icons/XIcon';
import { TikTokIcon } from './icons/TikTokIcon';


const platformIcons: { [key: string]: React.ReactNode } = {
    Facebook: <FacebookIcon className="w-5 h-5 text-blue-500" />,
    Instagram: <InstagramIcon className="w-5 h-5 text-pink-500" />,
    X: <XIcon className="w-5 h-5 text-gray-300" />,
    TikTok: <TikTokIcon className="w-5 h-5 text-cyan-400" />,
};


export const Dashboard: React.FC = () => {
    const statIcons = [
        <UsersIcon className="w-8 h-8 text-brand-blue" />,
        <ActivityIcon className="w-8 h-8 text-green-500" />,
        <CampaignsIcon className="w-8 h-8 text-yellow-500" />,
        <AccountsIcon className="w-8 h-8 text-red-500" />,
    ];
    
    return (
        <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} title={stat.title} value={stat.value} change={stat.change} icon={statIcons[index]} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Engagement Chart */}
                <div className="lg:col-span-2 bg-dark-card border border-dark-border rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Engagement Over Time</h3>
                     <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart data={engagementData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="name" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }} />
                                <Legend />
                                <Line type="monotone" dataKey="likes" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="comments" stroke="#8b5cf6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-dark-card border border-dark-border rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        {recentActivity.map((activity) => (
                            <li key={activity.id} className="flex items-start">
                                <div className="p-2 bg-dark-border rounded-full mr-4 mt-1">
                                    {platformIcons[activity.platform]}
                                </div>
                                <div>
                                    <p className="font-medium text-dark-text-primary">{activity.action}</p>
                                    <p className="text-sm text-dark-text-secondary">{activity.details}</p>
                                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
