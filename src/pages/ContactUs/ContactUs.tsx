import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaqWithImage } from '../../components/FAQ/FAQ';

export function ContactUs() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    });

    return (
        <>

            <Container>
                <form onSubmit={form.onSubmit(() => { })}>
                    <Title
                        order={2}
                        size="h1"
                        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                        fw={700}
                        ta="center"
                    >
                        Liên hệ ngay
                    </Title>

                    <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                        <TextInput
                            label="Tên"
                            placeholder="Nguyễn Thị Ánh"
                            name="name"
                            variant="filled"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label="Email"
                            placeholder="nguyenanh@gmail.com"
                            name="email"
                            variant="filled"
                            {...form.getInputProps('email')}
                        />
                    </SimpleGrid>

                    <TextInput
                        label="Tiêu đề"
                        placeholder="Nội dung chính"
                        mt="md"
                        name="subject"
                        variant="filled"
                        {...form.getInputProps('subject')}
                    />
                    <Textarea
                        mt="md"
                        label="Nội dung"
                        placeholder="Lý do liên hệ"
                        maxRows={10}
                        minRows={5}
                        autosize
                        name="message"
                        variant="filled"
                        {...form.getInputProps('message')}
                    />

                    <Group justify="center" mt="xl">
                        <Button type="submit" size="md" w={150} radius={20} style={{ backgroundColor: "#1E3B27" }}>
                            Liên hệ
                        </Button>
                    </Group>
                </form>

            </Container>
            <Container size={'xl'}>
                <FaqWithImage />
            </Container>
        </>
    );
}