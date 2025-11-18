# GitHub Repository Setup Guide

## 1. Branch Protection Setup

Untuk mengaktifkan branch protection pada branch `master`, ikuti langkah-langkah berikut:

### Langkah-langkah:

1. Buka repository Anda di GitHub
2. Klik **Settings** (tab di bagian atas)
3. Di sidebar kiri, klik **Branches**
4. Di bagian "Branch protection rules", klik **Add rule**
5. Di "Branch name pattern", ketik: `master` (atau `main` jika menggunakan main sebagai default branch)
6. Centang opsi berikut yang direkomendasikan:

   ✅ **Require a pull request before merging**
   - Centang "Require approvals" (minimal 1 approval)
   
   ✅ **Require status checks to pass before merging**
   - Centang "Require branches to be up to date before merging"
   
   ✅ **Require conversation resolution before merging**
   
   ✅ **Include administrators** (opsional, untuk keamanan maksimal)
   
   ✅ **Restrict who can push to matching branches** (opsional)
   
   ✅ **Do not allow bypassing the above settings**

7. Klik **Create** atau **Save changes**

### Alternatif: Menggunakan GitHub CLI

Jika Anda memiliki GitHub CLI terinstall, jalankan:

```bash
gh api repos/:owner/:repo/branches/master/protection \
  --method PUT \
  --field required_pull_request_reviews[required_approving_review_count]=1 \
  --field required_pull_request_reviews[dismiss_stale_reviews]=true \
  --field enforce_admins=true \
  --field restrictions=null
```

---

## 2. Dependabot Configuration

### File yang sudah dibuat:

1. **`.github/dependabot.yml`** - Konfigurasi Dependabot
   - Memeriksa dependencies setiap minggu
   - Membuat PR otomatis untuk update

2. **`.github/workflows/dependabot-auto-merge.yml`** - Auto-merge workflow
   - Otomatis merge PR dari Dependabot untuk patch dan minor updates

### Mengaktifkan Dependabot Alerts:

1. Buka repository di GitHub
2. Klik **Settings**
3. Di sidebar kiri, klik **Security & analysis**
4. Aktifkan:
   - ✅ **Dependabot alerts**
   - ✅ **Dependabot security updates**
   - ✅ **Dependabot version updates**

### Menangani Email Dependabot:

Untuk mengurangi email dari Dependabot:

1. Buka https://github.com/settings/notifications
2. Di bagian "Dependabot alerts", pilih:
   - "Only receive notifications when you're participating, @mentioned, or asked for review"
   - Atau nonaktifkan notifikasi email sepenuhnya

---

## 3. Dependencies yang Sudah Diupdate

Dependencies telah diupdate ke versi terbaru yang aman:

- **React**: 16.13.1 → 18.2.0
- **React DOM**: 16.13.1 → 18.2.0
- **React Router DOM**: 5.2.0 → 6.20.0
- **React Scripts**: 3.4.1 → 5.0.1

### Catatan Migrasi:

Karena ada major version update (React 16 → 18 dan React Router 5 → 6), Anda mungkin perlu melakukan beberapa perubahan pada kode:

#### React 18 Changes:
- `ReactDOM.render()` diganti dengan `ReactDOM.createRoot()`

#### React Router 6 Changes:
- `<Switch>` diganti dengan `<Routes>`
- `<Route>` sekarang menggunakan `element` prop, bukan `component`
- `useHistory()` diganti dengan `useNavigate()`

---

## 4. Rekomendasi Tambahan

### Security Best Practices:

1. **Aktifkan 2FA** untuk akun GitHub Anda
2. **Code Scanning**: Aktifkan CodeQL di Settings > Security & analysis
3. **Secret Scanning**: Pastikan aktif untuk mencegah credential leak
4. **Review Dependencies**: Rutin review dan update dependencies

### Workflow Recommendations:

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

---

## Support

Jika ada pertanyaan atau masalah, silakan buka issue di repository ini.

