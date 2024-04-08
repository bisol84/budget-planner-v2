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
      { id: 1000, category: 'Ménage', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1001, category: 'Transport', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1002, category: 'Assurances', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1003, category: 'Loisirs', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1004, category: 'Taxes', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1005, category: 'Santé', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1006, category: 'Personnel', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1007, category: 'A classer', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: null },
      { id: 1, category: 'A classer', description: '', color: '#4338ca', icon: 'fa-solid fa-question', parentCategoryId: 1007 },
      { id: 2, category: 'Assurance automobile', description: '', color: '#ff5733', icon: 'fa-solid fa-car-burst fa-lg', parentCategoryId: 1002 },
      { id: 3, category: 'Assurance santé', description: '', color: '#33ff57', icon: 'fas fa-heartbeat fa-lg', parentCategoryId: 1002 },
      { id: 4, category: 'Train', description: '', color: '#5733ff', icon: 'fas fa-train fa-lg', parentCategoryId: 1001 },
      { id: 5, category: 'Courses', description: '', color: '#33ffbd', icon: 'fas fa-carrot fa-lg', parentCategoryId: 1000 },
      { id: 6, category: 'Restaurants', description: '', color: '#ffc733', icon: 'fas fa-hamburger fa-lg', parentCategoryId: 1003 },
      { id: 7, category: 'Parkings', description: '', color: '#33c7ff', icon: 'fas fa-map-marker-alt fa-lg', parentCategoryId: 1002 },
      { id: 8, category: 'Impots', description: '', color: '#e933ff', icon: 'fas fa-coins fa-lg', parentCategoryId: 1004 },
      { id: 9, category: 'Loyer', description: '', color: '#ff3385', icon: 'fas fa-paint-roller fa-lg', parentCategoryId: 1000 },
      { id: 10, category: 'Eléctricité', description: '', color: '#a233ff', icon: 'fa-solid fa-bolt fa-lg', parentCategoryId: 1000 },
      { id: 11, category: 'Eau', description: '', color: '#33ffed', icon: 'fa-solid fa-water fa-lg', parentCategoryId: 1000 },
      { id: 12, category: 'Téléphone', description: '', color: '#ff33b4', icon: 'fa-solid fa-phone fa-lg', parentCategoryId: 1006 },
      { id: 13, category: 'Internet', description: '', color: '#5d33ff', icon: 'fa-solid fa-globe fa-lg', parentCategoryId: 1000 },
      { id: 14, category: 'Télévision', description: '', color: '#33fff6', icon: 'fa-solid fa-tv fa-lg', parentCategoryId: 1000 },
      { id: 15, category: 'Médicaments', description: '', color: '#ff336c', icon: 'fa-solid fa-notes-medical fa-lg', parentCategoryId: 1005 },
      { id: 16, category: 'Habits', description: '', color: '#ffa833', icon: 'fa-solid fa-shirt fa-lg', parentCategoryId: 1006 },
      { id: 17, category: 'Livres', description: '', color: '#ff33e4', icon: 'fa-solid fa-book fa-lg', parentCategoryId: 1003 },
      { id: 18, category: 'Cinéma', description: '', color: '#33ff72', icon: 'fa-solid fa-video fa-lg', parentCategoryId: 1003 },
      { id: 19, category: 'Théâtre', description: '', color: '#ff5733', icon: 'fa-solid fa-chalkboard-user fa-lg', parentCategoryId: 1003 },
      { id: 20, category: 'Dons', description: '', color: '#f333ff', icon: 'fa-solid fa-hand-holding-dollar fa-lg', parentCategoryId: 1005 },
      { id: 21, category: 'Cadeaux', description: '', color: '#33e7ff', icon: 'fa-solid fa-gift fa-lg', parentCategoryId: 1000 },
      { id: 22, category: 'Vacances', description: '', color: '#ff333e', icon: 'fa-solid fa-umbrella-beach fa-lg', parentCategoryId: 1003 },
      { id: 23, category: 'Voiture', description: '', color: '#33ff9c', icon: 'fa-solid fa-car fa-lg', parentCategoryId: 1001 },
      { id: 24, category: 'Jeux', description: '', color: '#43fd9c', icon: 'fa-solid fa-gamepad fa-lg', parentCategoryId: 1003 },
      { id: 25, category: 'Médecin', description: '', color: '#53fd9c', icon: 'fa-solid fa-user-doctor fa-lg', parentCategoryId: 1005 },
      { id: 26, category: 'Sport', description: '', color: '#53fd9c', icon: 'fa-solid fa-dumbbell fa-lg', parentCategoryId: 1005 }      
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
