import { Typography,useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { BASE_URL } from "components/URL";

const AdvertWidget = () => {

    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const pictureURL=BASE_URL+"/assets/Nvidia.png"

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
              src={pictureURL}
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