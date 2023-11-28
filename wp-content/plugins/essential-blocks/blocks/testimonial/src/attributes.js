// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    //
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} = window.EBControls;

import {
    WrpBdShadow,
    TestimonialWrapBg,
    QUOTE_SIZE,
    IMG_WIDTH,
    ImgBdShadow,
    RATING_SIZE,
    IMG_GAP,
} from "./constants";

const attributes = {
    resOption: {
        type: "string",
        default: "Desktop",
    },
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    blockMeta: {
        type: "object",
    },
    layoutPreset: {
        type: "string",
        default: "layout-preset-1",
    },
    imageOverlayColor: {
        type: "string",
        default: "#F6A681",
    },
    avaterContainerFontSize: {
        type: "number",
        default: 16,
    },
    displayAvatar: {
        type: "boolean",
        default: true,
    },
    avatarInline: {
        type: "boolean",
        default: true,
    },
    avatarPosition: {
        type: "string",
        default: "flex-start",
    },
    avatarAlign: {
        type: "string",
        default: "center",
    },
    borderRadius: {
        type: "number",
        default: 50,
    },
    imageUrl: {
        type: "string",
    },
    imageId: {
        type: "string",
    },
    avatarOrder: {
        type: "number",
        default: 1,
    },
    userName: {
        selector: ".eb-testimonial-username",
        source: "html",
        default: "John Doe",
    },
    companyName: {
        selector: ".eb-testimonial-company",
        source: "html",
        default: "Company Name",
    },
    description: {
        selector: ".eb-testimonial-description",
        source: "html",
        default:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    descTextAlign: {
        type: "string",
        default: "center",
    },
    textAlign: {
        type: "string",
        default: "center",
    },
    userInfoPos: {
        type: "string",
        default: "flex-start",
    },
    imagePosition: {
        type: "number",
        default: 0,
    },
    userNameColor: {
        type: "string",
        default: "#7967ff",
    },
    descriptionColor: {
        type: "string",
        default: "#4a5059",
    },
    enableQuote: {
        type: "boolean",
        default: true,
    },
    quoteColor: {
        type: "string",
        default: "#edf1f7",
    },
    quoteSize: {
        type: "number",
        default: 60,
    },
    quoteHorizontalPosition: {
        type: "string",
        default: "flex-start",
    },
    quoteVerticalPosition: {
        type: "number",
        default: 1,
    },
    userInfoAlign: {
        type: "string",
        default: "center",
    },
    //Margin
    linkedMargin: {
        type: "boolean",
        default: false,
    },
    //Padding
    linkedPadding: {
        type: "boolean",
        default: false,
    },

    marginUnit: {
        type: "string",
        default: "px",
    },
    tabMarginUnit: {
        type: "string",
        default: "px",
    },
    mobMarginUnit: {
        type: "string",
        default: "px",
    },
    paddingUnit: {
        type: "string",
        default: "px",
    },
    tabPaddingUnit: {
        type: "string",
        default: "px",
    },
    mobPaddingUnit: {
        type: "string",
        default: "px",
    },
    nameSizeUnit: {
        type: "string",
        default: "px",
    },
    companySizeUnit: {
        type: "string",
        default: "px",
    },
    descriptionSizeUnit: {
        type: "string",
        default: "px",
    },
    quoteSizeUnit: {
        type: "string",
        default: "px",
    },
    companyColor: {
        type: "string",
        default: "#4a5059",
    },

    bgPositon: {
        type: "string",
    },

    showRating: {
        type: "boolean",
        default: false,
    },
    rating: {
        type: "number",
        default: 5,
    },
    ratingColor: {
        type: "string",
        default: "#f2b01e",
    },

    ratingIndivisual: {
        type: "boolean",
        default: false,
    },
    ratingPosition: {
        type: "number",
        default: 3,
    },

    /**
     * Autogenerated Attributes
     */
    // margin attributes ⬇
    ...generateDimensionsAttributes("margin", {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
    }),
    // padding attributes ⬇
    ...generateDimensionsAttributes("padding", {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
    }),
    // typography attributes ⬇
    ...generateTypographyAttributes(
        Object.values({
            username: "username",
            company: "company",
            description: "description",
        })
    ),

    //Generate Border & Shadow
    ...generateBorderShadowAttributes(WrpBdShadow, {}),

    // background attributes ⬇
    ...generateBackgroundAttributes(TestimonialWrapBg, {
        defaultFillColor: "#fff",
        defaultBgGradient: "linear-gradient(45deg,#fff,#fff)",
    }),

    // range controller
    ...generateResponsiveRangeAttributes(RATING_SIZE, {
        defaultRange: 14,
    }),
    ...generateResponsiveRangeAttributes(QUOTE_SIZE, {
        defaultRange: 60,
    }),

    ...generateResponsiveRangeAttributes(IMG_WIDTH, {
        // defaultRange: 60,
    }),
    ...generateResponsiveRangeAttributes(IMG_GAP, {
        defaultRange: 15,
    }),
    ...generateBorderShadowAttributes(ImgBdShadow, {
        // noBorderRadius,
    }),
};

export default attributes;
