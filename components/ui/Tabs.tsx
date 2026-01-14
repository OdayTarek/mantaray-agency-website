"use client";

import { createContext, useContext, useState, ReactNode, KeyboardEvent } from "react";
import clsx from "clsx";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

export interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={clsx("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export interface TabListProps {
  children: ReactNode;
  className?: string;
}

export function TabList({ children, className }: TabListProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabButtons = e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const currentIndex = Array.from(tabButtons).findIndex(
      (button) => button === document.activeElement
    );

    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
        newIndex = currentIndex + 1 >= tabButtons.length ? 0 : currentIndex + 1;
        break;
      case "ArrowLeft":
        newIndex = currentIndex - 1 < 0 ? tabButtons.length - 1 : currentIndex - 1;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabButtons.length - 1;
        break;
      default:
        return;
    }

    tabButtons[newIndex]?.focus();
    tabButtons[newIndex]?.click();
    e.preventDefault();
  };

  return (
    <div
      role="tablist"
      className={clsx(
        "flex border-b border-border",
        className
      )}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}

export interface TabTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabTrigger({ value, children, className }: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(value)}
      className={clsx(
        "relative px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
      {/* Active indicator underline */}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
      )}
    </button>
  );
}

export interface TabContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabContent({ value, children, className }: TabContentProps) {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={clsx("mt-6 focus:outline-none", className)}
    >
      {children}
    </div>
  );
}
