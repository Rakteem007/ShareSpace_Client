import { Typography,useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {

    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return(
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ads</Typography>
            </FlexBetween>
            <img
              width="100%"
              height="auto"
              alt="advert"
              src="http://localhost:3001/assets/Nvidia.png"
              style={{ borderRadius : "0.75rem" , margin: "0.75rem 0"}}
             />
             <FlexBetween>
                <Typography color={main}>Nvidia</Typography>
                <Typography color={medium}>www.nvidia.com/en-in</Typography>
             </FlexBetween>
             <Typography color={medium} m="0.5rem 0">
                NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance to help professionals, creators, developers, and students worldwide enhance creative workflows and build, operate, and connect metaverse applications.
             </Typography>
        </WidgetWrapper>
    )

}

export default AdvertWidget;