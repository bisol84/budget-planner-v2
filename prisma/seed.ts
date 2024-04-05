import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  try {
    const demoAccount = await prisma.accounts.create({
      data: {
        name: 'Compte 01',
        description: '',
        amount: 0,
        type: 'Compte bancaire',
      },
    });

    // Insertion des catégories
    const categories = [
      { id: 1000, category: 'Ménage', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1001, category: 'Transport', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1002, category: 'Assurances', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1003, category: 'Loisirs', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1004, category: 'Taxes', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1005, category: 'Santé', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1006, category: 'Personnel', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1007, category: 'A classer', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1, category: 'A classer', description: '', color: 'rgba(67, 56, 202, 0.75)', icon: 'fa-solid fa-question', parentCategoryId: 1007 },
      { id: 2, category: 'Assurance automobile', description: '', color: 'rgba(255, 87, 51, 0.75)', icon: 'fa-solid fa-car-burst fa-lg', parentCategoryId: 1002 },
      { id: 3, category: 'Assurance santé', description: '', color: 'rgba(51, 255, 87, 0.75)', icon: 'fas fa-heartbeat fa-lg', parentCategoryId: 1002 },
      { id: 4, category: 'Train', description: '', color: 'rgba(87, 51, 255, 0.75)', icon: 'fas fa-train fa-lg', parentCategoryId: 1001 },
      { id: 5, category: 'Courses', description: '', color: 'rgba(51, 255, 189, 0.75)', icon: 'fas fa-carrot fa-lg', parentCategoryId: 1000 },
      { id: 6, category: 'Restaurants', description: '', color: 'rgba(255, 199, 51, 0.75)', icon: 'fas fa-hamburger fa-lg', parentCategoryId: 1003 },
      { id: 7, category: 'Parkings', description: '', color: 'rgba(51, 199, 255, 0.75)', icon: 'fas fa-map-marker-alt fa-lg', parentCategoryId: 1002 },
      { id: 8, category: 'Impots', description: '', color: 'rgba(233, 51, 255, 0.75)', icon: 'fas fa-coins fa-lg', parentCategoryId: 1004 },
      { id: 9, category: 'Loyer', description: '', color: 'rgba(255, 51, 133, 0.75)', icon: 'fas fa-paint-roller fa-lg', parentCategoryId: 1000 },
      { id: 10, category: 'Eléctricité', description: '', color: 'rgba(162, 51, 255, 0.75)', icon: 'fa-solid fa-bolt fa-lg', parentCategoryId: 1000 },
      { id: 11, category: 'Eau', description: '', color: 'rgba(51, 255, 237, 0.75)', icon: 'fa-solid fa-water fa-lg', parentCategoryId: 1000 },
      { id: 12, category: 'Téléphone', description: '', color: 'rgba(255, 51, 180, 0.75)', icon: 'fa-solid fa-phone fa-lg', parentCategoryId: 1006 },
      { id: 13, category: 'Internet', description: '', color: 'rgba(93, 51, 255, 0.75)', icon: 'fa-solid fa-globe fa-lg', parentCategoryId: 1000 },
      { id: 14, category: 'Télévision', description: '', color: 'rgba(51, 255, 246, 0.75)', icon: 'fa-solid fa-tv fa-lg', parentCategoryId: 1000 },
      { id: 15, category: 'Médicaments', description: '', color: 'rgba(255, 51, 108, 0.75)', icon: 'fa-solid fa-notes-medical fa-lg', parentCategoryId: 1005 },
      { id: 16, category: 'Habits', description: '', color: 'rgba(255, 168, 51, 0.75)', icon: 'fa-solid fa-shirt fa-lg', parentCategoryId: 1006 },
      { id: 17, category: 'Livres', description: '', color: 'rgba(255, 51, 228, 0.75)', icon: 'fa-solid fa-book fa-lg', parentCategoryId: 1003 },
      { id: 18, category: 'Cinéma', description: '', color: 'rgba(51, 255, 114, 0.75)', icon: 'fa-solid fa-video fa-lg', parentCategoryId: 1003 },
      { id: 19, category: 'Théâtre', description: '', color: 'rgba(255, 87, 51, 0.75)', icon: 'fa-solid fa-chalkboard-user fa-lg', parentCategoryId: 1003 },
      { id: 20, category: 'Dons', description: '', color: 'rgba(243, 51, 255, 0.75)', icon: 'fa-solid fa-hand-holding-dollar fa-lg', parentCategoryId: 1005 },
      { id: 21, category: 'Cadeaux', description: '', color: 'rgba(51, 231, 255, 0.75)', icon: 'fa-solid fa-gift fa-lg', parentCategoryId: 1000 },
      { id: 22, category: 'Vacances', description: '', color: 'rgba(255, 51, 62, 0.75)', icon: 'fa-solid fa-umbrella-beach fa-lg', parentCategoryId: 1003 },
      { id: 23, category: 'Voiture', description: '', color: 'rgba(51, 255, 156, 0.75)', icon: 'fa-solid fa-car fa-lg', parentCategoryId: 1001 },
      { id: 24, category: 'Jeux', description: '', color: 'rgba(67, 253, 156, 0.75)', icon: 'fa-solid fa-gamepad fa-lg', parentCategoryId: 1003 },
      { id: 25, category: 'Médecin', description: '', color: 'rgba(83, 253, 156, 0.75)', icon: 'fa-solid fa-user-doctor fa-lg', parentCategoryId: 1005 },
      { id: 26, category: 'Sport', description: '', color: 'rgba(83, 253, 156, 0.75)', icon: 'fa-solid fa-dumbbell fa-lg', parentCategoryId: 1005 },
    ];

    for (const category of categories) {
      await prisma.categories.create({
        data: {
          ID: category.id,
          category: category.category,
          description: category.description,
          color: category.color,
          icon: category.icon,
          parent_category_id: category.parentCategoryId,
        },
      });
    }

    // Insertion des budgets
    const budgets = [
      { id_category: 1, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 2, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 3, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 4, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 5, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 6, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 7, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 8, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 9, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 10, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 11, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 12, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 13, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 14, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 15, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 16, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 17, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 18, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 19, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 20, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 21, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 22, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 23, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 24, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 25, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
      { id_category: 26, amount: 0, startDate: '1970-01-01', endDate: '9999-12-31' },
    ];

    for (const budget of budgets) {
      await prisma.budgets.create({
        data: {
          id_category: budget.id_category,
          amount: budget.amount,
          start_date: new Date(budget.startDate),
          end_date: new Date(budget.endDate),
        },
      });
    }

    console.log('Data seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
