-- CreateTable
CREATE TABLE "Transactions" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME,
    "amount" REAL NOT NULL DEFAULT 0.00,
    "import_category" TEXT,
    "description" TEXT,
    "transaction_type" TEXT,
    "id_category" INTEGER,
    "id_account" INTEGER,
    CONSTRAINT "Transactions_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Categories" ("ID") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Transactions_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "Accounts" ("ID") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Budgets" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_category" INTEGER,
    "amount" REAL NOT NULL DEFAULT 0.00,
    "start_date" DATETIME,
    "end_date" DATETIME,
    CONSTRAINT "Budgets_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Categories" ("ID") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categories" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT,
    "description" TEXT,
    "color" TEXT,
    "icon" TEXT,
    "parent_category_id" INTEGER,
    CONSTRAINT "Categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "Categories" ("ID") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Accounts" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "description" TEXT,
    "color" TEXT,
    "amount" REAL NOT NULL DEFAULT 0.00,
    "type" TEXT
);
