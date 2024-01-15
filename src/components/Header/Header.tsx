import { ActionIcon, Autocomplete, Burger, Group, Image, rem } from "@mantine/core";
import Logo from '../../assets/images/logoTree.png';
import classes from './Header.module.css';
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { IconUserCircle } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const NavLink = [
    { link: '', label: 'Trang chủ' },
    { link: '/products', label: 'Sản phẩm' },
    { link: '/aboutUs', label: 'Về chúng tôi' },
    { link: '/confirmation', label: 'Cam kết' },
    { link: '/blogs', label: 'Tin tức' },
    { link: '/contactUs', label: 'Liên hệ' },
]

const Header = () => {
    const [opened, { toggle }] = useDisclosure(false);
    // const [active, setActive] = useState(NavLink[0].link);
    let navigator = useNavigate();
    const items = NavLink.map((item) => (
        <a
            key={item.label}
            href={item.link}
            className={classes.link}
            onClick={() => {
                navigator(`${item.link}`);
            }}>
            {item.label}
        </a>
    ))

    return (
        <>
            <header className={classes.header}>
                <div className={classes.inner}>
                    <Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                        <Image src={Logo} h={50}></Image>
                    </Group>

                    <Group>
                        <Group ml={50} gap={20} className={classes.links} visibleFrom="sm">
                            {items}
                        </Group>
                    </Group>
                    <Group gap={0} >
                        <Autocomplete
                            className={classes.search}
                            placeholder="Tìm kiếm"
                            styles={{ input: { borderRadius: '20px' } }}
                            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                            data={['Cây xanh', 'Cây ăn quả', 'Cây cảnh', 'Các loại hoa']}
                            visibleFrom="xs"
                        />
                        <ActionIcon
                            variant="default"
                            size="xl"
                            aria-label="Gradient action icon"
                            style={{ border: 'none' }}
                        >
                            <IconUserCircle color="#005745" />
                        </ActionIcon>
                        <ActionIcon
                            variant="default"
                            size="xl"
                            aria-label="Gradient action icon"
                            style={{ border: 'none' }}
                        >
                            <IconShoppingCart color="#005745" />
                        </ActionIcon>
                    </Group>
                </div>
            </header>
        </>
    )
}
export default Header;