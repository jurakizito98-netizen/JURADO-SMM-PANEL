import React from 'react';
import { DashboardIcon } from './icons/DashboardIcon';
import { AccountsIcon } from './icons/AccountsIcon';
import { CampaignsIcon } from './icons/CampaignsIcon';
import { AnalyticsIcon } from './icons/AnalyticsIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { BoltIcon } from './icons/BoltIcon';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
    <a href="#" className={`flex items-center p-3 my-1 rounded-lg transition-colors ${active ? 'bg-brand-blue/20 text-white' : 'text-dark-text-secondary hover:bg-dark-border hover:text-white'}`}>
        {icon}
        <span className="ml-4 font-medium">{label}</span>
    </a>
);

export const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-dark-card border-r border-dark-border flex-shrink-0 p-4 flex-col hidden md:flex">
            <div className="flex items-center mb-10 px-2">
                <BoltIcon className="w-8 h-8 text-brand-blue" />
                <h1 className="text-xl font-bold ml-2">AutoEngage</h1>
            </div>
            <nav className="flex-1">
                <NavItem icon={<DashboardIcon className="w-6 h-6" />} label="Dashboard" active />
                <NavItem icon={<AccountsIcon className="w-6 h-6" />} label="Accounts" />
                <NavItem icon={<CampaignsIcon className="w-6 h-6" />} label="Campaigns" />
                <NavItem icon={<AnalyticsIcon className="w-6 h-6" />} label="Analytics" />
            </nav>
            <div>
                <NavItem icon={<SettingsIcon className="w-6 h-6" />} label="Settings" />
            </div>
        </aside>
    );
};
