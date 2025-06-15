import { UserOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import { Link } from 'react-router';

const { Title, Paragraph } = Typography;

const Home = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                padding: 16,
            }}
        >
            <div
                style={{
                    maxWidth: 480,
                    width: '100%',
                }}
            >
                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%', textAlign: 'center' }}
                >
                    <UserOutlined style={{ fontSize: 64, color: '#1890ff' }} />

                    <Title level={2} style={{ marginBottom: 0, color: '#1f1f1f' }}>
                        User Management Portal
                    </Title>

                    <Paragraph style={{ fontSize: 16, color: '#595959' }}>
                        Manage, create, edit, and delete users from one central place.
                    </Paragraph>

                    <Link to="/user-list">
                        <Button type="primary" size="large">
                            Go to User List
                        </Button>
                    </Link>
                </Space>
            </div>
        </div>
    );
};

export default Home;
