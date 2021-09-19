import React from "react"
import { Button, Dropdown, Menu, Container, Input } from "semantic-ui-react";

export const Navigation = () => {
    return (
        <div>
            <Menu size="large" inverted fixed={"top"}>
                <Container>
                    <Menu.Item name="Ana Sayfa" />
                    <Menu.Item name="Kategoriler" />
                    <Menu.Item position="right">
                        <Input className="icon" icon="search" placeholder="Ara..." style={{ width: "600px" }} />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Dropdown item text="Diller">
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Türkçe</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item>
                            <Button primary>Giriş Yap</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
