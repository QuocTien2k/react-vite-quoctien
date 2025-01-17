import { Button, Input } from "antd";

const UserForm = () => {
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                    <span>Fullname</span>
                    <Input placeholder="Fullname ..." />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Email ..." />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password placeholder="Password ..." />
                </div>
                <div>
                    <span>Phone</span>
                    <Input placeholder="Phone ..." />
                </div>
                <div>
                    <Button type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;