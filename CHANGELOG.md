# Changelog

## 0.28.0 (2026-02-24)

Full Changelog: [v0.27.0...v0.28.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.27.0...v0.28.0)

### Features

* **api:** api update ([349b511](https://github.com/brand-dot-dev/typescript-sdk/commit/349b511bc530fae82b93221aeec7032503da6a51))

## 0.27.0 (2026-02-23)

Full Changelog: [v0.26.0...v0.27.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.26.0...v0.27.0)

### Features

* **api:** manual updates ([f0fcc0f](https://github.com/brand-dot-dev/typescript-sdk/commit/f0fcc0f44172a69581295384f9ffcc9a2da8fc57))

## 0.26.0 (2026-02-22)

Full Changelog: [v0.25.0...v0.26.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.25.0...v0.26.0)

### Features

* **api:** api update ([0b3258a](https://github.com/brand-dot-dev/typescript-sdk/commit/0b3258a116b8bee9d6afc0a6899ba8a245cb70c0))
* **api:** api update ([5785b9a](https://github.com/brand-dot-dev/typescript-sdk/commit/5785b9a30487a4a796c7c80a06121e316a17a101))


### Bug Fixes

* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([4af627a](https://github.com/brand-dot-dev/typescript-sdk/commit/4af627af9269ae16f9a951756df7a58c637bd51f))


### Chores

* **internal/client:** fix form-urlencoded requests ([db0e168](https://github.com/brand-dot-dev/typescript-sdk/commit/db0e168199f3d5395f9b37c277b49dd6348f48b6))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([92dfaab](https://github.com/brand-dot-dev/typescript-sdk/commit/92dfaab1bbd8aae6b5e933ae4cd525fdba89f871))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([9c7a5bd](https://github.com/brand-dot-dev/typescript-sdk/commit/9c7a5bdbe6c8b4427985349261f758fa80161d8a))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([1971c44](https://github.com/brand-dot-dev/typescript-sdk/commit/1971c44e5ad75fe2045fd8e48ebc641a9599369b))
* **internal:** avoid type checking errors with ts-reset ([a125dbb](https://github.com/brand-dot-dev/typescript-sdk/commit/a125dbbcf72ebdf31ada22aa18e2735a99aa5632))
* **internal:** cache fetch instruction calls in MCP server ([226aabb](https://github.com/brand-dot-dev/typescript-sdk/commit/226aabb395eb072bf44948274ad62e894352191a))
* **internal:** improve layout of generated MCP server files ([d86325e](https://github.com/brand-dot-dev/typescript-sdk/commit/d86325e44ac91494723bca3f5735650adab6ce8e))
* **internal:** remove mock server code ([218d173](https://github.com/brand-dot-dev/typescript-sdk/commit/218d1739f0f50c13d46a4095abf253ca13909264))
* **mcp:** correctly update version in sync with sdk ([ba9fe6a](https://github.com/brand-dot-dev/typescript-sdk/commit/ba9fe6a6d94fc157cb316ba6f0b3cdf387252a73))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([949d9d8](https://github.com/brand-dot-dev/typescript-sdk/commit/949d9d831c4c406b0f2599228b2ece4a9c75fbc8))
* update mock server docs ([6ca1d31](https://github.com/brand-dot-dev/typescript-sdk/commit/6ca1d312a20179dc681e587eb1ff7777040dd74e))

## 0.25.0 (2026-02-09)

Full Changelog: [v0.24.0...v0.25.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.24.0...v0.25.0)

### Features

* **api:** manual updates ([a709cf6](https://github.com/brand-dot-dev/typescript-sdk/commit/a709cf6b5d3d04864a8ffed5b845b33de091f72f))

## 0.24.0 (2026-02-07)

Full Changelog: [v0.23.0...v0.24.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.23.0...v0.24.0)

### Features

* **api:** api update ([4bedfe8](https://github.com/brand-dot-dev/typescript-sdk/commit/4bedfe84800c6ebc64f8b0983f2674772b73d9df))

## 0.23.0 (2026-02-07)

Full Changelog: [v0.22.0...v0.23.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.22.0...v0.23.0)

### Features

* **api:** api update ([fc0f307](https://github.com/brand-dot-dev/typescript-sdk/commit/fc0f307bf17f59c98c78310ebc2ccecc2b5ac355))
* **mcp:** add initial server instructions ([26f830e](https://github.com/brand-dot-dev/typescript-sdk/commit/26f830ef8a93862ba2902f9bdd0a2cd53a1865f3))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([60a5820](https://github.com/brand-dot-dev/typescript-sdk/commit/60a5820c6194a717c6a795b5c9aa40510f03c744))
* **client:** avoid removing abort listener too early ([18599b7](https://github.com/brand-dot-dev/typescript-sdk/commit/18599b7afc117f6fc533ab109183ef779208da83))


### Chores

* **client:** do not parse responses with empty content-length ([00c1b99](https://github.com/brand-dot-dev/typescript-sdk/commit/00c1b991097b8681c8187edb2697259964d9f195))
* **client:** restructure abort controller binding ([8dcedeb](https://github.com/brand-dot-dev/typescript-sdk/commit/8dcedeb141df02789f5693034f8508d6f5d649ee))
* **internal:** add health check to MCP server when running in HTTP mode ([66562a1](https://github.com/brand-dot-dev/typescript-sdk/commit/66562a1949b45cac368d71004fb9238859011cb4))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([fc3bcca](https://github.com/brand-dot-dev/typescript-sdk/commit/fc3bcca431450e2cb886638003a1aeaebf41a210))
* **internal:** support oauth authorization code flow for MCP servers ([55744a2](https://github.com/brand-dot-dev/typescript-sdk/commit/55744a2b31a70642e6338d615d7e20fa522d1181))

## 0.22.0 (2026-02-02)

Full Changelog: [v0.21.0...v0.22.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.21.0...v0.22.0)

### Features

* **api:** api update ([e7fb26f](https://github.com/brand-dot-dev/typescript-sdk/commit/e7fb26f7fbc617422836487ad9ffe17fd3344d68))


### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([9360478](https://github.com/brand-dot-dev/typescript-sdk/commit/9360478746580df1f1a858a0ecf79934bb42e8f0))
* **mcp:** allow falling back for required env variables ([09dab63](https://github.com/brand-dot-dev/typescript-sdk/commit/09dab63013ffb5a2723000b6492aef5e61bf4095))
* **mcp:** correct code tool api output types ([71f2de2](https://github.com/brand-dot-dev/typescript-sdk/commit/71f2de2f619b958491e35e33698a9a3022bade0d))
* **mcp:** fix env parsing ([f4e7c3b](https://github.com/brand-dot-dev/typescript-sdk/commit/f4e7c3bfc7c293d394da040a48d68cf5e5704f84))
* **mcp:** fix options parsing ([61485b9](https://github.com/brand-dot-dev/typescript-sdk/commit/61485b9b18a5753373d85c1ddd027ac166eccbb5))
* **mcp:** update code tool prompt ([d999ce6](https://github.com/brand-dot-dev/typescript-sdk/commit/d999ce6d0da44ae19457c5f0241ee9628262c6d9))


### Chores

* break long lines in snippets into multiline ([1e60c3c](https://github.com/brand-dot-dev/typescript-sdk/commit/1e60c3c64123dfbe848a1320b7a7429e0d0fa2fe))
* **ci:** upgrade `actions/github-script` ([b854ab5](https://github.com/brand-dot-dev/typescript-sdk/commit/b854ab5a5450f3234e549529f5c4298c4c05db0f))
* **internal:** codegen related update ([b0805b6](https://github.com/brand-dot-dev/typescript-sdk/commit/b0805b6eceb018fa62a9e515dfc730789707b2f0))
* **internal:** codegen related update ([f93b56c](https://github.com/brand-dot-dev/typescript-sdk/commit/f93b56c06551b6c81459c5fb65113fe1606419fe))
* **internal:** codegen related update ([97b7fbd](https://github.com/brand-dot-dev/typescript-sdk/commit/97b7fbdcf37144cef821a513ade85a07367fb854))
* **internal:** codegen related update ([bef7684](https://github.com/brand-dot-dev/typescript-sdk/commit/bef7684c2ddd0cd33eae43e80411e1f51e1a2bec))
* **internal:** codegen related update ([bd51f18](https://github.com/brand-dot-dev/typescript-sdk/commit/bd51f183c67e1b36d62ff43c29754c22be4fd1e4))
* **internal:** fix dockerfile ([f30592f](https://github.com/brand-dot-dev/typescript-sdk/commit/f30592fed13e898acde9bc7b3af34efe1d332534))
* **internal:** update `actions/checkout` version ([a3dfca1](https://github.com/brand-dot-dev/typescript-sdk/commit/a3dfca1c80662bc077ea0470fcaaefd569950462))
* **internal:** update lock file ([d8e108e](https://github.com/brand-dot-dev/typescript-sdk/commit/d8e108e933a228e13a51d2ab5e44682bf4d645c6))
* **internal:** upgrade babel, qs, js-yaml ([2da1738](https://github.com/brand-dot-dev/typescript-sdk/commit/2da17386bba6e1d6389ed00028e47d9dda69d25b))
* **mcp:** add intent param to execute tool ([2ec26d8](https://github.com/brand-dot-dev/typescript-sdk/commit/2ec26d8b977fa513ae563a70cffb48908f9ba182))
* **mcp:** pass intent param to execute handler ([0062abc](https://github.com/brand-dot-dev/typescript-sdk/commit/0062abc926fd37e75089353cade4bb2be495c691))
* **mcp:** up tsconfig lib version to es2022 ([ee9e681](https://github.com/brand-dot-dev/typescript-sdk/commit/ee9e68199f559b686d7ac6c1cac35eecc924a9ee))
* **mcp:** upgrade dependencies ([b376c8e](https://github.com/brand-dot-dev/typescript-sdk/commit/b376c8e309722f66cdd06d225f38f91b12399adb))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([f3962ae](https://github.com/brand-dot-dev/typescript-sdk/commit/f3962aea63074c17feabafc613dc1c9355ce6b6d))

## 0.21.0 (2026-01-05)

Full Changelog: [v0.20.0...v0.21.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.20.0...v0.21.0)

### Features

* **api:** api update ([38b98b8](https://github.com/brand-dot-dev/typescript-sdk/commit/38b98b814f7514b5458fd7287c7b247e664fd461))
* **api:** api update ([ad0b469](https://github.com/brand-dot-dev/typescript-sdk/commit/ad0b46967ef3c73e2064330a9ad7c2478830429f))
* **api:** manual updates ([41bef4b](https://github.com/brand-dot-dev/typescript-sdk/commit/41bef4b4fb76142828bd3dd275ceec95524c0e77))

## 0.20.0 (2025-12-22)

Full Changelog: [v0.19.0...v0.20.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.19.0...v0.20.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** manual updates ([1d86d91](https://github.com/brand-dot-dev/typescript-sdk/commit/1d86d9156edc7bd122faf7cb50300fdadae11332))


### Bug Fixes

* **mcp:** pass base url to code tool ([bdae9f2](https://github.com/brand-dot-dev/typescript-sdk/commit/bdae9f257bef72f8fc0e3a1ebb0a0924a052c3f7))


### Chores

* **mcp:** remove deprecated tool schemes ([bba3e8f](https://github.com/brand-dot-dev/typescript-sdk/commit/bba3e8f0192d09cb61795d12b754fbb7d052f366))

## 0.19.0 (2025-12-14)

Full Changelog: [v0.18.0...v0.19.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.18.0...v0.19.0)

### Features

* **api:** api update ([925b93d](https://github.com/brand-dot-dev/typescript-sdk/commit/925b93dc9eca733bcd14956d9ed5be7b9087187b))

## 0.18.0 (2025-12-11)

Full Changelog: [v0.17.0...v0.18.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.17.0...v0.18.0)

### Features

* **api:** api update ([2f03734](https://github.com/brand-dot-dev/typescript-sdk/commit/2f03734ca4d85821e32bda62df90064cb83d9018))
* **mcp:** add typescript check to code execution tool ([8d242b6](https://github.com/brand-dot-dev/typescript-sdk/commit/8d242b64ef1a5211031f0658436f2685dcffd461))
* **mcp:** handle code mode calls in the Stainless API ([717986d](https://github.com/brand-dot-dev/typescript-sdk/commit/717986d162f7275c38c30af87aed7809fdb20811))
* **mcp:** return logs on code tool errors ([4eb0778](https://github.com/brand-dot-dev/typescript-sdk/commit/4eb0778c171a85a8312f6d7ac79da4c62f9e62f2))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([01fa9d6](https://github.com/brand-dot-dev/typescript-sdk/commit/01fa9d637f6c493759e40087733a7a6dbf6b4b5a))
* **mcp:** correct code tool API endpoint ([7d49b3d](https://github.com/brand-dot-dev/typescript-sdk/commit/7d49b3d138c9c7215a32e2e068ad2000e24e8e91))
* **mcp:** return correct lines on typescript errors ([2e33418](https://github.com/brand-dot-dev/typescript-sdk/commit/2e33418148d64b83a9bbf8d64a9304581c9b4a45))
* **mcp:** return tool execution error on api error ([5d28f60](https://github.com/brand-dot-dev/typescript-sdk/commit/5d28f6039cdd2f3077ff7cb59ea8188e4b2b9787))


### Chores

* **client:** fix logger property type ([27049b0](https://github.com/brand-dot-dev/typescript-sdk/commit/27049b0dca5dbf3a11299fb61dcccbf918d1746b))
* **internal:** codegen related update ([9c16793](https://github.com/brand-dot-dev/typescript-sdk/commit/9c1679381dc7e7ff2a338c83325c0770f161bb45))
* **internal:** codegen related update ([9c2662d](https://github.com/brand-dot-dev/typescript-sdk/commit/9c2662d38f4cd02ce6505b85609966b25feb9641))
* **internal:** upgrade eslint ([55ddd1d](https://github.com/brand-dot-dev/typescript-sdk/commit/55ddd1db85744e461708e2d01b03755a545df4d4))
* **mcp:** update lockfile ([d33ad7d](https://github.com/brand-dot-dev/typescript-sdk/commit/d33ad7d6eb16a9b3de0fff3ec827a8e3bcdbb9fc))
* use latest @modelcontextprotocol/sdk ([2d6174d](https://github.com/brand-dot-dev/typescript-sdk/commit/2d6174d381e57ae5bac37be7b1ffa96193430e17))

## 0.17.0 (2025-12-01)

Full Changelog: [v0.16.0...v0.17.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.16.0...v0.17.0)

### Features

* **api:** api update ([e64a50a](https://github.com/brand-dot-dev/typescript-sdk/commit/e64a50ab2076b885b6df19cec959011523dd4ef8))

## 0.16.0 (2025-11-29)

Full Changelog: [v0.15.0...v0.16.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.15.0...v0.16.0)

### Features

* **api:** manual updates ([d776dcc](https://github.com/brand-dot-dev/typescript-sdk/commit/d776dccb83ff103e1439c743cbd4c230b6ef26da))
* **mcp:** add detail field to docs search tool ([27d3cbe](https://github.com/brand-dot-dev/typescript-sdk/commit/27d3cbee160a14eed81a46b3df2718a1263879c1))

## 0.15.0 (2025-11-24)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.14.0...v0.15.0)

### Features

* **api:** api update ([ef50d82](https://github.com/brand-dot-dev/typescript-sdk/commit/ef50d8212e1ea9a65167477bfff60dacadadf6c5))

## 0.14.0 (2025-11-24)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.13.0...v0.14.0)

### Features

* **api:** api update ([270745c](https://github.com/brand-dot-dev/typescript-sdk/commit/270745ce72d64beadc213d62b896f0ec5d3c7e36))

## 0.13.0 (2025-11-19)

Full Changelog: [v0.12.0...v0.13.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.12.0...v0.13.0)

### Features

* **api:** manual updates ([f0aac3b](https://github.com/brand-dot-dev/typescript-sdk/commit/f0aac3ba6b6f6f9e5c82aa40ec269887eac76022))


### Bug Fixes

* **mcp:** return tool execution error on jq failure ([3bea425](https://github.com/brand-dot-dev/typescript-sdk/commit/3bea4251c74d45f1d4f7e93eea3b7ebd3ba386c9))


### Chores

* **internal:** codegen related update ([b2a195b](https://github.com/brand-dot-dev/typescript-sdk/commit/b2a195bc347751e3b811e396a2fc98870956721a))
* **internal:** codegen related update ([f6f2b96](https://github.com/brand-dot-dev/typescript-sdk/commit/f6f2b96cac50a4c3065664ddd109cbec0603ed5d))
* **internal:** configure MCP Server hosting ([6fbd477](https://github.com/brand-dot-dev/typescript-sdk/commit/6fbd477fa7aca0350edc70b7ae9c0f6896c9d56f))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([275e44b](https://github.com/brand-dot-dev/typescript-sdk/commit/275e44b698b0cbfca9657aa82e11b29c91f026b2))
* **mcp:** add line numbers to code tool errors ([f118d75](https://github.com/brand-dot-dev/typescript-sdk/commit/f118d754ded3c86a626c10252a1bf1bf3eb435dc))
* **mcp:** clarify http auth error ([266ea4b](https://github.com/brand-dot-dev/typescript-sdk/commit/266ea4bfb9c0f988d9686ffbadfc4dbace8fe178))
* **mcp:** upgrade jq-web ([f190a40](https://github.com/brand-dot-dev/typescript-sdk/commit/f190a4032ea01af16dae3152c9acb65b4c96d76e))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([44a87a5](https://github.com/brand-dot-dev/typescript-sdk/commit/44a87a5ffc14f155693f6b7cc281a80d41997691))
* **mcp:** add a README link to add server to VS Code or Claude Code ([fe2322b](https://github.com/brand-dot-dev/typescript-sdk/commit/fe2322b3a9af6a0095d36b47b223c14157639442))

## 0.12.0 (2025-11-05)

Full Changelog: [v0.11.0...v0.12.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.11.0...v0.12.0)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([0a88463](https://github.com/brand-dot-dev/typescript-sdk/commit/0a88463782af8041a3dcfe2fcc606892f6d957e7))


### Chores

* **internal:** grammar fix (it's -&gt; its) ([edaf715](https://github.com/brand-dot-dev/typescript-sdk/commit/edaf715c40910680a26bab5f696d766955665d57))
* mcp code tool explicit error message when missing a run function ([e08bfb8](https://github.com/brand-dot-dev/typescript-sdk/commit/e08bfb8b3f3cc0d61d6e3a6ddaba45a00e344a44))
* use structured error when code execution tool errors ([1a9c653](https://github.com/brand-dot-dev/typescript-sdk/commit/1a9c653fb8bac9b1720ece6ee0a8e07b1242d5d5))

## 0.11.0 (2025-10-31)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.10.0...v0.11.0)

### Features

* **api:** manual updates ([3e591a0](https://github.com/brand-dot-dev/typescript-sdk/commit/3e591a00f79a1e02f98276bf3d00848cfe1909c4))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([9988475](https://github.com/brand-dot-dev/typescript-sdk/commit/9988475ec99f02ccc698c236da8723eb6786f511))

## 0.10.0 (2025-10-30)

Full Changelog: [v0.9.1...v0.10.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.9.1...v0.10.0)

### Features

* **api:** api update ([428d5ac](https://github.com/brand-dot-dev/typescript-sdk/commit/428d5acc09ea231a827d7eb3db5bee73daa96582))
* **api:** api update ([011abe8](https://github.com/brand-dot-dev/typescript-sdk/commit/011abe8c6c2b21822c4f6143717186f2e8c93eb4))
* **api:** manual updates ([927022d](https://github.com/brand-dot-dev/typescript-sdk/commit/927022da975b57a9f085f3d1c8450b1b5f76861d))

## 0.9.1 (2025-10-09)

Full Changelog: [v0.9.0...v0.9.1](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.9.0...v0.9.1)

### Chores

* extract some types in mcp docs ([3b8f61b](https://github.com/brand-dot-dev/typescript-sdk/commit/3b8f61bc320fbfaef43f7c5d8e8f6fe895099c7d))

## 0.9.0 (2025-10-08)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.8.0...v0.9.0)

### Features

* **api:** api update ([ce64b29](https://github.com/brand-dot-dev/typescript-sdk/commit/ce64b29689364c62b93b930af22eb4882e81bcbe))
* **api:** api update ([411fb44](https://github.com/brand-dot-dev/typescript-sdk/commit/411fb44ff0558d155bf96800c105d43efc184715))
* **api:** api update ([62304b0](https://github.com/brand-dot-dev/typescript-sdk/commit/62304b03a8b46a2c6818ee3d3ac05f83fb3b45d0))


### Bug Fixes

* **mcp:** fix cli argument parsing logic ([4d93d5a](https://github.com/brand-dot-dev/typescript-sdk/commit/4d93d5a9de7a986582eff55e2add9c49015b7b4a))
* **mcp:** resolve a linting issue in server code ([c5cc506](https://github.com/brand-dot-dev/typescript-sdk/commit/c5cc506a715b7f7a969e99ccd00acb6925830eda))


### Chores

* **internal:** remove .eslintcache ([506f8c0](https://github.com/brand-dot-dev/typescript-sdk/commit/506f8c014d517dc095f76dcd9e6c3b2a416a1599))
* **internal:** use npm pack for build uploads ([baeea68](https://github.com/brand-dot-dev/typescript-sdk/commit/baeea68c8cd558123d4b6a3cbe684b7b73156ce2))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([b74deb8](https://github.com/brand-dot-dev/typescript-sdk/commit/b74deb8d666ac9b20a4ae88e958c6d86f46cf9e2))
* update lockfile ([e3498ad](https://github.com/brand-dot-dev/typescript-sdk/commit/e3498ad70ddafc820912b70d69b23320b772109c))

## 0.8.0 (2025-09-27)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.7.0...v0.8.0)

### Features

* **api:** api update ([1e16acb](https://github.com/brand-dot-dev/typescript-sdk/commit/1e16acb6d6ca8e50a110fdfc230ae43b9ee39950))
* **mcp:** add docs search tool ([0a055f3](https://github.com/brand-dot-dev/typescript-sdk/commit/0a055f370cf8893eb026c8a594a7d094e00105d6))
* **mcp:** add option for including docs tools ([73ad28b](https://github.com/brand-dot-dev/typescript-sdk/commit/73ad28b2df74875bbc5decbb36f52c70f67682ca))
* **mcp:** enable experimental docs search tool ([589b047](https://github.com/brand-dot-dev/typescript-sdk/commit/589b0475875274b8e9c4b4894d1b98e341a8c3ee))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([1020169](https://github.com/brand-dot-dev/typescript-sdk/commit/1020169737b7e28b4473eb93fa467ed11c708769))


### Performance Improvements

* faster formatting ([9ded0f3](https://github.com/brand-dot-dev/typescript-sdk/commit/9ded0f3e5f41384a2594969566b8673fa8f47bac))


### Chores

* **codegen:** internal codegen update ([8e46689](https://github.com/brand-dot-dev/typescript-sdk/commit/8e46689eb493e1208c17a8c9a7434bd0b9ca2aae))
* do not install brew dependencies in ./scripts/bootstrap by default ([b07f40c](https://github.com/brand-dot-dev/typescript-sdk/commit/b07f40c3047e27ee1f07ed953103f4b88ed5d455))
* **internal:** codegen related update ([1c0857f](https://github.com/brand-dot-dev/typescript-sdk/commit/1c0857f8ae786918ab5f6abe3231e3a6da4a83c0))
* **internal:** fix incremental formatting in some cases ([e27e1ef](https://github.com/brand-dot-dev/typescript-sdk/commit/e27e1efaec1884f254a90db62ea0c3adc3fcd35a))
* **internal:** gitignore .mcpb files ([c6ed0ce](https://github.com/brand-dot-dev/typescript-sdk/commit/c6ed0cebd9a94dfdaaad160d0a2adda28ef5ed9e))
* **internal:** ignore .eslintcache ([2b752fe](https://github.com/brand-dot-dev/typescript-sdk/commit/2b752fe543972990bebc77d6aed95cd6d2c7b8b9))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([9f8d8e2](https://github.com/brand-dot-dev/typescript-sdk/commit/9f8d8e229127a2b4eddafc94b6370e635a340ae4))
* **mcp:** allow pointing `docs_search` tool at other URLs ([af8c410](https://github.com/brand-dot-dev/typescript-sdk/commit/af8c410bc67ebb7b993c74a9476e6ada45a8ff8d))
* **mcp:** rename dxt to mcpb ([42531d2](https://github.com/brand-dot-dev/typescript-sdk/commit/42531d22db14cf599da634a2318fc627ef70148f))

## 0.7.0 (2025-09-14)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([360996b](https://github.com/brand-dot-dev/typescript-sdk/commit/360996b45e1df89cadcd2ac8d5e1e39d500a3212))


### Bug Fixes

* coerce nullable values to undefined ([7e219a5](https://github.com/brand-dot-dev/typescript-sdk/commit/7e219a526d4ab6c50df00da18401995aecc58879))
* **mcp:** fix uploading dxt release assets ([9f0931e](https://github.com/brand-dot-dev/typescript-sdk/commit/9f0931eff110f8c1f66cc142bb7d4213ac966bfd))


### Chores

* **mcp:** upload dxt as release asset ([4142308](https://github.com/brand-dot-dev/typescript-sdk/commit/4142308fb9ec6b4d3212a92283fa33fb9b14dbbb))

## 0.6.0 (2025-09-07)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.5.0...v0.6.0)

### Features

* **api:** manual updates ([afbcb79](https://github.com/brand-dot-dev/typescript-sdk/commit/afbcb79b549ab512a5520ae8d9e63a8934a085f2))

## 0.5.0 (2025-09-07)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.4.0...v0.5.0)

### Features

* **api:** api update ([5657c5b](https://github.com/brand-dot-dev/typescript-sdk/commit/5657c5b12852bc544e53f63bace8986616179751))
* **mcp:** allow setting logging level ([fc2ba05](https://github.com/brand-dot-dev/typescript-sdk/commit/fc2ba058f379a321c7e8cf6e4b9e2993915b76b6))
* **mcp:** expose client options in `streamableHTTPApp` ([2652b70](https://github.com/brand-dot-dev/typescript-sdk/commit/2652b7052e2190ed1aee56ab4c4cae6d4170504e))


### Bug Fixes

* **mcp:** fix query options parsing ([661f292](https://github.com/brand-dot-dev/typescript-sdk/commit/661f2927adfe695dde2cf846c02f705b3afecc24))


### Chores

* ci build action ([c14bc35](https://github.com/brand-dot-dev/typescript-sdk/commit/c14bc3525a0ae51e0e1cc9df6ffdccbd6659c938))
* **internal:** codegen related update ([ccf944b](https://github.com/brand-dot-dev/typescript-sdk/commit/ccf944b38ed48e5e5d2f09b04d0b641bda2f81ce))
* **internal:** codegen related update ([29a572a](https://github.com/brand-dot-dev/typescript-sdk/commit/29a572a2e619f03a1c1ffc91834c54ff1851e650))
* **internal:** codegen related update ([d0588aa](https://github.com/brand-dot-dev/typescript-sdk/commit/d0588aa66ab40b60f4a93c9d7f32f48d6ad4c539))
* **internal:** update global Error reference ([fa20dfd](https://github.com/brand-dot-dev/typescript-sdk/commit/fa20dfdb2b2230826e567b525c9770e0d8e6a475))
* update CI script ([a9b3ce6](https://github.com/brand-dot-dev/typescript-sdk/commit/a9b3ce6545e7f6dc9d3957fe48625e6af9848971))

## 0.4.0 (2025-08-22)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.3.0...v0.4.0)

### Features

* **mcp:** add code execution tool ([0c37834](https://github.com/brand-dot-dev/typescript-sdk/commit/0c378349d41408eb70be2fa073c980841508c860))
* **mcp:** add option to infer mcp client ([38a98d1](https://github.com/brand-dot-dev/typescript-sdk/commit/38a98d1f072b7cedf26c9954736784e15eddb8b4))


### Chores

* add package to package.json ([f4afc21](https://github.com/brand-dot-dev/typescript-sdk/commit/f4afc219f25a08c2225a83911c540f47e8eaec89))
* **client:** qualify global Blob ([e01d45a](https://github.com/brand-dot-dev/typescript-sdk/commit/e01d45ae764ae74df9c3d472875207266f0e7515))
* **internal:** codegen related update ([3839f68](https://github.com/brand-dot-dev/typescript-sdk/commit/3839f68e28effb75f129c048bcc8b0e81991d58c))
* **internal:** make mcp-server publishing public by defaut ([90b04c8](https://github.com/brand-dot-dev/typescript-sdk/commit/90b04c8f722e48f7343cabc930fce89bd776306b))
* **mcp:** add cors to oauth metadata route ([c03f17a](https://github.com/brand-dot-dev/typescript-sdk/commit/c03f17a2086c9f05898e4b8b165274ea7e1ab2ca))
* **mcp:** update package.json ([078179f](https://github.com/brand-dot-dev/typescript-sdk/commit/078179f739e593b32ad7e3dbe610252528d96f9a))
* **mcp:** update types ([a57d2fc](https://github.com/brand-dot-dev/typescript-sdk/commit/a57d2fc0aa82cf331dbac055e3af7b7b8c9b7e66))

## 0.3.0 (2025-08-19)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.2.0...v0.3.0)

### Features

* **api:** api update ([687376d](https://github.com/brand-dot-dev/typescript-sdk/commit/687376d23c7a4548ee4dac9a0791f6c489da8825))
* **api:** api update ([2185b42](https://github.com/brand-dot-dev/typescript-sdk/commit/2185b42c23cf6d8939c042978e547789cee751ac))
* **api:** api update ([c5e5171](https://github.com/brand-dot-dev/typescript-sdk/commit/c5e5171340898f18a1e00a56d01ca331a871db02))
* **mcp:** parse query string as mcp client options in mcp server ([35bbdf5](https://github.com/brand-dot-dev/typescript-sdk/commit/35bbdf5b6e6222a60030686def5bf873d3b595dc))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([bc313d7](https://github.com/brand-dot-dev/typescript-sdk/commit/bc313d7490efb258b89dcacbe5e6ba20234d559c))
* **internal:** codegen related update ([388e0d3](https://github.com/brand-dot-dev/typescript-sdk/commit/388e0d38ca4fc8a4d468b72ab5b2b13539cac1d1))
* **internal:** formatting change ([62a8d7d](https://github.com/brand-dot-dev/typescript-sdk/commit/62a8d7de6e3fd2419bf38885c4fd473e619e6364))
* **internal:** refactor array check ([d999332](https://github.com/brand-dot-dev/typescript-sdk/commit/d9993321bfc0bf80e0c19472e91a735fe1de3893))
* **internal:** update comment in script ([48243f3](https://github.com/brand-dot-dev/typescript-sdk/commit/48243f3343affccf20412647169a40ab72187b96))
* **mcp:** document remote server in README.md ([8265fa8](https://github.com/brand-dot-dev/typescript-sdk/commit/8265fa8fd02a828b738f3fb07b54a225d2051be9))
* **mcp:** minor cleanup of types and package.json ([fa6eb07](https://github.com/brand-dot-dev/typescript-sdk/commit/fa6eb0725c762a67a58d0315673fe64fcee2c79a))
* **mcp:** update README ([025b597](https://github.com/brand-dot-dev/typescript-sdk/commit/025b597bdbe44137092678270761830fdad6eafe))
* update @stainless-api/prism-cli to v5.15.0 ([8510713](https://github.com/brand-dot-dev/typescript-sdk/commit/85107138d8677a0836dc1f8b5f4f6406daad2af2))

## 0.2.0 (2025-08-07)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.1.0...v0.2.0)

### Features

* **mcp:** add logging when environment variable is set ([6364c45](https://github.com/brand-dot-dev/typescript-sdk/commit/6364c459f3b73de0568da5d024086547527c1c8b))
* **mcp:** add unix socket option for remote MCP ([cb8dbf0](https://github.com/brand-dot-dev/typescript-sdk/commit/cb8dbf040623a3a62aff8808b75de8e9d59cc1fa))
* **mcp:** remote server with passthru auth ([8683693](https://github.com/brand-dot-dev/typescript-sdk/commit/8683693a6e2dc2c20c06a492a1e06c193bdc717b))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([3672f68](https://github.com/brand-dot-dev/typescript-sdk/commit/3672f68d7115bcb763b46798e7a18828908b68d1))
* **mcp:** fix bug in header handling ([c541ba4](https://github.com/brand-dot-dev/typescript-sdk/commit/c541ba4b906f845b12e67d155c081e68bdd774bc))
* **mcp:** reverse validJson capability option and limit scope ([0b58267](https://github.com/brand-dot-dev/typescript-sdk/commit/0b58267daa05a66fd7e0ef7467c808813c766b28))


### Chores

* **internal:** move publish config ([9ce6753](https://github.com/brand-dot-dev/typescript-sdk/commit/9ce675365598d2367cdaec848869db6448c0ea1d))
* **mcp:** refactor streamable http transport ([c0d86b9](https://github.com/brand-dot-dev/typescript-sdk/commit/c0d86b96c0fa96436d5cc76bf4c85c28a2873eec))

## 0.1.0 (2025-07-31)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/brand-dot-dev/typescript-sdk/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([78879ce](https://github.com/brand-dot-dev/typescript-sdk/commit/78879ce073bff55702d668df6c16e685f5dd2bd7))
* **api:** manual updates ([69a7a88](https://github.com/brand-dot-dev/typescript-sdk/commit/69a7a88bae655e8b331b03c718ea48fd1857b3c0))
* **api:** manual updates ([51f9de8](https://github.com/brand-dot-dev/typescript-sdk/commit/51f9de82a052b33c027b38b103bb2fa2557cc32e))
* **api:** manual updates ([553a065](https://github.com/brand-dot-dev/typescript-sdk/commit/553a065ea64adf95b92d149e3a23bb8f0f71725e))
* **api:** manual updates ([17e2f82](https://github.com/brand-dot-dev/typescript-sdk/commit/17e2f8259071877dfb71d51c107b23965bf01d35))
* **api:** manual updates ([f405c69](https://github.com/brand-dot-dev/typescript-sdk/commit/f405c69d49712539cb8623e9a5cc2b73431dd9dc))
* **api:** manual updates ([437ffa2](https://github.com/brand-dot-dev/typescript-sdk/commit/437ffa2b5b4d650dafc0584ab45bafce9ccabc8e))
* **api:** manual updates ([bb954b6](https://github.com/brand-dot-dev/typescript-sdk/commit/bb954b60752ae7fe07f154657d56b006427ca4b5))
* **api:** manual updates ([d997f7b](https://github.com/brand-dot-dev/typescript-sdk/commit/d997f7b982051edb3e3a3eeb4dc6c57f7723c134))
* **api:** manual updates ([f9ef6a0](https://github.com/brand-dot-dev/typescript-sdk/commit/f9ef6a0bf6cb6426fec94f0abb5a6c8acc668141))
* **api:** manual updates ([e71b7eb](https://github.com/brand-dot-dev/typescript-sdk/commit/e71b7eb187e3acef2bc6fbf5b2beb0b47800245b))
* **api:** manual updates ([1cc75cd](https://github.com/brand-dot-dev/typescript-sdk/commit/1cc75cd9877da7b2280329cf4e53c7b73f067d46))
* **api:** manual updates ([dbd6df5](https://github.com/brand-dot-dev/typescript-sdk/commit/dbd6df5265d5e77ed900bffec20e42b7d9686302))
* **client:** add support for endpoint-specific base URLs ([bd84840](https://github.com/brand-dot-dev/typescript-sdk/commit/bd848405ed7a7b7cf967dc9e9e068a3b04eb5bfd))
* **mcp:** implement support for binary responses ([4d35e49](https://github.com/brand-dot-dev/typescript-sdk/commit/4d35e49621a740137fde22d0d50b570366697967))
* **mcp:** include http information in tools ([608a554](https://github.com/brand-dot-dev/typescript-sdk/commit/608a5549eba7d3775b4be77278e44eff460a56f3))
* **mcp:** set X-Stainless-MCP header ([9f8bca8](https://github.com/brand-dot-dev/typescript-sdk/commit/9f8bca8ea75f6d11b15e3dfcbc9abeb4461257e2))
* **mcp:** support filtering tool results by a jq expression ([7bb7ed6](https://github.com/brand-dot-dev/typescript-sdk/commit/7bb7ed637ba3ff9bb957fca486973134be21e1ed))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([14af55d](https://github.com/brand-dot-dev/typescript-sdk/commit/14af55d22732fdce0ce00bfeb417bc91adfff740))
* **client:** explicitly copy fetch in withOptions ([17dfeaf](https://github.com/brand-dot-dev/typescript-sdk/commit/17dfeaf08885c914a1ac4c0f24233c87e358f31e))
* **client:** get fetchOptions type more reliably ([5b28587](https://github.com/brand-dot-dev/typescript-sdk/commit/5b285874706b67864bba4152887181c2bd380173))
* compat with more runtimes ([4595f13](https://github.com/brand-dot-dev/typescript-sdk/commit/4595f133be88a2d148b9267ccd4535eb9a558f51))
* **mcp:** fix cursor schema transformation issue with recursive references ([ab24ba0](https://github.com/brand-dot-dev/typescript-sdk/commit/ab24ba029cf26e71ac15da2a6dcdc55fb5c6bc20))
* **mcp:** fix tool description of jq_filter ([e2f432e](https://github.com/brand-dot-dev/typescript-sdk/commit/e2f432eb966f17631b50f82c07aff4755fceb38b))
* **mcp:** include description in dynamic tool search ([d698f91](https://github.com/brand-dot-dev/typescript-sdk/commit/d698f9173f905924424c82e0026b06fec3488572))
* **mcp:** include required section for top-level properties and support naming transformations ([8a3d09d](https://github.com/brand-dot-dev/typescript-sdk/commit/8a3d09d405b8ce692a492ae3082a473a386d345c))
* **mcp:** relax input type for asTextContextResult ([b604761](https://github.com/brand-dot-dev/typescript-sdk/commit/b6047611bda8b8c275f87828f21b98d3a79cba20))
* **mcp:** support jq filtering on cloudflare workers ([05a640e](https://github.com/brand-dot-dev/typescript-sdk/commit/05a640ee793c5a0f276688e38a43a592276c51b8))
* publish script — handle NPM errors correctly ([ce784cd](https://github.com/brand-dot-dev/typescript-sdk/commit/ce784cdd350a285e46139075209405820d7624e1))


### Chores

* add docs to RequestOptions type ([f4b33df](https://github.com/brand-dot-dev/typescript-sdk/commit/f4b33df15437998afd2d728ec5224f9c1a880890))
* adjust eslint.config.mjs ignore pattern ([95468aa](https://github.com/brand-dot-dev/typescript-sdk/commit/95468aa42a24f2f9333d2cf240b8b604d30e4b75))
* avoid type error in certain environments ([0b97df8](https://github.com/brand-dot-dev/typescript-sdk/commit/0b97df8bf0798a7cb2d4f8d570f79dc9c599e3c7))
* **ci:** enable for pull requests ([623b5d6](https://github.com/brand-dot-dev/typescript-sdk/commit/623b5d6a5ea903ac4c2ed14841587318c3b62b75))
* **ci:** only run for pushes and fork pull requests ([63b08b8](https://github.com/brand-dot-dev/typescript-sdk/commit/63b08b8334584bddd085d1de493281967e57bd51))
* **client:** improve path param validation ([2f2fc76](https://github.com/brand-dot-dev/typescript-sdk/commit/2f2fc76068cde16de95d3a718b8a80edeee4902b))
* **client:** refactor imports ([d90fb77](https://github.com/brand-dot-dev/typescript-sdk/commit/d90fb773c0a32e7129041025cda6bf999d4750a0))
* configure new SDK language ([fa4bf57](https://github.com/brand-dot-dev/typescript-sdk/commit/fa4bf57b52799969998afe320e24014cb078140c))
* **deps:** bump eslint-plugin-prettier ([4637721](https://github.com/brand-dot-dev/typescript-sdk/commit/4637721c6e8bb3feeaf727824ee1b2f67cd13204))
* **docs:** use top-level-await in example snippets ([2376ef9](https://github.com/brand-dot-dev/typescript-sdk/commit/2376ef99f488b1b990d3adeaa783be774bd3bbdb))
* improve publish-npm script --latest tag logic ([a096145](https://github.com/brand-dot-dev/typescript-sdk/commit/a0961454962591ee6e1f0179ad1abf335275235e))
* **internal:** add pure annotations, make base APIResource abstract ([d8a845c](https://github.com/brand-dot-dev/typescript-sdk/commit/d8a845cc477720993869fd020e4a65d9b49c5e1f))
* **internal:** codegen related update ([708e6d6](https://github.com/brand-dot-dev/typescript-sdk/commit/708e6d6fa3e927d09b51f48789f7c8bf4b3aa304))
* **internal:** codegen related update ([0bdcf4b](https://github.com/brand-dot-dev/typescript-sdk/commit/0bdcf4b6aa36c58284b5afe76776711e1121b5b1))
* **internal:** fix readablestream types in node 20 ([d753e24](https://github.com/brand-dot-dev/typescript-sdk/commit/d753e243856e1efa6d82e5a3ba5e395a6dfe3558))
* **internal:** remove redundant imports config ([8215e1e](https://github.com/brand-dot-dev/typescript-sdk/commit/8215e1ede73be05677c34931b526d79bb9b2f409))
* **internal:** update jest config ([261cd8e](https://github.com/brand-dot-dev/typescript-sdk/commit/261cd8e99fcb636154c5f8b669ccfcaa6d6ff6e9))
* make some internal functions async ([683286e](https://github.com/brand-dot-dev/typescript-sdk/commit/683286e2a0e44bfef1501d19f29cd5dc05caa82f))
* **mcp:** formatting ([0939837](https://github.com/brand-dot-dev/typescript-sdk/commit/0939837fae8c9da449ec10f7aa65355bf2612654))
* **mcp:** provides high-level initMcpServer function and exports known clients ([cd28940](https://github.com/brand-dot-dev/typescript-sdk/commit/cd289406a6103a675b98405719a604b80c162f3c))
* **mcp:** remove duplicate assignment ([1984da9](https://github.com/brand-dot-dev/typescript-sdk/commit/1984da989afc8b54c8a81656a0c32f0a488eeb68))
* **mcp:** rework imports in tools ([497fc6c](https://github.com/brand-dot-dev/typescript-sdk/commit/497fc6c5a69112de5677dee10d77995705872af9))
* **readme:** update badges ([46380e0](https://github.com/brand-dot-dev/typescript-sdk/commit/46380e0141b9570f5e2c816c5ca90f74f781df69))
* **readme:** use better example snippet for undocumented params ([56c698d](https://github.com/brand-dot-dev/typescript-sdk/commit/56c698d1f5b47609e2e3da90c18813c715bdbb84))
* **ts:** reorder package.json imports ([4495729](https://github.com/brand-dot-dev/typescript-sdk/commit/44957290ba6883ecb207720620001ba6b75559bd))
* update SDK settings ([0ce8ece](https://github.com/brand-dot-dev/typescript-sdk/commit/0ce8ecedb16b548b04b8c09f1692249b944a1b37))
* update SDK settings ([a090aec](https://github.com/brand-dot-dev/typescript-sdk/commit/a090aec93fa38eadb6a59c751447d2f164c45a6c))

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
