import { ReactElement, useCallback, useEffect, useState } from "react";

export interface TabsProps {
  tabs: TabProps[];
  tabsContainerClassName?: string;
  activeTabIndex?: number;
  onTapChange?: (id: string) => void,
  className?: string;
}

export interface TabProps {
  id?: string;
  title: string;
  element?: ReactElement;
  activeClassName?: string;
  className?: string;
}

interface TabsState {
  activeTabId: string;
}

export const Tabs = ({
  tabs,
  tabsContainerClassName = "",
  activeTabIndex = 0,
  onTapChange,
  className,
}: TabsProps) => {
  const [state, setState] = useState<TabsState>({
    activeTabId: tabs[activeTabIndex]?.id ?? tabs[activeTabIndex]?.title ?? "",
  });

  const setTab = useCallback((id: string) => {
    onTapChange?.(id);
    setState((prevState) => ({ ...prevState, activeTabId: id }));
  }, [onTapChange]);

  useEffect(() => {
    setState({
      activeTabId:
        tabs[activeTabIndex]?.id ?? tabs[activeTabIndex]?.title ?? "",
    });
  }, [activeTabIndex, tabs]);

  return (
    <div className={`${className}`}>
      <ul className={`flex  gap-2 ${tabsContainerClassName}`}>
        {tabs.map((tab) => {
          tab.id ??= tab.title;

          return (
            <li
              key={tab.id}
              className={`
                      border-b-2 text-gray-400 bg-surface p-1 transition-all text-ellipsis overflow-hidden cursor-pointer
                      ${tab.className ?? ""}
                      ${state.activeTabId === tab.id
                  ? `text-red-300 border-b-red-300 border-b-4 rounded ${tab.activeClassName ?? ""
                  }`
                  : "hover:text-error-200 hover:border-b-red-200"
                }`}
              onClick={() => setTab(tab.id!)}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>
      <div className={`mt-3`}>
        {tabs.find((tab) => tab.id === state.activeTabId)?.element}
      </div>
    </div>
  );
};
