#!/bin/bash

echo "=== SupportFlow: Initial Setup ==="

# npm install
echo ""
echo "Installing dependencies..."

echo "  [1/4] root"
npm install

echo "  [2/4] frontend"
npm install --prefix frontend

echo "  [3/4] backend"
npm install --prefix backend

echo "  [4/4] openapi"
npm install --prefix openapi

# cp .env.example to .env
echo ""
echo "Setting up .env files..."

if [ ! -f frontend/.env ]; then
  cp frontend/.env.example frontend/.env
  echo "  Created frontend/.env"
else
  echo "  Skipped frontend/.env (already exists)"
fi

if [ ! -f frontend/.env.mock ]; then
  cp frontend/.env.mock.example frontend/.env.mock
  echo "  Created frontend/.env.mock"
else
  echo "  Skipped frontend/.env.mock (already exists)"
fi

if [ ! -f backend/.env ]; then
  cp backend/.env.example backend/.env
  echo "  Created backend/.env"
else
  echo "  Skipped backend/.env (already exists)"
fi

echo ""
echo "=== Setup complete! ==="
echo ""
echo "Next steps:"
echo "  npm run dev       # start with real backend"
echo "  npm run dev:mock  # start with mock server"
