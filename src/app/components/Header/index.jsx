
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Drawer, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import { FaPhoneAlt } from "react-icons/fa";
import { MenuOutlined } from "@ant-design/icons";

import { useState } from "react";

export default function Navigation() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // Hardcoded menu options
    const menuOptions = [
        {
            name: "Home",
            path: "/home",
            order: 1,
        },
        {
            name: "MBA Specialization",
            path: "/mba_specialization",
            order: 2,
        },
        {
            name: "Approvals",
            path: "/approvals",
            order: 3,
        },
        {
            name: "7065777755",
            icon: <FaPhoneAlt className="mr-2" />,
            order: 4,
            isPhone: true,
        },
        {
            name: "Get Free Counselling",
            order: 5,
            isButton: true,
        },
    ];

    // Recursive function to generate menu items
    const generateMenuItems = (items) =>
        items
            .sort((a, b) => a.order - b.order) // Sort by 'order' field
            .map((item) => {
                if (item.isPhone) {
                    return {
                        key: item.name,
                        label: (
                            <div className="flex items-center font-semibold">
                                <div className="flex items-center">
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        ),
                    };
                }
                if (item.isButton) {
                    return {
                        key: item.name,
                        label: (
                            <Button
                                className="mt-2 px-3 h-8 text-center text-white font-medium rounded bg-green-600 hover:bg-green-700 flex items-center justify-center"
                                onClick={() => navigate("/contact")}
                            >
                                {item.name}
                            </Button>
                        ),
                    };
                }

                return {
                    key: item.path,
                    label: (
                        <Link
                            to={item.path}
                            className="font-medium hover:text-blue-600 transition duration-300"
                        >
                            {item.icon} {item.name}
                        </Link>
                    ),
                };
            });

    // Show/hide mobile drawer
    const toggleDrawer = () => {
        setDrawerVisible((prev) => !prev);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-4">
                {/* Logo Section */}
                <div
                    className="logo flex items-center ml-8 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src="sode.png" alt="Logo" className="h-12" />
                </div>
                <div
                    className={`flex ${isMobile ? "justify-end" : "justify-between"} items-center`}
                >
                    {!isMobile && (
                        <Menu
                            mode="horizontal"
                            items={generateMenuItems(menuOptions)}
                            selectedKeys={[location.pathname]}
                            style={{ flex: 1, justifyContent: "flex-start" }}
                        />
                    )}
                    <Button
                        type="link"
                        icon={isMobile ? <MenuOutlined /> : null}
                        onClick={isMobile ? toggleDrawer : null}
                    >
                        {!isMobile} {/* Replace Logout with "Menu" */}
                    </Button>
                </div>

                {/* Mobile Drawer */}
                {isMobile && (
                    <Drawer
                        placement="left"
                        closable={true}
                        onClose={toggleDrawer}
                        open={drawerVisible}
                        width={250}
                        bodyStyle={{
                            padding: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Menu
                            mode="vertical"
                            items={generateMenuItems(menuOptions.filter((item) => !item.isButton))} // Exclude button here
                            selectedKeys={[location.pathname]}
                            onClick={toggleDrawer}
                        />
                        {/* Add the button at the bottom */}
                        <div className="p-4">
                            <Button
                                className="w-full h-10 text-center text-white font-medium rounded bg-green-600 hover:bg-green-700 flex items-center justify-center"
                                onClick={() => {
                                    navigate("/contact");
                                    toggleDrawer(); // Close the drawer after navigation
                                }}
                            >
                                Get Free Counselling
                            </Button>
                        </div>
                    </Drawer>
                )}
            </header>
        </>);
}
