import React from 'react';
import { UserIcon } from './icons/UserIcon';

export const Header: React.FC = () => {
    return (
        <header className="bg-dark-card border-b border-dark-border p-4 flex justify-between items-center flex-shrink-0">
            <h2 className="text-2xl font-bold text-dark-text-primary">Dashboard</h2>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-dark-border rounded-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-dark-text-secondary" />
                </div>
                <span className="ml-3 font-semibold hidden md:block">Jane Doe</span>
            </div>
        </header>
    );
};
