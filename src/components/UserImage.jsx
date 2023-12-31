import { Box } from "@mui/material";
const BASE_URL="https://sharespace-server.onrender.com";

const UserImage = ({ image , size = "60px"}) => (
    <Box width={size} height={size}>
    <img 
        style={{objectFit : "cover" , borderRadius : "50%"}}
        width={size}
        height={size}
        alt="user"
        src={`${BASE_URL}/assets/${image}`}
    />
    </Box>
);

export default UserImage;