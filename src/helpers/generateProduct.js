import { faker } from '@faker-js/faker'
export function generateFakeItem() {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 100000, max: 700000 }),
    description: faker.lorem.paragraphs(),
    manual: faker.lorem.paragraphs(),
    size: Array.from({ length: 3 }, () => ({
      quantity: faker.number.int({ min: 50, max: 300 }),
      type: faker.helpers.arrayElement(['S', 'M', 'L', 'XL'])
    })),
    rating: faker.number.int({ min: 1, max: 5 }),
    images: Array.from({ length: 4 }, () => faker.image.imageUrl()),
    reviews: Array.from({ length: 3 }, () => ({
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      userAvatar: faker.internet.avatar(),
      rating: faker.number.int({ min: 1, max: 5 }),
      comment: faker.lorem.paragraph(),
      createdAt: faker.date.past(),
      size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL'])
    }))
  };
}
