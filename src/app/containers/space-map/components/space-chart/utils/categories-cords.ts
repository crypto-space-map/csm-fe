export const getCategoriesCords = (sortingNumber: number, width = 0, height = 0) => {
  switch (sortingNumber) {
    case 1: // Business services
      return { x: width * 0.88, y: height * 0.8 };
    case 2: // Exchanges
      return { x: width * 0.25, y: height * 0.35 };
    case 3: // Currency
      return { x: width * 0.88, y: height * 0.5 };
    case 4: // Defi
      return { x: width * 0.75, y: height * 0.27 };
    case 5: // Entertainment
      return { x: width * 0.4, y: height * 0.27 };
    case 6: // NFT
      return { x: width * 0.25, y: height * 0.75 };
    case 7: // Gaming
      return { x: width * 0.35, y: height * 0.55 };
    case 8: // WEB3
      return { x: width * 0.7, y: height * 0.8 };
    case 9: // Smart contract
      return { x: width * 0.55, y: height * 0.5 };
    case 10: // Blockchain enhancement
      return { x: width * 0.75, y: height * 0.55 };
    case 11: // Data
      return { x: width * 0.4, y: height * 0.8 };
    case 12: // Social services
      return { x: width * 0.88, y: height * 0.25 };
    case 13: // NGMI
      return { x: width * 0.8, y: height * 0.85 };
  }
  return { x: width * 1.5, y: height * 1.5 };
};
