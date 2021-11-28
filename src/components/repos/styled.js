import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%
`

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`

WrapperTabList.tabsRole = "TabList"

export const WrapperTab = styled(Tab)`
border-radius: 16px;
padding: 8px;
border: 1px solid #ccc;
user-select: none;
cursor: pointer;
margin: 8px;


&:focus{
    outline: none;
}

&.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
}
`

WrapperTabList.tabsRole = "Tab"

export const WrapperTabPanel = styled(TabPanel)`
display: none;
padding: 8px;
border: 1px solid #ccc;
margin-top: -5px;

&.is-selected {
    display: block;
}
`