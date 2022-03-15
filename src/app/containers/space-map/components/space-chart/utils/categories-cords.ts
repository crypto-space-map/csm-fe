export const getCategoriesCords = (sortingNumber: number, width = 0, height = 0) => {
  switch (sortingNumber) {
    case 1: // Work notary energy marketing supply
      return { x: width * 0.9, y: height * 0.7 };
    case 2: // Coin memecoin Gas
      return { x: width * 0.92, y: height * 0.5 };
    case 3: // Wallet Synthetics Landing Insurance
      return { x: width * 0.7, y: height * 0.25 };
    case 4: // VR AR Music Video Travel Sports
      return { x: width * 0.35, y: height * 0.2 };
    case 5: // Protocols and MP , Tokenized
      return { x: width * 0.22, y: height * 0.8 };
    case 6: // Gaming
      return { x: width * 0.36, y: height * 0.5 };
    case 7: // DAO
      return { x: width * 0.75, y: height * 0.8 };
    case 8: // "Interoperability"
      return { x: width * 0.77, y: height * 0.5 };
    case 9: // Oracles api computing
      return { x: width * 0.35, y: height * 0.8 };
    case 10: // Media content
      return { x: width * 0.9, y: height * 0.27 };
    case 100: // Cex
    case 101: // Dex
    case 102: // "Exchange aggregator"
      return { x: width * 0.23, y: height * 0.35 };
    case 103: // Smart contract platforms
      return { x: width * 0.55, y: height * 0.5 };
    case 104: // Smart contract platforms
      return { x: width * 0.72, y: height * 0.65 };
    case 105: // "Abandoned"
      return { x: width * 0.88, y: height * 0.85 };
    case 106: // Other
      return { x: width * 0.93, y: height * 0.85 };
  }
  return { x: width * 1.5, y: height * 1.5 };
};
