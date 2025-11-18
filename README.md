# React SPA

Single Page Application Using React JS

## 🚀 Technologies

- **React** 18.2.0
- **React Router** 6.20.0
- **React Scripts** 5.0.1

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🔒 Security & Maintenance

This project uses:

- **Dependabot** - Automated dependency updates
- **GitHub Actions** - Auto-merge safe dependency updates
- **Branch Protection** - Protected master branch (setup required)

### Setup Branch Protection

⚠️ **Important**: Your master branch needs protection. Please follow the setup guide in [GITHUB_SETUP.md](./GITHUB_SETUP.md)

Quick steps:
1. Go to GitHub Settings → Branches
2. Add branch protection rule for `master`
3. Enable required pull request reviews
4. Enable status checks before merging

### Dependabot Alerts

To manage Dependabot email notifications:
1. Go to https://github.com/settings/notifications
2. Configure Dependabot alerts preferences
3. The `.github/dependabot.yml` file is already configured for automatic updates

## 📝 Project Structure

```
react-spa/
├── public/
│   └── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── home.js
│   │   ├── kontak.js
│   │   ├── main.js
│   │   ├── tentang.js
│   │   └── transaksi.js
│   └── index.js
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       └── dependabot-auto-merge.yml
└── package.json
```

## 🔄 Recent Updates

- ✅ Updated all dependencies to latest stable versions
- ✅ Migrated to React 18 (createRoot API)
- ✅ Migrated to React Router 6 (Routes, element prop)
- ✅ Configured Dependabot for automated updates
- ✅ Added auto-merge workflow for safe updates
- ✅ Added comprehensive documentation

## 📚 Documentation

- [GitHub Setup Guide](./GITHUB_SETUP.md) - Branch protection and Dependabot configuration
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

MIT

