# Changelog

## 0.0.1 (2025-07-21)

Full Changelog: [v0.1.0-alpha.12...v0.0.1](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.12...v0.0.1)

### Features

* **api:** manual updates ([51f9de8](https://github.com/brand-dot-dev/typescript-sdk/commit/51f9de82a052b33c027b38b103bb2fa2557cc32e))
* **mcp:** support filtering tool results by a jq expression ([7bb7ed6](https://github.com/brand-dot-dev/typescript-sdk/commit/7bb7ed637ba3ff9bb957fca486973134be21e1ed))


### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([8a3d09d](https://github.com/brand-dot-dev/typescript-sdk/commit/8a3d09d405b8ce692a492ae3082a473a386d345c))
* **mcp:** relax input type for asTextContextResult ([b604761](https://github.com/brand-dot-dev/typescript-sdk/commit/b6047611bda8b8c275f87828f21b98d3a79cba20))
* **mcp:** support jq filtering on cloudflare workers ([05a640e](https://github.com/brand-dot-dev/typescript-sdk/commit/05a640ee793c5a0f276688e38a43a592276c51b8))


### Chores

* add docs to RequestOptions type ([f4b33df](https://github.com/brand-dot-dev/typescript-sdk/commit/f4b33df15437998afd2d728ec5224f9c1a880890))
* **client:** improve path param validation ([2f2fc76](https://github.com/brand-dot-dev/typescript-sdk/commit/2f2fc76068cde16de95d3a718b8a80edeee4902b))
* make some internal functions async ([683286e](https://github.com/brand-dot-dev/typescript-sdk/commit/683286e2a0e44bfef1501d19f29cd5dc05caa82f))
* **mcp:** formatting ([0939837](https://github.com/brand-dot-dev/typescript-sdk/commit/0939837fae8c9da449ec10f7aa65355bf2612654))
* **mcp:** rework imports in tools ([497fc6c](https://github.com/brand-dot-dev/typescript-sdk/commit/497fc6c5a69112de5677dee10d77995705872af9))
* **ts:** reorder package.json imports ([4495729](https://github.com/brand-dot-dev/typescript-sdk/commit/44957290ba6883ecb207720620001ba6b75559bd))

## 0.1.0-alpha.12 (2025-06-29)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **api:** manual updates ([553a065](https://github.com/brand-dot-dev/typescript-sdk/commit/553a065ea64adf95b92d149e3a23bb8f0f71725e))

## 0.1.0-alpha.11 (2025-06-28)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([14af55d](https://github.com/brand-dot-dev/typescript-sdk/commit/14af55d22732fdce0ce00bfeb417bc91adfff740))
* **client:** explicitly copy fetch in withOptions ([17dfeaf](https://github.com/brand-dot-dev/typescript-sdk/commit/17dfeaf08885c914a1ac4c0f24233c87e358f31e))
* **client:** get fetchOptions type more reliably ([5b28587](https://github.com/brand-dot-dev/typescript-sdk/commit/5b285874706b67864bba4152887181c2bd380173))


### Chores

* **ci:** only run for pushes and fork pull requests ([63b08b8](https://github.com/brand-dot-dev/typescript-sdk/commit/63b08b8334584bddd085d1de493281967e57bd51))

## 0.1.0-alpha.10 (2025-06-19)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** manual updates ([17e2f82](https://github.com/brand-dot-dev/typescript-sdk/commit/17e2f8259071877dfb71d51c107b23965bf01d35))

## 0.1.0-alpha.9 (2025-06-19)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** manual updates ([f405c69](https://github.com/brand-dot-dev/typescript-sdk/commit/f405c69d49712539cb8623e9a5cc2b73431dd9dc))
* **api:** manual updates ([437ffa2](https://github.com/brand-dot-dev/typescript-sdk/commit/437ffa2b5b4d650dafc0584ab45bafce9ccabc8e))
* **client:** add support for endpoint-specific base URLs ([bd84840](https://github.com/brand-dot-dev/typescript-sdk/commit/bd848405ed7a7b7cf967dc9e9e068a3b04eb5bfd))
* **mcp:** set X-Stainless-MCP header ([9f8bca8](https://github.com/brand-dot-dev/typescript-sdk/commit/9f8bca8ea75f6d11b15e3dfcbc9abeb4461257e2))


### Bug Fixes

* publish script — handle NPM errors correctly ([ce784cd](https://github.com/brand-dot-dev/typescript-sdk/commit/ce784cdd350a285e46139075209405820d7624e1))


### Chores

* **ci:** enable for pull requests ([623b5d6](https://github.com/brand-dot-dev/typescript-sdk/commit/623b5d6a5ea903ac4c2ed14841587318c3b62b75))
* **client:** refactor imports ([d90fb77](https://github.com/brand-dot-dev/typescript-sdk/commit/d90fb773c0a32e7129041025cda6bf999d4750a0))
* **internal:** add pure annotations, make base APIResource abstract ([d8a845c](https://github.com/brand-dot-dev/typescript-sdk/commit/d8a845cc477720993869fd020e4a65d9b49c5e1f))
* **mcp:** provides high-level initMcpServer function and exports known clients ([cd28940](https://github.com/brand-dot-dev/typescript-sdk/commit/cd289406a6103a675b98405719a604b80c162f3c))
* **readme:** update badges ([46380e0](https://github.com/brand-dot-dev/typescript-sdk/commit/46380e0141b9570f5e2c816c5ca90f74f781df69))
* **readme:** use better example snippet for undocumented params ([56c698d](https://github.com/brand-dot-dev/typescript-sdk/commit/56c698d1f5b47609e2e3da90c18813c715bdbb84))

## 0.1.0-alpha.8 (2025-06-08)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** manual updates ([bb954b6](https://github.com/brand-dot-dev/typescript-sdk/commit/bb954b60752ae7fe07f154657d56b006427ca4b5))


### Chores

* avoid type error in certain environments ([0b97df8](https://github.com/brand-dot-dev/typescript-sdk/commit/0b97df8bf0798a7cb2d4f8d570f79dc9c599e3c7))

## 0.1.0-alpha.7 (2025-06-06)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** manual updates ([d997f7b](https://github.com/brand-dot-dev/typescript-sdk/commit/d997f7b982051edb3e3a3eeb4dc6c57f7723c134))

## 0.1.0-alpha.6 (2025-06-06)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** manual updates ([f9ef6a0](https://github.com/brand-dot-dev/typescript-sdk/commit/f9ef6a0bf6cb6426fec94f0abb5a6c8acc668141))

## 0.1.0-alpha.5 (2025-06-06)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** manual updates ([e71b7eb](https://github.com/brand-dot-dev/typescript-sdk/commit/e71b7eb187e3acef2bc6fbf5b2beb0b47800245b))

## 0.1.0-alpha.4 (2025-06-06)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** manual updates ([1cc75cd](https://github.com/brand-dot-dev/typescript-sdk/commit/1cc75cd9877da7b2280329cf4e53c7b73f067d46))
* **mcp:** implement support for binary responses ([4d35e49](https://github.com/brand-dot-dev/typescript-sdk/commit/4d35e49621a740137fde22d0d50b570366697967))


### Chores

* adjust eslint.config.mjs ignore pattern ([95468aa](https://github.com/brand-dot-dev/typescript-sdk/commit/95468aa42a24f2f9333d2cf240b8b604d30e4b75))
* **docs:** use top-level-await in example snippets ([2376ef9](https://github.com/brand-dot-dev/typescript-sdk/commit/2376ef99f488b1b990d3adeaa783be774bd3bbdb))
* **internal:** fix readablestream types in node 20 ([d753e24](https://github.com/brand-dot-dev/typescript-sdk/commit/d753e243856e1efa6d82e5a3ba5e395a6dfe3558))

## 0.1.0-alpha.3 (2025-06-02)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** manual updates ([dbd6df5](https://github.com/brand-dot-dev/typescript-sdk/commit/dbd6df5265d5e77ed900bffec20e42b7d9686302))

## 0.1.0-alpha.2 (2025-05-31)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Bug Fixes

* compat with more runtimes ([4595f13](https://github.com/brand-dot-dev/typescript-sdk/commit/4595f133be88a2d148b9267ccd4535eb9a558f51))


### Chores

* **deps:** bump eslint-plugin-prettier ([4637721](https://github.com/brand-dot-dev/typescript-sdk/commit/4637721c6e8bb3feeaf727824ee1b2f67cd13204))
* **internal:** update jest config ([261cd8e](https://github.com/brand-dot-dev/typescript-sdk/commit/261cd8e99fcb636154c5f8b669ccfcaa6d6ff6e9))

## 0.1.0-alpha.1 (2025-05-29)

Full Changelog: [v0.0.1-alpha.2...v0.1.0-alpha.1](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.0.1-alpha.2...v0.1.0-alpha.1)

### Features

* **mcp:** include http information in tools ([608a554](https://github.com/brand-dot-dev/typescript-sdk/commit/608a5549eba7d3775b4be77278e44eff460a56f3))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([ab24ba0](https://github.com/brand-dot-dev/typescript-sdk/commit/ab24ba029cf26e71ac15da2a6dcdc55fb5c6bc20))
* **mcp:** include description in dynamic tool search ([d698f91](https://github.com/brand-dot-dev/typescript-sdk/commit/d698f9173f905924424c82e0026b06fec3488572))


### Chores

* improve publish-npm script --latest tag logic ([a096145](https://github.com/brand-dot-dev/typescript-sdk/commit/a0961454962591ee6e1f0179ad1abf335275235e))
* **internal:** codegen related update ([0bdcf4b](https://github.com/brand-dot-dev/typescript-sdk/commit/0bdcf4b6aa36c58284b5afe76776711e1121b5b1))
* **mcp:** remove duplicate assignment ([1984da9](https://github.com/brand-dot-dev/typescript-sdk/commit/1984da989afc8b54c8a81656a0c32f0a488eeb68))

## 0.0.1-alpha.2 (2025-05-21)

Full Changelog: [v0.0.1-alpha.1...v0.0.1-alpha.2](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)

### Chores

* configure new SDK language ([fa4bf57](https://github.com/brand-dot-dev/typescript-sdk/commit/fa4bf57b52799969998afe320e24014cb078140c))

## 0.0.1-alpha.1 (2025-05-21)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* update SDK settings ([0ce8ece](https://github.com/brand-dot-dev/typescript-sdk/commit/0ce8ecedb16b548b04b8c09f1692249b944a1b37))
* update SDK settings ([a090aec](https://github.com/brand-dot-dev/typescript-sdk/commit/a090aec93fa38eadb6a59c751447d2f164c45a6c))
