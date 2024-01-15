import { Card, Container, Image, Title, Text, Button } from "@mantine/core";
import classes from "./ProductCard.module.css";
export interface Product {
    name: string;
    img: string;
    price: number;
}
const ProductCard = ({item}:{item: Product}) => {
    const vnd = new Intl.NumberFormat('vi');
    return (
        <>
            <Card shadow="xl" radius="md" m={0}>
            <Container style={{ width: '100%' }} p={0}>
                <Image src={item.img} h={250} style={{ objectFit: 'cover' }}></Image>
                <Container h={50} mt={10} style={{ width: '100%', padding: '0px' }}>
                    <Title size={"h5"}>{item.name}</Title>
                </Container>
                <Text>{vnd.format(item.price)} đ</Text>
                <Container mt={10} className={classes.button}>
                    <Button style={{ borderRadius: "20px", width: "80%", backgroundColor: "#1E3B27" }}>Liên hệ ngay</Button>
                </Container>
            </Container>
        </Card>
        </>
    )
}
export default ProductCard;
