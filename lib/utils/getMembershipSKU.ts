const getMembershipSKU = (membershipType: string) => {
  switch (membershipType) {
    case 'individual':
      return 'price_1HHxlPIKEd7Nl0FwtfvssiOg';
    case 'family':
      return 'price_1HqkxvIKEd7Nl0FwKCZBicTh';
    default:
      throw new Error('Membership type invalid');
  }
};

export default getMembershipSKU;
