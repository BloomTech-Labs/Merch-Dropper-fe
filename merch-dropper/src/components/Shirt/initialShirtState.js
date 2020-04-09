const initialShirtState = {
  // garment info is for Scalable Press
  garment: {
    color: "Team Purple",
    colorHex: "#824393",
    // dtg represents direct-to-garment
    printStyle: "dtg",
    // artwork links to
    artwork: "",
    designWidth: "6",
    horizontalPlacement: ".5",
    designPlacement: "C",
    offSetFromTop: "2",
    mockUrl: ""
  },
  // cloudinaryInfo is more or less empty because there is a stock image
  cloudinaryInfo: {
    publicId: "",
    version: 0,
    signature: "",
    eTag: "",
    url: "",
    secureUrl: "",
    croppedUrl: "",
    croppedThumbUrl: ""
  },

  productInfo: {
    productName: "Hive Collection",
    fullSizeURL: "",
    thumbnailURL: "",
    description: "Limited Edition",
    price: 62.99,
    storeID: 1
  },
  designInfo: {
    design_name: "Future Sloth",
    design_url: "",
    thumbnail_url: "",
    storeID: 1,
    userID: 1
  }
};

export default initialShirtState;
