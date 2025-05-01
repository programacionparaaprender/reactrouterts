/* eslint-disable no-unused-expressions */
//Sidebar.tsx
//https://www.instagram.com/p/C1lZ5wuo00U/?img_index=5


import { useRef, useSate } from 'react';
import * as React from 'react';
import './style.css';

const menuItems = [
    {
        name: "Home",
        icon: "Home",
    },
    {
        name: "Settings",
        icon: "settings",
        items:[
            "Display",
            "Editor",
            "Theme",
            "Interface"
        ]
    }
];

const Icon = (parameters:any) => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <span className="material-symbols-outlined">
        {parameters.icon}
    </span>
);


const Icono = () => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Icon icon="menu" />
);

/* class Icono2 extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <Icon icon="menu" />
            </React.Fragment>
        );
    }
}; */

const Boton = () => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <button type="button">
        <Icono />
    </button>
);

const NavHeader = () => (
    <header className="sidebar-header">
        <Boton />
        <span>Admin</span>
    </header>
);

const NavButton = (param:any) => (
    <button type="button" onClick={()=>param.onclick(param.name)}
    className={param.isActive?"active":""}>
        {param.icon && <Icon icon={param.icon} />}
        <span>{param.name}</span>
        {param.hasSubNav && <Icon icon="expand_more" />}
    </button>
);

const SubMenu = (param:any) => {
    const navRef = useRef<HTMLDivElement>(null);
    const isSubNavOpen = (param.item, items) => items.some(i => i === activeItem) ||
    item === activeItem;
    const {name, items} = item;
    return (
        <div className={
`sub-nav ${param.isSubNavOpen(param.name, items)?"open":""}`}
style={{
    height: !isSubNavOpen(name, items)?0:navRef.current?.clientHeight
}}>

        </div>
    );
};