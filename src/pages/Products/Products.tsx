import { Accordion, Checkbox, Container, Grid, GridCol, Slider, Title, Text, SimpleGrid } from "@mantine/core";
import classes from "./Products.module.css";
import { IconPlant } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import cayCam from "../../assets/products/cay-cam.jpg";
import cayLuu from "../../assets/products/cay-luu.jpg";
import caySenDa from "../../assets/products/cay-sen-da.jpg";
import hoaMauDon from "../../assets/products/hoa-mau-don.jpg";
import ProductCard, { Product } from "../../components/ProductCard/ProductCard";

const data = [
    {
        value: '1',
        icon: IconPlant,
        title: 'Loại cây',
        collections: [
            { colection: 'Cây ăn quả' },
            { colection: 'Cây hoa' },
            { colection: 'Cây decor' },
            { colection: 'Cây hàng rào' },
            { colection: 'Cây thực phẩm' },
            { colection: 'Cây trong nhà' },
            { colection: 'Cây trước hiên' },
        ]
    },
    {
        value: '2',
        title: 'Khu vực',
        icon: IconMapPin,
        collections: [
            { colection: 'Tây nguyên' },
            { colection: 'Bắc trung bộ' },
            { colection: 'Nam bộ' },
            { colection: 'Tây bắc' },
            { colection: 'Duyên hải nam trung bộ' },
        ]
    }
]
const items: Product[] = [
    { name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    { name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    { name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    { name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    { name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    { name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    { name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    { name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    { name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    { name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    // { name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
];
const Products = () => {
    return (
        <>
            <Grid styles={{inner:{margin:0, width: '100%'}}}>
                <GridCol span={2.5}>
                    <nav className={classes.navbar}>
                        <Title size={'h4'}>LỌC</Title>
                        {
                            data.map((item) => (
                                <Accordion defaultValue="1">
                                    <Accordion.Item value={item.value} key={item.value}>
                                        <Accordion.Control icon={<item.icon color="#87BD41"></item.icon>}>{item.title}</Accordion.Control>
                                        <Accordion.Panel>
                                            {
                                                item.collections.map((i) => (
                                                    <Container m={10}>
                                                        <Checkbox
                                                            color="#1E3B27"
                                                            label={i.colection}
                                                        />
                                                    </Container>
                                                ))
                                            }
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            ))
                        }
                        <Container size={'xl'} m={20}>
                            <Text>Giá</Text>
                            <Slider
                                step={25}
                                w={'200px'}
                                color="#1E3B27"
                                marks={[
                                    { value: 25, label: '20k' },
                                    { value: 50, label: '200k' },
                                    { value: 85, label: '2tr' },
                                ]}
                            />
                        </Container>
                    </nav>
                </GridCol>
                <GridCol span={9.5}>
                    {/* <ProductCard items={items}/> */}
                    <SimpleGrid cols={4} m="xl">
                        {
                            items.map((item) => (
                                <ProductCard item={item} />
                            ))
                        }

                    </SimpleGrid>
                </GridCol>
            </Grid>
        </>
    )
};
export default Products;