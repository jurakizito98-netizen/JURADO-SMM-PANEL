import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
    const isPositive = change.startsWith('+');

    return (
        <div className="bg-dark-card border border-dark-border rounded-lg p-6 flex items-center shadow-lg">
            <div className="p-3 bg-dark-border rounded-lg mr-4">
                {icon}
            </div>
            <div>
                <p className="text-sm text-dark-text-secondary">{title}</p>
                <p className="text-2xl font-bold text-dark-text-primary">{value}</p>
                <p className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {change}
                </p>
            </div>
        </div>
    );
};
