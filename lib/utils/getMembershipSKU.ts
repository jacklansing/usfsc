const getMembershipSKU = (membershipType: string) => {
  switch (membershipType) {
    case 'individual':
      return 'price_0HvP0H3vwmRgFgMWbbU9gXWq';
    case 'family':
      return 'price_0HvP1G3vwmRgFgMWaTmU37S4';
    case 'introductory':
      return 'price_0HvP3n3vwmRgFgMWwc7vbXxX';
    case 'professional':
      return 'price_0HvP7l3vwmRgFgMWZQr5i9Q6';
    default:
      throw new Error('Membership type invalid');
  }
};

export default getMembershipSKU;
