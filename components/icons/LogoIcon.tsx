import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1450 410" 
        aria-label="GreenDeck Africa Logo"
        preserveAspectRatio="xMinYMid meet"
        {...props}
    >
        <style>
            {`.gda-font { font-family: 'Poppins', sans-serif; font-weight: 800; }`}
        </style>
        
        {/* Icon Logo */}
        <g>
            {/* Decorative blocks cluster */}
            <rect x="20" y="20" width="130" height="100" rx="30" fill="#65916a" />
            <rect x="160" y="20" width="130" height="100" rx="30" fill="#005826" />
            <rect x="20" y="130" width="130" height="100" rx="30" fill="#005826" />

            {/* Main GDA container block */}
            <rect x="160" y="130" width="630" height="260" rx="60" fill="#005826" />
            <text x="475" y="315" className="gda-font" fontSize="180" fill="white" textAnchor="middle">GDA</text>
        </g>
        
        {/* Text */}
        <g transform="translate(820, 0)">
            <text y="120" className="gda-font" fontSize="150" fill="#005826" letterSpacing="-5">GREEN</text>
            <text y="250" className="gda-font" fontSize="150" fill="#005826" letterSpacing="-5">DECK</text>
            <text y="380" className="gda-font" fontSize="150" fill="#005826" letterSpacing="-5">AFRICA</text>
        </g>
    </svg>
);