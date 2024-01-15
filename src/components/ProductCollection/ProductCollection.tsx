import {
    Card,
    Text,
    SimpleGrid,
    Image,
    UnstyledButton,
} from '@mantine/core';
import classes from './ProductCollection.module.css';
import cayAnQua from '../../assets/collection/cay-an-qua.jpg';
import cayDecor from '../../assets/collection/cay-decor.jpg';
import cayHangRao from '../../assets/collection/cay-hang-rao.jpg';
import cayHoa from '../../assets/collection/cay-hoa.jpg';
import cayThucPham from '../../assets/collection/cay-thuc-pham.jpg';
import cayTrongNha from '../../assets/collection/cay-trong-nha.jpg';
import cayTruocHien from '../../assets/collection/cay-truoc-hien.jpg';
import { useNavigate } from 'react-router-dom';
export type CollectionCard = {
    title: string,
    image: string;
    link: string;
};
const items: CollectionCard[] = [
    { title: 'Cây ăn quả', image: cayAnQua, link: '#' },
    { title: 'Cây decor', image: cayDecor, link: '#' },
    { title: 'Cây hàng rào', image: cayHangRao, link: '#' },
    { title: 'Cây hoa', image: cayHoa, link: '#' },
    { title: 'Cây thực phẩm', image: cayThucPham, link: '#' },
    { title: 'Cây trong nhà', image: cayTrongNha, link: '#' },
    { title: 'Cây trước hiên', image: cayTruocHien, link: '#' },
    { title: 'Cây trong nhà', image: cayTrongNha, link: '#' },
    { title: 'Cây trước hiên', image: cayTruocHien, link: '#' },
]

export function ProductCollection() {
    const navigator = useNavigate();
    const collections = items.map((item) => (
        <UnstyledButton key={item.title} className={classes.item} h={240}>
            <Image className={classes.image} src={item.image} h={200} onClick={() => navigator("/products")}></Image>
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));
    return (
        <>
            <Card withBorder radius="md" className={classes.card}>
                <SimpleGrid cols={9} mt="md">
                    {collections}
                </SimpleGrid>
            </Card>
        </>
    );
}