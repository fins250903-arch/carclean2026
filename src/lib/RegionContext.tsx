"use client";

import React, { createContext, useContext, ReactNode } from 'react';

type RegionContextType = {
    regionName: string;
    displayName: string;
    niche: 'car' | 'truck' | 'coating';
    path: string;
};

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children, regionName, displayName, niche = 'car', path = '' }: { children: ReactNode, regionName: string, displayName?: string, niche?: 'car' | 'truck' | 'coating', path?: string }) {
    const finalDisplayName = displayName || regionName;
    return (
        <RegionContext.Provider value={{ regionName, displayName: finalDisplayName, niche, path }}>
            {children}
        </RegionContext.Provider>
    );
}

export function useRegion() {
    const context = useContext(RegionContext);
    if (context === undefined) {
        throw new Error('useRegion must be used within a RegionProvider');
    }
    return context;
}
