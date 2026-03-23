2026-02-08T13:36:30.367345Z	Cloning repository...
2026-02-08T13:36:34.958029Z	From https://github.com/duotaro/Tucson-Japanese-Language-School
2026-02-08T13:36:34.958562Z	 * branch            532c67285e082d4c262b152b9a9fb41e506344ce -> FETCH_HEAD
2026-02-08T13:36:34.958666Z	
2026-02-08T13:36:35.214579Z	HEAD is now at 532c672 入学手続きペーじ、ヘッダー修正
2026-02-08T13:36:35.214992Z	
2026-02-08T13:36:35.284906Z	
2026-02-08T13:36:35.285582Z	Using v2 root directory strategy
2026-02-08T13:36:35.307159Z	Success: Finished cloning repository files
2026-02-08T13:36:36.882272Z	Checking for configuration in a Wrangler configuration file (BETA)
2026-02-08T13:36:36.88399Z	
2026-02-08T13:36:36.884225Z	Found wrangler.toml file. Reading build configuration...
2026-02-08T13:36:36.889506Z	pages_build_output_dir: out
2026-02-08T13:36:36.889769Z	Build environment variables: (none found)
2026-02-08T13:36:37.989693Z	Successfully read wrangler.toml file.
2026-02-08T13:36:38.994886Z	Preparing yarn@3.6.3 for immediate activation...
2026-02-08T13:36:39.275892Z	Preparing pnpm@8.7.1 for immediate activation...
2026-02-08T13:36:39.50056Z	Detected the following tools from environment: nodejs@20.19.0, yarn@4.2.2, npm@9.6.7
2026-02-08T13:36:39.50112Z	Installing nodejs 20.19.0
2026-02-08T13:36:39.560903Z	nodejs 20.19.0 is already installed
2026-02-08T13:36:40.844387Z	
2026-02-08T13:36:40.844961Z	changed 1 package in 899ms
2026-02-08T13:36:40.850853Z	Reshimming asdf nodejs...
2026-02-08T13:36:43.726608Z	Preparing yarn@4.2.2 for immediate activation...
2026-02-08T13:36:44.429758Z	Installing project dependencies: yarn
2026-02-08T13:36:45.300829Z	➤ YN0000: · Yarn 4.2.2
2026-02-08T13:36:45.311519Z	➤ YN0000: ┌ Resolution step
2026-02-08T13:36:45.501882Z	➤ YN0000: └ Completed
2026-02-08T13:36:45.539056Z	➤ YN0000: ┌ Fetch step
2026-02-08T13:36:54.946753Z	➤ YN0013: │ 792 packages were added to the project (+ 966.3 MiB).
2026-02-08T13:36:54.946968Z	➤ YN0000: └ Completed in 9s 408ms
2026-02-08T13:36:54.979945Z	➤ YN0000: ┌ Link step
2026-02-08T13:37:01.661442Z	➤ YN0007: │ sharp@npm:0.34.4 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.6619Z	➤ YN0007: │ esbuild@npm:0.15.18 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.662193Z	➤ YN0007: │ esbuild@npm:0.25.4 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.662489Z	➤ YN0007: │ sharp@npm:0.33.5 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.662666Z	➤ YN0007: │ workerd@npm:1.20250917.0 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.662807Z	➤ YN0007: │ workerd@npm:1.20250718.0 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.662985Z	➤ YN0007: │ esbuild@npm:0.14.47 must be built because it never has been before or the last one failed
2026-02-08T13:37:01.66326Z	➤ YN0007: │ unrs-resolver@npm:1.11.1 must be built because it never has been before or the last one failed
2026-02-08T13:37:02.279131Z	➤ YN0000: └ Completed in 7s 299ms
2026-02-08T13:37:02.346924Z	➤ YN0000: · Done in 17s 46ms
2026-02-08T13:37:02.511152Z	Executing user command: yarn cache:fetch-all && yarn build && npx @cloudflare/next-on-pages@1
2026-02-08T13:37:03.382601Z	(node:3199) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///opt/buildhome/repo/scripts/notion-cache/fetch-all.js is not specified and it doesn't parse as CommonJS.
2026-02-08T13:37:03.38291Z	Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
2026-02-08T13:37:03.383068Z	To eliminate this warning, add "type": "module" to /opt/buildhome/repo/package.json.
2026-02-08T13:37:03.383266Z	(Use `node --trace-warnings ...` to show where the warning was created)
2026-02-08T13:37:03.469011Z	[dotenv@17.2.2] injecting env (0) from .env.local -- tip: ⚙️  specify custom .env file path with { path: '/custom/path/.env' }
2026-02-08T13:37:03.469961Z	[dotenv@17.2.2] injecting env (3) from .env -- tip: 🔐 encrypt with Dotenvx: https://dotenvx.com
2026-02-08T13:37:03.470487Z	🔄 Notion データベース全取得を開始...
2026-02-08T13:37:03.470934Z	📁 キャッシュディレクトリ準備完了: /opt/buildhome/repo/cache/notion-data
2026-02-08T13:37:03.471058Z	📊 取得対象: 32個のデータベース
2026-02-08T13:37:03.471202Z	
2026-02-08T13:37:03.471265Z	📥 [1/32] slider データ取得中...
2026-02-08T13:37:03.959743Z	📷 slider の画像を処理中...
2026-02-08T13:37:04.163736Z	(node:3199) [node-fetch#buffer] DeprecationWarning: Please use 'response.arrayBuffer()' instead of 'response.buffer()'
2026-02-08T13:37:04.228542Z	  ✅ 画像保存: 115a8c0e-cf8c-802e-beef-ef4142b1b5a5-Sports_Day_-_Giant_Ball_rolling.jpg
2026-02-08T13:37:04.229122Z	  🔄 画像最適化開始: Sports_Day_-_Giant_Ball_rolling
2026-02-08T13:37:04.276267Z	    ✅ 最適化画像生成: Sports_Day_-_Giant_Ball_rolling-sm.webp
2026-02-08T13:37:04.366786Z	    ✅ 最適化画像生成: Sports_Day_-_Giant_Ball_rolling-md.webp
2026-02-08T13:37:04.546916Z	    ✅ 最適化画像生成: Sports_Day_-_Giant_Ball_rolling-lg.webp
2026-02-08T13:37:04.821446Z	    ✅ 最適化画像生成: Sports_Day_-_Giant_Ball_rolling-xl.webp
2026-02-08T13:37:04.821684Z	  🎯 画像最適化完了: Sports_Day_-_Giant_Ball_rolling
2026-02-08T13:37:04.974775Z	  ✅ 画像保存: 5fea4648-b04d-449d-ac5d-8069ddec23ab-Summer_Festival_-_Snack_fishing.JPG
2026-02-08T13:37:04.975023Z	  🔄 画像最適化開始: Summer_Festival_-_Snack_fishing
2026-02-08T13:37:05.017222Z	    ✅ 最適化画像生成: Summer_Festival_-_Snack_fishing-sm.webp
2026-02-08T13:37:05.110067Z	    ✅ 最適化画像生成: Summer_Festival_-_Snack_fishing-md.webp
2026-02-08T13:37:05.293992Z	    ✅ 最適化画像生成: Summer_Festival_-_Snack_fishing-lg.webp
2026-02-08T13:37:05.572222Z	    ✅ 最適化画像生成: Summer_Festival_-_Snack_fishing-xl.webp
2026-02-08T13:37:05.572495Z	  🎯 画像最適化完了: Summer_Festival_-_Snack_fishing
2026-02-08T13:37:05.727302Z	  ✅ 画像保存: 78d0554f-de2d-40d2-bc60-e07302828899-winter.webp
2026-02-08T13:37:05.727584Z	  🔄 画像最適化開始: winter
2026-02-08T13:37:05.767706Z	    ✅ 最適化画像生成: winter-sm.webp
2026-02-08T13:37:05.840587Z	    ✅ 最適化画像生成: winter-md.webp
2026-02-08T13:37:05.97006Z	    ✅ 最適化画像生成: winter-lg.webp
2026-02-08T13:37:06.17416Z	    ✅ 最適化画像生成: winter-xl.webp
2026-02-08T13:37:06.174451Z	  🎯 画像最適化完了: winter
2026-02-08T13:37:06.320933Z	  ✅ 画像保存: 92797d6c-4d69-4981-b9e5-4035163aaedb-katakana.webp
2026-02-08T13:37:06.321245Z	  🔄 画像最適化開始: katakana
2026-02-08T13:37:06.37963Z	    ✅ 最適化画像生成: katakana-sm.webp
2026-02-08T13:37:06.477772Z	    ✅ 最適化画像生成: katakana-md.webp
2026-02-08T13:37:06.636805Z	    ✅ 最適化画像生成: katakana-lg.webp
2026-02-08T13:37:06.8864Z	    ✅ 最適化画像生成: katakana-xl.webp
2026-02-08T13:37:06.886714Z	  🎯 画像最適化完了: katakana
2026-02-08T13:37:06.887604Z	✅ slider 完了 (4件) → slider.json
2026-02-08T13:37:07.288503Z	📥 [2/32] sponsors データ取得中...
2026-02-08T13:37:07.52722Z	📷 sponsors の画像を処理中...
2026-02-08T13:37:07.626117Z	  ✅ 画像保存: 179ab0fe-382d-43b5-a6f5-e1a55f186f5c-ikkyu.png
2026-02-08T13:37:07.626438Z	  🔄 画像最適化開始: ikkyu
2026-02-08T13:37:07.635627Z	    ✅ 最適化画像生成: ikkyu-sm.webp
2026-02-08T13:37:07.749084Z	    ✅ 最適化画像生成: ikkyu-md.webp
2026-02-08T13:37:07.75791Z	    ✅ 最適化画像生成: ikkyu-lg.webp
2026-02-08T13:37:07.766512Z	    ✅ 最適化画像生成: ikkyu-xl.webp
2026-02-08T13:37:07.766718Z	  🎯 画像最適化完了: ikkyu
2026-02-08T13:37:07.867436Z	  ✅ 画像保存: 274a8c0e-cf8c-806c-990b-cb99e428831d-JBAALogo.jpg
2026-02-08T13:37:07.867698Z	  🔄 画像最適化開始: JBAALogo
2026-02-08T13:37:07.882897Z	    ✅ 最適化画像生成: JBAALogo-sm.webp
2026-02-08T13:37:07.898527Z	    ✅ 最適化画像生成: JBAALogo-md.webp
2026-02-08T13:37:07.914359Z	    ✅ 最適化画像生成: JBAALogo-lg.webp
2026-02-08T13:37:07.930066Z	    ✅ 最適化画像生成: JBAALogo-xl.webp
2026-02-08T13:37:07.93031Z	  🎯 画像最適化完了: JBAALogo
2026-02-08T13:37:08.00724Z	  ✅ 画像保存: b2568ae1-1f5c-41b0-a80c-4ec50d4a9b41-tucsonblossomacpuncture.png
2026-02-08T13:37:08.00753Z	  🔄 画像最適化開始: tucsonblossomacpuncture
2026-02-08T13:37:08.016299Z	    ✅ 最適化画像生成: tucsonblossomacpuncture-sm.webp
2026-02-08T13:37:08.043431Z	    ✅ 最適化画像生成: tucsonblossomacpuncture-md.webp
2026-02-08T13:37:08.054734Z	    ✅ 最適化画像生成: tucsonblossomacpuncture-lg.webp
2026-02-08T13:37:08.062853Z	    ✅ 最適化画像生成: tucsonblossomacpuncture-xl.webp
2026-02-08T13:37:08.063021Z	  🎯 画像最適化完了: tucsonblossomacpuncture
2026-02-08T13:37:08.063422Z	✅ sponsors 完了 (3件) → sponsors.json
2026-02-08T13:37:08.463885Z	📥 [3/32] about データ取得中...
2026-02-08T13:37:08.703889Z	📷 about の画像を処理中...
2026-02-08T13:37:08.907791Z	  ✅ 画像保存: 3b6fb768-3ff3-425b-8758-1c31f6fa231e-about.png
2026-02-08T13:37:08.908248Z	  🔄 画像最適化開始: about
2026-02-08T13:37:08.937058Z	    ✅ 最適化画像生成: about-sm.webp
2026-02-08T13:37:09.002427Z	    ✅ 最適化画像生成: about-md.webp
2026-02-08T13:37:09.072588Z	    ✅ 最適化画像生成: about-lg.webp
2026-02-08T13:37:09.146713Z	    ✅ 最適化画像生成: about-xl.webp
2026-02-08T13:37:09.147395Z	  🎯 画像最適化完了: about
2026-02-08T13:37:09.316138Z	  ✅ 画像保存: b3091c78-9b7c-4e8b-80de-dc5f98fd9d5b-mission.png
2026-02-08T13:37:09.316412Z	  🔄 画像最適化開始: mission
2026-02-08T13:37:09.351817Z	    ✅ 最適化画像生成: mission-sm.webp
2026-02-08T13:37:09.419428Z	    ✅ 最適化画像生成: mission-md.webp
2026-02-08T13:37:09.488848Z	    ✅ 最適化画像生成: mission-lg.webp
2026-02-08T13:37:09.556996Z	    ✅ 最適化画像生成: mission-xl.webp
2026-02-08T13:37:09.557261Z	  🎯 画像最適化完了: mission
2026-02-08T13:37:09.686766Z	  ✅ 画像保存: caedb020-e7de-46db-ad8f-6221961d3dab-vision.png
2026-02-08T13:37:09.687049Z	  🔄 画像最適化開始: vision
2026-02-08T13:37:09.715847Z	    ✅ 最適化画像生成: vision-sm.webp
2026-02-08T13:37:09.782475Z	    ✅ 最適化画像生成: vision-md.webp
2026-02-08T13:37:09.854387Z	    ✅ 最適化画像生成: vision-lg.webp
2026-02-08T13:37:09.92698Z	    ✅ 最適化画像生成: vision-xl.webp
2026-02-08T13:37:09.927184Z	  🎯 画像最適化完了: vision
2026-02-08T13:37:09.927708Z	✅ about 完了 (3件) → about.json
2026-02-08T13:37:10.328251Z	📥 [4/32] mission データ取得中...
2026-02-08T13:37:10.822856Z	📷 mission の画像を処理中...
2026-02-08T13:37:11.036279Z	  ✅ 画像保存: 44f89b97-70bb-4b1c-9b6e-73d6950f79b8-Sports_Day_2023.JPG
2026-02-08T13:37:11.036552Z	  🔄 画像最適化開始: Sports_Day_2023
2026-02-08T13:37:11.090822Z	    ✅ 最適化画像生成: Sports_Day_2023-sm.webp
2026-02-08T13:37:11.208625Z	    ✅ 最適化画像生成: Sports_Day_2023-md.webp
2026-02-08T13:37:11.43262Z	    ✅ 最適化画像生成: Sports_Day_2023-lg.webp
2026-02-08T13:37:11.761747Z	    ✅ 最適化画像生成: Sports_Day_2023-xl.webp
2026-02-08T13:37:11.761969Z	  🎯 画像最適化完了: Sports_Day_2023
2026-02-08T13:37:11.762368Z	✅ mission 完了 (1件) → mission.json
2026-02-08T13:37:12.162804Z	📥 [5/32] vision データ取得中...
2026-02-08T13:37:12.379133Z	📷 vision の画像を処理中...
2026-02-08T13:37:12.619817Z	  ✅ 画像保存: 88fe2db2-68f6-4295-ab31-8253d1fda16b-2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:37:12.620088Z	  🔄 画像最適化開始: 2025GuidelineBook_ja_20250905
2026-02-08T13:37:12.621642Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:12.800369Z	  ✅ 画像保存: 88fe2db2-68f6-4295-ab31-8253d1fda16b-setsubun2022.JPG
2026-02-08T13:37:12.800766Z	  🔄 画像最適化開始: setsubun2022
2026-02-08T13:37:12.880698Z	    ✅ 最適化画像生成: setsubun2022-sm.webp
2026-02-08T13:37:13.023296Z	    ✅ 最適化画像生成: setsubun2022-md.webp
2026-02-08T13:37:13.263029Z	    ✅ 最適化画像生成: setsubun2022-lg.webp
2026-02-08T13:37:13.580065Z	    ✅ 最適化画像生成: setsubun2022-xl.webp
2026-02-08T13:37:13.580431Z	  🎯 画像最適化完了: setsubun2022
2026-02-08T13:37:13.770049Z	  ✅ 画像保存: 88fe2db2-68f6-4295-ab31-8253d1fda16b-2025GuidelineBook_en_20250905.pdf
2026-02-08T13:37:13.770329Z	  🔄 画像最適化開始: 2025GuidelineBook_en_20250905
2026-02-08T13:37:13.771677Z	✅ vision 完了 (1件) → vision.json
2026-02-08T13:37:13.771889Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:14.172635Z	📥 [6/32] story データ取得中...
2026-02-08T13:37:14.355759Z	📷 story の画像を処理中...
2026-02-08T13:37:14.356382Z	✅ story 完了 (1件) → story.json
2026-02-08T13:37:14.757685Z	📥 [7/32] greeting データ取得中...
2026-02-08T13:37:14.959676Z	📷 greeting の画像を処理中...
2026-02-08T13:37:15.074591Z	  ✅ 画像保存: 54fad9f8-3ede-4a4d-a531-6a4c5b6d5ef2-Tjsfounders.jpg
2026-02-08T13:37:15.074874Z	  🔄 画像最適化開始: Tjsfounders
2026-02-08T13:37:15.091941Z	    ✅ 最適化画像生成: Tjsfounders-sm.webp
2026-02-08T13:37:15.108453Z	    ✅ 最適化画像生成: Tjsfounders-md.webp
2026-02-08T13:37:15.124981Z	    ✅ 最適化画像生成: Tjsfounders-lg.webp
2026-02-08T13:37:15.142458Z	    ✅ 最適化画像生成: Tjsfounders-xl.webp
2026-02-08T13:37:15.142591Z	  🎯 画像最適化完了: Tjsfounders
2026-02-08T13:37:15.143118Z	✅ greeting 完了 (1件) → greeting.json
2026-02-08T13:37:15.544348Z	📥 [8/32] history データ取得中...
2026-02-08T13:37:17.155786Z	📷 history の画像を処理中...
2026-02-08T13:37:17.284129Z	  ✅ 画像保存: 1ac2adce-5bd8-453b-ab37-84e96ec667bc-historty3.jpg
2026-02-08T13:37:17.284394Z	  🔄 画像最適化開始: historty3
2026-02-08T13:37:17.334662Z	    ✅ 最適化画像生成: historty3-sm.webp
2026-02-08T13:37:17.455571Z	    ✅ 最適化画像生成: historty3-md.webp
2026-02-08T13:37:17.703929Z	    ✅ 最適化画像生成: historty3-lg.webp
2026-02-08T13:37:18.243988Z	    ✅ 最適化画像生成: historty3-xl.webp
2026-02-08T13:37:18.244506Z	  🎯 画像最適化完了: historty3
2026-02-08T13:37:18.396155Z	  ✅ 画像保存: 1ac2adce-5bd8-453b-ab37-84e96ec667bc-historty2.jpg
2026-02-08T13:37:18.396391Z	  🔄 画像最適化開始: historty2
2026-02-08T13:37:18.431977Z	    ✅ 最適化画像生成: historty2-sm.webp
2026-02-08T13:37:18.512286Z	    ✅ 最適化画像生成: historty2-md.webp
2026-02-08T13:37:18.665462Z	    ✅ 最適化画像生成: historty2-lg.webp
2026-02-08T13:37:18.952231Z	    ✅ 最適化画像生成: historty2-xl.webp
2026-02-08T13:37:18.95246Z	  🎯 画像最適化完了: historty2
2026-02-08T13:37:19.154547Z	  ✅ 画像保存: 1ac2adce-5bd8-453b-ab37-84e96ec667bc-historty1.jpg
2026-02-08T13:37:19.154755Z	  🔄 画像最適化開始: historty1
2026-02-08T13:37:19.20919Z	    ✅ 最適化画像生成: historty1-sm.webp
2026-02-08T13:37:19.326533Z	    ✅ 最適化画像生成: historty1-md.webp
2026-02-08T13:37:19.536707Z	    ✅ 最適化画像生成: historty1-lg.webp
2026-02-08T13:37:19.8857Z	    ✅ 最適化画像生成: historty1-xl.webp
2026-02-08T13:37:19.886299Z	  🎯 画像最適化完了: historty1
2026-02-08T13:37:19.886712Z	✅ history 完了 (1件) → history.json
2026-02-08T13:37:20.287258Z	📥 [9/32] directors データ取得中...
2026-02-08T13:37:20.545412Z	📷 directors の画像を処理中...
2026-02-08T13:37:20.71515Z	  ✅ 画像保存: 10ba8c0e-cf8c-80e6-8546-c4d0fbbcdbf0-DSC08145_edited_edited_edited.jpg
2026-02-08T13:37:20.71536Z	  🔄 画像最適化開始: DSC08145_edited_edited_edited
2026-02-08T13:37:20.758979Z	    ✅ 最適化画像生成: DSC08145_edited_edited_edited-sm.webp
2026-02-08T13:37:20.837863Z	    ✅ 最適化画像生成: DSC08145_edited_edited_edited-md.webp
2026-02-08T13:37:20.940339Z	    ✅ 最適化画像生成: DSC08145_edited_edited_edited-lg.webp
2026-02-08T13:37:21.045964Z	    ✅ 最適化画像生成: DSC08145_edited_edited_edited-xl.webp
2026-02-08T13:37:21.046202Z	  🎯 画像最適化完了: DSC08145_edited_edited_edited
2026-02-08T13:37:21.169681Z	  ✅ 画像保存: 10ea8c0e-cf8c-80bc-a73d-d20e096f2c0c-DSC08141_edited_edited.jpg
2026-02-08T13:37:21.169871Z	  🔄 画像最適化開始: DSC08141_edited_edited
2026-02-08T13:37:21.188528Z	    ✅ 最適化画像生成: DSC08141_edited_edited-sm.webp
2026-02-08T13:37:21.2395Z	    ✅ 最適化画像生成: DSC08141_edited_edited-md.webp
2026-02-08T13:37:21.331542Z	    ✅ 最適化画像生成: DSC08141_edited_edited-lg.webp
2026-02-08T13:37:21.421386Z	    ✅ 最適化画像生成: DSC08141_edited_edited-xl.webp
2026-02-08T13:37:21.421716Z	  🎯 画像最適化完了: DSC08141_edited_edited
2026-02-08T13:37:21.566679Z	  ✅ 画像保存: 12a4999b-cd97-4488-a688-6c398358c991-yukari_image.jpg
2026-02-08T13:37:21.5669Z	  🔄 画像最適化開始: yukari_image
2026-02-08T13:37:21.5838Z	    ✅ 最適化画像生成: yukari_image-sm.webp
2026-02-08T13:37:21.609397Z	    ✅ 最適化画像生成: yukari_image-md.webp
2026-02-08T13:37:21.634738Z	    ✅ 最適化画像生成: yukari_image-lg.webp
2026-02-08T13:37:21.660623Z	    ✅ 最適化画像生成: yukari_image-xl.webp
2026-02-08T13:37:21.660804Z	  🎯 画像最適化完了: yukari_image
2026-02-08T13:37:21.758944Z	  ✅ 画像保存: 281a8c0e-cf8c-8045-9f50-ca0e7d0222e1-istockphoto-1495088043-612x612.jpg
2026-02-08T13:37:21.759194Z	  🔄 画像最適化開始: istockphoto-1495088043-612x612
2026-02-08T13:37:21.774805Z	    ✅ 最適化画像生成: istockphoto-1495088043-612x612-sm.webp
2026-02-08T13:37:21.815601Z	    ✅ 最適化画像生成: istockphoto-1495088043-612x612-md.webp
2026-02-08T13:37:21.850256Z	    ✅ 最適化画像生成: istockphoto-1495088043-612x612-lg.webp
2026-02-08T13:37:21.884963Z	    ✅ 最適化画像生成: istockphoto-1495088043-612x612-xl.webp
2026-02-08T13:37:21.885188Z	  🎯 画像最適化完了: istockphoto-1495088043-612x612
2026-02-08T13:37:21.969863Z	  ✅ 画像保存: 2c933574-5423-431b-9564-9ac63cf02078-profile.jpg
2026-02-08T13:37:21.970039Z	  🔄 画像最適化開始: profile-2c933574
2026-02-08T13:37:21.975653Z	    ✅ 最適化画像生成: profile-2c933574-sm.webp
2026-02-08T13:37:21.981859Z	    ✅ 最適化画像生成: profile-2c933574-md.webp
2026-02-08T13:37:21.987679Z	    ✅ 最適化画像生成: profile-2c933574-lg.webp
2026-02-08T13:37:21.993642Z	    ✅ 最適化画像生成: profile-2c933574-xl.webp
2026-02-08T13:37:21.993771Z	  🎯 画像最適化完了: profile-2c933574
2026-02-08T13:37:21.994301Z	✅ directors 完了 (5件) → directors.json
2026-02-08T13:37:22.395514Z	📥 [10/32] orgChart データ取得中...
2026-02-08T13:37:22.600727Z	📷 orgChart の画像を処理中...
2026-02-08T13:37:22.768298Z	  ✅ 画像保存: 7a5843cb-66c0-4555-b972-1ee1c3063962-governance_chart_en.jpg
2026-02-08T13:37:22.76854Z	  🔄 画像最適化開始: governance_chart_en
2026-02-08T13:37:22.78729Z	    ✅ 最適化画像生成: governance_chart_en-sm.webp
2026-02-08T13:37:22.836074Z	    ✅ 最適化画像生成: governance_chart_en-md.webp
2026-02-08T13:37:22.894946Z	    ✅ 最適化画像生成: governance_chart_en-lg.webp
2026-02-08T13:37:22.952701Z	    ✅ 最適化画像生成: governance_chart_en-xl.webp
2026-02-08T13:37:22.953022Z	  🎯 画像最適化完了: governance_chart_en
2026-02-08T13:37:23.081088Z	  ✅ 画像保存: 7a5843cb-66c0-4555-b972-1ee1c3063962-governance_chart_ja.jpg
2026-02-08T13:37:23.081327Z	  🔄 画像最適化開始: governance_chart_ja
2026-02-08T13:37:23.099962Z	    ✅ 最適化画像生成: governance_chart_ja-sm.webp
2026-02-08T13:37:23.149513Z	    ✅ 最適化画像生成: governance_chart_ja-md.webp
2026-02-08T13:37:23.207666Z	    ✅ 最適化画像生成: governance_chart_ja-lg.webp
2026-02-08T13:37:23.266507Z	    ✅ 最適化画像生成: governance_chart_ja-xl.webp
2026-02-08T13:37:23.266775Z	  🎯 画像最適化完了: governance_chart_ja
2026-02-08T13:37:23.267116Z	✅ orgChart 完了 (1件) → orgChart.json
2026-02-08T13:37:23.66829Z	📥 [11/32] policies データ取得中...
2026-02-08T13:37:23.870635Z	📷 policies の画像を処理中...
2026-02-08T13:37:24.013087Z	  ✅ 画像保存: 4b97de15-bc21-456a-8119-9b6a5bafb03e-Manabi_of_Tucson__Inc._Corporate_Bylaws.pdf
2026-02-08T13:37:24.013333Z	  🔄 画像最適化開始: Manabi_of_Tucson__Inc._Corporate_Bylaws
2026-02-08T13:37:24.014913Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:24.140549Z	  ✅ 画像保存: b65ec5d8-dda1-47b3-8bb2-c07ea87d5555-TJS_Conflict_of_Interest_Policy.pdf
2026-02-08T13:37:24.141025Z	  🔄 画像最適化開始: TJS_Conflict_of_Interest_Policy
2026-02-08T13:37:24.142123Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:24.327321Z	  ✅ 画像保存: d7efd34e-2499-4827-95c4-48f6e5ed0afb-Article_of_Incorporation_-_Manabi_of_Tucson__Inc..pdf
2026-02-08T13:37:24.327901Z	  🔄 画像最適化開始: Article_of_Incorporation_-_Manabi_of_Tucson__Inc.
2026-02-08T13:37:24.329276Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:24.329565Z	✅ policies 完了 (3件) → policies.json
2026-02-08T13:37:24.73016Z	📥 [12/32] roleList データ取得中...
2026-02-08T13:37:25.075751Z	📷 roleList の画像を処理中...
2026-02-08T13:37:25.076467Z	✅ roleList 完了 (6件) → roleList.json
2026-02-08T13:37:25.477967Z	📥 [13/32] staff データ取得中...
2026-02-08T13:37:25.787641Z	📷 staff の画像を処理中...
2026-02-08T13:37:25.962269Z	  ✅ 画像保存: 102a8c0e-cf8c-8032-ba7b-c79866f660eb-IMG_1280_edited.jpg
2026-02-08T13:37:25.962553Z	  🔄 画像最適化開始: IMG_1280_edited
2026-02-08T13:37:25.987055Z	    ✅ 最適化画像生成: IMG_1280_edited-sm.webp
2026-02-08T13:37:26.055254Z	    ✅ 最適化画像生成: IMG_1280_edited-md.webp
2026-02-08T13:37:26.162606Z	    ✅ 最適化画像生成: IMG_1280_edited-lg.webp
2026-02-08T13:37:26.287882Z	    ✅ 最適化画像生成: IMG_1280_edited-xl.webp
2026-02-08T13:37:26.288174Z	  🎯 画像最適化完了: IMG_1280_edited
2026-02-08T13:37:26.466345Z	  ✅ 画像保存: 102a8c0e-cf8c-803e-8c91-cdc26abf8c7b-Kokori-TJS.jpg
2026-02-08T13:37:26.467005Z	  🔄 画像最適化開始: Kokori-TJS
2026-02-08T13:37:26.511593Z	    ✅ 最適化画像生成: Kokori-TJS-sm.webp
2026-02-08T13:37:26.614992Z	    ✅ 最適化画像生成: Kokori-TJS-md.webp
2026-02-08T13:37:26.781483Z	    ✅ 最適化画像生成: Kokori-TJS-lg.webp
2026-02-08T13:37:26.934614Z	    ✅ 最適化画像生成: Kokori-TJS-xl.webp
2026-02-08T13:37:26.935206Z	  🎯 画像最適化完了: Kokori-TJS
2026-02-08T13:37:27.033734Z	  ✅ 画像保存: 102a8c0e-cf8c-803e-9b33-f2d6b41189c5-profile.jpg
2026-02-08T13:37:27.033996Z	  🔄 画像最適化開始: profile-102a8c0e
2026-02-08T13:37:27.039892Z	    ✅ 最適化画像生成: profile-102a8c0e-sm.webp
2026-02-08T13:37:27.046519Z	    ✅ 最適化画像生成: profile-102a8c0e-md.webp
2026-02-08T13:37:27.052468Z	    ✅ 最適化画像生成: profile-102a8c0e-lg.webp
2026-02-08T13:37:27.058253Z	    ✅ 最適化画像生成: profile-102a8c0e-xl.webp
2026-02-08T13:37:27.058671Z	  🎯 画像最適化完了: profile-102a8c0e
2026-02-08T13:37:27.193951Z	  ✅ 画像保存: 102a8c0e-cf8c-80a2-9cba-f21c57ac7a99-Meg-TJS.jpg
2026-02-08T13:37:27.194261Z	  🔄 画像最適化開始: Meg-TJS
2026-02-08T13:37:27.242687Z	    ✅ 最適化画像生成: Meg-TJS-sm.webp
2026-02-08T13:37:27.329005Z	    ✅ 最適化画像生成: Meg-TJS-md.webp
2026-02-08T13:37:27.45514Z	    ✅ 最適化画像生成: Meg-TJS-lg.webp
2026-02-08T13:37:27.585628Z	    ✅ 最適化画像生成: Meg-TJS-xl.webp
2026-02-08T13:37:27.585903Z	  🎯 画像最適化完了: Meg-TJS
2026-02-08T13:37:27.752452Z	  ✅ 画像保存: 102a8c0e-cf8c-80b6-a18a-f9a071308672-Manami-TJS.jpg
2026-02-08T13:37:27.752668Z	  🔄 画像最適化開始: Manami-TJS
2026-02-08T13:37:27.817569Z	    ✅ 最適化画像生成: Manami-TJS-sm.webp
2026-02-08T13:37:27.93387Z	    ✅ 最適化画像生成: Manami-TJS-md.webp
2026-02-08T13:37:28.169561Z	    ✅ 最適化画像生成: Manami-TJS-lg.webp
2026-02-08T13:37:28.482662Z	    ✅ 最適化画像生成: Manami-TJS-xl.webp
2026-02-08T13:37:28.483024Z	  🎯 画像最適化完了: Manami-TJS
2026-02-08T13:37:28.621395Z	  ✅ 画像保存: 102a8c0e-cf8c-80c8-9391-cb8332a09711-Lumi-TJS.jpg
2026-02-08T13:37:28.621775Z	  🔄 画像最適化開始: Lumi-TJS
2026-02-08T13:37:28.650682Z	    ✅ 最適化画像生成: Lumi-TJS-sm.webp
2026-02-08T13:37:28.675504Z	    ✅ 最適化画像生成: Lumi-TJS-md.webp
2026-02-08T13:37:28.700623Z	    ✅ 最適化画像生成: Lumi-TJS-lg.webp
2026-02-08T13:37:28.726048Z	    ✅ 最適化画像生成: Lumi-TJS-xl.webp
2026-02-08T13:37:28.726294Z	  🎯 画像最適化完了: Lumi-TJS
2026-02-08T13:37:28.964269Z	  ✅ 画像保存: 102a8c0e-cf8c-80cd-a577-c9351f661364-IMG_7879_edited.jpg
2026-02-08T13:37:28.964516Z	  🔄 画像最適化開始: IMG_7879_edited
2026-02-08T13:37:29.023016Z	    ✅ 最適化画像生成: IMG_7879_edited-sm.webp
2026-02-08T13:37:29.155228Z	    ✅ 最適化画像生成: IMG_7879_edited-md.webp
2026-02-08T13:37:29.358365Z	    ✅ 最適化画像生成: IMG_7879_edited-lg.webp
2026-02-08T13:37:29.635707Z	    ✅ 最適化画像生成: IMG_7879_edited-xl.webp
2026-02-08T13:37:29.636114Z	  🎯 画像最適化完了: IMG_7879_edited
2026-02-08T13:37:29.72216Z	  ✅ 画像保存: 102a8c0e-cf8c-80e6-9519-d25acdcfd0ec-profile.jpg
2026-02-08T13:37:29.722404Z	  🔄 画像最適化開始: profile-102a8c0e
2026-02-08T13:37:29.722518Z	    📷 最適化画像スキップ（既存）: profile-102a8c0e-sm.webp
2026-02-08T13:37:29.722619Z	    📷 最適化画像スキップ（既存）: profile-102a8c0e-md.webp
2026-02-08T13:37:29.722725Z	    📷 最適化画像スキップ（既存）: profile-102a8c0e-lg.webp
2026-02-08T13:37:29.722903Z	    📷 最適化画像スキップ（既存）: profile-102a8c0e-xl.webp
2026-02-08T13:37:29.723021Z	  🎯 画像最適化完了: profile-102a8c0e
2026-02-08T13:37:29.885289Z	  ✅ 画像保存: 102a8c0e-cf8c-80f9-bef0-dd401debb8af-IMG_7799_edited.jpg
2026-02-08T13:37:29.885583Z	  🔄 画像最適化開始: IMG_7799_edited
2026-02-08T13:37:29.946766Z	    ✅ 最適化画像生成: IMG_7799_edited-sm.webp
2026-02-08T13:37:30.085934Z	    ✅ 最適化画像生成: IMG_7799_edited-md.webp
2026-02-08T13:37:30.296358Z	    ✅ 最適化画像生成: IMG_7799_edited-lg.webp
2026-02-08T13:37:30.573727Z	    ✅ 最適化画像生成: IMG_7799_edited-xl.webp
2026-02-08T13:37:30.574014Z	  🎯 画像最適化完了: IMG_7799_edited
2026-02-08T13:37:30.724914Z	  ✅ 画像保存: 219a8c0e-cf8c-8086-95b6-dbe56a73880d-Katsu-TJS.jpg
2026-02-08T13:37:30.725187Z	  🔄 画像最適化開始: Katsu-TJS
2026-02-08T13:37:30.755027Z	    ✅ 最適化画像生成: Katsu-TJS-sm.webp
2026-02-08T13:37:30.790941Z	    ✅ 最適化画像生成: Katsu-TJS-md.webp
2026-02-08T13:37:30.828387Z	    ✅ 最適化画像生成: Katsu-TJS-lg.webp
2026-02-08T13:37:30.865076Z	    ✅ 最適化画像生成: Katsu-TJS-xl.webp
2026-02-08T13:37:30.865358Z	  🎯 画像最適化完了: Katsu-TJS
2026-02-08T13:37:31.041468Z	  ✅ 画像保存: 262a8c0e-cf8c-8087-9157-eccd746e636d-Kayo-TJS.jpg
2026-02-08T13:37:31.041735Z	  🔄 画像最適化開始: Kayo-TJS
2026-02-08T13:37:31.09878Z	    ✅ 最適化画像生成: Kayo-TJS-sm.webp
2026-02-08T13:37:31.18978Z	    ✅ 最適化画像生成: Kayo-TJS-md.webp
2026-02-08T13:37:31.30976Z	    ✅ 最適化画像生成: Kayo-TJS-lg.webp
2026-02-08T13:37:31.426355Z	    ✅ 最適化画像生成: Kayo-TJS-xl.webp
2026-02-08T13:37:31.426585Z	  🎯 画像最適化完了: Kayo-TJS
2026-02-08T13:37:31.547077Z	  ✅ 画像保存: 4377c087-e782-46e3-9eaf-261863837f19-profile.jpg
2026-02-08T13:37:31.547407Z	  🔄 画像最適化開始: profile-4377c087
2026-02-08T13:37:31.55451Z	    ✅ 最適化画像生成: profile-4377c087-sm.webp
2026-02-08T13:37:31.560657Z	    ✅ 最適化画像生成: profile-4377c087-md.webp
2026-02-08T13:37:31.566625Z	    ✅ 最適化画像生成: profile-4377c087-lg.webp
2026-02-08T13:37:31.572771Z	    ✅ 最適化画像生成: profile-4377c087-xl.webp
2026-02-08T13:37:31.572949Z	  🎯 画像最適化完了: profile-4377c087
2026-02-08T13:37:31.665547Z	  ✅ 画像保存: 9a170ec8-c017-4cce-a0dd-d62f2edb82b6-minami.png
2026-02-08T13:37:31.665947Z	  🔄 画像最適化開始: minami
2026-02-08T13:37:31.674189Z	    ✅ 最適化画像生成: minami-sm.webp
2026-02-08T13:37:31.682719Z	    ✅ 最適化画像生成: minami-md.webp
2026-02-08T13:37:31.691155Z	    ✅ 最適化画像生成: minami-lg.webp
2026-02-08T13:37:31.69927Z	    ✅ 最適化画像生成: minami-xl.webp
2026-02-08T13:37:31.69945Z	  🎯 画像最適化完了: minami
2026-02-08T13:37:32.134916Z	  ✅ 画像保存: c452fe7f-4be8-4bdb-9afb-a32c10afbcab-IMG_7796.jpeg
2026-02-08T13:37:32.135307Z	  🔄 画像最適化開始: IMG_7796
2026-02-08T13:37:32.189843Z	    ✅ 最適化画像生成: IMG_7796-sm.webp
2026-02-08T13:37:32.295822Z	    ✅ 最適化画像生成: IMG_7796-md.webp
2026-02-08T13:37:32.512404Z	    ✅ 最適化画像生成: IMG_7796-lg.webp
2026-02-08T13:37:32.805052Z	    ✅ 最適化画像生成: IMG_7796-xl.webp
2026-02-08T13:37:32.805364Z	  🎯 画像最適化完了: IMG_7796
2026-02-08T13:37:32.982983Z	  ✅ 画像保存: d65a07cd-7eec-4319-8dbb-f05addf412a9-IMG_1299_edited.jpg
2026-02-08T13:37:32.983292Z	  🔄 画像最適化開始: IMG_1299_edited
2026-02-08T13:37:33.013Z	    ✅ 最適化画像生成: IMG_1299_edited-sm.webp
2026-02-08T13:37:33.079946Z	    ✅ 最適化画像生成: IMG_1299_edited-md.webp
2026-02-08T13:37:33.188978Z	    ✅ 最適化画像生成: IMG_1299_edited-lg.webp
2026-02-08T13:37:33.299196Z	    ✅ 最適化画像生成: IMG_1299_edited-xl.webp
2026-02-08T13:37:33.299431Z	  🎯 画像最適化完了: IMG_1299_edited
2026-02-08T13:37:33.379563Z	  ✅ 画像保存: f9633a2c-0dff-4b02-9161-9139ab8919d0-mcknight.png
2026-02-08T13:37:33.37993Z	  🔄 画像最適化開始: mcknight
2026-02-08T13:37:33.392323Z	    ✅ 最適化画像生成: mcknight-sm.webp
2026-02-08T13:37:33.40396Z	    ✅ 最適化画像生成: mcknight-md.webp
2026-02-08T13:37:33.415299Z	    ✅ 最適化画像生成: mcknight-lg.webp
2026-02-08T13:37:33.427341Z	    ✅ 最適化画像生成: mcknight-xl.webp
2026-02-08T13:37:33.427511Z	  🎯 画像最適化完了: mcknight
2026-02-08T13:37:33.428556Z	✅ staff 完了 (16件) → staff.json
2026-02-08T13:37:33.829428Z	📥 [14/32] category データ取得中...
2026-02-08T13:37:34.075681Z	📷 category の画像を処理中...
2026-02-08T13:37:34.076327Z	✅ category 完了 (2件) → category.json
2026-02-08T13:37:34.477707Z	📥 [15/32] classes データ取得中...
2026-02-08T13:37:34.806658Z	📷 classes の画像を処理中...
2026-02-08T13:37:35.064911Z	  ✅ 画像保存: 11a3d234-161c-4116-bb01-34eeed87f99a-20240210_110201.jpg
2026-02-08T13:37:35.065261Z	  🔄 画像最適化開始: 20240210_110201
2026-02-08T13:37:35.120945Z	    ✅ 最適化画像生成: 20240210_110201-sm.webp
2026-02-08T13:37:35.233407Z	    ✅ 最適化画像生成: 20240210_110201-md.webp
2026-02-08T13:37:35.424801Z	    ✅ 最適化画像生成: 20240210_110201-lg.webp
2026-02-08T13:37:35.751549Z	    ✅ 最適化画像生成: 20240210_110201-xl.webp
2026-02-08T13:37:35.751778Z	  🎯 画像最適化完了: 20240210_110201
2026-02-08T13:37:35.920749Z	  ✅ 画像保存: 11aa8c0e-cf8c-8000-b850-fef91292ae8c-IMG_1866.jpg
2026-02-08T13:37:35.921026Z	  🔄 画像最適化開始: IMG_1866
2026-02-08T13:37:35.948452Z	    ✅ 最適化画像生成: IMG_1866-sm.webp
2026-02-08T13:37:36.025353Z	    ✅ 最適化画像生成: IMG_1866-md.webp
2026-02-08T13:37:36.102729Z	    ✅ 最適化画像生成: IMG_1866-lg.webp
2026-02-08T13:37:36.18113Z	    ✅ 最適化画像生成: IMG_1866-xl.webp
2026-02-08T13:37:36.181386Z	  🎯 画像最適化完了: IMG_1866
2026-02-08T13:37:36.309294Z	  ✅ 画像保存: 11aa8c0e-cf8c-806d-bb6c-f2177df033cb-IMG_3338.jpg
2026-02-08T13:37:36.309933Z	  🔄 画像最適化開始: IMG_3338
2026-02-08T13:37:36.358591Z	    ✅ 最適化画像生成: IMG_3338-sm.webp
2026-02-08T13:37:36.469304Z	    ✅ 最適化画像生成: IMG_3338-md.webp
2026-02-08T13:37:36.721109Z	    ✅ 最適化画像生成: IMG_3338-lg.webp
2026-02-08T13:37:37.23781Z	    ✅ 最適化画像生成: IMG_3338-xl.webp
2026-02-08T13:37:37.238089Z	  🎯 画像最適化完了: IMG_3338
2026-02-08T13:37:37.705805Z	  ✅ 画像保存: 11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0-IMG_8125.jpg
2026-02-08T13:37:37.70603Z	  🔄 画像最適化開始: IMG_8125
2026-02-08T13:37:37.783249Z	    ✅ 最適化画像生成: IMG_8125-sm.webp
2026-02-08T13:37:37.932122Z	    ✅ 最適化画像生成: IMG_8125-md.webp
2026-02-08T13:37:38.204612Z	    ✅ 最適化画像生成: IMG_8125-lg.webp
2026-02-08T13:37:38.751034Z	    ✅ 最適化画像生成: IMG_8125-xl.webp
2026-02-08T13:37:38.751326Z	  🎯 画像最適化完了: IMG_8125
2026-02-08T13:37:38.919579Z	  ✅ 画像保存: 11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718-IMG_7892.jpg
2026-02-08T13:37:38.919879Z	  🔄 画像最適化開始: IMG_7892
2026-02-08T13:37:38.965954Z	    ✅ 最適化画像生成: IMG_7892-sm.webp
2026-02-08T13:37:39.081932Z	    ✅ 最適化画像生成: IMG_7892-md.webp
2026-02-08T13:37:39.273208Z	    ✅ 最適化画像生成: IMG_7892-lg.webp
2026-02-08T13:37:39.487756Z	    ✅ 最適化画像生成: IMG_7892-xl.webp
2026-02-08T13:37:39.488426Z	  🎯 画像最適化完了: IMG_7892
2026-02-08T13:37:39.611814Z	  ✅ 画像保存: 53b5c5ad-de13-4cf2-a4c1-407d8d117dce-IMG_3364.jpg
2026-02-08T13:37:39.612058Z	  🔄 画像最適化開始: IMG_3364
2026-02-08T13:37:39.657519Z	    ✅ 最適化画像生成: IMG_3364-sm.webp
2026-02-08T13:37:39.74357Z	    ✅ 最適化画像生成: IMG_3364-md.webp
2026-02-08T13:37:39.935676Z	    ✅ 最適化画像生成: IMG_3364-lg.webp
2026-02-08T13:37:40.210899Z	    ✅ 最適化画像生成: IMG_3364-xl.webp
2026-02-08T13:37:40.211428Z	  🎯 画像最適化完了: IMG_3364
2026-02-08T13:37:40.542666Z	  ✅ 画像保存: 63f53dc4-0f61-4505-abea-ff1ad51668e3-IMG_7919.jpg
2026-02-08T13:37:40.542923Z	  🔄 画像最適化開始: IMG_7919
2026-02-08T13:37:40.609863Z	    ✅ 最適化画像生成: IMG_7919-sm.webp
2026-02-08T13:37:40.727705Z	    ✅ 最適化画像生成: IMG_7919-md.webp
2026-02-08T13:37:40.946692Z	    ✅ 最適化画像生成: IMG_7919-lg.webp
2026-02-08T13:37:41.229026Z	    ✅ 最適化画像生成: IMG_7919-xl.webp
2026-02-08T13:37:41.229544Z	  🎯 画像最適化完了: IMG_7919
2026-02-08T13:37:41.230358Z	✅ classes 完了 (7件) → classes.json
2026-02-08T13:37:41.631727Z	📥 [16/32] schedule データ取得中...
2026-02-08T13:37:42.123818Z	📷 schedule の画像を処理中...
2026-02-08T13:37:42.126668Z	✅ schedule 完了 (48件) → schedule.json
2026-02-08T13:37:42.527267Z	📥 [17/32] files データ取得中...
2026-02-08T13:37:42.775438Z	📷 files の画像を処理中...
2026-02-08T13:37:42.916614Z	  ✅ 画像保存: ba18afdf-a39a-49bd-a90e-459f9f12cf40-2025-2026_Tucson_Japanese_School_Calendar_jp.pdf
2026-02-08T13:37:42.916898Z	  🔄 画像最適化開始: 2025-2026_Tucson_Japanese_School_Calendar_jp
2026-02-08T13:37:42.918524Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:43.038662Z	  ✅ 画像保存: ba18afdf-a39a-49bd-a90e-459f9f12cf40-2025-2026__Tucson_Japanese_School_Calendar_en.pdf
2026-02-08T13:37:43.039135Z	  🔄 画像最適化開始: 2025-2026__Tucson_Japanese_School_Calendar_en
2026-02-08T13:37:43.040025Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:37:43.179737Z	  ✅ 画像保存: ba18afdf-a39a-49bd-a90e-459f9f12cf40-event.png
2026-02-08T13:37:43.180008Z	  🔄 画像最適化開始: event
2026-02-08T13:37:43.275576Z	    ✅ 最適化画像生成: event-sm.webp
2026-02-08T13:37:43.421541Z	    ✅ 最適化画像生成: event-md.webp
2026-02-08T13:37:43.625358Z	    ✅ 最適化画像生成: event-lg.webp
2026-02-08T13:37:43.837703Z	    ✅ 最適化画像生成: event-xl.webp
2026-02-08T13:37:43.838388Z	  🎯 画像最適化完了: event
2026-02-08T13:37:43.838506Z	✅ files 完了 (1件) → files.json
2026-02-08T13:37:44.238835Z	📥 [18/32] qualification データ取得中...
2026-02-08T13:37:44.464347Z	📷 qualification の画像を処理中...
2026-02-08T13:37:44.464886Z	✅ qualification 完了 (3件) → qualification.json
2026-02-08T13:37:44.865418Z	📥 [19/32] price データ取得中...
2026-02-08T13:37:48.868815Z	📷 price の画像を処理中...
2026-02-08T13:37:48.869609Z	✅ price 完了 (8件) → price.json
2026-02-08T13:37:49.270718Z	📥 [20/32] discountFamily データ取得中...
2026-02-08T13:37:51.294529Z	📷 discountFamily の画像を処理中...
2026-02-08T13:37:51.295044Z	✅ discountFamily 完了 (3件) → discountFamily.json
2026-02-08T13:37:51.695921Z	📥 [21/32] discountStaff データ取得中...
2026-02-08T13:37:54.579163Z	📷 discountStaff の画像を処理中...
2026-02-08T13:37:54.57972Z	✅ discountStaff 完了 (3件) → discountStaff.json
2026-02-08T13:37:54.980248Z	📥 [22/32] enrollment データ取得中...
2026-02-08T13:37:55.147057Z	📷 enrollment の画像を処理中...
2026-02-08T13:37:55.148537Z	✅ enrollment 完了 (2件) → enrollment.json
2026-02-08T13:37:55.549178Z	📥 [23/32] support データ取得中...
2026-02-08T13:37:55.725065Z	📷 support の画像を処理中...
2026-02-08T13:37:55.725593Z	✅ support 完了 (1件) → support.json
2026-02-08T13:37:56.126823Z	📥 [24/32] sponsor データ取得中...
2026-02-08T13:37:56.28841Z	📷 sponsor の画像を処理中...
2026-02-08T13:37:56.289079Z	✅ sponsor 完了 (1件) → sponsor.json
2026-02-08T13:37:56.690179Z	📥 [25/32] donation データ取得中...
2026-02-08T13:37:56.890855Z	📷 donation の画像を処理中...
2026-02-08T13:37:56.89145Z	✅ donation 完了 (1件) → donation.json
2026-02-08T13:37:57.292164Z	📥 [26/32] howto データ取得中...
2026-02-08T13:37:57.501706Z	📷 howto の画像を処理中...
2026-02-08T13:37:57.779443Z	  ✅ 画像保存: 1b9f6742-6ca7-438d-a4a6-c7a6ebb29013-tjsRaffle.png
2026-02-08T13:37:57.779725Z	  🔄 画像最適化開始: tjsRaffle
2026-02-08T13:37:57.804543Z	    ✅ 最適化画像生成: tjsRaffle-sm.webp
2026-02-08T13:37:57.855457Z	    ✅ 最適化画像生成: tjsRaffle-md.webp
2026-02-08T13:37:57.90755Z	    ✅ 最適化画像生成: tjsRaffle-lg.webp
2026-02-08T13:37:57.960023Z	    ✅ 最適化画像生成: tjsRaffle-xl.webp
2026-02-08T13:37:57.960283Z	  🎯 画像最適化完了: tjsRaffle
2026-02-08T13:37:58.167759Z	  ✅ 画像保存: 3041c786-8d8f-4d69-b0e8-bdb7db422ec4-tjsSponsor20250907.png
2026-02-08T13:37:58.168004Z	  🔄 画像最適化開始: tjsSponsor20250907
2026-02-08T13:37:58.224926Z	    ✅ 最適化画像生成: tjsSponsor20250907-sm.webp
2026-02-08T13:37:58.312456Z	    ✅ 最適化画像生成: tjsSponsor20250907-md.webp
2026-02-08T13:37:58.444578Z	    ✅ 最適化画像生成: tjsSponsor20250907-lg.webp
2026-02-08T13:37:58.63715Z	    ✅ 最適化画像生成: tjsSponsor20250907-xl.webp
2026-02-08T13:37:58.637426Z	  🎯 画像最適化完了: tjsSponsor20250907
2026-02-08T13:37:59.339742Z	  ✅ 画像保存: ecc09bd3-a2ae-46b2-8ca9-cddaf620c749-tickets.jpeg
2026-02-08T13:37:59.340156Z	  🔄 画像最適化開始: tickets
2026-02-08T13:37:59.412914Z	    ✅ 最適化画像生成: tickets-sm.webp
2026-02-08T13:37:59.537995Z	    ✅ 最適化画像生成: tickets-md.webp
2026-02-08T13:37:59.737851Z	    ✅ 最適化画像生成: tickets-lg.webp
2026-02-08T13:38:00.069749Z	    ✅ 最適化画像生成: tickets-xl.webp
2026-02-08T13:38:00.070182Z	  🎯 画像最適化完了: tickets
2026-02-08T13:38:00.07056Z	✅ howto 完了 (3件) → howto.json
2026-02-08T13:38:00.471077Z	📥 [27/32] opportunity データ取得中...
2026-02-08T13:38:00.68558Z	📷 opportunity の画像を処理中...
2026-02-08T13:38:00.686252Z	✅ opportunity 完了 (3件) → opportunity.json
2026-02-08T13:38:01.085934Z	📥 [28/32] general データ取得中...
2026-02-08T13:38:01.420859Z	📷 general の画像を処理中...
2026-02-08T13:38:01.583503Z	  ✅ 画像保存: 379be2cf-b4af-4260-a3c3-1a8f9f222b90-employment.png
2026-02-08T13:38:01.583849Z	  🔄 画像最適化開始: employment
2026-02-08T13:38:01.599267Z	    ✅ 最適化画像生成: employment-sm.webp
2026-02-08T13:38:01.61384Z	    ✅ 最適化画像生成: employment-md.webp
2026-02-08T13:38:01.628666Z	    ✅ 最適化画像生成: employment-lg.webp
2026-02-08T13:38:01.643297Z	    ✅ 最適化画像生成: employment-xl.webp
2026-02-08T13:38:01.643479Z	  🎯 画像最適化完了: employment
2026-02-08T13:38:01.644085Z	✅ general 完了 (1件) → general.json
2026-02-08T13:38:02.044312Z	📥 [29/32] reports データ取得中...
2026-02-08T13:38:02.511203Z	📷 reports の画像を処理中...
2026-02-08T13:38:02.706506Z	  ✅ 画像保存: 265a8c0e-cf8c-8041-a0a6-f9fb45507a0b-2023AnnualReport_en_20250905.pdf
2026-02-08T13:38:02.706988Z	  🔄 画像最適化開始: 2023AnnualReport_en_20250905
2026-02-08T13:38:02.708423Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:38:02.836668Z	  ✅ 画像保存: 265a8c0e-cf8c-8041-a0a6-f9fb45507a0b-2023AnnualReport_ja_20250905.pdf
2026-02-08T13:38:02.836947Z	  🔄 画像最適化開始: 2023AnnualReport_ja_20250905
2026-02-08T13:38:02.838064Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:38:02.972873Z	  ✅ 画像保存: cbb7babc-2e04-4246-94d2-418bdbfaf174-2024AnnualReport_en_20250905.pdf
2026-02-08T13:38:02.973168Z	  🔄 画像最適化開始: 2024AnnualReport_en_20250905
2026-02-08T13:38:02.974257Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:38:03.090381Z	  ✅ 画像保存: cbb7babc-2e04-4246-94d2-418bdbfaf174-2024AnnualReport_ja_20250905.pdf
2026-02-08T13:38:03.090742Z	  🔄 画像最適化開始: 2024AnnualReport_ja_20250905
2026-02-08T13:38:03.091666Z	  ❌ 画像最適化失敗: Input file contains unsupported image format
2026-02-08T13:38:03.091871Z	✅ reports 完了 (2件) → reports.json
2026-02-08T13:38:03.492953Z	📥 [30/32] news データ取得中...
2026-02-08T13:38:04.143591Z	📷 news の画像を処理中...
2026-02-08T13:38:04.14382Z	📄 ニュースのフルコンテンツを取得中... (1/42)
2026-02-08T13:38:04.260625Z	  📄 102a8c0e-cf8c-8096-b2f7-e91ec767e38e: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:04.261018Z	  📄 102a8c0e-cf8c-8096-b2f7-e91ec767e38e: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:04.781964Z	  ✅ 画像保存: 102a8c0e-cf8c-8096-b2f7-e91ec767e38e-unitymural02.jpg
2026-02-08T13:38:04.78226Z	  🔄 画像最適化開始: unitymural02
2026-02-08T13:38:04.836033Z	    ✅ 最適化画像生成: unitymural02-sm.webp
2026-02-08T13:38:04.984708Z	    ✅ 最適化画像生成: unitymural02-md.webp
2026-02-08T13:38:05.216665Z	    ✅ 最適化画像生成: unitymural02-lg.webp
2026-02-08T13:38:05.547046Z	    ✅ 最適化画像生成: unitymural02-xl.webp
2026-02-08T13:38:05.547336Z	  🎯 画像最適化完了: unitymural02
2026-02-08T13:38:05.547493Z	📄 ニュースのフルコンテンツを取得中... (2/42)
2026-02-08T13:38:05.724595Z	  📄 10ba8c0e-cf8c-803e-aaa0-c598d2fa0976: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:05.724834Z	  📄 10ba8c0e-cf8c-803e-aaa0-c598d2fa0976: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:06.289529Z	  ✅ 画像保存: 10ba8c0e-cf8c-803e-aaa0-c598d2fa0976-Oasissep2017.jpg
2026-02-08T13:38:06.289803Z	  🔄 画像最適化開始: Oasissep2017
2026-02-08T13:38:06.336462Z	    ✅ 最適化画像生成: Oasissep2017-sm.webp
2026-02-08T13:38:06.431861Z	    ✅ 最適化画像生成: Oasissep2017-md.webp
2026-02-08T13:38:06.599804Z	    ✅ 最適化画像生成: Oasissep2017-lg.webp
2026-02-08T13:38:06.887687Z	    ✅ 最適化画像生成: Oasissep2017-xl.webp
2026-02-08T13:38:06.887903Z	  🎯 画像最適化完了: Oasissep2017
2026-02-08T13:38:06.888756Z	📄 ニュースのフルコンテンツを取得中... (3/42)
2026-02-08T13:38:07.798383Z	  📄 10ba8c0e-cf8c-8074-b86d-e8f38a2bd302: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:07.79865Z	  📄 10ba8c0e-cf8c-8074-b86d-e8f38a2bd302: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:08.198781Z	📄 ニュースのフルコンテンツを取得中... (4/42)
2026-02-08T13:38:08.332837Z	  📄 110a8c0e-cf8c-8021-8942-c4bc95ab4782: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:08.333134Z	  📄 110a8c0e-cf8c-8021-8942-c4bc95ab4782: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:08.840249Z	  ✅ 画像保存: 110a8c0e-cf8c-8021-8942-c4bc95ab4782-japanesegarden.webp
2026-02-08T13:38:08.840548Z	  🔄 画像最適化開始: japanesegarden
2026-02-08T13:38:08.862551Z	    ✅ 最適化画像生成: japanesegarden-sm.webp
2026-02-08T13:38:08.880745Z	    ✅ 最適化画像生成: japanesegarden-md.webp
2026-02-08T13:38:08.89925Z	    ✅ 最適化画像生成: japanesegarden-lg.webp
2026-02-08T13:38:08.916678Z	    ✅ 最適化画像生成: japanesegarden-xl.webp
2026-02-08T13:38:08.916946Z	  🎯 画像最適化完了: japanesegarden
2026-02-08T13:38:08.917083Z	📄 ニュースのフルコンテンツを取得中... (5/42)
2026-02-08T13:38:12.680707Z	  📄 110a8c0e-cf8c-8035-98f6-d438d58ac188: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:12.681053Z	  📄 110a8c0e-cf8c-8035-98f6-d438d58ac188: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:13.168293Z	  ✅ 画像保存: 110a8c0e-cf8c-8035-98f6-d438d58ac188-tucsonundokai2023.webp
2026-02-08T13:38:13.168678Z	  🔄 画像最適化開始: tucsonundokai2023
2026-02-08T13:38:13.189015Z	    ✅ 最適化画像生成: tucsonundokai2023-sm.webp
2026-02-08T13:38:13.213466Z	    ✅ 最適化画像生成: tucsonundokai2023-md.webp
2026-02-08T13:38:13.228372Z	    ✅ 最適化画像生成: tucsonundokai2023-lg.webp
2026-02-08T13:38:13.246925Z	    ✅ 最適化画像生成: tucsonundokai2023-xl.webp
2026-02-08T13:38:13.247133Z	  🎯 画像最適化完了: tucsonundokai2023
2026-02-08T13:38:13.247274Z	📄 ニュースのフルコンテンツを取得中... (6/42)
2026-02-08T13:38:13.377914Z	  📄 110a8c0e-cf8c-804e-b7d6-dfe14f5651ea: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:13.37824Z	  📄 110a8c0e-cf8c-804e-b7d6-dfe14f5651ea: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:13.920159Z	  ✅ 画像保存: 110a8c0e-cf8c-804e-b7d6-dfe14f5651ea-notoearthquake1.jpg
2026-02-08T13:38:13.920448Z	  🔄 画像最適化開始: notoearthquake1
2026-02-08T13:38:13.957085Z	    ✅ 最適化画像生成: notoearthquake1-sm.webp
2026-02-08T13:38:14.048829Z	    ✅ 最適化画像生成: notoearthquake1-md.webp
2026-02-08T13:38:14.207439Z	    ✅ 最適化画像生成: notoearthquake1-lg.webp
2026-02-08T13:38:14.357259Z	    ✅ 最適化画像生成: notoearthquake1-xl.webp
2026-02-08T13:38:14.35759Z	  🎯 画像最適化完了: notoearthquake1
2026-02-08T13:38:14.460394Z	  ✅ 画像保存: 110a8c0e-cf8c-804e-b7d6-dfe14f5651ea-notoearthquake2.jpg
2026-02-08T13:38:14.460744Z	  🔄 画像最適化開始: notoearthquake2
2026-02-08T13:38:14.495686Z	    ✅ 最適化画像生成: notoearthquake2-sm.webp
2026-02-08T13:38:14.593357Z	    ✅ 最適化画像生成: notoearthquake2-md.webp
2026-02-08T13:38:14.703549Z	    ✅ 最適化画像生成: notoearthquake2-lg.webp
2026-02-08T13:38:14.7985Z	    ✅ 最適化画像生成: notoearthquake2-xl.webp
2026-02-08T13:38:14.798768Z	  🎯 画像最適化完了: notoearthquake2
2026-02-08T13:38:14.852409Z	  ✅ 画像保存: 110a8c0e-cf8c-804e-b7d6-dfe14f5651ea-notoearthquake3.jpg
2026-02-08T13:38:14.852605Z	  🔄 画像最適化開始: notoearthquake3
2026-02-08T13:38:14.866493Z	    ✅ 最適化画像生成: notoearthquake3-sm.webp
2026-02-08T13:38:14.880581Z	    ✅ 最適化画像生成: notoearthquake3-md.webp
2026-02-08T13:38:14.893855Z	    ✅ 最適化画像生成: notoearthquake3-lg.webp
2026-02-08T13:38:14.907363Z	    ✅ 最適化画像生成: notoearthquake3-xl.webp
2026-02-08T13:38:14.907516Z	  🎯 画像最適化完了: notoearthquake3
2026-02-08T13:38:14.907631Z	📄 ニュースのフルコンテンツを取得中... (7/42)
2026-02-08T13:38:15.044448Z	  📄 110a8c0e-cf8c-805b-8379-fb368fd40346: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:15.044669Z	  📄 110a8c0e-cf8c-805b-8379-fb368fd40346: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:15.537523Z	  ✅ 画像保存: 110a8c0e-cf8c-805b-8379-fb368fd40346-newyearprayer.webp
2026-02-08T13:38:15.537884Z	  🔄 画像最適化開始: newyearprayer
2026-02-08T13:38:15.555476Z	    ✅ 最適化画像生成: newyearprayer-sm.webp
2026-02-08T13:38:15.571502Z	    ✅ 最適化画像生成: newyearprayer-md.webp
2026-02-08T13:38:15.58721Z	    ✅ 最適化画像生成: newyearprayer-lg.webp
2026-02-08T13:38:15.603755Z	    ✅ 最適化画像生成: newyearprayer-xl.webp
2026-02-08T13:38:15.603929Z	  🎯 画像最適化完了: newyearprayer
2026-02-08T13:38:15.604071Z	📄 ニュースのフルコンテンツを取得中... (8/42)
2026-02-08T13:38:17.163375Z	  📄 110a8c0e-cf8c-805b-a3bf-cba51426fdfb: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:17.163711Z	  📄 110a8c0e-cf8c-805b-a3bf-cba51426fdfb: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:17.697873Z	  ✅ 画像保存: 110a8c0e-cf8c-805b-a3bf-cba51426fdfb-kanjikentei2024.png
2026-02-08T13:38:17.698201Z	  🔄 画像最適化開始: kanjikentei2024
2026-02-08T13:38:17.771639Z	    ✅ 最適化画像生成: kanjikentei2024-sm.webp
2026-02-08T13:38:17.873785Z	    ✅ 最適化画像生成: kanjikentei2024-md.webp
2026-02-08T13:38:18.040598Z	    ✅ 最適化画像生成: kanjikentei2024-lg.webp
2026-02-08T13:38:18.290227Z	    ✅ 最適化画像生成: kanjikentei2024-xl.webp
2026-02-08T13:38:18.290525Z	  🎯 画像最適化完了: kanjikentei2024
2026-02-08T13:38:18.290657Z	📄 ニュースのフルコンテンツを取得中... (9/42)
2026-02-08T13:38:18.449557Z	  📄 110a8c0e-cf8c-80a0-a8aa-e0523eae6b07: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:18.449905Z	  📄 110a8c0e-cf8c-80a0-a8aa-e0523eae6b07: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:18.992723Z	  ✅ 画像保存: 110a8c0e-cf8c-80a0-a8aa-e0523eae6b07-schooltablechair.webp
2026-02-08T13:38:18.993Z	  🔄 画像最適化開始: schooltablechair
2026-02-08T13:38:19.039253Z	    ✅ 最適化画像生成: schooltablechair-sm.webp
2026-02-08T13:38:19.141502Z	    ✅ 最適化画像生成: schooltablechair-md.webp
2026-02-08T13:38:19.276796Z	    ✅ 最適化画像生成: schooltablechair-lg.webp
2026-02-08T13:38:19.532666Z	    ✅ 最適化画像生成: schooltablechair-xl.webp
2026-02-08T13:38:19.532886Z	  🎯 画像最適化完了: schooltablechair
2026-02-08T13:38:19.532993Z	📄 ニュースのフルコンテンツを取得中... (10/42)
2026-02-08T13:38:19.673991Z	  📄 110a8c0e-cf8c-80bd-80fd-fd838e9f76e3: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:19.674309Z	  📄 110a8c0e-cf8c-80bd-80fd-fd838e9f76e3: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:20.075062Z	📄 ニュースのフルコンテンツを取得中... (11/42)
2026-02-08T13:38:20.195138Z	  📄 110a8c0e-cf8c-80cc-9cd5-f9546949b571: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:20.195551Z	  📄 110a8c0e-cf8c-80cc-9cd5-f9546949b571: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:20.705799Z	  ✅ 画像保存: 110a8c0e-cf8c-80cc-9cd5-f9546949b571-arizonamatsurilogo.png
2026-02-08T13:38:20.706107Z	  🔄 画像最適化開始: arizonamatsurilogo
2026-02-08T13:38:20.726543Z	    ✅ 最適化画像生成: arizonamatsurilogo-sm.webp
2026-02-08T13:38:20.755413Z	    ✅ 最適化画像生成: arizonamatsurilogo-md.webp
2026-02-08T13:38:20.784658Z	    ✅ 最適化画像生成: arizonamatsurilogo-lg.webp
2026-02-08T13:38:20.814381Z	    ✅ 最適化画像生成: arizonamatsurilogo-xl.webp
2026-02-08T13:38:20.81457Z	  🎯 画像最適化完了: arizonamatsurilogo
2026-02-08T13:38:20.814806Z	📄 ニュースのフルコンテンツを取得中... (12/42)
2026-02-08T13:38:20.955139Z	  📄 110a8c0e-cf8c-80dd-afcb-f422b241bd32: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:20.955596Z	  📄 110a8c0e-cf8c-80dd-afcb-f422b241bd32: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:21.498438Z	  ✅ 画像保存: 110a8c0e-cf8c-80dd-afcb-f422b241bd32-supportinghands.webp
2026-02-08T13:38:21.49866Z	  🔄 画像最適化開始: supportinghands
2026-02-08T13:38:21.528497Z	    ✅ 最適化画像生成: supportinghands-sm.webp
2026-02-08T13:38:21.583755Z	    ✅ 最適化画像生成: supportinghands-md.webp
2026-02-08T13:38:21.688654Z	    ✅ 最適化画像生成: supportinghands-lg.webp
2026-02-08T13:38:21.807037Z	    ✅ 最適化画像生成: supportinghands-xl.webp
2026-02-08T13:38:21.807359Z	  🎯 画像最適化完了: supportinghands
2026-02-08T13:38:21.807511Z	📄 ニュースのフルコンテンツを取得中... (13/42)
2026-02-08T13:38:21.932634Z	  📄 112a8c0e-cf8c-800a-83bb-f34240a26317: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:21.933001Z	  📄 112a8c0e-cf8c-800a-83bb-f34240a26317: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:22.434288Z	  ✅ 画像保存: 112a8c0e-cf8c-800a-83bb-f34240a26317-childreninclassroom.webp
2026-02-08T13:38:22.434692Z	  🔄 画像最適化開始: childreninclassroom
2026-02-08T13:38:22.447553Z	    ✅ 最適化画像生成: childreninclassroom-sm.webp
2026-02-08T13:38:22.457315Z	    ✅ 最適化画像生成: childreninclassroom-md.webp
2026-02-08T13:38:22.466417Z	    ✅ 最適化画像生成: childreninclassroom-lg.webp
2026-02-08T13:38:22.475346Z	    ✅ 最適化画像生成: childreninclassroom-xl.webp
2026-02-08T13:38:22.475539Z	  🎯 画像最適化完了: childreninclassroom
2026-02-08T13:38:22.475668Z	📄 ニュースのフルコンテンツを取得中... (14/42)
2026-02-08T13:38:22.794252Z	  📄 112a8c0e-cf8c-800f-abed-e7a03eae0e70: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:22.794525Z	  📄 112a8c0e-cf8c-800f-abed-e7a03eae0e70: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:23.325192Z	  ✅ 画像保存: 112a8c0e-cf8c-800f-abed-e7a03eae0e70-hitomimcknight.webp
2026-02-08T13:38:23.32548Z	  🔄 画像最適化開始: hitomimcknight
2026-02-08T13:38:23.346515Z	    ✅ 最適化画像生成: hitomimcknight-sm.webp
2026-02-08T13:38:23.370687Z	    ✅ 最適化画像生成: hitomimcknight-md.webp
2026-02-08T13:38:23.387438Z	    ✅ 最適化画像生成: hitomimcknight-lg.webp
2026-02-08T13:38:23.405109Z	    ✅ 最適化画像生成: hitomimcknight-xl.webp
2026-02-08T13:38:23.405449Z	  🎯 画像最適化完了: hitomimcknight
2026-02-08T13:38:23.405564Z	📄 ニュースのフルコンテンツを取得中... (15/42)
2026-02-08T13:38:24.521509Z	  📄 112a8c0e-cf8c-8027-968c-e601184cc884: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:24.521805Z	  📄 112a8c0e-cf8c-8027-968c-e601184cc884: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:25.103487Z	  ✅ 画像保存: 112a8c0e-cf8c-8027-968c-e601184cc884-kanken2022.webp
2026-02-08T13:38:25.103978Z	  🔄 画像最適化開始: kanken2022
2026-02-08T13:38:25.207133Z	    ✅ 最適化画像生成: kanken2022-sm.webp
2026-02-08T13:38:25.351445Z	    ✅ 最適化画像生成: kanken2022-md.webp
2026-02-08T13:38:25.596342Z	    ✅ 最適化画像生成: kanken2022-lg.webp
2026-02-08T13:38:25.953995Z	    ✅ 最適化画像生成: kanken2022-xl.webp
2026-02-08T13:38:25.95444Z	  🎯 画像最適化完了: kanken2022
2026-02-08T13:38:25.954552Z	📄 ニュースのフルコンテンツを取得中... (16/42)
2026-02-08T13:38:28.188901Z	  📄 112a8c0e-cf8c-802e-9036-c481d58ca391: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:28.189195Z	  📄 112a8c0e-cf8c-802e-9036-c481d58ca391: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:28.736723Z	  ✅ 画像保存: 112a8c0e-cf8c-802e-9036-c481d58ca391-kanjikentei2020.webp
2026-02-08T13:38:28.737039Z	  🔄 画像最適化開始: kanjikentei2020
2026-02-08T13:38:28.778043Z	    ✅ 最適化画像生成: kanjikentei2020-sm.webp
2026-02-08T13:38:28.881653Z	    ✅ 最適化画像生成: kanjikentei2020-md.webp
2026-02-08T13:38:29.021853Z	    ✅ 最適化画像生成: kanjikentei2020-lg.webp
2026-02-08T13:38:29.288215Z	    ✅ 最適化画像生成: kanjikentei2020-xl.webp
2026-02-08T13:38:29.288502Z	  🎯 画像最適化完了: kanjikentei2020
2026-02-08T13:38:29.288656Z	📄 ニュースのフルコンテンツを取得中... (17/42)
2026-02-08T13:38:29.587879Z	  📄 112a8c0e-cf8c-8032-ab02-db04c52a7455: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:29.588216Z	  📄 112a8c0e-cf8c-8032-ab02-db04c52a7455: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:30.079299Z	  ✅ 画像保存: 112a8c0e-cf8c-8032-ab02-db04c52a7455-2020newyear.webp
2026-02-08T13:38:30.07951Z	  🔄 画像最適化開始: 2020newyear
2026-02-08T13:38:30.095267Z	    ✅ 最適化画像生成: 2020newyear-sm.webp
2026-02-08T13:38:30.105339Z	    ✅ 最適化画像生成: 2020newyear-md.webp
2026-02-08T13:38:30.1153Z	    ✅ 最適化画像生成: 2020newyear-lg.webp
2026-02-08T13:38:30.128105Z	    ✅ 最適化画像生成: 2020newyear-xl.webp
2026-02-08T13:38:30.128256Z	  🎯 画像最適化完了: 2020newyear
2026-02-08T13:38:30.128471Z	📄 ニュースのフルコンテンツを取得中... (18/42)
2026-02-08T13:38:30.254957Z	  📄 112a8c0e-cf8c-8033-8993-dd0d3afd1728: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:30.255332Z	  📄 112a8c0e-cf8c-8033-8993-dd0d3afd1728: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:30.82125Z	  ✅ 画像保存: 112a8c0e-cf8c-8033-8993-dd0d3afd1728-schoolchildrensmiles.webp
2026-02-08T13:38:30.821466Z	  🔄 画像最適化開始: schoolchildrensmiles
2026-02-08T13:38:30.865523Z	    ✅ 最適化画像生成: schoolchildrensmiles-sm.webp
2026-02-08T13:38:30.949015Z	    ✅ 最適化画像生成: schoolchildrensmiles-md.webp
2026-02-08T13:38:31.087708Z	    ✅ 最適化画像生成: schoolchildrensmiles-lg.webp
2026-02-08T13:38:31.297871Z	    ✅ 最適化画像生成: schoolchildrensmiles-xl.webp
2026-02-08T13:38:31.298187Z	  🎯 画像最適化完了: schoolchildrensmiles
2026-02-08T13:38:31.298355Z	📄 ニュースのフルコンテンツを取得中... (19/42)
2026-02-08T13:38:31.426006Z	  📄 112a8c0e-cf8c-8033-ac6e-fc3d0614a4d0: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:31.42629Z	  📄 112a8c0e-cf8c-8033-ac6e-fc3d0614a4d0: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:31.916033Z	  ✅ 画像保存: 112a8c0e-cf8c-8033-ac6e-fc3d0614a4d0-kanjikenteilogo.jpg
2026-02-08T13:38:31.916339Z	  🔄 画像最適化開始: kanjikenteilogo
2026-02-08T13:38:31.92588Z	    ✅ 最適化画像生成: kanjikenteilogo-sm.webp
2026-02-08T13:38:31.935954Z	    ✅ 最適化画像生成: kanjikenteilogo-md.webp
2026-02-08T13:38:31.945248Z	    ✅ 最適化画像生成: kanjikenteilogo-lg.webp
2026-02-08T13:38:31.95467Z	    ✅ 最適化画像生成: kanjikenteilogo-xl.webp
2026-02-08T13:38:31.95481Z	  🎯 画像最適化完了: kanjikenteilogo
2026-02-08T13:38:31.955365Z	📄 ニュースのフルコンテンツを取得中... (20/42)
2026-02-08T13:38:32.097807Z	  📄 112a8c0e-cf8c-8034-8ce5-dced417d9e42: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:32.098106Z	  📄 112a8c0e-cf8c-8034-8ce5-dced417d9e42: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:32.588953Z	  ✅ 画像保存: 112a8c0e-cf8c-8034-8ce5-dced417d9e42-newyear2021.jpg
2026-02-08T13:38:32.589252Z	  🔄 画像最適化開始: newyear2021
2026-02-08T13:38:32.598025Z	    ✅ 最適化画像生成: newyear2021-sm.webp
2026-02-08T13:38:32.606951Z	    ✅ 最適化画像生成: newyear2021-md.webp
2026-02-08T13:38:32.615125Z	    ✅ 最適化画像生成: newyear2021-lg.webp
2026-02-08T13:38:32.623646Z	    ✅ 最適化画像生成: newyear2021-xl.webp
2026-02-08T13:38:32.623812Z	  🎯 画像最適化完了: newyear2021
2026-02-08T13:38:32.62393Z	📄 ニュースのフルコンテンツを取得中... (21/42)
2026-02-08T13:38:32.932859Z	  📄 112a8c0e-cf8c-8047-9797-e58ca59ecd54: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:32.933353Z	  📄 112a8c0e-cf8c-8047-9797-e58ca59ecd54: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:33.513034Z	  ✅ 画像保存: 112a8c0e-cf8c-8047-9797-e58ca59ecd54-tucsonundokai2020.webp
2026-02-08T13:38:33.513636Z	  🔄 画像最適化開始: tucsonundokai2020
2026-02-08T13:38:33.577682Z	    ✅ 最適化画像生成: tucsonundokai2020-sm.webp
2026-02-08T13:38:33.694785Z	    ✅ 最適化画像生成: tucsonundokai2020-md.webp
2026-02-08T13:38:33.869378Z	    ✅ 最適化画像生成: tucsonundokai2020-lg.webp
2026-02-08T13:38:34.133507Z	    ✅ 最適化画像生成: tucsonundokai2020-xl.webp
2026-02-08T13:38:34.134153Z	  🎯 画像最適化完了: tucsonundokai2020
2026-02-08T13:38:34.134347Z	📄 ニュースのフルコンテンツを取得中... (22/42)
2026-02-08T13:38:34.268359Z	  📄 112a8c0e-cf8c-8063-bbb4-da44890294de: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:34.268587Z	  📄 112a8c0e-cf8c-8063-bbb4-da44890294de: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:34.820235Z	  ✅ 画像保存: 112a8c0e-cf8c-8063-bbb4-da44890294de-boystudyonline.jpg
2026-02-08T13:38:34.820477Z	  🔄 画像最適化開始: boystudyonline
2026-02-08T13:38:34.85929Z	    ✅ 最適化画像生成: boystudyonline-sm.webp
2026-02-08T13:38:34.936242Z	    ✅ 最適化画像生成: boystudyonline-md.webp
2026-02-08T13:38:35.05985Z	    ✅ 最適化画像生成: boystudyonline-lg.webp
2026-02-08T13:38:35.183459Z	    ✅ 最適化画像生成: boystudyonline-xl.webp
2026-02-08T13:38:35.183846Z	  🎯 画像最適化完了: boystudyonline
2026-02-08T13:38:35.184024Z	📄 ニュースのフルコンテンツを取得中... (23/42)
2026-02-08T13:38:36.220342Z	  📄 112a8c0e-cf8c-8069-8e70-c39caa81b7b6: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:36.220586Z	  📄 112a8c0e-cf8c-8069-8e70-c39caa81b7b6: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:36.682001Z	  ✅ 画像保存: 112a8c0e-cf8c-8069-8e70-c39caa81b7b6-schoolchairtable.webp
2026-02-08T13:38:36.682402Z	  🔄 画像最適化開始: schoolchairtable
2026-02-08T13:38:36.692693Z	    ✅ 最適化画像生成: schoolchairtable-sm.webp
2026-02-08T13:38:36.699833Z	    ✅ 最適化画像生成: schoolchairtable-md.webp
2026-02-08T13:38:36.706971Z	    ✅ 最適化画像生成: schoolchairtable-lg.webp
2026-02-08T13:38:36.714118Z	    ✅ 最適化画像生成: schoolchairtable-xl.webp
2026-02-08T13:38:36.714303Z	  🎯 画像最適化完了: schoolchairtable
2026-02-08T13:38:36.714459Z	📄 ニュースのフルコンテンツを取得中... (24/42)
2026-02-08T13:38:38.165205Z	  📄 112a8c0e-cf8c-8075-bdbf-cc1dfe962559: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:38.165844Z	  📄 112a8c0e-cf8c-8075-bdbf-cc1dfe962559: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:38.658291Z	  ✅ 画像保存: 112a8c0e-cf8c-8075-bdbf-cc1dfe962559-remotelearningkid.webp
2026-02-08T13:38:38.658531Z	  🔄 画像最適化開始: remotelearningkid
2026-02-08T13:38:38.673151Z	    ✅ 最適化画像生成: remotelearningkid-sm.webp
2026-02-08T13:38:38.684568Z	    ✅ 最適化画像生成: remotelearningkid-md.webp
2026-02-08T13:38:38.695155Z	    ✅ 最適化画像生成: remotelearningkid-lg.webp
2026-02-08T13:38:38.705331Z	    ✅ 最適化画像生成: remotelearningkid-xl.webp
2026-02-08T13:38:38.705498Z	  🎯 画像最適化完了: remotelearningkid
2026-02-08T13:38:38.70569Z	📄 ニュースのフルコンテンツを取得中... (25/42)
2026-02-08T13:38:39.825582Z	  📄 112a8c0e-cf8c-8081-9293-cf90f6aefa52: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:39.826239Z	  📄 112a8c0e-cf8c-8081-9293-cf90f6aefa52: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:40.286722Z	  ✅ 画像保存: 112a8c0e-cf8c-8081-9293-cf90f6aefa52-sponsorthanks.webp
2026-02-08T13:38:40.287008Z	  🔄 画像最適化開始: sponsorthanks
2026-02-08T13:38:40.308462Z	    ✅ 最適化画像生成: sponsorthanks-sm.webp
2026-02-08T13:38:40.350207Z	    ✅ 最適化画像生成: sponsorthanks-md.webp
2026-02-08T13:38:40.42646Z	    ✅ 最適化画像生成: sponsorthanks-lg.webp
2026-02-08T13:38:40.545294Z	    ✅ 最適化画像生成: sponsorthanks-xl.webp
2026-02-08T13:38:40.545634Z	  🎯 画像最適化完了: sponsorthanks
2026-02-08T13:38:40.545792Z	📄 ニュースのフルコンテンツを取得中... (26/42)
2026-02-08T13:38:40.70689Z	  📄 112a8c0e-cf8c-8081-ba97-ef38f356233d: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:40.707203Z	  📄 112a8c0e-cf8c-8081-ba97-ef38f356233d: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:41.205127Z	  ✅ 画像保存: 112a8c0e-cf8c-8081-ba97-ef38f356233d-kanjikentei2023.webp
2026-02-08T13:38:41.205416Z	  🔄 画像最適化開始: kanjikentei2023
2026-02-08T13:38:41.227466Z	    ✅ 最適化画像生成: kanjikentei2023-sm.webp
2026-02-08T13:38:41.249651Z	    ✅ 最適化画像生成: kanjikentei2023-md.webp
2026-02-08T13:38:41.266752Z	    ✅ 最適化画像生成: kanjikentei2023-lg.webp
2026-02-08T13:38:41.283815Z	    ✅ 最適化画像生成: kanjikentei2023-xl.webp
2026-02-08T13:38:41.283977Z	  🎯 画像最適化完了: kanjikentei2023
2026-02-08T13:38:41.284089Z	📄 ニュースのフルコンテンツを取得中... (27/42)
2026-02-08T13:38:41.442258Z	  📄 112a8c0e-cf8c-8093-b82c-cf686345f657: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:41.442842Z	  📄 112a8c0e-cf8c-8093-b82c-cf686345f657: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:42.000424Z	  ✅ 画像保存: 112a8c0e-cf8c-8093-b82c-cf686345f657-emptyschool.webp
2026-02-08T13:38:42.000795Z	  🔄 画像最適化開始: emptyschool
2026-02-08T13:38:42.047404Z	    ✅ 最適化画像生成: emptyschool-sm.webp
2026-02-08T13:38:42.13323Z	    ✅ 最適化画像生成: emptyschool-md.webp
2026-02-08T13:38:42.281341Z	    ✅ 最適化画像生成: emptyschool-lg.webp
2026-02-08T13:38:42.505167Z	    ✅ 最適化画像生成: emptyschool-xl.webp
2026-02-08T13:38:42.505474Z	  🎯 画像最適化完了: emptyschool
2026-02-08T13:38:42.505632Z	📄 ニュースのフルコンテンツを取得中... (28/42)
2026-02-08T13:38:42.656816Z	  📄 112a8c0e-cf8c-80b7-b324-ea602066a777: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:42.657128Z	  📄 112a8c0e-cf8c-80b7-b324-ea602066a777: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:43.173987Z	  ✅ 画像保存: 112a8c0e-cf8c-80b7-b324-ea602066a777-pandemicprevention.jpg
2026-02-08T13:38:43.174321Z	  🔄 画像最適化開始: pandemicprevention
2026-02-08T13:38:43.191492Z	    ✅ 最適化画像生成: pandemicprevention-sm.webp
2026-02-08T13:38:43.229718Z	    ✅ 最適化画像生成: pandemicprevention-md.webp
2026-02-08T13:38:43.287648Z	    ✅ 最適化画像生成: pandemicprevention-lg.webp
2026-02-08T13:38:43.346259Z	    ✅ 最適化画像生成: pandemicprevention-xl.webp
2026-02-08T13:38:43.346587Z	  🎯 画像最適化完了: pandemicprevention
2026-02-08T13:38:43.346757Z	📄 ニュースのフルコンテンツを取得中... (29/42)
2026-02-08T13:38:45.103245Z	  📄 112a8c0e-cf8c-80be-b5e6-e46c2c06d14c: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:45.103769Z	  📄 112a8c0e-cf8c-80be-b5e6-e46c2c06d14c: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:45.503781Z	📄 ニュースのフルコンテンツを取得中... (30/42)
2026-02-08T13:38:46.691218Z	  📄 112a8c0e-cf8c-80ca-af61-e30b24fd97a7: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:46.691487Z	  📄 112a8c0e-cf8c-80ca-af61-e30b24fd97a7: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:47.207627Z	  ✅ 画像保存: 112a8c0e-cf8c-80ca-af61-e30b24fd97a7-mochipounding.jpeg
2026-02-08T13:38:47.208326Z	  🔄 画像最適化開始: mochipounding
2026-02-08T13:38:47.227493Z	    ✅ 最適化画像生成: mochipounding-sm.webp
2026-02-08T13:38:47.252995Z	    ✅ 最適化画像生成: mochipounding-md.webp
2026-02-08T13:38:47.278584Z	    ✅ 最適化画像生成: mochipounding-lg.webp
2026-02-08T13:38:47.304293Z	    ✅ 最適化画像生成: mochipounding-xl.webp
2026-02-08T13:38:47.304438Z	  🎯 画像最適化完了: mochipounding
2026-02-08T13:38:47.304523Z	📄 ニュースのフルコンテンツを取得中... (31/42)
2026-02-08T13:38:48.348697Z	  📄 112a8c0e-cf8c-80ef-bc49-fe1172c9ce8f: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:48.349366Z	  📄 112a8c0e-cf8c-80ef-bc49-fe1172c9ce8f: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:48.872687Z	  ✅ 画像保存: 112a8c0e-cf8c-80ef-bc49-fe1172c9ce8f-emptyschool.webp
2026-02-08T13:38:48.872942Z	  🔄 画像最適化開始: emptyschool
2026-02-08T13:38:48.873151Z	    📷 最適化画像スキップ（既存）: emptyschool-sm.webp
2026-02-08T13:38:48.873299Z	    📷 最適化画像スキップ（既存）: emptyschool-md.webp
2026-02-08T13:38:48.87342Z	    📷 最適化画像スキップ（既存）: emptyschool-lg.webp
2026-02-08T13:38:48.873535Z	    📷 最適化画像スキップ（既存）: emptyschool-xl.webp
2026-02-08T13:38:48.873638Z	  🎯 画像最適化完了: emptyschool
2026-02-08T13:38:48.873739Z	📄 ニュースのフルコンテンツを取得中... (32/42)
2026-02-08T13:38:50.56939Z	  📄 112a8c0e-cf8c-80f1-b6b9-c101f6b58f00: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:50.570047Z	  📄 112a8c0e-cf8c-80f1-b6b9-c101f6b58f00: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:51.096013Z	  ✅ 画像保存: 112a8c0e-cf8c-80f1-b6b9-c101f6b58f00-SAJCClogo.png
2026-02-08T13:38:51.096699Z	  🔄 画像最適化開始: SAJCClogo
2026-02-08T13:38:51.134238Z	    ✅ 最適化画像生成: SAJCClogo-sm.webp
2026-02-08T13:38:51.173753Z	    ✅ 最適化画像生成: SAJCClogo-md.webp
2026-02-08T13:38:51.212757Z	    ✅ 最適化画像生成: SAJCClogo-lg.webp
2026-02-08T13:38:51.253345Z	    ✅ 最適化画像生成: SAJCClogo-xl.webp
2026-02-08T13:38:51.253623Z	  🎯 画像最適化完了: SAJCClogo
2026-02-08T13:38:51.253754Z	📄 ニュースのフルコンテンツを取得中... (33/42)
2026-02-08T13:38:51.384737Z	  📄 112a8c0e-cf8c-80f5-8b6d-ce0e28639bcd: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:51.384968Z	  📄 112a8c0e-cf8c-80f5-8b6d-ce0e28639bcd: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:51.855788Z	  ✅ 画像保存: 112a8c0e-cf8c-80f5-8b6d-ce0e28639bcd-lastdayofschool2021.jpg
2026-02-08T13:38:51.856078Z	  🔄 画像最適化開始: lastdayofschool2021
2026-02-08T13:38:51.881948Z	    ✅ 最適化画像生成: lastdayofschool2021-sm.webp
2026-02-08T13:38:51.92475Z	    ✅ 最適化画像生成: lastdayofschool2021-md.webp
2026-02-08T13:38:51.967997Z	    ✅ 最適化画像生成: lastdayofschool2021-lg.webp
2026-02-08T13:38:52.01116Z	    ✅ 最適化画像生成: lastdayofschool2021-xl.webp
2026-02-08T13:38:52.011424Z	  🎯 画像最適化完了: lastdayofschool2021
2026-02-08T13:38:52.011586Z	📄 ニュースのフルコンテンツを取得中... (34/42)
2026-02-08T13:38:53.286037Z	  📄 112a8c0e-cf8c-80f9-9a0d-cb47c5c91e9c: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:53.286306Z	  📄 112a8c0e-cf8c-80f9-9a0d-cb47c5c91e9c: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:53.832566Z	  ✅ 画像保存: 112a8c0e-cf8c-80f9-9a0d-cb47c5c91e9c-tucsonundokai2021.webp
2026-02-08T13:38:53.832826Z	  🔄 画像最適化開始: tucsonundokai2021
2026-02-08T13:38:53.915535Z	    ✅ 最適化画像生成: tucsonundokai2021-sm.webp
2026-02-08T13:38:54.046623Z	    ✅ 最適化画像生成: tucsonundokai2021-md.webp
2026-02-08T13:38:54.254263Z	    ✅ 最適化画像生成: tucsonundokai2021-lg.webp
2026-02-08T13:38:54.585126Z	    ✅ 最適化画像生成: tucsonundokai2021-xl.webp
2026-02-08T13:38:54.585441Z	  🎯 画像最適化完了: tucsonundokai2021
2026-02-08T13:38:54.585603Z	📄 ニュースのフルコンテンツを取得中... (35/42)
2026-02-08T13:38:54.723468Z	  📄 262a8c0e-cf8c-8052-997a-cf0d2e43f5ab: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:54.723846Z	  📄 262a8c0e-cf8c-8052-997a-cf0d2e43f5ab: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:55.261015Z	  ✅ 画像保存: 262a8c0e-cf8c-8052-997a-cf0d2e43f5ab-__________________9.4.2024_.png
2026-02-08T13:38:55.261355Z	  🔄 画像最適化開始: __________________9.4.2024_
2026-02-08T13:38:55.292746Z	    ✅ 最適化画像生成: __________________9.4.2024_-sm.webp
2026-02-08T13:38:55.349208Z	    ✅ 最適化画像生成: __________________9.4.2024_-md.webp
2026-02-08T13:38:55.447824Z	    ✅ 最適化画像生成: __________________9.4.2024_-lg.webp
2026-02-08T13:38:55.586859Z	    ✅ 最適化画像生成: __________________9.4.2024_-xl.webp
2026-02-08T13:38:55.587202Z	  🎯 画像最適化完了: __________________9.4.2024_
2026-02-08T13:38:55.587397Z	📄 ニュースのフルコンテンツを取得中... (36/42)
2026-02-08T13:38:55.71587Z	  📄 262a8c0e-cf8c-80b2-98da-e5d1c7d3c4bd: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:55.716151Z	  📄 262a8c0e-cf8c-80b2-98da-e5d1c7d3c4bd: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:56.323575Z	  ✅ 画像保存: 262a8c0e-cf8c-80b2-98da-e5d1c7d3c4bd-Dangomaking2022.JPG
2026-02-08T13:38:56.323784Z	  🔄 画像最適化開始: Dangomaking2022
2026-02-08T13:38:56.369521Z	    ✅ 最適化画像生成: Dangomaking2022-sm.webp
2026-02-08T13:38:56.462917Z	    ✅ 最適化画像生成: Dangomaking2022-md.webp
2026-02-08T13:38:56.63618Z	    ✅ 最適化画像生成: Dangomaking2022-lg.webp
2026-02-08T13:38:56.930524Z	    ✅ 最適化画像生成: Dangomaking2022-xl.webp
2026-02-08T13:38:56.930812Z	  🎯 画像最適化完了: Dangomaking2022
2026-02-08T13:38:56.93143Z	📄 ニュースのフルコンテンツを取得中... (37/42)
2026-02-08T13:38:57.089559Z	  📄 262a8c0e-cf8c-80bb-b6c2-e12998eeaf15: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:57.089878Z	  📄 262a8c0e-cf8c-80bb-b6c2-e12998eeaf15: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:57.640005Z	  ✅ 画像保存: 262a8c0e-cf8c-80bb-b6c2-e12998eeaf15-Kanjikentei2025poster.png
2026-02-08T13:38:57.640526Z	  🔄 画像最適化開始: Kanjikentei2025poster
2026-02-08T13:38:57.664354Z	    ✅ 最適化画像生成: Kanjikentei2025poster-sm.webp
2026-02-08T13:38:57.712681Z	    ✅ 最適化画像生成: Kanjikentei2025poster-md.webp
2026-02-08T13:38:57.770643Z	    ✅ 最適化画像生成: Kanjikentei2025poster-lg.webp
2026-02-08T13:38:57.828922Z	    ✅ 最適化画像生成: Kanjikentei2025poster-xl.webp
2026-02-08T13:38:57.829246Z	  🎯 画像最適化完了: Kanjikentei2025poster
2026-02-08T13:38:57.829387Z	📄 ニュースのフルコンテンツを取得中... (38/42)
2026-02-08T13:38:57.941774Z	  📄 274a8c0e-cf8c-8034-b822-e9d8549cd983: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:57.942014Z	  📄 274a8c0e-cf8c-8034-b822-e9d8549cd983: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:58.493143Z	  ✅ 画像保存: 274a8c0e-cf8c-8034-b822-e9d8549cd983-Maxzeeks_visit-tjs.jpeg.png
2026-02-08T13:38:58.493426Z	  🔄 画像最適化開始: Maxzeeks_visit-tjs.jpeg
2026-02-08T13:38:58.504362Z	    ✅ 最適化画像生成: Maxzeeks_visit-tjs.jpeg-sm.webp
2026-02-08T13:38:58.514931Z	    ✅ 最適化画像生成: Maxzeeks_visit-tjs.jpeg-md.webp
2026-02-08T13:38:58.525712Z	    ✅ 最適化画像生成: Maxzeeks_visit-tjs.jpeg-lg.webp
2026-02-08T13:38:58.536707Z	    ✅ 最適化画像生成: Maxzeeks_visit-tjs.jpeg-xl.webp
2026-02-08T13:38:58.53686Z	  🎯 画像最適化完了: Maxzeeks_visit-tjs.jpeg
2026-02-08T13:38:58.537142Z	📄 ニュースのフルコンテンツを取得中... (39/42)
2026-02-08T13:38:58.704539Z	  📄 274a8c0e-cf8c-80d7-b60c-d7f20a69ad72: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:38:58.704811Z	  📄 274a8c0e-cf8c-80d7-b60c-d7f20a69ad72: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:38:59.382556Z	  ✅ 画像保存: 274a8c0e-cf8c-80d7-b60c-d7f20a69ad72-11th_Annual_Sports_Day_flyer.png
2026-02-08T13:38:59.382773Z	  🔄 画像最適化開始: 11th_Annual_Sports_Day_flyer
2026-02-08T13:38:59.42896Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-sm.webp
2026-02-08T13:38:59.501707Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-md.webp
2026-02-08T13:38:59.615963Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-lg.webp
2026-02-08T13:38:59.783386Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-xl.webp
2026-02-08T13:38:59.783608Z	  🎯 画像最適化完了: 11th_Annual_Sports_Day_flyer
2026-02-08T13:38:59.783854Z	📄 ニュースのフルコンテンツを取得中... (40/42)
2026-02-08T13:39:00.264968Z	  📄 2c0a8c0e-cf8c-8068-b54a-f7bf45c858fd: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:39:00.265273Z	  📄 2c0a8c0e-cf8c-8068-b54a-f7bf45c858fd: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:39:00.816245Z	  ✅ 画像保存: 2c0a8c0e-cf8c-8068-b54a-f7bf45c858fd-2026_new_years_card_contect_flyer.png
2026-02-08T13:39:00.816783Z	  🔄 画像最適化開始: 2026_new_years_card_contect_flyer
2026-02-08T13:39:00.848104Z	    ✅ 最適化画像生成: 2026_new_years_card_contect_flyer-sm.webp
2026-02-08T13:39:00.901972Z	    ✅ 最適化画像生成: 2026_new_years_card_contect_flyer-md.webp
2026-02-08T13:39:00.991601Z	    ✅ 最適化画像生成: 2026_new_years_card_contect_flyer-lg.webp
2026-02-08T13:39:01.125801Z	    ✅ 最適化画像生成: 2026_new_years_card_contect_flyer-xl.webp
2026-02-08T13:39:01.126015Z	  🎯 画像最適化完了: 2026_new_years_card_contect_flyer
2026-02-08T13:39:01.126291Z	📄 ニュースのフルコンテンツを取得中... (41/42)
2026-02-08T13:39:01.250655Z	  📄 2c5574c7-67e7-4213-9c29-4bbee673f2a7: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:39:01.250968Z	  📄 2c5574c7-67e7-4213-9c29-4bbee673f2a7: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:39:01.77251Z	  ✅ 画像保存: 2c5574c7-67e7-4213-9c29-4bbee673f2a7-sakura_radio_minnano_gakko.jpg
2026-02-08T13:39:01.772827Z	  🔄 画像最適化開始: sakura_radio_minnano_gakko
2026-02-08T13:39:01.800006Z	    ✅ 最適化画像生成: sakura_radio_minnano_gakko-sm.webp
2026-02-08T13:39:01.862371Z	    ✅ 最適化画像生成: sakura_radio_minnano_gakko-md.webp
2026-02-08T13:39:01.967657Z	    ✅ 最適化画像生成: sakura_radio_minnano_gakko-lg.webp
2026-02-08T13:39:02.072153Z	    ✅ 最適化画像生成: sakura_radio_minnano_gakko-xl.webp
2026-02-08T13:39:02.072453Z	  🎯 画像最適化完了: sakura_radio_minnano_gakko
2026-02-08T13:39:02.072581Z	📄 ニュースのフルコンテンツを取得中... (42/42)
2026-02-08T13:39:02.431155Z	  📄 57b1ff72-dbca-43d3-b6eb-8e3fd7d8c18f: ブロック数=1, 抽出テキスト数=0
2026-02-08T13:39:02.431543Z	  📄 57b1ff72-dbca-43d3-b6eb-8e3fd7d8c18f: ページブロックから有効なテキストが抽出されませんでした
2026-02-08T13:39:03.062044Z	  ✅ 画像保存: 57b1ff72-dbca-43d3-b6eb-8e3fd7d8c18f-sakura_radio_minnano_gakko.jpg
2026-02-08T13:39:03.062403Z	  🔄 画像最適化開始: sakura_radio_minnano_gakko
2026-02-08T13:39:03.062576Z	    📷 最適化画像スキップ（既存）: sakura_radio_minnano_gakko-sm.webp
2026-02-08T13:39:03.06275Z	    📷 最適化画像スキップ（既存）: sakura_radio_minnano_gakko-md.webp
2026-02-08T13:39:03.062851Z	    📷 最適化画像スキップ（既存）: sakura_radio_minnano_gakko-lg.webp
2026-02-08T13:39:03.063128Z	    📷 最適化画像スキップ（既存）: sakura_radio_minnano_gakko-xl.webp
2026-02-08T13:39:03.063242Z	  🎯 画像最適化完了: sakura_radio_minnano_gakko
2026-02-08T13:39:03.065617Z	✅ news 完了 (42件) → news.json
2026-02-08T13:39:03.466227Z	📥 [31/32] event データ取得中...
2026-02-08T13:39:04.728089Z	📷 event の画像を処理中...
2026-02-08T13:39:04.870482Z	  ✅ 画像保存: 277a8c0e-cf8c-8019-923b-e4bd2de9afb9-2026kenken.png
2026-02-08T13:39:04.870713Z	  🔄 画像最適化開始: 2026kenken
2026-02-08T13:39:04.912782Z	    ✅ 最適化画像生成: 2026kenken-sm.webp
2026-02-08T13:39:04.984481Z	    ✅ 最適化画像生成: 2026kenken-md.webp
2026-02-08T13:39:05.042301Z	    ✅ 最適化画像生成: 2026kenken-lg.webp
2026-02-08T13:39:05.099491Z	    ✅ 最適化画像生成: 2026kenken-xl.webp
2026-02-08T13:39:05.099943Z	  🎯 画像最適化完了: 2026kenken
2026-02-08T13:39:05.269976Z	  ✅ 画像保存: 278a8c0e-cf8c-8036-8dee-e6a01bcdc2f7-11th_Annual_Sports_Day_flyer.png
2026-02-08T13:39:05.270221Z	  🔄 画像最適化開始: 11th_Annual_Sports_Day_flyer
2026-02-08T13:39:05.313604Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-sm.webp
2026-02-08T13:39:05.385115Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-md.webp
2026-02-08T13:39:05.505139Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-lg.webp
2026-02-08T13:39:05.67215Z	    ✅ 最適化画像生成: 11th_Annual_Sports_Day_flyer-xl.webp
2026-02-08T13:39:05.672454Z	  🎯 画像最適化完了: 11th_Annual_Sports_Day_flyer
2026-02-08T13:39:05.673068Z	✅ event 完了 (2件) → event.json
2026-02-08T13:39:06.073909Z	📥 [32/32] layout データ取得中...
2026-02-08T13:39:06.389004Z	📷 layout の画像を処理中...
2026-02-08T13:39:06.390274Z	✅ layout 完了 (25件) → layout.json
2026-02-08T13:39:06.391463Z	📋 メタデータ保存完了: metadata.json
2026-02-08T13:39:06.391599Z	
2026-02-08T13:39:06.391737Z	🎉 データ取得完了！
2026-02-08T13:39:06.391868Z	==================================================
2026-02-08T13:39:06.391972Z	✅ 成功: 32個
2026-02-08T13:39:06.39208Z	❌ 失敗: 0個
2026-02-08T13:39:06.404017Z	📊 総レコード数: 204件
2026-02-08T13:39:06.404271Z	⏱️ 実行時間: 122.92秒
2026-02-08T13:39:06.404407Z	🎯 最終待機時間: 400ms (基準: 400ms)
2026-02-08T13:39:06.404537Z	
2026-02-08T13:39:06.404652Z	📁 キャッシュファイル:
2026-02-08T13:39:06.404761Z	  - slider.json (4件)
2026-02-08T13:39:06.404858Z	  - sponsors.json (3件)
2026-02-08T13:39:06.404953Z	  - about.json (3件)
2026-02-08T13:39:06.405055Z	  - mission.json (1件)
2026-02-08T13:39:06.405196Z	  - vision.json (1件)
2026-02-08T13:39:06.405299Z	  - story.json (1件)
2026-02-08T13:39:06.405394Z	  - greeting.json (1件)
2026-02-08T13:39:06.405482Z	  - history.json (1件)
2026-02-08T13:39:06.405611Z	  - directors.json (5件)
2026-02-08T13:39:06.405701Z	  - orgChart.json (1件)
2026-02-08T13:39:06.40579Z	  - policies.json (3件)
2026-02-08T13:39:06.405877Z	  - roleList.json (6件)
2026-02-08T13:39:06.40596Z	  - staff.json (16件)
2026-02-08T13:39:06.406132Z	  - category.json (2件)
2026-02-08T13:39:06.406236Z	  - classes.json (7件)
2026-02-08T13:39:06.40633Z	  - schedule.json (48件)
2026-02-08T13:39:06.406428Z	  - files.json (1件)
2026-02-08T13:39:06.406521Z	  - qualification.json (3件)
2026-02-08T13:39:06.406611Z	  - price.json (8件)
2026-02-08T13:39:06.406725Z	  - discountFamily.json (3件)
2026-02-08T13:39:06.406816Z	  - discountStaff.json (3件)
2026-02-08T13:39:06.406907Z	  - enrollment.json (2件)
2026-02-08T13:39:06.407001Z	  - support.json (1件)
2026-02-08T13:39:06.40709Z	  - sponsor.json (1件)
2026-02-08T13:39:06.407215Z	  - donation.json (1件)
2026-02-08T13:39:06.40731Z	  - howto.json (3件)
2026-02-08T13:39:06.407398Z	  - opportunity.json (3件)
2026-02-08T13:39:06.407488Z	  - general.json (1件)
2026-02-08T13:39:06.407564Z	  - reports.json (2件)
2026-02-08T13:39:06.407648Z	  - news.json (42件)
2026-02-08T13:39:06.407765Z	  - event.json (2件)
2026-02-08T13:39:06.407876Z	  - layout.json (25件)
2026-02-08T13:39:06.408007Z	
2026-02-08T13:39:06.408162Z	💡 次のステップ:
2026-02-08T13:39:06.408281Z	  yarn dev    # 開発サーバー起動（キャッシュ使用）
2026-02-08T13:39:06.408382Z	  yarn build  # 本番ビルド（キャッシュ使用）
2026-02-08T13:39:07.781829Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2026-02-08T13:39:07.786229Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2026-02-08T13:39:07.786662Z	This information is used to shape Next.js' roadmap and prioritize features.
2026-02-08T13:39:07.786804Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2026-02-08T13:39:07.786946Z	https://nextjs.org/telemetry
2026-02-08T13:39:07.787061Z	
2026-02-08T13:39:07.863932Z	   Linting and checking validity of types ...
2026-02-08T13:39:10.589942Z	
2026-02-08T13:39:10.590209Z	./components/pages/event/detail.js
2026-02-08T13:39:10.590351Z	166:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:39:10.590856Z	
2026-02-08T13:39:10.591021Z	./components/pages/news/detail.js
2026-02-08T13:39:10.59116Z	166:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:39:10.591442Z	
2026-02-08T13:39:10.591567Z	./components/pages/program/kanji_kentei.js
2026-02-08T13:39:10.591662Z	88:6  Warning: React Hook useEffect has a missing dependency: 'processKanjiKenteiData'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
2026-02-08T13:39:10.59176Z	
2026-02-08T13:39:10.591848Z	./components/parts/event/detail.js
2026-02-08T13:39:10.591941Z	53:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:39:10.592061Z	
2026-02-08T13:39:10.592168Z	./components/parts/news/detail.js
2026-02-08T13:39:10.592257Z	53:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:39:10.592353Z	
2026-02-08T13:39:10.59245Z	./components/parts/program/calender/index.js
2026-02-08T13:39:10.592537Z	254:6  Warning: React Hook useMemo has an unnecessary dependency: 'locale'. Either exclude it or remove the dependency array.  react-hooks/exhaustive-deps
2026-02-08T13:39:10.592632Z	319:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:39:10.59272Z	501:25  Warning: Missing "key" prop for element in iterator  react/jsx-key
2026-02-08T13:39:10.592814Z	
2026-02-08T13:39:10.592916Z	info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
2026-02-08T13:39:10.593034Z	   Creating an optimized production build ...
2026-02-08T13:39:10.636781Z	 ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
2026-02-08T13:39:14.427242Z	[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
2026-02-08T13:39:17.377447Z	 ✓ Compiled successfully
2026-02-08T13:39:17.378317Z	   Collecting page data ...
2026-02-08T13:39:17.817414Z	🚫 キャッシュ無効 (news): 直接APIから取得します
2026-02-08T13:39:17.818107Z	🌐 Notion APIから取得中: news
2026-02-08T13:39:18.535633Z	✅ API取得完了: news (42件)
2026-02-08T13:39:18.536033Z	🚫 キャッシュ無効 (event): 直接APIから取得します
2026-02-08T13:39:18.53621Z	🌐 Notion APIから取得中: event
2026-02-08T13:39:18.70713Z	✅ API取得完了: event (2件)
2026-02-08T13:39:19.13935Z	   Generating static pages (0/132) ...
2026-02-08T13:39:19.439152Z	🚫 キャッシュ無効 (slider): 直接APIから取得します
2026-02-08T13:39:19.439364Z	🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:39:19.439445Z	🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:39:19.439507Z	🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:39:19.439561Z	🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:39:19.439621Z	🌐 Notion APIから取得中: slider
2026-02-08T13:39:19.439675Z	🌐 Notion APIから取得中: sponsors
2026-02-08T13:39:19.439747Z	🌐 Notion APIから取得中: schedule
2026-02-08T13:39:19.439802Z	🌐 Notion APIから取得中: about
2026-02-08T13:39:19.439858Z	🌐 Notion APIから取得中: general
2026-02-08T13:39:19.557194Z	✅ API取得完了: slider (4件)
2026-02-08T13:39:19.604362Z	✅ API取得完了: sponsors (3件)
2026-02-08T13:39:19.628574Z	✅ API取得完了: about (3件)
2026-02-08T13:39:19.857017Z	✅ API取得完了: schedule (48件)
2026-02-08T13:39:20.040319Z	✅ API取得完了: general (1件)
2026-02-08T13:39:21.531305Z	🚫 キャッシュ無効 (news): 直接APIから取得します
2026-02-08T13:39:21.53166Z	🌐 Notion APIから取得中: news
2026-02-08T13:39:23.004702Z	✅ API取得完了: news (42件)
2026-02-08T13:39:23.004973Z	[convertAboutFromDatabase] Processing item with tag: about, title: 本校について
2026-02-08T13:39:23.005071Z	[convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:39:23.005208Z	[convertAboutFromDatabase] Processing item with tag: mission, title: Mission
2026-02-08T13:39:23.005313Z	[convertAboutFromDatabase] Set mission
2026-02-08T13:39:23.005383Z	[convertAboutFromDatabase] Processing item with tag: vision, title: Vision
2026-02-08T13:39:23.00544Z	[convertAboutFromDatabase] Set vision
2026-02-08T13:39:23.005494Z	[convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:39:23.00555Z	[ImageOptimizer] baseName: Sports_Day_-_Giant_Ball_rolling, pagePath: slider
2026-02-08T13:39:23.005604Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.005656Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-md.webp',
2026-02-08T13:39:23.005708Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-sm.webp',
2026-02-08T13:39:23.00576Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-lg.webp',
2026-02-08T13:39:23.005813Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.png',
2026-02-08T13:39:23.005904Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.jpg'
2026-02-08T13:39:23.006051Z	]
2026-02-08T13:39:23.006152Z	[ImageOptimizer] baseName: Summer_Festival_-_Snack_fishing, pagePath: slider
2026-02-08T13:39:23.006225Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.006394Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing-md.webp',
2026-02-08T13:39:23.006498Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing-sm.webp',
2026-02-08T13:39:23.008171Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing-lg.webp',
2026-02-08T13:39:23.008261Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing.png',
2026-02-08T13:39:23.008456Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing.jpg'
2026-02-08T13:39:23.008579Z	]
2026-02-08T13:39:23.008676Z	[ImageOptimizer] baseName: winter, pagePath: slider
2026-02-08T13:39:23.008783Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.008879Z	  '/image/download/slider/winter-md.webp',
2026-02-08T13:39:23.008974Z	  '/image/download/slider/winter-sm.webp',
2026-02-08T13:39:23.009083Z	  '/image/download/slider/winter-lg.webp',
2026-02-08T13:39:23.009196Z	  '/image/download/slider/winter.png',
2026-02-08T13:39:23.00929Z	  '/image/download/slider/winter.jpg'
2026-02-08T13:39:23.009432Z	]
2026-02-08T13:39:23.00954Z	[ImageOptimizer] baseName: katakana, pagePath: slider
2026-02-08T13:39:23.009638Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.009746Z	  '/image/download/slider/katakana-md.webp',
2026-02-08T13:39:23.009854Z	  '/image/download/slider/katakana-sm.webp',
2026-02-08T13:39:23.009976Z	  '/image/download/slider/katakana-lg.webp',
2026-02-08T13:39:23.010082Z	  '/image/download/slider/katakana.png',
2026-02-08T13:39:23.010216Z	  '/image/download/slider/katakana.jpg'
2026-02-08T13:39:23.010321Z	]
2026-02-08T13:39:23.010425Z	[ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:39:23.010532Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.010638Z	  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:39:23.010742Z	  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:39:23.01092Z	  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:39:23.011055Z	  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:39:23.011187Z	  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:39:23.011298Z	]
2026-02-08T13:39:23.011404Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:39:23.011524Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.011618Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:39:23.011709Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:39:23.011799Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:39:23.011888Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:39:23.011976Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:39:23.012068Z	]
2026-02-08T13:39:23.012178Z	[ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:39:23.01227Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.012361Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:39:23.012465Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:39:23.012555Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:39:23.012645Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:39:23.012734Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:39:23.012825Z	]
2026-02-08T13:39:23.012912Z	[ImageOptimizer] baseName: about, pagePath: about
2026-02-08T13:39:23.013002Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.01309Z	  '/image/download/about/about-md.webp',
2026-02-08T13:39:23.013222Z	  '/image/download/about/about-sm.webp',
2026-02-08T13:39:23.013332Z	  '/image/download/about/about-lg.webp',
2026-02-08T13:39:23.013436Z	  '/image/download/about/about.png',
2026-02-08T13:39:23.013546Z	  '/image/download/about/about.jpg'
2026-02-08T13:39:23.013648Z	]
2026-02-08T13:39:23.013761Z	[ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:39:23.013865Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.013971Z	  '/image/download/about/mission-md.webp',
2026-02-08T13:39:23.014071Z	  '/image/download/about/mission-sm.webp',
2026-02-08T13:39:23.0142Z	  '/image/download/about/mission-lg.webp',
2026-02-08T13:39:23.014311Z	  '/image/download/about/mission.png',
2026-02-08T13:39:23.014416Z	  '/image/download/about/mission.jpg'
2026-02-08T13:39:23.01452Z	]
2026-02-08T13:39:23.014621Z	[ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:39:23.014723Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.014823Z	  '/image/download/about/vision-md.webp',
2026-02-08T13:39:23.014928Z	  '/image/download/about/vision-sm.webp',
2026-02-08T13:39:23.015028Z	  '/image/download/about/vision-lg.webp',
2026-02-08T13:39:23.015158Z	  '/image/download/about/vision.png',
2026-02-08T13:39:23.015269Z	  '/image/download/about/vision.jpg'
2026-02-08T13:39:23.015365Z	]
2026-02-08T13:39:23.015473Z	[OpportunityEntity] 画像データ: {
2026-02-08T13:39:23.015595Z	  originalName: 'employment.png',
2026-02-08T13:39:23.015698Z	  baseName: 'employment',
2026-02-08T13:39:23.015814Z	  expectedPath: '/image/download/opportunity/employment.png'
2026-02-08T13:39:23.015923Z	}
2026-02-08T13:39:23.016028Z	[ImageOptimizer] baseName: employment, pagePath: opportunity
2026-02-08T13:39:23.016176Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.016293Z	  '/image/download/opportunity/employment-md.webp',
2026-02-08T13:39:23.016391Z	  '/image/download/opportunity/employment-sm.webp',
2026-02-08T13:39:23.016494Z	  '/image/download/opportunity/employment-lg.webp',
2026-02-08T13:39:23.016585Z	  '/image/download/opportunity/employment.png',
2026-02-08T13:39:23.016679Z	  '/image/download/opportunity/employment.jpg'
2026-02-08T13:39:23.016771Z	]
2026-02-08T13:39:23.016865Z	[ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:39:23.01696Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.017054Z	  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:39:23.017192Z	  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:39:23.017301Z	  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:39:23.017407Z	  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:39:23.017531Z	  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:39:23.017638Z	]
2026-02-08T13:39:23.017736Z	[ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:39:23.01784Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.017944Z	  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:39:23.018053Z	  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:39:23.01819Z	  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:39:23.018309Z	  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:39:23.018419Z	  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:39:23.018522Z	]
2026-02-08T13:39:23.018621Z	[ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:39:23.018719Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:23.018838Z	  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:39:23.018967Z	  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:39:23.019076Z	  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:39:23.019208Z	  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:39:23.019303Z	  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:39:23.019414Z	]
2026-02-08T13:39:23.064091Z	Warning: data for page "/[[...slug]]" (path "/") is 200 kB which exceeds the threshold of 128 kB, this amount of data can reduce performance.
2026-02-08T13:39:23.064439Z	See more info here: https://nextjs.org/docs/messages/large-page-data
2026-02-08T13:39:23.080212Z	🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:39:23.080432Z	🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:39:23.080577Z	🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:39:23.080782Z	🌐 Notion APIから取得中: greeting
2026-02-08T13:39:23.081026Z	🌐 Notion APIから取得中: story
2026-02-08T13:39:23.081208Z	🌐 Notion APIから取得中: history
2026-02-08T13:39:23.773997Z	✅ API取得完了: greeting (1件)
2026-02-08T13:39:23.774296Z	✅ API取得完了: story (1件)
2026-02-08T13:39:26.69652Z	✅ API取得完了: history (1件)
2026-02-08T13:39:26.696807Z	[ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:39:26.696939Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:26.697045Z	  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:39:26.697248Z	  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:39:26.697371Z	  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:39:26.697471Z	  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:39:26.69757Z	  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:39:26.697671Z	]
2026-02-08T13:39:26.69778Z	[ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:39:26.697871Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:26.697958Z	  '/image/download/history/historty1-md.webp',
2026-02-08T13:39:26.69804Z	  '/image/download/history/historty1-sm.webp',
2026-02-08T13:39:26.698159Z	  '/image/download/history/historty1-lg.webp',
2026-02-08T13:39:26.698467Z	  '/image/download/history/historty1.png',
2026-02-08T13:39:26.698602Z	  '/image/download/history/historty1.jpg'
2026-02-08T13:39:26.698806Z	]
2026-02-08T13:39:26.699132Z	[ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:39:26.699271Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:26.699383Z	  '/image/download/history/historty2-md.webp',
2026-02-08T13:39:26.699491Z	  '/image/download/history/historty2-sm.webp',
2026-02-08T13:39:26.699596Z	  '/image/download/history/historty2-lg.webp',
2026-02-08T13:39:26.6997Z	  '/image/download/history/historty2.png',
2026-02-08T13:39:26.699803Z	  '/image/download/history/historty2.jpg'
2026-02-08T13:39:26.699937Z	]
2026-02-08T13:39:26.70005Z	[ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:39:26.700188Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:26.700305Z	  '/image/download/history/historty3-md.webp',
2026-02-08T13:39:26.700414Z	  '/image/download/history/historty3-sm.webp',
2026-02-08T13:39:26.700515Z	  '/image/download/history/historty3-lg.webp',
2026-02-08T13:39:26.70062Z	  '/image/download/history/historty3.png',
2026-02-08T13:39:26.701863Z	  '/image/download/history/historty3.jpg'
2026-02-08T13:39:26.702153Z	]
2026-02-08T13:39:26.722716Z	Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:39:26.722862Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:26.722933Z	Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:39:26.723045Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:26.723189Z	Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:39:26.723264Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:26.7828Z	🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:39:26.783135Z	🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:39:26.783327Z	🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:39:26.783436Z	🌐 Notion APIから取得中: greeting
2026-02-08T13:39:26.78352Z	🌐 Notion APIから取得中: story
2026-02-08T13:39:26.7836Z	🌐 Notion APIから取得中: history
2026-02-08T13:39:27.074854Z	✅ API取得完了: story (1件)
2026-02-08T13:39:27.07512Z	✅ API取得完了: greeting (1件)
2026-02-08T13:39:27.075264Z	✅ API取得完了: history (1件)
2026-02-08T13:39:27.075386Z	[ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:39:27.07607Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:27.076273Z	  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:39:27.076358Z	  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:39:27.076425Z	  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:39:27.07648Z	  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:39:27.076534Z	  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:39:27.07659Z	]
2026-02-08T13:39:27.076754Z	[ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:39:27.07686Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:27.077276Z	  '/image/download/history/historty1-md.webp',
2026-02-08T13:39:27.07738Z	  '/image/download/history/historty1-sm.webp',
2026-02-08T13:39:27.07754Z	  '/image/download/history/historty1-lg.webp',
2026-02-08T13:39:27.077609Z	  '/image/download/history/historty1.png',
2026-02-08T13:39:27.077685Z	  '/image/download/history/historty1.jpg'
2026-02-08T13:39:27.077745Z	]
2026-02-08T13:39:27.077822Z	[ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:39:27.077917Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:27.077975Z	  '/image/download/history/historty2-md.webp',
2026-02-08T13:39:27.078031Z	  '/image/download/history/historty2-sm.webp',
2026-02-08T13:39:27.078159Z	  '/image/download/history/historty2-lg.webp',
2026-02-08T13:39:27.078255Z	  '/image/download/history/historty2.png',
2026-02-08T13:39:27.078322Z	  '/image/download/history/historty2.jpg'
2026-02-08T13:39:27.078455Z	]
2026-02-08T13:39:27.078606Z	[ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:39:27.078799Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:27.078972Z	  '/image/download/history/historty3-md.webp',
2026-02-08T13:39:27.079082Z	  '/image/download/history/historty3-sm.webp',
2026-02-08T13:39:27.079256Z	  '/image/download/history/historty3-lg.webp',
2026-02-08T13:39:27.079368Z	  '/image/download/history/historty3.png',
2026-02-08T13:39:27.079468Z	  '/image/download/history/historty3.jpg'
2026-02-08T13:39:27.079571Z	]
2026-02-08T13:39:27.079717Z	Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:39:27.079833Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:27.079943Z	Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:39:27.080074Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:27.080258Z	Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:39:27.080386Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:27.080489Z	🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:39:27.080613Z	🚫 キャッシュ無効 (mission): 直接APIから取得します
2026-02-08T13:39:27.080746Z	🚫 キャッシュ無効 (vision): 直接APIから取得します
2026-02-08T13:39:27.080902Z	🌐 Notion APIから取得中: about
2026-02-08T13:39:27.081033Z	🌐 Notion APIから取得中: mission
2026-02-08T13:39:27.081195Z	🌐 Notion APIから取得中: vision
2026-02-08T13:39:28.447159Z	✅ API取得完了: about (3件)
2026-02-08T13:39:28.447457Z	✅ API取得完了: mission (1件)
2026-02-08T13:39:28.447641Z	✅ API取得完了: vision (1件)
2026-02-08T13:39:28.447745Z	[convertAboutFromDatabase] Processing item with tag: about, title: 本校について
2026-02-08T13:39:28.447837Z	[convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:39:28.447928Z	[convertAboutFromDatabase] Processing item with tag: mission, title: Mission
2026-02-08T13:39:28.448013Z	[convertAboutFromDatabase] Set mission
2026-02-08T13:39:28.448595Z	[convertAboutFromDatabase] Processing item with tag: vision, title: Vision
2026-02-08T13:39:28.448706Z	[convertAboutFromDatabase] Set vision
2026-02-08T13:39:28.448789Z	[convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:39:28.448884Z	[ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:39:28.448987Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:28.449105Z	  '/image/download/about/mission-md.webp',
2026-02-08T13:39:28.449213Z	  '/image/download/about/mission-sm.webp',
2026-02-08T13:39:28.449365Z	  '/image/download/about/mission-lg.webp',
2026-02-08T13:39:28.449477Z	  '/image/download/about/mission.png',
2026-02-08T13:39:28.449582Z	  '/image/download/about/mission.jpg'
2026-02-08T13:39:28.449686Z	]
2026-02-08T13:39:28.449801Z	[ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:39:28.449928Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:28.450058Z	  '/image/download/about/vision-md.webp',
2026-02-08T13:39:28.450204Z	  '/image/download/about/vision-sm.webp',
2026-02-08T13:39:28.450324Z	  '/image/download/about/vision-lg.webp',
2026-02-08T13:39:28.450424Z	  '/image/download/about/vision.png',
2026-02-08T13:39:28.450534Z	  '/image/download/about/vision.jpg'
2026-02-08T13:39:28.45064Z	]
2026-02-08T13:39:28.450767Z	[Policy Component] Received policy: {
2026-02-08T13:39:28.450886Z	  object: 'page',
2026-02-08T13:39:28.450999Z	  id: '88fe2db2-68f6-4295-ab31-8253d1fda16b',
2026-02-08T13:39:28.451133Z	  created_time: '2024-09-18T14:32:00.000Z',
2026-02-08T13:39:28.451241Z	  last_edited_time: '2025-09-05T01:49:00.000Z',
2026-02-08T13:39:28.45138Z	  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:28.451514Z	  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:28.451628Z	  cover: null,
2026-02-08T13:39:28.451736Z	  icon: null,
2026-02-08T13:39:28.451856Z	  parent: {
2026-02-08T13:39:28.451969Z	    type: 'database_id',
2026-02-08T13:39:28.45207Z	    database_id: '105a8c0e-cf8c-8082-a456-dd95fd87d0c2'
2026-02-08T13:39:28.452229Z	  },
2026-02-08T13:39:28.452346Z	  archived: false,
2026-02-08T13:39:28.452441Z	  in_trash: false,
2026-02-08T13:39:28.452535Z	  is_locked: false,
2026-02-08T13:39:28.452713Z	  properties: {
2026-02-08T13:39:28.4528Z	    pdf: { id: '%3BCvS', type: 'files', files: [Array] },
2026-02-08T13:39:28.452879Z	    image: { id: 'tHwI', type: 'files', files: [Array] },
2026-02-08T13:39:28.452933Z	    'pdf-en': { id: 'tW~u', type: 'files', files: [Array] },
2026-02-08T13:39:28.453017Z	    en: { id: '%7CJmt', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:39:28.453149Z	    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:39:28.453225Z	  },
2026-02-08T13:39:28.45352Z	  url: 'https://www.notion.so/88fe2db268f64295ab318253d1fda16b',
2026-02-08T13:39:28.453633Z	  public_url: null
2026-02-08T13:39:28.453697Z	}
2026-02-08T13:39:28.453754Z	{
2026-02-08T13:39:28.453814Z	  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:39:28.453876Z	  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:39:28.453952Z	  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:39:28.454032Z	  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:39:28.454109Z	  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:39:28.454193Z	}
2026-02-08T13:39:28.454256Z	[PolicyEntity] properties.image: {
2026-02-08T13:39:28.454309Z	  id: 'tHwI',
2026-02-08T13:39:28.454365Z	  type: 'files',
2026-02-08T13:39:28.454444Z	  files: [ { name: 'setsubun2022.JPG', type: 'file', file: [Object] } ]
2026-02-08T13:39:28.4545Z	}
2026-02-08T13:39:28.454558Z	[PolicyEntity] Using files[0]: {
2026-02-08T13:39:28.454614Z	  name: 'setsubun2022.JPG',
2026-02-08T13:39:28.454673Z	  type: 'file',
2026-02-08T13:39:28.454736Z	  file: {
2026-02-08T13:39:28.454818Z	    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/ec34a095-6cd8-48a8-98c7-18f89317c7c4/cd8e3c8d-b536-4bc7-8df9-3a55b148cc0d/setsubun2022.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XIW4ZJ%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T133927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYavEIptr9%2FifrSwyoXMRDHhkGjLcZgE9XcYzGT0OGoAiEA69HePYegmb7tLIFmpmmfZj1vL6YD0FJbRlwcK%2Bg5omQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNn6BW7L9vnPalG3aCrcA2CCEC8S18nNSwU%2BqNWrc8aGy%2FdEEONdbmVLeaSrsitVuokmFXswuaByBPb9cnGwtbGdCyT0urNc9RCddA%2Fiynte5cP7c1YAiPi8rJflcA7TzR6KmmZ%2BvDbKH92YOjogxM9WOtA0EfWX%2B0%2FhNknGo4BXXakvnfRJaohf%2Bm17sMv5N8JUq21%2BYKE7MWN90YB1OVr%2Fs7T9MOSjNRNv9vy4bLrvCCjri%2FkBhm73xtfHuLP77eI3noFRrDzJfa00p1UbxErMEcK5NbY8NPWF%2BIkRq5hqcf04HtVeX5gZ0RLmNqbAJjy%2B2OgGBsS%2BHVgkNRI13zZuYZbneTfwf1IkqBQ0Nx8QTOmvUIcoyP8QWmE927zGT7td8ITugGLkLnwdN%2BjQoQwOE%2BMEBbwIXmfSTbJpkb0oyC2Jvod6tXFvYrFsUMc5cEv7gYQ4ywOqTc1kW0%2B%2FP9kNxz478szd38DY7nIiBTJyrSHgTUJWEt8nuchFvOHYESg2pr9ZIcEUnCIwiC%2FnNWWDg1rh3np1q1aSCBI9li7m3coe31Fz7mI2doANpZDpetNgAJU7l%2BqJ71RRkyT1pwT6EG5nwF4E%2B6eR580zEzyl4dzSNlrZfVjHf81bPMnLzMu68giDu1LNYLnVMLmgoswGOqUBxSZaNQ0IOqThkKJ1U7pAKk%2Fk%2BmKHpAVn0s3chKzCMHJmEorPUs6dfkK9R2ER7CkECyLrMP4uqpqPi7V4UPkTIEK3860UgjeAv5XFcOO6TdLd1yWQ8DLX7GMMHPDC7yQUfSGgPsyAXzydJs6g%2FXAGraEdeKxlHRQt%2BjGjX5HRpGZbL2mM2FTwgIDYfPnrRILKEvEF9nSgPqIAQ4PjJJ1RvDXyOrRd&X-Amz-Signature=868a1d35e639fcbbc49d372446162f0de2197287fb9612a608a836d79c864da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
2026-02-08T13:39:28.454939Z	    expiry_time: '2026-02-08T14:39:27.221Z'
2026-02-08T13:39:28.455011Z	  }
2026-02-08T13:39:28.455069Z	}
2026-02-08T13:39:28.455317Z	[PolicyEntity] Created image object: {
2026-02-08T13:39:28.45538Z	  baseName: 'setsubun2022',
2026-02-08T13:39:28.45545Z	  pagePath: 'policy',
2026-02-08T13:39:28.455512Z	  alt: 'setsubun2022.JPG',
2026-02-08T13:39:28.455573Z	  width: null,
2026-02-08T13:39:28.455635Z	  height: null
2026-02-08T13:39:28.455688Z	}
2026-02-08T13:39:28.455741Z	[PolicyEntity] Final image: {
2026-02-08T13:39:28.455813Z	  baseName: 'setsubun2022',
2026-02-08T13:39:28.455868Z	  pagePath: 'policy',
2026-02-08T13:39:28.455929Z	  alt: 'setsubun2022.JPG',
2026-02-08T13:39:28.455985Z	  width: null,
2026-02-08T13:39:28.456043Z	  height: null
2026-02-08T13:39:28.456232Z	}
2026-02-08T13:39:28.456387Z	============
2026-02-08T13:39:28.456493Z	{
2026-02-08T13:39:28.456635Z	  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:39:28.45672Z	  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:39:28.456784Z	  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:39:28.456839Z	  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:39:28.456904Z	  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:39:28.45696Z	}
2026-02-08T13:39:28.457012Z	============
2026-02-08T13:39:28.457068Z	[PolicyEntity] properties.pdf: {
2026-02-08T13:39:28.457191Z	  id: '%3BCvS',
2026-02-08T13:39:28.457297Z	  type: 'files',
2026-02-08T13:39:28.457397Z	  files: [
2026-02-08T13:39:28.457493Z	    {
2026-02-08T13:39:28.457598Z	      name: '2025GuidelineBook_ja_20250905.pdf',
2026-02-08T13:39:28.457699Z	      type: 'file',
2026-02-08T13:39:28.45782Z	      file: [Object]
2026-02-08T13:39:28.457929Z	    }
2026-02-08T13:39:28.458142Z	  ]
2026-02-08T13:39:28.458219Z	}
2026-02-08T13:39:28.458274Z	[PolicyEntity] tmpPdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:39:28.458332Z	[PolicyEntity] pdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:39:28.45839Z	[PolicyEntity] Final PDF path: /pdf/download/policy/2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:39:28.458445Z	[Policy Component] Entity created: PolicyEntity {
2026-02-08T13:39:28.458521Z	  title: '学校要覧',
2026-02-08T13:39:28.458584Z	  image: {
2026-02-08T13:39:28.458636Z	    baseName: 'setsubun2022',
2026-02-08T13:39:28.458696Z	    pagePath: 'policy',
2026-02-08T13:39:28.458756Z	    alt: 'setsubun2022.JPG',
2026-02-08T13:39:28.458807Z	    width: null,
2026-02-08T13:39:28.458869Z	    height: null
2026-02-08T13:39:28.458924Z	  },
2026-02-08T13:39:28.459121Z	  pdf: '/pdf/download/policy/2025GuidelineBook_ja_20250905.pdf'
2026-02-08T13:39:28.459317Z	}
2026-02-08T13:39:28.459426Z	[Policy Component] Entity image: {
2026-02-08T13:39:28.459537Z	  baseName: 'setsubun2022',
2026-02-08T13:39:28.459643Z	  pagePath: 'policy',
2026-02-08T13:39:28.459773Z	  alt: 'setsubun2022.JPG',
2026-02-08T13:39:28.459839Z	  width: null,
2026-02-08T13:39:28.459928Z	  height: null
2026-02-08T13:39:28.459985Z	}
2026-02-08T13:39:28.46004Z	[ImageOptimizer] baseName: setsubun2022, pagePath: policy
2026-02-08T13:39:28.46016Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:28.460228Z	  '/image/download/policy/setsubun2022-md.webp',
2026-02-08T13:39:28.460282Z	  '/image/download/policy/setsubun2022-sm.webp',
2026-02-08T13:39:28.46034Z	  '/image/download/policy/setsubun2022-lg.webp',
2026-02-08T13:39:28.460397Z	  '/image/download/policy/setsubun2022.png',
2026-02-08T13:39:28.460519Z	  '/image/download/policy/setsubun2022.jpg'
2026-02-08T13:39:28.460715Z	]
2026-02-08T13:39:28.460829Z	already exist.
2026-02-08T13:39:28.460935Z	not pdf file
2026-02-08T13:39:28.461034Z	already exist.
2026-02-08T13:39:28.461194Z	Warning: ImageOptimizer for "setsubun2022" is missing width or height props.
2026-02-08T13:39:28.4614Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:39:28.484823Z	🚫 キャッシュ無効 (directors): 直接APIから取得します
2026-02-08T13:39:28.48521Z	🚫 キャッシュ無効 (orgChart): 直接APIから取得します
2026-02-08T13:39:28.485355Z	🚫 キャッシュ無効 (policies): 直接APIから取得します
2026-02-08T13:39:28.485434Z	🌐 Notion APIから取得中: directors
2026-02-08T13:39:28.485523Z	🌐 Notion APIから取得中: orgChart
2026-02-08T13:39:28.485589Z	🌐 Notion APIから取得中: policies
2026-02-08T13:39:28.611624Z	✅ API取得完了: orgChart (1件)
2026-02-08T13:39:28.680884Z	✅ API取得完了: directors (5件)
2026-02-08T13:39:29.079549Z	✅ API取得完了: policies (3件)
2026-02-08T13:39:29.732637Z	[ImageOptimizer] baseName: istockphoto-1495088043-612x612, pagePath: director
2026-02-08T13:39:29.732945Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:29.733141Z	  '/image/download/director/istockphoto-1495088043-612x612-md.webp',
2026-02-08T13:39:29.733272Z	  '/image/download/director/istockphoto-1495088043-612x612-sm.webp',
2026-02-08T13:39:29.733382Z	  '/image/download/director/istockphoto-1495088043-612x612-lg.webp',
2026-02-08T13:39:29.733482Z	  '/image/download/director/istockphoto-1495088043-612x612.png',
2026-02-08T13:39:29.733599Z	  '/image/download/director/istockphoto-1495088043-612x612.jpg'
2026-02-08T13:39:29.733708Z	]
2026-02-08T13:39:29.733816Z	[ImageOptimizer] baseName: profile, pagePath: director
2026-02-08T13:39:29.733921Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:29.734045Z	  '/image/download/director/profile-md.webp',
2026-02-08T13:39:29.73417Z	  '/image/download/director/profile-sm.webp',
2026-02-08T13:39:29.734267Z	  '/image/download/director/profile-lg.webp',
2026-02-08T13:39:29.734369Z	  '/image/download/director/profile.png',
2026-02-08T13:39:29.734465Z	  '/image/download/director/profile.jpg'
2026-02-08T13:39:29.734562Z	]
2026-02-08T13:39:29.734657Z	[ImageOptimizer] baseName: yukari_image, pagePath: director
2026-02-08T13:39:29.734757Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:29.734873Z	  '/image/download/director/yukari_image-md.webp',
2026-02-08T13:39:29.734982Z	  '/image/download/director/yukari_image-sm.webp',
2026-02-08T13:39:29.735125Z	  '/image/download/director/yukari_image-lg.webp',
2026-02-08T13:39:29.735243Z	  '/image/download/director/yukari_image.png',
2026-02-08T13:39:29.735344Z	  '/image/download/director/yukari_image.jpg'
2026-02-08T13:39:29.735444Z	]
2026-02-08T13:39:29.735539Z	[ImageOptimizer] baseName: DSC08145_edited_edited_edited, pagePath: director
2026-02-08T13:39:29.735636Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:29.735731Z	  '/image/download/director/DSC08145_edited_edited_edited-md.webp',
2026-02-08T13:39:29.735831Z	  '/image/download/director/DSC08145_edited_edited_edited-sm.webp',
2026-02-08T13:39:29.735945Z	  '/image/download/director/DSC08145_edited_edited_edited-lg.webp',
2026-02-08T13:39:29.736082Z	  '/image/download/director/DSC08145_edited_edited_edited.png',
2026-02-08T13:39:29.736211Z	  '/image/download/director/DSC08145_edited_edited_edited.jpg'
2026-02-08T13:39:29.736312Z	]
2026-02-08T13:39:29.737302Z	[ImageOptimizer] baseName: DSC08141_edited_edited, pagePath: director
2026-02-08T13:39:29.737469Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:29.737599Z	  '/image/download/director/DSC08141_edited_edited-md.webp',
2026-02-08T13:39:29.737714Z	  '/image/download/director/DSC08141_edited_edited-sm.webp',
2026-02-08T13:39:29.737817Z	  '/image/download/director/DSC08141_edited_edited-lg.webp',
2026-02-08T13:39:29.737942Z	  '/image/download/director/DSC08141_edited_edited.png',
2026-02-08T13:39:29.738053Z	  '/image/download/director/DSC08141_edited_edited.jpg'
2026-02-08T13:39:29.738171Z	]
2026-02-08T13:39:29.738276Z	OrgChart data received: {
2026-02-08T13:39:29.738389Z	  object: 'page',
2026-02-08T13:39:29.73848Z	  id: '7a5843cb-66c0-4555-b972-1ee1c3063962',
2026-02-08T13:39:29.738581Z	  created_time: '2024-09-25T09:16:00.000Z',
2026-02-08T13:39:29.738678Z	  last_edited_time: '2024-10-10T01:32:00.000Z',
2026-02-08T13:39:29.738786Z	  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:29.738883Z	  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:29.739033Z	  cover: null,
2026-02-08T13:39:29.739175Z	  icon: null,
2026-02-08T13:39:29.739295Z	  parent: {
2026-02-08T13:39:29.739406Z	    type: 'database_id',
2026-02-08T13:39:29.73952Z	    database_id: '10ca8c0e-cf8c-8062-9eb3-ee7c40cf9005'
2026-02-08T13:39:29.739632Z	  },
2026-02-08T13:39:29.739728Z	  archived: false,
2026-02-08T13:39:29.739848Z	  in_trash: false,
2026-02-08T13:39:29.739933Z	  is_locked: false,
2026-02-08T13:39:29.740045Z	  properties: {
2026-02-08T13:39:29.740174Z	    image_en: { id: 'AnK%3A', type: 'files', files: [Array] },
2026-02-08T13:39:29.740268Z	    en: { id: 'BggW', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:39:29.740357Z	    text_en: { id: 'OQjU', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:39:29.740464Z	    image: { id: 'zJ%3Cu', type: 'files', files: [Array] },
2026-02-08T13:39:29.740578Z	    text: { id: '%7Dp_r', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:39:29.740696Z	    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:39:29.740829Z	  },
2026-02-08T13:39:29.740953Z	  url: 'https://www.notion.so/7a5843cb66c04555b9721ee1c3063962',
2026-02-08T13:39:29.741079Z	  public_url: null
2026-02-08T13:39:29.741215Z	}
2026-02-08T13:39:29.74134Z	OrgChart entity created: OrganisationFlowChartEntity {
2026-02-08T13:39:29.741444Z	  title: '運営組織図',
2026-02-08T13:39:29.741565Z	  text: [
2026-02-08T13:39:29.741671Z	    {
2026-02-08T13:39:29.741772Z	      type: 'text',
2026-02-08T13:39:29.741865Z	      text: [Object],
2026-02-08T13:39:29.74196Z	      annotations: [Object],
2026-02-08T13:39:29.74207Z	      plain_text: 'ツーソン日本語学校理事会は、創立理念の保持、学校運営の管理、指導、助言、また、短期、長期的計画を立案し、教職員、ボランティア父母と協力して実行し、本校が健全な運営を行えるように監視する役割を担い、日々の学校運営を行っているスタッフを支えます。',
2026-02-08T13:39:29.742221Z	      href: null
2026-02-08T13:39:29.742327Z	    }
2026-02-08T13:39:29.742428Z	  ],
2026-02-08T13:39:29.742524Z	  image: {
2026-02-08T13:39:29.742625Z	    baseName: 'governance_chart_ja',
2026-02-08T13:39:29.742718Z	    pagePath: 'org_chart',
2026-02-08T13:39:29.742828Z	    alt: 'governance_chart_ja.jpg',
2026-02-08T13:39:29.742931Z	    width: null,
2026-02-08T13:39:29.743043Z	    height: null
2026-02-08T13:39:29.743165Z	  }
2026-02-08T13:39:29.743274Z	}
2026-02-08T13:39:29.743376Z	[ImageOptimizer] baseName: governance_chart_ja, pagePath: org_chart
2026-02-08T13:39:29.743479Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:29.743586Z	  '/image/download/org_chart/governance_chart_ja-md.webp',
2026-02-08T13:39:29.743697Z	  '/image/download/org_chart/governance_chart_ja-sm.webp',
2026-02-08T13:39:29.743806Z	  '/image/download/org_chart/governance_chart_ja-lg.webp',
2026-02-08T13:39:29.743909Z	  '/image/download/org_chart/governance_chart_ja.png',
2026-02-08T13:39:29.744005Z	  '/image/download/org_chart/governance_chart_ja.jpg'
2026-02-08T13:39:29.744136Z	]
2026-02-08T13:39:29.748024Z	🚫 キャッシュ無効 (roleList): 直接APIから取得します
2026-02-08T13:39:29.748189Z	🚫 キャッシュ無効 (staff): 直接APIから取得します
2026-02-08T13:39:29.748304Z	🌐 Notion APIから取得中: roleList
2026-02-08T13:39:29.748468Z	🌐 Notion APIから取得中: staff
2026-02-08T13:39:29.857284Z	already exist.
2026-02-08T13:39:29.857798Z	already exist.
2026-02-08T13:39:29.900053Z	already exist.
2026-02-08T13:39:29.981529Z	✅ API取得完了: roleList (6件)
2026-02-08T13:39:30.328158Z	✅ API取得完了: staff (16件)
2026-02-08T13:39:33.294448Z	Staff data received: [
2026-02-08T13:39:33.294663Z	  {
2026-02-08T13:39:33.294734Z	    object: 'page',
2026-02-08T13:39:33.29479Z	    id: '102a8c0e-cf8c-8032-ba7b-c79866f660eb',
2026-02-08T13:39:33.294843Z	    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:39:33.294899Z	    last_edited_time: '2025-06-21T20:03:00.000Z',
2026-02-08T13:39:33.294951Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.295013Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.295068Z	    cover: null,
2026-02-08T13:39:33.29514Z	    icon: null,
2026-02-08T13:39:33.295195Z	    parent: {
2026-02-08T13:39:33.295271Z	      type: 'database_id',
2026-02-08T13:39:33.295328Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.295388Z	    },
2026-02-08T13:39:33.295442Z	    archived: false,
2026-02-08T13:39:33.295494Z	    in_trash: false,
2026-02-08T13:39:33.295546Z	    is_locked: false,
2026-02-08T13:39:33.295599Z	    properties: {
2026-02-08T13:39:33.295649Z	      text_en: [Object],
2026-02-08T13:39:33.295701Z	      name_en: [Object],
2026-02-08T13:39:33.295752Z	      image: [Object],
2026-02-08T13:39:33.295804Z	      role: [Object],
2026-02-08T13:39:33.295909Z	      text: [Object],
2026-02-08T13:39:33.295971Z	      ordering: [Object],
2026-02-08T13:39:33.29603Z	      name: [Object]
2026-02-08T13:39:33.296086Z	    },
2026-02-08T13:39:33.296157Z	    url: 'https://www.notion.so/102a8c0ecf8c8032ba7bc79866f660eb',
2026-02-08T13:39:33.296216Z	    public_url: null
2026-02-08T13:39:33.29627Z	  },
2026-02-08T13:39:33.296324Z	  {
2026-02-08T13:39:33.296383Z	    object: 'page',
2026-02-08T13:39:33.296437Z	    id: '102a8c0e-cf8c-803e-8c91-cdc26abf8c7b',
2026-02-08T13:39:33.296489Z	    created_time: '2024-09-15T21:02:00.000Z',
2026-02-08T13:39:33.296541Z	    last_edited_time: '2025-09-04T07:50:00.000Z',
2026-02-08T13:39:33.296594Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.296646Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.296698Z	    cover: null,
2026-02-08T13:39:33.296749Z	    icon: null,
2026-02-08T13:39:33.2968Z	    parent: {
2026-02-08T13:39:33.296851Z	      type: 'database_id',
2026-02-08T13:39:33.296902Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.296956Z	    },
2026-02-08T13:39:33.297007Z	    archived: false,
2026-02-08T13:39:33.297058Z	    in_trash: false,
2026-02-08T13:39:33.297125Z	    is_locked: false,
2026-02-08T13:39:33.297184Z	    properties: {
2026-02-08T13:39:33.297236Z	      text_en: [Object],
2026-02-08T13:39:33.297289Z	      name_en: [Object],
2026-02-08T13:39:33.29734Z	      image: [Object],
2026-02-08T13:39:33.297397Z	      role: [Object],
2026-02-08T13:39:33.297449Z	      text: [Object],
2026-02-08T13:39:33.297502Z	      ordering: [Object],
2026-02-08T13:39:33.297555Z	      name: [Object]
2026-02-08T13:39:33.297608Z	    },
2026-02-08T13:39:33.297659Z	    url: 'https://www.notion.so/102a8c0ecf8c803e8c91cdc26abf8c7b',
2026-02-08T13:39:33.297715Z	    public_url: null
2026-02-08T13:39:33.297767Z	  },
2026-02-08T13:39:33.297817Z	  {
2026-02-08T13:39:33.297867Z	    object: 'page',
2026-02-08T13:39:33.297919Z	    id: '102a8c0e-cf8c-803e-9b33-f2d6b41189c5',
2026-02-08T13:39:33.297969Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:39:33.298019Z	    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:39:33.29807Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.298147Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.298202Z	    cover: null,
2026-02-08T13:39:33.298256Z	    icon: null,
2026-02-08T13:39:33.298307Z	    parent: {
2026-02-08T13:39:33.298449Z	      type: 'database_id',
2026-02-08T13:39:33.298617Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.298729Z	    },
2026-02-08T13:39:33.298829Z	    archived: false,
2026-02-08T13:39:33.298889Z	    in_trash: false,
2026-02-08T13:39:33.298942Z	    is_locked: false,
2026-02-08T13:39:33.298994Z	    properties: {
2026-02-08T13:39:33.299046Z	      text_en: [Object],
2026-02-08T13:39:33.299108Z	      name_en: [Object],
2026-02-08T13:39:33.299164Z	      image: [Object],
2026-02-08T13:39:33.29922Z	      role: [Object],
2026-02-08T13:39:33.299272Z	      text: [Object],
2026-02-08T13:39:33.299324Z	      ordering: [Object],
2026-02-08T13:39:33.299383Z	      name: [Object]
2026-02-08T13:39:33.299437Z	    },
2026-02-08T13:39:33.29949Z	    url: 'https://www.notion.so/102a8c0ecf8c803e9b33f2d6b41189c5',
2026-02-08T13:39:33.299544Z	    public_url: null
2026-02-08T13:39:33.299674Z	  },
2026-02-08T13:39:33.299788Z	  {
2026-02-08T13:39:33.2999Z	    object: 'page',
2026-02-08T13:39:33.300008Z	    id: '102a8c0e-cf8c-80a2-9cba-f21c57ac7a99',
2026-02-08T13:39:33.30013Z	    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:39:33.300248Z	    last_edited_time: '2025-09-04T07:52:00.000Z',
2026-02-08T13:39:33.300359Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.300491Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.300592Z	    cover: null,
2026-02-08T13:39:33.300693Z	    icon: null,
2026-02-08T13:39:33.300805Z	    parent: {
2026-02-08T13:39:33.300905Z	      type: 'database_id',
2026-02-08T13:39:33.300998Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.301113Z	    },
2026-02-08T13:39:33.301271Z	    archived: false,
2026-02-08T13:39:33.301401Z	    in_trash: false,
2026-02-08T13:39:33.301513Z	    is_locked: false,
2026-02-08T13:39:33.301619Z	    properties: {
2026-02-08T13:39:33.301702Z	      text_en: [Object],
2026-02-08T13:39:33.301796Z	      name_en: [Object],
2026-02-08T13:39:33.301891Z	      image: [Object],
2026-02-08T13:39:33.301997Z	      role: [Object],
2026-02-08T13:39:33.302117Z	      text: [Object],
2026-02-08T13:39:33.302236Z	      ordering: [Object],
2026-02-08T13:39:33.302345Z	      name: [Object]
2026-02-08T13:39:33.302449Z	    },
2026-02-08T13:39:33.302542Z	    url: 'https://www.notion.so/102a8c0ecf8c80a29cbaf21c57ac7a99',
2026-02-08T13:39:33.302654Z	    public_url: null
2026-02-08T13:39:33.302763Z	  },
2026-02-08T13:39:33.302868Z	  {
2026-02-08T13:39:33.302969Z	    object: 'page',
2026-02-08T13:39:33.303074Z	    id: '102a8c0e-cf8c-80b6-a18a-f9a071308672',
2026-02-08T13:39:33.303198Z	    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:39:33.303326Z	    last_edited_time: '2025-09-04T07:56:00.000Z',
2026-02-08T13:39:33.303452Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.303572Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.303686Z	    cover: null,
2026-02-08T13:39:33.303801Z	    icon: null,
2026-02-08T13:39:33.303911Z	    parent: {
2026-02-08T13:39:33.304013Z	      type: 'database_id',
2026-02-08T13:39:33.304134Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.304255Z	    },
2026-02-08T13:39:33.304359Z	    archived: false,
2026-02-08T13:39:33.30447Z	    in_trash: false,
2026-02-08T13:39:33.304567Z	    is_locked: false,
2026-02-08T13:39:33.304655Z	    properties: {
2026-02-08T13:39:33.304748Z	      text_en: [Object],
2026-02-08T13:39:33.304835Z	      name_en: [Object],
2026-02-08T13:39:33.304925Z	      image: [Object],
2026-02-08T13:39:33.305027Z	      role: [Object],
2026-02-08T13:39:33.305141Z	      text: [Object],
2026-02-08T13:39:33.305232Z	      ordering: [Object],
2026-02-08T13:39:33.305329Z	      name: [Object]
2026-02-08T13:39:33.305442Z	    },
2026-02-08T13:39:33.305542Z	    url: 'https://www.notion.so/102a8c0ecf8c80b6a18af9a071308672',
2026-02-08T13:39:33.305646Z	    public_url: null
2026-02-08T13:39:33.305731Z	  },
2026-02-08T13:39:33.305833Z	  {
2026-02-08T13:39:33.305937Z	    object: 'page',
2026-02-08T13:39:33.306035Z	    id: '102a8c0e-cf8c-80c8-9391-cb8332a09711',
2026-02-08T13:39:33.306156Z	    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:39:33.306249Z	    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:39:33.306346Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.306455Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.306559Z	    cover: null,
2026-02-08T13:39:33.306656Z	    icon: null,
2026-02-08T13:39:33.306748Z	    parent: {
2026-02-08T13:39:33.306844Z	      type: 'database_id',
2026-02-08T13:39:33.306939Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.307034Z	    },
2026-02-08T13:39:33.307152Z	    archived: false,
2026-02-08T13:39:33.307263Z	    in_trash: false,
2026-02-08T13:39:33.307372Z	    is_locked: false,
2026-02-08T13:39:33.307487Z	    properties: {
2026-02-08T13:39:33.307586Z	      text_en: [Object],
2026-02-08T13:39:33.307678Z	      name_en: [Object],
2026-02-08T13:39:33.307764Z	      image: [Object],
2026-02-08T13:39:33.307846Z	      role: [Object],
2026-02-08T13:39:33.307933Z	      text: [Object],
2026-02-08T13:39:33.308016Z	      ordering: [Object],
2026-02-08T13:39:33.308119Z	      name: [Object]
2026-02-08T13:39:33.308209Z	    },
2026-02-08T13:39:33.308308Z	    url: 'https://www.notion.so/102a8c0ecf8c80c89391cb8332a09711',
2026-02-08T13:39:33.308413Z	    public_url: null
2026-02-08T13:39:33.308503Z	  },
2026-02-08T13:39:33.308622Z	  {
2026-02-08T13:39:33.308737Z	    object: 'page',
2026-02-08T13:39:33.308854Z	    id: '102a8c0e-cf8c-80cd-a577-c9351f661364',
2026-02-08T13:39:33.308962Z	    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:39:33.309076Z	    last_edited_time: '2025-09-02T05:48:00.000Z',
2026-02-08T13:39:33.309214Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.309322Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.309438Z	    cover: null,
2026-02-08T13:39:33.309548Z	    icon: null,
2026-02-08T13:39:33.309651Z	    parent: {
2026-02-08T13:39:33.30979Z	      type: 'database_id',
2026-02-08T13:39:33.309927Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.310041Z	    },
2026-02-08T13:39:33.310171Z	    archived: false,
2026-02-08T13:39:33.310384Z	    in_trash: false,
2026-02-08T13:39:33.310582Z	    is_locked: false,
2026-02-08T13:39:33.310781Z	    properties: {
2026-02-08T13:39:33.31095Z	      text_en: [Object],
2026-02-08T13:39:33.311157Z	      name_en: [Object],
2026-02-08T13:39:33.311334Z	      image: [Object],
2026-02-08T13:39:33.311477Z	      role: [Object],
2026-02-08T13:39:33.311697Z	      text: [Object],
2026-02-08T13:39:33.311922Z	      ordering: [Object],
2026-02-08T13:39:33.312107Z	      name: [Object]
2026-02-08T13:39:33.312324Z	    },
2026-02-08T13:39:33.312463Z	    url: 'https://www.notion.so/102a8c0ecf8c80cda577c9351f661364',
2026-02-08T13:39:33.312568Z	    public_url: null
2026-02-08T13:39:33.312654Z	  },
2026-02-08T13:39:33.312738Z	  {
2026-02-08T13:39:33.312817Z	    object: 'page',
2026-02-08T13:39:33.312897Z	    id: '102a8c0e-cf8c-80e6-9519-d25acdcfd0ec',
2026-02-08T13:39:33.312995Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:39:33.313089Z	    last_edited_time: '2025-09-04T08:02:00.000Z',
2026-02-08T13:39:33.313209Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.31331Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.313406Z	    cover: null,
2026-02-08T13:39:33.313497Z	    icon: null,
2026-02-08T13:39:33.313589Z	    parent: {
2026-02-08T13:39:33.313679Z	      type: 'database_id',
2026-02-08T13:39:33.313776Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.313894Z	    },
2026-02-08T13:39:33.313979Z	    archived: false,
2026-02-08T13:39:33.314133Z	    in_trash: false,
2026-02-08T13:39:33.314239Z	    is_locked: false,
2026-02-08T13:39:33.314381Z	    properties: {
2026-02-08T13:39:33.314476Z	      text_en: [Object],
2026-02-08T13:39:33.314569Z	      name_en: [Object],
2026-02-08T13:39:33.314651Z	      image: [Object],
2026-02-08T13:39:33.314729Z	      role: [Object],
2026-02-08T13:39:33.314806Z	      text: [Object],
2026-02-08T13:39:33.31488Z	      ordering: [Object],
2026-02-08T13:39:33.314957Z	      name: [Object]
2026-02-08T13:39:33.315045Z	    },
2026-02-08T13:39:33.315146Z	    url: 'https://www.notion.so/102a8c0ecf8c80e69519d25acdcfd0ec',
2026-02-08T13:39:33.31524Z	    public_url: null
2026-02-08T13:39:33.315317Z	  },
2026-02-08T13:39:33.315402Z	  {
2026-02-08T13:39:33.315478Z	    object: 'page',
2026-02-08T13:39:33.315555Z	    id: '102a8c0e-cf8c-80f9-bef0-dd401debb8af',
2026-02-08T13:39:33.315631Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:39:33.31571Z	    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:39:33.315786Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.315869Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.315943Z	    cover: null,
2026-02-08T13:39:33.31602Z	    icon: null,
2026-02-08T13:39:33.316117Z	    parent: {
2026-02-08T13:39:33.316204Z	      type: 'database_id',
2026-02-08T13:39:33.316281Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.316356Z	    },
2026-02-08T13:39:33.31644Z	    archived: false,
2026-02-08T13:39:33.316516Z	    in_trash: false,
2026-02-08T13:39:33.31659Z	    is_locked: false,
2026-02-08T13:39:33.316664Z	    properties: {
2026-02-08T13:39:33.316741Z	      text_en: [Object],
2026-02-08T13:39:33.316815Z	      name_en: [Object],
2026-02-08T13:39:33.316888Z	      image: [Object],
2026-02-08T13:39:33.316963Z	      role: [Object],
2026-02-08T13:39:33.317037Z	      text: [Object],
2026-02-08T13:39:33.317131Z	      ordering: [Object],
2026-02-08T13:39:33.317213Z	      name: [Object]
2026-02-08T13:39:33.317289Z	    },
2026-02-08T13:39:33.317364Z	    url: 'https://www.notion.so/102a8c0ecf8c80f9bef0dd401debb8af',
2026-02-08T13:39:33.317465Z	    public_url: null
2026-02-08T13:39:33.317542Z	  },
2026-02-08T13:39:33.317616Z	  {
2026-02-08T13:39:33.317695Z	    object: 'page',
2026-02-08T13:39:33.317771Z	    id: '219a8c0e-cf8c-8086-95b6-dbe56a73880d',
2026-02-08T13:39:33.317845Z	    created_time: '2025-06-21T20:02:00.000Z',
2026-02-08T13:39:33.317937Z	    last_edited_time: '2025-09-04T07:51:00.000Z',
2026-02-08T13:39:33.318031Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.31821Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.31834Z	    cover: null,
2026-02-08T13:39:33.318453Z	    icon: null,
2026-02-08T13:39:33.318544Z	    parent: {
2026-02-08T13:39:33.318644Z	      type: 'database_id',
2026-02-08T13:39:33.318732Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.31883Z	    },
2026-02-08T13:39:33.318928Z	    archived: false,
2026-02-08T13:39:33.319024Z	    in_trash: false,
2026-02-08T13:39:33.319148Z	    is_locked: false,
2026-02-08T13:39:33.319251Z	    properties: {
2026-02-08T13:39:33.319342Z	      text_en: [Object],
2026-02-08T13:39:33.319444Z	      name_en: [Object],
2026-02-08T13:39:33.31953Z	      image: [Object],
2026-02-08T13:39:33.319634Z	      role: [Object],
2026-02-08T13:39:33.319738Z	      text: [Object],
2026-02-08T13:39:33.319833Z	      ordering: [Object],
2026-02-08T13:39:33.319921Z	      name: [Object]
2026-02-08T13:39:33.320018Z	    },
2026-02-08T13:39:33.320119Z	    url: 'https://www.notion.so/219a8c0ecf8c808695b6dbe56a73880d',
2026-02-08T13:39:33.32022Z	    public_url: null
2026-02-08T13:39:33.320324Z	  },
2026-02-08T13:39:33.32043Z	  {
2026-02-08T13:39:33.32053Z	    object: 'page',
2026-02-08T13:39:33.320631Z	    id: '262a8c0e-cf8c-8087-9157-eccd746e636d',
2026-02-08T13:39:33.32079Z	    created_time: '2025-09-02T05:49:00.000Z',
2026-02-08T13:39:33.320895Z	    last_edited_time: '2025-09-04T07:58:00.000Z',
2026-02-08T13:39:33.320998Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.321116Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.321208Z	    cover: null,
2026-02-08T13:39:33.32129Z	    icon: null,
2026-02-08T13:39:33.321371Z	    parent: {
2026-02-08T13:39:33.32146Z	      type: 'database_id',
2026-02-08T13:39:33.321552Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.321654Z	    },
2026-02-08T13:39:33.321748Z	    archived: false,
2026-02-08T13:39:33.321878Z	    in_trash: false,
2026-02-08T13:39:33.321937Z	    is_locked: false,
2026-02-08T13:39:33.321992Z	    properties: {
2026-02-08T13:39:33.322045Z	      text_en: [Object],
2026-02-08T13:39:33.322152Z	      name_en: [Object],
2026-02-08T13:39:33.322248Z	      image: [Object],
2026-02-08T13:39:33.322399Z	      role: [Object],
2026-02-08T13:39:33.322496Z	      text: [Object],
2026-02-08T13:39:33.32259Z	      ordering: [Object],
2026-02-08T13:39:33.322732Z	      name: [Object]
2026-02-08T13:39:33.322828Z	    },
2026-02-08T13:39:33.322948Z	    url: 'https://www.notion.so/262a8c0ecf8c80879157eccd746e636d',
2026-02-08T13:39:33.323075Z	    public_url: null
2026-02-08T13:39:33.32319Z	  },
2026-02-08T13:39:33.323305Z	  {
2026-02-08T13:39:33.32337Z	    object: 'page',
2026-02-08T13:39:33.323432Z	    id: '4377c087-e782-46e3-9eaf-261863837f19',
2026-02-08T13:39:33.323487Z	    created_time: '2024-09-15T21:13:00.000Z',
2026-02-08T13:39:33.323546Z	    last_edited_time: '2025-06-21T20:04:00.000Z',
2026-02-08T13:39:33.3236Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.323653Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.323705Z	    cover: null,
2026-02-08T13:39:33.323759Z	    icon: null,
2026-02-08T13:39:33.323812Z	    parent: {
2026-02-08T13:39:33.323864Z	      type: 'database_id',
2026-02-08T13:39:33.323916Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.323974Z	    },
2026-02-08T13:39:33.324028Z	    archived: false,
2026-02-08T13:39:33.324089Z	    in_trash: false,
2026-02-08T13:39:33.324196Z	    is_locked: false,
2026-02-08T13:39:33.324317Z	    properties: {
2026-02-08T13:39:33.32444Z	      text_en: [Object],
2026-02-08T13:39:33.324552Z	      name_en: [Object],
2026-02-08T13:39:33.324656Z	      image: [Object],
2026-02-08T13:39:33.324756Z	      role: [Object],
2026-02-08T13:39:33.324843Z	      text: [Object],
2026-02-08T13:39:33.324936Z	      ordering: [Object],
2026-02-08T13:39:33.32502Z	      name: [Object]
2026-02-08T13:39:33.325156Z	    },
2026-02-08T13:39:33.325256Z	    url: 'https://www.notion.so/4377c087e78246e39eaf261863837f19',
2026-02-08T13:39:33.325378Z	    public_url: null
2026-02-08T13:39:33.325485Z	  },
2026-02-08T13:39:33.325582Z	  {
2026-02-08T13:39:33.325694Z	    object: 'page',
2026-02-08T13:39:33.325832Z	    id: '9a170ec8-c017-4cce-a0dd-d62f2edb82b6',
2026-02-08T13:39:33.32593Z	    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:39:33.326024Z	    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:39:33.326166Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.326267Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.326379Z	    cover: null,
2026-02-08T13:39:33.326478Z	    icon: null,
2026-02-08T13:39:33.326575Z	    parent: {
2026-02-08T13:39:33.326674Z	      type: 'database_id',
2026-02-08T13:39:33.326819Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.326933Z	    },
2026-02-08T13:39:33.327039Z	    archived: false,
2026-02-08T13:39:33.327152Z	    in_trash: false,
2026-02-08T13:39:33.327255Z	    is_locked: false,
2026-02-08T13:39:33.327538Z	    properties: {
2026-02-08T13:39:33.327672Z	      text_en: [Object],
2026-02-08T13:39:33.327804Z	      name_en: [Object],
2026-02-08T13:39:33.327944Z	      image: [Object],
2026-02-08T13:39:33.32815Z	      role: [Object],
2026-02-08T13:39:33.328294Z	      text: [Object],
2026-02-08T13:39:33.328425Z	      ordering: [Object],
2026-02-08T13:39:33.32855Z	      name: [Object]
2026-02-08T13:39:33.328676Z	    },
2026-02-08T13:39:33.328782Z	    url: 'https://www.notion.so/9a170ec8c0174ccea0ddd62f2edb82b6',
2026-02-08T13:39:33.328902Z	    public_url: null
2026-02-08T13:39:33.329016Z	  },
2026-02-08T13:39:33.329158Z	  {
2026-02-08T13:39:33.329278Z	    object: 'page',
2026-02-08T13:39:33.329415Z	    id: 'c452fe7f-4be8-4bdb-9afb-a32c10afbcab',
2026-02-08T13:39:33.32952Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:39:33.329628Z	    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:39:33.329723Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.329833Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:39:33.329963Z	    cover: null,
2026-02-08T13:39:33.330071Z	    icon: null,
2026-02-08T13:39:33.330206Z	    parent: {
2026-02-08T13:39:33.330315Z	      type: 'database_id',
2026-02-08T13:39:33.330475Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.330565Z	    },
2026-02-08T13:39:33.330624Z	    archived: false,
2026-02-08T13:39:33.330707Z	    in_trash: false,
2026-02-08T13:39:33.330764Z	    is_locked: false,
2026-02-08T13:39:33.330938Z	    properties: {
2026-02-08T13:39:33.331118Z	      text_en: [Object],
2026-02-08T13:39:33.331238Z	      name_en: [Object],
2026-02-08T13:39:33.331344Z	      image: [Object],
2026-02-08T13:39:33.331459Z	      role: [Object],
2026-02-08T13:39:33.331591Z	      text: [Object],
2026-02-08T13:39:33.331701Z	      ordering: [Object],
2026-02-08T13:39:33.331803Z	      name: [Object]
2026-02-08T13:39:33.331963Z	    },
2026-02-08T13:39:33.332082Z	    url: 'https://www.notion.so/c452fe7f4be84bdb9afba32c10afbcab',
2026-02-08T13:39:33.332245Z	    public_url: null
2026-02-08T13:39:33.332426Z	  },
2026-02-08T13:39:33.332553Z	  {
2026-02-08T13:39:33.332713Z	    object: 'page',
2026-02-08T13:39:33.332816Z	    id: 'd65a07cd-7eec-4319-8dbb-f05addf412a9',
2026-02-08T13:39:33.332988Z	    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:39:33.333137Z	    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:39:33.333251Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.333378Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.333484Z	    cover: null,
2026-02-08T13:39:33.333576Z	    icon: null,
2026-02-08T13:39:33.333682Z	    parent: {
2026-02-08T13:39:33.333784Z	      type: 'database_id',
2026-02-08T13:39:33.333879Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.333973Z	    },
2026-02-08T13:39:33.334073Z	    archived: false,
2026-02-08T13:39:33.334187Z	    in_trash: false,
2026-02-08T13:39:33.334286Z	    is_locked: false,
2026-02-08T13:39:33.334415Z	    properties: {
2026-02-08T13:39:33.334493Z	      text_en: [Object],
2026-02-08T13:39:33.334611Z	      name_en: [Object],
2026-02-08T13:39:33.334705Z	      image: [Object],
2026-02-08T13:39:33.334804Z	      role: [Object],
2026-02-08T13:39:33.334885Z	      text: [Object],
2026-02-08T13:39:33.334974Z	      ordering: [Object],
2026-02-08T13:39:33.335074Z	      name: [Object]
2026-02-08T13:39:33.335224Z	    },
2026-02-08T13:39:33.335351Z	    url: 'https://www.notion.so/d65a07cd7eec43198dbbf05addf412a9',
2026-02-08T13:39:33.335498Z	    public_url: null
2026-02-08T13:39:33.335596Z	  },
2026-02-08T13:39:33.335662Z	  {
2026-02-08T13:39:33.335791Z	    object: 'page',
2026-02-08T13:39:33.335904Z	    id: 'f9633a2c-0dff-4b02-9161-9139ab8919d0',
2026-02-08T13:39:33.336022Z	    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:39:33.336261Z	    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:39:33.336501Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.336611Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.336809Z	    cover: null,
2026-02-08T13:39:33.336912Z	    icon: null,
2026-02-08T13:39:33.337039Z	    parent: {
2026-02-08T13:39:33.337464Z	      type: 'database_id',
2026-02-08T13:39:33.337597Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:39:33.337712Z	    },
2026-02-08T13:39:33.337854Z	    archived: false,
2026-02-08T13:39:33.33798Z	    in_trash: false,
2026-02-08T13:39:33.338085Z	    is_locked: false,
2026-02-08T13:39:33.3382Z	    properties: {
2026-02-08T13:39:33.338297Z	      text_en: [Object],
2026-02-08T13:39:33.338413Z	      name_en: [Object],
2026-02-08T13:39:33.33851Z	      image: [Object],
2026-02-08T13:39:33.338586Z	      role: [Object],
2026-02-08T13:39:33.338676Z	      text: [Object],
2026-02-08T13:39:33.338765Z	      ordering: [Object],
2026-02-08T13:39:33.338862Z	      name: [Object]
2026-02-08T13:39:33.338997Z	    },
2026-02-08T13:39:33.339181Z	    url: 'https://www.notion.so/f9633a2c0dff4b0291619139ab8919d0',
2026-02-08T13:39:33.339375Z	    public_url: null
2026-02-08T13:39:33.339479Z	  }
2026-02-08T13:39:33.339576Z	]
2026-02-08T13:39:33.339683Z	Role data received: [
2026-02-08T13:39:33.339739Z	  {
2026-02-08T13:39:33.339817Z	    object: 'page',
2026-02-08T13:39:33.339917Z	    id: '122a8c0e-cf8c-808e-88c5-c0446f064f99',
2026-02-08T13:39:33.340036Z	    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:39:33.340147Z	    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:39:33.340253Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.340353Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.340467Z	    cover: null,
2026-02-08T13:39:33.340558Z	    icon: null,
2026-02-08T13:39:33.340657Z	    parent: {
2026-02-08T13:39:33.340754Z	      type: 'database_id',
2026-02-08T13:39:33.340856Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:39:33.34096Z	    },
2026-02-08T13:39:33.341179Z	    archived: false,
2026-02-08T13:39:33.341339Z	    in_trash: false,
2026-02-08T13:39:33.341607Z	    is_locked: false,
2026-02-08T13:39:33.341729Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:39:33.341955Z	    url: 'https://www.notion.so/122a8c0ecf8c808e88c5c0446f064f99',
2026-02-08T13:39:33.342085Z	    public_url: null
2026-02-08T13:39:33.342213Z	  },
2026-02-08T13:39:33.34231Z	  {
2026-02-08T13:39:33.342399Z	    object: 'page',
2026-02-08T13:39:33.342486Z	    id: '122a8c0e-cf8c-80ca-bded-ded104c18d96',
2026-02-08T13:39:33.342579Z	    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:39:33.342671Z	    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:39:33.342885Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.342983Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.343246Z	    cover: null,
2026-02-08T13:39:33.343329Z	    icon: null,
2026-02-08T13:39:33.343518Z	    parent: {
2026-02-08T13:39:33.343764Z	      type: 'database_id',
2026-02-08T13:39:33.343851Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:39:33.344078Z	    },
2026-02-08T13:39:33.344307Z	    archived: false,
2026-02-08T13:39:33.344414Z	    in_trash: false,
2026-02-08T13:39:33.344516Z	    is_locked: false,
2026-02-08T13:39:33.34459Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:39:33.34478Z	    url: 'https://www.notion.so/122a8c0ecf8c80cabdedded104c18d96',
2026-02-08T13:39:33.345Z	    public_url: null
2026-02-08T13:39:33.345226Z	  },
2026-02-08T13:39:33.345315Z	  {
2026-02-08T13:39:33.345527Z	    object: 'page',
2026-02-08T13:39:33.345611Z	    id: '122a8c0e-cf8c-80d5-85d2-d4a0673c1797',
2026-02-08T13:39:33.345832Z	    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:39:33.345914Z	    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:39:33.346162Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.346244Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.346493Z	    cover: null,
2026-02-08T13:39:33.346571Z	    icon: null,
2026-02-08T13:39:33.346764Z	    parent: {
2026-02-08T13:39:33.346839Z	      type: 'database_id',
2026-02-08T13:39:33.346898Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:39:33.346965Z	    },
2026-02-08T13:39:33.347029Z	    archived: false,
2026-02-08T13:39:33.347198Z	    in_trash: false,
2026-02-08T13:39:33.34736Z	    is_locked: false,
2026-02-08T13:39:33.347514Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:39:33.34763Z	    url: 'https://www.notion.so/122a8c0ecf8c80d585d2d4a0673c1797',
2026-02-08T13:39:33.347773Z	    public_url: null
2026-02-08T13:39:33.347883Z	  },
2026-02-08T13:39:33.347983Z	  {
2026-02-08T13:39:33.34807Z	    object: 'page',
2026-02-08T13:39:33.348208Z	    id: '25697b18-c8e5-48aa-948f-4716cf5e36e8',
2026-02-08T13:39:33.348322Z	    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:39:33.348403Z	    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:39:33.348508Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.348584Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.348639Z	    cover: null,
2026-02-08T13:39:33.348739Z	    icon: null,
2026-02-08T13:39:33.348814Z	    parent: {
2026-02-08T13:39:33.348913Z	      type: 'database_id',
2026-02-08T13:39:33.349018Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:39:33.349218Z	    },
2026-02-08T13:39:33.349394Z	    archived: false,
2026-02-08T13:39:33.349466Z	    in_trash: false,
2026-02-08T13:39:33.349526Z	    is_locked: false,
2026-02-08T13:39:33.349669Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:39:33.349737Z	    url: 'https://www.notion.so/25697b18c8e548aa948f4716cf5e36e8',
2026-02-08T13:39:33.349795Z	    public_url: null
2026-02-08T13:39:33.349861Z	  },
2026-02-08T13:39:33.349932Z	  {
2026-02-08T13:39:33.35Z	    object: 'page',
2026-02-08T13:39:33.350054Z	    id: '31cae8ce-3c54-4a0b-9b18-639b4de347b3',
2026-02-08T13:39:33.350148Z	    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:39:33.350214Z	    last_edited_time: '2024-10-17T01:17:00.000Z',
2026-02-08T13:39:33.350268Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.350339Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.350402Z	    cover: null,
2026-02-08T13:39:33.350456Z	    icon: null,
2026-02-08T13:39:33.350511Z	    parent: {
2026-02-08T13:39:33.350567Z	      type: 'database_id',
2026-02-08T13:39:33.350626Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:39:33.350683Z	    },
2026-02-08T13:39:33.350744Z	    archived: false,
2026-02-08T13:39:33.350807Z	    in_trash: false,
2026-02-08T13:39:33.350861Z	    is_locked: false,
2026-02-08T13:39:33.350919Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:39:33.350972Z	    url: 'https://www.notion.so/31cae8ce3c544a0b9b18639b4de347b3',
2026-02-08T13:39:33.351033Z	    public_url: null
2026-02-08T13:39:33.351087Z	  },
2026-02-08T13:39:33.351331Z	  {
2026-02-08T13:39:33.351394Z	    object: 'page',
2026-02-08T13:39:33.351508Z	    id: '9ad23647-a425-4c2a-8538-b77219acc481',
2026-02-08T13:39:33.351576Z	    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:39:33.351632Z	    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:39:33.351711Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.35184Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:39:33.351974Z	    cover: null,
2026-02-08T13:39:33.352091Z	    icon: null,
2026-02-08T13:39:33.352258Z	    parent: {
2026-02-08T13:39:33.352329Z	      type: 'database_id',
2026-02-08T13:39:33.352451Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:39:33.352531Z	    },
2026-02-08T13:39:33.352667Z	    archived: false,
2026-02-08T13:39:33.352783Z	    in_trash: false,
2026-02-08T13:39:33.352894Z	    is_locked: false,
2026-02-08T13:39:33.353007Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:39:33.353156Z	    url: 'https://www.notion.so/9ad23647a4254c2a8538b77219acc481',
2026-02-08T13:39:33.353234Z	    public_url: null
2026-02-08T13:39:33.353369Z	  }
2026-02-08T13:39:33.353502Z	]
2026-02-08T13:39:33.353706Z	Processed role list: [
2026-02-08T13:39:33.353835Z	  RoleEntity { role: 'nihongo-cafe', title: 'にほんごかふぇ' },
2026-02-08T13:39:33.353981Z	  RoleEntity { role: 'manager', title: 'マネージャー' },
2026-02-08T13:39:33.354083Z	  RoleEntity { role: 'volunteer', title: 'ボランティア' },
2026-02-08T13:39:33.354235Z	  RoleEntity { role: 'teacher', title: '講師' },
2026-02-08T13:39:33.354306Z	  RoleEntity { role: 'co-director', title: 'ディレクター' },
2026-02-08T13:39:33.354434Z	  RoleEntity { role: 'assistant', title: 'アシスタント' }
2026-02-08T13:39:33.354582Z	]
2026-02-08T13:39:33.354714Z	Processed staff list: [
2026-02-08T13:39:33.354847Z	  StaffEntity {
2026-02-08T13:39:33.354995Z	    name: 'マックナイト　ひとみ',
2026-02-08T13:39:33.35514Z	    text: [ [Object] ],
2026-02-08T13:39:33.355278Z	    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:39:33.355396Z	    image: {
2026-02-08T13:39:33.355512Z	      baseName: 'mcknight',
2026-02-08T13:39:33.355634Z	      pagePath: 'staff',
2026-02-08T13:39:33.355752Z	      alt: 'mcknight.png',
2026-02-08T13:39:33.355859Z	      width: null,
2026-02-08T13:39:33.355957Z	      height: null
2026-02-08T13:39:33.356065Z	    },
2026-02-08T13:39:33.356185Z	    ordering: 1
2026-02-08T13:39:33.356293Z	  },
2026-02-08T13:39:33.356391Z	  StaffEntity {
2026-02-08T13:39:33.356481Z	    name: 'エスピノサ　みなみ',
2026-02-08T13:39:33.356567Z	    text: [ [Object] ],
2026-02-08T13:39:33.356682Z	    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:39:33.356773Z	    image: {
2026-02-08T13:39:33.356864Z	      baseName: 'minami',
2026-02-08T13:39:33.356967Z	      pagePath: 'staff',
2026-02-08T13:39:33.357071Z	      alt: 'minami.png',
2026-02-08T13:39:33.357219Z	      width: null,
2026-02-08T13:39:33.357331Z	      height: null
2026-02-08T13:39:33.357461Z	    },
2026-02-08T13:39:33.357535Z	    ordering: 2
2026-02-08T13:39:33.35766Z	  },
2026-02-08T13:39:33.357744Z	  StaffEntity {
2026-02-08T13:39:33.357863Z	    name: 'バトラー　利恵',
2026-02-08T13:39:33.357996Z	    text: [ [Object] ],
2026-02-08T13:39:33.358147Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.358219Z	    image: {
2026-02-08T13:39:33.358335Z	      baseName: 'IMG_1299_edited',
2026-02-08T13:39:33.358463Z	      pagePath: 'staff',
2026-02-08T13:39:33.35856Z	      alt: 'IMG_1299_edited.jpg',
2026-02-08T13:39:33.358649Z	      width: null,
2026-02-08T13:39:33.35879Z	      height: null
2026-02-08T13:39:33.35887Z	    },
2026-02-08T13:39:33.359105Z	    ordering: 3
2026-02-08T13:39:33.359244Z	  },
2026-02-08T13:39:33.359328Z	  StaffEntity {
2026-02-08T13:39:33.359435Z	    name: 'シュリラ　心里',
2026-02-08T13:39:33.359561Z	    text: [ [Object] ],
2026-02-08T13:39:33.359684Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.35976Z	    image: {
2026-02-08T13:39:33.359887Z	      baseName: 'Kokori-TJS',
2026-02-08T13:39:33.359964Z	      pagePath: 'staff',
2026-02-08T13:39:33.360114Z	      alt: 'Kokori-TJS.jpg',
2026-02-08T13:39:33.360249Z	      width: null,
2026-02-08T13:39:33.360391Z	      height: null
2026-02-08T13:39:33.360501Z	    },
2026-02-08T13:39:33.360569Z	    ordering: 4
2026-02-08T13:39:33.360646Z	  },
2026-02-08T13:39:33.360735Z	  StaffEntity {
2026-02-08T13:39:33.360838Z	    name: '佐藤かつや',
2026-02-08T13:39:33.360935Z	    text: [ [Object] ],
2026-02-08T13:39:33.361027Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.361149Z	    image: {
2026-02-08T13:39:33.36125Z	      baseName: 'Katsu-TJS',
2026-02-08T13:39:33.361345Z	      pagePath: 'staff',
2026-02-08T13:39:33.361436Z	      alt: 'Katsu-TJS.jpg',
2026-02-08T13:39:33.361535Z	      width: null,
2026-02-08T13:39:33.361604Z	      height: null
2026-02-08T13:39:33.36166Z	    },
2026-02-08T13:39:33.361737Z	    ordering: 5
2026-02-08T13:39:33.361827Z	  },
2026-02-08T13:39:33.361916Z	  StaffEntity {
2026-02-08T13:39:33.362015Z	    name: '中村　めぐ',
2026-02-08T13:39:33.362133Z	    text: [ [Object] ],
2026-02-08T13:39:33.362213Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.362302Z	    image: {
2026-02-08T13:39:33.362405Z	      baseName: 'Meg-TJS',
2026-02-08T13:39:33.3625Z	      pagePath: 'staff',
2026-02-08T13:39:33.362592Z	      alt: 'Meg-TJS.jpg',
2026-02-08T13:39:33.362687Z	      width: null,
2026-02-08T13:39:33.362781Z	      height: null
2026-02-08T13:39:33.362878Z	    },
2026-02-08T13:39:33.362959Z	    ordering: 6
2026-02-08T13:39:33.363046Z	  },
2026-02-08T13:39:33.363164Z	  StaffEntity {
2026-02-08T13:39:33.363234Z	    name: 'ネマット　ヤッサー',
2026-02-08T13:39:33.363314Z	    text: [ [Object] ],
2026-02-08T13:39:33.363387Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.363467Z	    image: {
2026-02-08T13:39:33.363559Z	      baseName: 'IMG_7879_edited',
2026-02-08T13:39:33.363661Z	      pagePath: 'staff',
2026-02-08T13:39:33.363745Z	      alt: 'IMG_7879_edited.jpg',
2026-02-08T13:39:33.363808Z	      width: null,
2026-02-08T13:39:33.363902Z	      height: null
2026-02-08T13:39:33.363997Z	    },
2026-02-08T13:39:33.364101Z	    ordering: 7
2026-02-08T13:39:33.364199Z	  },
2026-02-08T13:39:33.364288Z	  StaffEntity {
2026-02-08T13:39:33.364374Z	    name: 'リー　美晴',
2026-02-08T13:39:33.36446Z	    text: [ [Object] ],
2026-02-08T13:39:33.364575Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.364649Z	    image: {
2026-02-08T13:39:33.364785Z	      baseName: 'IMG_1280_edited',
2026-02-08T13:39:33.364929Z	      pagePath: 'staff',
2026-02-08T13:39:33.36505Z	      alt: 'IMG_1280_edited.jpg',
2026-02-08T13:39:33.365206Z	      width: null,
2026-02-08T13:39:33.36534Z	      height: null
2026-02-08T13:39:33.365512Z	    },
2026-02-08T13:39:33.365715Z	    ordering: 8
2026-02-08T13:39:33.365905Z	  },
2026-02-08T13:39:33.366193Z	  StaffEntity {
2026-02-08T13:39:33.366309Z	    name: '大越　愛巳',
2026-02-08T13:39:33.366424Z	    text: [ [Object] ],
2026-02-08T13:39:33.36658Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.366738Z	    image: {
2026-02-08T13:39:33.366863Z	      baseName: 'Manami-TJS',
2026-02-08T13:39:33.367021Z	      pagePath: 'staff',
2026-02-08T13:39:33.367188Z	      alt: 'Manami-TJS.jpg',
2026-02-08T13:39:33.367457Z	      width: null,
2026-02-08T13:39:33.367538Z	      height: null
2026-02-08T13:39:33.367767Z	    },
2026-02-08T13:39:33.367999Z	    ordering: 9
2026-02-08T13:39:33.36826Z	  },
2026-02-08T13:39:33.368492Z	  StaffEntity {
2026-02-08T13:39:33.368722Z	    name: 'ワルドルフ　ターシャ',
2026-02-08T13:39:33.368952Z	    text: [ [Object] ],
2026-02-08T13:39:33.369036Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.369164Z	    image: {
2026-02-08T13:39:33.369511Z	      baseName: 'profile',
2026-02-08T13:39:33.369738Z	      pagePath: 'staff',
2026-02-08T13:39:33.369977Z	      alt: 'profile.jpg',
2026-02-08T13:39:33.370216Z	      width: null,
2026-02-08T13:39:33.370458Z	      height: null
2026-02-08T13:39:33.370691Z	    },
2026-02-08T13:39:33.370778Z	    ordering: 10
2026-02-08T13:39:33.371005Z	  },
2026-02-08T13:39:33.371101Z	  StaffEntity {
2026-02-08T13:39:33.371415Z	    name: '久高　ルミ',
2026-02-08T13:39:33.371506Z	    text: [ [Object] ],
2026-02-08T13:39:33.371793Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.37189Z	    image: {
2026-02-08T13:39:33.372198Z	      baseName: 'Lumi-TJS',
2026-02-08T13:39:33.372294Z	      pagePath: 'staff',
2026-02-08T13:39:33.372579Z	      alt: 'Lumi-TJS.jpg',
2026-02-08T13:39:33.372769Z	      width: null,
2026-02-08T13:39:33.372872Z	      height: null
2026-02-08T13:39:33.373192Z	    },
2026-02-08T13:39:33.373286Z	    ordering: 11
2026-02-08T13:39:33.373354Z	  },
2026-02-08T13:39:33.373628Z	  StaffEntity {
2026-02-08T13:39:33.373717Z	    name: 'マックナイト　はな',
2026-02-08T13:39:33.373775Z	    text: [ [Object] ],
2026-02-08T13:39:33.373907Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.374025Z	    image: {
2026-02-08T13:39:33.374183Z	      baseName: 'IMG_7796',
2026-02-08T13:39:33.374299Z	      pagePath: 'staff',
2026-02-08T13:39:33.374469Z	      alt: 'IMG_7796.jpeg',
2026-02-08T13:39:33.37455Z	      width: null,
2026-02-08T13:39:33.374664Z	      height: null
2026-02-08T13:39:33.374765Z	    },
2026-02-08T13:39:33.37485Z	    ordering: 12
2026-02-08T13:39:33.374952Z	  },
2026-02-08T13:39:33.375101Z	  StaffEntity {
2026-02-08T13:39:33.375295Z	    name: 'マックナイト　えみ',
2026-02-08T13:39:33.375438Z	    text: [ [Object] ],
2026-02-08T13:39:33.375578Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.375706Z	    image: {
2026-02-08T13:39:33.375814Z	      baseName: 'IMG_7799_edited',
2026-02-08T13:39:33.375923Z	      pagePath: 'staff',
2026-02-08T13:39:33.37606Z	      alt: 'IMG_7799_edited.jpg',
2026-02-08T13:39:33.376214Z	      width: null,
2026-02-08T13:39:33.376347Z	      height: null
2026-02-08T13:39:33.376455Z	    },
2026-02-08T13:39:33.376565Z	    ordering: 13
2026-02-08T13:39:33.376686Z	  },
2026-02-08T13:39:33.376813Z	  StaffEntity {
2026-02-08T13:39:33.376926Z	    name: '内田　比奈子',
2026-02-08T13:39:33.377051Z	    text: [ [Object] ],
2026-02-08T13:39:33.377205Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.377362Z	    image: {
2026-02-08T13:39:33.377493Z	      baseName: 'profile',
2026-02-08T13:39:33.377608Z	      pagePath: 'staff',
2026-02-08T13:39:33.377709Z	      alt: 'profile.jpg',
2026-02-08T13:39:33.377797Z	      width: null,
2026-02-08T13:39:33.377892Z	      height: null
2026-02-08T13:39:33.377983Z	    },
2026-02-08T13:39:33.378132Z	    ordering: 14
2026-02-08T13:39:33.378239Z	  },
2026-02-08T13:39:33.378343Z	  StaffEntity {
2026-02-08T13:39:33.378461Z	    name: 'オロスコ　佳代',
2026-02-08T13:39:33.378612Z	    text: [ [Object] ],
2026-02-08T13:39:33.378757Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.378857Z	    image: {
2026-02-08T13:39:33.378983Z	      baseName: 'Kayo-TJS',
2026-02-08T13:39:33.379088Z	      pagePath: 'staff',
2026-02-08T13:39:33.379205Z	      alt: 'Kayo-TJS.jpg',
2026-02-08T13:39:33.379286Z	      width: null,
2026-02-08T13:39:33.379349Z	      height: null
2026-02-08T13:39:33.379404Z	    },
2026-02-08T13:39:33.379495Z	    ordering: 15
2026-02-08T13:39:33.379569Z	  },
2026-02-08T13:39:33.379637Z	  StaffEntity {
2026-02-08T13:39:33.3797Z	    name: '塩屋　ジェニファー',
2026-02-08T13:39:33.379761Z	    text: [ [Object] ],
2026-02-08T13:39:33.379814Z	    role: [ [RoleEntity] ],
2026-02-08T13:39:33.379865Z	    image: {
2026-02-08T13:39:33.379928Z	      baseName: 'profile',
2026-02-08T13:39:33.379989Z	      pagePath: 'staff',
2026-02-08T13:39:33.380041Z	      alt: 'profile.jpg',
2026-02-08T13:39:33.380131Z	      width: null,
2026-02-08T13:39:33.380243Z	      height: null
2026-02-08T13:39:33.380302Z	    },
2026-02-08T13:39:33.380357Z	    ordering: 16
2026-02-08T13:39:33.380411Z	  }
2026-02-08T13:39:33.380471Z	]
2026-02-08T13:39:33.380533Z	[ImageOptimizer] baseName: mcknight, pagePath: staff
2026-02-08T13:39:33.380585Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.380638Z	  '/image/download/staff/mcknight-md.webp',
2026-02-08T13:39:33.380697Z	  '/image/download/staff/mcknight-sm.webp',
2026-02-08T13:39:33.380759Z	  '/image/download/staff/mcknight-lg.webp',
2026-02-08T13:39:33.380812Z	  '/image/download/staff/mcknight.png',
2026-02-08T13:39:33.380872Z	  '/image/download/staff/mcknight.jpg'
2026-02-08T13:39:33.380924Z	]
2026-02-08T13:39:33.380976Z	[ImageOptimizer] baseName: minami, pagePath: staff
2026-02-08T13:39:33.381064Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.381195Z	  '/image/download/staff/minami-md.webp',
2026-02-08T13:39:33.381265Z	  '/image/download/staff/minami-sm.webp',
2026-02-08T13:39:33.381363Z	  '/image/download/staff/minami-lg.webp',
2026-02-08T13:39:33.38142Z	  '/image/download/staff/minami.png',
2026-02-08T13:39:33.381578Z	  '/image/download/staff/minami.jpg'
2026-02-08T13:39:33.381718Z	]
2026-02-08T13:39:33.381956Z	[ImageOptimizer] baseName: IMG_1299_edited, pagePath: staff
2026-02-08T13:39:33.382083Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.382219Z	  '/image/download/staff/IMG_1299_edited-md.webp',
2026-02-08T13:39:33.382346Z	  '/image/download/staff/IMG_1299_edited-sm.webp',
2026-02-08T13:39:33.382428Z	  '/image/download/staff/IMG_1299_edited-lg.webp',
2026-02-08T13:39:33.382543Z	  '/image/download/staff/IMG_1299_edited.png',
2026-02-08T13:39:33.382643Z	  '/image/download/staff/IMG_1299_edited.jpg'
2026-02-08T13:39:33.382747Z	]
2026-02-08T13:39:33.382839Z	[ImageOptimizer] baseName: Kokori-TJS, pagePath: staff
2026-02-08T13:39:33.382928Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.383037Z	  '/image/download/staff/Kokori-TJS-md.webp',
2026-02-08T13:39:33.383146Z	  '/image/download/staff/Kokori-TJS-sm.webp',
2026-02-08T13:39:33.383262Z	  '/image/download/staff/Kokori-TJS-lg.webp',
2026-02-08T13:39:33.383381Z	  '/image/download/staff/Kokori-TJS.png',
2026-02-08T13:39:33.383484Z	  '/image/download/staff/Kokori-TJS.jpg'
2026-02-08T13:39:33.383586Z	]
2026-02-08T13:39:33.383701Z	[ImageOptimizer] baseName: Katsu-TJS, pagePath: staff
2026-02-08T13:39:33.38381Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.383912Z	  '/image/download/staff/Katsu-TJS-md.webp',
2026-02-08T13:39:33.384023Z	  '/image/download/staff/Katsu-TJS-sm.webp',
2026-02-08T13:39:33.384153Z	  '/image/download/staff/Katsu-TJS-lg.webp',
2026-02-08T13:39:33.384264Z	  '/image/download/staff/Katsu-TJS.png',
2026-02-08T13:39:33.384366Z	  '/image/download/staff/Katsu-TJS.jpg'
2026-02-08T13:39:33.384461Z	]
2026-02-08T13:39:33.384657Z	[ImageOptimizer] baseName: Meg-TJS, pagePath: staff
2026-02-08T13:39:33.384821Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.384921Z	  '/image/download/staff/Meg-TJS-md.webp',
2026-02-08T13:39:33.385075Z	  '/image/download/staff/Meg-TJS-sm.webp',
2026-02-08T13:39:33.385236Z	  '/image/download/staff/Meg-TJS-lg.webp',
2026-02-08T13:39:33.385339Z	  '/image/download/staff/Meg-TJS.png',
2026-02-08T13:39:33.38549Z	  '/image/download/staff/Meg-TJS.jpg'
2026-02-08T13:39:33.385624Z	]
2026-02-08T13:39:33.385742Z	[ImageOptimizer] baseName: IMG_7879_edited, pagePath: staff
2026-02-08T13:39:33.385851Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.385958Z	  '/image/download/staff/IMG_7879_edited-md.webp',
2026-02-08T13:39:33.386076Z	  '/image/download/staff/IMG_7879_edited-sm.webp',
2026-02-08T13:39:33.386192Z	  '/image/download/staff/IMG_7879_edited-lg.webp',
2026-02-08T13:39:33.386303Z	  '/image/download/staff/IMG_7879_edited.png',
2026-02-08T13:39:33.386467Z	  '/image/download/staff/IMG_7879_edited.jpg'
2026-02-08T13:39:33.386616Z	]
2026-02-08T13:39:33.386688Z	[ImageOptimizer] baseName: IMG_1280_edited, pagePath: staff
2026-02-08T13:39:33.386745Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.386917Z	  '/image/download/staff/IMG_1280_edited-md.webp',
2026-02-08T13:39:33.387034Z	  '/image/download/staff/IMG_1280_edited-sm.webp',
2026-02-08T13:39:33.387188Z	  '/image/download/staff/IMG_1280_edited-lg.webp',
2026-02-08T13:39:33.38727Z	  '/image/download/staff/IMG_1280_edited.png',
2026-02-08T13:39:33.387395Z	  '/image/download/staff/IMG_1280_edited.jpg'
2026-02-08T13:39:33.387469Z	]
2026-02-08T13:39:33.387532Z	[ImageOptimizer] baseName: Manami-TJS, pagePath: staff
2026-02-08T13:39:33.387727Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.387802Z	  '/image/download/staff/Manami-TJS-md.webp',
2026-02-08T13:39:33.387912Z	  '/image/download/staff/Manami-TJS-sm.webp',
2026-02-08T13:39:33.388064Z	  '/image/download/staff/Manami-TJS-lg.webp',
2026-02-08T13:39:33.38823Z	  '/image/download/staff/Manami-TJS.png',
2026-02-08T13:39:33.388375Z	  '/image/download/staff/Manami-TJS.jpg'
2026-02-08T13:39:33.38848Z	]
2026-02-08T13:39:33.388625Z	[ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:39:33.388708Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.388859Z	  '/image/download/staff/profile-md.webp',
2026-02-08T13:39:33.388997Z	  '/image/download/staff/profile-sm.webp',
2026-02-08T13:39:33.389106Z	  '/image/download/staff/profile-lg.webp',
2026-02-08T13:39:33.389403Z	  '/image/download/staff/profile.png',
2026-02-08T13:39:33.389483Z	  '/image/download/staff/profile.jpg'
2026-02-08T13:39:33.389556Z	]
2026-02-08T13:39:33.389651Z	[ImageOptimizer] baseName: Lumi-TJS, pagePath: staff
2026-02-08T13:39:33.389756Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.38985Z	  '/image/download/staff/Lumi-TJS-md.webp',
2026-02-08T13:39:33.390022Z	  '/image/download/staff/Lumi-TJS-sm.webp',
2026-02-08T13:39:33.390109Z	  '/image/download/staff/Lumi-TJS-lg.webp',
2026-02-08T13:39:33.390224Z	  '/image/download/staff/Lumi-TJS.png',
2026-02-08T13:39:33.390381Z	  '/image/download/staff/Lumi-TJS.jpg'
2026-02-08T13:39:33.390532Z	]
2026-02-08T13:39:33.390683Z	[ImageOptimizer] baseName: IMG_7796, pagePath: staff
2026-02-08T13:39:33.390803Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.390932Z	  '/image/download/staff/IMG_7796-md.webp',
2026-02-08T13:39:33.391065Z	  '/image/download/staff/IMG_7796-sm.webp',
2026-02-08T13:39:33.391244Z	  '/image/download/staff/IMG_7796-lg.webp',
2026-02-08T13:39:33.391318Z	  '/image/download/staff/IMG_7796.png',
2026-02-08T13:39:33.391373Z	  '/image/download/staff/IMG_7796.jpg'
2026-02-08T13:39:33.391477Z	]
2026-02-08T13:39:33.391591Z	[ImageOptimizer] baseName: IMG_7799_edited, pagePath: staff
2026-02-08T13:39:33.391735Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.391842Z	  '/image/download/staff/IMG_7799_edited-md.webp',
2026-02-08T13:39:33.391952Z	  '/image/download/staff/IMG_7799_edited-sm.webp',
2026-02-08T13:39:33.392071Z	  '/image/download/staff/IMG_7799_edited-lg.webp',
2026-02-08T13:39:33.392237Z	  '/image/download/staff/IMG_7799_edited.png',
2026-02-08T13:39:33.392357Z	  '/image/download/staff/IMG_7799_edited.jpg'
2026-02-08T13:39:33.392494Z	]
2026-02-08T13:39:33.392588Z	[ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:39:33.392687Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.392821Z	  '/image/download/staff/profile-md.webp',
2026-02-08T13:39:33.392947Z	  '/image/download/staff/profile-sm.webp',
2026-02-08T13:39:33.393063Z	  '/image/download/staff/profile-lg.webp',
2026-02-08T13:39:33.393188Z	  '/image/download/staff/profile.png',
2026-02-08T13:39:33.393285Z	  '/image/download/staff/profile.jpg'
2026-02-08T13:39:33.393379Z	]
2026-02-08T13:39:33.393501Z	[ImageOptimizer] baseName: Kayo-TJS, pagePath: staff
2026-02-08T13:39:33.393615Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.393715Z	  '/image/download/staff/Kayo-TJS-md.webp',
2026-02-08T13:39:33.393842Z	  '/image/download/staff/Kayo-TJS-sm.webp',
2026-02-08T13:39:33.393961Z	  '/image/download/staff/Kayo-TJS-lg.webp',
2026-02-08T13:39:33.394071Z	  '/image/download/staff/Kayo-TJS.png',
2026-02-08T13:39:33.394183Z	  '/image/download/staff/Kayo-TJS.jpg'
2026-02-08T13:39:33.394319Z	]
2026-02-08T13:39:33.394431Z	[ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:39:33.394507Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:33.394616Z	  '/image/download/staff/profile-md.webp',
2026-02-08T13:39:33.394716Z	  '/image/download/staff/profile-sm.webp',
2026-02-08T13:39:33.394833Z	  '/image/download/staff/profile-lg.webp',
2026-02-08T13:39:33.394903Z	  '/image/download/staff/profile.png',
2026-02-08T13:39:33.395003Z	  '/image/download/staff/profile.jpg'
2026-02-08T13:39:33.395145Z	]
2026-02-08T13:39:33.395257Z	🚫 キャッシュ無効 (reports): 直接APIから取得します
2026-02-08T13:39:33.395395Z	🌐 Notion APIから取得中: reports
2026-02-08T13:39:34.608865Z	✅ API取得完了: reports (2件)
2026-02-08T13:39:34.622477Z	🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:39:34.62295Z	🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:39:34.623293Z	🌐 Notion APIから取得中: category
2026-02-08T13:39:34.623394Z	🌐 Notion APIから取得中: classes
2026-02-08T13:39:34.805718Z	already exist.
2026-02-08T13:39:34.826788Z	✅ API取得完了: category (2件)
2026-02-08T13:39:34.838116Z	already exist.
2026-02-08T13:39:34.902003Z	already exist.
2026-02-08T13:39:35.038781Z	already exist.
2026-02-08T13:39:35.376499Z	✅ API取得完了: classes (7件)
2026-02-08T13:39:38.097611Z	Class data received: {
2026-02-08T13:39:38.097909Z	  category: [
2026-02-08T13:39:38.098046Z	    {
2026-02-08T13:39:38.098205Z	      object: 'page',
2026-02-08T13:39:38.098337Z	      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:39:38.098441Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:39:38.098558Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:39:38.098674Z	      created_by: [Object],
2026-02-08T13:39:38.098782Z	      last_edited_by: [Object],
2026-02-08T13:39:38.098883Z	      cover: null,
2026-02-08T13:39:38.099004Z	      icon: null,
2026-02-08T13:39:38.099191Z	      parent: [Object],
2026-02-08T13:39:38.099321Z	      archived: false,
2026-02-08T13:39:38.09943Z	      in_trash: false,
2026-02-08T13:39:38.099548Z	      is_locked: false,
2026-02-08T13:39:38.099674Z	      properties: [Object],
2026-02-08T13:39:38.099777Z	      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:39:38.099874Z	      public_url: null
2026-02-08T13:39:38.099981Z	    },
2026-02-08T13:39:38.100114Z	    {
2026-02-08T13:39:38.100241Z	      object: 'page',
2026-02-08T13:39:38.100346Z	      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:39:38.100449Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:39:38.100553Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:38.100654Z	      created_by: [Object],
2026-02-08T13:39:38.100751Z	      last_edited_by: [Object],
2026-02-08T13:39:38.100848Z	      cover: null,
2026-02-08T13:39:38.100946Z	      icon: null,
2026-02-08T13:39:38.10105Z	      parent: [Object],
2026-02-08T13:39:38.101192Z	      archived: false,
2026-02-08T13:39:38.101317Z	      in_trash: false,
2026-02-08T13:39:38.101433Z	      is_locked: false,
2026-02-08T13:39:38.10154Z	      properties: [Object],
2026-02-08T13:39:38.101667Z	      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:39:38.101768Z	      public_url: null
2026-02-08T13:39:38.101881Z	    }
2026-02-08T13:39:38.102008Z	  ],
2026-02-08T13:39:38.102146Z	  classes: [
2026-02-08T13:39:38.102255Z	    {
2026-02-08T13:39:38.10235Z	      object: 'page',
2026-02-08T13:39:38.102451Z	      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:39:38.102546Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:39:38.102651Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:38.102893Z	      created_by: [Object],
2026-02-08T13:39:38.103003Z	      last_edited_by: [Object],
2026-02-08T13:39:38.103114Z	      cover: null,
2026-02-08T13:39:38.103222Z	      icon: null,
2026-02-08T13:39:38.103316Z	      parent: [Object],
2026-02-08T13:39:38.10341Z	      archived: false,
2026-02-08T13:39:38.103508Z	      in_trash: false,
2026-02-08T13:39:38.103595Z	      is_locked: false,
2026-02-08T13:39:38.10368Z	      properties: [Object],
2026-02-08T13:39:38.103772Z	      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:39:38.103901Z	      public_url: null
2026-02-08T13:39:38.104005Z	    },
2026-02-08T13:39:38.104116Z	    {
2026-02-08T13:39:38.104235Z	      object: 'page',
2026-02-08T13:39:38.104335Z	      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:39:38.104433Z	      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:39:38.104531Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:39:38.104628Z	      created_by: [Object],
2026-02-08T13:39:38.104723Z	      last_edited_by: [Object],
2026-02-08T13:39:38.10482Z	      cover: null,
2026-02-08T13:39:38.104912Z	      icon: null,
2026-02-08T13:39:38.105019Z	      parent: [Object],
2026-02-08T13:39:38.105145Z	      archived: false,
2026-02-08T13:39:38.105239Z	      in_trash: false,
2026-02-08T13:39:38.10533Z	      is_locked: false,
2026-02-08T13:39:38.105421Z	      properties: [Object],
2026-02-08T13:39:38.105516Z	      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:39:38.105601Z	      public_url: null
2026-02-08T13:39:38.105698Z	    },
2026-02-08T13:39:38.105808Z	    {
2026-02-08T13:39:38.105905Z	      object: 'page',
2026-02-08T13:39:38.105995Z	      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:39:38.106467Z	      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:39:38.10662Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:39:38.106742Z	      created_by: [Object],
2026-02-08T13:39:38.106843Z	      last_edited_by: [Object],
2026-02-08T13:39:38.106928Z	      cover: null,
2026-02-08T13:39:38.107019Z	      icon: null,
2026-02-08T13:39:38.107116Z	      parent: [Object],
2026-02-08T13:39:38.10722Z	      archived: false,
2026-02-08T13:39:38.107313Z	      in_trash: false,
2026-02-08T13:39:38.10741Z	      is_locked: false,
2026-02-08T13:39:38.107506Z	      properties: [Object],
2026-02-08T13:39:38.107607Z	      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:39:38.107705Z	      public_url: null
2026-02-08T13:39:38.107817Z	    },
2026-02-08T13:39:38.107935Z	    {
2026-02-08T13:39:38.108055Z	      object: 'page',
2026-02-08T13:39:38.108206Z	      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:39:38.108324Z	      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:39:38.108445Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:39:38.108573Z	      created_by: [Object],
2026-02-08T13:39:38.108704Z	      last_edited_by: [Object],
2026-02-08T13:39:38.108855Z	      cover: null,
2026-02-08T13:39:38.108994Z	      icon: null,
2026-02-08T13:39:38.109162Z	      parent: [Object],
2026-02-08T13:39:38.109311Z	      archived: false,
2026-02-08T13:39:38.109464Z	      in_trash: false,
2026-02-08T13:39:38.109564Z	      is_locked: false,
2026-02-08T13:39:38.10965Z	      properties: [Object],
2026-02-08T13:39:38.109724Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:39:38.109806Z	      public_url: null
2026-02-08T13:39:38.109897Z	    },
2026-02-08T13:39:38.10999Z	    {
2026-02-08T13:39:38.110069Z	      object: 'page',
2026-02-08T13:39:38.11017Z	      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:39:38.110247Z	      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:39:38.110324Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:38.110412Z	      created_by: [Object],
2026-02-08T13:39:38.11049Z	      last_edited_by: [Object],
2026-02-08T13:39:38.110568Z	      cover: null,
2026-02-08T13:39:38.110643Z	      icon: null,
2026-02-08T13:39:38.110716Z	      parent: [Object],
2026-02-08T13:39:38.11079Z	      archived: false,
2026-02-08T13:39:38.110878Z	      in_trash: false,
2026-02-08T13:39:38.110953Z	      is_locked: false,
2026-02-08T13:39:38.111029Z	      properties: [Object],
2026-02-08T13:39:38.111118Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:39:38.111217Z	      public_url: null
2026-02-08T13:39:38.111292Z	    },
2026-02-08T13:39:38.111366Z	    {
2026-02-08T13:39:38.111442Z	      object: 'page',
2026-02-08T13:39:38.111521Z	      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:39:38.111596Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:39:38.111671Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:38.111745Z	      created_by: [Object],
2026-02-08T13:39:38.111827Z	      last_edited_by: [Object],
2026-02-08T13:39:38.111905Z	      cover: null,
2026-02-08T13:39:38.111981Z	      icon: null,
2026-02-08T13:39:38.112054Z	      parent: [Object],
2026-02-08T13:39:38.112156Z	      archived: false,
2026-02-08T13:39:38.112235Z	      in_trash: false,
2026-02-08T13:39:38.112328Z	      is_locked: false,
2026-02-08T13:39:38.112402Z	      properties: [Object],
2026-02-08T13:39:38.112479Z	      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:39:38.112552Z	      public_url: null
2026-02-08T13:39:38.112626Z	    },
2026-02-08T13:39:38.112701Z	    {
2026-02-08T13:39:38.112777Z	      object: 'page',
2026-02-08T13:39:38.112865Z	      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:39:38.112945Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:39:38.113027Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:39:38.113117Z	      created_by: [Object],
2026-02-08T13:39:38.113209Z	      last_edited_by: [Object],
2026-02-08T13:39:38.113286Z	      cover: null,
2026-02-08T13:39:38.11337Z	      icon: null,
2026-02-08T13:39:38.11345Z	      parent: [Object],
2026-02-08T13:39:38.113524Z	      archived: false,
2026-02-08T13:39:38.113598Z	      in_trash: false,
2026-02-08T13:39:38.113671Z	      is_locked: false,
2026-02-08T13:39:38.113744Z	      properties: [Object],
2026-02-08T13:39:38.113818Z	      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:39:38.113895Z	      public_url: null
2026-02-08T13:39:38.113969Z	    }
2026-02-08T13:39:38.114043Z	  ]
2026-02-08T13:39:38.114145Z	}
2026-02-08T13:39:38.114225Z	[ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:39:38.114307Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.114383Z	  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:39:38.114458Z	  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:39:38.114535Z	  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:39:38.114608Z	  '/image/download/class/IMG_1866.png',
2026-02-08T13:39:38.114682Z	  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:39:38.114757Z	]
2026-02-08T13:39:38.114833Z	[ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:39:38.114916Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.115006Z	  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:39:38.11508Z	  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:39:38.115179Z	  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:39:38.115252Z	  '/image/download/class/IMG_3364.png',
2026-02-08T13:39:38.115331Z	  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:39:38.115407Z	]
2026-02-08T13:39:38.115483Z	[ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:39:38.115556Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.115627Z	  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:39:38.1157Z	  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:39:38.115774Z	  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:39:38.115848Z	  '/image/download/class/20240210_110201.png',
2026-02-08T13:39:38.115923Z	  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:39:38.115997Z	]
2026-02-08T13:39:38.11607Z	[ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:39:38.116173Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.116258Z	  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:39:38.116334Z	  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:39:38.11641Z	  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:39:38.116485Z	  '/image/download/class/IMG_7919.png',
2026-02-08T13:39:38.116559Z	  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:39:38.116633Z	]
2026-02-08T13:39:38.116718Z	[ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:39:38.116793Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.118382Z	  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:39:38.118483Z	  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:39:38.118562Z	  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:39:38.118639Z	  '/image/download/class/IMG_7892.png',
2026-02-08T13:39:38.118719Z	  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:39:38.118797Z	]
2026-02-08T13:39:38.118874Z	[ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:39:38.11895Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.119025Z	  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:39:38.119115Z	  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:39:38.119212Z	  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:39:38.119291Z	  '/image/download/class/IMG_3338.png',
2026-02-08T13:39:38.119367Z	  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:39:38.119444Z	]
2026-02-08T13:39:38.119519Z	[ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:39:38.119594Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:38.119672Z	  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:39:38.119748Z	  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:39:38.119822Z	  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:39:38.119895Z	  '/image/download/class/IMG_8125.png',
2026-02-08T13:39:38.119969Z	  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:39:38.120051Z	]
2026-02-08T13:39:38.133475Z	🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:39:38.133659Z	🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:39:38.13381Z	🌐 Notion APIから取得中: category
2026-02-08T13:39:38.134394Z	🌐 Notion APIから取得中: classes
2026-02-08T13:39:38.347467Z	✅ API取得完了: classes (7件)
2026-02-08T13:39:42.293215Z	✅ API取得完了: category (2件)
2026-02-08T13:39:45.088749Z	Class data received: {
2026-02-08T13:39:45.089458Z	  category: [
2026-02-08T13:39:45.089656Z	    {
2026-02-08T13:39:45.089779Z	      object: 'page',
2026-02-08T13:39:45.089868Z	      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:39:45.089939Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:39:45.089996Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:39:45.090053Z	      created_by: [Object],
2026-02-08T13:39:45.090138Z	      last_edited_by: [Object],
2026-02-08T13:39:45.09021Z	      cover: null,
2026-02-08T13:39:45.09027Z	      icon: null,
2026-02-08T13:39:45.090324Z	      parent: [Object],
2026-02-08T13:39:45.090382Z	      archived: false,
2026-02-08T13:39:45.090439Z	      in_trash: false,
2026-02-08T13:39:45.090493Z	      is_locked: false,
2026-02-08T13:39:45.090547Z	      properties: [Object],
2026-02-08T13:39:45.090617Z	      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:39:45.090685Z	      public_url: null
2026-02-08T13:39:45.09074Z	    },
2026-02-08T13:39:45.090796Z	    {
2026-02-08T13:39:45.09085Z	      object: 'page',
2026-02-08T13:39:45.090908Z	      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:39:45.090961Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:39:45.091014Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:45.091073Z	      created_by: [Object],
2026-02-08T13:39:45.091156Z	      last_edited_by: [Object],
2026-02-08T13:39:45.09122Z	      cover: null,
2026-02-08T13:39:45.091279Z	      icon: null,
2026-02-08T13:39:45.091331Z	      parent: [Object],
2026-02-08T13:39:45.091389Z	      archived: false,
2026-02-08T13:39:45.091442Z	      in_trash: false,
2026-02-08T13:39:45.091496Z	      is_locked: false,
2026-02-08T13:39:45.09155Z	      properties: [Object],
2026-02-08T13:39:45.091603Z	      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:39:45.091662Z	      public_url: null
2026-02-08T13:39:45.091717Z	    }
2026-02-08T13:39:45.091776Z	  ],
2026-02-08T13:39:45.091838Z	  classes: [
2026-02-08T13:39:45.091892Z	    {
2026-02-08T13:39:45.09195Z	      object: 'page',
2026-02-08T13:39:45.092002Z	      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:39:45.092055Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:39:45.092403Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:45.092567Z	      created_by: [Object],
2026-02-08T13:39:45.092717Z	      last_edited_by: [Object],
2026-02-08T13:39:45.092838Z	      cover: null,
2026-02-08T13:39:45.092945Z	      icon: null,
2026-02-08T13:39:45.093055Z	      parent: [Object],
2026-02-08T13:39:45.093187Z	      archived: false,
2026-02-08T13:39:45.093298Z	      in_trash: false,
2026-02-08T13:39:45.093409Z	      is_locked: false,
2026-02-08T13:39:45.09351Z	      properties: [Object],
2026-02-08T13:39:45.0936Z	      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:39:45.093704Z	      public_url: null
2026-02-08T13:39:45.093817Z	    },
2026-02-08T13:39:45.093921Z	    {
2026-02-08T13:39:45.094021Z	      object: 'page',
2026-02-08T13:39:45.094141Z	      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:39:45.094254Z	      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:39:45.094361Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:39:45.094475Z	      created_by: [Object],
2026-02-08T13:39:45.094586Z	      last_edited_by: [Object],
2026-02-08T13:39:45.094706Z	      cover: null,
2026-02-08T13:39:45.094812Z	      icon: null,
2026-02-08T13:39:45.094915Z	      parent: [Object],
2026-02-08T13:39:45.095043Z	      archived: false,
2026-02-08T13:39:45.095156Z	      in_trash: false,
2026-02-08T13:39:45.095268Z	      is_locked: false,
2026-02-08T13:39:45.095367Z	      properties: [Object],
2026-02-08T13:39:45.095469Z	      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:39:45.095555Z	      public_url: null
2026-02-08T13:39:45.095642Z	    },
2026-02-08T13:39:45.095746Z	    {
2026-02-08T13:39:45.095841Z	      object: 'page',
2026-02-08T13:39:45.09592Z	      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:39:45.096011Z	      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:39:45.096116Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:39:45.096223Z	      created_by: [Object],
2026-02-08T13:39:45.096308Z	      last_edited_by: [Object],
2026-02-08T13:39:45.096421Z	      cover: null,
2026-02-08T13:39:45.096538Z	      icon: null,
2026-02-08T13:39:45.09665Z	      parent: [Object],
2026-02-08T13:39:45.096764Z	      archived: false,
2026-02-08T13:39:45.096883Z	      in_trash: false,
2026-02-08T13:39:45.097Z	      is_locked: false,
2026-02-08T13:39:45.097172Z	      properties: [Object],
2026-02-08T13:39:45.097271Z	      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:39:45.097354Z	      public_url: null
2026-02-08T13:39:45.097444Z	    },
2026-02-08T13:39:45.097526Z	    {
2026-02-08T13:39:45.097615Z	      object: 'page',
2026-02-08T13:39:45.097717Z	      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:39:45.097817Z	      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:39:45.097926Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:39:45.098032Z	      created_by: [Object],
2026-02-08T13:39:45.098172Z	      last_edited_by: [Object],
2026-02-08T13:39:45.098306Z	      cover: null,
2026-02-08T13:39:45.098434Z	      icon: null,
2026-02-08T13:39:45.098548Z	      parent: [Object],
2026-02-08T13:39:45.098674Z	      archived: false,
2026-02-08T13:39:45.0988Z	      in_trash: false,
2026-02-08T13:39:45.098926Z	      is_locked: false,
2026-02-08T13:39:45.09904Z	      properties: [Object],
2026-02-08T13:39:45.099194Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:39:45.099325Z	      public_url: null
2026-02-08T13:39:45.099449Z	    },
2026-02-08T13:39:45.099572Z	    {
2026-02-08T13:39:45.099691Z	      object: 'page',
2026-02-08T13:39:45.099801Z	      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:39:45.099906Z	      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:39:45.10001Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:45.100123Z	      created_by: [Object],
2026-02-08T13:39:45.100211Z	      last_edited_by: [Object],
2026-02-08T13:39:45.1003Z	      cover: null,
2026-02-08T13:39:45.100398Z	      icon: null,
2026-02-08T13:39:45.100493Z	      parent: [Object],
2026-02-08T13:39:45.100591Z	      archived: false,
2026-02-08T13:39:45.100701Z	      in_trash: false,
2026-02-08T13:39:45.100809Z	      is_locked: false,
2026-02-08T13:39:45.100909Z	      properties: [Object],
2026-02-08T13:39:45.101005Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:39:45.101132Z	      public_url: null
2026-02-08T13:39:45.101245Z	    },
2026-02-08T13:39:45.101352Z	    {
2026-02-08T13:39:45.101482Z	      object: 'page',
2026-02-08T13:39:45.101582Z	      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:39:45.101673Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:39:45.101768Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:39:45.101857Z	      created_by: [Object],
2026-02-08T13:39:45.101947Z	      last_edited_by: [Object],
2026-02-08T13:39:45.102039Z	      cover: null,
2026-02-08T13:39:45.102179Z	      icon: null,
2026-02-08T13:39:45.102281Z	      parent: [Object],
2026-02-08T13:39:45.102381Z	      archived: false,
2026-02-08T13:39:45.102473Z	      in_trash: false,
2026-02-08T13:39:45.102561Z	      is_locked: false,
2026-02-08T13:39:45.10265Z	      properties: [Object],
2026-02-08T13:39:45.102749Z	      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:39:45.10284Z	      public_url: null
2026-02-08T13:39:45.10294Z	    },
2026-02-08T13:39:45.103046Z	    {
2026-02-08T13:39:45.10316Z	      object: 'page',
2026-02-08T13:39:45.103273Z	      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:39:45.103383Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:39:45.103489Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:39:45.103593Z	      created_by: [Object],
2026-02-08T13:39:45.103695Z	      last_edited_by: [Object],
2026-02-08T13:39:45.103788Z	      cover: null,
2026-02-08T13:39:45.103895Z	      icon: null,
2026-02-08T13:39:45.104009Z	      parent: [Object],
2026-02-08T13:39:45.104142Z	      archived: false,
2026-02-08T13:39:45.104255Z	      in_trash: false,
2026-02-08T13:39:45.104354Z	      is_locked: false,
2026-02-08T13:39:45.104458Z	      properties: [Object],
2026-02-08T13:39:45.104559Z	      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:39:45.104658Z	      public_url: null
2026-02-08T13:39:45.104753Z	    }
2026-02-08T13:39:45.104855Z	  ]
2026-02-08T13:39:45.104955Z	}
2026-02-08T13:39:45.105048Z	[ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:39:45.10516Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.105253Z	  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:39:45.105338Z	  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:39:45.105435Z	  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:39:45.105521Z	  '/image/download/class/IMG_1866.png',
2026-02-08T13:39:45.105609Z	  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:39:45.105699Z	]
2026-02-08T13:39:45.10579Z	[ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:39:45.105932Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.106153Z	  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:39:45.10631Z	  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:39:45.106413Z	  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:39:45.106516Z	  '/image/download/class/IMG_3364.png',
2026-02-08T13:39:45.106626Z	  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:39:45.106732Z	]
2026-02-08T13:39:45.10693Z	[ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:39:45.107047Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.107189Z	  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:39:45.107281Z	  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:39:45.107371Z	  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:39:45.107468Z	  '/image/download/class/20240210_110201.png',
2026-02-08T13:39:45.107565Z	  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:39:45.107648Z	]
2026-02-08T13:39:45.107746Z	[ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:39:45.107834Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.107919Z	  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:39:45.108004Z	  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:39:45.108119Z	  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:39:45.108209Z	  '/image/download/class/IMG_7919.png',
2026-02-08T13:39:45.108296Z	  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:39:45.108381Z	]
2026-02-08T13:39:45.108463Z	[ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:39:45.108553Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.108662Z	  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:39:45.108764Z	  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:39:45.108853Z	  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:39:45.108945Z	  '/image/download/class/IMG_7892.png',
2026-02-08T13:39:45.109041Z	  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:39:45.109167Z	]
2026-02-08T13:39:45.109263Z	[ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:39:45.109369Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.109459Z	  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:39:45.109544Z	  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:39:45.109627Z	  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:39:45.109718Z	  '/image/download/class/IMG_3338.png',
2026-02-08T13:39:45.109823Z	  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:39:45.10992Z	]
2026-02-08T13:39:45.11Z	[ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:39:45.11009Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:39:45.110203Z	  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:39:45.110304Z	  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:39:45.110397Z	  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:39:45.110492Z	  '/image/download/class/IMG_8125.png',
2026-02-08T13:39:45.110581Z	  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:39:45.110684Z	]
2026-02-08T13:39:45.110791Z	🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:39:45.110895Z	🚫 キャッシュ無効 (files): 直接APIから取得します
2026-02-08T13:39:45.111003Z	🌐 Notion APIから取得中: schedule
2026-02-08T13:39:45.111441Z	🌐 Notion APIから取得中: files
2026-02-08T13:39:45.434942Z	✅ API取得完了: files (1件)
2026-02-08T13:39:45.509517Z	✅ API取得完了: schedule (48件)
2026-02-08T13:39:45.603846Z	already exist.
2026-02-08T13:39:45.750083Z	already exist.
2026-02-08T13:39:45.750445Z	not pdf file
2026-02-08T13:39:54.667252Z	KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'ja' }
2026-02-08T13:39:54.818574Z	already exist.
2026-02-08T13:39:54.818836Z	not pdf file
2026-02-08T13:39:54.977084Z	already exist.
2026-02-08T13:40:00.081057Z	KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'ja' }
2026-02-08T13:40:00.139302Z	already exist.
2026-02-08T13:40:00.139605Z	not pdf file
2026-02-08T13:40:00.210859Z	already exist.
2026-02-08T13:40:02.760961Z	🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:40:02.76126Z	🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:40:02.761902Z	🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:40:02.762218Z	🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:40:02.762472Z	🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:40:02.762602Z	🌐 Notion APIから取得中: qualification
2026-02-08T13:40:02.762817Z	🌐 Notion APIから取得中: price
2026-02-08T13:40:02.763071Z	🌐 Notion APIから取得中: discountFamily
2026-02-08T13:40:02.764279Z	🌐 Notion APIから取得中: discountStaff
2026-02-08T13:40:02.765526Z	🌐 Notion APIから取得中: enrollment
2026-02-08T13:40:02.95243Z	✅ API取得完了: enrollment (2件)
2026-02-08T13:40:03.037371Z	✅ API取得完了: price (8件)
2026-02-08T13:40:04.64398Z	✅ API取得完了: discountFamily (3件)
2026-02-08T13:40:04.810047Z	✅ API取得完了: discountStaff (3件)
2026-02-08T13:40:06.15247Z	✅ API取得完了: qualification (3件)
2026-02-08T13:40:06.170327Z	🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:40:06.170573Z	🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:40:06.170719Z	🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:40:06.170847Z	🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:40:06.170977Z	🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:40:06.171134Z	🌐 Notion APIから取得中: qualification
2026-02-08T13:40:06.171271Z	🌐 Notion APIから取得中: price
2026-02-08T13:40:06.171386Z	🌐 Notion APIから取得中: discountFamily
2026-02-08T13:40:06.171519Z	🌐 Notion APIから取得中: discountStaff
2026-02-08T13:40:06.171652Z	🌐 Notion APIから取得中: enrollment
2026-02-08T13:40:06.308239Z	✅ API取得完了: discountStaff (3件)
2026-02-08T13:40:06.326639Z	✅ API取得完了: enrollment (2件)
2026-02-08T13:40:06.357833Z	✅ API取得完了: qualification (3件)
2026-02-08T13:40:06.657738Z	✅ API取得完了: discountFamily (3件)
2026-02-08T13:40:06.827861Z	✅ API取得完了: price (8件)
2026-02-08T13:40:06.845385Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:06.854495Z	[ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:40:06.854723Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.854849Z	  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:40:06.854973Z	  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:40:06.855088Z	  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:40:06.855243Z	  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:40:06.855365Z	  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:40:06.855486Z	]
2026-02-08T13:40:06.85561Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:40:06.855731Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.855858Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:40:06.855979Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:40:06.856086Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:40:06.856237Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:40:06.856341Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:40:06.85647Z	]
2026-02-08T13:40:06.856601Z	[ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:40:06.856722Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.856828Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:40:06.856934Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:40:06.857047Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:40:06.857185Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:40:06.8573Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:40:06.857424Z	]
2026-02-08T13:40:06.857538Z	[ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:40:06.85766Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.857788Z	  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:40:06.857917Z	  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:40:06.858041Z	  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:40:06.858174Z	  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:40:06.858286Z	  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:40:06.858408Z	]
2026-02-08T13:40:06.858524Z	[ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:40:06.858643Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.858762Z	  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:40:06.858867Z	  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:40:06.858977Z	  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:40:06.859077Z	  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:40:06.859226Z	  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:40:06.85935Z	]
2026-02-08T13:40:06.85948Z	[ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:40:06.859582Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.85969Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:40:06.859797Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:40:06.859903Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:40:06.860013Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:40:06.860141Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:40:06.860258Z	]
2026-02-08T13:40:06.860383Z	[ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:40:06.860494Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.860608Z	  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:40:06.860717Z	  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:40:06.86082Z	  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:40:06.860913Z	  '/image/download/news/unitymural02.png',
2026-02-08T13:40:06.86101Z	  '/image/download/news/unitymural02.jpg'
2026-02-08T13:40:06.861123Z	]
2026-02-08T13:40:06.861248Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:40:06.861371Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.861485Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:40:06.861582Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:40:06.861681Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:40:06.861798Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:40:06.861905Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:40:06.862012Z	]
2026-02-08T13:40:06.862128Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:40:06.862227Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.862323Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:40:06.862431Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:40:06.862541Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:40:06.862638Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:40:06.862732Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:40:06.862839Z	]
2026-02-08T13:40:06.862934Z	[ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:40:06.863032Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.863154Z	  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:40:06.863264Z	  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:40:06.863359Z	  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:40:06.863473Z	  '/image/download/news/schooltablechair.png',
2026-02-08T13:40:06.863584Z	  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:40:06.863695Z	]
2026-02-08T13:40:06.863812Z	[ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:40:06.863908Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.864013Z	  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:40:06.864119Z	  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:40:06.864224Z	  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:40:06.864325Z	  '/image/download/news/japanesegarden.png',
2026-02-08T13:40:06.864441Z	  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:40:06.864537Z	]
2026-02-08T13:40:06.886165Z	🚀 グローバルキャッシュから取得: event
2026-02-08T13:40:06.892838Z	[ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:40:06.893042Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.893225Z	  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:40:06.89336Z	  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:40:06.893472Z	  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:40:06.893579Z	  '/image/download/event/2026kenken.png',
2026-02-08T13:40:06.89369Z	  '/image/download/event/2026kenken.jpg'
2026-02-08T13:40:06.893781Z	]
2026-02-08T13:40:06.893895Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: event
2026-02-08T13:40:06.89401Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:06.89412Z	  '/image/download/event/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:40:06.894225Z	  '/image/download/event/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:40:06.89432Z	  '/image/download/event/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:40:06.894407Z	  '/image/download/event/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:40:06.8945Z	  '/image/download/event/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:40:06.894594Z	]
2026-02-08T13:40:06.900444Z	🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:40:06.900614Z	🚫 キャッシュ無効 (support): 直接APIから取得します
2026-02-08T13:40:06.900695Z	🚫 キャッシュ無効 (sponsor): 直接APIから取得します
2026-02-08T13:40:06.900758Z	🚫 キャッシュ無効 (donation): 直接APIから取得します
2026-02-08T13:40:06.90082Z	🚫 キャッシュ無効 (howto): 直接APIから取得します
2026-02-08T13:40:06.900875Z	🌐 Notion APIから取得中: sponsors
2026-02-08T13:40:06.901205Z	🌐 Notion APIから取得中: support
2026-02-08T13:40:06.901391Z	🌐 Notion APIから取得中: sponsor
2026-02-08T13:40:06.901532Z	🌐 Notion APIから取得中: donation
2026-02-08T13:40:06.901747Z	🌐 Notion APIから取得中: howto
2026-02-08T13:40:07.04224Z	✅ API取得完了: sponsor (1件)
2026-02-08T13:40:07.090511Z	✅ API取得完了: howto (3件)
2026-02-08T13:40:07.132888Z	✅ API取得完了: donation (1件)
2026-02-08T13:40:07.280082Z	✅ API取得完了: support (1件)
2026-02-08T13:40:07.876008Z	✅ API取得完了: sponsors (3件)
2026-02-08T13:40:08.765841Z	[ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:40:08.766053Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:08.766491Z	  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:40:08.766824Z	  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:40:08.766898Z	  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:40:08.766954Z	  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:40:08.767015Z	  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:40:08.76711Z	]
2026-02-08T13:40:08.767207Z	[ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:40:08.767318Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:08.767604Z	  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:40:08.767794Z	  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:40:08.76797Z	  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:40:08.768158Z	  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:40:08.768235Z	  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:40:08.768337Z	]
2026-02-08T13:40:08.768431Z	[ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:40:08.768501Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:08.768558Z	  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:40:08.768612Z	  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:40:08.768665Z	  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:40:08.768717Z	  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:40:08.76877Z	  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:40:08.768826Z	]
2026-02-08T13:40:08.788349Z	🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:40:08.789002Z	🌐 Notion APIから取得中: general
2026-02-08T13:40:08.946989Z	✅ API取得完了: general (1件)
2026-02-08T13:40:08.956854Z	🚫 キャッシュ無効 (opportunity): 直接APIから取得します
2026-02-08T13:40:08.957033Z	🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:40:08.957445Z	🌐 Notion APIから取得中: opportunity
2026-02-08T13:40:08.957546Z	🌐 Notion APIから取得中: general
2026-02-08T13:40:09.116343Z	✅ API取得完了: general (1件)
2026-02-08T13:40:09.718812Z	✅ API取得完了: opportunity (3件)
2026-02-08T13:40:09.730249Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:13.343809Z	[ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:40:13.344168Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:13.344295Z	  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:40:13.344413Z	  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:40:13.344493Z	  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:40:13.344732Z	  '/image/download/news/unitymural02.png',
2026-02-08T13:40:13.344809Z	  '/image/download/news/unitymural02.jpg'
2026-02-08T13:40:13.344871Z	]
2026-02-08T13:40:13.352277Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:16.099551Z	[ImageOptimizer] baseName: Oasissep2017, pagePath: news
2026-02-08T13:40:16.099889Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:16.100015Z	  '/image/download/news/Oasissep2017-md.webp',
2026-02-08T13:40:16.100148Z	  '/image/download/news/Oasissep2017-sm.webp',
2026-02-08T13:40:16.100262Z	  '/image/download/news/Oasissep2017-lg.webp',
2026-02-08T13:40:16.100383Z	  '/image/download/news/Oasissep2017.png',
2026-02-08T13:40:16.100492Z	  '/image/download/news/Oasissep2017.jpg'
2026-02-08T13:40:16.100592Z	]
2026-02-08T13:40:16.106706Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:19.023226Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:25.251309Z	[ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:40:25.251541Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:25.251699Z	  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:40:25.251769Z	  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:40:25.251847Z	  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:40:25.251951Z	  '/image/download/news/japanesegarden.png',
2026-02-08T13:40:25.252055Z	  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:40:25.252175Z	]
2026-02-08T13:40:25.259655Z	
   Generating static pages (26/132) 
2026-02-08T13:40:25.260388Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:29.583272Z	[ImageOptimizer] baseName: tucsonundokai2023, pagePath: news
2026-02-08T13:40:29.583522Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:29.583608Z	  '/image/download/news/tucsonundokai2023-md.webp',
2026-02-08T13:40:29.583673Z	  '/image/download/news/tucsonundokai2023-sm.webp',
2026-02-08T13:40:29.583727Z	  '/image/download/news/tucsonundokai2023-lg.webp',
2026-02-08T13:40:29.583784Z	  '/image/download/news/tucsonundokai2023.png',
2026-02-08T13:40:29.583837Z	  '/image/download/news/tucsonundokai2023.jpg'
2026-02-08T13:40:29.58389Z	]
2026-02-08T13:40:29.594479Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:31.039482Z	[ImageOptimizer] baseName: notoearthquake1, pagePath: news
2026-02-08T13:40:31.039695Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:31.039862Z	  '/image/download/news/notoearthquake1-md.webp',
2026-02-08T13:40:31.039968Z	  '/image/download/news/notoearthquake1-sm.webp',
2026-02-08T13:40:31.040063Z	  '/image/download/news/notoearthquake1-lg.webp',
2026-02-08T13:40:31.040172Z	  '/image/download/news/notoearthquake1.png',
2026-02-08T13:40:31.040257Z	  '/image/download/news/notoearthquake1.jpg'
2026-02-08T13:40:31.040357Z	]
2026-02-08T13:40:31.049461Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:37.074205Z	[ImageOptimizer] baseName: newyearprayer, pagePath: news
2026-02-08T13:40:37.074859Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:37.075017Z	  '/image/download/news/newyearprayer-md.webp',
2026-02-08T13:40:37.075151Z	  '/image/download/news/newyearprayer-sm.webp',
2026-02-08T13:40:37.075252Z	  '/image/download/news/newyearprayer-lg.webp',
2026-02-08T13:40:37.075345Z	  '/image/download/news/newyearprayer.png',
2026-02-08T13:40:37.075443Z	  '/image/download/news/newyearprayer.jpg'
2026-02-08T13:40:37.075533Z	]
2026-02-08T13:40:37.083915Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:38.971462Z	[ImageOptimizer] baseName: kanjikentei2024, pagePath: news
2026-02-08T13:40:38.971738Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:38.972223Z	  '/image/download/news/kanjikentei2024-md.webp',
2026-02-08T13:40:38.972334Z	  '/image/download/news/kanjikentei2024-sm.webp',
2026-02-08T13:40:38.972443Z	  '/image/download/news/kanjikentei2024-lg.webp',
2026-02-08T13:40:38.972543Z	  '/image/download/news/kanjikentei2024.png',
2026-02-08T13:40:38.972633Z	  '/image/download/news/kanjikentei2024.jpg'
2026-02-08T13:40:38.972741Z	]
2026-02-08T13:40:38.983801Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:40.158132Z	[ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:40:40.158415Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:40.158556Z	  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:40:40.158662Z	  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:40:40.158764Z	  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:40:40.158854Z	  '/image/download/news/schooltablechair.png',
2026-02-08T13:40:40.158949Z	  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:40:40.159045Z	]
2026-02-08T13:40:40.165924Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:44.195759Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:48.020763Z	[ImageOptimizer] baseName: arizonamatsurilogo, pagePath: news
2026-02-08T13:40:48.021446Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:48.021575Z	  '/image/download/news/arizonamatsurilogo-md.webp',
2026-02-08T13:40:48.021637Z	  '/image/download/news/arizonamatsurilogo-sm.webp',
2026-02-08T13:40:48.021692Z	  '/image/download/news/arizonamatsurilogo-lg.webp',
2026-02-08T13:40:48.021759Z	  '/image/download/news/arizonamatsurilogo.png',
2026-02-08T13:40:48.021823Z	  '/image/download/news/arizonamatsurilogo.jpg'
2026-02-08T13:40:48.02188Z	]
2026-02-08T13:40:48.029363Z	
   Generating static pages (33/132) 
2026-02-08T13:40:48.029988Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:50.359671Z	[ImageOptimizer] baseName: supportinghands, pagePath: news
2026-02-08T13:40:50.359898Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:50.360056Z	  '/image/download/news/supportinghands-md.webp',
2026-02-08T13:40:50.360189Z	  '/image/download/news/supportinghands-sm.webp',
2026-02-08T13:40:50.360297Z	  '/image/download/news/supportinghands-lg.webp',
2026-02-08T13:40:50.360404Z	  '/image/download/news/supportinghands.png',
2026-02-08T13:40:50.360497Z	  '/image/download/news/supportinghands.jpg'
2026-02-08T13:40:50.360598Z	]
2026-02-08T13:40:50.367598Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:40:56.006566Z	[ImageOptimizer] baseName: childreninclassroom, pagePath: news
2026-02-08T13:40:56.006809Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:40:56.006933Z	  '/image/download/news/childreninclassroom-md.webp',
2026-02-08T13:40:56.007155Z	  '/image/download/news/childreninclassroom-sm.webp',
2026-02-08T13:40:56.0073Z	  '/image/download/news/childreninclassroom-lg.webp',
2026-02-08T13:40:56.007417Z	  '/image/download/news/childreninclassroom.png',
2026-02-08T13:40:56.007523Z	  '/image/download/news/childreninclassroom.jpg'
2026-02-08T13:40:56.007617Z	]
2026-02-08T13:40:56.018034Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:00.945822Z	[ImageOptimizer] baseName: hitomimcknight, pagePath: news
2026-02-08T13:41:00.946136Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:00.946271Z	  '/image/download/news/hitomimcknight-md.webp',
2026-02-08T13:41:00.946382Z	  '/image/download/news/hitomimcknight-sm.webp',
2026-02-08T13:41:00.946488Z	  '/image/download/news/hitomimcknight-lg.webp',
2026-02-08T13:41:00.946593Z	  '/image/download/news/hitomimcknight.png',
2026-02-08T13:41:00.946699Z	  '/image/download/news/hitomimcknight.jpg'
2026-02-08T13:41:00.946802Z	]
2026-02-08T13:41:00.958353Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:05.417296Z	[ImageOptimizer] baseName: kanken2022, pagePath: news
2026-02-08T13:41:05.417622Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:05.417782Z	  '/image/download/news/kanken2022-md.webp',
2026-02-08T13:41:05.417904Z	  '/image/download/news/kanken2022-sm.webp',
2026-02-08T13:41:05.418042Z	  '/image/download/news/kanken2022-lg.webp',
2026-02-08T13:41:05.418171Z	  '/image/download/news/kanken2022.png',
2026-02-08T13:41:05.418329Z	  '/image/download/news/kanken2022.jpg'
2026-02-08T13:41:05.418435Z	]
2026-02-08T13:41:05.430474Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:11.103189Z	[ImageOptimizer] baseName: kanjikentei2020, pagePath: news
2026-02-08T13:41:11.103462Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:11.103598Z	  '/image/download/news/kanjikentei2020-md.webp',
2026-02-08T13:41:11.103704Z	  '/image/download/news/kanjikentei2020-sm.webp',
2026-02-08T13:41:11.103802Z	  '/image/download/news/kanjikentei2020-lg.webp',
2026-02-08T13:41:11.103908Z	  '/image/download/news/kanjikentei2020.png',
2026-02-08T13:41:11.104009Z	  '/image/download/news/kanjikentei2020.jpg'
2026-02-08T13:41:11.104138Z	]
2026-02-08T13:41:11.111845Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:13.417326Z	[ImageOptimizer] baseName: 2020newyear, pagePath: news
2026-02-08T13:41:13.417606Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:13.417744Z	  '/image/download/news/2020newyear-md.webp',
2026-02-08T13:41:13.417835Z	  '/image/download/news/2020newyear-sm.webp',
2026-02-08T13:41:13.41793Z	  '/image/download/news/2020newyear-lg.webp',
2026-02-08T13:41:13.418029Z	  '/image/download/news/2020newyear.png',
2026-02-08T13:41:13.418156Z	  '/image/download/news/2020newyear.jpg'
2026-02-08T13:41:13.418266Z	]
2026-02-08T13:41:13.42573Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:16.188275Z	[ImageOptimizer] baseName: schoolchildrensmiles, pagePath: news
2026-02-08T13:41:16.188571Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:16.188698Z	  '/image/download/news/schoolchildrensmiles-md.webp',
2026-02-08T13:41:16.188799Z	  '/image/download/news/schoolchildrensmiles-sm.webp',
2026-02-08T13:41:16.188889Z	  '/image/download/news/schoolchildrensmiles-lg.webp',
2026-02-08T13:41:16.188973Z	  '/image/download/news/schoolchildrensmiles.png',
2026-02-08T13:41:16.189056Z	  '/image/download/news/schoolchildrensmiles.jpg'
2026-02-08T13:41:16.18919Z	]
2026-02-08T13:41:16.196059Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:20.520044Z	Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:41:21.897763Z	Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:41:21.90134Z	[ImageOptimizer] baseName: kanjikenteilogo, pagePath: news
2026-02-08T13:41:21.90158Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:21.901675Z	  '/image/download/news/kanjikenteilogo-md.webp',
2026-02-08T13:41:21.90176Z	  '/image/download/news/kanjikenteilogo-sm.webp',
2026-02-08T13:41:21.901917Z	  '/image/download/news/kanjikenteilogo-lg.webp',
2026-02-08T13:41:21.902021Z	  '/image/download/news/kanjikenteilogo.png',
2026-02-08T13:41:21.902151Z	  '/image/download/news/kanjikenteilogo.jpg'
2026-02-08T13:41:21.902257Z	]
2026-02-08T13:41:21.911604Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:24.756654Z	[ImageOptimizer] baseName: newyear2021, pagePath: news
2026-02-08T13:41:24.757117Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:24.757325Z	  '/image/download/news/newyear2021-md.webp',
2026-02-08T13:41:24.757593Z	  '/image/download/news/newyear2021-sm.webp',
2026-02-08T13:41:24.757833Z	  '/image/download/news/newyear2021-lg.webp',
2026-02-08T13:41:24.757955Z	  '/image/download/news/newyear2021.png',
2026-02-08T13:41:24.758061Z	  '/image/download/news/newyear2021.jpg'
2026-02-08T13:41:24.758209Z	]
2026-02-08T13:41:24.767039Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:26.42946Z	[ImageOptimizer] baseName: tucsonundokai2020, pagePath: news
2026-02-08T13:41:26.429763Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:26.429915Z	  '/image/download/news/tucsonundokai2020-md.webp',
2026-02-08T13:41:26.430023Z	  '/image/download/news/tucsonundokai2020-sm.webp',
2026-02-08T13:41:26.430137Z	  '/image/download/news/tucsonundokai2020-lg.webp',
2026-02-08T13:41:26.430234Z	  '/image/download/news/tucsonundokai2020.png',
2026-02-08T13:41:26.430329Z	  '/image/download/news/tucsonundokai2020.jpg'
2026-02-08T13:41:26.430423Z	]
2026-02-08T13:41:26.436145Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:28.835938Z	[ImageOptimizer] baseName: boystudyonline, pagePath: news
2026-02-08T13:41:28.836204Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:28.836307Z	  '/image/download/news/boystudyonline-md.webp',
2026-02-08T13:41:28.836367Z	  '/image/download/news/boystudyonline-sm.webp',
2026-02-08T13:41:28.836451Z	  '/image/download/news/boystudyonline-lg.webp',
2026-02-08T13:41:28.836519Z	  '/image/download/news/boystudyonline.png',
2026-02-08T13:41:28.836577Z	  '/image/download/news/boystudyonline.jpg'
2026-02-08T13:41:28.836632Z	]
2026-02-08T13:41:28.844383Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:34.153991Z	[ImageOptimizer] baseName: schoolchairtable, pagePath: news
2026-02-08T13:41:34.154248Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:34.154332Z	  '/image/download/news/schoolchairtable-md.webp',
2026-02-08T13:41:34.154425Z	  '/image/download/news/schoolchairtable-sm.webp',
2026-02-08T13:41:34.154499Z	  '/image/download/news/schoolchairtable-lg.webp',
2026-02-08T13:41:34.154794Z	  '/image/download/news/schoolchairtable.png',
2026-02-08T13:41:34.154954Z	  '/image/download/news/schoolchairtable.jpg'
2026-02-08T13:41:34.155059Z	]
2026-02-08T13:41:34.164715Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:37.855985Z	[ImageOptimizer] baseName: remotelearningkid, pagePath: news
2026-02-08T13:41:37.856301Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:37.85645Z	  '/image/download/news/remotelearningkid-md.webp',
2026-02-08T13:41:37.856566Z	  '/image/download/news/remotelearningkid-sm.webp',
2026-02-08T13:41:37.856792Z	  '/image/download/news/remotelearningkid-lg.webp',
2026-02-08T13:41:37.856946Z	  '/image/download/news/remotelearningkid.png',
2026-02-08T13:41:37.857398Z	  '/image/download/news/remotelearningkid.jpg'
2026-02-08T13:41:37.857533Z	]
2026-02-08T13:41:37.866117Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:40.226773Z	[ImageOptimizer] baseName: sponsorthanks, pagePath: news
2026-02-08T13:41:40.227174Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:40.227311Z	  '/image/download/news/sponsorthanks-md.webp',
2026-02-08T13:41:40.22753Z	  '/image/download/news/sponsorthanks-sm.webp',
2026-02-08T13:41:40.227626Z	  '/image/download/news/sponsorthanks-lg.webp',
2026-02-08T13:41:40.227697Z	  '/image/download/news/sponsorthanks.png',
2026-02-08T13:41:40.227758Z	  '/image/download/news/sponsorthanks.jpg'
2026-02-08T13:41:40.227822Z	]
2026-02-08T13:41:40.234805Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:42.999978Z	[ImageOptimizer] baseName: kanjikentei2023, pagePath: news
2026-02-08T13:41:43.000406Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:43.000597Z	  '/image/download/news/kanjikentei2023-md.webp',
2026-02-08T13:41:43.000709Z	  '/image/download/news/kanjikentei2023-sm.webp',
2026-02-08T13:41:43.000813Z	  '/image/download/news/kanjikentei2023-lg.webp',
2026-02-08T13:41:43.000919Z	  '/image/download/news/kanjikentei2023.png',
2026-02-08T13:41:43.001027Z	  '/image/download/news/kanjikentei2023.jpg'
2026-02-08T13:41:43.001155Z	]
2026-02-08T13:41:43.007707Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:44.74289Z	[ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:41:44.743157Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:44.743257Z	  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:41:44.743316Z	  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:41:44.74337Z	  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:41:44.743426Z	  '/image/download/news/emptyschool.png',
2026-02-08T13:41:44.743478Z	  '/image/download/news/emptyschool.jpg'
2026-02-08T13:41:44.743533Z	]
2026-02-08T13:41:44.751487Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:52.88864Z	[ImageOptimizer] baseName: pandemicprevention, pagePath: news
2026-02-08T13:41:52.888962Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:52.889117Z	  '/image/download/news/pandemicprevention-md.webp',
2026-02-08T13:41:52.889239Z	  '/image/download/news/pandemicprevention-sm.webp',
2026-02-08T13:41:52.889343Z	  '/image/download/news/pandemicprevention-lg.webp',
2026-02-08T13:41:52.889454Z	  '/image/download/news/pandemicprevention.png',
2026-02-08T13:41:52.889566Z	  '/image/download/news/pandemicprevention.jpg'
2026-02-08T13:41:52.889662Z	]
2026-02-08T13:41:52.897901Z	
   Generating static pages (50/132) 
2026-02-08T13:41:52.898746Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:54.135053Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:41:56.995009Z	[ImageOptimizer] baseName: mochipounding, pagePath: news
2026-02-08T13:41:56.995369Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:41:56.99547Z	  '/image/download/news/mochipounding-md.webp',
2026-02-08T13:41:56.99554Z	  '/image/download/news/mochipounding-sm.webp',
2026-02-08T13:41:56.995595Z	  '/image/download/news/mochipounding-lg.webp',
2026-02-08T13:41:56.995652Z	  '/image/download/news/mochipounding.png',
2026-02-08T13:41:56.995707Z	  '/image/download/news/mochipounding.jpg'
2026-02-08T13:41:56.995767Z	]
2026-02-08T13:41:57.003868Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:01.913611Z	[ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:42:01.913828Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:01.913919Z	  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:42:01.913993Z	  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:42:01.914202Z	  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:42:01.914576Z	  '/image/download/news/emptyschool.png',
2026-02-08T13:42:01.914819Z	  '/image/download/news/emptyschool.jpg'
2026-02-08T13:42:01.914908Z	]
2026-02-08T13:42:01.921881Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:05.616695Z	[ImageOptimizer] baseName: SAJCClogo, pagePath: news
2026-02-08T13:42:05.617007Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:05.617186Z	  '/image/download/news/SAJCClogo-md.webp',
2026-02-08T13:42:05.617299Z	  '/image/download/news/SAJCClogo-sm.webp',
2026-02-08T13:42:05.617397Z	  '/image/download/news/SAJCClogo-lg.webp',
2026-02-08T13:42:05.617578Z	  '/image/download/news/SAJCClogo.png',
2026-02-08T13:42:05.617722Z	  '/image/download/news/SAJCClogo.jpg'
2026-02-08T13:42:05.617849Z	]
2026-02-08T13:42:05.624697Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:10.202519Z	[ImageOptimizer] baseName: lastdayofschool2021, pagePath: news
2026-02-08T13:42:10.20283Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:10.202972Z	  '/image/download/news/lastdayofschool2021-md.webp',
2026-02-08T13:42:10.203075Z	  '/image/download/news/lastdayofschool2021-sm.webp',
2026-02-08T13:42:10.203201Z	  '/image/download/news/lastdayofschool2021-lg.webp',
2026-02-08T13:42:10.203319Z	  '/image/download/news/lastdayofschool2021.png',
2026-02-08T13:42:10.203418Z	  '/image/download/news/lastdayofschool2021.jpg'
2026-02-08T13:42:10.203506Z	]
2026-02-08T13:42:10.21316Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:13.892963Z	[ImageOptimizer] baseName: tucsonundokai2021, pagePath: news
2026-02-08T13:42:13.893302Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:13.893438Z	  '/image/download/news/tucsonundokai2021-md.webp',
2026-02-08T13:42:13.893539Z	  '/image/download/news/tucsonundokai2021-sm.webp',
2026-02-08T13:42:13.893644Z	  '/image/download/news/tucsonundokai2021-lg.webp',
2026-02-08T13:42:13.893737Z	  '/image/download/news/tucsonundokai2021.png',
2026-02-08T13:42:13.893824Z	  '/image/download/news/tucsonundokai2021.jpg'
2026-02-08T13:42:13.893922Z	]
2026-02-08T13:42:13.905145Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:15.589445Z	[ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:42:15.589677Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:15.589766Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:42:15.589857Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:42:15.590082Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:42:15.590246Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:42:15.590321Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:42:15.590403Z	]
2026-02-08T13:42:15.599568Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:20.097252Z	[ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:42:20.097553Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:20.097684Z	  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:42:20.097784Z	  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:42:20.09789Z	  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:42:20.097978Z	  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:42:20.098119Z	  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:42:20.098228Z	]
2026-02-08T13:42:20.10725Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:25.217078Z	[ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:42:25.217323Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:25.217403Z	  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:42:25.217463Z	  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:42:25.217515Z	  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:42:25.217567Z	  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:42:25.21762Z	  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:42:25.217675Z	]
2026-02-08T13:42:25.225868Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:27.770364Z	[ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:42:27.770628Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:27.771114Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:42:27.771326Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:42:27.771457Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:42:27.771542Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:42:27.771629Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:42:27.771731Z	]
2026-02-08T13:42:27.779172Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:34.518982Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:42:34.519355Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:34.519527Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:42:34.519818Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:42:34.519924Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:42:34.520033Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:42:34.520167Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:42:34.520274Z	]
2026-02-08T13:42:34.534151Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:36.91029Z	[ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:42:36.910637Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:36.910751Z	  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:42:36.910811Z	  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:42:36.910996Z	  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:42:36.911081Z	  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:42:36.911182Z	  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:42:36.9113Z	]
2026-02-08T13:42:36.921004Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:38.898332Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:42:38.898546Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:38.89862Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:42:38.898678Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:42:38.898731Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:42:38.898792Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:42:38.898851Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:42:38.898907Z	]
2026-02-08T13:42:38.904741Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:42:41.216719Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:42:41.21725Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:41.217398Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:42:41.217473Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:42:41.21753Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:42:41.217589Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:42:41.217667Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:42:41.217725Z	]
2026-02-08T13:42:41.224678Z	🚀 グローバルキャッシュから取得: event
2026-02-08T13:42:44.436711Z	PDF already exists: 2026kenken.pdf
2026-02-08T13:42:45.055219Z	PDF already exists: 2026kenken.pdf
2026-02-08T13:42:45.059918Z	[ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:42:45.060147Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:45.060339Z	  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:42:45.060462Z	  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:42:45.060665Z	  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:42:45.060804Z	  '/image/download/event/2026kenken.png',
2026-02-08T13:42:45.060931Z	  '/image/download/event/2026kenken.jpg'
2026-02-08T13:42:45.061026Z	]
2026-02-08T13:42:45.070324Z	🚀 グローバルキャッシュから取得: event
2026-02-08T13:42:47.039401Z	Error fetching event item: TypeError: Cannot read properties of undefined (reading 'plain_text')
2026-02-08T13:42:47.039685Z	    at /opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40199
2026-02-08T13:42:47.039809Z	    at Array.map (<anonymous>)
2026-02-08T13:42:47.039908Z	    at getStaticProps (/opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40150)
2026-02-08T13:42:47.040132Z	    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2026-02-08T13:42:47.049113Z	
   Generating static pages (66/132) 
2026-02-08T13:42:47.04998Z	🚫 キャッシュ無効 (slider): 直接APIから取得します
2026-02-08T13:42:47.050179Z	🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:42:47.050307Z	🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:42:47.05042Z	🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:42:47.050528Z	🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:42:47.050628Z	🌐 Notion APIから取得中: slider
2026-02-08T13:42:47.052124Z	🌐 Notion APIから取得中: sponsors
2026-02-08T13:42:47.053459Z	🌐 Notion APIから取得中: schedule
2026-02-08T13:42:47.055129Z	🌐 Notion APIから取得中: about
2026-02-08T13:42:47.056236Z	🌐 Notion APIから取得中: general
2026-02-08T13:42:47.321121Z	✅ API取得完了: sponsors (3件)
2026-02-08T13:42:47.323351Z	✅ API取得完了: about (3件)
2026-02-08T13:42:47.339747Z	✅ API取得完了: general (1件)
2026-02-08T13:42:47.34428Z	✅ API取得完了: slider (4件)
2026-02-08T13:42:47.534162Z	✅ API取得完了: schedule (48件)
2026-02-08T13:42:48.61307Z	🚫 キャッシュ無効 (news): 直接APIから取得します
2026-02-08T13:42:48.613309Z	🌐 Notion APIから取得中: news
2026-02-08T13:42:49.161992Z	✅ API取得完了: news (42件)
2026-02-08T13:42:49.172193Z	[convertAboutFromDatabase] Processing item with tag: about, title: About
2026-02-08T13:42:49.172395Z	[convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:42:49.17275Z	[convertAboutFromDatabase] Processing item with tag: mission, title: Our Mission
2026-02-08T13:42:49.172851Z	[convertAboutFromDatabase] Set mission
2026-02-08T13:42:49.173145Z	[convertAboutFromDatabase] Processing item with tag: vision, title: Our Vision
2026-02-08T13:42:49.173235Z	[convertAboutFromDatabase] Set vision
2026-02-08T13:42:49.173473Z	[convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:42:49.174898Z	[ImageOptimizer] baseName: Sports_Day_-_Giant_Ball_rolling, pagePath: slider
2026-02-08T13:42:49.17505Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.175171Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-md.webp',
2026-02-08T13:42:49.175269Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-sm.webp',
2026-02-08T13:42:49.175329Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-lg.webp',
2026-02-08T13:42:49.175388Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.png',
2026-02-08T13:42:49.175442Z	  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.jpg'
2026-02-08T13:42:49.175496Z	]
2026-02-08T13:42:49.176303Z	[ImageOptimizer] baseName: Summer_Festival_-_Snack_fishing, pagePath: slider
2026-02-08T13:42:49.176651Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.176742Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing-md.webp',
2026-02-08T13:42:49.176828Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing-sm.webp',
2026-02-08T13:42:49.176974Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing-lg.webp',
2026-02-08T13:42:49.177082Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing.png',
2026-02-08T13:42:49.177664Z	  '/image/download/slider/Summer_Festival_-_Snack_fishing.jpg'
2026-02-08T13:42:49.177792Z	]
2026-02-08T13:42:49.177896Z	[ImageOptimizer] baseName: winter, pagePath: slider
2026-02-08T13:42:49.177995Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.178172Z	  '/image/download/slider/winter-md.webp',
2026-02-08T13:42:49.17839Z	  '/image/download/slider/winter-sm.webp',
2026-02-08T13:42:49.178516Z	  '/image/download/slider/winter-lg.webp',
2026-02-08T13:42:49.178607Z	  '/image/download/slider/winter.png',
2026-02-08T13:42:49.178666Z	  '/image/download/slider/winter.jpg'
2026-02-08T13:42:49.178723Z	]
2026-02-08T13:42:49.178784Z	[ImageOptimizer] baseName: katakana, pagePath: slider
2026-02-08T13:42:49.178839Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.178894Z	  '/image/download/slider/katakana-md.webp',
2026-02-08T13:42:49.178952Z	  '/image/download/slider/katakana-sm.webp',
2026-02-08T13:42:49.179005Z	  '/image/download/slider/katakana-lg.webp',
2026-02-08T13:42:49.179065Z	  '/image/download/slider/katakana.png',
2026-02-08T13:42:49.179154Z	  '/image/download/slider/katakana.jpg'
2026-02-08T13:42:49.179218Z	]
2026-02-08T13:42:49.179284Z	[ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:42:49.179342Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.179403Z	  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:42:49.179458Z	  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:42:49.179521Z	  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:42:49.179577Z	  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:42:49.17963Z	  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:42:49.179684Z	]
2026-02-08T13:42:49.179764Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:42:49.179829Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.179893Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:42:49.179953Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:42:49.180012Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:42:49.180072Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:42:49.180189Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:42:49.180259Z	]
2026-02-08T13:42:49.180318Z	[ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:42:49.180384Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.180443Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:42:49.180499Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:42:49.180571Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:42:49.180631Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:42:49.180683Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:42:49.180737Z	]
2026-02-08T13:42:49.180789Z	[ImageOptimizer] baseName: about, pagePath: about
2026-02-08T13:42:49.180856Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.180913Z	  '/image/download/about/about-md.webp',
2026-02-08T13:42:49.180967Z	  '/image/download/about/about-sm.webp',
2026-02-08T13:42:49.181021Z	  '/image/download/about/about-lg.webp',
2026-02-08T13:42:49.181086Z	  '/image/download/about/about.png',
2026-02-08T13:42:49.181218Z	  '/image/download/about/about.jpg'
2026-02-08T13:42:49.181292Z	]
2026-02-08T13:42:49.181357Z	[ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:42:49.18143Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.18149Z	  '/image/download/about/mission-md.webp',
2026-02-08T13:42:49.181862Z	  '/image/download/about/mission-sm.webp',
2026-02-08T13:42:49.181941Z	  '/image/download/about/mission-lg.webp',
2026-02-08T13:42:49.182Z	  '/image/download/about/mission.png',
2026-02-08T13:42:49.182055Z	  '/image/download/about/mission.jpg'
2026-02-08T13:42:49.182221Z	]
2026-02-08T13:42:49.182338Z	[ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:42:49.182456Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.182582Z	  '/image/download/about/vision-md.webp',
2026-02-08T13:42:49.182735Z	  '/image/download/about/vision-sm.webp',
2026-02-08T13:42:49.182851Z	  '/image/download/about/vision-lg.webp',
2026-02-08T13:42:49.182958Z	  '/image/download/about/vision.png',
2026-02-08T13:42:49.183085Z	  '/image/download/about/vision.jpg'
2026-02-08T13:42:49.183199Z	]
2026-02-08T13:42:49.183302Z	[OpportunityEntity] 画像データ: {
2026-02-08T13:42:49.183418Z	  originalName: 'employment.png',
2026-02-08T13:42:49.183532Z	  baseName: 'employment',
2026-02-08T13:42:49.183638Z	  expectedPath: '/image/download/opportunity/employment.png'
2026-02-08T13:42:49.183741Z	}
2026-02-08T13:42:49.183838Z	[ImageOptimizer] baseName: employment, pagePath: opportunity
2026-02-08T13:42:49.183945Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.184061Z	  '/image/download/opportunity/employment-md.webp',
2026-02-08T13:42:49.184196Z	  '/image/download/opportunity/employment-sm.webp',
2026-02-08T13:42:49.184307Z	  '/image/download/opportunity/employment-lg.webp',
2026-02-08T13:42:49.184422Z	  '/image/download/opportunity/employment.png',
2026-02-08T13:42:49.184521Z	  '/image/download/opportunity/employment.jpg'
2026-02-08T13:42:49.184622Z	]
2026-02-08T13:42:49.184729Z	[ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:42:49.184856Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.184955Z	  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:42:49.185056Z	  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:42:49.185185Z	  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:42:49.185294Z	  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:42:49.185397Z	  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:42:49.185498Z	]
2026-02-08T13:42:49.185603Z	[ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:42:49.1857Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.185806Z	  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:42:49.185907Z	  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:42:49.185993Z	  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:42:49.186084Z	  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:42:49.186216Z	  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:42:49.186308Z	]
2026-02-08T13:42:49.186403Z	[ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:42:49.186502Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:49.186593Z	  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:42:49.186685Z	  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:42:49.186771Z	  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:42:49.18686Z	  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:42:49.186963Z	  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:42:49.187055Z	]
2026-02-08T13:42:49.199717Z	🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:42:49.199924Z	🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:42:49.200477Z	🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:42:49.200584Z	🌐 Notion APIから取得中: greeting
2026-02-08T13:42:49.20065Z	🌐 Notion APIから取得中: story
2026-02-08T13:42:49.200813Z	🌐 Notion APIから取得中: history
2026-02-08T13:42:49.332762Z	✅ API取得完了: story (1件)
2026-02-08T13:42:49.880805Z	✅ API取得完了: greeting (1件)
2026-02-08T13:42:51.177212Z	✅ API取得完了: history (1件)
2026-02-08T13:42:51.181497Z	[ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:42:51.181704Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:51.181827Z	  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:42:51.181937Z	  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:42:51.182041Z	  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:42:51.182161Z	  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:42:51.182264Z	  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:42:51.182353Z	]
2026-02-08T13:42:51.182868Z	[ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:42:51.183059Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:51.183218Z	  '/image/download/history/historty1-md.webp',
2026-02-08T13:42:51.183349Z	  '/image/download/history/historty1-sm.webp',
2026-02-08T13:42:51.183466Z	  '/image/download/history/historty1-lg.webp',
2026-02-08T13:42:51.18358Z	  '/image/download/history/historty1.png',
2026-02-08T13:42:51.183694Z	  '/image/download/history/historty1.jpg'
2026-02-08T13:42:51.18381Z	]
2026-02-08T13:42:51.183936Z	Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:42:51.184058Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:51.184215Z	[ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:42:51.184328Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:51.184421Z	  '/image/download/history/historty2-md.webp',
2026-02-08T13:42:51.184519Z	  '/image/download/history/historty2-sm.webp',
2026-02-08T13:42:51.18465Z	  '/image/download/history/historty2-lg.webp',
2026-02-08T13:42:51.184762Z	  '/image/download/history/historty2.png',
2026-02-08T13:42:51.184872Z	  '/image/download/history/historty2.jpg'
2026-02-08T13:42:51.184977Z	]
2026-02-08T13:42:51.185078Z	[ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:42:51.185205Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:51.185308Z	  '/image/download/history/historty3-md.webp',
2026-02-08T13:42:51.185411Z	  '/image/download/history/historty3-sm.webp',
2026-02-08T13:42:51.185502Z	  '/image/download/history/historty3-lg.webp',
2026-02-08T13:42:51.185594Z	  '/image/download/history/historty3.png',
2026-02-08T13:42:51.185693Z	  '/image/download/history/historty3.jpg'
2026-02-08T13:42:51.185801Z	]
2026-02-08T13:42:51.185907Z	Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:42:51.186014Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:51.186151Z	Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:42:51.186274Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:51.205423Z	🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:42:51.205664Z	🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:42:51.205831Z	🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:42:51.205967Z	🌐 Notion APIから取得中: greeting
2026-02-08T13:42:51.206109Z	🌐 Notion APIから取得中: story
2026-02-08T13:42:51.206263Z	🌐 Notion APIから取得中: history
2026-02-08T13:42:51.402036Z	✅ API取得完了: greeting (1件)
2026-02-08T13:42:51.440748Z	✅ API取得完了: story (1件)
2026-02-08T13:42:52.711809Z	✅ API取得完了: history (1件)
2026-02-08T13:42:52.714893Z	[ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:42:52.71508Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:52.715212Z	  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:42:52.715318Z	  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:42:52.715423Z	  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:42:52.715536Z	  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:42:52.715652Z	  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:42:52.715768Z	]
2026-02-08T13:42:52.715885Z	[ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:42:52.715992Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:52.716118Z	  '/image/download/history/historty1-md.webp',
2026-02-08T13:42:52.716246Z	  '/image/download/history/historty1-sm.webp',
2026-02-08T13:42:52.716358Z	  '/image/download/history/historty1-lg.webp',
2026-02-08T13:42:52.716456Z	  '/image/download/history/historty1.png',
2026-02-08T13:42:52.716544Z	  '/image/download/history/historty1.jpg'
2026-02-08T13:42:52.716699Z	]
2026-02-08T13:42:52.716805Z	[ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:42:52.716903Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:52.717014Z	  '/image/download/history/historty2-md.webp',
2026-02-08T13:42:52.717135Z	  '/image/download/history/historty2-sm.webp',
2026-02-08T13:42:52.717241Z	  '/image/download/history/historty2-lg.webp',
2026-02-08T13:42:52.71733Z	  '/image/download/history/historty2.png',
2026-02-08T13:42:52.717432Z	  '/image/download/history/historty2.jpg'
2026-02-08T13:42:52.717532Z	]
2026-02-08T13:42:52.717634Z	[ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:42:52.71773Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:52.717854Z	  '/image/download/history/historty3-md.webp',
2026-02-08T13:42:52.717963Z	  '/image/download/history/historty3-sm.webp',
2026-02-08T13:42:52.718082Z	  '/image/download/history/historty3-lg.webp',
2026-02-08T13:42:52.7182Z	  '/image/download/history/historty3.png',
2026-02-08T13:42:52.718305Z	  '/image/download/history/historty3.jpg'
2026-02-08T13:42:52.718409Z	]
2026-02-08T13:42:52.718514Z	Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:42:52.718613Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:52.718704Z	Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:42:52.718824Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:52.718926Z	Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:42:52.719015Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:52.724382Z	🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:42:52.724795Z	🚫 キャッシュ無効 (mission): 直接APIから取得します
2026-02-08T13:42:52.725171Z	🚫 キャッシュ無効 (vision): 直接APIから取得します
2026-02-08T13:42:52.725272Z	🌐 Notion APIから取得中: about
2026-02-08T13:42:52.725341Z	🌐 Notion APIから取得中: mission
2026-02-08T13:42:52.725463Z	🌐 Notion APIから取得中: vision
2026-02-08T13:42:52.879373Z	✅ API取得完了: about (3件)
2026-02-08T13:42:52.909153Z	✅ API取得完了: vision (1件)
2026-02-08T13:42:59.143341Z	✅ API取得完了: mission (1件)
2026-02-08T13:42:59.818759Z	[convertAboutFromDatabase] Processing item with tag: about, title: About
2026-02-08T13:42:59.819175Z	[convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:42:59.819551Z	[convertAboutFromDatabase] Processing item with tag: mission, title: Our Mission
2026-02-08T13:42:59.819669Z	[convertAboutFromDatabase] Set mission
2026-02-08T13:42:59.819759Z	[convertAboutFromDatabase] Processing item with tag: vision, title: Our Vision
2026-02-08T13:42:59.819842Z	[convertAboutFromDatabase] Set vision
2026-02-08T13:42:59.819925Z	[convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:42:59.820006Z	[ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:42:59.820234Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:59.820299Z	  '/image/download/about/mission-md.webp',
2026-02-08T13:42:59.820352Z	  '/image/download/about/mission-sm.webp',
2026-02-08T13:42:59.820406Z	  '/image/download/about/mission-lg.webp',
2026-02-08T13:42:59.820492Z	  '/image/download/about/mission.png',
2026-02-08T13:42:59.820587Z	  '/image/download/about/mission.jpg'
2026-02-08T13:42:59.820935Z	]
2026-02-08T13:42:59.821353Z	[ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:42:59.821539Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:59.821687Z	  '/image/download/about/vision-md.webp',
2026-02-08T13:42:59.821808Z	  '/image/download/about/vision-sm.webp',
2026-02-08T13:42:59.821927Z	  '/image/download/about/vision-lg.webp',
2026-02-08T13:42:59.822045Z	  '/image/download/about/vision.png',
2026-02-08T13:42:59.822185Z	  '/image/download/about/vision.jpg'
2026-02-08T13:42:59.822303Z	]
2026-02-08T13:42:59.822419Z	[Policy Component] Received policy: {
2026-02-08T13:42:59.822517Z	  object: 'page',
2026-02-08T13:42:59.822637Z	  id: '88fe2db2-68f6-4295-ab31-8253d1fda16b',
2026-02-08T13:42:59.822755Z	  created_time: '2024-09-18T14:32:00.000Z',
2026-02-08T13:42:59.822871Z	  last_edited_time: '2025-09-05T01:49:00.000Z',
2026-02-08T13:42:59.822986Z	  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:42:59.823116Z	  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:42:59.823237Z	  cover: null,
2026-02-08T13:42:59.823347Z	  icon: null,
2026-02-08T13:42:59.823549Z	  parent: {
2026-02-08T13:42:59.823677Z	    type: 'database_id',
2026-02-08T13:42:59.823788Z	    database_id: '105a8c0e-cf8c-8082-a456-dd95fd87d0c2'
2026-02-08T13:42:59.823893Z	  },
2026-02-08T13:42:59.823998Z	  archived: false,
2026-02-08T13:42:59.824168Z	  in_trash: false,
2026-02-08T13:42:59.824278Z	  is_locked: false,
2026-02-08T13:42:59.824384Z	  properties: {
2026-02-08T13:42:59.824478Z	    pdf: { id: '%3BCvS', type: 'files', files: [Array] },
2026-02-08T13:42:59.824569Z	    image: { id: 'tHwI', type: 'files', files: [Array] },
2026-02-08T13:42:59.824669Z	    'pdf-en': { id: 'tW~u', type: 'files', files: [Array] },
2026-02-08T13:42:59.824766Z	    en: { id: '%7CJmt', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:42:59.824864Z	    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:42:59.824953Z	  },
2026-02-08T13:42:59.82504Z	  url: 'https://www.notion.so/88fe2db268f64295ab318253d1fda16b',
2026-02-08T13:42:59.825165Z	  public_url: null
2026-02-08T13:42:59.825275Z	}
2026-02-08T13:42:59.825395Z	{
2026-02-08T13:42:59.825499Z	  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:42:59.825599Z	  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:42:59.825693Z	  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:42:59.825779Z	  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:42:59.82587Z	  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:42:59.82595Z	}
2026-02-08T13:42:59.826033Z	[PolicyEntity] properties.image: {
2026-02-08T13:42:59.826143Z	  id: 'tHwI',
2026-02-08T13:42:59.826229Z	  type: 'files',
2026-02-08T13:42:59.826324Z	  files: [ { name: 'setsubun2022.JPG', type: 'file', file: [Object] } ]
2026-02-08T13:42:59.826418Z	}
2026-02-08T13:42:59.826511Z	[PolicyEntity] Using files[0]: {
2026-02-08T13:42:59.826603Z	  name: 'setsubun2022.JPG',
2026-02-08T13:42:59.826691Z	  type: 'file',
2026-02-08T13:42:59.826788Z	  file: {
2026-02-08T13:42:59.826889Z	    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/ec34a095-6cd8-48a8-98c7-18f89317c7c4/cd8e3c8d-b536-4bc7-8df9-3a55b148cc0d/setsubun2022.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGAEPQ%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T134252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5WFZxOEihxrVW5gJJjJukGnF%2BLoczf6Oq%2F5bCPHNjQIhALzstIgDlCfpOBObxRcUXMRoWXddy%2BhZeK5wQp6ED544Kv8DCHcQABoMNjM3NDIzMTgzODA1IgyLp9xPF%2BRGsPJlx7gq3AMI1Y20VhlKCsdUsb0jLV4VhCN%2FsISsPbJ8thw%2BKLxm2IXaZ7fyZLF8bG%2B%2FlyDSFQSG%2BDyAfcyXvZzVMyClzanZVvXnA3c7IXRyT8hEH%2BYngtgOrvuSaQSBgHcO4KCNkWBUv2o7jw9C2uovHZ1LCwIcxuChX8zzapc1DE8YNpXeE1lJ6IzVSYS7P2rZLSWL2vO1Q9WszkCIDv%2FKRwlxurw4hyaeKJ43qwz0jvoEtCXz3%2Fl78bCnJTRqHBildEWh4OlRVsp3nR%2BKpdt00xknrKkdYPqDw2Zm%2FSECt9GlkvPASWK6Ku6VI9nv%2BiB9sPtQR5GN2VfUWRDI0jPorMM%2BMrxCEeFIGrlHW54dGkh%2FnTbTlbc7xwAO2AIkP9rUgdH9sxVLUClq%2F0Y62eVCbxOFO8HufKPWgg%2BIabilhsXiiRUGdiax3Nf7DLkyDdwOyluZdXRcQSs5NkSRJLgRNICh9%2B%2FihfCaGj2TuNrfrHun0ScFPXBgWyUe7WBKUimAr%2F3dFzGpV9zyxJcxzxRs35WjGqmJ5qDr8l4fhjDPhfDt6fqmt4GUX1y5HO6q5LiI1tC5nUef1GTUDqizXokOWrTTxTj3IuPw21fgYzV53YHV%2BiX9OOf6EamhfdUWzvaRjzCQoKLMBjqkARUCZDwlvJfn7NrGXBW9Ticmz2GM9T1ygqvAaWCP3XCwh8woadHPTwIHLNT%2F0Q1tbSJe8Zlx%2FUlBZH6HaF%2B97DkWrVOK8cU%2BTeGEPPdIv8iCBEsVd%2B5h%2BKu%2BykMUFc%2BOKwldDOuzB3SnRW6jxefMtRgmSD%2B8djZRvt5%2FI7AEfOKLMhnkX4lENxZyaIj4KdDrMEOXPB6TwrkLmO4xbtl0B2s0QM%2Fg&X-Amz-Signature=4e97a04affaec97f301f7f6164a9ea574e2b93f4789738e96dac995610111ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
2026-02-08T13:42:59.826998Z	    expiry_time: '2026-02-08T14:42:52.849Z'
2026-02-08T13:42:59.827117Z	  }
2026-02-08T13:42:59.827222Z	}
2026-02-08T13:42:59.827308Z	[PolicyEntity] Created image object: {
2026-02-08T13:42:59.8274Z	  baseName: 'setsubun2022',
2026-02-08T13:42:59.827507Z	  pagePath: 'policy',
2026-02-08T13:42:59.827593Z	  alt: 'setsubun2022.JPG',
2026-02-08T13:42:59.827685Z	  width: null,
2026-02-08T13:42:59.827774Z	  height: null
2026-02-08T13:42:59.827865Z	}
2026-02-08T13:42:59.827963Z	[PolicyEntity] Final image: {
2026-02-08T13:42:59.828061Z	  baseName: 'setsubun2022',
2026-02-08T13:42:59.82817Z	  pagePath: 'policy',
2026-02-08T13:42:59.828256Z	  alt: 'setsubun2022.JPG',
2026-02-08T13:42:59.828379Z	  width: null,
2026-02-08T13:42:59.828476Z	  height: null
2026-02-08T13:42:59.828563Z	}
2026-02-08T13:42:59.828647Z	============
2026-02-08T13:42:59.82873Z	{
2026-02-08T13:42:59.828813Z	  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:42:59.828902Z	  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:42:59.828998Z	  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:42:59.829082Z	  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:42:59.829196Z	  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:42:59.829285Z	}
2026-02-08T13:42:59.829366Z	============
2026-02-08T13:42:59.829465Z	[PolicyEntity] properties.pdf: {
2026-02-08T13:42:59.829548Z	  id: '%3BCvS',
2026-02-08T13:42:59.829639Z	  type: 'files',
2026-02-08T13:42:59.829719Z	  files: [
2026-02-08T13:42:59.8298Z	    {
2026-02-08T13:42:59.829883Z	      name: '2025GuidelineBook_ja_20250905.pdf',
2026-02-08T13:42:59.829996Z	      type: 'file',
2026-02-08T13:42:59.830077Z	      file: [Object]
2026-02-08T13:42:59.830189Z	    }
2026-02-08T13:42:59.830278Z	  ]
2026-02-08T13:42:59.830366Z	}
2026-02-08T13:42:59.830476Z	[PolicyEntity] tmpPdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:42:59.830584Z	[PolicyEntity] pdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:42:59.830692Z	[PolicyEntity] Final PDF path: /pdf/download/policy/2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:42:59.830784Z	[Policy Component] Entity created: PolicyEntity {
2026-02-08T13:42:59.830877Z	  title: '学校要覧',
2026-02-08T13:42:59.83097Z	  image: {
2026-02-08T13:42:59.831058Z	    baseName: 'setsubun2022',
2026-02-08T13:42:59.831166Z	    pagePath: 'policy',
2026-02-08T13:42:59.831263Z	    alt: 'setsubun2022.JPG',
2026-02-08T13:42:59.831353Z	    width: null,
2026-02-08T13:42:59.831453Z	    height: null
2026-02-08T13:42:59.831542Z	  },
2026-02-08T13:42:59.831627Z	  pdf: '/pdf/download/policy/2025GuidelineBook_ja_20250905.pdf'
2026-02-08T13:42:59.831735Z	}
2026-02-08T13:42:59.831822Z	[Policy Component] Entity image: {
2026-02-08T13:42:59.83192Z	  baseName: 'setsubun2022',
2026-02-08T13:42:59.832006Z	  pagePath: 'policy',
2026-02-08T13:42:59.832104Z	  alt: 'setsubun2022.JPG',
2026-02-08T13:42:59.832209Z	  width: null,
2026-02-08T13:42:59.832302Z	  height: null
2026-02-08T13:42:59.832403Z	}
2026-02-08T13:42:59.832492Z	[ImageOptimizer] baseName: setsubun2022, pagePath: policy
2026-02-08T13:42:59.832592Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:42:59.832684Z	  '/image/download/policy/setsubun2022-md.webp',
2026-02-08T13:42:59.832767Z	  '/image/download/policy/setsubun2022-sm.webp',
2026-02-08T13:42:59.832852Z	  '/image/download/policy/setsubun2022-lg.webp',
2026-02-08T13:42:59.832936Z	  '/image/download/policy/setsubun2022.png',
2026-02-08T13:42:59.833076Z	  '/image/download/policy/setsubun2022.jpg'
2026-02-08T13:42:59.833199Z	]
2026-02-08T13:42:59.833336Z	Warning: ImageOptimizer for "setsubun2022" is missing width or height props.
2026-02-08T13:42:59.833458Z	    Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:42:59.841358Z	🚫 キャッシュ無効 (directors): 直接APIから取得します
2026-02-08T13:42:59.841603Z	🚫 キャッシュ無効 (orgChart): 直接APIから取得します
2026-02-08T13:42:59.841775Z	🚫 キャッシュ無効 (policies): 直接APIから取得します
2026-02-08T13:42:59.841922Z	🌐 Notion APIから取得中: directors
2026-02-08T13:42:59.842026Z	🌐 Notion APIから取得中: orgChart
2026-02-08T13:42:59.843545Z	🌐 Notion APIから取得中: policies
2026-02-08T13:42:59.915453Z	already exist.
2026-02-08T13:42:59.915711Z	not pdf file
2026-02-08T13:43:00.045463Z	✅ API取得完了: directors (5件)
2026-02-08T13:43:00.067131Z	already exist.
2026-02-08T13:43:00.077879Z	✅ API取得完了: orgChart (1件)
2026-02-08T13:43:00.16295Z	✅ API取得完了: policies (3件)
2026-02-08T13:43:00.807135Z	[ImageOptimizer] baseName: istockphoto-1495088043-612x612, pagePath: director
2026-02-08T13:43:00.80745Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:00.807602Z	  '/image/download/director/istockphoto-1495088043-612x612-md.webp',
2026-02-08T13:43:00.807732Z	  '/image/download/director/istockphoto-1495088043-612x612-sm.webp',
2026-02-08T13:43:00.807841Z	  '/image/download/director/istockphoto-1495088043-612x612-lg.webp',
2026-02-08T13:43:00.807966Z	  '/image/download/director/istockphoto-1495088043-612x612.png',
2026-02-08T13:43:00.808088Z	  '/image/download/director/istockphoto-1495088043-612x612.jpg'
2026-02-08T13:43:00.808232Z	]
2026-02-08T13:43:00.80836Z	[ImageOptimizer] baseName: profile, pagePath: director
2026-02-08T13:43:00.808474Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:00.808557Z	  '/image/download/director/profile-md.webp',
2026-02-08T13:43:00.80865Z	  '/image/download/director/profile-sm.webp',
2026-02-08T13:43:00.808734Z	  '/image/download/director/profile-lg.webp',
2026-02-08T13:43:00.808817Z	  '/image/download/director/profile.png',
2026-02-08T13:43:00.80891Z	  '/image/download/director/profile.jpg'
2026-02-08T13:43:00.808999Z	]
2026-02-08T13:43:00.809118Z	[ImageOptimizer] baseName: yukari_image, pagePath: director
2026-02-08T13:43:00.809234Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:00.809337Z	  '/image/download/director/yukari_image-md.webp',
2026-02-08T13:43:00.809437Z	  '/image/download/director/yukari_image-sm.webp',
2026-02-08T13:43:00.809543Z	  '/image/download/director/yukari_image-lg.webp',
2026-02-08T13:43:00.809656Z	  '/image/download/director/yukari_image.png',
2026-02-08T13:43:00.809761Z	  '/image/download/director/yukari_image.jpg'
2026-02-08T13:43:00.809854Z	]
2026-02-08T13:43:00.809958Z	[ImageOptimizer] baseName: DSC08145_edited_edited_edited, pagePath: director
2026-02-08T13:43:00.810069Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:00.810229Z	  '/image/download/director/DSC08145_edited_edited_edited-md.webp',
2026-02-08T13:43:00.810336Z	  '/image/download/director/DSC08145_edited_edited_edited-sm.webp',
2026-02-08T13:43:00.810426Z	  '/image/download/director/DSC08145_edited_edited_edited-lg.webp',
2026-02-08T13:43:00.810499Z	  '/image/download/director/DSC08145_edited_edited_edited.png',
2026-02-08T13:43:00.810577Z	  '/image/download/director/DSC08145_edited_edited_edited.jpg'
2026-02-08T13:43:00.810672Z	]
2026-02-08T13:43:00.810761Z	[ImageOptimizer] baseName: DSC08141_edited_edited, pagePath: director
2026-02-08T13:43:00.81085Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:00.810939Z	  '/image/download/director/DSC08141_edited_edited-md.webp',
2026-02-08T13:43:00.81103Z	  '/image/download/director/DSC08141_edited_edited-sm.webp',
2026-02-08T13:43:00.811145Z	  '/image/download/director/DSC08141_edited_edited-lg.webp',
2026-02-08T13:43:00.811243Z	  '/image/download/director/DSC08141_edited_edited.png',
2026-02-08T13:43:00.811334Z	  '/image/download/director/DSC08141_edited_edited.jpg'
2026-02-08T13:43:00.81144Z	]
2026-02-08T13:43:00.811555Z	OrgChart data received: {
2026-02-08T13:43:00.811652Z	  object: 'page',
2026-02-08T13:43:00.811742Z	  id: '7a5843cb-66c0-4555-b972-1ee1c3063962',
2026-02-08T13:43:00.811846Z	  created_time: '2024-09-25T09:16:00.000Z',
2026-02-08T13:43:00.811941Z	  last_edited_time: '2024-10-10T01:32:00.000Z',
2026-02-08T13:43:00.812034Z	  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:00.812153Z	  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:00.81225Z	  cover: null,
2026-02-08T13:43:00.812354Z	  icon: null,
2026-02-08T13:43:00.812454Z	  parent: {
2026-02-08T13:43:00.812572Z	    type: 'database_id',
2026-02-08T13:43:00.812669Z	    database_id: '10ca8c0e-cf8c-8062-9eb3-ee7c40cf9005'
2026-02-08T13:43:00.812785Z	  },
2026-02-08T13:43:00.812883Z	  archived: false,
2026-02-08T13:43:00.812972Z	  in_trash: false,
2026-02-08T13:43:00.813061Z	  is_locked: false,
2026-02-08T13:43:00.813172Z	  properties: {
2026-02-08T13:43:00.813269Z	    image_en: { id: 'AnK%3A', type: 'files', files: [Array] },
2026-02-08T13:43:00.813362Z	    en: { id: 'BggW', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:43:00.81346Z	    text_en: { id: 'OQjU', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:43:00.813542Z	    image: { id: 'zJ%3Cu', type: 'files', files: [Array] },
2026-02-08T13:43:00.81388Z	    text: { id: '%7Dp_r', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:43:00.814035Z	    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:43:00.81417Z	  },
2026-02-08T13:43:00.814335Z	  url: 'https://www.notion.so/7a5843cb66c04555b9721ee1c3063962',
2026-02-08T13:43:00.81444Z	  public_url: null
2026-02-08T13:43:00.814593Z	}
2026-02-08T13:43:00.814881Z	OrgChart entity created: OrganisationFlowChartEntity {
2026-02-08T13:43:00.81524Z	  title: 'Governance Chart',
2026-02-08T13:43:00.81534Z	  text: [
2026-02-08T13:43:00.815407Z	    {
2026-02-08T13:43:00.815464Z	      type: 'text',
2026-02-08T13:43:00.815542Z	      text: [Object],
2026-02-08T13:43:00.815599Z	      annotations: [Object],
2026-02-08T13:43:00.815749Z	      plain_text: "Tucson Japanese Language School's Board of Directors oversees the school’s operation, provides guidance and advice, implements short and long-term plans, and carries out these plans in cooperation with faculty, staff, and volunteer parents for the school to pursue its mission and sustain as a healthy organization. The board of directors supports the operation team that runs the school daily.",
2026-02-08T13:43:00.815855Z	      href: null
2026-02-08T13:43:00.815916Z	    }
2026-02-08T13:43:00.815968Z	  ],
2026-02-08T13:43:00.816023Z	  image: {
2026-02-08T13:43:00.816077Z	    baseName: 'governance_chart_en',
2026-02-08T13:43:00.816165Z	    pagePath: 'org_chart',
2026-02-08T13:43:00.816223Z	    alt: 'governance_chart_en.jpg',
2026-02-08T13:43:00.816279Z	    width: null,
2026-02-08T13:43:00.81633Z	    height: null
2026-02-08T13:43:00.816384Z	  }
2026-02-08T13:43:00.816438Z	}
2026-02-08T13:43:00.816498Z	[ImageOptimizer] baseName: governance_chart_en, pagePath: org_chart
2026-02-08T13:43:00.816551Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:00.816616Z	  '/image/download/org_chart/governance_chart_en-md.webp',
2026-02-08T13:43:00.816667Z	  '/image/download/org_chart/governance_chart_en-sm.webp',
2026-02-08T13:43:00.81672Z	  '/image/download/org_chart/governance_chart_en-lg.webp',
2026-02-08T13:43:00.816773Z	  '/image/download/org_chart/governance_chart_en.png',
2026-02-08T13:43:00.816825Z	  '/image/download/org_chart/governance_chart_en.jpg'
2026-02-08T13:43:00.81688Z	]
2026-02-08T13:43:00.820215Z	🚫 キャッシュ無効 (roleList): 直接APIから取得します
2026-02-08T13:43:00.820407Z	🚫 キャッシュ無効 (staff): 直接APIから取得します
2026-02-08T13:43:00.820542Z	🌐 Notion APIから取得中: roleList
2026-02-08T13:43:00.820667Z	🌐 Notion APIから取得中: staff
2026-02-08T13:43:00.884107Z	already exist.
2026-02-08T13:43:00.911137Z	already exist.
2026-02-08T13:43:00.972268Z	already exist.
2026-02-08T13:43:01.016263Z	✅ API取得完了: roleList (6件)
2026-02-08T13:43:01.131865Z	✅ API取得完了: staff (16件)
2026-02-08T13:43:03.748818Z	Staff data received: [
2026-02-08T13:43:03.749037Z	  {
2026-02-08T13:43:03.749274Z	    object: 'page',
2026-02-08T13:43:03.749452Z	    id: '102a8c0e-cf8c-8032-ba7b-c79866f660eb',
2026-02-08T13:43:03.749644Z	    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:43:03.749731Z	    last_edited_time: '2025-06-21T20:03:00.000Z',
2026-02-08T13:43:03.749865Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.749992Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.750087Z	    cover: null,
2026-02-08T13:43:03.750205Z	    icon: null,
2026-02-08T13:43:03.750298Z	    parent: {
2026-02-08T13:43:03.750393Z	      type: 'database_id',
2026-02-08T13:43:03.750556Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.75083Z	    },
2026-02-08T13:43:03.751079Z	    archived: false,
2026-02-08T13:43:03.751291Z	    in_trash: false,
2026-02-08T13:43:03.751354Z	    is_locked: false,
2026-02-08T13:43:03.751626Z	    properties: {
2026-02-08T13:43:03.751712Z	      text_en: [Object],
2026-02-08T13:43:03.75184Z	      name_en: [Object],
2026-02-08T13:43:03.751904Z	      image: [Object],
2026-02-08T13:43:03.751959Z	      role: [Object],
2026-02-08T13:43:03.752013Z	      text: [Object],
2026-02-08T13:43:03.752069Z	      ordering: [Object],
2026-02-08T13:43:03.752159Z	      name: [Object]
2026-02-08T13:43:03.752224Z	    },
2026-02-08T13:43:03.752279Z	    url: 'https://www.notion.so/102a8c0ecf8c8032ba7bc79866f660eb',
2026-02-08T13:43:03.752347Z	    public_url: null
2026-02-08T13:43:03.752405Z	  },
2026-02-08T13:43:03.752463Z	  {
2026-02-08T13:43:03.752527Z	    object: 'page',
2026-02-08T13:43:03.752582Z	    id: '102a8c0e-cf8c-803e-8c91-cdc26abf8c7b',
2026-02-08T13:43:03.752637Z	    created_time: '2024-09-15T21:02:00.000Z',
2026-02-08T13:43:03.752697Z	    last_edited_time: '2025-09-04T07:50:00.000Z',
2026-02-08T13:43:03.752756Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.752811Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.752865Z	    cover: null,
2026-02-08T13:43:03.752925Z	    icon: null,
2026-02-08T13:43:03.75298Z	    parent: {
2026-02-08T13:43:03.753037Z	      type: 'database_id',
2026-02-08T13:43:03.753112Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.753189Z	    },
2026-02-08T13:43:03.753244Z	    archived: false,
2026-02-08T13:43:03.753311Z	    in_trash: false,
2026-02-08T13:43:03.753371Z	    is_locked: false,
2026-02-08T13:43:03.753428Z	    properties: {
2026-02-08T13:43:03.753486Z	      text_en: [Object],
2026-02-08T13:43:03.753541Z	      name_en: [Object],
2026-02-08T13:43:03.753594Z	      image: [Object],
2026-02-08T13:43:03.753646Z	      role: [Object],
2026-02-08T13:43:03.753704Z	      text: [Object],
2026-02-08T13:43:03.753771Z	      ordering: [Object],
2026-02-08T13:43:03.753826Z	      name: [Object]
2026-02-08T13:43:03.75388Z	    },
2026-02-08T13:43:03.753933Z	    url: 'https://www.notion.so/102a8c0ecf8c803e8c91cdc26abf8c7b',
2026-02-08T13:43:03.753986Z	    public_url: null
2026-02-08T13:43:03.754038Z	  },
2026-02-08T13:43:03.75409Z	  {
2026-02-08T13:43:03.754385Z	    object: 'page',
2026-02-08T13:43:03.754514Z	    id: '102a8c0e-cf8c-803e-9b33-f2d6b41189c5',
2026-02-08T13:43:03.754621Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:43:03.754726Z	    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:43:03.754821Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.754918Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.755043Z	    cover: null,
2026-02-08T13:43:03.755189Z	    icon: null,
2026-02-08T13:43:03.755295Z	    parent: {
2026-02-08T13:43:03.755389Z	      type: 'database_id',
2026-02-08T13:43:03.755477Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.755576Z	    },
2026-02-08T13:43:03.755674Z	    archived: false,
2026-02-08T13:43:03.755789Z	    in_trash: false,
2026-02-08T13:43:03.75591Z	    is_locked: false,
2026-02-08T13:43:03.756021Z	    properties: {
2026-02-08T13:43:03.756145Z	      text_en: [Object],
2026-02-08T13:43:03.75625Z	      name_en: [Object],
2026-02-08T13:43:03.756354Z	      image: [Object],
2026-02-08T13:43:03.756453Z	      role: [Object],
2026-02-08T13:43:03.756543Z	      text: [Object],
2026-02-08T13:43:03.756641Z	      ordering: [Object],
2026-02-08T13:43:03.756745Z	      name: [Object]
2026-02-08T13:43:03.756836Z	    },
2026-02-08T13:43:03.756925Z	    url: 'https://www.notion.so/102a8c0ecf8c803e9b33f2d6b41189c5',
2026-02-08T13:43:03.757021Z	    public_url: null
2026-02-08T13:43:03.757215Z	  },
2026-02-08T13:43:03.75733Z	  {
2026-02-08T13:43:03.757418Z	    object: 'page',
2026-02-08T13:43:03.757502Z	    id: '102a8c0e-cf8c-80a2-9cba-f21c57ac7a99',
2026-02-08T13:43:03.757668Z	    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:43:03.757737Z	    last_edited_time: '2025-09-04T07:52:00.000Z',
2026-02-08T13:43:03.757791Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.757852Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.75791Z	    cover: null,
2026-02-08T13:43:03.757964Z	    icon: null,
2026-02-08T13:43:03.758018Z	    parent: {
2026-02-08T13:43:03.758072Z	      type: 'database_id',
2026-02-08T13:43:03.7582Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.758357Z	    },
2026-02-08T13:43:03.75844Z	    archived: false,
2026-02-08T13:43:03.758495Z	    in_trash: false,
2026-02-08T13:43:03.758558Z	    is_locked: false,
2026-02-08T13:43:03.758612Z	    properties: {
2026-02-08T13:43:03.758665Z	      text_en: [Object],
2026-02-08T13:43:03.758718Z	      name_en: [Object],
2026-02-08T13:43:03.75877Z	      image: [Object],
2026-02-08T13:43:03.758821Z	      role: [Object],
2026-02-08T13:43:03.758875Z	      text: [Object],
2026-02-08T13:43:03.758931Z	      ordering: [Object],
2026-02-08T13:43:03.75899Z	      name: [Object]
2026-02-08T13:43:03.759046Z	    },
2026-02-08T13:43:03.759129Z	    url: 'https://www.notion.so/102a8c0ecf8c80a29cbaf21c57ac7a99',
2026-02-08T13:43:03.759198Z	    public_url: null
2026-02-08T13:43:03.759254Z	  },
2026-02-08T13:43:03.759321Z	  {
2026-02-08T13:43:03.75938Z	    object: 'page',
2026-02-08T13:43:03.759433Z	    id: '102a8c0e-cf8c-80b6-a18a-f9a071308672',
2026-02-08T13:43:03.759486Z	    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:43:03.759556Z	    last_edited_time: '2025-09-04T07:56:00.000Z',
2026-02-08T13:43:03.759623Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.759685Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.7598Z	    cover: null,
2026-02-08T13:43:03.759865Z	    icon: null,
2026-02-08T13:43:03.759918Z	    parent: {
2026-02-08T13:43:03.75997Z	      type: 'database_id',
2026-02-08T13:43:03.760026Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.760214Z	    },
2026-02-08T13:43:03.760299Z	    archived: false,
2026-02-08T13:43:03.760361Z	    in_trash: false,
2026-02-08T13:43:03.760427Z	    is_locked: false,
2026-02-08T13:43:03.760488Z	    properties: {
2026-02-08T13:43:03.760562Z	      text_en: [Object],
2026-02-08T13:43:03.760618Z	      name_en: [Object],
2026-02-08T13:43:03.760679Z	      image: [Object],
2026-02-08T13:43:03.760736Z	      role: [Object],
2026-02-08T13:43:03.76079Z	      text: [Object],
2026-02-08T13:43:03.760848Z	      ordering: [Object],
2026-02-08T13:43:03.760901Z	      name: [Object]
2026-02-08T13:43:03.761034Z	    },
2026-02-08T13:43:03.761212Z	    url: 'https://www.notion.so/102a8c0ecf8c80b6a18af9a071308672',
2026-02-08T13:43:03.761337Z	    public_url: null
2026-02-08T13:43:03.761443Z	  },
2026-02-08T13:43:03.761539Z	  {
2026-02-08T13:43:03.761629Z	    object: 'page',
2026-02-08T13:43:03.761752Z	    id: '102a8c0e-cf8c-80c8-9391-cb8332a09711',
2026-02-08T13:43:03.761878Z	    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:43:03.761986Z	    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:43:03.762084Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.76233Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.762769Z	    cover: null,
2026-02-08T13:43:03.762864Z	    icon: null,
2026-02-08T13:43:03.762959Z	    parent: {
2026-02-08T13:43:03.763061Z	      type: 'database_id',
2026-02-08T13:43:03.763232Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.763401Z	    },
2026-02-08T13:43:03.763533Z	    archived: false,
2026-02-08T13:43:03.763804Z	    in_trash: false,
2026-02-08T13:43:03.763885Z	    is_locked: false,
2026-02-08T13:43:03.76401Z	    properties: {
2026-02-08T13:43:03.764115Z	      text_en: [Object],
2026-02-08T13:43:03.764193Z	      name_en: [Object],
2026-02-08T13:43:03.764252Z	      image: [Object],
2026-02-08T13:43:03.764313Z	      role: [Object],
2026-02-08T13:43:03.764371Z	      text: [Object],
2026-02-08T13:43:03.764544Z	      ordering: [Object],
2026-02-08T13:43:03.764617Z	      name: [Object]
2026-02-08T13:43:03.76471Z	    },
2026-02-08T13:43:03.764807Z	    url: 'https://www.notion.so/102a8c0ecf8c80c89391cb8332a09711',
2026-02-08T13:43:03.764865Z	    public_url: null
2026-02-08T13:43:03.764918Z	  },
2026-02-08T13:43:03.764976Z	  {
2026-02-08T13:43:03.765051Z	    object: 'page',
2026-02-08T13:43:03.765139Z	    id: '102a8c0e-cf8c-80cd-a577-c9351f661364',
2026-02-08T13:43:03.765208Z	    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:43:03.765263Z	    last_edited_time: '2025-09-02T05:48:00.000Z',
2026-02-08T13:43:03.765316Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.765386Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.765441Z	    cover: null,
2026-02-08T13:43:03.765494Z	    icon: null,
2026-02-08T13:43:03.765548Z	    parent: {
2026-02-08T13:43:03.7656Z	      type: 'database_id',
2026-02-08T13:43:03.765652Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.765705Z	    },
2026-02-08T13:43:03.765758Z	    archived: false,
2026-02-08T13:43:03.765995Z	    in_trash: false,
2026-02-08T13:43:03.766162Z	    is_locked: false,
2026-02-08T13:43:03.766295Z	    properties: {
2026-02-08T13:43:03.766424Z	      text_en: [Object],
2026-02-08T13:43:03.76653Z	      name_en: [Object],
2026-02-08T13:43:03.766623Z	      image: [Object],
2026-02-08T13:43:03.766726Z	      role: [Object],
2026-02-08T13:43:03.766796Z	      text: [Object],
2026-02-08T13:43:03.766868Z	      ordering: [Object],
2026-02-08T13:43:03.766952Z	      name: [Object]
2026-02-08T13:43:03.767074Z	    },
2026-02-08T13:43:03.767214Z	    url: 'https://www.notion.so/102a8c0ecf8c80cda577c9351f661364',
2026-02-08T13:43:03.767336Z	    public_url: null
2026-02-08T13:43:03.767436Z	  },
2026-02-08T13:43:03.767537Z	  {
2026-02-08T13:43:03.767615Z	    object: 'page',
2026-02-08T13:43:03.767697Z	    id: '102a8c0e-cf8c-80e6-9519-d25acdcfd0ec',
2026-02-08T13:43:03.767787Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:43:03.767875Z	    last_edited_time: '2025-09-04T08:02:00.000Z',
2026-02-08T13:43:03.76798Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.768084Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.768196Z	    cover: null,
2026-02-08T13:43:03.768279Z	    icon: null,
2026-02-08T13:43:03.768357Z	    parent: {
2026-02-08T13:43:03.768459Z	      type: 'database_id',
2026-02-08T13:43:03.768558Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.768658Z	    },
2026-02-08T13:43:03.768764Z	    archived: false,
2026-02-08T13:43:03.768851Z	    in_trash: false,
2026-02-08T13:43:03.76895Z	    is_locked: false,
2026-02-08T13:43:03.769053Z	    properties: {
2026-02-08T13:43:03.76918Z	      text_en: [Object],
2026-02-08T13:43:03.769286Z	      name_en: [Object],
2026-02-08T13:43:03.769446Z	      image: [Object],
2026-02-08T13:43:03.769533Z	      role: [Object],
2026-02-08T13:43:03.769589Z	      text: [Object],
2026-02-08T13:43:03.769642Z	      ordering: [Object],
2026-02-08T13:43:03.769697Z	      name: [Object]
2026-02-08T13:43:03.769749Z	    },
2026-02-08T13:43:03.769813Z	    url: 'https://www.notion.so/102a8c0ecf8c80e69519d25acdcfd0ec',
2026-02-08T13:43:03.769867Z	    public_url: null
2026-02-08T13:43:03.769934Z	  },
2026-02-08T13:43:03.769987Z	  {
2026-02-08T13:43:03.770047Z	    object: 'page',
2026-02-08T13:43:03.770116Z	    id: '102a8c0e-cf8c-80f9-bef0-dd401debb8af',
2026-02-08T13:43:03.770183Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:43:03.770243Z	    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:43:03.770319Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.770375Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.770429Z	    cover: null,
2026-02-08T13:43:03.77048Z	    icon: null,
2026-02-08T13:43:03.770531Z	    parent: {
2026-02-08T13:43:03.770588Z	      type: 'database_id',
2026-02-08T13:43:03.77064Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.770691Z	    },
2026-02-08T13:43:03.770744Z	    archived: false,
2026-02-08T13:43:03.770794Z	    in_trash: false,
2026-02-08T13:43:03.770845Z	    is_locked: false,
2026-02-08T13:43:03.770896Z	    properties: {
2026-02-08T13:43:03.770947Z	      text_en: [Object],
2026-02-08T13:43:03.770997Z	      name_en: [Object],
2026-02-08T13:43:03.771064Z	      image: [Object],
2026-02-08T13:43:03.77114Z	      role: [Object],
2026-02-08T13:43:03.771197Z	      text: [Object],
2026-02-08T13:43:03.771248Z	      ordering: [Object],
2026-02-08T13:43:03.77131Z	      name: [Object]
2026-02-08T13:43:03.771362Z	    },
2026-02-08T13:43:03.771415Z	    url: 'https://www.notion.so/102a8c0ecf8c80f9bef0dd401debb8af',
2026-02-08T13:43:03.771486Z	    public_url: null
2026-02-08T13:43:03.771537Z	  },
2026-02-08T13:43:03.771591Z	  {
2026-02-08T13:43:03.771642Z	    object: 'page',
2026-02-08T13:43:03.771694Z	    id: '219a8c0e-cf8c-8086-95b6-dbe56a73880d',
2026-02-08T13:43:03.771747Z	    created_time: '2025-06-21T20:02:00.000Z',
2026-02-08T13:43:03.771805Z	    last_edited_time: '2025-09-04T07:51:00.000Z',
2026-02-08T13:43:03.771858Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.771909Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.77196Z	    cover: null,
2026-02-08T13:43:03.772018Z	    icon: null,
2026-02-08T13:43:03.772073Z	    parent: {
2026-02-08T13:43:03.772153Z	      type: 'database_id',
2026-02-08T13:43:03.77221Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.772264Z	    },
2026-02-08T13:43:03.772315Z	    archived: false,
2026-02-08T13:43:03.772366Z	    in_trash: false,
2026-02-08T13:43:03.772419Z	    is_locked: false,
2026-02-08T13:43:03.772475Z	    properties: {
2026-02-08T13:43:03.772526Z	      text_en: [Object],
2026-02-08T13:43:03.772577Z	      name_en: [Object],
2026-02-08T13:43:03.772628Z	      image: [Object],
2026-02-08T13:43:03.772678Z	      role: [Object],
2026-02-08T13:43:03.772738Z	      text: [Object],
2026-02-08T13:43:03.772791Z	      ordering: [Object],
2026-02-08T13:43:03.772842Z	      name: [Object]
2026-02-08T13:43:03.772892Z	    },
2026-02-08T13:43:03.772943Z	    url: 'https://www.notion.so/219a8c0ecf8c808695b6dbe56a73880d',
2026-02-08T13:43:03.772994Z	    public_url: null
2026-02-08T13:43:03.773062Z	  },
2026-02-08T13:43:03.773147Z	  {
2026-02-08T13:43:03.773206Z	    object: 'page',
2026-02-08T13:43:03.773258Z	    id: '262a8c0e-cf8c-8087-9157-eccd746e636d',
2026-02-08T13:43:03.77332Z	    created_time: '2025-09-02T05:49:00.000Z',
2026-02-08T13:43:03.773376Z	    last_edited_time: '2025-09-04T07:58:00.000Z',
2026-02-08T13:43:03.773573Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.773779Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.773864Z	    cover: null,
2026-02-08T13:43:03.773933Z	    icon: null,
2026-02-08T13:43:03.773988Z	    parent: {
2026-02-08T13:43:03.774049Z	      type: 'database_id',
2026-02-08T13:43:03.774147Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.77422Z	    },
2026-02-08T13:43:03.774275Z	    archived: false,
2026-02-08T13:43:03.774329Z	    in_trash: false,
2026-02-08T13:43:03.774389Z	    is_locked: false,
2026-02-08T13:43:03.774447Z	    properties: {
2026-02-08T13:43:03.774502Z	      text_en: [Object],
2026-02-08T13:43:03.774606Z	      name_en: [Object],
2026-02-08T13:43:03.774675Z	      image: [Object],
2026-02-08T13:43:03.774729Z	      role: [Object],
2026-02-08T13:43:03.774877Z	      text: [Object],
2026-02-08T13:43:03.774957Z	      ordering: [Object],
2026-02-08T13:43:03.775021Z	      name: [Object]
2026-02-08T13:43:03.775076Z	    },
2026-02-08T13:43:03.775358Z	    url: 'https://www.notion.so/262a8c0ecf8c80879157eccd746e636d',
2026-02-08T13:43:03.775459Z	    public_url: null
2026-02-08T13:43:03.775575Z	  },
2026-02-08T13:43:03.775705Z	  {
2026-02-08T13:43:03.775775Z	    object: 'page',
2026-02-08T13:43:03.77583Z	    id: '4377c087-e782-46e3-9eaf-261863837f19',
2026-02-08T13:43:03.775885Z	    created_time: '2024-09-15T21:13:00.000Z',
2026-02-08T13:43:03.775938Z	    last_edited_time: '2025-06-21T20:04:00.000Z',
2026-02-08T13:43:03.775993Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.776054Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.776144Z	    cover: null,
2026-02-08T13:43:03.776257Z	    icon: null,
2026-02-08T13:43:03.776327Z	    parent: {
2026-02-08T13:43:03.776388Z	      type: 'database_id',
2026-02-08T13:43:03.776545Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.776688Z	    },
2026-02-08T13:43:03.776814Z	    archived: false,
2026-02-08T13:43:03.776893Z	    in_trash: false,
2026-02-08T13:43:03.776948Z	    is_locked: false,
2026-02-08T13:43:03.777021Z	    properties: {
2026-02-08T13:43:03.777128Z	      text_en: [Object],
2026-02-08T13:43:03.779227Z	      name_en: [Object],
2026-02-08T13:43:03.7793Z	      image: [Object],
2026-02-08T13:43:03.779361Z	      role: [Object],
2026-02-08T13:43:03.779414Z	      text: [Object],
2026-02-08T13:43:03.779468Z	      ordering: [Object],
2026-02-08T13:43:03.779533Z	      name: [Object]
2026-02-08T13:43:03.779593Z	    },
2026-02-08T13:43:03.779652Z	    url: 'https://www.notion.so/4377c087e78246e39eaf261863837f19',
2026-02-08T13:43:03.779706Z	    public_url: null
2026-02-08T13:43:03.77976Z	  },
2026-02-08T13:43:03.779814Z	  {
2026-02-08T13:43:03.779869Z	    object: 'page',
2026-02-08T13:43:03.779921Z	    id: '9a170ec8-c017-4cce-a0dd-d62f2edb82b6',
2026-02-08T13:43:03.779974Z	    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:43:03.780026Z	    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:43:03.780078Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.780154Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.780215Z	    cover: null,
2026-02-08T13:43:03.780273Z	    icon: null,
2026-02-08T13:43:03.780327Z	    parent: {
2026-02-08T13:43:03.780387Z	      type: 'database_id',
2026-02-08T13:43:03.780445Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.780506Z	    },
2026-02-08T13:43:03.780569Z	    archived: false,
2026-02-08T13:43:03.780626Z	    in_trash: false,
2026-02-08T13:43:03.780683Z	    is_locked: false,
2026-02-08T13:43:03.780736Z	    properties: {
2026-02-08T13:43:03.780789Z	      text_en: [Object],
2026-02-08T13:43:03.780841Z	      name_en: [Object],
2026-02-08T13:43:03.780895Z	      image: [Object],
2026-02-08T13:43:03.780948Z	      role: [Object],
2026-02-08T13:43:03.781006Z	      text: [Object],
2026-02-08T13:43:03.781065Z	      ordering: [Object],
2026-02-08T13:43:03.781139Z	      name: [Object]
2026-02-08T13:43:03.781195Z	    },
2026-02-08T13:43:03.781251Z	    url: 'https://www.notion.so/9a170ec8c0174ccea0ddd62f2edb82b6',
2026-02-08T13:43:03.781305Z	    public_url: null
2026-02-08T13:43:03.781363Z	  },
2026-02-08T13:43:03.781423Z	  {
2026-02-08T13:43:03.781481Z	    object: 'page',
2026-02-08T13:43:03.781539Z	    id: 'c452fe7f-4be8-4bdb-9afb-a32c10afbcab',
2026-02-08T13:43:03.781595Z	    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:43:03.781648Z	    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:43:03.7817Z	    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.781753Z	    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:43:03.781816Z	    cover: null,
2026-02-08T13:43:03.78187Z	    icon: null,
2026-02-08T13:43:03.78193Z	    parent: {
2026-02-08T13:43:03.781982Z	      type: 'database_id',
2026-02-08T13:43:03.782034Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.782086Z	    },
2026-02-08T13:43:03.782171Z	    archived: false,
2026-02-08T13:43:03.782233Z	    in_trash: false,
2026-02-08T13:43:03.782291Z	    is_locked: false,
2026-02-08T13:43:03.782342Z	    properties: {
2026-02-08T13:43:03.782394Z	      text_en: [Object],
2026-02-08T13:43:03.782446Z	      name_en: [Object],
2026-02-08T13:43:03.782503Z	      image: [Object],
2026-02-08T13:43:03.782554Z	      role: [Object],
2026-02-08T13:43:03.782612Z	      text: [Object],
2026-02-08T13:43:03.782665Z	      ordering: [Object],
2026-02-08T13:43:03.782718Z	      name: [Object]
2026-02-08T13:43:03.782775Z	    },
2026-02-08T13:43:03.782826Z	    url: 'https://www.notion.so/c452fe7f4be84bdb9afba32c10afbcab',
2026-02-08T13:43:03.782877Z	    public_url: null
2026-02-08T13:43:03.782932Z	  },
2026-02-08T13:43:03.782991Z	  {
2026-02-08T13:43:03.783048Z	    object: 'page',
2026-02-08T13:43:03.783119Z	    id: 'd65a07cd-7eec-4319-8dbb-f05addf412a9',
2026-02-08T13:43:03.783181Z	    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:43:03.783234Z	    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:43:03.783288Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.78334Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.783393Z	    cover: null,
2026-02-08T13:43:03.783452Z	    icon: null,
2026-02-08T13:43:03.783506Z	    parent: {
2026-02-08T13:43:03.783565Z	      type: 'database_id',
2026-02-08T13:43:03.783628Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.783682Z	    },
2026-02-08T13:43:03.783739Z	    archived: false,
2026-02-08T13:43:03.783795Z	    in_trash: false,
2026-02-08T13:43:03.783849Z	    is_locked: false,
2026-02-08T13:43:03.783916Z	    properties: {
2026-02-08T13:43:03.78397Z	      text_en: [Object],
2026-02-08T13:43:03.784021Z	      name_en: [Object],
2026-02-08T13:43:03.784073Z	      image: [Object],
2026-02-08T13:43:03.784144Z	      role: [Object],
2026-02-08T13:43:03.784199Z	      text: [Object],
2026-02-08T13:43:03.784251Z	      ordering: [Object],
2026-02-08T13:43:03.784305Z	      name: [Object]
2026-02-08T13:43:03.784363Z	    },
2026-02-08T13:43:03.784416Z	    url: 'https://www.notion.so/d65a07cd7eec43198dbbf05addf412a9',
2026-02-08T13:43:03.784474Z	    public_url: null
2026-02-08T13:43:03.784533Z	  },
2026-02-08T13:43:03.784585Z	  {
2026-02-08T13:43:03.784646Z	    object: 'page',
2026-02-08T13:43:03.784723Z	    id: 'f9633a2c-0dff-4b02-9161-9139ab8919d0',
2026-02-08T13:43:03.784781Z	    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:43:03.784838Z	    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:43:03.784901Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.784954Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.785008Z	    cover: null,
2026-02-08T13:43:03.785078Z	    icon: null,
2026-02-08T13:43:03.785159Z	    parent: {
2026-02-08T13:43:03.785221Z	      type: 'database_id',
2026-02-08T13:43:03.785274Z	      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:43:03.785392Z	    },
2026-02-08T13:43:03.785472Z	    archived: false,
2026-02-08T13:43:03.785534Z	    in_trash: false,
2026-02-08T13:43:03.785588Z	    is_locked: false,
2026-02-08T13:43:03.785646Z	    properties: {
2026-02-08T13:43:03.785704Z	      text_en: [Object],
2026-02-08T13:43:03.785756Z	      name_en: [Object],
2026-02-08T13:43:03.78581Z	      image: [Object],
2026-02-08T13:43:03.785867Z	      role: [Object],
2026-02-08T13:43:03.785933Z	      text: [Object],
2026-02-08T13:43:03.785987Z	      ordering: [Object],
2026-02-08T13:43:03.786047Z	      name: [Object]
2026-02-08T13:43:03.786125Z	    },
2026-02-08T13:43:03.788231Z	    url: 'https://www.notion.so/f9633a2c0dff4b0291619139ab8919d0',
2026-02-08T13:43:03.788305Z	    public_url: null
2026-02-08T13:43:03.788365Z	  }
2026-02-08T13:43:03.788426Z	]
2026-02-08T13:43:03.78848Z	Role data received: [
2026-02-08T13:43:03.788545Z	  {
2026-02-08T13:43:03.788599Z	    object: 'page',
2026-02-08T13:43:03.78865Z	    id: '122a8c0e-cf8c-808e-88c5-c0446f064f99',
2026-02-08T13:43:03.788702Z	    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:43:03.788754Z	    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:43:03.788805Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.788858Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.788917Z	    cover: null,
2026-02-08T13:43:03.788974Z	    icon: null,
2026-02-08T13:43:03.789032Z	    parent: {
2026-02-08T13:43:03.789089Z	      type: 'database_id',
2026-02-08T13:43:03.789166Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:43:03.78922Z	    },
2026-02-08T13:43:03.78928Z	    archived: false,
2026-02-08T13:43:03.789349Z	    in_trash: false,
2026-02-08T13:43:03.789409Z	    is_locked: false,
2026-02-08T13:43:03.789463Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:43:03.789515Z	    url: 'https://www.notion.so/122a8c0ecf8c808e88c5c0446f064f99',
2026-02-08T13:43:03.789574Z	    public_url: null
2026-02-08T13:43:03.789629Z	  },
2026-02-08T13:43:03.789687Z	  {
2026-02-08T13:43:03.789745Z	    object: 'page',
2026-02-08T13:43:03.789806Z	    id: '122a8c0e-cf8c-80ca-bded-ded104c18d96',
2026-02-08T13:43:03.789859Z	    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:43:03.789922Z	    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:43:03.789977Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.790031Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.79009Z	    cover: null,
2026-02-08T13:43:03.790165Z	    icon: null,
2026-02-08T13:43:03.790221Z	    parent: {
2026-02-08T13:43:03.790274Z	      type: 'database_id',
2026-02-08T13:43:03.790342Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:43:03.790402Z	    },
2026-02-08T13:43:03.79046Z	    archived: false,
2026-02-08T13:43:03.790518Z	    in_trash: false,
2026-02-08T13:43:03.790575Z	    is_locked: false,
2026-02-08T13:43:03.790637Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:43:03.7907Z	    url: 'https://www.notion.so/122a8c0ecf8c80cabdedded104c18d96',
2026-02-08T13:43:03.790758Z	    public_url: null
2026-02-08T13:43:03.790816Z	  },
2026-02-08T13:43:03.790874Z	  {
2026-02-08T13:43:03.790926Z	    object: 'page',
2026-02-08T13:43:03.790985Z	    id: '122a8c0e-cf8c-80d5-85d2-d4a0673c1797',
2026-02-08T13:43:03.791044Z	    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:43:03.793139Z	    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:43:03.793252Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.793322Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.793387Z	    cover: null,
2026-02-08T13:43:03.79345Z	    icon: null,
2026-02-08T13:43:03.793506Z	    parent: {
2026-02-08T13:43:03.79356Z	      type: 'database_id',
2026-02-08T13:43:03.793619Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:43:03.793673Z	    },
2026-02-08T13:43:03.793731Z	    archived: false,
2026-02-08T13:43:03.793783Z	    in_trash: false,
2026-02-08T13:43:03.793836Z	    is_locked: false,
2026-02-08T13:43:03.793891Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:43:03.793949Z	    url: 'https://www.notion.so/122a8c0ecf8c80d585d2d4a0673c1797',
2026-02-08T13:43:03.794023Z	    public_url: null
2026-02-08T13:43:03.794084Z	  },
2026-02-08T13:43:03.79417Z	  {
2026-02-08T13:43:03.794232Z	    object: 'page',
2026-02-08T13:43:03.794289Z	    id: '25697b18-c8e5-48aa-948f-4716cf5e36e8',
2026-02-08T13:43:03.794351Z	    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:43:03.794408Z	    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:43:03.794465Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.794519Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.794573Z	    cover: null,
2026-02-08T13:43:03.794625Z	    icon: null,
2026-02-08T13:43:03.794683Z	    parent: {
2026-02-08T13:43:03.794735Z	      type: 'database_id',
2026-02-08T13:43:03.794794Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:43:03.794853Z	    },
2026-02-08T13:43:03.794911Z	    archived: false,
2026-02-08T13:43:03.79497Z	    in_trash: false,
2026-02-08T13:43:03.795027Z	    is_locked: false,
2026-02-08T13:43:03.795079Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:43:03.795162Z	    url: 'https://www.notion.so/25697b18c8e548aa948f4716cf5e36e8',
2026-02-08T13:43:03.795223Z	    public_url: null
2026-02-08T13:43:03.795282Z	  },
2026-02-08T13:43:03.795344Z	  {
2026-02-08T13:43:03.795399Z	    object: 'page',
2026-02-08T13:43:03.795454Z	    id: '31cae8ce-3c54-4a0b-9b18-639b4de347b3',
2026-02-08T13:43:03.797142Z	    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:43:03.797241Z	    last_edited_time: '2024-10-17T01:17:00.000Z',
2026-02-08T13:43:03.797303Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.797368Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.797422Z	    cover: null,
2026-02-08T13:43:03.797481Z	    icon: null,
2026-02-08T13:43:03.797544Z	    parent: {
2026-02-08T13:43:03.797605Z	      type: 'database_id',
2026-02-08T13:43:03.797665Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:43:03.797718Z	    },
2026-02-08T13:43:03.797782Z	    archived: false,
2026-02-08T13:43:03.797836Z	    in_trash: false,
2026-02-08T13:43:03.797888Z	    is_locked: false,
2026-02-08T13:43:03.79794Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:43:03.797994Z	    url: 'https://www.notion.so/31cae8ce3c544a0b9b18639b4de347b3',
2026-02-08T13:43:03.798046Z	    public_url: null
2026-02-08T13:43:03.798117Z	  },
2026-02-08T13:43:03.798187Z	  {
2026-02-08T13:43:03.798246Z	    object: 'page',
2026-02-08T13:43:03.798297Z	    id: '9ad23647-a425-4c2a-8538-b77219acc481',
2026-02-08T13:43:03.798364Z	    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:43:03.798416Z	    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:43:03.798471Z	    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.798531Z	    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:43:03.79859Z	    cover: null,
2026-02-08T13:43:03.798647Z	    icon: null,
2026-02-08T13:43:03.798707Z	    parent: {
2026-02-08T13:43:03.798761Z	      type: 'database_id',
2026-02-08T13:43:03.798813Z	      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:43:03.798864Z	    },
2026-02-08T13:43:03.798923Z	    archived: false,
2026-02-08T13:43:03.798978Z	    in_trash: false,
2026-02-08T13:43:03.79903Z	    is_locked: false,
2026-02-08T13:43:03.79909Z	    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:43:03.799171Z	    url: 'https://www.notion.so/9ad23647a4254c2a8538b77219acc481',
2026-02-08T13:43:03.799224Z	    public_url: null
2026-02-08T13:43:03.799277Z	  }
2026-02-08T13:43:03.799334Z	]
2026-02-08T13:43:03.799393Z	Processed role list: [
2026-02-08T13:43:03.799455Z	  RoleEntity { role: 'nihongo-cafe', title: 'Nihongo Cafe' },
2026-02-08T13:43:03.799514Z	  RoleEntity { role: 'manager', title: 'Manager' },
2026-02-08T13:43:03.799567Z	  RoleEntity { role: 'volunteer', title: 'Volunteer' },
2026-02-08T13:43:03.799624Z	  RoleEntity { role: 'teacher', title: 'Instructor' },
2026-02-08T13:43:03.799676Z	  RoleEntity { role: 'co-director', title: 'Director ' },
2026-02-08T13:43:03.799734Z	  RoleEntity { role: 'assistant', title: 'Assistant' }
2026-02-08T13:43:03.799798Z	]
2026-02-08T13:43:03.799862Z	Processed staff list: [
2026-02-08T13:43:03.79997Z	  StaffEntity {
2026-02-08T13:43:03.800048Z	    name: 'Hitomi McKnight',
2026-02-08T13:43:03.800128Z	    text: [ [Object] ],
2026-02-08T13:43:03.800192Z	    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:43:03.800246Z	    image: {
2026-02-08T13:43:03.800306Z	      baseName: 'mcknight',
2026-02-08T13:43:03.800358Z	      pagePath: 'staff',
2026-02-08T13:43:03.800416Z	      alt: 'mcknight.png',
2026-02-08T13:43:03.800475Z	      width: null,
2026-02-08T13:43:03.800535Z	      height: null
2026-02-08T13:43:03.800586Z	    },
2026-02-08T13:43:03.800638Z	    ordering: 1
2026-02-08T13:43:03.800695Z	  },
2026-02-08T13:43:03.800758Z	  StaffEntity {
2026-02-08T13:43:03.80081Z	    name: 'Minami Espinosa',
2026-02-08T13:43:03.800863Z	    text: [ [Object] ],
2026-02-08T13:43:03.800924Z	    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:43:03.800982Z	    image: {
2026-02-08T13:43:03.801044Z	      baseName: 'minami',
2026-02-08T13:43:03.801122Z	      pagePath: 'staff',
2026-02-08T13:43:03.801182Z	      alt: 'minami.png',
2026-02-08T13:43:03.801243Z	      width: null,
2026-02-08T13:43:03.801298Z	      height: null
2026-02-08T13:43:03.801355Z	    },
2026-02-08T13:43:03.801412Z	    ordering: 2
2026-02-08T13:43:03.80147Z	  },
2026-02-08T13:43:03.801527Z	  StaffEntity {
2026-02-08T13:43:03.80158Z	    name: 'Rie Butler',
2026-02-08T13:43:03.801631Z	    text: [ [Object] ],
2026-02-08T13:43:03.801681Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.801733Z	    image: {
2026-02-08T13:43:03.801785Z	      baseName: 'IMG_1299_edited',
2026-02-08T13:43:03.80184Z	      pagePath: 'staff',
2026-02-08T13:43:03.8019Z	      alt: 'IMG_1299_edited.jpg',
2026-02-08T13:43:03.801958Z	      width: null,
2026-02-08T13:43:03.802015Z	      height: null
2026-02-08T13:43:03.802072Z	    },
2026-02-08T13:43:03.804193Z	    ordering: 3
2026-02-08T13:43:03.804267Z	  },
2026-02-08T13:43:03.80433Z	  StaffEntity {
2026-02-08T13:43:03.804395Z	    name: 'Kokori Schrilla',
2026-02-08T13:43:03.804453Z	    text: [ [Object] ],
2026-02-08T13:43:03.804513Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.804571Z	    image: {
2026-02-08T13:43:03.804623Z	      baseName: 'Kokori-TJS',
2026-02-08T13:43:03.804682Z	      pagePath: 'staff',
2026-02-08T13:43:03.804736Z	      alt: 'Kokori-TJS.jpg',
2026-02-08T13:43:03.804799Z	      width: null,
2026-02-08T13:43:03.804905Z	      height: null
2026-02-08T13:43:03.804965Z	    },
2026-02-08T13:43:03.805023Z	    ordering: 4
2026-02-08T13:43:03.805089Z	  },
2026-02-08T13:43:03.805165Z	  StaffEntity {
2026-02-08T13:43:03.805218Z	    name: 'Katsuya Sato',
2026-02-08T13:43:03.805276Z	    text: [ [Object] ],
2026-02-08T13:43:03.805334Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.805386Z	    image: {
2026-02-08T13:43:03.805448Z	      baseName: 'Katsu-TJS',
2026-02-08T13:43:03.805503Z	      pagePath: 'staff',
2026-02-08T13:43:03.805556Z	      alt: 'Katsu-TJS.jpg',
2026-02-08T13:43:03.805608Z	      width: null,
2026-02-08T13:43:03.805661Z	      height: null
2026-02-08T13:43:03.805712Z	    },
2026-02-08T13:43:03.805765Z	    ordering: 5
2026-02-08T13:43:03.805817Z	  },
2026-02-08T13:43:03.805868Z	  StaffEntity {
2026-02-08T13:43:03.805921Z	    name: 'Meg Nakamura',
2026-02-08T13:43:03.805981Z	    text: [ [Object] ],
2026-02-08T13:43:03.806038Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.806106Z	    image: {
2026-02-08T13:43:03.806163Z	      baseName: 'Meg-TJS',
2026-02-08T13:43:03.80622Z	      pagePath: 'staff',
2026-02-08T13:43:03.808132Z	      alt: 'Meg-TJS.jpg',
2026-02-08T13:43:03.808228Z	      width: null,
2026-02-08T13:43:03.808288Z	      height: null
2026-02-08T13:43:03.808354Z	    },
2026-02-08T13:43:03.808408Z	    ordering: 6
2026-02-08T13:43:03.80846Z	  },
2026-02-08T13:43:03.808513Z	  StaffEntity {
2026-02-08T13:43:03.808569Z	    name: 'Yasir Nemat',
2026-02-08T13:43:03.808621Z	    text: [ [Object] ],
2026-02-08T13:43:03.808673Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.808731Z	    image: {
2026-02-08T13:43:03.808783Z	      baseName: 'IMG_7879_edited',
2026-02-08T13:43:03.808834Z	      pagePath: 'staff',
2026-02-08T13:43:03.808887Z	      alt: 'IMG_7879_edited.jpg',
2026-02-08T13:43:03.80894Z	      width: null,
2026-02-08T13:43:03.808999Z	      height: null
2026-02-08T13:43:03.809056Z	    },
2026-02-08T13:43:03.809129Z	    ordering: 7
2026-02-08T13:43:03.809195Z	  },
2026-02-08T13:43:03.80926Z	  StaffEntity {
2026-02-08T13:43:03.809313Z	    name: 'Miharu Lee',
2026-02-08T13:43:03.809372Z	    text: [ [Object] ],
2026-02-08T13:43:03.80943Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.809483Z	    image: {
2026-02-08T13:43:03.809535Z	      baseName: 'IMG_1280_edited',
2026-02-08T13:43:03.809592Z	      pagePath: 'staff',
2026-02-08T13:43:03.809644Z	      alt: 'IMG_1280_edited.jpg',
2026-02-08T13:43:03.809696Z	      width: null,
2026-02-08T13:43:03.809746Z	      height: null
2026-02-08T13:43:03.809802Z	    },
2026-02-08T13:43:03.809862Z	    ordering: 8
2026-02-08T13:43:03.809932Z	  },
2026-02-08T13:43:03.809986Z	  StaffEntity {
2026-02-08T13:43:03.81004Z	    name: 'Manami Okoshi',
2026-02-08T13:43:03.810114Z	    text: [ [Object] ],
2026-02-08T13:43:03.810174Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.810227Z	    image: {
2026-02-08T13:43:03.810283Z	      baseName: 'Manami-TJS',
2026-02-08T13:43:03.810344Z	      pagePath: 'staff',
2026-02-08T13:43:03.810403Z	      alt: 'Manami-TJS.jpg',
2026-02-08T13:43:03.810455Z	      width: null,
2026-02-08T13:43:03.810512Z	      height: null
2026-02-08T13:43:03.810573Z	    },
2026-02-08T13:43:03.81063Z	    ordering: 9
2026-02-08T13:43:03.810684Z	  },
2026-02-08T13:43:03.81075Z	  StaffEntity {
2026-02-08T13:43:03.810806Z	    name: 'Tasha Waldorf',
2026-02-08T13:43:03.81086Z	    text: [ [Object] ],
2026-02-08T13:43:03.810918Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.810978Z	    image: {
2026-02-08T13:43:03.81103Z	      baseName: 'profile',
2026-02-08T13:43:03.811082Z	      pagePath: 'staff',
2026-02-08T13:43:03.811151Z	      alt: 'profile.jpg',
2026-02-08T13:43:03.81121Z	      width: null,
2026-02-08T13:43:03.811275Z	      height: null
2026-02-08T13:43:03.811328Z	    },
2026-02-08T13:43:03.811382Z	    ordering: 10
2026-02-08T13:43:03.811438Z	  },
2026-02-08T13:43:03.811493Z	  StaffEntity {
2026-02-08T13:43:03.811544Z	    name: 'Lumi Hisataka',
2026-02-08T13:43:03.811595Z	    text: [ [Object] ],
2026-02-08T13:43:03.811648Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.811706Z	    image: {
2026-02-08T13:43:03.811763Z	      baseName: 'Lumi-TJS',
2026-02-08T13:43:03.811814Z	      pagePath: 'staff',
2026-02-08T13:43:03.81187Z	      alt: 'Lumi-TJS.jpg',
2026-02-08T13:43:03.81193Z	      width: null,
2026-02-08T13:43:03.811989Z	      height: null
2026-02-08T13:43:03.812041Z	    },
2026-02-08T13:43:03.812114Z	    ordering: 11
2026-02-08T13:43:03.812174Z	  },
2026-02-08T13:43:03.812228Z	  StaffEntity {
2026-02-08T13:43:03.812286Z	    name: 'Hana McKnight',
2026-02-08T13:43:03.812337Z	    text: [ [Object] ],
2026-02-08T13:43:03.812389Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.812447Z	    image: {
2026-02-08T13:43:03.81251Z	      baseName: 'IMG_7796',
2026-02-08T13:43:03.812564Z	      pagePath: 'staff',
2026-02-08T13:43:03.812616Z	      alt: 'IMG_7796.jpeg',
2026-02-08T13:43:03.812667Z	      width: null,
2026-02-08T13:43:03.812719Z	      height: null
2026-02-08T13:43:03.812772Z	    },
2026-02-08T13:43:03.812823Z	    ordering: 12
2026-02-08T13:43:03.812873Z	  },
2026-02-08T13:43:03.812924Z	  StaffEntity {
2026-02-08T13:43:03.812976Z	    name: 'Emi McKnight',
2026-02-08T13:43:03.813027Z	    text: [ [Object] ],
2026-02-08T13:43:03.81308Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.813185Z	    image: {
2026-02-08T13:43:03.813242Z	      baseName: 'IMG_7799_edited',
2026-02-08T13:43:03.813302Z	      pagePath: 'staff',
2026-02-08T13:43:03.813354Z	      alt: 'IMG_7799_edited.jpg',
2026-02-08T13:43:03.815112Z	      width: null,
2026-02-08T13:43:03.815226Z	      height: null
2026-02-08T13:43:03.815293Z	    },
2026-02-08T13:43:03.815359Z	    ordering: 13
2026-02-08T13:43:03.815418Z	  },
2026-02-08T13:43:03.81547Z	  StaffEntity {
2026-02-08T13:43:03.815521Z	    name: 'Azumi Uchida',
2026-02-08T13:43:03.815575Z	    text: [ [Object] ],
2026-02-08T13:43:03.815749Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.818198Z	    image: {
2026-02-08T13:43:03.818276Z	      baseName: 'profile',
2026-02-08T13:43:03.818332Z	      pagePath: 'staff',
2026-02-08T13:43:03.8184Z	      alt: 'profile.jpg',
2026-02-08T13:43:03.818458Z	      width: null,
2026-02-08T13:43:03.818512Z	      height: null
2026-02-08T13:43:03.818565Z	    },
2026-02-08T13:43:03.818625Z	    ordering: 14
2026-02-08T13:43:03.818684Z	  },
2026-02-08T13:43:03.818736Z	  StaffEntity {
2026-02-08T13:43:03.818799Z	    name: ' Kayo Orosco',
2026-02-08T13:43:03.81886Z	    text: [ [Object] ],
2026-02-08T13:43:03.818914Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.818977Z	    image: {
2026-02-08T13:43:03.819029Z	      baseName: 'Kayo-TJS',
2026-02-08T13:43:03.819082Z	      pagePath: 'staff',
2026-02-08T13:43:03.819153Z	      alt: 'Kayo-TJS.jpg',
2026-02-08T13:43:03.819212Z	      width: null,
2026-02-08T13:43:03.819265Z	      height: null
2026-02-08T13:43:03.819317Z	    },
2026-02-08T13:43:03.819368Z	    ordering: 15
2026-02-08T13:43:03.81942Z	  },
2026-02-08T13:43:03.819479Z	  StaffEntity {
2026-02-08T13:43:03.819535Z	    name: 'Jennider Shioya',
2026-02-08T13:43:03.819586Z	    text: [ [Object] ],
2026-02-08T13:43:03.819638Z	    role: [ [RoleEntity] ],
2026-02-08T13:43:03.819705Z	    image: {
2026-02-08T13:43:03.819764Z	      baseName: 'profile',
2026-02-08T13:43:03.81982Z	      pagePath: 'staff',
2026-02-08T13:43:03.819872Z	      alt: 'profile.jpg',
2026-02-08T13:43:03.821155Z	      width: null,
2026-02-08T13:43:03.821257Z	      height: null
2026-02-08T13:43:03.821319Z	    },
2026-02-08T13:43:03.821419Z	    ordering: 16
2026-02-08T13:43:03.821572Z	  }
2026-02-08T13:43:03.821707Z	]
2026-02-08T13:43:03.82185Z	[ImageOptimizer] baseName: mcknight, pagePath: staff
2026-02-08T13:43:03.822059Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.822192Z	  '/image/download/staff/mcknight-md.webp',
2026-02-08T13:43:03.822303Z	  '/image/download/staff/mcknight-sm.webp',
2026-02-08T13:43:03.822404Z	  '/image/download/staff/mcknight-lg.webp',
2026-02-08T13:43:03.822499Z	  '/image/download/staff/mcknight.png',
2026-02-08T13:43:03.822603Z	  '/image/download/staff/mcknight.jpg'
2026-02-08T13:43:03.822725Z	]
2026-02-08T13:43:03.822827Z	[ImageOptimizer] baseName: minami, pagePath: staff
2026-02-08T13:43:03.82292Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.823015Z	  '/image/download/staff/minami-md.webp',
2026-02-08T13:43:03.823149Z	  '/image/download/staff/minami-sm.webp',
2026-02-08T13:43:03.823299Z	  '/image/download/staff/minami-lg.webp',
2026-02-08T13:43:03.823458Z	  '/image/download/staff/minami.png',
2026-02-08T13:43:03.823592Z	  '/image/download/staff/minami.jpg'
2026-02-08T13:43:03.823665Z	]
2026-02-08T13:43:03.823773Z	[ImageOptimizer] baseName: IMG_1299_edited, pagePath: staff
2026-02-08T13:43:03.823897Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.82405Z	  '/image/download/staff/IMG_1299_edited-md.webp',
2026-02-08T13:43:03.824175Z	  '/image/download/staff/IMG_1299_edited-sm.webp',
2026-02-08T13:43:03.824294Z	  '/image/download/staff/IMG_1299_edited-lg.webp',
2026-02-08T13:43:03.824403Z	  '/image/download/staff/IMG_1299_edited.png',
2026-02-08T13:43:03.824506Z	  '/image/download/staff/IMG_1299_edited.jpg'
2026-02-08T13:43:03.824606Z	]
2026-02-08T13:43:03.824705Z	[ImageOptimizer] baseName: Kokori-TJS, pagePath: staff
2026-02-08T13:43:03.824803Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.824904Z	  '/image/download/staff/Kokori-TJS-md.webp',
2026-02-08T13:43:03.824999Z	  '/image/download/staff/Kokori-TJS-sm.webp',
2026-02-08T13:43:03.825131Z	  '/image/download/staff/Kokori-TJS-lg.webp',
2026-02-08T13:43:03.825245Z	  '/image/download/staff/Kokori-TJS.png',
2026-02-08T13:43:03.825339Z	  '/image/download/staff/Kokori-TJS.jpg'
2026-02-08T13:43:03.825435Z	]
2026-02-08T13:43:03.825524Z	[ImageOptimizer] baseName: Katsu-TJS, pagePath: staff
2026-02-08T13:43:03.825616Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.825718Z	  '/image/download/staff/Katsu-TJS-md.webp',
2026-02-08T13:43:03.825811Z	  '/image/download/staff/Katsu-TJS-sm.webp',
2026-02-08T13:43:03.825898Z	  '/image/download/staff/Katsu-TJS-lg.webp',
2026-02-08T13:43:03.826003Z	  '/image/download/staff/Katsu-TJS.png',
2026-02-08T13:43:03.826108Z	  '/image/download/staff/Katsu-TJS.jpg'
2026-02-08T13:43:03.826228Z	]
2026-02-08T13:43:03.826343Z	[ImageOptimizer] baseName: Meg-TJS, pagePath: staff
2026-02-08T13:43:03.82644Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.826554Z	  '/image/download/staff/Meg-TJS-md.webp',
2026-02-08T13:43:03.826663Z	  '/image/download/staff/Meg-TJS-sm.webp',
2026-02-08T13:43:03.82677Z	  '/image/download/staff/Meg-TJS-lg.webp',
2026-02-08T13:43:03.826866Z	  '/image/download/staff/Meg-TJS.png',
2026-02-08T13:43:03.826971Z	  '/image/download/staff/Meg-TJS.jpg'
2026-02-08T13:43:03.827043Z	]
2026-02-08T13:43:03.827167Z	[ImageOptimizer] baseName: IMG_7879_edited, pagePath: staff
2026-02-08T13:43:03.827268Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.827385Z	  '/image/download/staff/IMG_7879_edited-md.webp',
2026-02-08T13:43:03.827486Z	  '/image/download/staff/IMG_7879_edited-sm.webp',
2026-02-08T13:43:03.827574Z	  '/image/download/staff/IMG_7879_edited-lg.webp',
2026-02-08T13:43:03.827769Z	  '/image/download/staff/IMG_7879_edited.png',
2026-02-08T13:43:03.827835Z	  '/image/download/staff/IMG_7879_edited.jpg'
2026-02-08T13:43:03.827907Z	]
2026-02-08T13:43:03.827993Z	[ImageOptimizer] baseName: IMG_1280_edited, pagePath: staff
2026-02-08T13:43:03.828114Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.828357Z	  '/image/download/staff/IMG_1280_edited-md.webp',
2026-02-08T13:43:03.828509Z	  '/image/download/staff/IMG_1280_edited-sm.webp',
2026-02-08T13:43:03.828643Z	  '/image/download/staff/IMG_1280_edited-lg.webp',
2026-02-08T13:43:03.828871Z	  '/image/download/staff/IMG_1280_edited.png',
2026-02-08T13:43:03.828963Z	  '/image/download/staff/IMG_1280_edited.jpg'
2026-02-08T13:43:03.829103Z	]
2026-02-08T13:43:03.829235Z	[ImageOptimizer] baseName: Manami-TJS, pagePath: staff
2026-02-08T13:43:03.829348Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.829522Z	  '/image/download/staff/Manami-TJS-md.webp',
2026-02-08T13:43:03.829635Z	  '/image/download/staff/Manami-TJS-sm.webp',
2026-02-08T13:43:03.829777Z	  '/image/download/staff/Manami-TJS-lg.webp',
2026-02-08T13:43:03.829915Z	  '/image/download/staff/Manami-TJS.png',
2026-02-08T13:43:03.829996Z	  '/image/download/staff/Manami-TJS.jpg'
2026-02-08T13:43:03.830054Z	]
2026-02-08T13:43:03.830347Z	[ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:43:03.830465Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.830566Z	  '/image/download/staff/profile-md.webp',
2026-02-08T13:43:03.830664Z	  '/image/download/staff/profile-sm.webp',
2026-02-08T13:43:03.830759Z	  '/image/download/staff/profile-lg.webp',
2026-02-08T13:43:03.830856Z	  '/image/download/staff/profile.png',
2026-02-08T13:43:03.830948Z	  '/image/download/staff/profile.jpg'
2026-02-08T13:43:03.831051Z	]
2026-02-08T13:43:03.831164Z	[ImageOptimizer] baseName: Lumi-TJS, pagePath: staff
2026-02-08T13:43:03.831262Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.831351Z	  '/image/download/staff/Lumi-TJS-md.webp',
2026-02-08T13:43:03.831463Z	  '/image/download/staff/Lumi-TJS-sm.webp',
2026-02-08T13:43:03.831564Z	  '/image/download/staff/Lumi-TJS-lg.webp',
2026-02-08T13:43:03.831665Z	  '/image/download/staff/Lumi-TJS.png',
2026-02-08T13:43:03.831763Z	  '/image/download/staff/Lumi-TJS.jpg'
2026-02-08T13:43:03.83186Z	]
2026-02-08T13:43:03.832018Z	[ImageOptimizer] baseName: IMG_7796, pagePath: staff
2026-02-08T13:43:03.832145Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.832458Z	  '/image/download/staff/IMG_7796-md.webp',
2026-02-08T13:43:03.832596Z	  '/image/download/staff/IMG_7796-sm.webp',
2026-02-08T13:43:03.832678Z	  '/image/download/staff/IMG_7796-lg.webp',
2026-02-08T13:43:03.832769Z	  '/image/download/staff/IMG_7796.png',
2026-02-08T13:43:03.83286Z	  '/image/download/staff/IMG_7796.jpg'
2026-02-08T13:43:03.832995Z	]
2026-02-08T13:43:03.833066Z	[ImageOptimizer] baseName: IMG_7799_edited, pagePath: staff
2026-02-08T13:43:03.833155Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.833271Z	  '/image/download/staff/IMG_7799_edited-md.webp',
2026-02-08T13:43:03.833379Z	  '/image/download/staff/IMG_7799_edited-sm.webp',
2026-02-08T13:43:03.833509Z	  '/image/download/staff/IMG_7799_edited-lg.webp',
2026-02-08T13:43:03.833589Z	  '/image/download/staff/IMG_7799_edited.png',
2026-02-08T13:43:03.833646Z	  '/image/download/staff/IMG_7799_edited.jpg'
2026-02-08T13:43:03.833698Z	]
2026-02-08T13:43:03.83375Z	[ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:43:03.833804Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.833855Z	  '/image/download/staff/profile-md.webp',
2026-02-08T13:43:03.833907Z	  '/image/download/staff/profile-sm.webp',
2026-02-08T13:43:03.833996Z	  '/image/download/staff/profile-lg.webp',
2026-02-08T13:43:03.834108Z	  '/image/download/staff/profile.png',
2026-02-08T13:43:03.834223Z	  '/image/download/staff/profile.jpg'
2026-02-08T13:43:03.83552Z	]
2026-02-08T13:43:03.835655Z	[ImageOptimizer] baseName: Kayo-TJS, pagePath: staff
2026-02-08T13:43:03.83575Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.835841Z	  '/image/download/staff/Kayo-TJS-md.webp',
2026-02-08T13:43:03.836073Z	  '/image/download/staff/Kayo-TJS-sm.webp',
2026-02-08T13:43:03.836297Z	  '/image/download/staff/Kayo-TJS-lg.webp',
2026-02-08T13:43:03.836764Z	  '/image/download/staff/Kayo-TJS.png',
2026-02-08T13:43:03.83685Z	  '/image/download/staff/Kayo-TJS.jpg'
2026-02-08T13:43:03.836932Z	]
2026-02-08T13:43:03.837058Z	[ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:43:03.837161Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:03.837442Z	  '/image/download/staff/profile-md.webp',
2026-02-08T13:43:03.837523Z	  '/image/download/staff/profile-sm.webp',
2026-02-08T13:43:03.837587Z	  '/image/download/staff/profile-lg.webp',
2026-02-08T13:43:03.837856Z	  '/image/download/staff/profile.png',
2026-02-08T13:43:03.837933Z	  '/image/download/staff/profile.jpg'
2026-02-08T13:43:03.838017Z	]
2026-02-08T13:43:03.838238Z	🚫 キャッシュ無効 (reports): 直接APIから取得します
2026-02-08T13:43:03.838487Z	🌐 Notion APIから取得中: reports
2026-02-08T13:43:12.010795Z	✅ API取得完了: reports (2件)
2026-02-08T13:43:12.02266Z	🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:43:12.022843Z	🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:43:12.022992Z	🌐 Notion APIから取得中: category
2026-02-08T13:43:12.02317Z	🌐 Notion APIから取得中: classes
2026-02-08T13:43:12.189692Z	already exist.
2026-02-08T13:43:12.263414Z	✅ API取得完了: classes (7件)
2026-02-08T13:43:12.28127Z	already exist.
2026-02-08T13:43:12.371401Z	already exist.
2026-02-08T13:43:12.430848Z	already exist.
2026-02-08T13:43:12.622078Z	✅ API取得完了: category (2件)
2026-02-08T13:43:15.167913Z	Class data received: {
2026-02-08T13:43:15.168216Z	  category: [
2026-02-08T13:43:15.168686Z	    {
2026-02-08T13:43:15.168785Z	      object: 'page',
2026-02-08T13:43:15.168866Z	      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:43:15.168924Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:43:15.168979Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:43:15.169032Z	      created_by: [Object],
2026-02-08T13:43:15.169109Z	      last_edited_by: [Object],
2026-02-08T13:43:15.169188Z	      cover: null,
2026-02-08T13:43:15.169247Z	      icon: null,
2026-02-08T13:43:15.169378Z	      parent: [Object],
2026-02-08T13:43:15.169735Z	      archived: false,
2026-02-08T13:43:15.170184Z	      in_trash: false,
2026-02-08T13:43:15.170321Z	      is_locked: false,
2026-02-08T13:43:15.170595Z	      properties: [Object],
2026-02-08T13:43:15.170749Z	      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:43:15.171132Z	      public_url: null
2026-02-08T13:43:15.17123Z	    },
2026-02-08T13:43:15.171301Z	    {
2026-02-08T13:43:15.171365Z	      object: 'page',
2026-02-08T13:43:15.171439Z	      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:43:15.171506Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:43:15.17156Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:15.171613Z	      created_by: [Object],
2026-02-08T13:43:15.171666Z	      last_edited_by: [Object],
2026-02-08T13:43:15.17172Z	      cover: null,
2026-02-08T13:43:15.171773Z	      icon: null,
2026-02-08T13:43:15.171836Z	      parent: [Object],
2026-02-08T13:43:15.17189Z	      archived: false,
2026-02-08T13:43:15.171942Z	      in_trash: false,
2026-02-08T13:43:15.171994Z	      is_locked: false,
2026-02-08T13:43:15.17205Z	      properties: [Object],
2026-02-08T13:43:15.172124Z	      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:43:15.172199Z	      public_url: null
2026-02-08T13:43:15.172263Z	    }
2026-02-08T13:43:15.17233Z	  ],
2026-02-08T13:43:15.172385Z	  classes: [
2026-02-08T13:43:15.172438Z	    {
2026-02-08T13:43:15.172496Z	      object: 'page',
2026-02-08T13:43:15.172561Z	      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:43:15.172618Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:43:15.17267Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:15.172722Z	      created_by: [Object],
2026-02-08T13:43:15.172781Z	      last_edited_by: [Object],
2026-02-08T13:43:15.172852Z	      cover: null,
2026-02-08T13:43:15.172907Z	      icon: null,
2026-02-08T13:43:15.172964Z	      parent: [Object],
2026-02-08T13:43:15.173024Z	      archived: false,
2026-02-08T13:43:15.173083Z	      in_trash: false,
2026-02-08T13:43:15.1732Z	      is_locked: false,
2026-02-08T13:43:15.173331Z	      properties: [Object],
2026-02-08T13:43:15.173423Z	      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:43:15.173526Z	      public_url: null
2026-02-08T13:43:15.173639Z	    },
2026-02-08T13:43:15.173747Z	    {
2026-02-08T13:43:15.173838Z	      object: 'page',
2026-02-08T13:43:15.173924Z	      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:43:15.174012Z	      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:43:15.174106Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:43:15.174336Z	      created_by: [Object],
2026-02-08T13:43:15.174539Z	      last_edited_by: [Object],
2026-02-08T13:43:15.17464Z	      cover: null,
2026-02-08T13:43:15.174736Z	      icon: null,
2026-02-08T13:43:15.174888Z	      parent: [Object],
2026-02-08T13:43:15.175109Z	      archived: false,
2026-02-08T13:43:15.17523Z	      in_trash: false,
2026-02-08T13:43:15.175335Z	      is_locked: false,
2026-02-08T13:43:15.175493Z	      properties: [Object],
2026-02-08T13:43:15.175574Z	      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:43:15.175667Z	      public_url: null
2026-02-08T13:43:15.175775Z	    },
2026-02-08T13:43:15.175874Z	    {
2026-02-08T13:43:15.175994Z	      object: 'page',
2026-02-08T13:43:15.176106Z	      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:43:15.176198Z	      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:43:15.176292Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:43:15.176391Z	      created_by: [Object],
2026-02-08T13:43:15.176506Z	      last_edited_by: [Object],
2026-02-08T13:43:15.176626Z	      cover: null,
2026-02-08T13:43:15.176731Z	      icon: null,
2026-02-08T13:43:15.176829Z	      parent: [Object],
2026-02-08T13:43:15.176918Z	      archived: false,
2026-02-08T13:43:15.177002Z	      in_trash: false,
2026-02-08T13:43:15.177103Z	      is_locked: false,
2026-02-08T13:43:15.177346Z	      properties: [Object],
2026-02-08T13:43:15.177639Z	      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:43:15.177774Z	      public_url: null
2026-02-08T13:43:15.177906Z	    },
2026-02-08T13:43:15.178026Z	    {
2026-02-08T13:43:15.17819Z	      object: 'page',
2026-02-08T13:43:15.178339Z	      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:43:15.179186Z	      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:43:15.17927Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:43:15.17934Z	      created_by: [Object],
2026-02-08T13:43:15.179405Z	      last_edited_by: [Object],
2026-02-08T13:43:15.1795Z	      cover: null,
2026-02-08T13:43:15.17968Z	      icon: null,
2026-02-08T13:43:15.179796Z	      parent: [Object],
2026-02-08T13:43:15.179895Z	      archived: false,
2026-02-08T13:43:15.179989Z	      in_trash: false,
2026-02-08T13:43:15.180206Z	      is_locked: false,
2026-02-08T13:43:15.180356Z	      properties: [Object],
2026-02-08T13:43:15.180471Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:43:15.180577Z	      public_url: null
2026-02-08T13:43:15.180692Z	    },
2026-02-08T13:43:15.180799Z	    {
2026-02-08T13:43:15.180903Z	      object: 'page',
2026-02-08T13:43:15.181002Z	      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:43:15.181127Z	      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:43:15.181231Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:15.181332Z	      created_by: [Object],
2026-02-08T13:43:15.181432Z	      last_edited_by: [Object],
2026-02-08T13:43:15.181532Z	      cover: null,
2026-02-08T13:43:15.181632Z	      icon: null,
2026-02-08T13:43:15.181749Z	      parent: [Object],
2026-02-08T13:43:15.181874Z	      archived: false,
2026-02-08T13:43:15.181987Z	      in_trash: false,
2026-02-08T13:43:15.18211Z	      is_locked: false,
2026-02-08T13:43:15.182237Z	      properties: [Object],
2026-02-08T13:43:15.182341Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:43:15.182458Z	      public_url: null
2026-02-08T13:43:15.182578Z	    },
2026-02-08T13:43:15.182686Z	    {
2026-02-08T13:43:15.182779Z	      object: 'page',
2026-02-08T13:43:15.182871Z	      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:43:15.182984Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:43:15.183256Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:15.183347Z	      created_by: [Object],
2026-02-08T13:43:15.183436Z	      last_edited_by: [Object],
2026-02-08T13:43:15.183574Z	      cover: null,
2026-02-08T13:43:15.183666Z	      icon: null,
2026-02-08T13:43:15.183761Z	      parent: [Object],
2026-02-08T13:43:15.183866Z	      archived: false,
2026-02-08T13:43:15.184007Z	      in_trash: false,
2026-02-08T13:43:15.184131Z	      is_locked: false,
2026-02-08T13:43:15.184255Z	      properties: [Object],
2026-02-08T13:43:15.18436Z	      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:43:15.184451Z	      public_url: null
2026-02-08T13:43:15.184542Z	    },
2026-02-08T13:43:15.184639Z	    {
2026-02-08T13:43:15.184734Z	      object: 'page',
2026-02-08T13:43:15.184942Z	      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:43:15.185066Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:43:15.185331Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:43:15.185431Z	      created_by: [Object],
2026-02-08T13:43:15.18564Z	      last_edited_by: [Object],
2026-02-08T13:43:15.18587Z	      cover: null,
2026-02-08T13:43:15.186111Z	      icon: null,
2026-02-08T13:43:15.186341Z	      parent: [Object],
2026-02-08T13:43:15.186437Z	      archived: false,
2026-02-08T13:43:15.186644Z	      in_trash: false,
2026-02-08T13:43:15.186735Z	      is_locked: false,
2026-02-08T13:43:15.186948Z	      properties: [Object],
2026-02-08T13:43:15.187072Z	      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:43:15.187333Z	      public_url: null
2026-02-08T13:43:15.187414Z	    }
2026-02-08T13:43:15.187472Z	  ]
2026-02-08T13:43:15.187532Z	}
2026-02-08T13:43:15.187587Z	[ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:43:15.187641Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.187694Z	  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:43:15.187754Z	  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:43:15.187811Z	  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:43:15.187863Z	  '/image/download/class/IMG_1866.png',
2026-02-08T13:43:15.187923Z	  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:43:15.187985Z	]
2026-02-08T13:43:15.188038Z	[ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:43:15.188112Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.188199Z	  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:43:15.188256Z	  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:43:15.188318Z	  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:43:15.188379Z	  '/image/download/class/IMG_3364.png',
2026-02-08T13:43:15.188438Z	  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:43:15.188497Z	]
2026-02-08T13:43:15.188554Z	[ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:43:15.188613Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.18868Z	  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:43:15.188743Z	  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:43:15.188796Z	  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:43:15.188847Z	  '/image/download/class/20240210_110201.png',
2026-02-08T13:43:15.188898Z	  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:43:15.188948Z	]
2026-02-08T13:43:15.189001Z	[ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:43:15.189051Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.189436Z	  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:43:15.18952Z	  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:43:15.189574Z	  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:43:15.189626Z	  '/image/download/class/IMG_7919.png',
2026-02-08T13:43:15.189681Z	  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:43:15.18974Z	]
2026-02-08T13:43:15.189913Z	[ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:43:15.190024Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.190146Z	  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:43:15.190256Z	  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:43:15.190556Z	  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:43:15.190645Z	  '/image/download/class/IMG_7892.png',
2026-02-08T13:43:15.190723Z	  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:43:15.190845Z	]
2026-02-08T13:43:15.190946Z	[ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:43:15.191043Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.191172Z	  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:43:15.191267Z	  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:43:15.191358Z	  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:43:15.191494Z	  '/image/download/class/IMG_3338.png',
2026-02-08T13:43:15.191568Z	  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:43:15.191646Z	]
2026-02-08T13:43:15.191736Z	[ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:43:15.191844Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:15.191937Z	  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:43:15.192022Z	  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:43:15.192145Z	  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:43:15.192234Z	  '/image/download/class/IMG_8125.png',
2026-02-08T13:43:15.192324Z	  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:43:15.19242Z	]
2026-02-08T13:43:15.192587Z	🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:43:15.192735Z	🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:43:15.193011Z	🌐 Notion APIから取得中: category
2026-02-08T13:43:15.193127Z	🌐 Notion APIから取得中: classes
2026-02-08T13:43:15.362779Z	✅ API取得完了: classes (7件)
2026-02-08T13:43:16.103079Z	✅ API取得完了: category (2件)
2026-02-08T13:43:18.751191Z	Class data received: {
2026-02-08T13:43:18.751542Z	  category: [
2026-02-08T13:43:18.75182Z	    {
2026-02-08T13:43:18.752Z	      object: 'page',
2026-02-08T13:43:18.752157Z	      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:43:18.752302Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:43:18.752394Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:43:18.752472Z	      created_by: [Object],
2026-02-08T13:43:18.75256Z	      last_edited_by: [Object],
2026-02-08T13:43:18.752695Z	      cover: null,
2026-02-08T13:43:18.7528Z	      icon: null,
2026-02-08T13:43:18.753002Z	      parent: [Object],
2026-02-08T13:43:18.753151Z	      archived: false,
2026-02-08T13:43:18.753298Z	      in_trash: false,
2026-02-08T13:43:18.753436Z	      is_locked: false,
2026-02-08T13:43:18.753577Z	      properties: [Object],
2026-02-08T13:43:18.753715Z	      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:43:18.753795Z	      public_url: null
2026-02-08T13:43:18.753909Z	    },
2026-02-08T13:43:18.753987Z	    {
2026-02-08T13:43:18.754043Z	      object: 'page',
2026-02-08T13:43:18.754111Z	      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:43:18.754185Z	      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:43:18.75425Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:18.754311Z	      created_by: [Object],
2026-02-08T13:43:18.754367Z	      last_edited_by: [Object],
2026-02-08T13:43:18.75444Z	      cover: null,
2026-02-08T13:43:18.754502Z	      icon: null,
2026-02-08T13:43:18.754555Z	      parent: [Object],
2026-02-08T13:43:18.754615Z	      archived: false,
2026-02-08T13:43:18.754669Z	      in_trash: false,
2026-02-08T13:43:18.754721Z	      is_locked: false,
2026-02-08T13:43:18.754773Z	      properties: [Object],
2026-02-08T13:43:18.754826Z	      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:43:18.754885Z	      public_url: null
2026-02-08T13:43:18.754945Z	    }
2026-02-08T13:43:18.755005Z	  ],
2026-02-08T13:43:18.755064Z	  classes: [
2026-02-08T13:43:18.755146Z	    {
2026-02-08T13:43:18.755214Z	      object: 'page',
2026-02-08T13:43:18.755271Z	      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:43:18.755332Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:43:18.755394Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:18.755449Z	      created_by: [Object],
2026-02-08T13:43:18.755502Z	      last_edited_by: [Object],
2026-02-08T13:43:18.755555Z	      cover: null,
2026-02-08T13:43:18.755615Z	      icon: null,
2026-02-08T13:43:18.755675Z	      parent: [Object],
2026-02-08T13:43:18.755732Z	      archived: false,
2026-02-08T13:43:18.755789Z	      in_trash: false,
2026-02-08T13:43:18.755847Z	      is_locked: false,
2026-02-08T13:43:18.7559Z	      properties: [Object],
2026-02-08T13:43:18.755954Z	      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:43:18.756034Z	      public_url: null
2026-02-08T13:43:18.75631Z	    },
2026-02-08T13:43:18.756406Z	    {
2026-02-08T13:43:18.756509Z	      object: 'page',
2026-02-08T13:43:18.756624Z	      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:43:18.756693Z	      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:43:18.756755Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:43:18.756808Z	      created_by: [Object],
2026-02-08T13:43:18.75686Z	      last_edited_by: [Object],
2026-02-08T13:43:18.756912Z	      cover: null,
2026-02-08T13:43:18.756964Z	      icon: null,
2026-02-08T13:43:18.757021Z	      parent: [Object],
2026-02-08T13:43:18.757077Z	      archived: false,
2026-02-08T13:43:18.757171Z	      in_trash: false,
2026-02-08T13:43:18.757231Z	      is_locked: false,
2026-02-08T13:43:18.757292Z	      properties: [Object],
2026-02-08T13:43:18.757347Z	      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:43:18.757409Z	      public_url: null
2026-02-08T13:43:18.757464Z	    },
2026-02-08T13:43:18.757529Z	    {
2026-02-08T13:43:18.757598Z	      object: 'page',
2026-02-08T13:43:18.757653Z	      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:43:18.757705Z	      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:43:18.757757Z	      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:43:18.757811Z	      created_by: [Object],
2026-02-08T13:43:18.757863Z	      last_edited_by: [Object],
2026-02-08T13:43:18.757914Z	      cover: null,
2026-02-08T13:43:18.757966Z	      icon: null,
2026-02-08T13:43:18.758031Z	      parent: [Object],
2026-02-08T13:43:18.758089Z	      archived: false,
2026-02-08T13:43:18.758346Z	      in_trash: false,
2026-02-08T13:43:18.758471Z	      is_locked: false,
2026-02-08T13:43:18.758619Z	      properties: [Object],
2026-02-08T13:43:18.75875Z	      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:43:18.758834Z	      public_url: null
2026-02-08T13:43:18.758954Z	    },
2026-02-08T13:43:18.759062Z	    {
2026-02-08T13:43:18.759171Z	      object: 'page',
2026-02-08T13:43:18.759277Z	      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:43:18.75939Z	      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:43:18.759501Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:43:18.759619Z	      created_by: [Object],
2026-02-08T13:43:18.759746Z	      last_edited_by: [Object],
2026-02-08T13:43:18.759872Z	      cover: null,
2026-02-08T13:43:18.759979Z	      icon: null,
2026-02-08T13:43:18.76008Z	      parent: [Object],
2026-02-08T13:43:18.760206Z	      archived: false,
2026-02-08T13:43:18.760303Z	      in_trash: false,
2026-02-08T13:43:18.760429Z	      is_locked: false,
2026-02-08T13:43:18.760532Z	      properties: [Object],
2026-02-08T13:43:18.760654Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:43:18.760756Z	      public_url: null
2026-02-08T13:43:18.760879Z	    },
2026-02-08T13:43:18.760973Z	    {
2026-02-08T13:43:18.761033Z	      object: 'page',
2026-02-08T13:43:18.761088Z	      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:43:18.761184Z	      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:43:18.761242Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:18.761295Z	      created_by: [Object],
2026-02-08T13:43:18.761356Z	      last_edited_by: [Object],
2026-02-08T13:43:18.761417Z	      cover: null,
2026-02-08T13:43:18.761489Z	      icon: null,
2026-02-08T13:43:18.761543Z	      parent: [Object],
2026-02-08T13:43:18.761604Z	      archived: false,
2026-02-08T13:43:18.761668Z	      in_trash: false,
2026-02-08T13:43:18.761729Z	      is_locked: false,
2026-02-08T13:43:18.761784Z	      properties: [Object],
2026-02-08T13:43:18.761835Z	      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:43:18.761887Z	      public_url: null
2026-02-08T13:43:18.761953Z	    },
2026-02-08T13:43:18.762058Z	    {
2026-02-08T13:43:18.76217Z	      object: 'page',
2026-02-08T13:43:18.762272Z	      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:43:18.762376Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:43:18.762471Z	      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:43:18.76257Z	      created_by: [Object],
2026-02-08T13:43:18.762665Z	      last_edited_by: [Object],
2026-02-08T13:43:18.762765Z	      cover: null,
2026-02-08T13:43:18.762868Z	      icon: null,
2026-02-08T13:43:18.762961Z	      parent: [Object],
2026-02-08T13:43:18.763067Z	      archived: false,
2026-02-08T13:43:18.76318Z	      in_trash: false,
2026-02-08T13:43:18.763276Z	      is_locked: false,
2026-02-08T13:43:18.763368Z	      properties: [Object],
2026-02-08T13:43:18.763516Z	      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:43:18.763645Z	      public_url: null
2026-02-08T13:43:18.763714Z	    },
2026-02-08T13:43:18.76377Z	    {
2026-02-08T13:43:18.763833Z	      object: 'page',
2026-02-08T13:43:18.763895Z	      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:43:18.763949Z	      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:43:18.764044Z	      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:43:18.764164Z	      created_by: [Object],
2026-02-08T13:43:18.764288Z	      last_edited_by: [Object],
2026-02-08T13:43:18.764387Z	      cover: null,
2026-02-08T13:43:18.764457Z	      icon: null,
2026-02-08T13:43:18.76452Z	      parent: [Object],
2026-02-08T13:43:18.76475Z	      archived: false,
2026-02-08T13:43:18.764887Z	      in_trash: false,
2026-02-08T13:43:18.76499Z	      is_locked: false,
2026-02-08T13:43:18.765139Z	      properties: [Object],
2026-02-08T13:43:18.765332Z	      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:43:18.765449Z	      public_url: null
2026-02-08T13:43:18.765589Z	    }
2026-02-08T13:43:18.765652Z	  ]
2026-02-08T13:43:18.765719Z	}
2026-02-08T13:43:18.765777Z	[ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:43:18.765833Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.765887Z	  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:43:18.76594Z	  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:43:18.766003Z	  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:43:18.766222Z	  '/image/download/class/IMG_1866.png',
2026-02-08T13:43:18.766381Z	  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:43:18.766522Z	]
2026-02-08T13:43:18.766679Z	[ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:43:18.766802Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.766922Z	  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:43:18.767047Z	  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:43:18.767213Z	  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:43:18.767321Z	  '/image/download/class/IMG_3364.png',
2026-02-08T13:43:18.767422Z	  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:43:18.767524Z	]
2026-02-08T13:43:18.767614Z	[ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:43:18.7677Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.767795Z	  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:43:18.767899Z	  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:43:18.768008Z	  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:43:18.768132Z	  '/image/download/class/20240210_110201.png',
2026-02-08T13:43:18.768255Z	  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:43:18.76837Z	]
2026-02-08T13:43:18.768487Z	[ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:43:18.768604Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.768722Z	  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:43:18.768843Z	  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:43:18.76896Z	  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:43:18.769074Z	  '/image/download/class/IMG_7919.png',
2026-02-08T13:43:18.769199Z	  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:43:18.769296Z	]
2026-02-08T13:43:18.769371Z	[ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:43:18.769452Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.769674Z	  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:43:18.769754Z	  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:43:18.770019Z	  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:43:18.770143Z	  '/image/download/class/IMG_7892.png',
2026-02-08T13:43:18.770275Z	  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:43:18.770365Z	]
2026-02-08T13:43:18.770431Z	[ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:43:18.77053Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.770644Z	  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:43:18.77076Z	  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:43:18.770878Z	  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:43:18.770975Z	  '/image/download/class/IMG_3338.png',
2026-02-08T13:43:18.771112Z	  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:43:18.771215Z	]
2026-02-08T13:43:18.771333Z	[ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:43:18.771439Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:18.771547Z	  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:43:18.77167Z	  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:43:18.77177Z	  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:43:18.771894Z	  '/image/download/class/IMG_8125.png',
2026-02-08T13:43:18.771994Z	  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:43:18.772108Z	]
2026-02-08T13:43:18.772379Z	🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:43:18.772475Z	🚫 キャッシュ無効 (files): 直接APIから取得します
2026-02-08T13:43:18.772557Z	🌐 Notion APIから取得中: schedule
2026-02-08T13:43:18.772811Z	🌐 Notion APIから取得中: files
2026-02-08T13:43:18.944347Z	✅ API取得完了: files (1件)
2026-02-08T13:43:19.773187Z	✅ API取得完了: schedule (48件)
2026-02-08T13:43:19.860172Z	already exist.
2026-02-08T13:43:19.94147Z	already exist.
2026-02-08T13:43:19.941716Z	not pdf file
2026-02-08T13:43:22.392312Z	KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'en' }
2026-02-08T13:43:22.446233Z	already exist.
2026-02-08T13:43:22.446468Z	not pdf file
2026-02-08T13:43:22.53828Z	already exist.
2026-02-08T13:43:28.150353Z	KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'en' }
2026-02-08T13:43:28.190295Z	already exist.
2026-02-08T13:43:28.190555Z	not pdf file
2026-02-08T13:43:28.248033Z	already exist.
2026-02-08T13:43:29.265307Z	🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:43:29.265612Z	🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:43:29.265798Z	🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:43:29.265924Z	🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:43:29.26602Z	🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:43:29.266165Z	🌐 Notion APIから取得中: qualification
2026-02-08T13:43:29.266276Z	🌐 Notion APIから取得中: price
2026-02-08T13:43:29.267352Z	🌐 Notion APIから取得中: discountFamily
2026-02-08T13:43:29.268466Z	🌐 Notion APIから取得中: discountStaff
2026-02-08T13:43:29.269533Z	🌐 Notion APIから取得中: enrollment
2026-02-08T13:43:29.443152Z	✅ API取得完了: discountStaff (3件)
2026-02-08T13:43:29.457182Z	✅ API取得完了: discountFamily (3件)
2026-02-08T13:43:29.558186Z	✅ API取得完了: price (8件)
2026-02-08T13:43:30.817293Z	✅ API取得完了: qualification (3件)
2026-02-08T13:43:32.847494Z	✅ API取得完了: enrollment (2件)
2026-02-08T13:43:32.862499Z	🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:43:32.86271Z	🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:43:32.86299Z	🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:43:32.86321Z	🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:43:32.863295Z	🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:43:32.863365Z	🌐 Notion APIから取得中: qualification
2026-02-08T13:43:32.863444Z	🌐 Notion APIから取得中: price
2026-02-08T13:43:32.863504Z	🌐 Notion APIから取得中: discountFamily
2026-02-08T13:43:32.863565Z	🌐 Notion APIから取得中: discountStaff
2026-02-08T13:43:32.863816Z	🌐 Notion APIから取得中: enrollment
2026-02-08T13:43:33.000376Z	✅ API取得完了: enrollment (2件)
2026-02-08T13:43:33.007968Z	✅ API取得完了: discountFamily (3件)
2026-02-08T13:43:33.136477Z	✅ API取得完了: qualification (3件)
2026-02-08T13:43:33.760737Z	✅ API取得完了: price (8件)
2026-02-08T13:43:34.388203Z	✅ API取得完了: discountStaff (3件)
2026-02-08T13:43:34.401947Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:43:34.410463Z	[ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:43:34.41062Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.411084Z	  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:43:34.411225Z	  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:43:34.411672Z	  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:43:34.411833Z	  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:43:34.411964Z	  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:43:34.412079Z	]
2026-02-08T13:43:34.412243Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:43:34.412353Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.412455Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:43:34.412596Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:43:34.412736Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:43:34.412833Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:43:34.412904Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:43:34.41296Z	]
2026-02-08T13:43:34.413035Z	[ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:43:34.413112Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.413181Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:43:34.413236Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:43:34.413289Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:43:34.413343Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:43:34.413411Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:43:34.413466Z	]
2026-02-08T13:43:34.413524Z	[ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:43:34.41358Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.413633Z	  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:43:34.413691Z	  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:43:34.413747Z	  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:43:34.413802Z	  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:43:34.413862Z	  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:43:34.413932Z	]
2026-02-08T13:43:34.413988Z	[ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:43:34.414042Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.414173Z	  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:43:34.414286Z	  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:43:34.414441Z	  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:43:34.414568Z	  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:43:34.414679Z	  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:43:34.414786Z	]
2026-02-08T13:43:34.4149Z	[ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:43:34.415003Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.415159Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:43:34.415294Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:43:34.415438Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:43:34.415558Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:43:34.415683Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:43:34.415785Z	]
2026-02-08T13:43:34.415883Z	[ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:43:34.415985Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.416084Z	  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:43:34.416208Z	  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:43:34.416306Z	  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:43:34.416413Z	  '/image/download/news/unitymural02.png',
2026-02-08T13:43:34.416534Z	  '/image/download/news/unitymural02.jpg'
2026-02-08T13:43:34.416637Z	]
2026-02-08T13:43:34.416738Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:43:34.416846Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.416939Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:43:34.417036Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:43:34.417143Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:43:34.417251Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:43:34.417355Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:43:34.41746Z	]
2026-02-08T13:43:34.417555Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:43:34.417651Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.417743Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:43:34.418213Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:43:34.418321Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:43:34.418382Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:43:34.418438Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:43:34.418495Z	]
2026-02-08T13:43:34.418559Z	[ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:43:34.418617Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.418681Z	  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:43:34.418737Z	  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:43:34.418792Z	  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:43:34.418844Z	  '/image/download/news/schooltablechair.png',
2026-02-08T13:43:34.418897Z	  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:43:34.418953Z	]
2026-02-08T13:43:34.419032Z	[ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:43:34.419108Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.419179Z	  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:43:34.419235Z	  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:43:34.419292Z	  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:43:34.419347Z	  '/image/download/news/japanesegarden.png',
2026-02-08T13:43:34.419399Z	  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:43:34.419451Z	]
2026-02-08T13:43:34.431796Z	🚀 グローバルキャッシュから取得: event
2026-02-08T13:43:34.434051Z	[ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:43:34.43428Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.434377Z	  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:43:34.434811Z	  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:43:34.4349Z	  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:43:34.435264Z	  '/image/download/event/2026kenken.png',
2026-02-08T13:43:34.435336Z	  '/image/download/event/2026kenken.jpg'
2026-02-08T13:43:34.435391Z	]
2026-02-08T13:43:34.435448Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: event
2026-02-08T13:43:34.435516Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:34.435574Z	  '/image/download/event/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:43:34.435627Z	  '/image/download/event/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:43:34.43568Z	  '/image/download/event/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:43:34.435738Z	  '/image/download/event/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:43:34.435792Z	  '/image/download/event/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:43:34.435844Z	]
2026-02-08T13:43:34.440809Z	🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:43:34.441113Z	🚫 キャッシュ無効 (support): 直接APIから取得します
2026-02-08T13:43:34.441235Z	🚫 キャッシュ無効 (sponsor): 直接APIから取得します
2026-02-08T13:43:34.44148Z	🚫 キャッシュ無効 (donation): 直接APIから取得します
2026-02-08T13:43:34.441615Z	🚫 キャッシュ無効 (howto): 直接APIから取得します
2026-02-08T13:43:34.441724Z	🌐 Notion APIから取得中: sponsors
2026-02-08T13:43:34.441832Z	🌐 Notion APIから取得中: support
2026-02-08T13:43:34.441943Z	🌐 Notion APIから取得中: sponsor
2026-02-08T13:43:34.442351Z	🌐 Notion APIから取得中: donation
2026-02-08T13:43:34.442631Z	🌐 Notion APIから取得中: howto
2026-02-08T13:43:34.60973Z	✅ API取得完了: sponsors (3件)
2026-02-08T13:43:34.610034Z	✅ API取得完了: sponsor (1件)
2026-02-08T13:43:34.614233Z	✅ API取得完了: donation (1件)
2026-02-08T13:43:34.645064Z	✅ API取得完了: howto (3件)
2026-02-08T13:43:34.666039Z	✅ API取得完了: support (1件)
2026-02-08T13:43:35.503359Z	[ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:43:35.503585Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:35.503657Z	  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:43:35.503965Z	  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:43:35.504141Z	  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:43:35.504249Z	  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:43:35.504384Z	  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:43:35.504495Z	]
2026-02-08T13:43:35.504591Z	[ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:43:35.504677Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:35.504774Z	  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:43:35.504856Z	  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:43:35.504964Z	  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:43:35.505056Z	  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:43:35.505166Z	  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:43:35.505259Z	]
2026-02-08T13:43:35.505341Z	[ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:43:35.505445Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:35.50553Z	  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:43:35.505605Z	  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:43:35.505677Z	  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:43:35.505761Z	  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:43:35.505859Z	  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:43:35.505959Z	]
2026-02-08T13:43:35.520565Z	🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:43:35.520799Z	🌐 Notion APIから取得中: general
2026-02-08T13:43:42.330075Z	✅ API取得完了: general (1件)
2026-02-08T13:43:42.338672Z	🚫 キャッシュ無効 (opportunity): 直接APIから取得します
2026-02-08T13:43:42.338905Z	🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:43:42.339013Z	🌐 Notion APIから取得中: opportunity
2026-02-08T13:43:42.339613Z	🌐 Notion APIから取得中: general
2026-02-08T13:43:42.537778Z	✅ API取得完了: general (1件)
2026-02-08T13:43:42.673125Z	✅ API取得完了: opportunity (3件)
2026-02-08T13:43:42.68317Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:43:47.341637Z	[ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:43:47.34197Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:47.342083Z	  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:43:47.342191Z	  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:43:47.342284Z	  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:43:47.342383Z	  '/image/download/news/unitymural02.png',
2026-02-08T13:43:47.342484Z	  '/image/download/news/unitymural02.jpg'
2026-02-08T13:43:47.342595Z	]
2026-02-08T13:43:47.348935Z	
   Generating static pages (88/132) 
2026-02-08T13:43:47.349958Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:43:51.323038Z	[ImageOptimizer] baseName: Oasissep2017, pagePath: news
2026-02-08T13:43:51.323366Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:51.323471Z	  '/image/download/news/Oasissep2017-md.webp',
2026-02-08T13:43:51.323532Z	  '/image/download/news/Oasissep2017-sm.webp',
2026-02-08T13:43:51.323672Z	  '/image/download/news/Oasissep2017-lg.webp',
2026-02-08T13:43:51.323761Z	  '/image/download/news/Oasissep2017.png',
2026-02-08T13:43:51.323874Z	  '/image/download/news/Oasissep2017.jpg'
2026-02-08T13:43:51.323982Z	]
2026-02-08T13:43:51.331741Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:43:52.231052Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:43:54.850156Z	[ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:43:54.850798Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:54.850957Z	  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:43:54.851155Z	  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:43:54.851275Z	  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:43:54.85141Z	  '/image/download/news/japanesegarden.png',
2026-02-08T13:43:54.851508Z	  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:43:54.851613Z	]
2026-02-08T13:43:54.857866Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:43:57.196556Z	[ImageOptimizer] baseName: tucsonundokai2023, pagePath: news
2026-02-08T13:43:57.196864Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:43:57.196987Z	  '/image/download/news/tucsonundokai2023-md.webp',
2026-02-08T13:43:57.197063Z	  '/image/download/news/tucsonundokai2023-sm.webp',
2026-02-08T13:43:57.197191Z	  '/image/download/news/tucsonundokai2023-lg.webp',
2026-02-08T13:43:57.197294Z	  '/image/download/news/tucsonundokai2023.png',
2026-02-08T13:43:57.197407Z	  '/image/download/news/tucsonundokai2023.jpg'
2026-02-08T13:43:57.197511Z	]
2026-02-08T13:43:57.205501Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:01.437107Z	[ImageOptimizer] baseName: notoearthquake1, pagePath: news
2026-02-08T13:44:01.437587Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:01.437979Z	  '/image/download/news/notoearthquake1-md.webp',
2026-02-08T13:44:01.438151Z	  '/image/download/news/notoearthquake1-sm.webp',
2026-02-08T13:44:01.438261Z	  '/image/download/news/notoearthquake1-lg.webp',
2026-02-08T13:44:01.438376Z	  '/image/download/news/notoearthquake1.png',
2026-02-08T13:44:01.438476Z	  '/image/download/news/notoearthquake1.jpg'
2026-02-08T13:44:01.43857Z	]
2026-02-08T13:44:01.4482Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:02.575413Z	[ImageOptimizer] baseName: newyearprayer, pagePath: news
2026-02-08T13:44:02.575672Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:02.575769Z	  '/image/download/news/newyearprayer-md.webp',
2026-02-08T13:44:02.57583Z	  '/image/download/news/newyearprayer-sm.webp',
2026-02-08T13:44:02.57589Z	  '/image/download/news/newyearprayer-lg.webp',
2026-02-08T13:44:02.575953Z	  '/image/download/news/newyearprayer.png',
2026-02-08T13:44:02.576006Z	  '/image/download/news/newyearprayer.jpg'
2026-02-08T13:44:02.576061Z	]
2026-02-08T13:44:02.583479Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:03.801338Z	[ImageOptimizer] baseName: kanjikentei2024, pagePath: news
2026-02-08T13:44:03.801861Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:03.801975Z	  '/image/download/news/kanjikentei2024-md.webp',
2026-02-08T13:44:03.802453Z	  '/image/download/news/kanjikentei2024-sm.webp',
2026-02-08T13:44:03.80256Z	  '/image/download/news/kanjikentei2024-lg.webp',
2026-02-08T13:44:03.802841Z	  '/image/download/news/kanjikentei2024.png',
2026-02-08T13:44:03.802918Z	  '/image/download/news/kanjikentei2024.jpg'
2026-02-08T13:44:03.803001Z	]
2026-02-08T13:44:03.810496Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:07.025817Z	[ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:44:07.026252Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:07.026759Z	  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:44:07.026909Z	  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:44:07.027039Z	  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:44:07.027202Z	  '/image/download/news/schooltablechair.png',
2026-02-08T13:44:07.027311Z	  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:44:07.027396Z	]
2026-02-08T13:44:07.034123Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:10.262868Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:13.70085Z	[ImageOptimizer] baseName: arizonamatsurilogo, pagePath: news
2026-02-08T13:44:13.701068Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:13.701171Z	  '/image/download/news/arizonamatsurilogo-md.webp',
2026-02-08T13:44:13.701236Z	  '/image/download/news/arizonamatsurilogo-sm.webp',
2026-02-08T13:44:13.701291Z	  '/image/download/news/arizonamatsurilogo-lg.webp',
2026-02-08T13:44:13.701355Z	  '/image/download/news/arizonamatsurilogo.png',
2026-02-08T13:44:13.701409Z	  '/image/download/news/arizonamatsurilogo.jpg'
2026-02-08T13:44:13.701461Z	]
2026-02-08T13:44:13.709078Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:15.013685Z	[ImageOptimizer] baseName: supportinghands, pagePath: news
2026-02-08T13:44:15.014016Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:15.014166Z	  '/image/download/news/supportinghands-md.webp',
2026-02-08T13:44:15.014297Z	  '/image/download/news/supportinghands-sm.webp',
2026-02-08T13:44:15.014407Z	  '/image/download/news/supportinghands-lg.webp',
2026-02-08T13:44:15.014657Z	  '/image/download/news/supportinghands.png',
2026-02-08T13:44:15.014901Z	  '/image/download/news/supportinghands.jpg'
2026-02-08T13:44:15.014998Z	]
2026-02-08T13:44:15.024312Z	
   Generating static pages (99/132) 
2026-02-08T13:44:15.024649Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:20.646766Z	[ImageOptimizer] baseName: childreninclassroom, pagePath: news
2026-02-08T13:44:20.647166Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:20.647315Z	  '/image/download/news/childreninclassroom-md.webp',
2026-02-08T13:44:20.647433Z	  '/image/download/news/childreninclassroom-sm.webp',
2026-02-08T13:44:20.647645Z	  '/image/download/news/childreninclassroom-lg.webp',
2026-02-08T13:44:20.647947Z	  '/image/download/news/childreninclassroom.png',
2026-02-08T13:44:20.648084Z	  '/image/download/news/childreninclassroom.jpg'
2026-02-08T13:44:20.648215Z	]
2026-02-08T13:44:20.656918Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:23.713057Z	[ImageOptimizer] baseName: hitomimcknight, pagePath: news
2026-02-08T13:44:23.713725Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:23.714091Z	  '/image/download/news/hitomimcknight-md.webp',
2026-02-08T13:44:23.714403Z	  '/image/download/news/hitomimcknight-sm.webp',
2026-02-08T13:44:23.71457Z	  '/image/download/news/hitomimcknight-lg.webp',
2026-02-08T13:44:23.714677Z	  '/image/download/news/hitomimcknight.png',
2026-02-08T13:44:23.714764Z	  '/image/download/news/hitomimcknight.jpg'
2026-02-08T13:44:23.714954Z	]
2026-02-08T13:44:23.722816Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:25.760232Z	[ImageOptimizer] baseName: kanken2022, pagePath: news
2026-02-08T13:44:25.760476Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:25.760553Z	  '/image/download/news/kanken2022-md.webp',
2026-02-08T13:44:25.760613Z	  '/image/download/news/kanken2022-sm.webp',
2026-02-08T13:44:25.760669Z	  '/image/download/news/kanken2022-lg.webp',
2026-02-08T13:44:25.760722Z	  '/image/download/news/kanken2022.png',
2026-02-08T13:44:25.760774Z	  '/image/download/news/kanken2022.jpg'
2026-02-08T13:44:25.760826Z	]
2026-02-08T13:44:25.768725Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:26.712888Z	[ImageOptimizer] baseName: kanjikentei2020, pagePath: news
2026-02-08T13:44:26.713189Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:26.713283Z	  '/image/download/news/kanjikentei2020-md.webp',
2026-02-08T13:44:26.713422Z	  '/image/download/news/kanjikentei2020-sm.webp',
2026-02-08T13:44:26.713821Z	  '/image/download/news/kanjikentei2020-lg.webp',
2026-02-08T13:44:26.714041Z	  '/image/download/news/kanjikentei2020.png',
2026-02-08T13:44:26.714165Z	  '/image/download/news/kanjikentei2020.jpg'
2026-02-08T13:44:26.714238Z	]
2026-02-08T13:44:26.719392Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:27.587272Z	[ImageOptimizer] baseName: 2020newyear, pagePath: news
2026-02-08T13:44:27.587671Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:27.587917Z	  '/image/download/news/2020newyear-md.webp',
2026-02-08T13:44:27.588164Z	  '/image/download/news/2020newyear-sm.webp',
2026-02-08T13:44:27.588384Z	  '/image/download/news/2020newyear-lg.webp',
2026-02-08T13:44:27.588492Z	  '/image/download/news/2020newyear.png',
2026-02-08T13:44:27.588587Z	  '/image/download/news/2020newyear.jpg'
2026-02-08T13:44:27.588685Z	]
2026-02-08T13:44:27.594968Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:28.970551Z	[ImageOptimizer] baseName: schoolchildrensmiles, pagePath: news
2026-02-08T13:44:28.970891Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:28.971121Z	  '/image/download/news/schoolchildrensmiles-md.webp',
2026-02-08T13:44:28.971248Z	  '/image/download/news/schoolchildrensmiles-sm.webp',
2026-02-08T13:44:28.971369Z	  '/image/download/news/schoolchildrensmiles-lg.webp',
2026-02-08T13:44:28.971483Z	  '/image/download/news/schoolchildrensmiles.png',
2026-02-08T13:44:28.971598Z	  '/image/download/news/schoolchildrensmiles.jpg'
2026-02-08T13:44:28.971735Z	]
2026-02-08T13:44:28.978046Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:30.19858Z	Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:44:31.069164Z	Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:44:31.071987Z	[ImageOptimizer] baseName: kanjikenteilogo, pagePath: news
2026-02-08T13:44:31.0722Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:31.072325Z	  '/image/download/news/kanjikenteilogo-md.webp',
2026-02-08T13:44:31.072427Z	  '/image/download/news/kanjikenteilogo-sm.webp',
2026-02-08T13:44:31.072526Z	  '/image/download/news/kanjikenteilogo-lg.webp',
2026-02-08T13:44:31.072649Z	  '/image/download/news/kanjikenteilogo.png',
2026-02-08T13:44:31.072715Z	  '/image/download/news/kanjikenteilogo.jpg'
2026-02-08T13:44:31.072807Z	]
2026-02-08T13:44:31.079779Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:32.086378Z	[ImageOptimizer] baseName: newyear2021, pagePath: news
2026-02-08T13:44:32.086609Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:32.086755Z	  '/image/download/news/newyear2021-md.webp',
2026-02-08T13:44:32.086869Z	  '/image/download/news/newyear2021-sm.webp',
2026-02-08T13:44:32.08707Z	  '/image/download/news/newyear2021-lg.webp',
2026-02-08T13:44:32.087428Z	  '/image/download/news/newyear2021.png',
2026-02-08T13:44:32.08755Z	  '/image/download/news/newyear2021.jpg'
2026-02-08T13:44:32.087645Z	]
2026-02-08T13:44:32.093623Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:45.126229Z	[ImageOptimizer] baseName: tucsonundokai2020, pagePath: news
2026-02-08T13:44:45.126512Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:45.126643Z	  '/image/download/news/tucsonundokai2020-md.webp',
2026-02-08T13:44:45.126715Z	  '/image/download/news/tucsonundokai2020-sm.webp',
2026-02-08T13:44:45.126771Z	  '/image/download/news/tucsonundokai2020-lg.webp',
2026-02-08T13:44:45.126825Z	  '/image/download/news/tucsonundokai2020.png',
2026-02-08T13:44:45.126879Z	  '/image/download/news/tucsonundokai2020.jpg'
2026-02-08T13:44:45.126933Z	]
2026-02-08T13:44:45.135919Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:48.554802Z	[ImageOptimizer] baseName: boystudyonline, pagePath: news
2026-02-08T13:44:48.555136Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:48.55531Z	  '/image/download/news/boystudyonline-md.webp',
2026-02-08T13:44:48.555431Z	  '/image/download/news/boystudyonline-sm.webp',
2026-02-08T13:44:48.555532Z	  '/image/download/news/boystudyonline-lg.webp',
2026-02-08T13:44:48.555637Z	  '/image/download/news/boystudyonline.png',
2026-02-08T13:44:48.55574Z	  '/image/download/news/boystudyonline.jpg'
2026-02-08T13:44:48.555845Z	]
2026-02-08T13:44:48.564766Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:50.76043Z	[ImageOptimizer] baseName: schoolchairtable, pagePath: news
2026-02-08T13:44:50.760701Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:50.760879Z	  '/image/download/news/schoolchairtable-md.webp',
2026-02-08T13:44:50.761007Z	  '/image/download/news/schoolchairtable-sm.webp',
2026-02-08T13:44:50.761565Z	  '/image/download/news/schoolchairtable-lg.webp',
2026-02-08T13:44:50.761732Z	  '/image/download/news/schoolchairtable.png',
2026-02-08T13:44:50.762195Z	  '/image/download/news/schoolchairtable.jpg'
2026-02-08T13:44:50.762351Z	]
2026-02-08T13:44:50.768969Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:55.852083Z	[ImageOptimizer] baseName: remotelearningkid, pagePath: news
2026-02-08T13:44:55.852774Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:55.852895Z	  '/image/download/news/remotelearningkid-md.webp',
2026-02-08T13:44:55.852959Z	  '/image/download/news/remotelearningkid-sm.webp',
2026-02-08T13:44:55.853014Z	  '/image/download/news/remotelearningkid-lg.webp',
2026-02-08T13:44:55.85311Z	  '/image/download/news/remotelearningkid.png',
2026-02-08T13:44:55.853194Z	  '/image/download/news/remotelearningkid.jpg'
2026-02-08T13:44:55.853255Z	]
2026-02-08T13:44:55.861135Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:44:57.569806Z	[ImageOptimizer] baseName: sponsorthanks, pagePath: news
2026-02-08T13:44:57.570155Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:44:57.570309Z	  '/image/download/news/sponsorthanks-md.webp',
2026-02-08T13:44:57.570417Z	  '/image/download/news/sponsorthanks-sm.webp',
2026-02-08T13:44:57.57052Z	  '/image/download/news/sponsorthanks-lg.webp',
2026-02-08T13:44:57.570629Z	  '/image/download/news/sponsorthanks.png',
2026-02-08T13:44:57.570716Z	  '/image/download/news/sponsorthanks.jpg'
2026-02-08T13:44:57.570804Z	]
2026-02-08T13:44:57.58078Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:08.53983Z	[ImageOptimizer] baseName: kanjikentei2023, pagePath: news
2026-02-08T13:45:08.540166Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:08.540321Z	  '/image/download/news/kanjikentei2023-md.webp',
2026-02-08T13:45:08.540433Z	  '/image/download/news/kanjikentei2023-sm.webp',
2026-02-08T13:45:08.54054Z	  '/image/download/news/kanjikentei2023-lg.webp',
2026-02-08T13:45:08.540644Z	  '/image/download/news/kanjikentei2023.png',
2026-02-08T13:45:08.540756Z	  '/image/download/news/kanjikentei2023.jpg'
2026-02-08T13:45:08.540857Z	]
2026-02-08T13:45:08.549788Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:13.020473Z	[ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:45:13.020748Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:13.02088Z	  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:45:13.020983Z	  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:45:13.021133Z	  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:45:13.021263Z	  '/image/download/news/emptyschool.png',
2026-02-08T13:45:13.021348Z	  '/image/download/news/emptyschool.jpg'
2026-02-08T13:45:13.021459Z	]
2026-02-08T13:45:13.030392Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:14.706151Z	[ImageOptimizer] baseName: pandemicprevention, pagePath: news
2026-02-08T13:45:14.706454Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:14.706631Z	  '/image/download/news/pandemicprevention-md.webp',
2026-02-08T13:45:14.706772Z	  '/image/download/news/pandemicprevention-sm.webp',
2026-02-08T13:45:14.706867Z	  '/image/download/news/pandemicprevention-lg.webp',
2026-02-08T13:45:14.706971Z	  '/image/download/news/pandemicprevention.png',
2026-02-08T13:45:14.70709Z	  '/image/download/news/pandemicprevention.jpg'
2026-02-08T13:45:14.70723Z	]
2026-02-08T13:45:14.716034Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:16.065722Z	
   Generating static pages (116/132) 
2026-02-08T13:45:16.066374Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:19.02595Z	[ImageOptimizer] baseName: mochipounding, pagePath: news
2026-02-08T13:45:19.026372Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:19.026508Z	  '/image/download/news/mochipounding-md.webp',
2026-02-08T13:45:19.026615Z	  '/image/download/news/mochipounding-sm.webp',
2026-02-08T13:45:19.026789Z	  '/image/download/news/mochipounding-lg.webp',
2026-02-08T13:45:19.0269Z	  '/image/download/news/mochipounding.png',
2026-02-08T13:45:19.026994Z	  '/image/download/news/mochipounding.jpg'
2026-02-08T13:45:19.02713Z	]
2026-02-08T13:45:19.034906Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:22.786541Z	[ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:45:22.787178Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:22.787358Z	  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:45:22.787472Z	  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:45:22.787544Z	  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:45:22.787613Z	  '/image/download/news/emptyschool.png',
2026-02-08T13:45:22.787691Z	  '/image/download/news/emptyschool.jpg'
2026-02-08T13:45:22.787783Z	]
2026-02-08T13:45:22.799308Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:27.378961Z	[ImageOptimizer] baseName: SAJCClogo, pagePath: news
2026-02-08T13:45:27.379349Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:27.379465Z	  '/image/download/news/SAJCClogo-md.webp',
2026-02-08T13:45:27.379545Z	  '/image/download/news/SAJCClogo-sm.webp',
2026-02-08T13:45:27.379702Z	  '/image/download/news/SAJCClogo-lg.webp',
2026-02-08T13:45:27.379778Z	  '/image/download/news/SAJCClogo.png',
2026-02-08T13:45:27.37988Z	  '/image/download/news/SAJCClogo.jpg'
2026-02-08T13:45:27.379956Z	]
2026-02-08T13:45:27.386015Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:29.338128Z	[ImageOptimizer] baseName: lastdayofschool2021, pagePath: news
2026-02-08T13:45:29.338599Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:29.33874Z	  '/image/download/news/lastdayofschool2021-md.webp',
2026-02-08T13:45:29.338891Z	  '/image/download/news/lastdayofschool2021-sm.webp',
2026-02-08T13:45:29.338967Z	  '/image/download/news/lastdayofschool2021-lg.webp',
2026-02-08T13:45:29.339025Z	  '/image/download/news/lastdayofschool2021.png',
2026-02-08T13:45:29.33908Z	  '/image/download/news/lastdayofschool2021.jpg'
2026-02-08T13:45:29.339523Z	]
2026-02-08T13:45:29.34571Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:30.659172Z	[ImageOptimizer] baseName: tucsonundokai2021, pagePath: news
2026-02-08T13:45:30.659506Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:30.659699Z	  '/image/download/news/tucsonundokai2021-md.webp',
2026-02-08T13:45:30.659803Z	  '/image/download/news/tucsonundokai2021-sm.webp',
2026-02-08T13:45:30.6599Z	  '/image/download/news/tucsonundokai2021-lg.webp',
2026-02-08T13:45:30.659995Z	  '/image/download/news/tucsonundokai2021.png',
2026-02-08T13:45:30.660085Z	  '/image/download/news/tucsonundokai2021.jpg'
2026-02-08T13:45:30.660202Z	]
2026-02-08T13:45:30.665523Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:33.646211Z	[ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:45:33.646532Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:33.646704Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:45:33.646828Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:45:33.646936Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:45:33.647029Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:45:33.647151Z	  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:45:33.647266Z	]
2026-02-08T13:45:33.654806Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:35.992466Z	[ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:45:35.992772Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:35.993172Z	  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:45:35.993297Z	  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:45:35.993401Z	  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:45:35.993511Z	  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:45:35.993618Z	  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:45:35.9937Z	]
2026-02-08T13:45:36.001879Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:44.414544Z	[ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:45:44.414872Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:44.415012Z	  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:45:44.415148Z	  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:45:44.415289Z	  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:45:44.415397Z	  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:45:44.415496Z	  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:45:44.415591Z	]
2026-02-08T13:45:44.423401Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:48.172365Z	[ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:45:48.172878Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:48.173075Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:45:48.173342Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:45:48.173508Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:45:48.173656Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:45:48.173826Z	  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:45:48.173971Z	]
2026-02-08T13:45:48.182434Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:50.390066Z	[ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:45:50.390419Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:50.390555Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:45:50.390718Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:45:50.390842Z	  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:45:50.390945Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:45:50.391039Z	  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:45:50.391152Z	]
2026-02-08T13:45:50.399027Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:51.875904Z	[ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:45:51.876235Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:51.876381Z	  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:45:51.876492Z	  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:45:51.876597Z	  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:45:51.876717Z	  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:45:51.876824Z	  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:45:51.876924Z	]
2026-02-08T13:45:51.884727Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:53.889406Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:45:53.889701Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:53.889843Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:45:53.889972Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:45:53.890105Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:45:53.890243Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:45:53.890378Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:45:53.890508Z	]
2026-02-08T13:45:53.896832Z	🚀 グローバルキャッシュから取得: news
2026-02-08T13:45:56.95982Z	[ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:45:56.960133Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:56.960336Z	  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:45:56.960426Z	  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:45:56.960483Z	  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:45:56.960539Z	  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:45:56.960598Z	  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:45:56.960662Z	]
2026-02-08T13:45:56.966266Z	🚀 グローバルキャッシュから取得: event
2026-02-08T13:45:58.121734Z	PDF already exists: 2026kenken.pdf
2026-02-08T13:45:58.247791Z	PDF already exists: 2026kenken.pdf
2026-02-08T13:45:58.25141Z	[ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:45:58.251802Z	[ImageOptimizer] imagePaths: [
2026-02-08T13:45:58.251959Z	  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:45:58.252074Z	  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:45:58.252205Z	  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:45:58.252316Z	  '/image/download/event/2026kenken.png',
2026-02-08T13:45:58.252426Z	  '/image/download/event/2026kenken.jpg'
2026-02-08T13:45:58.252531Z	]
2026-02-08T13:45:58.259853Z	🚀 グローバルキャッシュから取得: event
2026-02-08T13:45:59.995438Z	Error fetching event item: TypeError: Cannot read properties of undefined (reading 'plain_text')
2026-02-08T13:45:59.99576Z	    at /opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40199
2026-02-08T13:45:59.996085Z	    at Array.map (<anonymous>)
2026-02-08T13:45:59.996275Z	    at getStaticProps (/opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40150)
2026-02-08T13:45:59.996416Z	    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2026-02-08T13:46:00.007664Z	
 ✓ Generating static pages (132/132) 
2026-02-08T13:46:00.099821Z	   Finalizing page optimization ...
2026-02-08T13:46:00.100085Z	   Collecting build traces ...
2026-02-08T13:46:00.660719Z	
2026-02-08T13:46:00.664697Z	Route (pages)                                                   Size     First Load JS
2026-02-08T13:46:00.664935Z	┌   /_app                                                       0 B             136 kB
2026-02-08T13:46:00.665107Z	├ ● /[[...slug]] (400033 ms)                                    17.4 kB         153 kB
2026-02-08T13:46:00.66525Z	├   ├ /en/news/112a8c0e-cf8c-8047-9797-e58ca59ecd54 (13042 ms)
2026-02-08T13:46:00.66537Z	├   ├ /en/news/112a8c0e-cf8c-8081-ba97-ef38f356233d (10969 ms)
2026-02-08T13:46:00.665486Z	├   ├ /program/kanji_kentei (9121 ms)
2026-02-08T13:46:00.665597Z	├   ├ /en/news/262a8c0e-cf8c-80bb-b6c2-e12998eeaf15 (8421 ms)
2026-02-08T13:46:00.665723Z	├   ├ /en/about/report (8242 ms)
2026-02-08T13:46:00.665833Z	├   ├ /news/112a8c0e-cf8c-80b7-b324-ea602066a777 (8147 ms)
2026-02-08T13:46:00.665925Z	├   ├ /en/about/mission (7117 ms)
2026-02-08T13:46:00.666018Z	├   └ [+123 more paths] (avg 2723 ms)
2026-02-08T13:46:00.666139Z	└ ○ /404                                                        485 B           136 kB
2026-02-08T13:46:00.666257Z	+ First Load JS shared by all                                   145 kB
2026-02-08T13:46:00.666361Z	  ├ chunks/226-d1d7dd7b32ef6b5e.js                              41.7 kB
2026-02-08T13:46:00.666461Z	  ├ chunks/636-ec4236f1d6966819.js                              34.5 kB
2026-02-08T13:46:00.666793Z	  ├ chunks/main-50cafcd35bca0b7c.js                             136 B
2026-02-08T13:46:00.666882Z	  ├ chunks/pages/_app-b263803bead3572a.js                       12.9 kB
2026-02-08T13:46:00.667077Z	  ├ chunks/react-e45e43352d762593.js                            44 kB
2026-02-08T13:46:00.667224Z	  ├ chunks/webpack-4f8741db61a74775.js                          2.59 kB
2026-02-08T13:46:00.667345Z	  └ css/82a031d7c987b531.css                                    8.87 kB
2026-02-08T13:46:00.667452Z	
2026-02-08T13:46:00.667546Z	○  (Static)  automatically rendered as static HTML (uses no initial props)
2026-02-08T13:46:00.667639Z	●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
2026-02-08T13:46:00.66774Z	
2026-02-08T13:46:01.022014Z	 ⚠ "next export" is no longer needed when "output: export" is configured in next.config.js https://nextjs.org/docs/advanced-features/static-html-export
2026-02-08T13:46:01.022454Z	Export successful. Files written to /opt/buildhome/repo/out
2026-02-08T13:46:01.129352Z	✨ [next-sitemap] Loading next-sitemap config: file:///opt/buildhome/repo/next-sitemap.js
2026-02-08T13:46:01.139342Z	✅ [next-sitemap] Generation completed
2026-02-08T13:46:01.140717Z	┌───────────────┬────────┐
2026-02-08T13:46:01.140872Z	│ (index)       │ Values │
2026-02-08T13:46:01.140995Z	├───────────────┼────────┤
2026-02-08T13:46:01.14122Z	│ indexSitemaps │ 1      │
2026-02-08T13:46:01.14139Z	│ sitemaps      │ 1      │
2026-02-08T13:46:01.141496Z	└───────────────┴────────┘
2026-02-08T13:46:01.141598Z	-----------------------------------------------------
2026-02-08T13:46:01.141669Z	 SITEMAP INDICES 
2026-02-08T13:46:01.141747Z	-----------------------------------------------------
2026-02-08T13:46:01.141852Z	
2026-02-08T13:46:01.141947Z	   ○ https://tjschool.org/sitemap.xml
2026-02-08T13:46:01.14204Z	
2026-02-08T13:46:01.142177Z	
2026-02-08T13:46:01.142278Z	-----------------------------------------------------
2026-02-08T13:46:01.142375Z	 SITEMAPS 
2026-02-08T13:46:01.14247Z	-----------------------------------------------------
2026-02-08T13:46:01.142593Z	
2026-02-08T13:46:01.14269Z	   ○ https://tjschool.org/sitemap-0.xml
2026-02-08T13:46:01.142779Z	
2026-02-08T13:46:01.142867Z	
2026-02-08T13:46:02.637915Z	⚡️ @cloudflare/next-on-pages CLI v.1.13.16
2026-02-08T13:46:02.803327Z	⚡️ Detected Package Manager: npm (10.8.2)
2026-02-08T13:46:02.803979Z	⚡️ Preparing project...
2026-02-08T13:46:02.806779Z	⚡️ Project is ready
2026-02-08T13:46:02.806994Z	⚡️ Building project...
2026-02-08T13:46:03.626519Z	▲  Vercel CLI 44.7.3
2026-02-08T13:46:03.632698Z	▲  > NOTE: The Vercel CLI now collects telemetry regarding usage of the CLI.
2026-02-08T13:46:03.63303Z	▲  > This information is used to shape the CLI roadmap and prioritize features.
2026-02-08T13:46:03.633238Z	▲  > You can learn more, including how to opt-out if you'd not like to participate in this program, by visiting the following URL:
2026-02-08T13:46:03.633361Z	▲  > https://vercel.com/docs/cli/about-telemetry
2026-02-08T13:46:03.757068Z	▲  WARN! Build not running on Vercel. System environment variables will not be available.
2026-02-08T13:46:04.112889Z	▲  WARNING: You should not upload the `.next` directory.
2026-02-08T13:46:04.619115Z	▲  ➤ YN0000: Successfully set enableGlobalCache to false
2026-02-08T13:46:04.646155Z	▲  Installing dependencies...
2026-02-08T13:46:05.21008Z	▲  ➤ YN0000: · Yarn 4.2.2
2026-02-08T13:46:05.220542Z	▲  ➤ YN0000: ┌ Resolution step
2026-02-08T13:46:05.391745Z	▲  ➤ YN0000: └ Completed
2026-02-08T13:46:05.42698Z	▲  ➤ YN0000: ┌ Fetch step
2026-02-08T13:46:06.862443Z	▲  ➤ YN0000: └ Completed in 1s 435ms
2026-02-08T13:46:06.894232Z	▲  ➤ YN0000: ┌ Link step
2026-02-08T13:46:07.098944Z	▲  ➤ YN0000: └ Completed in 0s 205ms
2026-02-08T13:46:07.160361Z	▲  ➤ YN0000: · Done in 1s 950ms
2026-02-08T13:46:07.18096Z	▲  Detected Next.js version: 13.5.11
2026-02-08T13:46:07.203371Z	▲  Running "yarn run build"
2026-02-08T13:46:08.440106Z	▲  Linting and checking validity of types ...
2026-02-08T13:46:09.679528Z	▲  ./components/pages/event/detail.js
2026-02-08T13:46:09.679735Z	▲  166:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:46:09.679831Z	▲  
2026-02-08T13:46:09.679897Z	▲  ./components/pages/news/detail.js
2026-02-08T13:46:09.679954Z	▲  166:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:46:09.680065Z	▲  
2026-02-08T13:46:09.680169Z	▲  ./components/pages/program/kanji_kentei.js
2026-02-08T13:46:09.680234Z	▲  88:6  Warning: React Hook useEffect has a missing dependency: 'processKanjiKenteiData'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
2026-02-08T13:46:09.680311Z	▲  
2026-02-08T13:46:09.680377Z	▲  ./components/parts/event/detail.js
2026-02-08T13:46:09.680438Z	▲  53:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:46:09.680494Z	▲  
2026-02-08T13:46:09.680546Z	▲  ./components/parts/news/detail.js
2026-02-08T13:46:09.680599Z	▲  53:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:46:09.680658Z	▲  
2026-02-08T13:46:09.680709Z	▲  ./components/parts/program/calender/index.js
2026-02-08T13:46:09.680766Z	▲  254:6  Warning: React Hook useMemo has an unnecessary dependency: 'locale'. Either exclude it or remove the dependency array.  react-hooks/exhaustive-deps
2026-02-08T13:46:09.680821Z	▲  319:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
2026-02-08T13:46:09.680878Z	▲  501:25  Warning: Missing "key" prop for element in iterator  react/jsx-key
2026-02-08T13:46:09.680931Z	▲  
2026-02-08T13:46:09.680986Z	▲  info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
2026-02-08T13:46:09.681048Z	▲  Creating an optimized production build ...
2026-02-08T13:46:09.72877Z	▲  ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
2026-02-08T13:46:11.500053Z	▲  ✓ Compiled successfully
2026-02-08T13:46:11.502832Z	▲  Collecting page data ...
2026-02-08T13:46:11.937302Z	▲  🚫 キャッシュ無効 (news): 直接APIから取得します
2026-02-08T13:46:11.937765Z	▲  🌐 Notion APIから取得中: news
2026-02-08T13:46:13.638821Z	▲  ✅ API取得完了: news (42件)
2026-02-08T13:46:13.639053Z	▲  🚫 キャッシュ無効 (event): 直接APIから取得します
2026-02-08T13:46:13.639256Z	▲  🌐 Notion APIから取得中: event
2026-02-08T13:46:14.323156Z	▲  ✅ API取得完了: event (2件)
2026-02-08T13:46:14.968958Z	▲  Generating static pages (0/132) ...
2026-02-08T13:46:15.153547Z	▲  🚫 キャッシュ無効 (slider): 直接APIから取得します
2026-02-08T13:46:15.154182Z	▲  🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:46:15.154313Z	▲  🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:46:15.154504Z	▲  🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:46:15.154603Z	▲  🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:46:15.154665Z	▲  🌐 Notion APIから取得中: slider
2026-02-08T13:46:15.15472Z	▲  🌐 Notion APIから取得中: sponsors
2026-02-08T13:46:15.154772Z	▲  🌐 Notion APIから取得中: schedule
2026-02-08T13:46:15.154835Z	▲  🌐 Notion APIから取得中: about
2026-02-08T13:46:15.154897Z	▲  🌐 Notion APIから取得中: general
2026-02-08T13:46:15.380887Z	▲  ✅ API取得完了: slider (4件)
2026-02-08T13:46:15.381194Z	▲  ✅ API取得完了: about (3件)
2026-02-08T13:46:15.392794Z	▲  ✅ API取得完了: sponsors (3件)
2026-02-08T13:46:15.598233Z	▲  ✅ API取得完了: schedule (48件)
2026-02-08T13:46:16.693513Z	▲  ✅ API取得完了: general (1件)
2026-02-08T13:46:18.150474Z	▲  🚫 キャッシュ無効 (news): 直接APIから取得します
2026-02-08T13:46:18.150856Z	▲  🌐 Notion APIから取得中: news
2026-02-08T13:46:18.754727Z	▲  ✅ API取得完了: news (42件)
2026-02-08T13:46:19.342902Z	▲  [convertAboutFromDatabase] Processing item with tag: about, title: 本校について
2026-02-08T13:46:19.343245Z	▲  [convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:46:19.343368Z	▲  [convertAboutFromDatabase] Processing item with tag: mission, title: Mission
2026-02-08T13:46:19.34347Z	▲  [convertAboutFromDatabase] Set mission
2026-02-08T13:46:19.343572Z	▲  [convertAboutFromDatabase] Processing item with tag: vision, title: Vision
2026-02-08T13:46:19.343738Z	▲  [convertAboutFromDatabase] Set vision
2026-02-08T13:46:19.343951Z	▲  [convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:46:19.344085Z	▲  [ImageOptimizer] baseName: Sports_Day_-_Giant_Ball_rolling, pagePath: slider
2026-02-08T13:46:19.344222Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.34429Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-md.webp',
2026-02-08T13:46:19.34436Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-sm.webp',
2026-02-08T13:46:19.344417Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-lg.webp',
2026-02-08T13:46:19.344472Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.png',
2026-02-08T13:46:19.344545Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.jpg'
2026-02-08T13:46:19.344602Z	▲  ]
2026-02-08T13:46:19.344659Z	▲  [ImageOptimizer] baseName: Summer_Festival_-_Snack_fishing, pagePath: slider
2026-02-08T13:46:19.344722Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.344783Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing-md.webp',
2026-02-08T13:46:19.344862Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing-sm.webp',
2026-02-08T13:46:19.344977Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing-lg.webp',
2026-02-08T13:46:19.345106Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing.png',
2026-02-08T13:46:19.345252Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing.jpg'
2026-02-08T13:46:19.34537Z	▲  ]
2026-02-08T13:46:19.345486Z	▲  [ImageOptimizer] baseName: winter, pagePath: slider
2026-02-08T13:46:19.34555Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.34566Z	▲  '/image/download/slider/winter-md.webp',
2026-02-08T13:46:19.345753Z	▲  '/image/download/slider/winter-sm.webp',
2026-02-08T13:46:19.345817Z	▲  '/image/download/slider/winter-lg.webp',
2026-02-08T13:46:19.345894Z	▲  '/image/download/slider/winter.png',
2026-02-08T13:46:19.346057Z	▲  '/image/download/slider/winter.jpg'
2026-02-08T13:46:19.346168Z	▲  ]
2026-02-08T13:46:19.346235Z	▲  [ImageOptimizer] baseName: katakana, pagePath: slider
2026-02-08T13:46:19.346293Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.346348Z	▲  '/image/download/slider/katakana-md.webp',
2026-02-08T13:46:19.346408Z	▲  '/image/download/slider/katakana-sm.webp',
2026-02-08T13:46:19.346496Z	▲  '/image/download/slider/katakana-lg.webp',
2026-02-08T13:46:19.346634Z	▲  '/image/download/slider/katakana.png',
2026-02-08T13:46:19.346741Z	▲  '/image/download/slider/katakana.jpg'
2026-02-08T13:46:19.346868Z	▲  ]
2026-02-08T13:46:19.347012Z	▲  [ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:46:19.347077Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.347186Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:46:19.347282Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:46:19.347391Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:46:19.347452Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:46:19.347512Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:46:19.347568Z	▲  ]
2026-02-08T13:46:19.347627Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:46:19.347693Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.34775Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:46:19.347848Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:46:19.347977Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:46:19.34805Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:46:19.349183Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:46:19.349339Z	▲  ]
2026-02-08T13:46:19.350362Z	▲  [ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:46:19.350661Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.350789Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:46:19.350925Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:46:19.351042Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:46:19.351182Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:46:19.35129Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:46:19.351447Z	▲  ]
2026-02-08T13:46:19.351522Z	▲  [ImageOptimizer] baseName: about, pagePath: about
2026-02-08T13:46:19.351628Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.351722Z	▲  '/image/download/about/about-md.webp',
2026-02-08T13:46:19.35183Z	▲  '/image/download/about/about-sm.webp',
2026-02-08T13:46:19.351934Z	▲  '/image/download/about/about-lg.webp',
2026-02-08T13:46:19.352052Z	▲  '/image/download/about/about.png',
2026-02-08T13:46:19.352209Z	▲  '/image/download/about/about.jpg'
2026-02-08T13:46:19.352323Z	▲  ]
2026-02-08T13:46:19.352431Z	▲  [ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:46:19.352534Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.352663Z	▲  '/image/download/about/mission-md.webp',
2026-02-08T13:46:19.352776Z	▲  '/image/download/about/mission-sm.webp',
2026-02-08T13:46:19.352938Z	▲  '/image/download/about/mission-lg.webp',
2026-02-08T13:46:19.353075Z	▲  '/image/download/about/mission.png',
2026-02-08T13:46:19.353228Z	▲  '/image/download/about/mission.jpg'
2026-02-08T13:46:19.353402Z	▲  ]
2026-02-08T13:46:19.353496Z	▲  [ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:46:19.353581Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.353669Z	▲  '/image/download/about/vision-md.webp',
2026-02-08T13:46:19.353752Z	▲  '/image/download/about/vision-sm.webp',
2026-02-08T13:46:19.353842Z	▲  '/image/download/about/vision-lg.webp',
2026-02-08T13:46:19.353921Z	▲  '/image/download/about/vision.png',
2026-02-08T13:46:19.353997Z	▲  '/image/download/about/vision.jpg'
2026-02-08T13:46:19.354074Z	▲  ]
2026-02-08T13:46:19.354178Z	▲  [OpportunityEntity] 画像データ: {
2026-02-08T13:46:19.354256Z	▲  originalName: 'employment.png',
2026-02-08T13:46:19.354342Z	▲  baseName: 'employment',
2026-02-08T13:46:19.354432Z	▲  expectedPath: '/image/download/opportunity/employment.png'
2026-02-08T13:46:19.354545Z	▲  }
2026-02-08T13:46:19.354642Z	▲  [ImageOptimizer] baseName: employment, pagePath: opportunity
2026-02-08T13:46:19.354742Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.354838Z	▲  '/image/download/opportunity/employment-md.webp',
2026-02-08T13:46:19.354938Z	▲  '/image/download/opportunity/employment-sm.webp',
2026-02-08T13:46:19.355056Z	▲  '/image/download/opportunity/employment-lg.webp',
2026-02-08T13:46:19.355167Z	▲  '/image/download/opportunity/employment.png',
2026-02-08T13:46:19.355289Z	▲  '/image/download/opportunity/employment.jpg'
2026-02-08T13:46:19.355402Z	▲  ]
2026-02-08T13:46:19.355496Z	▲  [ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:46:19.355587Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.355691Z	▲  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:46:19.355804Z	▲  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:46:19.355933Z	▲  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:46:19.356036Z	▲  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:46:19.356143Z	▲  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:46:19.35625Z	▲  ]
2026-02-08T13:46:19.356353Z	▲  [ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:46:19.356455Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.356551Z	▲  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:46:19.356651Z	▲  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:46:19.356776Z	▲  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:46:19.356881Z	▲  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:46:19.356977Z	▲  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:46:19.357082Z	▲  ]
2026-02-08T13:46:19.357242Z	▲  [ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:46:19.357317Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:19.357379Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:46:19.357446Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:46:19.357502Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:46:19.357557Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:46:19.357609Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:46:19.357664Z	▲  ]
2026-02-08T13:46:19.357724Z	▲  Warning: data for page "/[[...slug]]" (path "/") is 199 kB which exceeds the threshold of 128 kB, this amount of data can reduce performance.
2026-02-08T13:46:19.35778Z	▲  See more info here: https://nextjs.org/docs/messages/large-page-data
2026-02-08T13:46:19.373852Z	▲  🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:46:19.374022Z	▲  🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:46:19.374175Z	▲  🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:46:19.374298Z	▲  🌐 Notion APIから取得中: greeting
2026-02-08T13:46:19.374413Z	▲  🌐 Notion APIから取得中: story
2026-02-08T13:46:19.374531Z	▲  🌐 Notion APIから取得中: history
2026-02-08T13:46:19.76992Z	▲  ✅ API取得完了: story (1件)
2026-02-08T13:46:19.77021Z	▲  ✅ API取得完了: history (1件)
2026-02-08T13:46:20.068797Z	▲  ✅ API取得完了: greeting (1件)
2026-02-08T13:46:20.069143Z	▲  [ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:46:20.069359Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:20.069491Z	▲  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:46:20.069617Z	▲  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:46:20.06971Z	▲  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:46:20.069817Z	▲  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:46:20.069932Z	▲  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:46:20.07003Z	▲  ]
2026-02-08T13:46:20.070194Z	▲  [ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:46:20.070387Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:20.070556Z	▲  '/image/download/history/historty1-md.webp',
2026-02-08T13:46:20.070625Z	▲  '/image/download/history/historty1-sm.webp',
2026-02-08T13:46:20.07068Z	▲  '/image/download/history/historty1-lg.webp',
2026-02-08T13:46:20.070738Z	▲  '/image/download/history/historty1.png',
2026-02-08T13:46:20.070795Z	▲  '/image/download/history/historty1.jpg'
2026-02-08T13:46:20.07085Z	▲  ]
2026-02-08T13:46:20.070905Z	▲  [ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:46:20.070959Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:20.071023Z	▲  '/image/download/history/historty2-md.webp',
2026-02-08T13:46:20.071084Z	▲  '/image/download/history/historty2-sm.webp',
2026-02-08T13:46:20.071176Z	▲  '/image/download/history/historty2-lg.webp',
2026-02-08T13:46:20.071234Z	▲  '/image/download/history/historty2.png',
2026-02-08T13:46:20.071355Z	▲  '/image/download/history/historty2.jpg'
2026-02-08T13:46:20.071785Z	▲  ]
2026-02-08T13:46:20.071914Z	▲  [ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:46:20.072022Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:20.072148Z	▲  '/image/download/history/historty3-md.webp',
2026-02-08T13:46:20.072252Z	▲  '/image/download/history/historty3-sm.webp',
2026-02-08T13:46:20.072351Z	▲  '/image/download/history/historty3-lg.webp',
2026-02-08T13:46:20.072455Z	▲  '/image/download/history/historty3.png',
2026-02-08T13:46:20.072554Z	▲  '/image/download/history/historty3.jpg'
2026-02-08T13:46:20.072655Z	▲  ]
2026-02-08T13:46:20.072765Z	▲  Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:46:20.072873Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:20.073046Z	▲  Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:46:20.073189Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:20.073325Z	▲  Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:46:20.073479Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:20.092188Z	▲  🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:46:20.092377Z	▲  🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:46:20.092495Z	▲  🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:46:20.092614Z	▲  🌐 Notion APIから取得中: greeting
2026-02-08T13:46:20.092745Z	▲  🌐 Notion APIから取得中: story
2026-02-08T13:46:20.092899Z	▲  🌐 Notion APIから取得中: history
2026-02-08T13:46:20.329733Z	▲  ✅ API取得完了: story (1件)
2026-02-08T13:46:20.43139Z	▲  ✅ API取得完了: history (1件)
2026-02-08T13:46:21.627604Z	▲  ✅ API取得完了: greeting (1件)
2026-02-08T13:46:21.631992Z	▲  [ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:46:21.632188Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:21.632263Z	▲  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:46:21.632322Z	▲  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:46:21.632375Z	▲  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:46:21.632428Z	▲  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:46:21.632481Z	▲  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:46:21.632534Z	▲  ]
2026-02-08T13:46:21.632589Z	▲  [ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:46:21.63265Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:21.632704Z	▲  '/image/download/history/historty1-md.webp',
2026-02-08T13:46:21.632756Z	▲  '/image/download/history/historty1-sm.webp',
2026-02-08T13:46:21.632809Z	▲  '/image/download/history/historty1-lg.webp',
2026-02-08T13:46:21.632865Z	▲  '/image/download/history/historty1.png',
2026-02-08T13:46:21.632918Z	▲  '/image/download/history/historty1.jpg'
2026-02-08T13:46:21.63297Z	▲  ]
2026-02-08T13:46:21.633021Z	▲  [ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:46:21.633083Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:21.633156Z	▲  '/image/download/history/historty2-md.webp',
2026-02-08T13:46:21.633211Z	▲  '/image/download/history/historty2-sm.webp',
2026-02-08T13:46:21.633265Z	▲  '/image/download/history/historty2-lg.webp',
2026-02-08T13:46:21.633316Z	▲  '/image/download/history/historty2.png',
2026-02-08T13:46:21.633368Z	▲  '/image/download/history/historty2.jpg'
2026-02-08T13:46:21.633419Z	▲  ]
2026-02-08T13:46:21.633471Z	▲  Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:46:21.633526Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:21.63358Z	▲  Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:46:21.633632Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:21.638358Z	▲  [ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:46:21.638498Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:21.638566Z	▲  '/image/download/history/historty3-md.webp',
2026-02-08T13:46:21.638629Z	▲  '/image/download/history/historty3-sm.webp',
2026-02-08T13:46:21.638684Z	▲  '/image/download/history/historty3-lg.webp',
2026-02-08T13:46:21.638737Z	▲  '/image/download/history/historty3.png',
2026-02-08T13:46:21.63881Z	▲  '/image/download/history/historty3.jpg'
2026-02-08T13:46:21.638868Z	▲  ]
2026-02-08T13:46:21.638951Z	▲  Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:46:21.639011Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:21.67112Z	▲  🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:46:21.671336Z	▲  🚫 キャッシュ無効 (mission): 直接APIから取得します
2026-02-08T13:46:21.671746Z	▲  🚫 キャッシュ無効 (vision): 直接APIから取得します
2026-02-08T13:46:21.672125Z	▲  🌐 Notion APIから取得中: about
2026-02-08T13:46:21.672641Z	▲  🌐 Notion APIから取得中: mission
2026-02-08T13:46:21.672727Z	▲  🌐 Notion APIから取得中: vision
2026-02-08T13:46:21.881389Z	▲  ✅ API取得完了: vision (1件)
2026-02-08T13:46:22.536871Z	▲  ✅ API取得完了: about (3件)
2026-02-08T13:46:23.764434Z	▲  ✅ API取得完了: mission (1件)
2026-02-08T13:46:24.372791Z	▲  [convertAboutFromDatabase] Processing item with tag: about, title: 本校について
2026-02-08T13:46:24.373072Z	▲  [convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:46:24.373251Z	▲  [convertAboutFromDatabase] Processing item with tag: mission, title: Mission
2026-02-08T13:46:24.37338Z	▲  [convertAboutFromDatabase] Set mission
2026-02-08T13:46:24.373505Z	▲  [convertAboutFromDatabase] Processing item with tag: vision, title: Vision
2026-02-08T13:46:24.373606Z	▲  [convertAboutFromDatabase] Set vision
2026-02-08T13:46:24.373701Z	▲  [convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:46:24.373829Z	▲  [ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:46:24.373931Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:24.374025Z	▲  '/image/download/about/mission-md.webp',
2026-02-08T13:46:24.374157Z	▲  '/image/download/about/mission-sm.webp',
2026-02-08T13:46:24.374263Z	▲  '/image/download/about/mission-lg.webp',
2026-02-08T13:46:24.374365Z	▲  '/image/download/about/mission.png',
2026-02-08T13:46:24.374472Z	▲  '/image/download/about/mission.jpg'
2026-02-08T13:46:24.374565Z	▲  ]
2026-02-08T13:46:24.374657Z	▲  [ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:46:24.374755Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:24.374842Z	▲  '/image/download/about/vision-md.webp',
2026-02-08T13:46:24.374927Z	▲  '/image/download/about/vision-sm.webp',
2026-02-08T13:46:24.37501Z	▲  '/image/download/about/vision-lg.webp',
2026-02-08T13:46:24.375114Z	▲  '/image/download/about/vision.png',
2026-02-08T13:46:24.375223Z	▲  '/image/download/about/vision.jpg'
2026-02-08T13:46:24.375326Z	▲  ]
2026-02-08T13:46:24.37545Z	▲  [Policy Component] Received policy: {
2026-02-08T13:46:24.375576Z	▲  object: 'page',
2026-02-08T13:46:24.375691Z	▲  id: '88fe2db2-68f6-4295-ab31-8253d1fda16b',
2026-02-08T13:46:24.375802Z	▲  created_time: '2024-09-18T14:32:00.000Z',
2026-02-08T13:46:24.375897Z	▲  last_edited_time: '2025-09-05T01:49:00.000Z',
2026-02-08T13:46:24.375999Z	▲  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:24.376124Z	▲  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:24.376234Z	▲  cover: null,
2026-02-08T13:46:24.376333Z	▲  icon: null,
2026-02-08T13:46:24.376432Z	▲  parent: {
2026-02-08T13:46:24.376523Z	▲    type: 'database_id',
2026-02-08T13:46:24.376616Z	▲    database_id: '105a8c0e-cf8c-8082-a456-dd95fd87d0c2'
2026-02-08T13:46:24.376718Z	▲  },
2026-02-08T13:46:24.376813Z	▲  archived: false,
2026-02-08T13:46:24.376922Z	▲  in_trash: false,
2026-02-08T13:46:24.37707Z	▲  is_locked: false,
2026-02-08T13:46:24.377204Z	▲  properties: {
2026-02-08T13:46:24.377311Z	▲    pdf: { id: '%3BCvS', type: 'files', files: [Array] },
2026-02-08T13:46:24.377422Z	▲    image: { id: 'tHwI', type: 'files', files: [Array] },
2026-02-08T13:46:24.37752Z	▲    'pdf-en': { id: 'tW~u', type: 'files', files: [Array] },
2026-02-08T13:46:24.377615Z	▲    en: { id: '%7CJmt', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:46:24.377707Z	▲    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:46:24.377812Z	▲  },
2026-02-08T13:46:24.377909Z	▲  url: 'https://www.notion.so/88fe2db268f64295ab318253d1fda16b',
2026-02-08T13:46:24.378014Z	▲  public_url: null
2026-02-08T13:46:24.378135Z	▲  }
2026-02-08T13:46:24.37824Z	▲  {
2026-02-08T13:46:24.378342Z	▲  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:46:24.378456Z	▲  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:46:24.378554Z	▲  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:46:24.378651Z	▲  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:46:24.378745Z	▲  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:46:24.378837Z	▲  }
2026-02-08T13:46:24.378927Z	▲  [PolicyEntity] properties.image: {
2026-02-08T13:46:24.379021Z	▲  id: 'tHwI',
2026-02-08T13:46:24.379141Z	▲  type: 'files',
2026-02-08T13:46:24.379241Z	▲  files: [ { name: 'setsubun2022.JPG', type: 'file', file: [Object] } ]
2026-02-08T13:46:24.37933Z	▲  }
2026-02-08T13:46:24.379428Z	▲  [PolicyEntity] Using files[0]: {
2026-02-08T13:46:24.379528Z	▲  name: 'setsubun2022.JPG',
2026-02-08T13:46:24.379618Z	▲  type: 'file',
2026-02-08T13:46:24.379717Z	▲  file: {
2026-02-08T13:46:24.379814Z	▲    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/ec34a095-6cd8-48a8-98c7-18f89317c7c4/cd8e3c8d-b536-4bc7-8df9-3a55b148cc0d/setsubun2022.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMHJIE2%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T134621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8f3CUmQiaf5VS1KiSzItQNLtDBeL%2ByoxfpSlZq5hH2AiEAshphJ9zydLvuXGUvkOxB4hlc%2F0FokelMY%2BO4jz6yN3gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPxZmN%2BKRaf5k8DJuyrcA%2BY8LUJRHtEcudhKcj19BuqtKdzhehqFAV9AYneTKZAXEWhp9e0AsDiIqGq3oUMsq72NuHhNQnoWMaSA7LlLAv3wj8LZ%2B8WVo0BimEywPRr67zWJeFTMD0iXbjw88KlK9tV7CTptWSJHcbTNKbF6rpy4YrB5Ahgi%2BiYSHXcMPs6wqXygDuizFq0WZOUsJxtvLrgSp6InKLpydHnScm5QNMKzGivd2ScK2R3DSiD2zFisBArpq5VrDYn51CiMmihnROEUmjCm6UudDtpdyyKcROjgq2cuR4qZ%2FAZxlv08VBKjPyWbHXDLTEjQzlZFUGrQG50FDPY5Q5yrzQiFQSd7%2Bkv5R69RrYz5oCrULr5RlKHeumH4j05Tzx3Y90PS5PsYSNB%2BeIvM43iv9WT4RZDQioE%2FEr6PK6BjvYIlz%2BPr7QS6K5rBCKQyG2OYwB8FoPypSypQXfaXTaPx7Svg87gH6PsqtCwwlHWv2HQvxgDVWB4xkxC2GbwJPms4D7zjAcLuhS1UGEQRO5RppEhfq3t3Rs%2BseUwTuDR8jiLMOABSJ5tC2mywmdJjv%2Bo1TCXff56vD9zamMoQ8rttOwr2PDhUfj%2BxNOP7AuKM%2Fb%2BWH3TyBqdMyq0DNZUb8dDdOZdiMMifoswGOqUBK%2FKaDFSYyO39StPNqsWKH34nlu%2FCbkrhjpbfI1ql3TBtc9O6lAuw%2FS%2Bb6tD3M9%2BOxDdQCrz%2BmWSWae7wN48emby8gw3tqU6FCe0O2Uy0f9bEn96b51DIFmuB%2FjMzSK7b8IPj46Az9QNuHkq%2BLtncvvXM%2BKjyKCn4mexMX23jT02LdSH%2BLtyQoB%2FA1fCzAVWR4hW729cOkdzylMbeUxbHeQKG9NsQ&X-Amz-Signature=c45fbe3185fde50feeb254d28135fbcd7855d1c9a5a5234db937e7029c752ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
2026-02-08T13:46:24.379943Z	▲    expiry_time: '2026-02-08T14:46:21.800Z'
2026-02-08T13:46:24.38003Z	▲  }
2026-02-08T13:46:24.380126Z	▲  }
2026-02-08T13:46:24.380216Z	▲  [PolicyEntity] Created image object: {
2026-02-08T13:46:24.3803Z	▲  baseName: 'setsubun2022',
2026-02-08T13:46:24.380384Z	▲  pagePath: 'policy',
2026-02-08T13:46:24.380461Z	▲  alt: 'setsubun2022.JPG',
2026-02-08T13:46:24.380538Z	▲  width: null,
2026-02-08T13:46:24.380615Z	▲  height: null
2026-02-08T13:46:24.380694Z	▲  }
2026-02-08T13:46:24.380773Z	▲  [PolicyEntity] Final image: {
2026-02-08T13:46:24.380853Z	▲  baseName: 'setsubun2022',
2026-02-08T13:46:24.380931Z	▲  pagePath: 'policy',
2026-02-08T13:46:24.381012Z	▲  alt: 'setsubun2022.JPG',
2026-02-08T13:46:24.381117Z	▲  width: null,
2026-02-08T13:46:24.381203Z	▲  height: null
2026-02-08T13:46:24.381284Z	▲  }
2026-02-08T13:46:24.381362Z	▲  ============
2026-02-08T13:46:24.381448Z	▲  {
2026-02-08T13:46:24.381523Z	▲  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:46:24.3816Z	▲  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:46:24.381696Z	▲  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:46:24.381779Z	▲  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:46:24.381866Z	▲  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:46:24.381955Z	▲  }
2026-02-08T13:46:24.382039Z	▲  ============
2026-02-08T13:46:24.382151Z	▲  [PolicyEntity] properties.pdf: {
2026-02-08T13:46:24.382231Z	▲  id: '%3BCvS',
2026-02-08T13:46:24.38231Z	▲  type: 'files',
2026-02-08T13:46:24.382394Z	▲  files: [
2026-02-08T13:46:24.382477Z	▲    {
2026-02-08T13:46:24.382556Z	▲      name: '2025GuidelineBook_ja_20250905.pdf',
2026-02-08T13:46:24.382632Z	▲      type: 'file',
2026-02-08T13:46:24.382707Z	▲      file: [Object]
2026-02-08T13:46:24.382802Z	▲    }
2026-02-08T13:46:24.382884Z	▲  ]
2026-02-08T13:46:24.382959Z	▲  }
2026-02-08T13:46:24.383034Z	▲  [PolicyEntity] tmpPdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:46:24.383127Z	▲  [PolicyEntity] pdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:46:24.383215Z	▲  [PolicyEntity] Final PDF path: /pdf/download/policy/2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:46:24.383297Z	▲  [Policy Component] Entity created: PolicyEntity {
2026-02-08T13:46:24.383382Z	▲  title: '学校要覧',
2026-02-08T13:46:24.383462Z	▲  image: {
2026-02-08T13:46:24.383538Z	▲    baseName: 'setsubun2022',
2026-02-08T13:46:24.383612Z	▲    pagePath: 'policy',
2026-02-08T13:46:24.383695Z	▲    alt: 'setsubun2022.JPG',
2026-02-08T13:46:24.383774Z	▲    width: null,
2026-02-08T13:46:24.383852Z	▲    height: null
2026-02-08T13:46:24.383935Z	▲  },
2026-02-08T13:46:24.384011Z	▲  pdf: '/pdf/download/policy/2025GuidelineBook_ja_20250905.pdf'
2026-02-08T13:46:24.384087Z	▲  }
2026-02-08T13:46:24.384187Z	▲  [Policy Component] Entity image: {
2026-02-08T13:46:24.384273Z	▲  baseName: 'setsubun2022',
2026-02-08T13:46:24.38435Z	▲  pagePath: 'policy',
2026-02-08T13:46:24.384451Z	▲  alt: 'setsubun2022.JPG',
2026-02-08T13:46:24.384529Z	▲  width: null,
2026-02-08T13:46:24.384606Z	▲  height: null
2026-02-08T13:46:24.384696Z	▲  }
2026-02-08T13:46:24.384777Z	▲  [ImageOptimizer] baseName: setsubun2022, pagePath: policy
2026-02-08T13:46:24.384852Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:24.384932Z	▲  '/image/download/policy/setsubun2022-md.webp',
2026-02-08T13:46:24.385005Z	▲  '/image/download/policy/setsubun2022-sm.webp',
2026-02-08T13:46:24.385078Z	▲  '/image/download/policy/setsubun2022-lg.webp',
2026-02-08T13:46:24.385174Z	▲  '/image/download/policy/setsubun2022.png',
2026-02-08T13:46:24.38525Z	▲  '/image/download/policy/setsubun2022.jpg'
2026-02-08T13:46:24.385327Z	▲  ]
2026-02-08T13:46:24.385409Z	▲  Warning: ImageOptimizer for "setsubun2022" is missing width or height props.
2026-02-08T13:46:24.385485Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:46:24.390985Z	▲  🚫 キャッシュ無効 (directors): 直接APIから取得します
2026-02-08T13:46:24.391283Z	▲  🚫 キャッシュ無効 (orgChart): 直接APIから取得します
2026-02-08T13:46:24.39146Z	▲  🚫 キャッシュ無効 (policies): 直接APIから取得します
2026-02-08T13:46:24.391621Z	▲  🌐 Notion APIから取得中: directors
2026-02-08T13:46:24.391764Z	▲  🌐 Notion APIから取得中: orgChart
2026-02-08T13:46:24.391897Z	▲  🌐 Notion APIから取得中: policies
2026-02-08T13:46:24.421191Z	▲  already exist.
2026-02-08T13:46:24.42135Z	▲  not pdf file
2026-02-08T13:46:24.55329Z	▲  already exist.
2026-02-08T13:46:24.596189Z	▲  ✅ API取得完了: policies (3件)
2026-02-08T13:46:24.600749Z	▲  ✅ API取得完了: directors (5件)
2026-02-08T13:46:25.447812Z	▲  ✅ API取得完了: orgChart (1件)
2026-02-08T13:46:26.014149Z	▲  [ImageOptimizer] baseName: istockphoto-1495088043-612x612, pagePath: director
2026-02-08T13:46:26.014421Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:26.014547Z	▲  '/image/download/director/istockphoto-1495088043-612x612-md.webp',
2026-02-08T13:46:26.014658Z	▲  '/image/download/director/istockphoto-1495088043-612x612-sm.webp',
2026-02-08T13:46:26.014754Z	▲  '/image/download/director/istockphoto-1495088043-612x612-lg.webp',
2026-02-08T13:46:26.014844Z	▲  '/image/download/director/istockphoto-1495088043-612x612.png',
2026-02-08T13:46:26.014931Z	▲  '/image/download/director/istockphoto-1495088043-612x612.jpg'
2026-02-08T13:46:26.01502Z	▲  ]
2026-02-08T13:46:26.015148Z	▲  [ImageOptimizer] baseName: profile, pagePath: director
2026-02-08T13:46:26.015317Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:26.015426Z	▲  '/image/download/director/profile-md.webp',
2026-02-08T13:46:26.015521Z	▲  '/image/download/director/profile-sm.webp',
2026-02-08T13:46:26.015609Z	▲  '/image/download/director/profile-lg.webp',
2026-02-08T13:46:26.015698Z	▲  '/image/download/director/profile.png',
2026-02-08T13:46:26.015785Z	▲  '/image/download/director/profile.jpg'
2026-02-08T13:46:26.015873Z	▲  ]
2026-02-08T13:46:26.01597Z	▲  [ImageOptimizer] baseName: yukari_image, pagePath: director
2026-02-08T13:46:26.016054Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:26.016168Z	▲  '/image/download/director/yukari_image-md.webp',
2026-02-08T13:46:26.016263Z	▲  '/image/download/director/yukari_image-sm.webp',
2026-02-08T13:46:26.016354Z	▲  '/image/download/director/yukari_image-lg.webp',
2026-02-08T13:46:26.016484Z	▲  '/image/download/director/yukari_image.png',
2026-02-08T13:46:26.016594Z	▲  '/image/download/director/yukari_image.jpg'
2026-02-08T13:46:26.016704Z	▲  ]
2026-02-08T13:46:26.016818Z	▲  [ImageOptimizer] baseName: DSC08145_edited_edited_edited, pagePath: director
2026-02-08T13:46:26.016923Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:26.01714Z	▲  '/image/download/director/DSC08145_edited_edited_edited-md.webp',
2026-02-08T13:46:26.017314Z	▲  '/image/download/director/DSC08145_edited_edited_edited-sm.webp',
2026-02-08T13:46:26.017465Z	▲  '/image/download/director/DSC08145_edited_edited_edited-lg.webp',
2026-02-08T13:46:26.017562Z	▲  '/image/download/director/DSC08145_edited_edited_edited.png',
2026-02-08T13:46:26.017671Z	▲  '/image/download/director/DSC08145_edited_edited_edited.jpg'
2026-02-08T13:46:26.017787Z	▲  ]
2026-02-08T13:46:26.017902Z	▲  [ImageOptimizer] baseName: DSC08141_edited_edited, pagePath: director
2026-02-08T13:46:26.018028Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:26.018151Z	▲  '/image/download/director/DSC08141_edited_edited-md.webp',
2026-02-08T13:46:26.018269Z	▲  '/image/download/director/DSC08141_edited_edited-sm.webp',
2026-02-08T13:46:26.018377Z	▲  '/image/download/director/DSC08141_edited_edited-lg.webp',
2026-02-08T13:46:26.018482Z	▲  '/image/download/director/DSC08141_edited_edited.png',
2026-02-08T13:46:26.018572Z	▲  '/image/download/director/DSC08141_edited_edited.jpg'
2026-02-08T13:46:26.018668Z	▲  ]
2026-02-08T13:46:26.018763Z	▲  OrgChart data received: {
2026-02-08T13:46:26.018865Z	▲  object: 'page',
2026-02-08T13:46:26.018958Z	▲  id: '7a5843cb-66c0-4555-b972-1ee1c3063962',
2026-02-08T13:46:26.019053Z	▲  created_time: '2024-09-25T09:16:00.000Z',
2026-02-08T13:46:26.019183Z	▲  last_edited_time: '2024-10-10T01:32:00.000Z',
2026-02-08T13:46:26.01946Z	▲  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:26.019545Z	▲  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:26.019632Z	▲  cover: null,
2026-02-08T13:46:26.019736Z	▲  icon: null,
2026-02-08T13:46:26.019836Z	▲  parent: {
2026-02-08T13:46:26.019941Z	▲    type: 'database_id',
2026-02-08T13:46:26.020035Z	▲    database_id: '10ca8c0e-cf8c-8062-9eb3-ee7c40cf9005'
2026-02-08T13:46:26.020141Z	▲  },
2026-02-08T13:46:26.020214Z	▲  archived: false,
2026-02-08T13:46:26.020291Z	▲  in_trash: false,
2026-02-08T13:46:26.020364Z	▲  is_locked: false,
2026-02-08T13:46:26.020453Z	▲  properties: {
2026-02-08T13:46:26.020544Z	▲    image_en: { id: 'AnK%3A', type: 'files', files: [Array] },
2026-02-08T13:46:26.020638Z	▲    en: { id: 'BggW', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:46:26.020732Z	▲    text_en: { id: 'OQjU', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:46:26.020824Z	▲    image: { id: 'zJ%3Cu', type: 'files', files: [Array] },
2026-02-08T13:46:26.020917Z	▲    text: { id: '%7Dp_r', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:46:26.021013Z	▲    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:46:26.021114Z	▲  },
2026-02-08T13:46:26.021461Z	▲  url: 'https://www.notion.so/7a5843cb66c04555b9721ee1c3063962',
2026-02-08T13:46:26.02162Z	▲  public_url: null
2026-02-08T13:46:26.021754Z	▲  }
2026-02-08T13:46:26.021906Z	▲  OrgChart entity created: OrganisationFlowChartEntity {
2026-02-08T13:46:26.022003Z	▲  title: '運営組織図',
2026-02-08T13:46:26.02212Z	▲  text: [
2026-02-08T13:46:26.022227Z	▲    {
2026-02-08T13:46:26.022329Z	▲      type: 'text',
2026-02-08T13:46:26.022433Z	▲      text: [Object],
2026-02-08T13:46:26.022559Z	▲      annotations: [Object],
2026-02-08T13:46:26.022635Z	▲      plain_text: 'ツーソン日本語学校理事会は、創立理念の保持、学校運営の管理、指導、助言、また、短期、長期的計画を立案し、教職員、ボランティア父母と協力して実行し、本校が健全な運営を行えるように監視する役割を担い、日々の学校運営を行っているスタッフを支えます。',
2026-02-08T13:46:26.022747Z	▲      href: null
2026-02-08T13:46:26.022871Z	▲    }
2026-02-08T13:46:26.022995Z	▲  ],
2026-02-08T13:46:26.02314Z	▲  image: {
2026-02-08T13:46:26.023265Z	▲    baseName: 'governance_chart_ja',
2026-02-08T13:46:26.023341Z	▲    pagePath: 'org_chart',
2026-02-08T13:46:26.023449Z	▲    alt: 'governance_chart_ja.jpg',
2026-02-08T13:46:26.023521Z	▲    width: null,
2026-02-08T13:46:26.023583Z	▲    height: null
2026-02-08T13:46:26.023638Z	▲  }
2026-02-08T13:46:26.023694Z	▲  }
2026-02-08T13:46:26.023753Z	▲  [ImageOptimizer] baseName: governance_chart_ja, pagePath: org_chart
2026-02-08T13:46:26.023812Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:26.023872Z	▲  '/image/download/org_chart/governance_chart_ja-md.webp',
2026-02-08T13:46:26.023947Z	▲  '/image/download/org_chart/governance_chart_ja-sm.webp',
2026-02-08T13:46:26.024008Z	▲  '/image/download/org_chart/governance_chart_ja-lg.webp',
2026-02-08T13:46:26.024072Z	▲  '/image/download/org_chart/governance_chart_ja.png',
2026-02-08T13:46:26.024163Z	▲  '/image/download/org_chart/governance_chart_ja.jpg'
2026-02-08T13:46:26.024223Z	▲  ]
2026-02-08T13:46:26.029254Z	▲  🚫 キャッシュ無効 (roleList): 直接APIから取得します
2026-02-08T13:46:26.029438Z	▲  🚫 キャッシュ無効 (staff): 直接APIから取得します
2026-02-08T13:46:26.029544Z	▲  🌐 Notion APIから取得中: roleList
2026-02-08T13:46:26.030053Z	▲  🌐 Notion APIから取得中: staff
2026-02-08T13:46:26.053489Z	▲  already exist.
2026-02-08T13:46:26.064476Z	▲  already exist.
2026-02-08T13:46:26.117846Z	▲  already exist.
2026-02-08T13:46:26.414041Z	▲  ✅ API取得完了: staff (16件)
2026-02-08T13:46:29.75445Z	▲  ✅ API取得完了: roleList (6件)
2026-02-08T13:46:32.349499Z	▲  Staff data received: [
2026-02-08T13:46:32.349793Z	▲  {
2026-02-08T13:46:32.349931Z	▲    object: 'page',
2026-02-08T13:46:32.350042Z	▲    id: '102a8c0e-cf8c-8032-ba7b-c79866f660eb',
2026-02-08T13:46:32.350158Z	▲    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:46:32.350254Z	▲    last_edited_time: '2025-06-21T20:03:00.000Z',
2026-02-08T13:46:32.350355Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.350461Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.350562Z	▲    cover: null,
2026-02-08T13:46:32.350679Z	▲    icon: null,
2026-02-08T13:46:32.350787Z	▲    parent: {
2026-02-08T13:46:32.350897Z	▲      type: 'database_id',
2026-02-08T13:46:32.351001Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.351172Z	▲    },
2026-02-08T13:46:32.351305Z	▲    archived: false,
2026-02-08T13:46:32.351422Z	▲    in_trash: false,
2026-02-08T13:46:32.351531Z	▲    is_locked: false,
2026-02-08T13:46:32.35165Z	▲    properties: {
2026-02-08T13:46:32.351754Z	▲      text_en: [Object],
2026-02-08T13:46:32.351882Z	▲      name_en: [Object],
2026-02-08T13:46:32.351992Z	▲      image: [Object],
2026-02-08T13:46:32.352126Z	▲      role: [Object],
2026-02-08T13:46:32.352234Z	▲      text: [Object],
2026-02-08T13:46:32.352353Z	▲      ordering: [Object],
2026-02-08T13:46:32.35246Z	▲      name: [Object]
2026-02-08T13:46:32.352564Z	▲    },
2026-02-08T13:46:32.352664Z	▲    url: 'https://www.notion.so/102a8c0ecf8c8032ba7bc79866f660eb',
2026-02-08T13:46:32.352781Z	▲    public_url: null
2026-02-08T13:46:32.352884Z	▲  },
2026-02-08T13:46:32.352986Z	▲  {
2026-02-08T13:46:32.353133Z	▲    object: 'page',
2026-02-08T13:46:32.353243Z	▲    id: '102a8c0e-cf8c-803e-8c91-cdc26abf8c7b',
2026-02-08T13:46:32.353345Z	▲    created_time: '2024-09-15T21:02:00.000Z',
2026-02-08T13:46:32.35346Z	▲    last_edited_time: '2025-09-04T07:50:00.000Z',
2026-02-08T13:46:32.35357Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.353673Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.353775Z	▲    cover: null,
2026-02-08T13:46:32.353892Z	▲    icon: null,
2026-02-08T13:46:32.354001Z	▲    parent: {
2026-02-08T13:46:32.354147Z	▲      type: 'database_id',
2026-02-08T13:46:32.354248Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.354357Z	▲    },
2026-02-08T13:46:32.35444Z	▲    archived: false,
2026-02-08T13:46:32.354516Z	▲    in_trash: false,
2026-02-08T13:46:32.354599Z	▲    is_locked: false,
2026-02-08T13:46:32.354673Z	▲    properties: {
2026-02-08T13:46:32.354756Z	▲      text_en: [Object],
2026-02-08T13:46:32.354857Z	▲      name_en: [Object],
2026-02-08T13:46:32.354962Z	▲      image: [Object],
2026-02-08T13:46:32.355076Z	▲      role: [Object],
2026-02-08T13:46:32.355208Z	▲      text: [Object],
2026-02-08T13:46:32.355314Z	▲      ordering: [Object],
2026-02-08T13:46:32.355413Z	▲      name: [Object]
2026-02-08T13:46:32.355572Z	▲    },
2026-02-08T13:46:32.355672Z	▲    url: 'https://www.notion.so/102a8c0ecf8c803e8c91cdc26abf8c7b',
2026-02-08T13:46:32.355778Z	▲    public_url: null
2026-02-08T13:46:32.355883Z	▲  },
2026-02-08T13:46:32.355988Z	▲  {
2026-02-08T13:46:32.356131Z	▲    object: 'page',
2026-02-08T13:46:32.356234Z	▲    id: '102a8c0e-cf8c-803e-9b33-f2d6b41189c5',
2026-02-08T13:46:32.356651Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:46:32.356934Z	▲    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:46:32.357166Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.357343Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.357492Z	▲    cover: null,
2026-02-08T13:46:32.357606Z	▲    icon: null,
2026-02-08T13:46:32.357715Z	▲    parent: {
2026-02-08T13:46:32.357823Z	▲      type: 'database_id',
2026-02-08T13:46:32.357926Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.358041Z	▲    },
2026-02-08T13:46:32.358175Z	▲    archived: false,
2026-02-08T13:46:32.358296Z	▲    in_trash: false,
2026-02-08T13:46:32.358401Z	▲    is_locked: false,
2026-02-08T13:46:32.358506Z	▲    properties: {
2026-02-08T13:46:32.358606Z	▲      text_en: [Object],
2026-02-08T13:46:32.358719Z	▲      name_en: [Object],
2026-02-08T13:46:32.358819Z	▲      image: [Object],
2026-02-08T13:46:32.358919Z	▲      role: [Object],
2026-02-08T13:46:32.359031Z	▲      text: [Object],
2026-02-08T13:46:32.359156Z	▲      ordering: [Object],
2026-02-08T13:46:32.35927Z	▲      name: [Object]
2026-02-08T13:46:32.359373Z	▲    },
2026-02-08T13:46:32.359437Z	▲    url: 'https://www.notion.so/102a8c0ecf8c803e9b33f2d6b41189c5',
2026-02-08T13:46:32.359529Z	▲    public_url: null
2026-02-08T13:46:32.359624Z	▲  },
2026-02-08T13:46:32.359756Z	▲  {
2026-02-08T13:46:32.359954Z	▲    object: 'page',
2026-02-08T13:46:32.360056Z	▲    id: '102a8c0e-cf8c-80a2-9cba-f21c57ac7a99',
2026-02-08T13:46:32.360506Z	▲    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:46:32.360691Z	▲    last_edited_time: '2025-09-04T07:52:00.000Z',
2026-02-08T13:46:32.360852Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.360939Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.361Z	▲    cover: null,
2026-02-08T13:46:32.361116Z	▲    icon: null,
2026-02-08T13:46:32.361219Z	▲    parent: {
2026-02-08T13:46:32.361422Z	▲      type: 'database_id',
2026-02-08T13:46:32.361505Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.36157Z	▲    },
2026-02-08T13:46:32.361637Z	▲    archived: false,
2026-02-08T13:46:32.361696Z	▲    in_trash: false,
2026-02-08T13:46:32.361749Z	▲    is_locked: false,
2026-02-08T13:46:32.361807Z	▲    properties: {
2026-02-08T13:46:32.361866Z	▲      text_en: [Object],
2026-02-08T13:46:32.361924Z	▲      name_en: [Object],
2026-02-08T13:46:32.361977Z	▲      image: [Object],
2026-02-08T13:46:32.362034Z	▲      role: [Object],
2026-02-08T13:46:32.362087Z	▲      text: [Object],
2026-02-08T13:46:32.362171Z	▲      ordering: [Object],
2026-02-08T13:46:32.362233Z	▲      name: [Object]
2026-02-08T13:46:32.362293Z	▲    },
2026-02-08T13:46:32.362346Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80a29cbaf21c57ac7a99',
2026-02-08T13:46:32.362415Z	▲    public_url: null
2026-02-08T13:46:32.362481Z	▲  },
2026-02-08T13:46:32.362543Z	▲  {
2026-02-08T13:46:32.362598Z	▲    object: 'page',
2026-02-08T13:46:32.362651Z	▲    id: '102a8c0e-cf8c-80b6-a18a-f9a071308672',
2026-02-08T13:46:32.362706Z	▲    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:46:32.362759Z	▲    last_edited_time: '2025-09-04T07:56:00.000Z',
2026-02-08T13:46:32.362828Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.362889Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.362951Z	▲    cover: null,
2026-02-08T13:46:32.36301Z	▲    icon: null,
2026-02-08T13:46:32.363072Z	▲    parent: {
2026-02-08T13:46:32.363599Z	▲      type: 'database_id',
2026-02-08T13:46:32.363683Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.363807Z	▲    },
2026-02-08T13:46:32.364356Z	▲    archived: false,
2026-02-08T13:46:32.364467Z	▲    in_trash: false,
2026-02-08T13:46:32.364647Z	▲    is_locked: false,
2026-02-08T13:46:32.364725Z	▲    properties: {
2026-02-08T13:46:32.364834Z	▲      text_en: [Object],
2026-02-08T13:46:32.365038Z	▲      name_en: [Object],
2026-02-08T13:46:32.36522Z	▲      image: [Object],
2026-02-08T13:46:32.365339Z	▲      role: [Object],
2026-02-08T13:46:32.365427Z	▲      text: [Object],
2026-02-08T13:46:32.365513Z	▲      ordering: [Object],
2026-02-08T13:46:32.365601Z	▲      name: [Object]
2026-02-08T13:46:32.365703Z	▲    },
2026-02-08T13:46:32.365782Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80b6a18af9a071308672',
2026-02-08T13:46:32.36587Z	▲    public_url: null
2026-02-08T13:46:32.365952Z	▲  },
2026-02-08T13:46:32.366045Z	▲  {
2026-02-08T13:46:32.366146Z	▲    object: 'page',
2026-02-08T13:46:32.366221Z	▲    id: '102a8c0e-cf8c-80c8-9391-cb8332a09711',
2026-02-08T13:46:32.366312Z	▲    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:46:32.366437Z	▲    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:46:32.366554Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.366676Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.366771Z	▲    cover: null,
2026-02-08T13:46:32.366869Z	▲    icon: null,
2026-02-08T13:46:32.367003Z	▲    parent: {
2026-02-08T13:46:32.367133Z	▲      type: 'database_id',
2026-02-08T13:46:32.367242Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.367362Z	▲    },
2026-02-08T13:46:32.367469Z	▲    archived: false,
2026-02-08T13:46:32.36758Z	▲    in_trash: false,
2026-02-08T13:46:32.367681Z	▲    is_locked: false,
2026-02-08T13:46:32.367777Z	▲    properties: {
2026-02-08T13:46:32.367873Z	▲      text_en: [Object],
2026-02-08T13:46:32.367977Z	▲      name_en: [Object],
2026-02-08T13:46:32.368078Z	▲      image: [Object],
2026-02-08T13:46:32.368188Z	▲      role: [Object],
2026-02-08T13:46:32.368304Z	▲      text: [Object],
2026-02-08T13:46:32.368401Z	▲      ordering: [Object],
2026-02-08T13:46:32.36849Z	▲      name: [Object]
2026-02-08T13:46:32.368581Z	▲    },
2026-02-08T13:46:32.368671Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80c89391cb8332a09711',
2026-02-08T13:46:32.368785Z	▲    public_url: null
2026-02-08T13:46:32.368881Z	▲  },
2026-02-08T13:46:32.368969Z	▲  {
2026-02-08T13:46:32.369067Z	▲    object: 'page',
2026-02-08T13:46:32.369169Z	▲    id: '102a8c0e-cf8c-80cd-a577-c9351f661364',
2026-02-08T13:46:32.369261Z	▲    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:46:32.369384Z	▲    last_edited_time: '2025-09-02T05:48:00.000Z',
2026-02-08T13:46:32.369484Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.369574Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.369647Z	▲    cover: null,
2026-02-08T13:46:32.369733Z	▲    icon: null,
2026-02-08T13:46:32.369832Z	▲    parent: {
2026-02-08T13:46:32.369942Z	▲      type: 'database_id',
2026-02-08T13:46:32.370038Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.370159Z	▲    },
2026-02-08T13:46:32.370265Z	▲    archived: false,
2026-02-08T13:46:32.370369Z	▲    in_trash: false,
2026-02-08T13:46:32.370437Z	▲    is_locked: false,
2026-02-08T13:46:32.370519Z	▲    properties: {
2026-02-08T13:46:32.370609Z	▲      text_en: [Object],
2026-02-08T13:46:32.370697Z	▲      name_en: [Object],
2026-02-08T13:46:32.370796Z	▲      image: [Object],
2026-02-08T13:46:32.370886Z	▲      role: [Object],
2026-02-08T13:46:32.370975Z	▲      text: [Object],
2026-02-08T13:46:32.37107Z	▲      ordering: [Object],
2026-02-08T13:46:32.371178Z	▲      name: [Object]
2026-02-08T13:46:32.371264Z	▲    },
2026-02-08T13:46:32.371357Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80cda577c9351f661364',
2026-02-08T13:46:32.371453Z	▲    public_url: null
2026-02-08T13:46:32.371548Z	▲  },
2026-02-08T13:46:32.371638Z	▲  {
2026-02-08T13:46:32.371737Z	▲    object: 'page',
2026-02-08T13:46:32.371823Z	▲    id: '102a8c0e-cf8c-80e6-9519-d25acdcfd0ec',
2026-02-08T13:46:32.371921Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:46:32.372017Z	▲    last_edited_time: '2025-09-04T08:02:00.000Z',
2026-02-08T13:46:32.372248Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.372393Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.372548Z	▲    cover: null,
2026-02-08T13:46:32.372671Z	▲    icon: null,
2026-02-08T13:46:32.372761Z	▲    parent: {
2026-02-08T13:46:32.372853Z	▲      type: 'database_id',
2026-02-08T13:46:32.372979Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.373127Z	▲    },
2026-02-08T13:46:32.373237Z	▲    archived: false,
2026-02-08T13:46:32.373315Z	▲    in_trash: false,
2026-02-08T13:46:32.373378Z	▲    is_locked: false,
2026-02-08T13:46:32.373435Z	▲    properties: {
2026-02-08T13:46:32.373489Z	▲      text_en: [Object],
2026-02-08T13:46:32.373544Z	▲      name_en: [Object],
2026-02-08T13:46:32.373602Z	▲      image: [Object],
2026-02-08T13:46:32.373658Z	▲      role: [Object],
2026-02-08T13:46:32.373711Z	▲      text: [Object],
2026-02-08T13:46:32.373764Z	▲      ordering: [Object],
2026-02-08T13:46:32.373816Z	▲      name: [Object]
2026-02-08T13:46:32.37387Z	▲    },
2026-02-08T13:46:32.373926Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80e69519d25acdcfd0ec',
2026-02-08T13:46:32.373983Z	▲    public_url: null
2026-02-08T13:46:32.37404Z	▲  },
2026-02-08T13:46:32.374123Z	▲  {
2026-02-08T13:46:32.374186Z	▲    object: 'page',
2026-02-08T13:46:32.374242Z	▲    id: '102a8c0e-cf8c-80f9-bef0-dd401debb8af',
2026-02-08T13:46:32.374301Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:46:32.374354Z	▲    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:46:32.374406Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.374459Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.374511Z	▲    cover: null,
2026-02-08T13:46:32.374563Z	▲    icon: null,
2026-02-08T13:46:32.374615Z	▲    parent: {
2026-02-08T13:46:32.374666Z	▲      type: 'database_id',
2026-02-08T13:46:32.374725Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.374778Z	▲    },
2026-02-08T13:46:32.374833Z	▲    archived: false,
2026-02-08T13:46:32.374889Z	▲    in_trash: false,
2026-02-08T13:46:32.374939Z	▲    is_locked: false,
2026-02-08T13:46:32.37499Z	▲    properties: {
2026-02-08T13:46:32.375045Z	▲      text_en: [Object],
2026-02-08T13:46:32.375113Z	▲      name_en: [Object],
2026-02-08T13:46:32.375182Z	▲      image: [Object],
2026-02-08T13:46:32.375238Z	▲      role: [Object],
2026-02-08T13:46:32.3753Z	▲      text: [Object],
2026-02-08T13:46:32.375354Z	▲      ordering: [Object],
2026-02-08T13:46:32.375405Z	▲      name: [Object]
2026-02-08T13:46:32.375457Z	▲    },
2026-02-08T13:46:32.375508Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80f9bef0dd401debb8af',
2026-02-08T13:46:32.375561Z	▲    public_url: null
2026-02-08T13:46:32.375613Z	▲  },
2026-02-08T13:46:32.375666Z	▲  {
2026-02-08T13:46:32.375718Z	▲    object: 'page',
2026-02-08T13:46:32.375776Z	▲    id: '219a8c0e-cf8c-8086-95b6-dbe56a73880d',
2026-02-08T13:46:32.375834Z	▲    created_time: '2025-06-21T20:02:00.000Z',
2026-02-08T13:46:32.3759Z	▲    last_edited_time: '2025-09-04T07:51:00.000Z',
2026-02-08T13:46:32.375954Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.376006Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.37607Z	▲    cover: null,
2026-02-08T13:46:32.376148Z	▲    icon: null,
2026-02-08T13:46:32.37621Z	▲    parent: {
2026-02-08T13:46:32.376305Z	▲      type: 'database_id',
2026-02-08T13:46:32.376389Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.376468Z	▲    },
2026-02-08T13:46:32.376546Z	▲    archived: false,
2026-02-08T13:46:32.376624Z	▲    in_trash: false,
2026-02-08T13:46:32.376701Z	▲    is_locked: false,
2026-02-08T13:46:32.376781Z	▲    properties: {
2026-02-08T13:46:32.376858Z	▲      text_en: [Object],
2026-02-08T13:46:32.376936Z	▲      name_en: [Object],
2026-02-08T13:46:32.377013Z	▲      image: [Object],
2026-02-08T13:46:32.377089Z	▲      role: [Object],
2026-02-08T13:46:32.377185Z	▲      text: [Object],
2026-02-08T13:46:32.377381Z	▲      ordering: [Object],
2026-02-08T13:46:32.377506Z	▲      name: [Object]
2026-02-08T13:46:32.3776Z	▲    },
2026-02-08T13:46:32.377721Z	▲    url: 'https://www.notion.so/219a8c0ecf8c808695b6dbe56a73880d',
2026-02-08T13:46:32.377827Z	▲    public_url: null
2026-02-08T13:46:32.377991Z	▲  },
2026-02-08T13:46:32.378147Z	▲  {
2026-02-08T13:46:32.378263Z	▲    object: 'page',
2026-02-08T13:46:32.378417Z	▲    id: '262a8c0e-cf8c-8087-9157-eccd746e636d',
2026-02-08T13:46:32.378613Z	▲    created_time: '2025-09-02T05:49:00.000Z',
2026-02-08T13:46:32.37882Z	▲    last_edited_time: '2025-09-04T07:58:00.000Z',
2026-02-08T13:46:32.378932Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.379029Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.379154Z	▲    cover: null,
2026-02-08T13:46:32.379289Z	▲    icon: null,
2026-02-08T13:46:32.379452Z	▲    parent: {
2026-02-08T13:46:32.379623Z	▲      type: 'database_id',
2026-02-08T13:46:32.379802Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.379902Z	▲    },
2026-02-08T13:46:32.37996Z	▲    archived: false,
2026-02-08T13:46:32.380016Z	▲    in_trash: false,
2026-02-08T13:46:32.380077Z	▲    is_locked: false,
2026-02-08T13:46:32.380166Z	▲    properties: {
2026-02-08T13:46:32.380232Z	▲      text_en: [Object],
2026-02-08T13:46:32.380308Z	▲      name_en: [Object],
2026-02-08T13:46:32.380371Z	▲      image: [Object],
2026-02-08T13:46:32.380727Z	▲      role: [Object],
2026-02-08T13:46:32.380867Z	▲      text: [Object],
2026-02-08T13:46:32.380932Z	▲      ordering: [Object],
2026-02-08T13:46:32.380987Z	▲      name: [Object]
2026-02-08T13:46:32.381049Z	▲    },
2026-02-08T13:46:32.381139Z	▲    url: 'https://www.notion.so/262a8c0ecf8c80879157eccd746e636d',
2026-02-08T13:46:32.381219Z	▲    public_url: null
2026-02-08T13:46:32.381285Z	▲  },
2026-02-08T13:46:32.381339Z	▲  {
2026-02-08T13:46:32.381391Z	▲    object: 'page',
2026-02-08T13:46:32.381444Z	▲    id: '4377c087-e782-46e3-9eaf-261863837f19',
2026-02-08T13:46:32.381497Z	▲    created_time: '2024-09-15T21:13:00.000Z',
2026-02-08T13:46:32.381558Z	▲    last_edited_time: '2025-06-21T20:04:00.000Z',
2026-02-08T13:46:32.381703Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.38177Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.381824Z	▲    cover: null,
2026-02-08T13:46:32.381877Z	▲    icon: null,
2026-02-08T13:46:32.381937Z	▲    parent: {
2026-02-08T13:46:32.381995Z	▲      type: 'database_id',
2026-02-08T13:46:32.382061Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.382154Z	▲    },
2026-02-08T13:46:32.382545Z	▲    archived: false,
2026-02-08T13:46:32.382699Z	▲    in_trash: false,
2026-02-08T13:46:32.382788Z	▲    is_locked: false,
2026-02-08T13:46:32.382847Z	▲    properties: {
2026-02-08T13:46:32.382967Z	▲      text_en: [Object],
2026-02-08T13:46:32.383149Z	▲      name_en: [Object],
2026-02-08T13:46:32.383273Z	▲      image: [Object],
2026-02-08T13:46:32.383501Z	▲      role: [Object],
2026-02-08T13:46:32.383614Z	▲      text: [Object],
2026-02-08T13:46:32.383732Z	▲      ordering: [Object],
2026-02-08T13:46:32.383826Z	▲      name: [Object]
2026-02-08T13:46:32.383937Z	▲    },
2026-02-08T13:46:32.384185Z	▲    url: 'https://www.notion.so/4377c087e78246e39eaf261863837f19',
2026-02-08T13:46:32.384318Z	▲    public_url: null
2026-02-08T13:46:32.384419Z	▲  },
2026-02-08T13:46:32.384649Z	▲  {
2026-02-08T13:46:32.384749Z	▲    object: 'page',
2026-02-08T13:46:32.384821Z	▲    id: '9a170ec8-c017-4cce-a0dd-d62f2edb82b6',
2026-02-08T13:46:32.384896Z	▲    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:46:32.384958Z	▲    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:46:32.385019Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.38508Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.385176Z	▲    cover: null,
2026-02-08T13:46:32.385244Z	▲    icon: null,
2026-02-08T13:46:32.385311Z	▲    parent: {
2026-02-08T13:46:32.385368Z	▲      type: 'database_id',
2026-02-08T13:46:32.385423Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.385481Z	▲    },
2026-02-08T13:46:32.38554Z	▲    archived: false,
2026-02-08T13:46:32.385598Z	▲    in_trash: false,
2026-02-08T13:46:32.385655Z	▲    is_locked: false,
2026-02-08T13:46:32.385717Z	▲    properties: {
2026-02-08T13:46:32.385785Z	▲      text_en: [Object],
2026-02-08T13:46:32.385845Z	▲      name_en: [Object],
2026-02-08T13:46:32.385902Z	▲      image: [Object],
2026-02-08T13:46:32.385958Z	▲      role: [Object],
2026-02-08T13:46:32.386017Z	▲      text: [Object],
2026-02-08T13:46:32.386076Z	▲      ordering: [Object],
2026-02-08T13:46:32.386438Z	▲      name: [Object]
2026-02-08T13:46:32.386584Z	▲    },
2026-02-08T13:46:32.386727Z	▲    url: 'https://www.notion.so/9a170ec8c0174ccea0ddd62f2edb82b6',
2026-02-08T13:46:32.386863Z	▲    public_url: null
2026-02-08T13:46:32.38699Z	▲  },
2026-02-08T13:46:32.387114Z	▲  {
2026-02-08T13:46:32.387246Z	▲    object: 'page',
2026-02-08T13:46:32.387385Z	▲    id: 'c452fe7f-4be8-4bdb-9afb-a32c10afbcab',
2026-02-08T13:46:32.387505Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:46:32.387612Z	▲    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:46:32.387712Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.387809Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:46:32.387907Z	▲    cover: null,
2026-02-08T13:46:32.388001Z	▲    icon: null,
2026-02-08T13:46:32.388114Z	▲    parent: {
2026-02-08T13:46:32.388242Z	▲      type: 'database_id',
2026-02-08T13:46:32.388347Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.388457Z	▲    },
2026-02-08T13:46:32.388578Z	▲    archived: false,
2026-02-08T13:46:32.388691Z	▲    in_trash: false,
2026-02-08T13:46:32.388851Z	▲    is_locked: false,
2026-02-08T13:46:32.388952Z	▲    properties: {
2026-02-08T13:46:32.38908Z	▲      text_en: [Object],
2026-02-08T13:46:32.389208Z	▲      name_en: [Object],
2026-02-08T13:46:32.389312Z	▲      image: [Object],
2026-02-08T13:46:32.389419Z	▲      role: [Object],
2026-02-08T13:46:32.389522Z	▲      text: [Object],
2026-02-08T13:46:32.389625Z	▲      ordering: [Object],
2026-02-08T13:46:32.389718Z	▲      name: [Object]
2026-02-08T13:46:32.38982Z	▲    },
2026-02-08T13:46:32.389933Z	▲    url: 'https://www.notion.so/c452fe7f4be84bdb9afba32c10afbcab',
2026-02-08T13:46:32.390036Z	▲    public_url: null
2026-02-08T13:46:32.390164Z	▲  },
2026-02-08T13:46:32.39026Z	▲  {
2026-02-08T13:46:32.390349Z	▲    object: 'page',
2026-02-08T13:46:32.390443Z	▲    id: 'd65a07cd-7eec-4319-8dbb-f05addf412a9',
2026-02-08T13:46:32.390565Z	▲    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:46:32.390658Z	▲    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:46:32.390762Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.391152Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.391245Z	▲    cover: null,
2026-02-08T13:46:32.391337Z	▲    icon: null,
2026-02-08T13:46:32.391504Z	▲    parent: {
2026-02-08T13:46:32.391658Z	▲      type: 'database_id',
2026-02-08T13:46:32.391828Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.391961Z	▲    },
2026-02-08T13:46:32.392074Z	▲    archived: false,
2026-02-08T13:46:32.392192Z	▲    in_trash: false,
2026-02-08T13:46:32.392332Z	▲    is_locked: false,
2026-02-08T13:46:32.39243Z	▲    properties: {
2026-02-08T13:46:32.392521Z	▲      text_en: [Object],
2026-02-08T13:46:32.392625Z	▲      name_en: [Object],
2026-02-08T13:46:32.392718Z	▲      image: [Object],
2026-02-08T13:46:32.392818Z	▲      role: [Object],
2026-02-08T13:46:32.392916Z	▲      text: [Object],
2026-02-08T13:46:32.393023Z	▲      ordering: [Object],
2026-02-08T13:46:32.393173Z	▲      name: [Object]
2026-02-08T13:46:32.393365Z	▲    },
2026-02-08T13:46:32.393472Z	▲    url: 'https://www.notion.so/d65a07cd7eec43198dbbf05addf412a9',
2026-02-08T13:46:32.393678Z	▲    public_url: null
2026-02-08T13:46:32.393754Z	▲  },
2026-02-08T13:46:32.393863Z	▲  {
2026-02-08T13:46:32.393985Z	▲    object: 'page',
2026-02-08T13:46:32.394164Z	▲    id: 'f9633a2c-0dff-4b02-9161-9139ab8919d0',
2026-02-08T13:46:32.394242Z	▲    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:46:32.394375Z	▲    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:46:32.394514Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.3946Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.394779Z	▲    cover: null,
2026-02-08T13:46:32.394858Z	▲    icon: null,
2026-02-08T13:46:32.394973Z	▲    parent: {
2026-02-08T13:46:32.395054Z	▲      type: 'database_id',
2026-02-08T13:46:32.395266Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:46:32.395378Z	▲    },
2026-02-08T13:46:32.395517Z	▲    archived: false,
2026-02-08T13:46:32.395595Z	▲    in_trash: false,
2026-02-08T13:46:32.395683Z	▲    is_locked: false,
2026-02-08T13:46:32.39586Z	▲    properties: {
2026-02-08T13:46:32.395996Z	▲      text_en: [Object],
2026-02-08T13:46:32.396116Z	▲      name_en: [Object],
2026-02-08T13:46:32.396222Z	▲      image: [Object],
2026-02-08T13:46:32.396326Z	▲      role: [Object],
2026-02-08T13:46:32.396437Z	▲      text: [Object],
2026-02-08T13:46:32.396543Z	▲      ordering: [Object],
2026-02-08T13:46:32.396691Z	▲      name: [Object]
2026-02-08T13:46:32.396798Z	▲    },
2026-02-08T13:46:32.396909Z	▲    url: 'https://www.notion.so/f9633a2c0dff4b0291619139ab8919d0',
2026-02-08T13:46:32.39703Z	▲    public_url: null
2026-02-08T13:46:32.39718Z	▲  }
2026-02-08T13:46:32.397322Z	▲  ]
2026-02-08T13:46:32.397396Z	▲  Role data received: [
2026-02-08T13:46:32.397453Z	▲  {
2026-02-08T13:46:32.39751Z	▲    object: 'page',
2026-02-08T13:46:32.397576Z	▲    id: '122a8c0e-cf8c-808e-88c5-c0446f064f99',
2026-02-08T13:46:32.397634Z	▲    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:46:32.397689Z	▲    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:46:32.397744Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.397808Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.397862Z	▲    cover: null,
2026-02-08T13:46:32.397924Z	▲    icon: null,
2026-02-08T13:46:32.397987Z	▲    parent: {
2026-02-08T13:46:32.39805Z	▲      type: 'database_id',
2026-02-08T13:46:32.398131Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:46:32.398218Z	▲    },
2026-02-08T13:46:32.398283Z	▲    archived: false,
2026-02-08T13:46:32.398344Z	▲    in_trash: false,
2026-02-08T13:46:32.398407Z	▲    is_locked: false,
2026-02-08T13:46:32.398462Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:46:32.398519Z	▲    url: 'https://www.notion.so/122a8c0ecf8c808e88c5c0446f064f99',
2026-02-08T13:46:32.398579Z	▲    public_url: null
2026-02-08T13:46:32.398631Z	▲  },
2026-02-08T13:46:32.398684Z	▲  {
2026-02-08T13:46:32.398736Z	▲    object: 'page',
2026-02-08T13:46:32.398787Z	▲    id: '122a8c0e-cf8c-80ca-bded-ded104c18d96',
2026-02-08T13:46:32.398839Z	▲    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:46:32.39889Z	▲    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:46:32.398941Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.398994Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.399045Z	▲    cover: null,
2026-02-08T13:46:32.399148Z	▲    icon: null,
2026-02-08T13:46:32.399265Z	▲    parent: {
2026-02-08T13:46:32.399367Z	▲      type: 'database_id',
2026-02-08T13:46:32.399479Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:46:32.399599Z	▲    },
2026-02-08T13:46:32.399715Z	▲    archived: false,
2026-02-08T13:46:32.399847Z	▲    in_trash: false,
2026-02-08T13:46:32.399942Z	▲    is_locked: false,
2026-02-08T13:46:32.400253Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:46:32.400394Z	▲    url: 'https://www.notion.so/122a8c0ecf8c80cabdedded104c18d96',
2026-02-08T13:46:32.400515Z	▲    public_url: null
2026-02-08T13:46:32.400624Z	▲  },
2026-02-08T13:46:32.400723Z	▲  {
2026-02-08T13:46:32.400856Z	▲    object: 'page',
2026-02-08T13:46:32.400952Z	▲    id: '122a8c0e-cf8c-80d5-85d2-d4a0673c1797',
2026-02-08T13:46:32.401085Z	▲    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:46:32.401196Z	▲    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:46:32.401261Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.40132Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.401393Z	▲    cover: null,
2026-02-08T13:46:32.401458Z	▲    icon: null,
2026-02-08T13:46:32.401525Z	▲    parent: {
2026-02-08T13:46:32.401583Z	▲      type: 'database_id',
2026-02-08T13:46:32.401637Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:46:32.401701Z	▲    },
2026-02-08T13:46:32.401763Z	▲    archived: false,
2026-02-08T13:46:32.401822Z	▲    in_trash: false,
2026-02-08T13:46:32.401882Z	▲    is_locked: false,
2026-02-08T13:46:32.401939Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:46:32.401992Z	▲    url: 'https://www.notion.so/122a8c0ecf8c80d585d2d4a0673c1797',
2026-02-08T13:46:32.40206Z	▲    public_url: null
2026-02-08T13:46:32.402148Z	▲  },
2026-02-08T13:46:32.402215Z	▲  {
2026-02-08T13:46:32.402269Z	▲    object: 'page',
2026-02-08T13:46:32.402333Z	▲    id: '25697b18-c8e5-48aa-948f-4716cf5e36e8',
2026-02-08T13:46:32.402386Z	▲    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:46:32.402439Z	▲    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:46:32.402491Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.402543Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.402594Z	▲    cover: null,
2026-02-08T13:46:32.402647Z	▲    icon: null,
2026-02-08T13:46:32.402699Z	▲    parent: {
2026-02-08T13:46:32.40275Z	▲      type: 'database_id',
2026-02-08T13:46:32.402803Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:46:32.402856Z	▲    },
2026-02-08T13:46:32.402923Z	▲    archived: false,
2026-02-08T13:46:32.402983Z	▲    in_trash: false,
2026-02-08T13:46:32.403045Z	▲    is_locked: false,
2026-02-08T13:46:32.403615Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:46:32.405154Z	▲    url: 'https://www.notion.so/25697b18c8e548aa948f4716cf5e36e8',
2026-02-08T13:46:32.405285Z	▲    public_url: null
2026-02-08T13:46:32.405405Z	▲  },
2026-02-08T13:46:32.405519Z	▲  {
2026-02-08T13:46:32.405628Z	▲    object: 'page',
2026-02-08T13:46:32.40575Z	▲    id: '31cae8ce-3c54-4a0b-9b18-639b4de347b3',
2026-02-08T13:46:32.405848Z	▲    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:46:32.40595Z	▲    last_edited_time: '2024-10-17T01:17:00.000Z',
2026-02-08T13:46:32.406176Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.406378Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.406476Z	▲    cover: null,
2026-02-08T13:46:32.406558Z	▲    icon: null,
2026-02-08T13:46:32.406654Z	▲    parent: {
2026-02-08T13:46:32.406753Z	▲      type: 'database_id',
2026-02-08T13:46:32.406863Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:46:32.406992Z	▲    },
2026-02-08T13:46:32.407075Z	▲    archived: false,
2026-02-08T13:46:32.407206Z	▲    in_trash: false,
2026-02-08T13:46:32.407321Z	▲    is_locked: false,
2026-02-08T13:46:32.407392Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:46:32.407495Z	▲    url: 'https://www.notion.so/31cae8ce3c544a0b9b18639b4de347b3',
2026-02-08T13:46:32.407609Z	▲    public_url: null
2026-02-08T13:46:32.407778Z	▲  },
2026-02-08T13:46:32.407879Z	▲  {
2026-02-08T13:46:32.407972Z	▲    object: 'page',
2026-02-08T13:46:32.408064Z	▲    id: '9ad23647-a425-4c2a-8538-b77219acc481',
2026-02-08T13:46:32.408191Z	▲    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:46:32.408288Z	▲    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:46:32.408389Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.408461Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:46:32.408524Z	▲    cover: null,
2026-02-08T13:46:32.409303Z	▲    icon: null,
2026-02-08T13:46:32.409392Z	▲    parent: {
2026-02-08T13:46:32.40956Z	▲      type: 'database_id',
2026-02-08T13:46:32.409718Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:46:32.409807Z	▲    },
2026-02-08T13:46:32.409918Z	▲    archived: false,
2026-02-08T13:46:32.410013Z	▲    in_trash: false,
2026-02-08T13:46:32.410089Z	▲    is_locked: false,
2026-02-08T13:46:32.410221Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:46:32.410298Z	▲    url: 'https://www.notion.so/9ad23647a4254c2a8538b77219acc481',
2026-02-08T13:46:32.410412Z	▲    public_url: null
2026-02-08T13:46:32.410501Z	▲  }
2026-02-08T13:46:32.410606Z	▲  ]
2026-02-08T13:46:32.410676Z	▲  Processed role list: [
2026-02-08T13:46:32.410769Z	▲  RoleEntity { role: 'nihongo-cafe', title: 'にほんごかふぇ' },
2026-02-08T13:46:32.410874Z	▲  RoleEntity { role: 'manager', title: 'マネージャー' },
2026-02-08T13:46:32.410968Z	▲  RoleEntity { role: 'volunteer', title: 'ボランティア' },
2026-02-08T13:46:32.411064Z	▲  RoleEntity { role: 'teacher', title: '講師' },
2026-02-08T13:46:32.412584Z	▲  RoleEntity { role: 'co-director', title: 'ディレクター' },
2026-02-08T13:46:32.412669Z	▲  RoleEntity { role: 'assistant', title: 'アシスタント' }
2026-02-08T13:46:32.412728Z	▲  ]
2026-02-08T13:46:32.412808Z	▲  Processed staff list: [
2026-02-08T13:46:32.412876Z	▲  StaffEntity {
2026-02-08T13:46:32.412968Z	▲    name: 'マックナイト　ひとみ',
2026-02-08T13:46:32.413036Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.413164Z	▲    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:46:32.413297Z	▲    image: {
2026-02-08T13:46:32.413366Z	▲      baseName: 'mcknight',
2026-02-08T13:46:32.413488Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.413597Z	▲      alt: 'mcknight.png',
2026-02-08T13:46:32.413689Z	▲      width: null,
2026-02-08T13:46:32.413785Z	▲      height: null
2026-02-08T13:46:32.413887Z	▲    },
2026-02-08T13:46:32.413977Z	▲    ordering: 1
2026-02-08T13:46:32.414076Z	▲  },
2026-02-08T13:46:32.414203Z	▲  StaffEntity {
2026-02-08T13:46:32.414311Z	▲    name: 'エスピノサ　みなみ',
2026-02-08T13:46:32.414407Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.414497Z	▲    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:46:32.414613Z	▲    image: {
2026-02-08T13:46:32.414722Z	▲      baseName: 'minami',
2026-02-08T13:46:32.414819Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.414918Z	▲      alt: 'minami.png',
2026-02-08T13:46:32.415028Z	▲      width: null,
2026-02-08T13:46:32.415138Z	▲      height: null
2026-02-08T13:46:32.415256Z	▲    },
2026-02-08T13:46:32.41535Z	▲    ordering: 2
2026-02-08T13:46:32.415455Z	▲  },
2026-02-08T13:46:32.415545Z	▲  StaffEntity {
2026-02-08T13:46:32.415634Z	▲    name: 'バトラー　利恵',
2026-02-08T13:46:32.415747Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.415842Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.41593Z	▲    image: {
2026-02-08T13:46:32.416041Z	▲      baseName: 'IMG_1299_edited',
2026-02-08T13:46:32.416159Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.416242Z	▲      alt: 'IMG_1299_edited.jpg',
2026-02-08T13:46:32.416301Z	▲      width: null,
2026-02-08T13:46:32.416394Z	▲      height: null
2026-02-08T13:46:32.416598Z	▲    },
2026-02-08T13:46:32.416671Z	▲    ordering: 3
2026-02-08T13:46:32.416727Z	▲  },
2026-02-08T13:46:32.41691Z	▲  StaffEntity {
2026-02-08T13:46:32.416994Z	▲    name: 'シュリラ　心里',
2026-02-08T13:46:32.417074Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.417185Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.417269Z	▲    image: {
2026-02-08T13:46:32.417355Z	▲      baseName: 'Kokori-TJS',
2026-02-08T13:46:32.417434Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.417522Z	▲      alt: 'Kokori-TJS.jpg',
2026-02-08T13:46:32.417607Z	▲      width: null,
2026-02-08T13:46:32.417714Z	▲      height: null
2026-02-08T13:46:32.417813Z	▲    },
2026-02-08T13:46:32.417911Z	▲    ordering: 4
2026-02-08T13:46:32.41801Z	▲  },
2026-02-08T13:46:32.418116Z	▲  StaffEntity {
2026-02-08T13:46:32.418219Z	▲    name: '佐藤かつや',
2026-02-08T13:46:32.418312Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.418418Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.418513Z	▲    image: {
2026-02-08T13:46:32.418607Z	▲      baseName: 'Katsu-TJS',
2026-02-08T13:46:32.418676Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.41876Z	▲      alt: 'Katsu-TJS.jpg',
2026-02-08T13:46:32.418834Z	▲      width: null,
2026-02-08T13:46:32.418923Z	▲      height: null
2026-02-08T13:46:32.419012Z	▲    },
2026-02-08T13:46:32.419117Z	▲    ordering: 5
2026-02-08T13:46:32.419218Z	▲  },
2026-02-08T13:46:32.419313Z	▲  StaffEntity {
2026-02-08T13:46:32.419418Z	▲    name: '中村　めぐ',
2026-02-08T13:46:32.419533Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.419658Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.41978Z	▲    image: {
2026-02-08T13:46:32.419903Z	▲      baseName: 'Meg-TJS',
2026-02-08T13:46:32.420024Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.420151Z	▲      alt: 'Meg-TJS.jpg',
2026-02-08T13:46:32.420296Z	▲      width: null,
2026-02-08T13:46:32.420431Z	▲      height: null
2026-02-08T13:46:32.420567Z	▲    },
2026-02-08T13:46:32.420644Z	▲    ordering: 6
2026-02-08T13:46:32.4207Z	▲  },
2026-02-08T13:46:32.420803Z	▲  StaffEntity {
2026-02-08T13:46:32.420925Z	▲    name: 'ネマット　ヤッサー',
2026-02-08T13:46:32.421047Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.421191Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.421271Z	▲    image: {
2026-02-08T13:46:32.421326Z	▲      baseName: 'IMG_7879_edited',
2026-02-08T13:46:32.421412Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.421507Z	▲      alt: 'IMG_7879_edited.jpg',
2026-02-08T13:46:32.421598Z	▲      width: null,
2026-02-08T13:46:32.421685Z	▲      height: null
2026-02-08T13:46:32.421783Z	▲    },
2026-02-08T13:46:32.421876Z	▲    ordering: 7
2026-02-08T13:46:32.421962Z	▲  },
2026-02-08T13:46:32.422056Z	▲  StaffEntity {
2026-02-08T13:46:32.422172Z	▲    name: 'リー　美晴',
2026-02-08T13:46:32.422269Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.422359Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.422438Z	▲    image: {
2026-02-08T13:46:32.422528Z	▲      baseName: 'IMG_1280_edited',
2026-02-08T13:46:32.422594Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.422654Z	▲      alt: 'IMG_1280_edited.jpg',
2026-02-08T13:46:32.422752Z	▲      width: null,
2026-02-08T13:46:32.422858Z	▲      height: null
2026-02-08T13:46:32.422953Z	▲    },
2026-02-08T13:46:32.423037Z	▲    ordering: 8
2026-02-08T13:46:32.423136Z	▲  },
2026-02-08T13:46:32.423251Z	▲  StaffEntity {
2026-02-08T13:46:32.423366Z	▲    name: '大越　愛巳',
2026-02-08T13:46:32.423451Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.423554Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.423671Z	▲    image: {
2026-02-08T13:46:32.423748Z	▲      baseName: 'Manami-TJS',
2026-02-08T13:46:32.423833Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.423936Z	▲      alt: 'Manami-TJS.jpg',
2026-02-08T13:46:32.424045Z	▲      width: null,
2026-02-08T13:46:32.424168Z	▲      height: null
2026-02-08T13:46:32.424263Z	▲    },
2026-02-08T13:46:32.424352Z	▲    ordering: 9
2026-02-08T13:46:32.424464Z	▲  },
2026-02-08T13:46:32.424562Z	▲  StaffEntity {
2026-02-08T13:46:32.424662Z	▲    name: 'ワルドルフ　ターシャ',
2026-02-08T13:46:32.424753Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.424842Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.424946Z	▲    image: {
2026-02-08T13:46:32.425041Z	▲      baseName: 'profile',
2026-02-08T13:46:32.425156Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.425255Z	▲      alt: 'profile.jpg',
2026-02-08T13:46:32.425496Z	▲      width: null,
2026-02-08T13:46:32.425584Z	▲      height: null
2026-02-08T13:46:32.425678Z	▲    },
2026-02-08T13:46:32.425778Z	▲    ordering: 10
2026-02-08T13:46:32.425865Z	▲  },
2026-02-08T13:46:32.42598Z	▲  StaffEntity {
2026-02-08T13:46:32.426104Z	▲    name: '久高　ルミ',
2026-02-08T13:46:32.426222Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.426323Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.426416Z	▲    image: {
2026-02-08T13:46:32.426503Z	▲      baseName: 'Lumi-TJS',
2026-02-08T13:46:32.426588Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.426685Z	▲      alt: 'Lumi-TJS.jpg',
2026-02-08T13:46:32.426788Z	▲      width: null,
2026-02-08T13:46:32.4269Z	▲      height: null
2026-02-08T13:46:32.427005Z	▲    },
2026-02-08T13:46:32.427115Z	▲    ordering: 11
2026-02-08T13:46:32.427249Z	▲  },
2026-02-08T13:46:32.427361Z	▲  StaffEntity {
2026-02-08T13:46:32.427464Z	▲    name: 'マックナイト　はな',
2026-02-08T13:46:32.427568Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.427667Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.42777Z	▲    image: {
2026-02-08T13:46:32.427874Z	▲      baseName: 'IMG_7796',
2026-02-08T13:46:32.427986Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.428115Z	▲      alt: 'IMG_7796.jpeg',
2026-02-08T13:46:32.428227Z	▲      width: null,
2026-02-08T13:46:32.428329Z	▲      height: null
2026-02-08T13:46:32.428456Z	▲    },
2026-02-08T13:46:32.428574Z	▲    ordering: 12
2026-02-08T13:46:32.428741Z	▲  },
2026-02-08T13:46:32.428845Z	▲  StaffEntity {
2026-02-08T13:46:32.428981Z	▲    name: 'マックナイト　えみ',
2026-02-08T13:46:32.429113Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.42922Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.429315Z	▲    image: {
2026-02-08T13:46:32.429419Z	▲      baseName: 'IMG_7799_edited',
2026-02-08T13:46:32.429515Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.429605Z	▲      alt: 'IMG_7799_edited.jpg',
2026-02-08T13:46:32.429695Z	▲      width: null,
2026-02-08T13:46:32.429799Z	▲      height: null
2026-02-08T13:46:32.429935Z	▲    },
2026-02-08T13:46:32.430052Z	▲    ordering: 13
2026-02-08T13:46:32.430162Z	▲  },
2026-02-08T13:46:32.430269Z	▲  StaffEntity {
2026-02-08T13:46:32.430364Z	▲    name: '内田　比奈子',
2026-02-08T13:46:32.430458Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.430564Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.430654Z	▲    image: {
2026-02-08T13:46:32.43075Z	▲      baseName: 'profile',
2026-02-08T13:46:32.430889Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.431009Z	▲      alt: 'profile.jpg',
2026-02-08T13:46:32.431145Z	▲      width: null,
2026-02-08T13:46:32.431254Z	▲      height: null
2026-02-08T13:46:32.431354Z	▲    },
2026-02-08T13:46:32.431447Z	▲    ordering: 14
2026-02-08T13:46:32.431558Z	▲  },
2026-02-08T13:46:32.431674Z	▲  StaffEntity {
2026-02-08T13:46:32.431758Z	▲    name: 'オロスコ　佳代',
2026-02-08T13:46:32.431867Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.432178Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.432259Z	▲    image: {
2026-02-08T13:46:32.4324Z	▲      baseName: 'Kayo-TJS',
2026-02-08T13:46:32.432489Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.432606Z	▲      alt: 'Kayo-TJS.jpg',
2026-02-08T13:46:32.432711Z	▲      width: null,
2026-02-08T13:46:32.432808Z	▲      height: null
2026-02-08T13:46:32.432901Z	▲    },
2026-02-08T13:46:32.43299Z	▲    ordering: 15
2026-02-08T13:46:32.43314Z	▲  },
2026-02-08T13:46:32.433349Z	▲  StaffEntity {
2026-02-08T13:46:32.433506Z	▲    name: '塩屋　ジェニファー',
2026-02-08T13:46:32.433587Z	▲    text: [ [Object] ],
2026-02-08T13:46:32.433701Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:46:32.433773Z	▲    image: {
2026-02-08T13:46:32.433914Z	▲      baseName: 'profile',
2026-02-08T13:46:32.433995Z	▲      pagePath: 'staff',
2026-02-08T13:46:32.434127Z	▲      alt: 'profile.jpg',
2026-02-08T13:46:32.434253Z	▲      width: null,
2026-02-08T13:46:32.434362Z	▲      height: null
2026-02-08T13:46:32.434439Z	▲    },
2026-02-08T13:46:32.434545Z	▲    ordering: 16
2026-02-08T13:46:32.434669Z	▲  }
2026-02-08T13:46:32.434781Z	▲  ]
2026-02-08T13:46:32.434851Z	▲  [ImageOptimizer] baseName: mcknight, pagePath: staff
2026-02-08T13:46:32.434963Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.435043Z	▲  '/image/download/staff/mcknight-md.webp',
2026-02-08T13:46:32.435174Z	▲  '/image/download/staff/mcknight-sm.webp',
2026-02-08T13:46:32.435289Z	▲  '/image/download/staff/mcknight-lg.webp',
2026-02-08T13:46:32.435398Z	▲  '/image/download/staff/mcknight.png',
2026-02-08T13:46:32.435521Z	▲  '/image/download/staff/mcknight.jpg'
2026-02-08T13:46:32.43563Z	▲  ]
2026-02-08T13:46:32.435721Z	▲  [ImageOptimizer] baseName: minami, pagePath: staff
2026-02-08T13:46:32.435852Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.435946Z	▲  '/image/download/staff/minami-md.webp',
2026-02-08T13:46:32.436019Z	▲  '/image/download/staff/minami-sm.webp',
2026-02-08T13:46:32.436115Z	▲  '/image/download/staff/minami-lg.webp',
2026-02-08T13:46:32.43623Z	▲  '/image/download/staff/minami.png',
2026-02-08T13:46:32.436344Z	▲  '/image/download/staff/minami.jpg'
2026-02-08T13:46:32.436457Z	▲  ]
2026-02-08T13:46:32.436576Z	▲  [ImageOptimizer] baseName: IMG_1299_edited, pagePath: staff
2026-02-08T13:46:32.436707Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.436823Z	▲  '/image/download/staff/IMG_1299_edited-md.webp',
2026-02-08T13:46:32.436937Z	▲  '/image/download/staff/IMG_1299_edited-sm.webp',
2026-02-08T13:46:32.437052Z	▲  '/image/download/staff/IMG_1299_edited-lg.webp',
2026-02-08T13:46:32.437205Z	▲  '/image/download/staff/IMG_1299_edited.png',
2026-02-08T13:46:32.437324Z	▲  '/image/download/staff/IMG_1299_edited.jpg'
2026-02-08T13:46:32.437447Z	▲  ]
2026-02-08T13:46:32.437562Z	▲  [ImageOptimizer] baseName: Kokori-TJS, pagePath: staff
2026-02-08T13:46:32.437667Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.43778Z	▲  '/image/download/staff/Kokori-TJS-md.webp',
2026-02-08T13:46:32.43789Z	▲  '/image/download/staff/Kokori-TJS-sm.webp',
2026-02-08T13:46:32.438007Z	▲  '/image/download/staff/Kokori-TJS-lg.webp',
2026-02-08T13:46:32.438126Z	▲  '/image/download/staff/Kokori-TJS.png',
2026-02-08T13:46:32.438203Z	▲  '/image/download/staff/Kokori-TJS.jpg'
2026-02-08T13:46:32.43826Z	▲  ]
2026-02-08T13:46:32.438315Z	▲  [ImageOptimizer] baseName: Katsu-TJS, pagePath: staff
2026-02-08T13:46:32.438378Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.438436Z	▲  '/image/download/staff/Katsu-TJS-md.webp',
2026-02-08T13:46:32.438495Z	▲  '/image/download/staff/Katsu-TJS-sm.webp',
2026-02-08T13:46:32.438556Z	▲  '/image/download/staff/Katsu-TJS-lg.webp',
2026-02-08T13:46:32.43861Z	▲  '/image/download/staff/Katsu-TJS.png',
2026-02-08T13:46:32.438664Z	▲  '/image/download/staff/Katsu-TJS.jpg'
2026-02-08T13:46:32.438718Z	▲  ]
2026-02-08T13:46:32.438772Z	▲  [ImageOptimizer] baseName: Meg-TJS, pagePath: staff
2026-02-08T13:46:32.438826Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.438886Z	▲  '/image/download/staff/Meg-TJS-md.webp',
2026-02-08T13:46:32.43894Z	▲  '/image/download/staff/Meg-TJS-sm.webp',
2026-02-08T13:46:32.438994Z	▲  '/image/download/staff/Meg-TJS-lg.webp',
2026-02-08T13:46:32.439054Z	▲  '/image/download/staff/Meg-TJS.png',
2026-02-08T13:46:32.43914Z	▲  '/image/download/staff/Meg-TJS.jpg'
2026-02-08T13:46:32.439207Z	▲  ]
2026-02-08T13:46:32.439269Z	▲  [ImageOptimizer] baseName: IMG_7879_edited, pagePath: staff
2026-02-08T13:46:32.439325Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.439391Z	▲  '/image/download/staff/IMG_7879_edited-md.webp',
2026-02-08T13:46:32.439445Z	▲  '/image/download/staff/IMG_7879_edited-sm.webp',
2026-02-08T13:46:32.439513Z	▲  '/image/download/staff/IMG_7879_edited-lg.webp',
2026-02-08T13:46:32.439579Z	▲  '/image/download/staff/IMG_7879_edited.png',
2026-02-08T13:46:32.439634Z	▲  '/image/download/staff/IMG_7879_edited.jpg'
2026-02-08T13:46:32.439687Z	▲  ]
2026-02-08T13:46:32.43974Z	▲  [ImageOptimizer] baseName: IMG_1280_edited, pagePath: staff
2026-02-08T13:46:32.4398Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.439855Z	▲  '/image/download/staff/IMG_1280_edited-md.webp',
2026-02-08T13:46:32.43991Z	▲  '/image/download/staff/IMG_1280_edited-sm.webp',
2026-02-08T13:46:32.439964Z	▲  '/image/download/staff/IMG_1280_edited-lg.webp',
2026-02-08T13:46:32.440018Z	▲  '/image/download/staff/IMG_1280_edited.png',
2026-02-08T13:46:32.44007Z	▲  '/image/download/staff/IMG_1280_edited.jpg'
2026-02-08T13:46:32.440325Z	▲  ]
2026-02-08T13:46:32.4404Z	▲  [ImageOptimizer] baseName: Manami-TJS, pagePath: staff
2026-02-08T13:46:32.440457Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.440587Z	▲  '/image/download/staff/Manami-TJS-md.webp',
2026-02-08T13:46:32.440703Z	▲  '/image/download/staff/Manami-TJS-sm.webp',
2026-02-08T13:46:32.440787Z	▲  '/image/download/staff/Manami-TJS-lg.webp',
2026-02-08T13:46:32.440847Z	▲  '/image/download/staff/Manami-TJS.png',
2026-02-08T13:46:32.440964Z	▲  '/image/download/staff/Manami-TJS.jpg'
2026-02-08T13:46:32.441062Z	▲  ]
2026-02-08T13:46:32.441183Z	▲  [ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:46:32.441351Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.441774Z	▲  '/image/download/staff/profile-md.webp',
2026-02-08T13:46:32.441862Z	▲  '/image/download/staff/profile-sm.webp',
2026-02-08T13:46:32.441943Z	▲  '/image/download/staff/profile-lg.webp',
2026-02-08T13:46:32.44201Z	▲  '/image/download/staff/profile.png',
2026-02-08T13:46:32.44208Z	▲  '/image/download/staff/profile.jpg'
2026-02-08T13:46:32.442201Z	▲  ]
2026-02-08T13:46:32.442307Z	▲  [ImageOptimizer] baseName: Lumi-TJS, pagePath: staff
2026-02-08T13:46:32.442431Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.442538Z	▲  '/image/download/staff/Lumi-TJS-md.webp',
2026-02-08T13:46:32.442638Z	▲  '/image/download/staff/Lumi-TJS-sm.webp',
2026-02-08T13:46:32.442731Z	▲  '/image/download/staff/Lumi-TJS-lg.webp',
2026-02-08T13:46:32.44282Z	▲  '/image/download/staff/Lumi-TJS.png',
2026-02-08T13:46:32.442904Z	▲  '/image/download/staff/Lumi-TJS.jpg'
2026-02-08T13:46:32.443004Z	▲  ]
2026-02-08T13:46:32.443112Z	▲  [ImageOptimizer] baseName: IMG_7796, pagePath: staff
2026-02-08T13:46:32.443211Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.443303Z	▲  '/image/download/staff/IMG_7796-md.webp',
2026-02-08T13:46:32.443387Z	▲  '/image/download/staff/IMG_7796-sm.webp',
2026-02-08T13:46:32.443473Z	▲  '/image/download/staff/IMG_7796-lg.webp',
2026-02-08T13:46:32.44356Z	▲  '/image/download/staff/IMG_7796.png',
2026-02-08T13:46:32.443654Z	▲  '/image/download/staff/IMG_7796.jpg'
2026-02-08T13:46:32.443762Z	▲  ]
2026-02-08T13:46:32.443851Z	▲  [ImageOptimizer] baseName: IMG_7799_edited, pagePath: staff
2026-02-08T13:46:32.443939Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.444041Z	▲  '/image/download/staff/IMG_7799_edited-md.webp',
2026-02-08T13:46:32.444603Z	▲  '/image/download/staff/IMG_7799_edited-sm.webp',
2026-02-08T13:46:32.444738Z	▲  '/image/download/staff/IMG_7799_edited-lg.webp',
2026-02-08T13:46:32.444839Z	▲  '/image/download/staff/IMG_7799_edited.png',
2026-02-08T13:46:32.444944Z	▲  '/image/download/staff/IMG_7799_edited.jpg'
2026-02-08T13:46:32.445049Z	▲  ]
2026-02-08T13:46:32.44524Z	▲  [ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:46:32.445332Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.445473Z	▲  '/image/download/staff/profile-md.webp',
2026-02-08T13:46:32.445602Z	▲  '/image/download/staff/profile-sm.webp',
2026-02-08T13:46:32.445704Z	▲  '/image/download/staff/profile-lg.webp',
2026-02-08T13:46:32.445858Z	▲  '/image/download/staff/profile.png',
2026-02-08T13:46:32.445927Z	▲  '/image/download/staff/profile.jpg'
2026-02-08T13:46:32.446006Z	▲  ]
2026-02-08T13:46:32.446132Z	▲  [ImageOptimizer] baseName: Kayo-TJS, pagePath: staff
2026-02-08T13:46:32.446314Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.446466Z	▲  '/image/download/staff/Kayo-TJS-md.webp',
2026-02-08T13:46:32.446634Z	▲  '/image/download/staff/Kayo-TJS-sm.webp',
2026-02-08T13:46:32.446747Z	▲  '/image/download/staff/Kayo-TJS-lg.webp',
2026-02-08T13:46:32.446847Z	▲  '/image/download/staff/Kayo-TJS.png',
2026-02-08T13:46:32.446943Z	▲  '/image/download/staff/Kayo-TJS.jpg'
2026-02-08T13:46:32.447053Z	▲  ]
2026-02-08T13:46:32.447175Z	▲  [ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:46:32.447279Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:32.447385Z	▲  '/image/download/staff/profile-md.webp',
2026-02-08T13:46:32.447452Z	▲  '/image/download/staff/profile-sm.webp',
2026-02-08T13:46:32.447512Z	▲  '/image/download/staff/profile-lg.webp',
2026-02-08T13:46:32.447565Z	▲  '/image/download/staff/profile.png',
2026-02-08T13:46:32.447626Z	▲  '/image/download/staff/profile.jpg'
2026-02-08T13:46:32.447709Z	▲  ]
2026-02-08T13:46:32.447801Z	▲  🚫 キャッシュ無効 (reports): 直接APIから取得します
2026-02-08T13:46:32.447914Z	▲  🌐 Notion APIから取得中: reports
2026-02-08T13:46:32.680816Z	▲  ✅ API取得完了: reports (2件)
2026-02-08T13:46:32.695556Z	▲  🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:46:32.695816Z	▲  🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:46:32.695952Z	▲  🌐 Notion APIから取得中: category
2026-02-08T13:46:32.696384Z	▲  🌐 Notion APIから取得中: classes
2026-02-08T13:46:32.72422Z	▲  already exist.
2026-02-08T13:46:32.764513Z	▲  already exist.
2026-02-08T13:46:32.77678Z	▲  already exist.
2026-02-08T13:46:32.885535Z	▲  already exist.
2026-02-08T13:46:33.682468Z	▲  ✅ API取得完了: classes (7件)
2026-02-08T13:46:34.250027Z	▲  ✅ API取得完了: category (2件)
2026-02-08T13:46:36.830628Z	▲  Class data received: {
2026-02-08T13:46:36.830907Z	▲  category: [
2026-02-08T13:46:36.831051Z	▲    {
2026-02-08T13:46:36.831209Z	▲      object: 'page',
2026-02-08T13:46:36.831321Z	▲      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:46:36.831742Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:46:36.831881Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:46:36.832008Z	▲      created_by: [Object],
2026-02-08T13:46:36.832136Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.832246Z	▲      cover: null,
2026-02-08T13:46:36.832365Z	▲      icon: null,
2026-02-08T13:46:36.832459Z	▲      parent: [Object],
2026-02-08T13:46:36.83255Z	▲      archived: false,
2026-02-08T13:46:36.832639Z	▲      in_trash: false,
2026-02-08T13:46:36.832726Z	▲      is_locked: false,
2026-02-08T13:46:36.832814Z	▲      properties: [Object],
2026-02-08T13:46:36.832902Z	▲      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:46:36.832985Z	▲      public_url: null
2026-02-08T13:46:36.833068Z	▲    },
2026-02-08T13:46:36.833183Z	▲    {
2026-02-08T13:46:36.833272Z	▲      object: 'page',
2026-02-08T13:46:36.833382Z	▲      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:46:36.833477Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:46:36.833568Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:36.833682Z	▲      created_by: [Object],
2026-02-08T13:46:36.833784Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.833878Z	▲      cover: null,
2026-02-08T13:46:36.833975Z	▲      icon: null,
2026-02-08T13:46:36.834191Z	▲      parent: [Object],
2026-02-08T13:46:36.834324Z	▲      archived: false,
2026-02-08T13:46:36.834471Z	▲      in_trash: false,
2026-02-08T13:46:36.83465Z	▲      is_locked: false,
2026-02-08T13:46:36.834811Z	▲      properties: [Object],
2026-02-08T13:46:36.834894Z	▲      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:46:36.83503Z	▲      public_url: null
2026-02-08T13:46:36.83515Z	▲    }
2026-02-08T13:46:36.835257Z	▲  ],
2026-02-08T13:46:36.835375Z	▲  classes: [
2026-02-08T13:46:36.835475Z	▲    {
2026-02-08T13:46:36.835569Z	▲      object: 'page',
2026-02-08T13:46:36.835729Z	▲      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:46:36.835791Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:46:36.835849Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:36.83592Z	▲      created_by: [Object],
2026-02-08T13:46:36.835985Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.836172Z	▲      cover: null,
2026-02-08T13:46:36.836273Z	▲      icon: null,
2026-02-08T13:46:36.836398Z	▲      parent: [Object],
2026-02-08T13:46:36.836528Z	▲      archived: false,
2026-02-08T13:46:36.83663Z	▲      in_trash: false,
2026-02-08T13:46:36.83674Z	▲      is_locked: false,
2026-02-08T13:46:36.836844Z	▲      properties: [Object],
2026-02-08T13:46:36.836958Z	▲      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:46:36.837129Z	▲      public_url: null
2026-02-08T13:46:36.837279Z	▲    },
2026-02-08T13:46:36.837355Z	▲    {
2026-02-08T13:46:36.837413Z	▲      object: 'page',
2026-02-08T13:46:36.837481Z	▲      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:46:36.837543Z	▲      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:46:36.837601Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:46:36.837662Z	▲      created_by: [Object],
2026-02-08T13:46:36.837721Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.837775Z	▲      cover: null,
2026-02-08T13:46:36.837836Z	▲      icon: null,
2026-02-08T13:46:36.837895Z	▲      parent: [Object],
2026-02-08T13:46:36.837955Z	▲      archived: false,
2026-02-08T13:46:36.838018Z	▲      in_trash: false,
2026-02-08T13:46:36.83808Z	▲      is_locked: false,
2026-02-08T13:46:36.838175Z	▲      properties: [Object],
2026-02-08T13:46:36.838238Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:46:36.838298Z	▲      public_url: null
2026-02-08T13:46:36.838356Z	▲    },
2026-02-08T13:46:36.838412Z	▲    {
2026-02-08T13:46:36.838473Z	▲      object: 'page',
2026-02-08T13:46:36.838527Z	▲      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:46:36.838589Z	▲      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:46:36.838644Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:46:36.838703Z	▲      created_by: [Object],
2026-02-08T13:46:36.838765Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.838825Z	▲      cover: null,
2026-02-08T13:46:36.838884Z	▲      icon: null,
2026-02-08T13:46:36.838947Z	▲      parent: [Object],
2026-02-08T13:46:36.839003Z	▲      archived: false,
2026-02-08T13:46:36.839064Z	▲      in_trash: false,
2026-02-08T13:46:36.839383Z	▲      is_locked: false,
2026-02-08T13:46:36.839497Z	▲      properties: [Object],
2026-02-08T13:46:36.839605Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:46:36.83972Z	▲      public_url: null
2026-02-08T13:46:36.839823Z	▲    },
2026-02-08T13:46:36.839922Z	▲    {
2026-02-08T13:46:36.840015Z	▲      object: 'page',
2026-02-08T13:46:36.840147Z	▲      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:46:36.840261Z	▲      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:46:36.840359Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:46:36.840484Z	▲      created_by: [Object],
2026-02-08T13:46:36.84058Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.840666Z	▲      cover: null,
2026-02-08T13:46:36.840755Z	▲      icon: null,
2026-02-08T13:46:36.840916Z	▲      parent: [Object],
2026-02-08T13:46:36.840993Z	▲      archived: false,
2026-02-08T13:46:36.841064Z	▲      in_trash: false,
2026-02-08T13:46:36.841225Z	▲      is_locked: false,
2026-02-08T13:46:36.841297Z	▲      properties: [Object],
2026-02-08T13:46:36.841366Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:46:36.841533Z	▲      public_url: null
2026-02-08T13:46:36.841651Z	▲    },
2026-02-08T13:46:36.841805Z	▲    {
2026-02-08T13:46:36.841936Z	▲      object: 'page',
2026-02-08T13:46:36.842052Z	▲      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:46:36.842178Z	▲      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:46:36.842293Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:36.842388Z	▲      created_by: [Object],
2026-02-08T13:46:36.842492Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.842587Z	▲      cover: null,
2026-02-08T13:46:36.842678Z	▲      icon: null,
2026-02-08T13:46:36.842782Z	▲      parent: [Object],
2026-02-08T13:46:36.842875Z	▲      archived: false,
2026-02-08T13:46:36.842968Z	▲      in_trash: false,
2026-02-08T13:46:36.843072Z	▲      is_locked: false,
2026-02-08T13:46:36.843235Z	▲      properties: [Object],
2026-02-08T13:46:36.843329Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:46:36.843418Z	▲      public_url: null
2026-02-08T13:46:36.843513Z	▲    },
2026-02-08T13:46:36.84361Z	▲    {
2026-02-08T13:46:36.843705Z	▲      object: 'page',
2026-02-08T13:46:36.843793Z	▲      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:46:36.843895Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:46:36.843988Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:36.844087Z	▲      created_by: [Object],
2026-02-08T13:46:36.844212Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.844976Z	▲      cover: null,
2026-02-08T13:46:36.845087Z	▲      icon: null,
2026-02-08T13:46:36.845188Z	▲      parent: [Object],
2026-02-08T13:46:36.845248Z	▲      archived: false,
2026-02-08T13:46:36.845301Z	▲      in_trash: false,
2026-02-08T13:46:36.845356Z	▲      is_locked: false,
2026-02-08T13:46:36.845412Z	▲      properties: [Object],
2026-02-08T13:46:36.845464Z	▲      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:46:36.845516Z	▲      public_url: null
2026-02-08T13:46:36.845567Z	▲    },
2026-02-08T13:46:36.845619Z	▲    {
2026-02-08T13:46:36.845682Z	▲      object: 'page',
2026-02-08T13:46:36.845736Z	▲      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:46:36.845788Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:46:36.845841Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:46:36.845893Z	▲      created_by: [Object],
2026-02-08T13:46:36.845946Z	▲      last_edited_by: [Object],
2026-02-08T13:46:36.846013Z	▲      cover: null,
2026-02-08T13:46:36.846074Z	▲      icon: null,
2026-02-08T13:46:36.846215Z	▲      parent: [Object],
2026-02-08T13:46:36.846287Z	▲      archived: false,
2026-02-08T13:46:36.846349Z	▲      in_trash: false,
2026-02-08T13:46:36.846405Z	▲      is_locked: false,
2026-02-08T13:46:36.846466Z	▲      properties: [Object],
2026-02-08T13:46:36.846521Z	▲      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:46:36.846686Z	▲      public_url: null
2026-02-08T13:46:36.846946Z	▲    }
2026-02-08T13:46:36.847068Z	▲  ]
2026-02-08T13:46:36.847211Z	▲  }
2026-02-08T13:46:36.847312Z	▲  [ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:46:36.847508Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.847628Z	▲  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:46:36.847728Z	▲  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:46:36.847864Z	▲  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:46:36.848049Z	▲  '/image/download/class/IMG_1866.png',
2026-02-08T13:46:36.848339Z	▲  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:46:36.8486Z	▲  ]
2026-02-08T13:46:36.848764Z	▲  [ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:46:36.848904Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.849179Z	▲  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:46:36.849448Z	▲  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:46:36.849686Z	▲  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:46:36.849932Z	▲  '/image/download/class/IMG_3364.png',
2026-02-08T13:46:36.850016Z	▲  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:46:36.850175Z	▲  ]
2026-02-08T13:46:36.850243Z	▲  [ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:46:36.850299Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.850355Z	▲  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:46:36.850421Z	▲  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:46:36.850484Z	▲  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:46:36.850545Z	▲  '/image/download/class/20240210_110201.png',
2026-02-08T13:46:36.850601Z	▲  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:46:36.850667Z	▲  ]
2026-02-08T13:46:36.850729Z	▲  [ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:46:36.850789Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.850844Z	▲  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:46:36.850909Z	▲  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:46:36.850966Z	▲  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:46:36.851019Z	▲  '/image/download/class/IMG_7919.png',
2026-02-08T13:46:36.851073Z	▲  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:46:36.85116Z	▲  ]
2026-02-08T13:46:36.851224Z	▲  [ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:46:36.851286Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.851345Z	▲  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:46:36.851403Z	▲  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:46:36.851465Z	▲  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:46:36.851526Z	▲  '/image/download/class/IMG_7892.png',
2026-02-08T13:46:36.851593Z	▲  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:46:36.851648Z	▲  ]
2026-02-08T13:46:36.85171Z	▲  [ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:46:36.851786Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.851849Z	▲  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:46:36.851911Z	▲  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:46:36.851973Z	▲  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:46:36.852028Z	▲  '/image/download/class/IMG_3338.png',
2026-02-08T13:46:36.852081Z	▲  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:46:36.85222Z	▲  ]
2026-02-08T13:46:36.852292Z	▲  [ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:46:36.852422Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:36.852521Z	▲  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:46:36.852629Z	▲  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:46:36.852726Z	▲  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:46:36.852822Z	▲  '/image/download/class/IMG_8125.png',
2026-02-08T13:46:36.852926Z	▲  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:46:36.853059Z	▲  ]
2026-02-08T13:46:36.853334Z	▲  🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:46:36.853477Z	▲  🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:46:36.853597Z	▲  🌐 Notion APIから取得中: category
2026-02-08T13:46:36.853729Z	▲  🌐 Notion APIから取得中: classes
2026-02-08T13:46:37.083878Z	▲  ✅ API取得完了: classes (7件)
2026-02-08T13:46:40.26581Z	▲  ✅ API取得完了: category (2件)
2026-02-08T13:46:42.965935Z	▲  Class data received: {
2026-02-08T13:46:42.966235Z	▲  category: [
2026-02-08T13:46:42.966389Z	▲    {
2026-02-08T13:46:42.966506Z	▲      object: 'page',
2026-02-08T13:46:42.966626Z	▲      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:46:42.966733Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:46:42.966844Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:46:42.966987Z	▲      created_by: [Object],
2026-02-08T13:46:42.967114Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.967234Z	▲      cover: null,
2026-02-08T13:46:42.967356Z	▲      icon: null,
2026-02-08T13:46:42.967461Z	▲      parent: [Object],
2026-02-08T13:46:42.967566Z	▲      archived: false,
2026-02-08T13:46:42.967683Z	▲      in_trash: false,
2026-02-08T13:46:42.967786Z	▲      is_locked: false,
2026-02-08T13:46:42.967884Z	▲      properties: [Object],
2026-02-08T13:46:42.96799Z	▲      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:46:42.968146Z	▲      public_url: null
2026-02-08T13:46:42.968255Z	▲    },
2026-02-08T13:46:42.968362Z	▲    {
2026-02-08T13:46:42.968469Z	▲      object: 'page',
2026-02-08T13:46:42.96858Z	▲      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:46:42.968709Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:46:42.96881Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:42.968906Z	▲      created_by: [Object],
2026-02-08T13:46:42.969004Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.969122Z	▲      cover: null,
2026-02-08T13:46:42.969245Z	▲      icon: null,
2026-02-08T13:46:42.969359Z	▲      parent: [Object],
2026-02-08T13:46:42.969463Z	▲      archived: false,
2026-02-08T13:46:42.969588Z	▲      in_trash: false,
2026-02-08T13:46:42.969693Z	▲      is_locked: false,
2026-02-08T13:46:42.969797Z	▲      properties: [Object],
2026-02-08T13:46:42.969906Z	▲      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:46:42.970013Z	▲      public_url: null
2026-02-08T13:46:42.970145Z	▲    }
2026-02-08T13:46:42.970258Z	▲  ],
2026-02-08T13:46:42.97037Z	▲  classes: [
2026-02-08T13:46:42.970483Z	▲    {
2026-02-08T13:46:42.970581Z	▲      object: 'page',
2026-02-08T13:46:42.970678Z	▲      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:46:42.970775Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:46:42.970872Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:42.970965Z	▲      created_by: [Object],
2026-02-08T13:46:42.971073Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.971446Z	▲      cover: null,
2026-02-08T13:46:42.971564Z	▲      icon: null,
2026-02-08T13:46:42.971661Z	▲      parent: [Object],
2026-02-08T13:46:42.971769Z	▲      archived: false,
2026-02-08T13:46:42.97187Z	▲      in_trash: false,
2026-02-08T13:46:42.971955Z	▲      is_locked: false,
2026-02-08T13:46:42.972051Z	▲      properties: [Object],
2026-02-08T13:46:42.97217Z	▲      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:46:42.972283Z	▲      public_url: null
2026-02-08T13:46:42.972386Z	▲    },
2026-02-08T13:46:42.972492Z	▲    {
2026-02-08T13:46:42.972595Z	▲      object: 'page',
2026-02-08T13:46:42.9727Z	▲      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:46:42.972813Z	▲      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:46:42.972973Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:46:42.973111Z	▲      created_by: [Object],
2026-02-08T13:46:42.973243Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.973369Z	▲      cover: null,
2026-02-08T13:46:42.973482Z	▲      icon: null,
2026-02-08T13:46:42.97359Z	▲      parent: [Object],
2026-02-08T13:46:42.973683Z	▲      archived: false,
2026-02-08T13:46:42.973765Z	▲      in_trash: false,
2026-02-08T13:46:42.973849Z	▲      is_locked: false,
2026-02-08T13:46:42.973941Z	▲      properties: [Object],
2026-02-08T13:46:42.974026Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:46:42.974145Z	▲      public_url: null
2026-02-08T13:46:42.97424Z	▲    },
2026-02-08T13:46:42.974351Z	▲    {
2026-02-08T13:46:42.974456Z	▲      object: 'page',
2026-02-08T13:46:42.974556Z	▲      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:46:42.974657Z	▲      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:46:42.97476Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:46:42.97486Z	▲      created_by: [Object],
2026-02-08T13:46:42.974988Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.975134Z	▲      cover: null,
2026-02-08T13:46:42.975266Z	▲      icon: null,
2026-02-08T13:46:42.975418Z	▲      parent: [Object],
2026-02-08T13:46:42.975554Z	▲      archived: false,
2026-02-08T13:46:42.975695Z	▲      in_trash: false,
2026-02-08T13:46:42.975817Z	▲      is_locked: false,
2026-02-08T13:46:42.975935Z	▲      properties: [Object],
2026-02-08T13:46:42.976024Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:46:42.976117Z	▲      public_url: null
2026-02-08T13:46:42.976198Z	▲    },
2026-02-08T13:46:42.976278Z	▲    {
2026-02-08T13:46:42.976367Z	▲      object: 'page',
2026-02-08T13:46:42.976445Z	▲      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:46:42.976531Z	▲      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:46:42.976606Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:46:42.976689Z	▲      created_by: [Object],
2026-02-08T13:46:42.976777Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.976864Z	▲      cover: null,
2026-02-08T13:46:42.976947Z	▲      icon: null,
2026-02-08T13:46:42.977031Z	▲      parent: [Object],
2026-02-08T13:46:42.977142Z	▲      archived: false,
2026-02-08T13:46:42.977234Z	▲      in_trash: false,
2026-02-08T13:46:42.977317Z	▲      is_locked: false,
2026-02-08T13:46:42.977407Z	▲      properties: [Object],
2026-02-08T13:46:42.977493Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:46:42.977576Z	▲      public_url: null
2026-02-08T13:46:42.977678Z	▲    },
2026-02-08T13:46:42.977765Z	▲    {
2026-02-08T13:46:42.977846Z	▲      object: 'page',
2026-02-08T13:46:42.977925Z	▲      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:46:42.978006Z	▲      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:46:42.978088Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:42.978205Z	▲      created_by: [Object],
2026-02-08T13:46:42.978292Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.978384Z	▲      cover: null,
2026-02-08T13:46:42.978466Z	▲      icon: null,
2026-02-08T13:46:42.978546Z	▲      parent: [Object],
2026-02-08T13:46:42.978627Z	▲      archived: false,
2026-02-08T13:46:42.978708Z	▲      in_trash: false,
2026-02-08T13:46:42.97879Z	▲      is_locked: false,
2026-02-08T13:46:42.97887Z	▲      properties: [Object],
2026-02-08T13:46:42.97896Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:46:42.979043Z	▲      public_url: null
2026-02-08T13:46:42.979142Z	▲    },
2026-02-08T13:46:42.979228Z	▲    {
2026-02-08T13:46:42.979312Z	▲      object: 'page',
2026-02-08T13:46:42.979404Z	▲      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:46:42.97949Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:46:42.979572Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:46:42.979664Z	▲      created_by: [Object],
2026-02-08T13:46:42.979747Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.979829Z	▲      cover: null,
2026-02-08T13:46:42.979906Z	▲      icon: null,
2026-02-08T13:46:42.979992Z	▲      parent: [Object],
2026-02-08T13:46:42.980068Z	▲      archived: false,
2026-02-08T13:46:42.980165Z	▲      in_trash: false,
2026-02-08T13:46:42.980258Z	▲      is_locked: false,
2026-02-08T13:46:42.980343Z	▲      properties: [Object],
2026-02-08T13:46:42.980431Z	▲      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:46:42.980518Z	▲      public_url: null
2026-02-08T13:46:42.980595Z	▲    },
2026-02-08T13:46:42.980668Z	▲    {
2026-02-08T13:46:42.980752Z	▲      object: 'page',
2026-02-08T13:46:42.980831Z	▲      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:46:42.980908Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:46:42.980983Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:46:42.981058Z	▲      created_by: [Object],
2026-02-08T13:46:42.981153Z	▲      last_edited_by: [Object],
2026-02-08T13:46:42.981232Z	▲      cover: null,
2026-02-08T13:46:42.981323Z	▲      icon: null,
2026-02-08T13:46:42.981408Z	▲      parent: [Object],
2026-02-08T13:46:42.981485Z	▲      archived: false,
2026-02-08T13:46:42.981563Z	▲      in_trash: false,
2026-02-08T13:46:42.981639Z	▲      is_locked: false,
2026-02-08T13:46:42.981715Z	▲      properties: [Object],
2026-02-08T13:46:42.981801Z	▲      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:46:42.981875Z	▲      public_url: null
2026-02-08T13:46:42.981947Z	▲    }
2026-02-08T13:46:42.982018Z	▲  ]
2026-02-08T13:46:42.982087Z	▲  }
2026-02-08T13:46:42.982179Z	▲  [ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:46:42.982259Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.982349Z	▲  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:46:42.98244Z	▲  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:46:42.982517Z	▲  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:46:42.982616Z	▲  '/image/download/class/IMG_1866.png',
2026-02-08T13:46:42.982693Z	▲  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:46:42.982768Z	▲  ]
2026-02-08T13:46:42.982845Z	▲  [ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:46:42.982921Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.982997Z	▲  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:46:42.983073Z	▲  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:46:42.983168Z	▲  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:46:42.983251Z	▲  '/image/download/class/IMG_3364.png',
2026-02-08T13:46:42.983342Z	▲  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:46:42.983422Z	▲  ]
2026-02-08T13:46:42.983499Z	▲  [ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:46:42.983577Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.983657Z	▲  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:46:42.983751Z	▲  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:46:42.98383Z	▲  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:46:42.983907Z	▲  '/image/download/class/20240210_110201.png',
2026-02-08T13:46:42.983983Z	▲  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:46:42.984059Z	▲  ]
2026-02-08T13:46:42.984159Z	▲  [ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:46:42.984243Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.98432Z	▲  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:46:42.984414Z	▲  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:46:42.984491Z	▲  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:46:42.984568Z	▲  '/image/download/class/IMG_7919.png',
2026-02-08T13:46:42.984647Z	▲  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:46:42.98473Z	▲  ]
2026-02-08T13:46:42.98481Z	▲  [ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:46:42.984867Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.984924Z	▲  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:46:42.984977Z	▲  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:46:42.98503Z	▲  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:46:42.985084Z	▲  '/image/download/class/IMG_7892.png',
2026-02-08T13:46:42.985176Z	▲  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:46:42.985234Z	▲  ]
2026-02-08T13:46:42.985298Z	▲  [ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:46:42.985359Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.985413Z	▲  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:46:42.985466Z	▲  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:46:42.985518Z	▲  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:46:42.985569Z	▲  '/image/download/class/IMG_3338.png',
2026-02-08T13:46:42.985621Z	▲  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:46:42.985672Z	▲  ]
2026-02-08T13:46:42.985724Z	▲  [ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:46:42.985777Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:46:42.985834Z	▲  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:46:42.985888Z	▲  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:46:42.985943Z	▲  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:46:42.985994Z	▲  '/image/download/class/IMG_8125.png',
2026-02-08T13:46:42.986045Z	▲  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:46:42.986115Z	▲  ]
2026-02-08T13:46:42.994475Z	▲  🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:46:42.994628Z	▲  🚫 キャッシュ無効 (files): 直接APIから取得します
2026-02-08T13:46:42.994718Z	▲  🌐 Notion APIから取得中: schedule
2026-02-08T13:46:42.997447Z	▲  🌐 Notion APIから取得中: files
2026-02-08T13:46:43.259588Z	▲  ✅ API取得完了: files (1件)
2026-02-08T13:46:47.644115Z	▲  ✅ API取得完了: schedule (48件)
2026-02-08T13:46:47.817896Z	▲  already exist.
2026-02-08T13:46:47.94606Z	▲  already exist.
2026-02-08T13:46:47.946717Z	▲  not pdf file
2026-02-08T13:46:51.586931Z	▲  KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'ja' }
2026-02-08T13:46:51.649204Z	▲  already exist.
2026-02-08T13:46:51.649502Z	▲  not pdf file
2026-02-08T13:46:51.711245Z	▲  already exist.
2026-02-08T13:46:53.854222Z	▲  KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'ja' }
2026-02-08T13:46:53.892005Z	▲  already exist.
2026-02-08T13:46:53.892287Z	▲  not pdf file
2026-02-08T13:46:53.928982Z	▲  already exist.
2026-02-08T13:46:57.372324Z	▲  🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:46:57.372606Z	▲  🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:46:57.372793Z	▲  🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:46:57.372923Z	▲  🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:46:57.373039Z	▲  🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:46:57.373212Z	▲  🌐 Notion APIから取得中: qualification
2026-02-08T13:46:57.373321Z	▲  🌐 Notion APIから取得中: price
2026-02-08T13:46:57.374304Z	▲  🌐 Notion APIから取得中: discountFamily
2026-02-08T13:46:57.375295Z	▲  🌐 Notion APIから取得中: discountStaff
2026-02-08T13:46:57.376563Z	▲  🌐 Notion APIから取得中: enrollment
2026-02-08T13:46:57.62103Z	▲  ✅ API取得完了: discountStaff (3件)
2026-02-08T13:46:57.626339Z	▲  ✅ API取得完了: enrollment (2件)
2026-02-08T13:46:58.181439Z	▲  ✅ API取得完了: qualification (3件)
2026-02-08T13:46:59.431457Z	▲  ✅ API取得完了: price (8件)
2026-02-08T13:47:00.347063Z	▲  ✅ API取得完了: discountFamily (3件)
2026-02-08T13:47:00.365776Z	▲  🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:47:00.366066Z	▲  🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:47:00.366202Z	▲  🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:47:00.366424Z	▲  🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:47:00.366517Z	▲  🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:47:00.366576Z	▲  🌐 Notion APIから取得中: qualification
2026-02-08T13:47:00.366636Z	▲  🌐 Notion APIから取得中: price
2026-02-08T13:47:00.366691Z	▲  🌐 Notion APIから取得中: discountFamily
2026-02-08T13:47:00.366861Z	▲  🌐 Notion APIから取得中: discountStaff
2026-02-08T13:47:00.367189Z	▲  🌐 Notion APIから取得中: enrollment
2026-02-08T13:47:00.551135Z	▲  ✅ API取得完了: price (8件)
2026-02-08T13:47:01.066065Z	▲  ✅ API取得完了: discountFamily (3件)
2026-02-08T13:47:02.397848Z	▲  ✅ API取得完了: discountStaff (3件)
2026-02-08T13:47:03.5659Z	▲  ✅ API取得完了: enrollment (2件)
2026-02-08T13:47:04.025888Z	▲  ✅ API取得完了: qualification (3件)
2026-02-08T13:47:04.040885Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:04.048918Z	▲  [ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:47:04.049159Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.04933Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:47:04.049448Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:47:04.04957Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:47:04.049728Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:47:04.049833Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:47:04.049942Z	▲  ]
2026-02-08T13:47:04.050054Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:47:04.050227Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.050355Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:47:04.050469Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:47:04.050568Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:47:04.050661Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:47:04.050757Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:47:04.050858Z	▲  ]
2026-02-08T13:47:04.050998Z	▲  [ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:47:04.051138Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.051251Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:47:04.051347Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:47:04.051473Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:47:04.051594Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:47:04.051717Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:47:04.051827Z	▲  ]
2026-02-08T13:47:04.051937Z	▲  [ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:47:04.052049Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.052517Z	▲  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:47:04.052687Z	▲  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:47:04.052797Z	▲  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:47:04.052906Z	▲  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:47:04.053046Z	▲  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:47:04.053184Z	▲  ]
2026-02-08T13:47:04.05332Z	▲  [ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:47:04.053438Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.053547Z	▲  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:47:04.05366Z	▲  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:47:04.053769Z	▲  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:47:04.054005Z	▲  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:47:04.054108Z	▲  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:47:04.054251Z	▲  ]
2026-02-08T13:47:04.054382Z	▲  [ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:47:04.054504Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.054611Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:47:04.054724Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:47:04.054788Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:47:04.054844Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:47:04.054901Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:47:04.054963Z	▲  ]
2026-02-08T13:47:04.055038Z	▲  [ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:47:04.055106Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.05518Z	▲  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:47:04.055254Z	▲  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:47:04.055315Z	▲  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:47:04.055379Z	▲  '/image/download/news/unitymural02.png',
2026-02-08T13:47:04.055447Z	▲  '/image/download/news/unitymural02.jpg'
2026-02-08T13:47:04.055501Z	▲  ]
2026-02-08T13:47:04.055555Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:47:04.05561Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.055664Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:47:04.055716Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:47:04.05577Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:47:04.055823Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:47:04.055885Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:47:04.055945Z	▲  ]
2026-02-08T13:47:04.055998Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:47:04.056059Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.056289Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:47:04.056426Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:47:04.056534Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:47:04.056643Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:47:04.056741Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:47:04.056831Z	▲  ]
2026-02-08T13:47:04.056943Z	▲  [ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:47:04.057114Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.057215Z	▲  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:47:04.057306Z	▲  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:47:04.057402Z	▲  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:47:04.057505Z	▲  '/image/download/news/schooltablechair.png',
2026-02-08T13:47:04.057629Z	▲  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:47:04.057737Z	▲  ]
2026-02-08T13:47:04.057834Z	▲  [ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:47:04.057945Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.058046Z	▲  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:47:04.058336Z	▲  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:47:04.058427Z	▲  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:47:04.058507Z	▲  '/image/download/news/japanesegarden.png',
2026-02-08T13:47:04.058622Z	▲  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:47:04.058693Z	▲  ]
2026-02-08T13:47:04.083058Z	▲  🚀 グローバルキャッシュから取得: event
2026-02-08T13:47:04.086865Z	▲  [ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:47:04.087028Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.087138Z	▲  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:47:04.087239Z	▲  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:47:04.087344Z	▲  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:47:04.087452Z	▲  '/image/download/event/2026kenken.png',
2026-02-08T13:47:04.087552Z	▲  '/image/download/event/2026kenken.jpg'
2026-02-08T13:47:04.087655Z	▲  ]
2026-02-08T13:47:04.08787Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: event
2026-02-08T13:47:04.088041Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:04.088181Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:47:04.088294Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:47:04.088401Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:47:04.088495Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:47:04.088599Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:47:04.088693Z	▲  ]
2026-02-08T13:47:04.096951Z	▲  🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:47:04.097165Z	▲  🚫 キャッシュ無効 (support): 直接APIから取得します
2026-02-08T13:47:04.097305Z	▲  🚫 キャッシュ無効 (sponsor): 直接APIから取得します
2026-02-08T13:47:04.097436Z	▲  🚫 キャッシュ無効 (donation): 直接APIから取得します
2026-02-08T13:47:04.097548Z	▲  🚫 キャッシュ無効 (howto): 直接APIから取得します
2026-02-08T13:47:04.097661Z	▲  🌐 Notion APIから取得中: sponsors
2026-02-08T13:47:04.098111Z	▲  🌐 Notion APIから取得中: support
2026-02-08T13:47:04.098416Z	▲  🌐 Notion APIから取得中: sponsor
2026-02-08T13:47:04.098698Z	▲  🌐 Notion APIから取得中: donation
2026-02-08T13:47:04.098984Z	▲  🌐 Notion APIから取得中: howto
2026-02-08T13:47:04.243017Z	▲  ✅ API取得完了: sponsor (1件)
2026-02-08T13:47:04.262514Z	▲  ✅ API取得完了: sponsors (3件)
2026-02-08T13:47:04.269402Z	▲  ✅ API取得完了: donation (1件)
2026-02-08T13:47:04.327722Z	▲  ✅ API取得完了: howto (3件)
2026-02-08T13:47:04.863406Z	▲  ✅ API取得完了: support (1件)
2026-02-08T13:47:05.802399Z	▲  [ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:47:05.802707Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:05.802886Z	▲  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:47:05.803005Z	▲  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:47:05.803139Z	▲  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:47:05.80326Z	▲  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:47:05.803376Z	▲  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:47:05.803471Z	▲  ]
2026-02-08T13:47:05.803624Z	▲  [ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:47:05.803746Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:05.803852Z	▲  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:47:05.804003Z	▲  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:47:05.804069Z	▲  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:47:05.804159Z	▲  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:47:05.804221Z	▲  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:47:05.804275Z	▲  ]
2026-02-08T13:47:05.80433Z	▲  [ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:47:05.804565Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:05.804713Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:47:05.804828Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:47:05.804953Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:47:05.805062Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:47:05.805193Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:47:05.805292Z	▲  ]
2026-02-08T13:47:05.814187Z	▲  🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:47:05.814371Z	▲  🌐 Notion APIから取得中: general
2026-02-08T13:47:06.803903Z	▲  ✅ API取得完了: general (1件)
2026-02-08T13:47:06.814973Z	▲  🚫 キャッシュ無効 (opportunity): 直接APIから取得します
2026-02-08T13:47:06.815236Z	▲  🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:47:06.815338Z	▲  🌐 Notion APIから取得中: opportunity
2026-02-08T13:47:06.815452Z	▲  🌐 Notion APIから取得中: general
2026-02-08T13:47:06.973147Z	▲  ✅ API取得完了: general (1件)
2026-02-08T13:47:06.996214Z	▲  ✅ API取得完了: opportunity (3件)
2026-02-08T13:47:07.007761Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:09.415246Z	▲  [ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:47:09.415477Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:09.416025Z	▲  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:47:09.416229Z	▲  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:47:09.416449Z	▲  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:47:09.41653Z	▲  '/image/download/news/unitymural02.png',
2026-02-08T13:47:09.416591Z	▲  '/image/download/news/unitymural02.jpg'
2026-02-08T13:47:09.416769Z	▲  ]
2026-02-08T13:47:09.423882Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:11.52955Z	▲  [ImageOptimizer] baseName: Oasissep2017, pagePath: news
2026-02-08T13:47:11.529858Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:11.530022Z	▲  '/image/download/news/Oasissep2017-md.webp',
2026-02-08T13:47:11.530196Z	▲  '/image/download/news/Oasissep2017-sm.webp',
2026-02-08T13:47:11.530313Z	▲  '/image/download/news/Oasissep2017-lg.webp',
2026-02-08T13:47:11.530406Z	▲  '/image/download/news/Oasissep2017.png',
2026-02-08T13:47:11.530519Z	▲  '/image/download/news/Oasissep2017.jpg'
2026-02-08T13:47:11.530636Z	▲  ]
2026-02-08T13:47:11.54152Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:12.247752Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:13.759848Z	▲  [ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:47:13.760168Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:13.760323Z	▲  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:47:13.760427Z	▲  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:47:13.76078Z	▲  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:47:13.760931Z	▲  '/image/download/news/japanesegarden.png',
2026-02-08T13:47:13.761255Z	▲  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:47:13.761403Z	▲  ]
2026-02-08T13:47:13.768802Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:15.07479Z	▲  [ImageOptimizer] baseName: tucsonundokai2023, pagePath: news
2026-02-08T13:47:15.075148Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:15.075265Z	▲  '/image/download/news/tucsonundokai2023-md.webp',
2026-02-08T13:47:15.075337Z	▲  '/image/download/news/tucsonundokai2023-sm.webp',
2026-02-08T13:47:15.075393Z	▲  '/image/download/news/tucsonundokai2023-lg.webp',
2026-02-08T13:47:15.075451Z	▲  '/image/download/news/tucsonundokai2023.png',
2026-02-08T13:47:15.075514Z	▲  '/image/download/news/tucsonundokai2023.jpg'
2026-02-08T13:47:15.075582Z	▲  ]
2026-02-08T13:47:15.083278Z	▲  Generating static pages (27/132)
2026-02-08T13:47:15.083789Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:23.427431Z	▲  [ImageOptimizer] baseName: notoearthquake1, pagePath: news
2026-02-08T13:47:23.427672Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:23.427993Z	▲  '/image/download/news/notoearthquake1-md.webp',
2026-02-08T13:47:23.428199Z	▲  '/image/download/news/notoearthquake1-sm.webp',
2026-02-08T13:47:23.428326Z	▲  '/image/download/news/notoearthquake1-lg.webp',
2026-02-08T13:47:23.428445Z	▲  '/image/download/news/notoearthquake1.png',
2026-02-08T13:47:23.428563Z	▲  '/image/download/news/notoearthquake1.jpg'
2026-02-08T13:47:23.428684Z	▲  ]
2026-02-08T13:47:23.441038Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:24.407918Z	▲  [ImageOptimizer] baseName: newyearprayer, pagePath: news
2026-02-08T13:47:24.408274Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:24.408429Z	▲  '/image/download/news/newyearprayer-md.webp',
2026-02-08T13:47:24.40859Z	▲  '/image/download/news/newyearprayer-sm.webp',
2026-02-08T13:47:24.408697Z	▲  '/image/download/news/newyearprayer-lg.webp',
2026-02-08T13:47:24.408798Z	▲  '/image/download/news/newyearprayer.png',
2026-02-08T13:47:24.408887Z	▲  '/image/download/news/newyearprayer.jpg'
2026-02-08T13:47:24.408978Z	▲  ]
2026-02-08T13:47:24.417473Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:28.616553Z	▲  [ImageOptimizer] baseName: kanjikentei2024, pagePath: news
2026-02-08T13:47:28.61684Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:28.616969Z	▲  '/image/download/news/kanjikentei2024-md.webp',
2026-02-08T13:47:28.617066Z	▲  '/image/download/news/kanjikentei2024-sm.webp',
2026-02-08T13:47:28.617224Z	▲  '/image/download/news/kanjikentei2024-lg.webp',
2026-02-08T13:47:28.617333Z	▲  '/image/download/news/kanjikentei2024.png',
2026-02-08T13:47:28.617476Z	▲  '/image/download/news/kanjikentei2024.jpg'
2026-02-08T13:47:28.617586Z	▲  ]
2026-02-08T13:47:28.62618Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:36.72068Z	▲  [ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:47:36.721377Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:36.721525Z	▲  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:47:36.721599Z	▲  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:47:36.721673Z	▲  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:47:36.721782Z	▲  '/image/download/news/schooltablechair.png',
2026-02-08T13:47:36.721886Z	▲  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:47:36.721991Z	▲  ]
2026-02-08T13:47:36.730215Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:38.772272Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:39.754589Z	▲  [ImageOptimizer] baseName: arizonamatsurilogo, pagePath: news
2026-02-08T13:47:39.754897Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:39.755062Z	▲  '/image/download/news/arizonamatsurilogo-md.webp',
2026-02-08T13:47:39.755215Z	▲  '/image/download/news/arizonamatsurilogo-sm.webp',
2026-02-08T13:47:39.755314Z	▲  '/image/download/news/arizonamatsurilogo-lg.webp',
2026-02-08T13:47:39.755436Z	▲  '/image/download/news/arizonamatsurilogo.png',
2026-02-08T13:47:39.755547Z	▲  '/image/download/news/arizonamatsurilogo.jpg'
2026-02-08T13:47:39.755641Z	▲  ]
2026-02-08T13:47:39.762319Z	▲  Generating static pages (33/132)
2026-02-08T13:47:39.762981Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:46.184569Z	▲  [ImageOptimizer] baseName: supportinghands, pagePath: news
2026-02-08T13:47:46.184902Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:46.185065Z	▲  '/image/download/news/supportinghands-md.webp',
2026-02-08T13:47:46.185199Z	▲  '/image/download/news/supportinghands-sm.webp',
2026-02-08T13:47:46.185319Z	▲  '/image/download/news/supportinghands-lg.webp',
2026-02-08T13:47:46.185435Z	▲  '/image/download/news/supportinghands.png',
2026-02-08T13:47:46.185558Z	▲  '/image/download/news/supportinghands.jpg'
2026-02-08T13:47:46.18574Z	▲  ]
2026-02-08T13:47:46.19344Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:47.891013Z	▲  [ImageOptimizer] baseName: childreninclassroom, pagePath: news
2026-02-08T13:47:47.891397Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:47.891517Z	▲  '/image/download/news/childreninclassroom-md.webp',
2026-02-08T13:47:47.891604Z	▲  '/image/download/news/childreninclassroom-sm.webp',
2026-02-08T13:47:47.891854Z	▲  '/image/download/news/childreninclassroom-lg.webp',
2026-02-08T13:47:47.891995Z	▲  '/image/download/news/childreninclassroom.png',
2026-02-08T13:47:47.892117Z	▲  '/image/download/news/childreninclassroom.jpg'
2026-02-08T13:47:47.892237Z	▲  ]
2026-02-08T13:47:47.904022Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:49.121377Z	▲  [ImageOptimizer] baseName: hitomimcknight, pagePath: news
2026-02-08T13:47:49.121714Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:49.122158Z	▲  '/image/download/news/hitomimcknight-md.webp',
2026-02-08T13:47:49.122271Z	▲  '/image/download/news/hitomimcknight-sm.webp',
2026-02-08T13:47:49.122344Z	▲  '/image/download/news/hitomimcknight-lg.webp',
2026-02-08T13:47:49.122401Z	▲  '/image/download/news/hitomimcknight.png',
2026-02-08T13:47:49.122455Z	▲  '/image/download/news/hitomimcknight.jpg'
2026-02-08T13:47:49.122508Z	▲  ]
2026-02-08T13:47:49.132274Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:51.001062Z	▲  [ImageOptimizer] baseName: kanken2022, pagePath: news
2026-02-08T13:47:51.001509Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:51.001641Z	▲  '/image/download/news/kanken2022-md.webp',
2026-02-08T13:47:51.001746Z	▲  '/image/download/news/kanken2022-sm.webp',
2026-02-08T13:47:51.001878Z	▲  '/image/download/news/kanken2022-lg.webp',
2026-02-08T13:47:51.00199Z	▲  '/image/download/news/kanken2022.png',
2026-02-08T13:47:51.002132Z	▲  '/image/download/news/kanken2022.jpg'
2026-02-08T13:47:51.002229Z	▲  ]
2026-02-08T13:47:51.009381Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:53.014533Z	▲  [ImageOptimizer] baseName: kanjikentei2020, pagePath: news
2026-02-08T13:47:53.014771Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:53.014847Z	▲  '/image/download/news/kanjikentei2020-md.webp',
2026-02-08T13:47:53.014933Z	▲  '/image/download/news/kanjikentei2020-sm.webp',
2026-02-08T13:47:53.015026Z	▲  '/image/download/news/kanjikentei2020-lg.webp',
2026-02-08T13:47:53.015163Z	▲  '/image/download/news/kanjikentei2020.png',
2026-02-08T13:47:53.015232Z	▲  '/image/download/news/kanjikentei2020.jpg'
2026-02-08T13:47:53.015303Z	▲  ]
2026-02-08T13:47:53.022382Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:54.387966Z	▲  [ImageOptimizer] baseName: 2020newyear, pagePath: news
2026-02-08T13:47:54.388547Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:54.388792Z	▲  '/image/download/news/2020newyear-md.webp',
2026-02-08T13:47:54.388914Z	▲  '/image/download/news/2020newyear-sm.webp',
2026-02-08T13:47:54.389394Z	▲  '/image/download/news/2020newyear-lg.webp',
2026-02-08T13:47:54.389486Z	▲  '/image/download/news/2020newyear.png',
2026-02-08T13:47:54.389565Z	▲  '/image/download/news/2020newyear.jpg'
2026-02-08T13:47:54.389676Z	▲  ]
2026-02-08T13:47:54.396937Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:58.248231Z	▲  [ImageOptimizer] baseName: schoolchildrensmiles, pagePath: news
2026-02-08T13:47:58.248517Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:47:58.248654Z	▲  '/image/download/news/schoolchildrensmiles-md.webp',
2026-02-08T13:47:58.248774Z	▲  '/image/download/news/schoolchildrensmiles-sm.webp',
2026-02-08T13:47:58.248876Z	▲  '/image/download/news/schoolchildrensmiles-lg.webp',
2026-02-08T13:47:58.249Z	▲  '/image/download/news/schoolchildrensmiles.png',
2026-02-08T13:47:58.249138Z	▲  '/image/download/news/schoolchildrensmiles.jpg'
2026-02-08T13:47:58.249246Z	▲  ]
2026-02-08T13:47:58.256006Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:47:59.759806Z	▲  Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:48:00.215602Z	▲  Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:48:00.218712Z	▲  [ImageOptimizer] baseName: kanjikenteilogo, pagePath: news
2026-02-08T13:48:00.218931Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:00.219075Z	▲  '/image/download/news/kanjikenteilogo-md.webp',
2026-02-08T13:48:00.21926Z	▲  '/image/download/news/kanjikenteilogo-sm.webp',
2026-02-08T13:48:00.2194Z	▲  '/image/download/news/kanjikenteilogo-lg.webp',
2026-02-08T13:48:00.219536Z	▲  '/image/download/news/kanjikenteilogo.png',
2026-02-08T13:48:00.219639Z	▲  '/image/download/news/kanjikenteilogo.jpg'
2026-02-08T13:48:00.219731Z	▲  ]
2026-02-08T13:48:00.226846Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:01.659678Z	▲  [ImageOptimizer] baseName: newyear2021, pagePath: news
2026-02-08T13:48:01.65991Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:01.659994Z	▲  '/image/download/news/newyear2021-md.webp',
2026-02-08T13:48:01.660061Z	▲  '/image/download/news/newyear2021-sm.webp',
2026-02-08T13:48:01.660155Z	▲  '/image/download/news/newyear2021-lg.webp',
2026-02-08T13:48:01.66022Z	▲  '/image/download/news/newyear2021.png',
2026-02-08T13:48:01.660275Z	▲  '/image/download/news/newyear2021.jpg'
2026-02-08T13:48:01.66033Z	▲  ]
2026-02-08T13:48:01.666673Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:05.666529Z	▲  [ImageOptimizer] baseName: tucsonundokai2020, pagePath: news
2026-02-08T13:48:05.667108Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:05.667345Z	▲  '/image/download/news/tucsonundokai2020-md.webp',
2026-02-08T13:48:05.667442Z	▲  '/image/download/news/tucsonundokai2020-sm.webp',
2026-02-08T13:48:05.667539Z	▲  '/image/download/news/tucsonundokai2020-lg.webp',
2026-02-08T13:48:05.667649Z	▲  '/image/download/news/tucsonundokai2020.png',
2026-02-08T13:48:05.667758Z	▲  '/image/download/news/tucsonundokai2020.jpg'
2026-02-08T13:48:05.667864Z	▲  ]
2026-02-08T13:48:05.673796Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:06.575956Z	▲  [ImageOptimizer] baseName: boystudyonline, pagePath: news
2026-02-08T13:48:06.576297Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:06.576457Z	▲  '/image/download/news/boystudyonline-md.webp',
2026-02-08T13:48:06.576616Z	▲  '/image/download/news/boystudyonline-sm.webp',
2026-02-08T13:48:06.576713Z	▲  '/image/download/news/boystudyonline-lg.webp',
2026-02-08T13:48:06.576778Z	▲  '/image/download/news/boystudyonline.png',
2026-02-08T13:48:06.576835Z	▲  '/image/download/news/boystudyonline.jpg'
2026-02-08T13:48:06.576896Z	▲  ]
2026-02-08T13:48:06.583747Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:09.186001Z	▲  [ImageOptimizer] baseName: schoolchairtable, pagePath: news
2026-02-08T13:48:09.186398Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:09.186501Z	▲  '/image/download/news/schoolchairtable-md.webp',
2026-02-08T13:48:09.186634Z	▲  '/image/download/news/schoolchairtable-sm.webp',
2026-02-08T13:48:09.186738Z	▲  '/image/download/news/schoolchairtable-lg.webp',
2026-02-08T13:48:09.186946Z	▲  '/image/download/news/schoolchairtable.png',
2026-02-08T13:48:09.187039Z	▲  '/image/download/news/schoolchairtable.jpg'
2026-02-08T13:48:09.187136Z	▲  ]
2026-02-08T13:48:09.194302Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:10.843689Z	▲  [ImageOptimizer] baseName: remotelearningkid, pagePath: news
2026-02-08T13:48:10.844323Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:10.844729Z	▲  '/image/download/news/remotelearningkid-md.webp',
2026-02-08T13:48:10.844829Z	▲  '/image/download/news/remotelearningkid-sm.webp',
2026-02-08T13:48:10.845292Z	▲  '/image/download/news/remotelearningkid-lg.webp',
2026-02-08T13:48:10.84564Z	▲  '/image/download/news/remotelearningkid.png',
2026-02-08T13:48:10.845972Z	▲  '/image/download/news/remotelearningkid.jpg'
2026-02-08T13:48:10.846435Z	▲  ]
2026-02-08T13:48:10.853068Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:14.317483Z	▲  [ImageOptimizer] baseName: sponsorthanks, pagePath: news
2026-02-08T13:48:14.317864Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:14.317961Z	▲  '/image/download/news/sponsorthanks-md.webp',
2026-02-08T13:48:14.318048Z	▲  '/image/download/news/sponsorthanks-sm.webp',
2026-02-08T13:48:14.318177Z	▲  '/image/download/news/sponsorthanks-lg.webp',
2026-02-08T13:48:14.318281Z	▲  '/image/download/news/sponsorthanks.png',
2026-02-08T13:48:14.318402Z	▲  '/image/download/news/sponsorthanks.jpg'
2026-02-08T13:48:14.318506Z	▲  ]
2026-02-08T13:48:14.326795Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:17.876173Z	▲  [ImageOptimizer] baseName: kanjikentei2023, pagePath: news
2026-02-08T13:48:17.876548Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:17.876688Z	▲  '/image/download/news/kanjikentei2023-md.webp',
2026-02-08T13:48:17.876802Z	▲  '/image/download/news/kanjikentei2023-sm.webp',
2026-02-08T13:48:17.876931Z	▲  '/image/download/news/kanjikentei2023-lg.webp',
2026-02-08T13:48:17.877021Z	▲  '/image/download/news/kanjikentei2023.png',
2026-02-08T13:48:17.877135Z	▲  '/image/download/news/kanjikentei2023.jpg'
2026-02-08T13:48:17.877232Z	▲  ]
2026-02-08T13:48:17.883869Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:19.593754Z	▲  [ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:48:19.59416Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:19.594296Z	▲  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:48:19.594401Z	▲  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:48:19.594502Z	▲  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:48:19.594639Z	▲  '/image/download/news/emptyschool.png',
2026-02-08T13:48:19.594744Z	▲  '/image/download/news/emptyschool.jpg'
2026-02-08T13:48:19.59536Z	▲  ]
2026-02-08T13:48:19.600884Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:23.136009Z	▲  [ImageOptimizer] baseName: pandemicprevention, pagePath: news
2026-02-08T13:48:23.136458Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:23.136724Z	▲  '/image/download/news/pandemicprevention-md.webp',
2026-02-08T13:48:23.136926Z	▲  '/image/download/news/pandemicprevention-sm.webp',
2026-02-08T13:48:23.137052Z	▲  '/image/download/news/pandemicprevention-lg.webp',
2026-02-08T13:48:23.137209Z	▲  '/image/download/news/pandemicprevention.png',
2026-02-08T13:48:23.137313Z	▲  '/image/download/news/pandemicprevention.jpg'
2026-02-08T13:48:23.137431Z	▲  ]
2026-02-08T13:48:23.144813Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:25.643826Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:28.641603Z	▲  [ImageOptimizer] baseName: mochipounding, pagePath: news
2026-02-08T13:48:28.64184Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:28.641952Z	▲  '/image/download/news/mochipounding-md.webp',
2026-02-08T13:48:28.642123Z	▲  '/image/download/news/mochipounding-sm.webp',
2026-02-08T13:48:28.642246Z	▲  '/image/download/news/mochipounding-lg.webp',
2026-02-08T13:48:28.642397Z	▲  '/image/download/news/mochipounding.png',
2026-02-08T13:48:28.642497Z	▲  '/image/download/news/mochipounding.jpg'
2026-02-08T13:48:28.642607Z	▲  ]
2026-02-08T13:48:28.650276Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:29.831382Z	▲  [ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:48:29.831737Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:29.83189Z	▲  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:48:29.832007Z	▲  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:48:29.832149Z	▲  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:48:29.832266Z	▲  '/image/download/news/emptyschool.png',
2026-02-08T13:48:29.832401Z	▲  '/image/download/news/emptyschool.jpg'
2026-02-08T13:48:29.832527Z	▲  ]
2026-02-08T13:48:29.838732Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:36.413472Z	▲  [ImageOptimizer] baseName: SAJCClogo, pagePath: news
2026-02-08T13:48:36.413701Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:36.413778Z	▲  '/image/download/news/SAJCClogo-md.webp',
2026-02-08T13:48:36.41387Z	▲  '/image/download/news/SAJCClogo-sm.webp',
2026-02-08T13:48:36.413975Z	▲  '/image/download/news/SAJCClogo-lg.webp',
2026-02-08T13:48:36.414078Z	▲  '/image/download/news/SAJCClogo.png',
2026-02-08T13:48:36.414201Z	▲  '/image/download/news/SAJCClogo.jpg'
2026-02-08T13:48:36.414297Z	▲  ]
2026-02-08T13:48:36.423682Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:39.005948Z	▲  [ImageOptimizer] baseName: lastdayofschool2021, pagePath: news
2026-02-08T13:48:39.006281Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:39.006423Z	▲  '/image/download/news/lastdayofschool2021-md.webp',
2026-02-08T13:48:39.006529Z	▲  '/image/download/news/lastdayofschool2021-sm.webp',
2026-02-08T13:48:39.006646Z	▲  '/image/download/news/lastdayofschool2021-lg.webp',
2026-02-08T13:48:39.006783Z	▲  '/image/download/news/lastdayofschool2021.png',
2026-02-08T13:48:39.006901Z	▲  '/image/download/news/lastdayofschool2021.jpg'
2026-02-08T13:48:39.007032Z	▲  ]
2026-02-08T13:48:39.014759Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:41.445783Z	▲  [ImageOptimizer] baseName: tucsonundokai2021, pagePath: news
2026-02-08T13:48:41.446154Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:41.446264Z	▲  '/image/download/news/tucsonundokai2021-md.webp',
2026-02-08T13:48:41.446336Z	▲  '/image/download/news/tucsonundokai2021-sm.webp',
2026-02-08T13:48:41.446593Z	▲  '/image/download/news/tucsonundokai2021-lg.webp',
2026-02-08T13:48:41.446715Z	▲  '/image/download/news/tucsonundokai2021.png',
2026-02-08T13:48:41.446846Z	▲  '/image/download/news/tucsonundokai2021.jpg'
2026-02-08T13:48:41.447197Z	▲  ]
2026-02-08T13:48:41.452251Z	▲  Generating static pages (56/132)
2026-02-08T13:48:41.453088Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:42.780259Z	▲  [ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:48:42.78079Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:42.780988Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:48:42.781124Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:48:42.781221Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:48:42.781311Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:48:42.78139Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:48:42.781479Z	▲  ]
2026-02-08T13:48:42.792994Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:44.772388Z	▲  [ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:48:44.772684Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:44.772837Z	▲  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:48:44.772948Z	▲  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:48:44.773072Z	▲  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:48:44.773189Z	▲  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:48:44.773295Z	▲  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:48:44.773393Z	▲  ]
2026-02-08T13:48:44.780215Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:49.653316Z	▲  [ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:48:49.653591Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:49.653798Z	▲  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:48:49.653879Z	▲  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:48:49.653938Z	▲  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:48:49.653993Z	▲  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:48:49.654054Z	▲  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:48:49.654157Z	▲  ]
2026-02-08T13:48:49.660998Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:51.055322Z	▲  [ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:48:51.055709Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:51.055929Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:48:51.056076Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:48:51.056298Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:48:51.056431Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:48:51.056506Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:48:51.05662Z	▲  ]
2026-02-08T13:48:51.063756Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:52.688614Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:48:52.689373Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:52.689555Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:48:52.689676Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:48:52.689779Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:48:52.689874Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:48:52.689981Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:48:52.690071Z	▲  ]
2026-02-08T13:48:52.701038Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:55.374539Z	▲  [ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:48:55.375012Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:55.375296Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:48:55.375434Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:48:55.375548Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:48:55.37566Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:48:55.37578Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:48:55.375894Z	▲  ]
2026-02-08T13:48:55.381895Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:48:59.617225Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:48:59.617542Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:48:59.617682Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:48:59.617839Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:48:59.617976Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:48:59.618164Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:48:59.618292Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:48:59.618496Z	▲  ]
2026-02-08T13:48:59.62562Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:49:01.799476Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:49:01.799886Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:01.800114Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:49:01.800223Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:49:01.800286Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:49:01.800347Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:49:01.80041Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:49:01.800467Z	▲  ]
2026-02-08T13:49:01.806023Z	▲  🚀 グローバルキャッシュから取得: event
2026-02-08T13:49:02.821045Z	▲  PDF already exists: 2026kenken.pdf
2026-02-08T13:49:02.890421Z	▲  PDF already exists: 2026kenken.pdf
2026-02-08T13:49:02.893993Z	▲  [ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:49:02.894192Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:02.894567Z	▲  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:49:02.89505Z	▲  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:49:02.895221Z	▲  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:49:02.895343Z	▲  '/image/download/event/2026kenken.png',
2026-02-08T13:49:02.895454Z	▲  '/image/download/event/2026kenken.jpg'
2026-02-08T13:49:02.895556Z	▲  ]
2026-02-08T13:49:02.90236Z	▲  🚀 グローバルキャッシュから取得: event
2026-02-08T13:49:07.017711Z	▲  Error fetching event item: TypeError: Cannot read properties of undefined (reading 'plain_text')
2026-02-08T13:49:07.018114Z	▲  at /opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40199
2026-02-08T13:49:07.018416Z	▲  at Array.map (<anonymous>)
2026-02-08T13:49:07.018584Z	▲  at getStaticProps (/opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40150)
2026-02-08T13:49:07.018685Z	▲  at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2026-02-08T13:49:07.033572Z	▲  Generating static pages (66/132)
2026-02-08T13:49:07.03434Z	▲  🚫 キャッシュ無効 (slider): 直接APIから取得します
2026-02-08T13:49:07.03454Z	▲  🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:49:07.034684Z	▲  🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:49:07.034822Z	▲  🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:49:07.034951Z	▲  🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:49:07.035071Z	▲  🌐 Notion APIから取得中: slider
2026-02-08T13:49:07.036154Z	▲  🌐 Notion APIから取得中: sponsors
2026-02-08T13:49:07.037267Z	▲  🌐 Notion APIから取得中: schedule
2026-02-08T13:49:07.038909Z	▲  🌐 Notion APIから取得中: about
2026-02-08T13:49:07.040118Z	▲  🌐 Notion APIから取得中: general
2026-02-08T13:49:07.24642Z	▲  ✅ API取得完了: general (1件)
2026-02-08T13:49:07.277617Z	▲  ✅ API取得完了: sponsors (3件)
2026-02-08T13:49:07.280677Z	▲  ✅ API取得完了: about (3件)
2026-02-08T13:49:07.292248Z	▲  ✅ API取得完了: slider (4件)
2026-02-08T13:49:07.876763Z	▲  ✅ API取得完了: schedule (48件)
2026-02-08T13:49:08.941054Z	▲  🚫 キャッシュ無効 (news): 直接APIから取得します
2026-02-08T13:49:08.941351Z	▲  🌐 Notion APIから取得中: news
2026-02-08T13:49:09.830471Z	▲  ✅ API取得完了: news (42件)
2026-02-08T13:49:09.845149Z	▲  [convertAboutFromDatabase] Processing item with tag: about, title: About
2026-02-08T13:49:09.845427Z	▲  [convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:49:09.845559Z	▲  [convertAboutFromDatabase] Processing item with tag: mission, title: Our Mission
2026-02-08T13:49:09.845683Z	▲  [convertAboutFromDatabase] Set mission
2026-02-08T13:49:09.845792Z	▲  [convertAboutFromDatabase] Processing item with tag: vision, title: Our Vision
2026-02-08T13:49:09.845903Z	▲  [convertAboutFromDatabase] Set vision
2026-02-08T13:49:09.846003Z	▲  [convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:49:09.848955Z	▲  [ImageOptimizer] baseName: Sports_Day_-_Giant_Ball_rolling, pagePath: slider
2026-02-08T13:49:09.84914Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.849616Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-md.webp',
2026-02-08T13:49:09.849706Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-sm.webp',
2026-02-08T13:49:09.849764Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling-lg.webp',
2026-02-08T13:49:09.850143Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.png',
2026-02-08T13:49:09.850225Z	▲  '/image/download/slider/Sports_Day_-_Giant_Ball_rolling.jpg'
2026-02-08T13:49:09.850357Z	▲  ]
2026-02-08T13:49:09.85044Z	▲  [ImageOptimizer] baseName: Summer_Festival_-_Snack_fishing, pagePath: slider
2026-02-08T13:49:09.850498Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.850553Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing-md.webp',
2026-02-08T13:49:09.850607Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing-sm.webp',
2026-02-08T13:49:09.850681Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing-lg.webp',
2026-02-08T13:49:09.850741Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing.png',
2026-02-08T13:49:09.850796Z	▲  '/image/download/slider/Summer_Festival_-_Snack_fishing.jpg'
2026-02-08T13:49:09.850851Z	▲  ]
2026-02-08T13:49:09.850908Z	▲  [ImageOptimizer] baseName: winter, pagePath: slider
2026-02-08T13:49:09.850962Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.851023Z	▲  '/image/download/slider/winter-md.webp',
2026-02-08T13:49:09.85109Z	▲  '/image/download/slider/winter-sm.webp',
2026-02-08T13:49:09.851175Z	▲  '/image/download/slider/winter-lg.webp',
2026-02-08T13:49:09.85123Z	▲  '/image/download/slider/winter.png',
2026-02-08T13:49:09.851282Z	▲  '/image/download/slider/winter.jpg'
2026-02-08T13:49:09.851338Z	▲  ]
2026-02-08T13:49:09.851394Z	▲  [ImageOptimizer] baseName: katakana, pagePath: slider
2026-02-08T13:49:09.851449Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.851501Z	▲  '/image/download/slider/katakana-md.webp',
2026-02-08T13:49:09.851554Z	▲  '/image/download/slider/katakana-sm.webp',
2026-02-08T13:49:09.851613Z	▲  '/image/download/slider/katakana-lg.webp',
2026-02-08T13:49:09.851668Z	▲  '/image/download/slider/katakana.png',
2026-02-08T13:49:09.851721Z	▲  '/image/download/slider/katakana.jpg'
2026-02-08T13:49:09.851775Z	▲  ]
2026-02-08T13:49:09.852704Z	▲  [ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:49:09.852865Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.852994Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:49:09.853137Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:49:09.853228Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:49:09.853288Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:49:09.853346Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:49:09.853408Z	▲  ]
2026-02-08T13:49:09.853651Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:49:09.853874Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.853992Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:49:09.854152Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:49:09.854271Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:49:09.8544Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:49:09.85451Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:49:09.854619Z	▲  ]
2026-02-08T13:49:09.854736Z	▲  [ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:49:09.854846Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.854946Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:49:09.855059Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:49:09.855215Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:49:09.855321Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:49:09.855414Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:49:09.855514Z	▲  ]
2026-02-08T13:49:09.855619Z	▲  [ImageOptimizer] baseName: about, pagePath: about
2026-02-08T13:49:09.85573Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.855832Z	▲  '/image/download/about/about-md.webp',
2026-02-08T13:49:09.855938Z	▲  '/image/download/about/about-sm.webp',
2026-02-08T13:49:09.856044Z	▲  '/image/download/about/about-lg.webp',
2026-02-08T13:49:09.856183Z	▲  '/image/download/about/about.png',
2026-02-08T13:49:09.856293Z	▲  '/image/download/about/about.jpg'
2026-02-08T13:49:09.856398Z	▲  ]
2026-02-08T13:49:09.856498Z	▲  [ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:49:09.85659Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.856727Z	▲  '/image/download/about/mission-md.webp',
2026-02-08T13:49:09.856823Z	▲  '/image/download/about/mission-sm.webp',
2026-02-08T13:49:09.856966Z	▲  '/image/download/about/mission-lg.webp',
2026-02-08T13:49:09.857105Z	▲  '/image/download/about/mission.png',
2026-02-08T13:49:09.857248Z	▲  '/image/download/about/mission.jpg'
2026-02-08T13:49:09.85735Z	▲  ]
2026-02-08T13:49:09.857444Z	▲  [ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:49:09.857536Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.857669Z	▲  '/image/download/about/vision-md.webp',
2026-02-08T13:49:09.857775Z	▲  '/image/download/about/vision-sm.webp',
2026-02-08T13:49:09.857868Z	▲  '/image/download/about/vision-lg.webp',
2026-02-08T13:49:09.858016Z	▲  '/image/download/about/vision.png',
2026-02-08T13:49:09.858145Z	▲  '/image/download/about/vision.jpg'
2026-02-08T13:49:09.858241Z	▲  ]
2026-02-08T13:49:09.858334Z	▲  [OpportunityEntity] 画像データ: {
2026-02-08T13:49:09.858468Z	▲  originalName: 'employment.png',
2026-02-08T13:49:09.858568Z	▲  baseName: 'employment',
2026-02-08T13:49:09.858661Z	▲  expectedPath: '/image/download/opportunity/employment.png'
2026-02-08T13:49:09.858752Z	▲  }
2026-02-08T13:49:09.858854Z	▲  [ImageOptimizer] baseName: employment, pagePath: opportunity
2026-02-08T13:49:09.858948Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.859059Z	▲  '/image/download/opportunity/employment-md.webp',
2026-02-08T13:49:09.859169Z	▲  '/image/download/opportunity/employment-sm.webp',
2026-02-08T13:49:09.859274Z	▲  '/image/download/opportunity/employment-lg.webp',
2026-02-08T13:49:09.859369Z	▲  '/image/download/opportunity/employment.png',
2026-02-08T13:49:09.859462Z	▲  '/image/download/opportunity/employment.jpg'
2026-02-08T13:49:09.859589Z	▲  ]
2026-02-08T13:49:09.8597Z	▲  [ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:49:09.859799Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.859915Z	▲  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:49:09.860059Z	▲  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:49:09.860202Z	▲  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:49:09.860287Z	▲  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:49:09.860351Z	▲  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:49:09.860406Z	▲  ]
2026-02-08T13:49:09.860467Z	▲  [ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:49:09.860527Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.860582Z	▲  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:49:09.860635Z	▲  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:49:09.860691Z	▲  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:49:09.860745Z	▲  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:49:09.860798Z	▲  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:49:09.860851Z	▲  ]
2026-02-08T13:49:09.860905Z	▲  [ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:49:09.860992Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:09.861112Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:49:09.861211Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:49:09.861304Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:49:09.861404Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:49:09.861582Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:49:09.861655Z	▲  ]
2026-02-08T13:49:09.871228Z	▲  🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:49:09.871381Z	▲  🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:49:09.871464Z	▲  🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:49:09.871595Z	▲  🌐 Notion APIから取得中: greeting
2026-02-08T13:49:09.871675Z	▲  🌐 Notion APIから取得中: story
2026-02-08T13:49:09.871794Z	▲  🌐 Notion APIから取得中: history
2026-02-08T13:49:09.99096Z	▲  ✅ API取得完了: story (1件)
2026-02-08T13:49:10.489818Z	▲  ✅ API取得完了: history (1件)
2026-02-08T13:49:13.009925Z	▲  ✅ API取得完了: greeting (1件)
2026-02-08T13:49:13.013703Z	▲  [ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:49:13.014003Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:13.014134Z	▲  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:49:13.014624Z	▲  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:49:13.014704Z	▲  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:49:13.014762Z	▲  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:49:13.014832Z	▲  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:49:13.014904Z	▲  ]
2026-02-08T13:49:13.014966Z	▲  [ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:49:13.015026Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:13.01508Z	▲  '/image/download/history/historty1-md.webp',
2026-02-08T13:49:13.015178Z	▲  '/image/download/history/historty1-sm.webp',
2026-02-08T13:49:13.015237Z	▲  '/image/download/history/historty1-lg.webp',
2026-02-08T13:49:13.015291Z	▲  '/image/download/history/historty1.png',
2026-02-08T13:49:13.015355Z	▲  '/image/download/history/historty1.jpg'
2026-02-08T13:49:13.015416Z	▲  ]
2026-02-08T13:49:13.01547Z	▲  Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:49:13.015544Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:13.01563Z	▲  [ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:49:13.015686Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:13.015739Z	▲  '/image/download/history/historty2-md.webp',
2026-02-08T13:49:13.015794Z	▲  '/image/download/history/historty2-sm.webp',
2026-02-08T13:49:13.015856Z	▲  '/image/download/history/historty2-lg.webp',
2026-02-08T13:49:13.015911Z	▲  '/image/download/history/historty2.png',
2026-02-08T13:49:13.015973Z	▲  '/image/download/history/historty2.jpg'
2026-02-08T13:49:13.016033Z	▲  ]
2026-02-08T13:49:13.016087Z	▲  [ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:49:13.016187Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:13.016246Z	▲  '/image/download/history/historty3-md.webp',
2026-02-08T13:49:13.01631Z	▲  '/image/download/history/historty3-sm.webp',
2026-02-08T13:49:13.016364Z	▲  '/image/download/history/historty3-lg.webp',
2026-02-08T13:49:13.016426Z	▲  '/image/download/history/historty3.png',
2026-02-08T13:49:13.016481Z	▲  '/image/download/history/historty3.jpg'
2026-02-08T13:49:13.01654Z	▲  ]
2026-02-08T13:49:13.016593Z	▲  Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:49:13.016652Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:13.016712Z	▲  Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:49:13.016772Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:13.023809Z	▲  🚫 キャッシュ無効 (greeting): 直接APIから取得します
2026-02-08T13:49:13.024023Z	▲  🚫 キャッシュ無効 (story): 直接APIから取得します
2026-02-08T13:49:13.024199Z	▲  🚫 キャッシュ無効 (history): 直接APIから取得します
2026-02-08T13:49:13.024326Z	▲  🌐 Notion APIから取得中: greeting
2026-02-08T13:49:13.024434Z	▲  🌐 Notion APIから取得中: story
2026-02-08T13:49:13.024587Z	▲  🌐 Notion APIから取得中: history
2026-02-08T13:49:13.174077Z	▲  ✅ API取得完了: greeting (1件)
2026-02-08T13:49:13.318619Z	▲  ✅ API取得完了: history (1件)
2026-02-08T13:49:14.35706Z	▲  ✅ API取得完了: story (1件)
2026-02-08T13:49:14.359995Z	▲  [ImageOptimizer] baseName: Tjsfounders, pagePath: greeting
2026-02-08T13:49:14.360228Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:14.360337Z	▲  '/image/download/greeting/Tjsfounders-md.webp',
2026-02-08T13:49:14.3604Z	▲  '/image/download/greeting/Tjsfounders-sm.webp',
2026-02-08T13:49:14.360463Z	▲  '/image/download/greeting/Tjsfounders-lg.webp',
2026-02-08T13:49:14.360519Z	▲  '/image/download/greeting/Tjsfounders.png',
2026-02-08T13:49:14.360574Z	▲  '/image/download/greeting/Tjsfounders.jpg'
2026-02-08T13:49:14.360629Z	▲  ]
2026-02-08T13:49:14.360977Z	▲  [ImageOptimizer] baseName: historty1, pagePath: history
2026-02-08T13:49:14.361157Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:14.361378Z	▲  '/image/download/history/historty1-md.webp',
2026-02-08T13:49:14.361501Z	▲  '/image/download/history/historty1-sm.webp',
2026-02-08T13:49:14.361601Z	▲  '/image/download/history/historty1-lg.webp',
2026-02-08T13:49:14.361752Z	▲  '/image/download/history/historty1.png',
2026-02-08T13:49:14.361842Z	▲  '/image/download/history/historty1.jpg'
2026-02-08T13:49:14.361927Z	▲  ]
2026-02-08T13:49:14.362041Z	▲  Warning: ImageOptimizer for "historty1" is missing width or height props.
2026-02-08T13:49:14.362163Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:14.362272Z	▲  Warning: ImageOptimizer for "historty2" is missing width or height props.
2026-02-08T13:49:14.362384Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:14.362476Z	▲  [ImageOptimizer] baseName: historty2, pagePath: history
2026-02-08T13:49:14.362579Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:14.362677Z	▲  '/image/download/history/historty2-md.webp',
2026-02-08T13:49:14.362768Z	▲  '/image/download/history/historty2-sm.webp',
2026-02-08T13:49:14.362857Z	▲  '/image/download/history/historty2-lg.webp',
2026-02-08T13:49:14.36295Z	▲  '/image/download/history/historty2.png',
2026-02-08T13:49:14.363047Z	▲  '/image/download/history/historty2.jpg'
2026-02-08T13:49:14.363166Z	▲  ]
2026-02-08T13:49:14.363272Z	▲  [ImageOptimizer] baseName: historty3, pagePath: history
2026-02-08T13:49:14.363394Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:14.363493Z	▲  '/image/download/history/historty3-md.webp',
2026-02-08T13:49:14.363584Z	▲  '/image/download/history/historty3-sm.webp',
2026-02-08T13:49:14.363705Z	▲  '/image/download/history/historty3-lg.webp',
2026-02-08T13:49:14.363793Z	▲  '/image/download/history/historty3.png',
2026-02-08T13:49:14.363859Z	▲  '/image/download/history/historty3.jpg'
2026-02-08T13:49:14.363914Z	▲  ]
2026-02-08T13:49:14.36399Z	▲  Warning: ImageOptimizer for "historty3" is missing width or height props.
2026-02-08T13:49:14.364133Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:14.370453Z	▲  🚫 キャッシュ無効 (about): 直接APIから取得します
2026-02-08T13:49:14.370655Z	▲  🚫 キャッシュ無効 (mission): 直接APIから取得します
2026-02-08T13:49:14.370794Z	▲  🚫 キャッシュ無効 (vision): 直接APIから取得します
2026-02-08T13:49:14.37093Z	▲  🌐 Notion APIから取得中: about
2026-02-08T13:49:14.371061Z	▲  🌐 Notion APIから取得中: mission
2026-02-08T13:49:14.371194Z	▲  🌐 Notion APIから取得中: vision
2026-02-08T13:49:14.558497Z	▲  ✅ API取得完了: about (3件)
2026-02-08T13:49:15.001858Z	▲  ✅ API取得完了: mission (1件)
2026-02-08T13:49:15.322694Z	▲  ✅ API取得完了: vision (1件)
2026-02-08T13:49:16.027222Z	▲  [convertAboutFromDatabase] Processing item with tag: about, title: About
2026-02-08T13:49:16.027553Z	▲  [convertAboutFromDatabase] Set aboutSchool
2026-02-08T13:49:16.027749Z	▲  [convertAboutFromDatabase] Processing item with tag: mission, title: Our Mission
2026-02-08T13:49:16.027905Z	▲  [convertAboutFromDatabase] Set mission
2026-02-08T13:49:16.028019Z	▲  [convertAboutFromDatabase] Processing item with tag: vision, title: Our Vision
2026-02-08T13:49:16.02815Z	▲  [convertAboutFromDatabase] Set vision
2026-02-08T13:49:16.028271Z	▲  [convertAboutFromDatabase] Final result - aboutSchool: found, mission: found, vision: found
2026-02-08T13:49:16.02839Z	▲  [ImageOptimizer] baseName: mission, pagePath: about
2026-02-08T13:49:16.028494Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:16.028604Z	▲  '/image/download/about/mission-md.webp',
2026-02-08T13:49:16.028692Z	▲  '/image/download/about/mission-sm.webp',
2026-02-08T13:49:16.028789Z	▲  '/image/download/about/mission-lg.webp',
2026-02-08T13:49:16.028898Z	▲  '/image/download/about/mission.png',
2026-02-08T13:49:16.029005Z	▲  '/image/download/about/mission.jpg'
2026-02-08T13:49:16.029126Z	▲  ]
2026-02-08T13:49:16.029236Z	▲  [ImageOptimizer] baseName: vision, pagePath: about
2026-02-08T13:49:16.029338Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:16.02945Z	▲  '/image/download/about/vision-md.webp',
2026-02-08T13:49:16.029554Z	▲  '/image/download/about/vision-sm.webp',
2026-02-08T13:49:16.02966Z	▲  '/image/download/about/vision-lg.webp',
2026-02-08T13:49:16.029763Z	▲  '/image/download/about/vision.png',
2026-02-08T13:49:16.02987Z	▲  '/image/download/about/vision.jpg'
2026-02-08T13:49:16.030015Z	▲  ]
2026-02-08T13:49:16.030159Z	▲  [Policy Component] Received policy: {
2026-02-08T13:49:16.030269Z	▲  object: 'page',
2026-02-08T13:49:16.030382Z	▲  id: '88fe2db2-68f6-4295-ab31-8253d1fda16b',
2026-02-08T13:49:16.030489Z	▲  created_time: '2024-09-18T14:32:00.000Z',
2026-02-08T13:49:16.030601Z	▲  last_edited_time: '2025-09-05T01:49:00.000Z',
2026-02-08T13:49:16.030705Z	▲  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:16.0308Z	▲  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:16.030895Z	▲  cover: null,
2026-02-08T13:49:16.030985Z	▲  icon: null,
2026-02-08T13:49:16.031067Z	▲  parent: {
2026-02-08T13:49:16.031171Z	▲    type: 'database_id',
2026-02-08T13:49:16.031349Z	▲    database_id: '105a8c0e-cf8c-8082-a456-dd95fd87d0c2'
2026-02-08T13:49:16.031456Z	▲  },
2026-02-08T13:49:16.031613Z	▲  archived: false,
2026-02-08T13:49:16.031769Z	▲  in_trash: false,
2026-02-08T13:49:16.031887Z	▲  is_locked: false,
2026-02-08T13:49:16.031987Z	▲  properties: {
2026-02-08T13:49:16.032078Z	▲    pdf: { id: '%3BCvS', type: 'files', files: [Array] },
2026-02-08T13:49:16.032196Z	▲    image: { id: 'tHwI', type: 'files', files: [Array] },
2026-02-08T13:49:16.032306Z	▲    'pdf-en': { id: 'tW~u', type: 'files', files: [Array] },
2026-02-08T13:49:16.032405Z	▲    en: { id: '%7CJmt', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:49:16.032506Z	▲    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:49:16.032615Z	▲  },
2026-02-08T13:49:16.032711Z	▲  url: 'https://www.notion.so/88fe2db268f64295ab318253d1fda16b',
2026-02-08T13:49:16.032819Z	▲  public_url: null
2026-02-08T13:49:16.032947Z	▲  }
2026-02-08T13:49:16.033051Z	▲  {
2026-02-08T13:49:16.033164Z	▲  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:49:16.033258Z	▲  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:49:16.033336Z	▲  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:49:16.03342Z	▲  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:49:16.033511Z	▲  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:49:16.0336Z	▲  }
2026-02-08T13:49:16.033693Z	▲  [PolicyEntity] properties.image: {
2026-02-08T13:49:16.03379Z	▲  id: 'tHwI',
2026-02-08T13:49:16.033887Z	▲  type: 'files',
2026-02-08T13:49:16.033981Z	▲  files: [ { name: 'setsubun2022.JPG', type: 'file', file: [Object] } ]
2026-02-08T13:49:16.034069Z	▲  }
2026-02-08T13:49:16.034174Z	▲  [PolicyEntity] Using files[0]: {
2026-02-08T13:49:16.034257Z	▲  name: 'setsubun2022.JPG',
2026-02-08T13:49:16.034336Z	▲  type: 'file',
2026-02-08T13:49:16.034424Z	▲  file: {
2026-02-08T13:49:16.034508Z	▲    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/ec34a095-6cd8-48a8-98c7-18f89317c7c4/cd8e3c8d-b536-4bc7-8df9-3a55b148cc0d/setsubun2022.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEFY3UF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T134915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb9iHjaE0Kzv05yGiMtRj%2BXWDHSfxcolVSjXJCsSdb7wIhAJU5PpEmXpv6TyJvXsahwJiQd3h7nKqRUVE3xbS3dFywKv8DCHcQABoMNjM3NDIzMTgzODA1IgyNv1aBlOO3DWZN9mQq3AN5Vzz%2BRYPPl7VvXaIpqYuBbffdXLM9AKH6Mqm9fBleUMdiqsjf4mPzoLqc1zJuoMYluxSpVm5rCNqU2wLYR4w3XBEDPTR9xCK4w6oEv34AQ1rMwXu5txnxww8FUFnbaCK9URc8h5S7SyNUsvGb1FhfzJcNWSF11bb8vdeVVu%2BAnOEZSqUrdDCObp3GDP6SOKip2w51a14MKx4bkXIZzAYHzVmHEJ1IPOfLse4KUGQ%2F5gbBrBH2tLzPNpudLsWJRFOlQfiF19p3mvgr3z9%2FOcGNl75CTs7p6EBiT1rlE%2Fi7DqdEQ6feHVsUpqQ6H7XZB8v4JMmIUG9BA6ND%2B2%2FbzeFg2b6Fs%2FwiWRc5K7dMdokxwBuVA%2Bcf0qcYEx5t8Dl4VA8YXiB%2F8FxV%2BNgXcx4zC3ZuxnnxyZug58nrI03Oi6wXcQsy4iJuBOFf0xaxPee%2FOj8FI605ihHLrnbov25OUkLgFexUn1VnJj1FgkRESiOcZDubOniMQS%2Fbbi5OE%2FotOnFe6DPq0N9CvnvfFnmaM9VqHBoNIHpWEBC4wH0nFk%2BCCRycKw3m%2FGcGmClyVYMKWyU1NL4lwVO4z%2Fceut2Vvgb8YIsWMv%2BNLvPpglRZCj%2FZssbkxyTasTnAsaE9RTC5oKLMBjqkASzTIKTMeYSoGBGuwnC48fKfaBEJz5uz2C6vK8TnXYAmRRG%2Bu%2FpGV2ac3g31U8UdsukFhrSsmbH9mNUKayW06YZaEcp%2FDz79KQdf4YeswFkoCaaS7TseBFNJ505FiBrKBHFOBs3%2FpLgnHd7abGa%2FcooWLJmTFsSqeY6cts%2F6HGZ0y6%2FVsa%2FCE8EivhRJzSUPofIRp8CrUiUwriomPwBYktjZa79Z&X-Amz-Signature=63e7ed8f9e161fca73f126b7859dab19c4091b8c357dc9aa152e8d41f0fa4307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
2026-02-08T13:49:16.034625Z	▲    expiry_time: '2026-02-08T14:49:15.179Z'
2026-02-08T13:49:16.034736Z	▲  }
2026-02-08T13:49:16.034834Z	▲  }
2026-02-08T13:49:16.034928Z	▲  [PolicyEntity] Created image object: {
2026-02-08T13:49:16.035012Z	▲  baseName: 'setsubun2022',
2026-02-08T13:49:16.035106Z	▲  pagePath: 'policy',
2026-02-08T13:49:16.035259Z	▲  alt: 'setsubun2022.JPG',
2026-02-08T13:49:16.035357Z	▲  width: null,
2026-02-08T13:49:16.035452Z	▲  height: null
2026-02-08T13:49:16.035549Z	▲  }
2026-02-08T13:49:16.035646Z	▲  [PolicyEntity] Final image: {
2026-02-08T13:49:16.035729Z	▲  baseName: 'setsubun2022',
2026-02-08T13:49:16.035822Z	▲  pagePath: 'policy',
2026-02-08T13:49:16.035922Z	▲  alt: 'setsubun2022.JPG',
2026-02-08T13:49:16.036016Z	▲  width: null,
2026-02-08T13:49:16.036113Z	▲  height: null
2026-02-08T13:49:16.036208Z	▲  }
2026-02-08T13:49:16.036306Z	▲  ============
2026-02-08T13:49:16.036426Z	▲  {
2026-02-08T13:49:16.036518Z	▲  pdf: { id: '%3BCvS', type: 'files', files: [ [Object] ] },
2026-02-08T13:49:16.036608Z	▲  image: { id: 'tHwI', type: 'files', files: [ [Object] ] },
2026-02-08T13:49:16.036699Z	▲  'pdf-en': { id: 'tW~u', type: 'files', files: [ [Object] ] },
2026-02-08T13:49:16.036789Z	▲  en: { id: '%7CJmt', type: 'rich_text', rich_text: [ [Object] ] },
2026-02-08T13:49:16.036869Z	▲  title: { id: 'title', type: 'title', title: [ [Object] ] }
2026-02-08T13:49:16.036954Z	▲  }
2026-02-08T13:49:16.037038Z	▲  ============
2026-02-08T13:49:16.03715Z	▲  [PolicyEntity] properties.pdf: {
2026-02-08T13:49:16.037243Z	▲  id: '%3BCvS',
2026-02-08T13:49:16.037328Z	▲  type: 'files',
2026-02-08T13:49:16.037428Z	▲  files: [
2026-02-08T13:49:16.037532Z	▲    {
2026-02-08T13:49:16.037628Z	▲      name: '2025GuidelineBook_ja_20250905.pdf',
2026-02-08T13:49:16.037752Z	▲      type: 'file',
2026-02-08T13:49:16.037858Z	▲      file: [Object]
2026-02-08T13:49:16.037953Z	▲    }
2026-02-08T13:49:16.038064Z	▲  ]
2026-02-08T13:49:16.038186Z	▲  }
2026-02-08T13:49:16.038287Z	▲  [PolicyEntity] tmpPdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:49:16.038404Z	▲  [PolicyEntity] pdfName: 2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:49:16.038498Z	▲  [PolicyEntity] Final PDF path: /pdf/download/policy/2025GuidelineBook_ja_20250905.pdf
2026-02-08T13:49:16.038597Z	▲  [Policy Component] Entity created: PolicyEntity {
2026-02-08T13:49:16.038682Z	▲  title: '学校要覧',
2026-02-08T13:49:16.038763Z	▲  image: {
2026-02-08T13:49:16.038853Z	▲    baseName: 'setsubun2022',
2026-02-08T13:49:16.038942Z	▲    pagePath: 'policy',
2026-02-08T13:49:16.039027Z	▲    alt: 'setsubun2022.JPG',
2026-02-08T13:49:16.039133Z	▲    width: null,
2026-02-08T13:49:16.039229Z	▲    height: null
2026-02-08T13:49:16.039325Z	▲  },
2026-02-08T13:49:16.039418Z	▲  pdf: '/pdf/download/policy/2025GuidelineBook_ja_20250905.pdf'
2026-02-08T13:49:16.039505Z	▲  }
2026-02-08T13:49:16.039593Z	▲  [Policy Component] Entity image: {
2026-02-08T13:49:16.039686Z	▲  baseName: 'setsubun2022',
2026-02-08T13:49:16.039774Z	▲  pagePath: 'policy',
2026-02-08T13:49:16.039868Z	▲  alt: 'setsubun2022.JPG',
2026-02-08T13:49:16.039954Z	▲  width: null,
2026-02-08T13:49:16.040041Z	▲  height: null
2026-02-08T13:49:16.040148Z	▲  }
2026-02-08T13:49:16.040244Z	▲  [ImageOptimizer] baseName: setsubun2022, pagePath: policy
2026-02-08T13:49:16.040331Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:16.040425Z	▲  '/image/download/policy/setsubun2022-md.webp',
2026-02-08T13:49:16.040515Z	▲  '/image/download/policy/setsubun2022-sm.webp',
2026-02-08T13:49:16.040607Z	▲  '/image/download/policy/setsubun2022-lg.webp',
2026-02-08T13:49:16.040692Z	▲  '/image/download/policy/setsubun2022.png',
2026-02-08T13:49:16.040771Z	▲  '/image/download/policy/setsubun2022.jpg'
2026-02-08T13:49:16.040862Z	▲  ]
2026-02-08T13:49:16.040964Z	▲  Warning: ImageOptimizer for "setsubun2022" is missing width or height props.
2026-02-08T13:49:16.041223Z	▲  Consider adding them for better performance and CLS prevention, or use the 'fill' or 'responsive' prop.
2026-02-08T13:49:16.047226Z	▲  🚫 キャッシュ無効 (directors): 直接APIから取得します
2026-02-08T13:49:16.047421Z	▲  🚫 キャッシュ無効 (orgChart): 直接APIから取得します
2026-02-08T13:49:16.047534Z	▲  🚫 キャッシュ無効 (policies): 直接APIから取得します
2026-02-08T13:49:16.047638Z	▲  🌐 Notion APIから取得中: directors
2026-02-08T13:49:16.047923Z	▲  🌐 Notion APIから取得中: orgChart
2026-02-08T13:49:16.048055Z	▲  🌐 Notion APIから取得中: policies
2026-02-08T13:49:16.068901Z	▲  already exist.
2026-02-08T13:49:16.069136Z	▲  not pdf file
2026-02-08T13:49:16.210563Z	▲  already exist.
2026-02-08T13:49:16.226589Z	▲  ✅ API取得完了: orgChart (1件)
2026-02-08T13:49:16.641472Z	▲  ✅ API取得完了: directors (5件)
2026-02-08T13:49:16.944077Z	▲  ✅ API取得完了: policies (3件)
2026-02-08T13:49:17.555404Z	▲  [ImageOptimizer] baseName: istockphoto-1495088043-612x612, pagePath: director
2026-02-08T13:49:17.555685Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:17.555837Z	▲  '/image/download/director/istockphoto-1495088043-612x612-md.webp',
2026-02-08T13:49:17.555979Z	▲  '/image/download/director/istockphoto-1495088043-612x612-sm.webp',
2026-02-08T13:49:17.55611Z	▲  '/image/download/director/istockphoto-1495088043-612x612-lg.webp',
2026-02-08T13:49:17.556226Z	▲  '/image/download/director/istockphoto-1495088043-612x612.png',
2026-02-08T13:49:17.556354Z	▲  '/image/download/director/istockphoto-1495088043-612x612.jpg'
2026-02-08T13:49:17.556463Z	▲  ]
2026-02-08T13:49:17.55658Z	▲  [ImageOptimizer] baseName: profile, pagePath: director
2026-02-08T13:49:17.556761Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:17.556873Z	▲  '/image/download/director/profile-md.webp',
2026-02-08T13:49:17.556973Z	▲  '/image/download/director/profile-sm.webp',
2026-02-08T13:49:17.557102Z	▲  '/image/download/director/profile-lg.webp',
2026-02-08T13:49:17.557225Z	▲  '/image/download/director/profile.png',
2026-02-08T13:49:17.557328Z	▲  '/image/download/director/profile.jpg'
2026-02-08T13:49:17.557424Z	▲  ]
2026-02-08T13:49:17.557514Z	▲  [ImageOptimizer] baseName: yukari_image, pagePath: director
2026-02-08T13:49:17.557618Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:17.557708Z	▲  '/image/download/director/yukari_image-md.webp',
2026-02-08T13:49:17.557795Z	▲  '/image/download/director/yukari_image-sm.webp',
2026-02-08T13:49:17.55789Z	▲  '/image/download/director/yukari_image-lg.webp',
2026-02-08T13:49:17.557985Z	▲  '/image/download/director/yukari_image.png',
2026-02-08T13:49:17.558072Z	▲  '/image/download/director/yukari_image.jpg'
2026-02-08T13:49:17.5582Z	▲  ]
2026-02-08T13:49:17.55835Z	▲  [ImageOptimizer] baseName: DSC08145_edited_edited_edited, pagePath: director
2026-02-08T13:49:17.558442Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:17.558536Z	▲  '/image/download/director/DSC08145_edited_edited_edited-md.webp',
2026-02-08T13:49:17.558636Z	▲  '/image/download/director/DSC08145_edited_edited_edited-sm.webp',
2026-02-08T13:49:17.558729Z	▲  '/image/download/director/DSC08145_edited_edited_edited-lg.webp',
2026-02-08T13:49:17.558836Z	▲  '/image/download/director/DSC08145_edited_edited_edited.png',
2026-02-08T13:49:17.558941Z	▲  '/image/download/director/DSC08145_edited_edited_edited.jpg'
2026-02-08T13:49:17.559058Z	▲  ]
2026-02-08T13:49:17.559189Z	▲  [ImageOptimizer] baseName: DSC08141_edited_edited, pagePath: director
2026-02-08T13:49:17.559317Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:17.559432Z	▲  '/image/download/director/DSC08141_edited_edited-md.webp',
2026-02-08T13:49:17.559524Z	▲  '/image/download/director/DSC08141_edited_edited-sm.webp',
2026-02-08T13:49:17.55963Z	▲  '/image/download/director/DSC08141_edited_edited-lg.webp',
2026-02-08T13:49:17.559734Z	▲  '/image/download/director/DSC08141_edited_edited.png',
2026-02-08T13:49:17.55983Z	▲  '/image/download/director/DSC08141_edited_edited.jpg'
2026-02-08T13:49:17.559922Z	▲  ]
2026-02-08T13:49:17.56001Z	▲  OrgChart data received: {
2026-02-08T13:49:17.560125Z	▲  object: 'page',
2026-02-08T13:49:17.560226Z	▲  id: '7a5843cb-66c0-4555-b972-1ee1c3063962',
2026-02-08T13:49:17.560324Z	▲  created_time: '2024-09-25T09:16:00.000Z',
2026-02-08T13:49:17.560451Z	▲  last_edited_time: '2024-10-10T01:32:00.000Z',
2026-02-08T13:49:17.560554Z	▲  created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:17.560676Z	▲  last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:17.560775Z	▲  cover: null,
2026-02-08T13:49:17.560876Z	▲  icon: null,
2026-02-08T13:49:17.560976Z	▲  parent: {
2026-02-08T13:49:17.56107Z	▲    type: 'database_id',
2026-02-08T13:49:17.561176Z	▲    database_id: '10ca8c0e-cf8c-8062-9eb3-ee7c40cf9005'
2026-02-08T13:49:17.561279Z	▲  },
2026-02-08T13:49:17.561386Z	▲  archived: false,
2026-02-08T13:49:17.561482Z	▲  in_trash: false,
2026-02-08T13:49:17.561573Z	▲  is_locked: false,
2026-02-08T13:49:17.561674Z	▲  properties: {
2026-02-08T13:49:17.561771Z	▲    image_en: { id: 'AnK%3A', type: 'files', files: [Array] },
2026-02-08T13:49:17.561861Z	▲    en: { id: 'BggW', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:49:17.561953Z	▲    text_en: { id: 'OQjU', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:49:17.562047Z	▲    image: { id: 'zJ%3Cu', type: 'files', files: [Array] },
2026-02-08T13:49:17.562162Z	▲    text: { id: '%7Dp_r', type: 'rich_text', rich_text: [Array] },
2026-02-08T13:49:17.56226Z	▲    title: { id: 'title', type: 'title', title: [Array] }
2026-02-08T13:49:17.562364Z	▲  },
2026-02-08T13:49:17.562452Z	▲  url: 'https://www.notion.so/7a5843cb66c04555b9721ee1c3063962',
2026-02-08T13:49:17.562537Z	▲  public_url: null
2026-02-08T13:49:17.562626Z	▲  }
2026-02-08T13:49:17.56284Z	▲  OrgChart entity created: OrganisationFlowChartEntity {
2026-02-08T13:49:17.562966Z	▲  title: 'Governance Chart',
2026-02-08T13:49:17.563071Z	▲  text: [
2026-02-08T13:49:17.563188Z	▲    {
2026-02-08T13:49:17.563284Z	▲      type: 'text',
2026-02-08T13:49:17.563383Z	▲      text: [Object],
2026-02-08T13:49:17.563487Z	▲      annotations: [Object],
2026-02-08T13:49:17.56359Z	▲      plain_text: "Tucson Japanese Language School's Board of Directors oversees the school’s operation, provides guidance and advice, implements short and long-term plans, and carries out these plans in cooperation with faculty, staff, and volunteer parents for the school to pursue its mission and sustain as a healthy organization. The board of directors supports the operation team that runs the school daily.",
2026-02-08T13:49:17.5637Z	▲      href: null
2026-02-08T13:49:17.563808Z	▲    }
2026-02-08T13:49:17.563924Z	▲  ],
2026-02-08T13:49:17.564021Z	▲  image: {
2026-02-08T13:49:17.564134Z	▲    baseName: 'governance_chart_en',
2026-02-08T13:49:17.56428Z	▲    pagePath: 'org_chart',
2026-02-08T13:49:17.564396Z	▲    alt: 'governance_chart_en.jpg',
2026-02-08T13:49:17.564498Z	▲    width: null,
2026-02-08T13:49:17.564594Z	▲    height: null
2026-02-08T13:49:17.564689Z	▲  }
2026-02-08T13:49:17.564806Z	▲  }
2026-02-08T13:49:17.564928Z	▲  [ImageOptimizer] baseName: governance_chart_en, pagePath: org_chart
2026-02-08T13:49:17.565028Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:17.56514Z	▲  '/image/download/org_chart/governance_chart_en-md.webp',
2026-02-08T13:49:17.565308Z	▲  '/image/download/org_chart/governance_chart_en-sm.webp',
2026-02-08T13:49:17.565414Z	▲  '/image/download/org_chart/governance_chart_en-lg.webp',
2026-02-08T13:49:17.565522Z	▲  '/image/download/org_chart/governance_chart_en.png',
2026-02-08T13:49:17.565625Z	▲  '/image/download/org_chart/governance_chart_en.jpg'
2026-02-08T13:49:17.565718Z	▲  ]
2026-02-08T13:49:17.568876Z	▲  🚫 キャッシュ無効 (roleList): 直接APIから取得します
2026-02-08T13:49:17.569017Z	▲  🚫 キャッシュ無効 (staff): 直接APIから取得します
2026-02-08T13:49:17.56924Z	▲  🌐 Notion APIから取得中: roleList
2026-02-08T13:49:17.569318Z	▲  🌐 Notion APIから取得中: staff
2026-02-08T13:49:17.616379Z	▲  already exist.
2026-02-08T13:49:17.616788Z	▲  already exist.
2026-02-08T13:49:17.700411Z	▲  already exist.
2026-02-08T13:49:17.878983Z	▲  ✅ API取得完了: staff (16件)
2026-02-08T13:49:18.378473Z	▲  ✅ API取得完了: roleList (6件)
2026-02-08T13:49:21.188649Z	▲  Staff data received: [
2026-02-08T13:49:21.188917Z	▲  {
2026-02-08T13:49:21.189052Z	▲    object: 'page',
2026-02-08T13:49:21.189188Z	▲    id: '102a8c0e-cf8c-8032-ba7b-c79866f660eb',
2026-02-08T13:49:21.189309Z	▲    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:49:21.18941Z	▲    last_edited_time: '2025-06-21T20:03:00.000Z',
2026-02-08T13:49:21.189496Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.189564Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.189627Z	▲    cover: null,
2026-02-08T13:49:21.189681Z	▲    icon: null,
2026-02-08T13:49:21.18974Z	▲    parent: {
2026-02-08T13:49:21.189794Z	▲      type: 'database_id',
2026-02-08T13:49:21.189847Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.189912Z	▲    },
2026-02-08T13:49:21.189966Z	▲    archived: false,
2026-02-08T13:49:21.190018Z	▲    in_trash: false,
2026-02-08T13:49:21.190072Z	▲    is_locked: false,
2026-02-08T13:49:21.190182Z	▲    properties: {
2026-02-08T13:49:21.190293Z	▲      text_en: [Object],
2026-02-08T13:49:21.190408Z	▲      name_en: [Object],
2026-02-08T13:49:21.190504Z	▲      image: [Object],
2026-02-08T13:49:21.190602Z	▲      role: [Object],
2026-02-08T13:49:21.190695Z	▲      text: [Object],
2026-02-08T13:49:21.190815Z	▲      ordering: [Object],
2026-02-08T13:49:21.19093Z	▲      name: [Object]
2026-02-08T13:49:21.191052Z	▲    },
2026-02-08T13:49:21.191212Z	▲    url: 'https://www.notion.so/102a8c0ecf8c8032ba7bc79866f660eb',
2026-02-08T13:49:21.191309Z	▲    public_url: null
2026-02-08T13:49:21.191373Z	▲  },
2026-02-08T13:49:21.191429Z	▲  {
2026-02-08T13:49:21.191487Z	▲    object: 'page',
2026-02-08T13:49:21.191541Z	▲    id: '102a8c0e-cf8c-803e-8c91-cdc26abf8c7b',
2026-02-08T13:49:21.191595Z	▲    created_time: '2024-09-15T21:02:00.000Z',
2026-02-08T13:49:21.191647Z	▲    last_edited_time: '2025-09-04T07:50:00.000Z',
2026-02-08T13:49:21.191702Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.191756Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.191809Z	▲    cover: null,
2026-02-08T13:49:21.191862Z	▲    icon: null,
2026-02-08T13:49:21.191917Z	▲    parent: {
2026-02-08T13:49:21.19197Z	▲      type: 'database_id',
2026-02-08T13:49:21.192025Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.192077Z	▲    },
2026-02-08T13:49:21.192167Z	▲    archived: false,
2026-02-08T13:49:21.192227Z	▲    in_trash: false,
2026-02-08T13:49:21.192281Z	▲    is_locked: false,
2026-02-08T13:49:21.192334Z	▲    properties: {
2026-02-08T13:49:21.192391Z	▲      text_en: [Object],
2026-02-08T13:49:21.192443Z	▲      name_en: [Object],
2026-02-08T13:49:21.192495Z	▲      image: [Object],
2026-02-08T13:49:21.192567Z	▲      role: [Object],
2026-02-08T13:49:21.192626Z	▲      text: [Object],
2026-02-08T13:49:21.192681Z	▲      ordering: [Object],
2026-02-08T13:49:21.192735Z	▲      name: [Object]
2026-02-08T13:49:21.192788Z	▲    },
2026-02-08T13:49:21.19285Z	▲    url: 'https://www.notion.so/102a8c0ecf8c803e8c91cdc26abf8c7b',
2026-02-08T13:49:21.192903Z	▲    public_url: null
2026-02-08T13:49:21.192957Z	▲  },
2026-02-08T13:49:21.193008Z	▲  {
2026-02-08T13:49:21.193061Z	▲    object: 'page',
2026-02-08T13:49:21.193228Z	▲    id: '102a8c0e-cf8c-803e-9b33-f2d6b41189c5',
2026-02-08T13:49:21.193307Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:49:21.193373Z	▲    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:49:21.193454Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.193623Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.193686Z	▲    cover: null,
2026-02-08T13:49:21.193742Z	▲    icon: null,
2026-02-08T13:49:21.193794Z	▲    parent: {
2026-02-08T13:49:21.193847Z	▲      type: 'database_id',
2026-02-08T13:49:21.193901Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.193973Z	▲    },
2026-02-08T13:49:21.194033Z	▲    archived: false,
2026-02-08T13:49:21.194115Z	▲    in_trash: false,
2026-02-08T13:49:21.194188Z	▲    is_locked: false,
2026-02-08T13:49:21.194252Z	▲    properties: {
2026-02-08T13:49:21.194307Z	▲      text_en: [Object],
2026-02-08T13:49:21.194377Z	▲      name_en: [Object],
2026-02-08T13:49:21.194434Z	▲      image: [Object],
2026-02-08T13:49:21.194492Z	▲      role: [Object],
2026-02-08T13:49:21.194547Z	▲      text: [Object],
2026-02-08T13:49:21.194603Z	▲      ordering: [Object],
2026-02-08T13:49:21.194662Z	▲      name: [Object]
2026-02-08T13:49:21.194727Z	▲    },
2026-02-08T13:49:21.194788Z	▲    url: 'https://www.notion.so/102a8c0ecf8c803e9b33f2d6b41189c5',
2026-02-08T13:49:21.194847Z	▲    public_url: null
2026-02-08T13:49:21.194901Z	▲  },
2026-02-08T13:49:21.19496Z	▲  {
2026-02-08T13:49:21.195018Z	▲    object: 'page',
2026-02-08T13:49:21.195072Z	▲    id: '102a8c0e-cf8c-80a2-9cba-f21c57ac7a99',
2026-02-08T13:49:21.195191Z	▲    created_time: '2024-09-15T21:08:00.000Z',
2026-02-08T13:49:21.195282Z	▲    last_edited_time: '2025-09-04T07:52:00.000Z',
2026-02-08T13:49:21.195423Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.19553Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.195617Z	▲    cover: null,
2026-02-08T13:49:21.195758Z	▲    icon: null,
2026-02-08T13:49:21.195854Z	▲    parent: {
2026-02-08T13:49:21.196078Z	▲      type: 'database_id',
2026-02-08T13:49:21.196227Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.1963Z	▲    },
2026-02-08T13:49:21.196371Z	▲    archived: false,
2026-02-08T13:49:21.196438Z	▲    in_trash: false,
2026-02-08T13:49:21.196497Z	▲    is_locked: false,
2026-02-08T13:49:21.196553Z	▲    properties: {
2026-02-08T13:49:21.196607Z	▲      text_en: [Object],
2026-02-08T13:49:21.196669Z	▲      name_en: [Object],
2026-02-08T13:49:21.196724Z	▲      image: [Object],
2026-02-08T13:49:21.196777Z	▲      role: [Object],
2026-02-08T13:49:21.196839Z	▲      text: [Object],
2026-02-08T13:49:21.196894Z	▲      ordering: [Object],
2026-02-08T13:49:21.196949Z	▲      name: [Object]
2026-02-08T13:49:21.197021Z	▲    },
2026-02-08T13:49:21.197082Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80a29cbaf21c57ac7a99',
2026-02-08T13:49:21.197186Z	▲    public_url: null
2026-02-08T13:49:21.197249Z	▲  },
2026-02-08T13:49:21.197311Z	▲  {
2026-02-08T13:49:21.197373Z	▲    object: 'page',
2026-02-08T13:49:21.197435Z	▲    id: '102a8c0e-cf8c-80b6-a18a-f9a071308672',
2026-02-08T13:49:21.197495Z	▲    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:49:21.19755Z	▲    last_edited_time: '2025-09-04T07:56:00.000Z',
2026-02-08T13:49:21.197626Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.197691Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.197752Z	▲    cover: null,
2026-02-08T13:49:21.197811Z	▲    icon: null,
2026-02-08T13:49:21.197864Z	▲    parent: {
2026-02-08T13:49:21.197927Z	▲      type: 'database_id',
2026-02-08T13:49:21.197994Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.198049Z	▲    },
2026-02-08T13:49:21.198401Z	▲    archived: false,
2026-02-08T13:49:21.198531Z	▲    in_trash: false,
2026-02-08T13:49:21.198647Z	▲    is_locked: false,
2026-02-08T13:49:21.198764Z	▲    properties: {
2026-02-08T13:49:21.198873Z	▲      text_en: [Object],
2026-02-08T13:49:21.198978Z	▲      name_en: [Object],
2026-02-08T13:49:21.199181Z	▲      image: [Object],
2026-02-08T13:49:21.199358Z	▲      role: [Object],
2026-02-08T13:49:21.199453Z	▲      text: [Object],
2026-02-08T13:49:21.199517Z	▲      ordering: [Object],
2026-02-08T13:49:21.19958Z	▲      name: [Object]
2026-02-08T13:49:21.19964Z	▲    },
2026-02-08T13:49:21.199706Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80b6a18af9a071308672',
2026-02-08T13:49:21.199768Z	▲    public_url: null
2026-02-08T13:49:21.199822Z	▲  },
2026-02-08T13:49:21.19988Z	▲  {
2026-02-08T13:49:21.19994Z	▲    object: 'page',
2026-02-08T13:49:21.199993Z	▲    id: '102a8c0e-cf8c-80c8-9391-cb8332a09711',
2026-02-08T13:49:21.200049Z	▲    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:49:21.200132Z	▲    last_edited_time: '2025-09-04T07:57:00.000Z',
2026-02-08T13:49:21.200206Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.200267Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.200322Z	▲    cover: null,
2026-02-08T13:49:21.20039Z	▲    icon: null,
2026-02-08T13:49:21.200448Z	▲    parent: {
2026-02-08T13:49:21.200502Z	▲      type: 'database_id',
2026-02-08T13:49:21.200557Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.200627Z	▲    },
2026-02-08T13:49:21.200689Z	▲    archived: false,
2026-02-08T13:49:21.200745Z	▲    in_trash: false,
2026-02-08T13:49:21.200802Z	▲    is_locked: false,
2026-02-08T13:49:21.200858Z	▲    properties: {
2026-02-08T13:49:21.200911Z	▲      text_en: [Object],
2026-02-08T13:49:21.200966Z	▲      name_en: [Object],
2026-02-08T13:49:21.201019Z	▲      image: [Object],
2026-02-08T13:49:21.201072Z	▲      role: [Object],
2026-02-08T13:49:21.201336Z	▲      text: [Object],
2026-02-08T13:49:21.201438Z	▲      ordering: [Object],
2026-02-08T13:49:21.20156Z	▲      name: [Object]
2026-02-08T13:49:21.201662Z	▲    },
2026-02-08T13:49:21.201765Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80c89391cb8332a09711',
2026-02-08T13:49:21.201899Z	▲    public_url: null
2026-02-08T13:49:21.202003Z	▲  },
2026-02-08T13:49:21.202102Z	▲  {
2026-02-08T13:49:21.2022Z	▲    object: 'page',
2026-02-08T13:49:21.202295Z	▲    id: '102a8c0e-cf8c-80cd-a577-c9351f661364',
2026-02-08T13:49:21.202408Z	▲    created_time: '2024-09-15T21:09:00.000Z',
2026-02-08T13:49:21.202525Z	▲    last_edited_time: '2025-09-02T05:48:00.000Z',
2026-02-08T13:49:21.202643Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.202765Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.202888Z	▲    cover: null,
2026-02-08T13:49:21.202985Z	▲    icon: null,
2026-02-08T13:49:21.203136Z	▲    parent: {
2026-02-08T13:49:21.203243Z	▲      type: 'database_id',
2026-02-08T13:49:21.203331Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.203431Z	▲    },
2026-02-08T13:49:21.203525Z	▲    archived: false,
2026-02-08T13:49:21.20361Z	▲    in_trash: false,
2026-02-08T13:49:21.20369Z	▲    is_locked: false,
2026-02-08T13:49:21.203769Z	▲    properties: {
2026-02-08T13:49:21.203847Z	▲      text_en: [Object],
2026-02-08T13:49:21.203924Z	▲      name_en: [Object],
2026-02-08T13:49:21.204002Z	▲      image: [Object],
2026-02-08T13:49:21.20408Z	▲      role: [Object],
2026-02-08T13:49:21.204181Z	▲      text: [Object],
2026-02-08T13:49:21.204262Z	▲      ordering: [Object],
2026-02-08T13:49:21.204373Z	▲      name: [Object]
2026-02-08T13:49:21.204456Z	▲    },
2026-02-08T13:49:21.204546Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80cda577c9351f661364',
2026-02-08T13:49:21.204656Z	▲    public_url: null
2026-02-08T13:49:21.204736Z	▲  },
2026-02-08T13:49:21.204814Z	▲  {
2026-02-08T13:49:21.204889Z	▲    object: 'page',
2026-02-08T13:49:21.204974Z	▲    id: '102a8c0e-cf8c-80e6-9519-d25acdcfd0ec',
2026-02-08T13:49:21.205053Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:49:21.205154Z	▲    last_edited_time: '2025-09-04T08:02:00.000Z',
2026-02-08T13:49:21.205235Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.205314Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.205398Z	▲    cover: null,
2026-02-08T13:49:21.205476Z	▲    icon: null,
2026-02-08T13:49:21.205554Z	▲    parent: {
2026-02-08T13:49:21.205632Z	▲      type: 'database_id',
2026-02-08T13:49:21.205709Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.205794Z	▲    },
2026-02-08T13:49:21.20587Z	▲    archived: false,
2026-02-08T13:49:21.205961Z	▲    in_trash: false,
2026-02-08T13:49:21.20604Z	▲    is_locked: false,
2026-02-08T13:49:21.206137Z	▲    properties: {
2026-02-08T13:49:21.206217Z	▲      text_en: [Object],
2026-02-08T13:49:21.206311Z	▲      name_en: [Object],
2026-02-08T13:49:21.2064Z	▲      image: [Object],
2026-02-08T13:49:21.20648Z	▲      role: [Object],
2026-02-08T13:49:21.206566Z	▲      text: [Object],
2026-02-08T13:49:21.206649Z	▲      ordering: [Object],
2026-02-08T13:49:21.206731Z	▲      name: [Object]
2026-02-08T13:49:21.206786Z	▲    },
2026-02-08T13:49:21.206839Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80e69519d25acdcfd0ec',
2026-02-08T13:49:21.206897Z	▲    public_url: null
2026-02-08T13:49:21.206954Z	▲  },
2026-02-08T13:49:21.207008Z	▲  {
2026-02-08T13:49:21.20706Z	▲    object: 'page',
2026-02-08T13:49:21.207143Z	▲    id: '102a8c0e-cf8c-80f9-bef0-dd401debb8af',
2026-02-08T13:49:21.207221Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:49:21.207311Z	▲    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:49:21.20741Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.207493Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.20757Z	▲    cover: null,
2026-02-08T13:49:21.207646Z	▲    icon: null,
2026-02-08T13:49:21.207721Z	▲    parent: {
2026-02-08T13:49:21.207796Z	▲      type: 'database_id',
2026-02-08T13:49:21.207872Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.207959Z	▲    },
2026-02-08T13:49:21.208036Z	▲    archived: false,
2026-02-08T13:49:21.208132Z	▲    in_trash: false,
2026-02-08T13:49:21.208216Z	▲    is_locked: false,
2026-02-08T13:49:21.208293Z	▲    properties: {
2026-02-08T13:49:21.208379Z	▲      text_en: [Object],
2026-02-08T13:49:21.208459Z	▲      name_en: [Object],
2026-02-08T13:49:21.208536Z	▲      image: [Object],
2026-02-08T13:49:21.208614Z	▲      role: [Object],
2026-02-08T13:49:21.20869Z	▲      text: [Object],
2026-02-08T13:49:21.208766Z	▲      ordering: [Object],
2026-02-08T13:49:21.208842Z	▲      name: [Object]
2026-02-08T13:49:21.208931Z	▲    },
2026-02-08T13:49:21.209009Z	▲    url: 'https://www.notion.so/102a8c0ecf8c80f9bef0dd401debb8af',
2026-02-08T13:49:21.209086Z	▲    public_url: null
2026-02-08T13:49:21.209187Z	▲  },
2026-02-08T13:49:21.209266Z	▲  {
2026-02-08T13:49:21.209344Z	▲    object: 'page',
2026-02-08T13:49:21.209443Z	▲    id: '219a8c0e-cf8c-8086-95b6-dbe56a73880d',
2026-02-08T13:49:21.209521Z	▲    created_time: '2025-06-21T20:02:00.000Z',
2026-02-08T13:49:21.209607Z	▲    last_edited_time: '2025-09-04T07:51:00.000Z',
2026-02-08T13:49:21.209691Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.20977Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.209845Z	▲    cover: null,
2026-02-08T13:49:21.209938Z	▲    icon: null,
2026-02-08T13:49:21.210012Z	▲    parent: {
2026-02-08T13:49:21.210086Z	▲      type: 'database_id',
2026-02-08T13:49:21.210382Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.210473Z	▲    },
2026-02-08T13:49:21.210583Z	▲    archived: false,
2026-02-08T13:49:21.21066Z	▲    in_trash: false,
2026-02-08T13:49:21.210734Z	▲    is_locked: false,
2026-02-08T13:49:21.210812Z	▲    properties: {
2026-02-08T13:49:21.210887Z	▲      text_en: [Object],
2026-02-08T13:49:21.210963Z	▲      name_en: [Object],
2026-02-08T13:49:21.211039Z	▲      image: [Object],
2026-02-08T13:49:21.21115Z	▲      role: [Object],
2026-02-08T13:49:21.211243Z	▲      text: [Object],
2026-02-08T13:49:21.211344Z	▲      ordering: [Object],
2026-02-08T13:49:21.211437Z	▲      name: [Object]
2026-02-08T13:49:21.211518Z	▲    },
2026-02-08T13:49:21.2116Z	▲    url: 'https://www.notion.so/219a8c0ecf8c808695b6dbe56a73880d',
2026-02-08T13:49:21.211687Z	▲    public_url: null
2026-02-08T13:49:21.211745Z	▲  },
2026-02-08T13:49:21.2118Z	▲  {
2026-02-08T13:49:21.211853Z	▲    object: 'page',
2026-02-08T13:49:21.21191Z	▲    id: '262a8c0e-cf8c-8087-9157-eccd746e636d',
2026-02-08T13:49:21.211962Z	▲    created_time: '2025-09-02T05:49:00.000Z',
2026-02-08T13:49:21.212015Z	▲    last_edited_time: '2025-09-04T07:58:00.000Z',
2026-02-08T13:49:21.212068Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.212155Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.212215Z	▲    cover: null,
2026-02-08T13:49:21.212269Z	▲    icon: null,
2026-02-08T13:49:21.212321Z	▲    parent: {
2026-02-08T13:49:21.21238Z	▲      type: 'database_id',
2026-02-08T13:49:21.212435Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.212488Z	▲    },
2026-02-08T13:49:21.21254Z	▲    archived: false,
2026-02-08T13:49:21.212592Z	▲    in_trash: false,
2026-02-08T13:49:21.212643Z	▲    is_locked: false,
2026-02-08T13:49:21.212694Z	▲    properties: {
2026-02-08T13:49:21.212751Z	▲      text_en: [Object],
2026-02-08T13:49:21.21281Z	▲      name_en: [Object],
2026-02-08T13:49:21.212861Z	▲      image: [Object],
2026-02-08T13:49:21.212914Z	▲      role: [Object],
2026-02-08T13:49:21.212965Z	▲      text: [Object],
2026-02-08T13:49:21.213017Z	▲      ordering: [Object],
2026-02-08T13:49:21.213068Z	▲      name: [Object]
2026-02-08T13:49:21.213151Z	▲    },
2026-02-08T13:49:21.21321Z	▲    url: 'https://www.notion.so/262a8c0ecf8c80879157eccd746e636d',
2026-02-08T13:49:21.213269Z	▲    public_url: null
2026-02-08T13:49:21.213322Z	▲  },
2026-02-08T13:49:21.213383Z	▲  {
2026-02-08T13:49:21.213438Z	▲    object: 'page',
2026-02-08T13:49:21.213492Z	▲    id: '4377c087-e782-46e3-9eaf-261863837f19',
2026-02-08T13:49:21.213544Z	▲    created_time: '2024-09-15T21:13:00.000Z',
2026-02-08T13:49:21.213604Z	▲    last_edited_time: '2025-06-21T20:04:00.000Z',
2026-02-08T13:49:21.213658Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.21371Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.213762Z	▲    cover: null,
2026-02-08T13:49:21.213814Z	▲    icon: null,
2026-02-08T13:49:21.213865Z	▲    parent: {
2026-02-08T13:49:21.213923Z	▲      type: 'database_id',
2026-02-08T13:49:21.213975Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.214026Z	▲    },
2026-02-08T13:49:21.214077Z	▲    archived: false,
2026-02-08T13:49:21.214174Z	▲    in_trash: false,
2026-02-08T13:49:21.214278Z	▲    is_locked: false,
2026-02-08T13:49:21.21436Z	▲    properties: {
2026-02-08T13:49:21.214447Z	▲      text_en: [Object],
2026-02-08T13:49:21.214527Z	▲      name_en: [Object],
2026-02-08T13:49:21.214605Z	▲      image: [Object],
2026-02-08T13:49:21.214683Z	▲      role: [Object],
2026-02-08T13:49:21.214758Z	▲      text: [Object],
2026-02-08T13:49:21.214834Z	▲      ordering: [Object],
2026-02-08T13:49:21.214909Z	▲      name: [Object]
2026-02-08T13:49:21.214986Z	▲    },
2026-02-08T13:49:21.21507Z	▲    url: 'https://www.notion.so/4377c087e78246e39eaf261863837f19',
2026-02-08T13:49:21.215181Z	▲    public_url: null
2026-02-08T13:49:21.215275Z	▲  },
2026-02-08T13:49:21.215386Z	▲  {
2026-02-08T13:49:21.215486Z	▲    object: 'page',
2026-02-08T13:49:21.215576Z	▲    id: '9a170ec8-c017-4cce-a0dd-d62f2edb82b6',
2026-02-08T13:49:21.215672Z	▲    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:49:21.215765Z	▲    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:49:21.21586Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.215959Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.216055Z	▲    cover: null,
2026-02-08T13:49:21.216166Z	▲    icon: null,
2026-02-08T13:49:21.216258Z	▲    parent: {
2026-02-08T13:49:21.216345Z	▲      type: 'database_id',
2026-02-08T13:49:21.216437Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.216527Z	▲    },
2026-02-08T13:49:21.216619Z	▲    archived: false,
2026-02-08T13:49:21.216771Z	▲    in_trash: false,
2026-02-08T13:49:21.216888Z	▲    is_locked: false,
2026-02-08T13:49:21.217011Z	▲    properties: {
2026-02-08T13:49:21.217107Z	▲      text_en: [Object],
2026-02-08T13:49:21.21727Z	▲      name_en: [Object],
2026-02-08T13:49:21.217392Z	▲      image: [Object],
2026-02-08T13:49:21.217466Z	▲      role: [Object],
2026-02-08T13:49:21.217524Z	▲      text: [Object],
2026-02-08T13:49:21.217582Z	▲      ordering: [Object],
2026-02-08T13:49:21.217637Z	▲      name: [Object]
2026-02-08T13:49:21.21769Z	▲    },
2026-02-08T13:49:21.21776Z	▲    url: 'https://www.notion.so/9a170ec8c0174ccea0ddd62f2edb82b6',
2026-02-08T13:49:21.21782Z	▲    public_url: null
2026-02-08T13:49:21.217873Z	▲  },
2026-02-08T13:49:21.217927Z	▲  {
2026-02-08T13:49:21.217979Z	▲    object: 'page',
2026-02-08T13:49:21.218031Z	▲    id: 'c452fe7f-4be8-4bdb-9afb-a32c10afbcab',
2026-02-08T13:49:21.218083Z	▲    created_time: '2024-09-15T21:10:00.000Z',
2026-02-08T13:49:21.218172Z	▲    last_edited_time: '2025-09-04T08:01:00.000Z',
2026-02-08T13:49:21.218229Z	▲    created_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.218286Z	▲    last_edited_by: { object: 'user', id: '3fda8b5e-8168-4161-bc56-173b84095a41' },
2026-02-08T13:49:21.218338Z	▲    cover: null,
2026-02-08T13:49:21.218403Z	▲    icon: null,
2026-02-08T13:49:21.218458Z	▲    parent: {
2026-02-08T13:49:21.218511Z	▲      type: 'database_id',
2026-02-08T13:49:21.218563Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.218617Z	▲    },
2026-02-08T13:49:21.218668Z	▲    archived: false,
2026-02-08T13:49:21.218727Z	▲    in_trash: false,
2026-02-08T13:49:21.21878Z	▲    is_locked: false,
2026-02-08T13:49:21.218832Z	▲    properties: {
2026-02-08T13:49:21.21889Z	▲      text_en: [Object],
2026-02-08T13:49:21.218948Z	▲      name_en: [Object],
2026-02-08T13:49:21.219Z	▲      image: [Object],
2026-02-08T13:49:21.219053Z	▲      role: [Object],
2026-02-08T13:49:21.219162Z	▲      text: [Object],
2026-02-08T13:49:21.219233Z	▲      ordering: [Object],
2026-02-08T13:49:21.219287Z	▲      name: [Object]
2026-02-08T13:49:21.219343Z	▲    },
2026-02-08T13:49:21.219404Z	▲    url: 'https://www.notion.so/c452fe7f4be84bdb9afba32c10afbcab',
2026-02-08T13:49:21.219458Z	▲    public_url: null
2026-02-08T13:49:21.219512Z	▲  },
2026-02-08T13:49:21.219565Z	▲  {
2026-02-08T13:49:21.219617Z	▲    object: 'page',
2026-02-08T13:49:21.219671Z	▲    id: 'd65a07cd-7eec-4319-8dbb-f05addf412a9',
2026-02-08T13:49:21.219728Z	▲    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:49:21.219782Z	▲    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:49:21.219834Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.219893Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.219952Z	▲    cover: null,
2026-02-08T13:49:21.220007Z	▲    icon: null,
2026-02-08T13:49:21.220064Z	▲    parent: {
2026-02-08T13:49:21.22015Z	▲      type: 'database_id',
2026-02-08T13:49:21.220218Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.220282Z	▲    },
2026-02-08T13:49:21.220338Z	▲    archived: false,
2026-02-08T13:49:21.220401Z	▲    in_trash: false,
2026-02-08T13:49:21.220465Z	▲    is_locked: false,
2026-02-08T13:49:21.220525Z	▲    properties: {
2026-02-08T13:49:21.220755Z	▲      text_en: [Object],
2026-02-08T13:49:21.22089Z	▲      name_en: [Object],
2026-02-08T13:49:21.220987Z	▲      image: [Object],
2026-02-08T13:49:21.221242Z	▲      role: [Object],
2026-02-08T13:49:21.221348Z	▲      text: [Object],
2026-02-08T13:49:21.221445Z	▲      ordering: [Object],
2026-02-08T13:49:21.22155Z	▲      name: [Object]
2026-02-08T13:49:21.22177Z	▲    },
2026-02-08T13:49:21.221915Z	▲    url: 'https://www.notion.so/d65a07cd7eec43198dbbf05addf412a9',
2026-02-08T13:49:21.222023Z	▲    public_url: null
2026-02-08T13:49:21.222162Z	▲  },
2026-02-08T13:49:21.222258Z	▲  {
2026-02-08T13:49:21.22242Z	▲    object: 'page',
2026-02-08T13:49:21.222532Z	▲    id: 'f9633a2c-0dff-4b02-9161-9139ab8919d0',
2026-02-08T13:49:21.222676Z	▲    created_time: '2024-09-10T03:57:00.000Z',
2026-02-08T13:49:21.222777Z	▲    last_edited_time: '2024-10-17T01:27:00.000Z',
2026-02-08T13:49:21.222876Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.22297Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.223067Z	▲    cover: null,
2026-02-08T13:49:21.223212Z	▲    icon: null,
2026-02-08T13:49:21.223323Z	▲    parent: {
2026-02-08T13:49:21.223441Z	▲      type: 'database_id',
2026-02-08T13:49:21.223543Z	▲      database_id: '9b85f554-b3fc-42dc-b9d3-8f1ec87b168c'
2026-02-08T13:49:21.223644Z	▲    },
2026-02-08T13:49:21.223742Z	▲    archived: false,
2026-02-08T13:49:21.223918Z	▲    in_trash: false,
2026-02-08T13:49:21.224028Z	▲    is_locked: false,
2026-02-08T13:49:21.224147Z	▲    properties: {
2026-02-08T13:49:21.224249Z	▲      text_en: [Object],
2026-02-08T13:49:21.224345Z	▲      name_en: [Object],
2026-02-08T13:49:21.224436Z	▲      image: [Object],
2026-02-08T13:49:21.224535Z	▲      role: [Object],
2026-02-08T13:49:21.224632Z	▲      text: [Object],
2026-02-08T13:49:21.224812Z	▲      ordering: [Object],
2026-02-08T13:49:21.224885Z	▲      name: [Object]
2026-02-08T13:49:21.224951Z	▲    },
2026-02-08T13:49:21.22501Z	▲    url: 'https://www.notion.so/f9633a2c0dff4b0291619139ab8919d0',
2026-02-08T13:49:21.225071Z	▲    public_url: null
2026-02-08T13:49:21.225178Z	▲  }
2026-02-08T13:49:21.225262Z	▲  ]
2026-02-08T13:49:21.225367Z	▲  Role data received: [
2026-02-08T13:49:21.225467Z	▲  {
2026-02-08T13:49:21.22563Z	▲    object: 'page',
2026-02-08T13:49:21.225732Z	▲    id: '122a8c0e-cf8c-808e-88c5-c0446f064f99',
2026-02-08T13:49:21.225823Z	▲    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:49:21.225923Z	▲    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:49:21.226072Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.226239Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.226346Z	▲    cover: null,
2026-02-08T13:49:21.226437Z	▲    icon: null,
2026-02-08T13:49:21.226541Z	▲    parent: {
2026-02-08T13:49:21.226632Z	▲      type: 'database_id',
2026-02-08T13:49:21.226732Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:49:21.226833Z	▲    },
2026-02-08T13:49:21.226924Z	▲    archived: false,
2026-02-08T13:49:21.227053Z	▲    in_trash: false,
2026-02-08T13:49:21.227191Z	▲    is_locked: false,
2026-02-08T13:49:21.227289Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:49:21.227446Z	▲    url: 'https://www.notion.so/122a8c0ecf8c808e88c5c0446f064f99',
2026-02-08T13:49:21.22778Z	▲    public_url: null
2026-02-08T13:49:21.227903Z	▲  },
2026-02-08T13:49:21.228008Z	▲  {
2026-02-08T13:49:21.228133Z	▲    object: 'page',
2026-02-08T13:49:21.228252Z	▲    id: '122a8c0e-cf8c-80ca-bded-ded104c18d96',
2026-02-08T13:49:21.228388Z	▲    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:49:21.228637Z	▲    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:49:21.22887Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.228958Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.229027Z	▲    cover: null,
2026-02-08T13:49:21.22928Z	▲    icon: null,
2026-02-08T13:49:21.229517Z	▲    parent: {
2026-02-08T13:49:21.229739Z	▲      type: 'database_id',
2026-02-08T13:49:21.229828Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:49:21.230038Z	▲    },
2026-02-08T13:49:21.230167Z	▲    archived: false,
2026-02-08T13:49:21.230405Z	▲    in_trash: false,
2026-02-08T13:49:21.230512Z	▲    is_locked: false,
2026-02-08T13:49:21.230681Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:49:21.230756Z	▲    url: 'https://www.notion.so/122a8c0ecf8c80cabdedded104c18d96',
2026-02-08T13:49:21.230877Z	▲    public_url: null
2026-02-08T13:49:21.231008Z	▲  },
2026-02-08T13:49:21.231131Z	▲  {
2026-02-08T13:49:21.231231Z	▲    object: 'page',
2026-02-08T13:49:21.231327Z	▲    id: '122a8c0e-cf8c-80d5-85d2-d4a0673c1797',
2026-02-08T13:49:21.231414Z	▲    created_time: '2024-10-17T01:16:00.000Z',
2026-02-08T13:49:21.231486Z	▲    last_edited_time: '2024-10-17T01:19:00.000Z',
2026-02-08T13:49:21.231564Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.231635Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.231726Z	▲    cover: null,
2026-02-08T13:49:21.231835Z	▲    icon: null,
2026-02-08T13:49:21.231952Z	▲    parent: {
2026-02-08T13:49:21.232049Z	▲      type: 'database_id',
2026-02-08T13:49:21.232179Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:49:21.232256Z	▲    },
2026-02-08T13:49:21.23235Z	▲    archived: false,
2026-02-08T13:49:21.232484Z	▲    in_trash: false,
2026-02-08T13:49:21.232601Z	▲    is_locked: false,
2026-02-08T13:49:21.232695Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:49:21.232799Z	▲    url: 'https://www.notion.so/122a8c0ecf8c80d585d2d4a0673c1797',
2026-02-08T13:49:21.232899Z	▲    public_url: null
2026-02-08T13:49:21.232989Z	▲  },
2026-02-08T13:49:21.233084Z	▲  {
2026-02-08T13:49:21.233239Z	▲    object: 'page',
2026-02-08T13:49:21.233384Z	▲    id: '25697b18-c8e5-48aa-948f-4716cf5e36e8',
2026-02-08T13:49:21.233475Z	▲    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:49:21.233548Z	▲    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:49:21.233612Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.233672Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.233727Z	▲    cover: null,
2026-02-08T13:49:21.23378Z	▲    icon: null,
2026-02-08T13:49:21.233832Z	▲    parent: {
2026-02-08T13:49:21.233886Z	▲      type: 'database_id',
2026-02-08T13:49:21.233937Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:49:21.23399Z	▲    },
2026-02-08T13:49:21.234049Z	▲    archived: false,
2026-02-08T13:49:21.234136Z	▲    in_trash: false,
2026-02-08T13:49:21.234207Z	▲    is_locked: false,
2026-02-08T13:49:21.234271Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:49:21.234337Z	▲    url: 'https://www.notion.so/25697b18c8e548aa948f4716cf5e36e8',
2026-02-08T13:49:21.234394Z	▲    public_url: null
2026-02-08T13:49:21.234448Z	▲  },
2026-02-08T13:49:21.234502Z	▲  {
2026-02-08T13:49:21.234557Z	▲    object: 'page',
2026-02-08T13:49:21.234613Z	▲    id: '31cae8ce-3c54-4a0b-9b18-639b4de347b3',
2026-02-08T13:49:21.234672Z	▲    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:49:21.234731Z	▲    last_edited_time: '2024-10-17T01:17:00.000Z',
2026-02-08T13:49:21.23479Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.234851Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.234911Z	▲    cover: null,
2026-02-08T13:49:21.234971Z	▲    icon: null,
2026-02-08T13:49:21.235024Z	▲    parent: {
2026-02-08T13:49:21.235084Z	▲      type: 'database_id',
2026-02-08T13:49:21.235409Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:49:21.235519Z	▲    },
2026-02-08T13:49:21.235616Z	▲    archived: false,
2026-02-08T13:49:21.235713Z	▲    in_trash: false,
2026-02-08T13:49:21.235801Z	▲    is_locked: false,
2026-02-08T13:49:21.235885Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:49:21.235994Z	▲    url: 'https://www.notion.so/31cae8ce3c544a0b9b18639b4de347b3',
2026-02-08T13:49:21.236109Z	▲    public_url: null
2026-02-08T13:49:21.236385Z	▲  },
2026-02-08T13:49:21.236506Z	▲  {
2026-02-08T13:49:21.236651Z	▲    object: 'page',
2026-02-08T13:49:21.236846Z	▲    id: '9ad23647-a425-4c2a-8538-b77219acc481',
2026-02-08T13:49:21.23702Z	▲    created_time: '2024-10-17T01:12:00.000Z',
2026-02-08T13:49:21.237552Z	▲    last_edited_time: '2024-10-17T01:18:00.000Z',
2026-02-08T13:49:21.237666Z	▲    created_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.238287Z	▲    last_edited_by: { object: 'user', id: '350cb0bb-d654-4220-b7b9-ce2ab7f9b3a4' },
2026-02-08T13:49:21.238448Z	▲    cover: null,
2026-02-08T13:49:21.238607Z	▲    icon: null,
2026-02-08T13:49:21.238709Z	▲    parent: {
2026-02-08T13:49:21.238828Z	▲      type: 'database_id',
2026-02-08T13:49:21.23893Z	▲      database_id: '122a8c0e-cf8c-8005-9934-c64693cc39ca'
2026-02-08T13:49:21.239076Z	▲    },
2026-02-08T13:49:21.239277Z	▲    archived: false,
2026-02-08T13:49:21.239471Z	▲    in_trash: false,
2026-02-08T13:49:21.239583Z	▲    is_locked: false,
2026-02-08T13:49:21.23969Z	▲    properties: { role: [Object], en: [Object], title: [Object] },
2026-02-08T13:49:21.239789Z	▲    url: 'https://www.notion.so/9ad23647a4254c2a8538b77219acc481',
2026-02-08T13:49:21.239905Z	▲    public_url: null
2026-02-08T13:49:21.240018Z	▲  }
2026-02-08T13:49:21.24013Z	▲  ]
2026-02-08T13:49:21.240219Z	▲  Processed role list: [
2026-02-08T13:49:21.240324Z	▲  RoleEntity { role: 'nihongo-cafe', title: 'Nihongo Cafe' },
2026-02-08T13:49:21.240443Z	▲  RoleEntity { role: 'manager', title: 'Manager' },
2026-02-08T13:49:21.240541Z	▲  RoleEntity { role: 'volunteer', title: 'Volunteer' },
2026-02-08T13:49:21.240627Z	▲  RoleEntity { role: 'teacher', title: 'Instructor' },
2026-02-08T13:49:21.240727Z	▲  RoleEntity { role: 'co-director', title: 'Director ' },
2026-02-08T13:49:21.240822Z	▲  RoleEntity { role: 'assistant', title: 'Assistant' }
2026-02-08T13:49:21.240942Z	▲  ]
2026-02-08T13:49:21.241041Z	▲  Processed staff list: [
2026-02-08T13:49:21.241144Z	▲  StaffEntity {
2026-02-08T13:49:21.241217Z	▲    name: 'Hitomi McKnight',
2026-02-08T13:49:21.241274Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.241362Z	▲    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:49:21.241451Z	▲    image: {
2026-02-08T13:49:21.241542Z	▲      baseName: 'mcknight',
2026-02-08T13:49:21.241643Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.241769Z	▲      alt: 'mcknight.png',
2026-02-08T13:49:21.241932Z	▲      width: null,
2026-02-08T13:49:21.242044Z	▲      height: null
2026-02-08T13:49:21.242173Z	▲    },
2026-02-08T13:49:21.242288Z	▲    ordering: 1
2026-02-08T13:49:21.242423Z	▲  },
2026-02-08T13:49:21.242591Z	▲  StaffEntity {
2026-02-08T13:49:21.242756Z	▲    name: 'Minami Espinosa',
2026-02-08T13:49:21.242893Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.243046Z	▲    role: [ [RoleEntity], [RoleEntity] ],
2026-02-08T13:49:21.243212Z	▲    image: {
2026-02-08T13:49:21.243467Z	▲      baseName: 'minami',
2026-02-08T13:49:21.243559Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.243798Z	▲      alt: 'minami.png',
2026-02-08T13:49:21.243872Z	▲      width: null,
2026-02-08T13:49:21.243932Z	▲      height: null
2026-02-08T13:49:21.244131Z	▲    },
2026-02-08T13:49:21.244234Z	▲    ordering: 2
2026-02-08T13:49:21.244347Z	▲  },
2026-02-08T13:49:21.24451Z	▲  StaffEntity {
2026-02-08T13:49:21.244587Z	▲    name: 'Rie Butler',
2026-02-08T13:49:21.244724Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.244839Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.245139Z	▲    image: {
2026-02-08T13:49:21.24538Z	▲      baseName: 'IMG_1299_edited',
2026-02-08T13:49:21.245483Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.245699Z	▲      alt: 'IMG_1299_edited.jpg',
2026-02-08T13:49:21.245792Z	▲      width: null,
2026-02-08T13:49:21.245942Z	▲      height: null
2026-02-08T13:49:21.246042Z	▲    },
2026-02-08T13:49:21.246143Z	▲    ordering: 3
2026-02-08T13:49:21.246289Z	▲  },
2026-02-08T13:49:21.246361Z	▲  StaffEntity {
2026-02-08T13:49:21.246425Z	▲    name: 'Kokori Schrilla',
2026-02-08T13:49:21.246479Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.2466Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.246686Z	▲    image: {
2026-02-08T13:49:21.246761Z	▲      baseName: 'Kokori-TJS',
2026-02-08T13:49:21.246816Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.246873Z	▲      alt: 'Kokori-TJS.jpg',
2026-02-08T13:49:21.246934Z	▲      width: null,
2026-02-08T13:49:21.246994Z	▲      height: null
2026-02-08T13:49:21.247048Z	▲    },
2026-02-08T13:49:21.247135Z	▲    ordering: 4
2026-02-08T13:49:21.247208Z	▲  },
2026-02-08T13:49:21.247271Z	▲  StaffEntity {
2026-02-08T13:49:21.247355Z	▲    name: 'Katsuya Sato',
2026-02-08T13:49:21.247413Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.247473Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.247532Z	▲    image: {
2026-02-08T13:49:21.247587Z	▲      baseName: 'Katsu-TJS',
2026-02-08T13:49:21.247714Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.247841Z	▲      alt: 'Katsu-TJS.jpg',
2026-02-08T13:49:21.247994Z	▲      width: null,
2026-02-08T13:49:21.248138Z	▲      height: null
2026-02-08T13:49:21.248244Z	▲    },
2026-02-08T13:49:21.248405Z	▲    ordering: 5
2026-02-08T13:49:21.248557Z	▲  },
2026-02-08T13:49:21.248669Z	▲  StaffEntity {
2026-02-08T13:49:21.248793Z	▲    name: 'Meg Nakamura',
2026-02-08T13:49:21.248888Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.249063Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.249201Z	▲    image: {
2026-02-08T13:49:21.24934Z	▲      baseName: 'Meg-TJS',
2026-02-08T13:49:21.249435Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.249545Z	▲      alt: 'Meg-TJS.jpg',
2026-02-08T13:49:21.249676Z	▲      width: null,
2026-02-08T13:49:21.249772Z	▲      height: null
2026-02-08T13:49:21.249911Z	▲    },
2026-02-08T13:49:21.249996Z	▲    ordering: 6
2026-02-08T13:49:21.250106Z	▲  },
2026-02-08T13:49:21.250236Z	▲  StaffEntity {
2026-02-08T13:49:21.250358Z	▲    name: 'Yasir Nemat',
2026-02-08T13:49:21.250539Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.250655Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.250761Z	▲    image: {
2026-02-08T13:49:21.250864Z	▲      baseName: 'IMG_7879_edited',
2026-02-08T13:49:21.250959Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.251124Z	▲      alt: 'IMG_7879_edited.jpg',
2026-02-08T13:49:21.251235Z	▲      width: null,
2026-02-08T13:49:21.251326Z	▲      height: null
2026-02-08T13:49:21.251489Z	▲    },
2026-02-08T13:49:21.251632Z	▲    ordering: 7
2026-02-08T13:49:21.25178Z	▲  },
2026-02-08T13:49:21.251881Z	▲  StaffEntity {
2026-02-08T13:49:21.252028Z	▲    name: 'Miharu Lee',
2026-02-08T13:49:21.252196Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.252458Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.252542Z	▲    image: {
2026-02-08T13:49:21.252675Z	▲      baseName: 'IMG_1280_edited',
2026-02-08T13:49:21.252814Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.252901Z	▲      alt: 'IMG_1280_edited.jpg',
2026-02-08T13:49:21.253058Z	▲      width: null,
2026-02-08T13:49:21.253188Z	▲      height: null
2026-02-08T13:49:21.253293Z	▲    },
2026-02-08T13:49:21.253385Z	▲    ordering: 8
2026-02-08T13:49:21.253492Z	▲  },
2026-02-08T13:49:21.253597Z	▲  StaffEntity {
2026-02-08T13:49:21.253762Z	▲    name: 'Manami Okoshi',
2026-02-08T13:49:21.253847Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.253967Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.254074Z	▲    image: {
2026-02-08T13:49:21.254358Z	▲      baseName: 'Manami-TJS',
2026-02-08T13:49:21.254464Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.254552Z	▲      alt: 'Manami-TJS.jpg',
2026-02-08T13:49:21.254668Z	▲      width: null,
2026-02-08T13:49:21.254809Z	▲      height: null
2026-02-08T13:49:21.254906Z	▲    },
2026-02-08T13:49:21.254978Z	▲    ordering: 9
2026-02-08T13:49:21.255055Z	▲  },
2026-02-08T13:49:21.255188Z	▲  StaffEntity {
2026-02-08T13:49:21.255313Z	▲    name: 'Tasha Waldorf',
2026-02-08T13:49:21.255399Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.255568Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.255687Z	▲    image: {
2026-02-08T13:49:21.255799Z	▲      baseName: 'profile',
2026-02-08T13:49:21.255902Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.256013Z	▲      alt: 'profile.jpg',
2026-02-08T13:49:21.256135Z	▲      width: null,
2026-02-08T13:49:21.256255Z	▲      height: null
2026-02-08T13:49:21.256352Z	▲    },
2026-02-08T13:49:21.256441Z	▲    ordering: 10
2026-02-08T13:49:21.256532Z	▲  },
2026-02-08T13:49:21.256621Z	▲  StaffEntity {
2026-02-08T13:49:21.256689Z	▲    name: 'Lumi Hisataka',
2026-02-08T13:49:21.256768Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.256864Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.256967Z	▲    image: {
2026-02-08T13:49:21.25706Z	▲      baseName: 'Lumi-TJS',
2026-02-08T13:49:21.257169Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.257259Z	▲      alt: 'Lumi-TJS.jpg',
2026-02-08T13:49:21.257334Z	▲      width: null,
2026-02-08T13:49:21.257435Z	▲      height: null
2026-02-08T13:49:21.257538Z	▲    },
2026-02-08T13:49:21.257632Z	▲    ordering: 11
2026-02-08T13:49:21.257737Z	▲  },
2026-02-08T13:49:21.257863Z	▲  StaffEntity {
2026-02-08T13:49:21.257948Z	▲    name: 'Hana McKnight',
2026-02-08T13:49:21.258049Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.258161Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.258237Z	▲    image: {
2026-02-08T13:49:21.258328Z	▲      baseName: 'IMG_7796',
2026-02-08T13:49:21.2584Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.258477Z	▲      alt: 'IMG_7796.jpeg',
2026-02-08T13:49:21.258814Z	▲      width: null,
2026-02-08T13:49:21.258918Z	▲      height: null
2026-02-08T13:49:21.259008Z	▲    },
2026-02-08T13:49:21.259328Z	▲    ordering: 12
2026-02-08T13:49:21.259535Z	▲  },
2026-02-08T13:49:21.259751Z	▲  StaffEntity {
2026-02-08T13:49:21.259844Z	▲    name: 'Emi McKnight',
2026-02-08T13:49:21.260029Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.260249Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.260467Z	▲    image: {
2026-02-08T13:49:21.260575Z	▲      baseName: 'IMG_7799_edited',
2026-02-08T13:49:21.260872Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.26096Z	▲      alt: 'IMG_7799_edited.jpg',
2026-02-08T13:49:21.26117Z	▲      width: null,
2026-02-08T13:49:21.26128Z	▲      height: null
2026-02-08T13:49:21.261588Z	▲    },
2026-02-08T13:49:21.261677Z	▲    ordering: 13
2026-02-08T13:49:21.261912Z	▲  },
2026-02-08T13:49:21.261987Z	▲  StaffEntity {
2026-02-08T13:49:21.262043Z	▲    name: 'Azumi Uchida',
2026-02-08T13:49:21.262333Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.262416Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.262475Z	▲    image: {
2026-02-08T13:49:21.262759Z	▲      baseName: 'profile',
2026-02-08T13:49:21.262839Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.262895Z	▲      alt: 'profile.jpg',
2026-02-08T13:49:21.262955Z	▲      width: null,
2026-02-08T13:49:21.263164Z	▲      height: null
2026-02-08T13:49:21.263288Z	▲    },
2026-02-08T13:49:21.263404Z	▲    ordering: 14
2026-02-08T13:49:21.263554Z	▲  },
2026-02-08T13:49:21.263677Z	▲  StaffEntity {
2026-02-08T13:49:21.263748Z	▲    name: ' Kayo Orosco',
2026-02-08T13:49:21.26385Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.263989Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.264131Z	▲    image: {
2026-02-08T13:49:21.264254Z	▲      baseName: 'Kayo-TJS',
2026-02-08T13:49:21.264373Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.264442Z	▲      alt: 'Kayo-TJS.jpg',
2026-02-08T13:49:21.264565Z	▲      width: null,
2026-02-08T13:49:21.264718Z	▲      height: null
2026-02-08T13:49:21.264798Z	▲    },
2026-02-08T13:49:21.264923Z	▲    ordering: 15
2026-02-08T13:49:21.26506Z	▲  },
2026-02-08T13:49:21.265209Z	▲  StaffEntity {
2026-02-08T13:49:21.265354Z	▲    name: 'Jennider Shioya',
2026-02-08T13:49:21.265427Z	▲    text: [ [Object] ],
2026-02-08T13:49:21.265524Z	▲    role: [ [RoleEntity] ],
2026-02-08T13:49:21.265671Z	▲    image: {
2026-02-08T13:49:21.265773Z	▲      baseName: 'profile',
2026-02-08T13:49:21.265881Z	▲      pagePath: 'staff',
2026-02-08T13:49:21.265983Z	▲      alt: 'profile.jpg',
2026-02-08T13:49:21.266079Z	▲      width: null,
2026-02-08T13:49:21.266184Z	▲      height: null
2026-02-08T13:49:21.266283Z	▲    },
2026-02-08T13:49:21.266382Z	▲    ordering: 16
2026-02-08T13:49:21.266479Z	▲  }
2026-02-08T13:49:21.266587Z	▲  ]
2026-02-08T13:49:21.266682Z	▲  [ImageOptimizer] baseName: mcknight, pagePath: staff
2026-02-08T13:49:21.266909Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.267231Z	▲  '/image/download/staff/mcknight-md.webp',
2026-02-08T13:49:21.267345Z	▲  '/image/download/staff/mcknight-sm.webp',
2026-02-08T13:49:21.26763Z	▲  '/image/download/staff/mcknight-lg.webp',
2026-02-08T13:49:21.267821Z	▲  '/image/download/staff/mcknight.png',
2026-02-08T13:49:21.267959Z	▲  '/image/download/staff/mcknight.jpg'
2026-02-08T13:49:21.268118Z	▲  ]
2026-02-08T13:49:21.268212Z	▲  [ImageOptimizer] baseName: minami, pagePath: staff
2026-02-08T13:49:21.268332Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.268428Z	▲  '/image/download/staff/minami-md.webp',
2026-02-08T13:49:21.268647Z	▲  '/image/download/staff/minami-sm.webp',
2026-02-08T13:49:21.268847Z	▲  '/image/download/staff/minami-lg.webp',
2026-02-08T13:49:21.268933Z	▲  '/image/download/staff/minami.png',
2026-02-08T13:49:21.269074Z	▲  '/image/download/staff/minami.jpg'
2026-02-08T13:49:21.269198Z	▲  ]
2026-02-08T13:49:21.269316Z	▲  [ImageOptimizer] baseName: IMG_1299_edited, pagePath: staff
2026-02-08T13:49:21.269418Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.269521Z	▲  '/image/download/staff/IMG_1299_edited-md.webp',
2026-02-08T13:49:21.269611Z	▲  '/image/download/staff/IMG_1299_edited-sm.webp',
2026-02-08T13:49:21.269704Z	▲  '/image/download/staff/IMG_1299_edited-lg.webp',
2026-02-08T13:49:21.269804Z	▲  '/image/download/staff/IMG_1299_edited.png',
2026-02-08T13:49:21.269918Z	▲  '/image/download/staff/IMG_1299_edited.jpg'
2026-02-08T13:49:21.270022Z	▲  ]
2026-02-08T13:49:21.270137Z	▲  [ImageOptimizer] baseName: Kokori-TJS, pagePath: staff
2026-02-08T13:49:21.270243Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.270348Z	▲  '/image/download/staff/Kokori-TJS-md.webp',
2026-02-08T13:49:21.270444Z	▲  '/image/download/staff/Kokori-TJS-sm.webp',
2026-02-08T13:49:21.270531Z	▲  '/image/download/staff/Kokori-TJS-lg.webp',
2026-02-08T13:49:21.270624Z	▲  '/image/download/staff/Kokori-TJS.png',
2026-02-08T13:49:21.270833Z	▲  '/image/download/staff/Kokori-TJS.jpg'
2026-02-08T13:49:21.270921Z	▲  ]
2026-02-08T13:49:21.271144Z	▲  [ImageOptimizer] baseName: Katsu-TJS, pagePath: staff
2026-02-08T13:49:21.27124Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.27155Z	▲  '/image/download/staff/Katsu-TJS-md.webp',
2026-02-08T13:49:21.271637Z	▲  '/image/download/staff/Katsu-TJS-sm.webp',
2026-02-08T13:49:21.271846Z	▲  '/image/download/staff/Katsu-TJS-lg.webp',
2026-02-08T13:49:21.272037Z	▲  '/image/download/staff/Katsu-TJS.png',
2026-02-08T13:49:21.272258Z	▲  '/image/download/staff/Katsu-TJS.jpg'
2026-02-08T13:49:21.272462Z	▲  ]
2026-02-08T13:49:21.272657Z	▲  [ImageOptimizer] baseName: Meg-TJS, pagePath: staff
2026-02-08T13:49:21.27274Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.272828Z	▲  '/image/download/staff/Meg-TJS-md.webp',
2026-02-08T13:49:21.272929Z	▲  '/image/download/staff/Meg-TJS-sm.webp',
2026-02-08T13:49:21.273162Z	▲  '/image/download/staff/Meg-TJS-lg.webp',
2026-02-08T13:49:21.273367Z	▲  '/image/download/staff/Meg-TJS.png',
2026-02-08T13:49:21.273449Z	▲  '/image/download/staff/Meg-TJS.jpg'
2026-02-08T13:49:21.273542Z	▲  ]
2026-02-08T13:49:21.273644Z	▲  [ImageOptimizer] baseName: IMG_7879_edited, pagePath: staff
2026-02-08T13:49:21.273738Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.273804Z	▲  '/image/download/staff/IMG_7879_edited-md.webp',
2026-02-08T13:49:21.27388Z	▲  '/image/download/staff/IMG_7879_edited-sm.webp',
2026-02-08T13:49:21.273947Z	▲  '/image/download/staff/IMG_7879_edited-lg.webp',
2026-02-08T13:49:21.274028Z	▲  '/image/download/staff/IMG_7879_edited.png',
2026-02-08T13:49:21.274146Z	▲  '/image/download/staff/IMG_7879_edited.jpg'
2026-02-08T13:49:21.274246Z	▲  ]
2026-02-08T13:49:21.274321Z	▲  [ImageOptimizer] baseName: IMG_1280_edited, pagePath: staff
2026-02-08T13:49:21.274415Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.274517Z	▲  '/image/download/staff/IMG_1280_edited-md.webp',
2026-02-08T13:49:21.274621Z	▲  '/image/download/staff/IMG_1280_edited-sm.webp',
2026-02-08T13:49:21.274717Z	▲  '/image/download/staff/IMG_1280_edited-lg.webp',
2026-02-08T13:49:21.274929Z	▲  '/image/download/staff/IMG_1280_edited.png',
2026-02-08T13:49:21.275013Z	▲  '/image/download/staff/IMG_1280_edited.jpg'
2026-02-08T13:49:21.275227Z	▲  ]
2026-02-08T13:49:21.275323Z	▲  [ImageOptimizer] baseName: Manami-TJS, pagePath: staff
2026-02-08T13:49:21.275613Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.275802Z	▲  '/image/download/staff/Manami-TJS-md.webp',
2026-02-08T13:49:21.275941Z	▲  '/image/download/staff/Manami-TJS-sm.webp',
2026-02-08T13:49:21.276025Z	▲  '/image/download/staff/Manami-TJS-lg.webp',
2026-02-08T13:49:21.276108Z	▲  '/image/download/staff/Manami-TJS.png',
2026-02-08T13:49:21.276199Z	▲  '/image/download/staff/Manami-TJS.jpg'
2026-02-08T13:49:21.276257Z	▲  ]
2026-02-08T13:49:21.276316Z	▲  [ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:49:21.276372Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.276432Z	▲  '/image/download/staff/profile-md.webp',
2026-02-08T13:49:21.276491Z	▲  '/image/download/staff/profile-sm.webp',
2026-02-08T13:49:21.276545Z	▲  '/image/download/staff/profile-lg.webp',
2026-02-08T13:49:21.276601Z	▲  '/image/download/staff/profile.png',
2026-02-08T13:49:21.276655Z	▲  '/image/download/staff/profile.jpg'
2026-02-08T13:49:21.276707Z	▲  ]
2026-02-08T13:49:21.27676Z	▲  [ImageOptimizer] baseName: Lumi-TJS, pagePath: staff
2026-02-08T13:49:21.276814Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.276868Z	▲  '/image/download/staff/Lumi-TJS-md.webp',
2026-02-08T13:49:21.276922Z	▲  '/image/download/staff/Lumi-TJS-sm.webp',
2026-02-08T13:49:21.276982Z	▲  '/image/download/staff/Lumi-TJS-lg.webp',
2026-02-08T13:49:21.277035Z	▲  '/image/download/staff/Lumi-TJS.png',
2026-02-08T13:49:21.277103Z	▲  '/image/download/staff/Lumi-TJS.jpg'
2026-02-08T13:49:21.277181Z	▲  ]
2026-02-08T13:49:21.277239Z	▲  [ImageOptimizer] baseName: IMG_7796, pagePath: staff
2026-02-08T13:49:21.277312Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.27738Z	▲  '/image/download/staff/IMG_7796-md.webp',
2026-02-08T13:49:21.277434Z	▲  '/image/download/staff/IMG_7796-sm.webp',
2026-02-08T13:49:21.277487Z	▲  '/image/download/staff/IMG_7796-lg.webp',
2026-02-08T13:49:21.277546Z	▲  '/image/download/staff/IMG_7796.png',
2026-02-08T13:49:21.277608Z	▲  '/image/download/staff/IMG_7796.jpg'
2026-02-08T13:49:21.277664Z	▲  ]
2026-02-08T13:49:21.277717Z	▲  [ImageOptimizer] baseName: IMG_7799_edited, pagePath: staff
2026-02-08T13:49:21.277776Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.277836Z	▲  '/image/download/staff/IMG_7799_edited-md.webp',
2026-02-08T13:49:21.277895Z	▲  '/image/download/staff/IMG_7799_edited-sm.webp',
2026-02-08T13:49:21.277949Z	▲  '/image/download/staff/IMG_7799_edited-lg.webp',
2026-02-08T13:49:21.278004Z	▲  '/image/download/staff/IMG_7799_edited.png',
2026-02-08T13:49:21.278059Z	▲  '/image/download/staff/IMG_7799_edited.jpg'
2026-02-08T13:49:21.278507Z	▲  ]
2026-02-08T13:49:21.278593Z	▲  [ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:49:21.278725Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.278812Z	▲  '/image/download/staff/profile-md.webp',
2026-02-08T13:49:21.278873Z	▲  '/image/download/staff/profile-sm.webp',
2026-02-08T13:49:21.278943Z	▲  '/image/download/staff/profile-lg.webp',
2026-02-08T13:49:21.279004Z	▲  '/image/download/staff/profile.png',
2026-02-08T13:49:21.279066Z	▲  '/image/download/staff/profile.jpg'
2026-02-08T13:49:21.279137Z	▲  ]
2026-02-08T13:49:21.279198Z	▲  [ImageOptimizer] baseName: Kayo-TJS, pagePath: staff
2026-02-08T13:49:21.279466Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.279557Z	▲  '/image/download/staff/Kayo-TJS-md.webp',
2026-02-08T13:49:21.279616Z	▲  '/image/download/staff/Kayo-TJS-sm.webp',
2026-02-08T13:49:21.279846Z	▲  '/image/download/staff/Kayo-TJS-lg.webp',
2026-02-08T13:49:21.279917Z	▲  '/image/download/staff/Kayo-TJS.png',
2026-02-08T13:49:21.279972Z	▲  '/image/download/staff/Kayo-TJS.jpg'
2026-02-08T13:49:21.28007Z	▲  ]
2026-02-08T13:49:21.280192Z	▲  [ImageOptimizer] baseName: profile, pagePath: staff
2026-02-08T13:49:21.280288Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:21.280391Z	▲  '/image/download/staff/profile-md.webp',
2026-02-08T13:49:21.280489Z	▲  '/image/download/staff/profile-sm.webp',
2026-02-08T13:49:21.280597Z	▲  '/image/download/staff/profile-lg.webp',
2026-02-08T13:49:21.280699Z	▲  '/image/download/staff/profile.png',
2026-02-08T13:49:21.2808Z	▲  '/image/download/staff/profile.jpg'
2026-02-08T13:49:21.280901Z	▲  ]
2026-02-08T13:49:21.281001Z	▲  🚫 キャッシュ無効 (reports): 直接APIから取得します
2026-02-08T13:49:21.281131Z	▲  🌐 Notion APIから取得中: reports
2026-02-08T13:49:21.403458Z	▲  ✅ API取得完了: reports (2件)
2026-02-08T13:49:21.413274Z	▲  🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:49:21.413485Z	▲  🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:49:21.41363Z	▲  🌐 Notion APIから取得中: category
2026-02-08T13:49:21.413745Z	▲  🌐 Notion APIから取得中: classes
2026-02-08T13:49:21.462744Z	▲  already exist.
2026-02-08T13:49:21.518216Z	▲  already exist.
2026-02-08T13:49:21.543426Z	▲  already exist.
2026-02-08T13:49:21.635927Z	▲  ✅ API取得完了: classes (7件)
2026-02-08T13:49:21.672023Z	▲  already exist.
2026-02-08T13:49:23.744866Z	▲  ✅ API取得完了: category (2件)
2026-02-08T13:49:26.394758Z	▲  Class data received: {
2026-02-08T13:49:26.394964Z	▲  category: [
2026-02-08T13:49:26.395035Z	▲    {
2026-02-08T13:49:26.395186Z	▲      object: 'page',
2026-02-08T13:49:26.395288Z	▲      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:49:26.395379Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:49:26.395506Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:49:26.3956Z	▲      created_by: [Object],
2026-02-08T13:49:26.39569Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.395806Z	▲      cover: null,
2026-02-08T13:49:26.395899Z	▲      icon: null,
2026-02-08T13:49:26.395996Z	▲      parent: [Object],
2026-02-08T13:49:26.396082Z	▲      archived: false,
2026-02-08T13:49:26.396221Z	▲      in_trash: false,
2026-02-08T13:49:26.39633Z	▲      is_locked: false,
2026-02-08T13:49:26.396429Z	▲      properties: [Object],
2026-02-08T13:49:26.396525Z	▲      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:49:26.396614Z	▲      public_url: null
2026-02-08T13:49:26.396732Z	▲    },
2026-02-08T13:49:26.396833Z	▲    {
2026-02-08T13:49:26.396918Z	▲      object: 'page',
2026-02-08T13:49:26.397004Z	▲      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:49:26.397112Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:49:26.397216Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:26.397309Z	▲      created_by: [Object],
2026-02-08T13:49:26.397396Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.397494Z	▲      cover: null,
2026-02-08T13:49:26.397592Z	▲      icon: null,
2026-02-08T13:49:26.397686Z	▲      parent: [Object],
2026-02-08T13:49:26.397772Z	▲      archived: false,
2026-02-08T13:49:26.397879Z	▲      in_trash: false,
2026-02-08T13:49:26.39798Z	▲      is_locked: false,
2026-02-08T13:49:26.398075Z	▲      properties: [Object],
2026-02-08T13:49:26.398205Z	▲      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:49:26.398304Z	▲      public_url: null
2026-02-08T13:49:26.398392Z	▲    }
2026-02-08T13:49:26.398493Z	▲  ],
2026-02-08T13:49:26.398596Z	▲  classes: [
2026-02-08T13:49:26.398697Z	▲    {
2026-02-08T13:49:26.398794Z	▲      object: 'page',
2026-02-08T13:49:26.398884Z	▲      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:49:26.398964Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:49:26.399048Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:26.399157Z	▲      created_by: [Object],
2026-02-08T13:49:26.399248Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.399334Z	▲      cover: null,
2026-02-08T13:49:26.399421Z	▲      icon: null,
2026-02-08T13:49:26.399513Z	▲      parent: [Object],
2026-02-08T13:49:26.399599Z	▲      archived: false,
2026-02-08T13:49:26.399682Z	▲      in_trash: false,
2026-02-08T13:49:26.399763Z	▲      is_locked: false,
2026-02-08T13:49:26.400687Z	▲      properties: [Object],
2026-02-08T13:49:26.400819Z	▲      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:49:26.400977Z	▲      public_url: null
2026-02-08T13:49:26.401054Z	▲    },
2026-02-08T13:49:26.401147Z	▲    {
2026-02-08T13:49:26.401217Z	▲      object: 'page',
2026-02-08T13:49:26.401281Z	▲      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:49:26.401352Z	▲      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:49:26.40142Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:49:26.401477Z	▲      created_by: [Object],
2026-02-08T13:49:26.40153Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.401585Z	▲      cover: null,
2026-02-08T13:49:26.401647Z	▲      icon: null,
2026-02-08T13:49:26.401707Z	▲      parent: [Object],
2026-02-08T13:49:26.401766Z	▲      archived: false,
2026-02-08T13:49:26.401826Z	▲      in_trash: false,
2026-02-08T13:49:26.401893Z	▲      is_locked: false,
2026-02-08T13:49:26.401957Z	▲      properties: [Object],
2026-02-08T13:49:26.402017Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:49:26.402071Z	▲      public_url: null
2026-02-08T13:49:26.402157Z	▲    },
2026-02-08T13:49:26.402226Z	▲    {
2026-02-08T13:49:26.402285Z	▲      object: 'page',
2026-02-08T13:49:26.40234Z	▲      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:49:26.402396Z	▲      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:49:26.402456Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:49:26.402511Z	▲      created_by: [Object],
2026-02-08T13:49:26.402572Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.402632Z	▲      cover: null,
2026-02-08T13:49:26.402698Z	▲      icon: null,
2026-02-08T13:49:26.402752Z	▲      parent: [Object],
2026-02-08T13:49:26.402805Z	▲      archived: false,
2026-02-08T13:49:26.402858Z	▲      in_trash: false,
2026-02-08T13:49:26.402913Z	▲      is_locked: false,
2026-02-08T13:49:26.402966Z	▲      properties: [Object],
2026-02-08T13:49:26.403019Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:49:26.403074Z	▲      public_url: null
2026-02-08T13:49:26.403323Z	▲    },
2026-02-08T13:49:26.403404Z	▲    {
2026-02-08T13:49:26.403503Z	▲      object: 'page',
2026-02-08T13:49:26.403601Z	▲      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:49:26.403704Z	▲      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:49:26.403786Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:49:26.403974Z	▲      created_by: [Object],
2026-02-08T13:49:26.40405Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.404213Z	▲      cover: null,
2026-02-08T13:49:26.404305Z	▲      icon: null,
2026-02-08T13:49:26.404416Z	▲      parent: [Object],
2026-02-08T13:49:26.404556Z	▲      archived: false,
2026-02-08T13:49:26.40468Z	▲      in_trash: false,
2026-02-08T13:49:26.404776Z	▲      is_locked: false,
2026-02-08T13:49:26.404887Z	▲      properties: [Object],
2026-02-08T13:49:26.405015Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:49:26.405156Z	▲      public_url: null
2026-02-08T13:49:26.405225Z	▲    },
2026-02-08T13:49:26.405282Z	▲    {
2026-02-08T13:49:26.40541Z	▲      object: 'page',
2026-02-08T13:49:26.40555Z	▲      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:49:26.405658Z	▲      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:49:26.405757Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:26.405824Z	▲      created_by: [Object],
2026-02-08T13:49:26.40588Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.405942Z	▲      cover: null,
2026-02-08T13:49:26.405998Z	▲      icon: null,
2026-02-08T13:49:26.406661Z	▲      parent: [Object],
2026-02-08T13:49:26.406773Z	▲      archived: false,
2026-02-08T13:49:26.406875Z	▲      in_trash: false,
2026-02-08T13:49:26.406973Z	▲      is_locked: false,
2026-02-08T13:49:26.407061Z	▲      properties: [Object],
2026-02-08T13:49:26.407293Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:49:26.4074Z	▲      public_url: null
2026-02-08T13:49:26.407529Z	▲    },
2026-02-08T13:49:26.407682Z	▲    {
2026-02-08T13:49:26.407758Z	▲      object: 'page',
2026-02-08T13:49:26.407851Z	▲      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:49:26.407957Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:49:26.408059Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:26.408252Z	▲      created_by: [Object],
2026-02-08T13:49:26.408341Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.408434Z	▲      cover: null,
2026-02-08T13:49:26.408576Z	▲      icon: null,
2026-02-08T13:49:26.408823Z	▲      parent: [Object],
2026-02-08T13:49:26.408939Z	▲      archived: false,
2026-02-08T13:49:26.409041Z	▲      in_trash: false,
2026-02-08T13:49:26.409166Z	▲      is_locked: false,
2026-02-08T13:49:26.409269Z	▲      properties: [Object],
2026-02-08T13:49:26.409369Z	▲      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:49:26.409467Z	▲      public_url: null
2026-02-08T13:49:26.409566Z	▲    },
2026-02-08T13:49:26.409656Z	▲    {
2026-02-08T13:49:26.409752Z	▲      object: 'page',
2026-02-08T13:49:26.409862Z	▲      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:49:26.409995Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:49:26.410146Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:49:26.410284Z	▲      created_by: [Object],
2026-02-08T13:49:26.410408Z	▲      last_edited_by: [Object],
2026-02-08T13:49:26.410525Z	▲      cover: null,
2026-02-08T13:49:26.410631Z	▲      icon: null,
2026-02-08T13:49:26.410746Z	▲      parent: [Object],
2026-02-08T13:49:26.410871Z	▲      archived: false,
2026-02-08T13:49:26.41098Z	▲      in_trash: false,
2026-02-08T13:49:26.411083Z	▲      is_locked: false,
2026-02-08T13:49:26.411221Z	▲      properties: [Object],
2026-02-08T13:49:26.411327Z	▲      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:49:26.411442Z	▲      public_url: null
2026-02-08T13:49:26.411567Z	▲    }
2026-02-08T13:49:26.411761Z	▲  ]
2026-02-08T13:49:26.411855Z	▲  }
2026-02-08T13:49:26.411984Z	▲  [ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:49:26.412065Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.412167Z	▲  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:49:26.41229Z	▲  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:49:26.41239Z	▲  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:49:26.41253Z	▲  '/image/download/class/IMG_1866.png',
2026-02-08T13:49:26.412648Z	▲  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:49:26.412752Z	▲  ]
2026-02-08T13:49:26.412864Z	▲  [ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:49:26.412983Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.413152Z	▲  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:49:26.413231Z	▲  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:49:26.413329Z	▲  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:49:26.413425Z	▲  '/image/download/class/IMG_3364.png',
2026-02-08T13:49:26.413527Z	▲  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:49:26.413632Z	▲  ]
2026-02-08T13:49:26.413731Z	▲  [ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:49:26.413858Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.413953Z	▲  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:49:26.414104Z	▲  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:49:26.414209Z	▲  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:49:26.414307Z	▲  '/image/download/class/20240210_110201.png',
2026-02-08T13:49:26.414467Z	▲  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:49:26.414546Z	▲  ]
2026-02-08T13:49:26.414604Z	▲  [ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:49:26.414702Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.414813Z	▲  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:49:26.414873Z	▲  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:49:26.414926Z	▲  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:49:26.414978Z	▲  '/image/download/class/IMG_7919.png',
2026-02-08T13:49:26.415029Z	▲  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:49:26.415081Z	▲  ]
2026-02-08T13:49:26.415168Z	▲  [ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:49:26.415227Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.415286Z	▲  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:49:26.415338Z	▲  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:49:26.415393Z	▲  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:49:26.415445Z	▲  '/image/download/class/IMG_7892.png',
2026-02-08T13:49:26.415496Z	▲  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:49:26.415549Z	▲  ]
2026-02-08T13:49:26.415601Z	▲  [ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:49:26.415661Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.415737Z	▲  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:49:26.415798Z	▲  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:49:26.415851Z	▲  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:49:26.415904Z	▲  '/image/download/class/IMG_3338.png',
2026-02-08T13:49:26.415955Z	▲  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:49:26.416007Z	▲  ]
2026-02-08T13:49:26.416058Z	▲  [ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:49:26.416144Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:26.416271Z	▲  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:49:26.416383Z	▲  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:49:26.41648Z	▲  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:49:26.416572Z	▲  '/image/download/class/IMG_8125.png',
2026-02-08T13:49:26.416675Z	▲  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:49:26.416769Z	▲  ]
2026-02-08T13:49:26.416864Z	▲  🚫 キャッシュ無効 (category): 直接APIから取得します
2026-02-08T13:49:26.417013Z	▲  🚫 キャッシュ無効 (classes): 直接APIから取得します
2026-02-08T13:49:26.417136Z	▲  🌐 Notion APIから取得中: category
2026-02-08T13:49:26.417253Z	▲  🌐 Notion APIから取得中: classes
2026-02-08T13:49:26.638894Z	▲  ✅ API取得完了: category (2件)
2026-02-08T13:49:28.534832Z	▲  ✅ API取得完了: classes (7件)
2026-02-08T13:49:31.208482Z	▲  Class data received: {
2026-02-08T13:49:31.208748Z	▲  category: [
2026-02-08T13:49:31.208872Z	▲    {
2026-02-08T13:49:31.208975Z	▲      object: 'page',
2026-02-08T13:49:31.209069Z	▲      id: '99ec02fb-20f3-4fa5-8231-83c45df3f144',
2026-02-08T13:49:31.20918Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:49:31.209264Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:49:31.209352Z	▲      created_by: [Object],
2026-02-08T13:49:31.209433Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.209513Z	▲      cover: null,
2026-02-08T13:49:31.20959Z	▲      icon: null,
2026-02-08T13:49:31.209669Z	▲      parent: [Object],
2026-02-08T13:49:31.209743Z	▲      archived: false,
2026-02-08T13:49:31.209825Z	▲      in_trash: false,
2026-02-08T13:49:31.209914Z	▲      is_locked: false,
2026-02-08T13:49:31.209989Z	▲      properties: [Object],
2026-02-08T13:49:31.210061Z	▲      url: 'https://www.notion.so/99ec02fb20f34fa5823183c45df3f144',
2026-02-08T13:49:31.210165Z	▲      public_url: null
2026-02-08T13:49:31.21024Z	▲    },
2026-02-08T13:49:31.210328Z	▲    {
2026-02-08T13:49:31.210408Z	▲      object: 'page',
2026-02-08T13:49:31.21057Z	▲      id: 'a995f74b-7721-49eb-b767-2f2c963ad338',
2026-02-08T13:49:31.210685Z	▲      created_time: '2024-10-09T07:36:00.000Z',
2026-02-08T13:49:31.210796Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:31.210882Z	▲      created_by: [Object],
2026-02-08T13:49:31.210974Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.211062Z	▲      cover: null,
2026-02-08T13:49:31.211171Z	▲      icon: null,
2026-02-08T13:49:31.211251Z	▲      parent: [Object],
2026-02-08T13:49:31.211338Z	▲      archived: false,
2026-02-08T13:49:31.211419Z	▲      in_trash: false,
2026-02-08T13:49:31.211502Z	▲      is_locked: false,
2026-02-08T13:49:31.211585Z	▲      properties: [Object],
2026-02-08T13:49:31.211668Z	▲      url: 'https://www.notion.so/a995f74b772149ebb7672f2c963ad338',
2026-02-08T13:49:31.211746Z	▲      public_url: null
2026-02-08T13:49:31.211823Z	▲    }
2026-02-08T13:49:31.2119Z	▲  ],
2026-02-08T13:49:31.211978Z	▲  classes: [
2026-02-08T13:49:31.212055Z	▲    {
2026-02-08T13:49:31.21216Z	▲      object: 'page',
2026-02-08T13:49:31.212263Z	▲      id: '11a3d234-161c-4116-bb01-34eeed87f99a',
2026-02-08T13:49:31.212357Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:49:31.212438Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:31.212517Z	▲      created_by: [Object],
2026-02-08T13:49:31.212594Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.212673Z	▲      cover: null,
2026-02-08T13:49:31.212758Z	▲      icon: null,
2026-02-08T13:49:31.212834Z	▲      parent: [Object],
2026-02-08T13:49:31.212918Z	▲      archived: false,
2026-02-08T13:49:31.213001Z	▲      in_trash: false,
2026-02-08T13:49:31.213076Z	▲      is_locked: false,
2026-02-08T13:49:31.213173Z	▲      properties: [Object],
2026-02-08T13:49:31.213255Z	▲      url: 'https://www.notion.so/11a3d234161c4116bb0134eeed87f99a',
2026-02-08T13:49:31.213341Z	▲      public_url: null
2026-02-08T13:49:31.213423Z	▲    },
2026-02-08T13:49:31.213508Z	▲    {
2026-02-08T13:49:31.213602Z	▲      object: 'page',
2026-02-08T13:49:31.213682Z	▲      id: '11aa8c0e-cf8c-8000-b850-fef91292ae8c',
2026-02-08T13:49:31.213784Z	▲      created_time: '2024-10-09T07:19:00.000Z',
2026-02-08T13:49:31.213867Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:49:31.213947Z	▲      created_by: [Object],
2026-02-08T13:49:31.214025Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.214116Z	▲      cover: null,
2026-02-08T13:49:31.214202Z	▲      icon: null,
2026-02-08T13:49:31.21428Z	▲      parent: [Object],
2026-02-08T13:49:31.214367Z	▲      archived: false,
2026-02-08T13:49:31.214445Z	▲      in_trash: false,
2026-02-08T13:49:31.214525Z	▲      is_locked: false,
2026-02-08T13:49:31.214603Z	▲      properties: [Object],
2026-02-08T13:49:31.214681Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c8000b850fef91292ae8c',
2026-02-08T13:49:31.214757Z	▲      public_url: null
2026-02-08T13:49:31.214851Z	▲    },
2026-02-08T13:49:31.214935Z	▲    {
2026-02-08T13:49:31.215016Z	▲      object: 'page',
2026-02-08T13:49:31.215111Z	▲      id: '11aa8c0e-cf8c-806d-bb6c-f2177df033cb',
2026-02-08T13:49:31.215222Z	▲      created_time: '2024-10-09T07:14:00.000Z',
2026-02-08T13:49:31.215322Z	▲      last_edited_time: '2025-09-02T09:40:00.000Z',
2026-02-08T13:49:31.215447Z	▲      created_by: [Object],
2026-02-08T13:49:31.215547Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.215649Z	▲      cover: null,
2026-02-08T13:49:31.215748Z	▲      icon: null,
2026-02-08T13:49:31.21588Z	▲      parent: [Object],
2026-02-08T13:49:31.215981Z	▲      archived: false,
2026-02-08T13:49:31.216082Z	▲      in_trash: false,
2026-02-08T13:49:31.216206Z	▲      is_locked: false,
2026-02-08T13:49:31.216305Z	▲      properties: [Object],
2026-02-08T13:49:31.216411Z	▲      url: 'https://www.notion.so/11aa8c0ecf8c806dbb6cf2177df033cb',
2026-02-08T13:49:31.216509Z	▲      public_url: null
2026-02-08T13:49:31.216602Z	▲    },
2026-02-08T13:49:31.216703Z	▲    {
2026-02-08T13:49:31.216806Z	▲      object: 'page',
2026-02-08T13:49:31.216913Z	▲      id: '11ca8c0e-cf8c-80d3-8615-f7d4f4007cf0',
2026-02-08T13:49:31.217013Z	▲      created_time: '2024-10-11T09:43:00.000Z',
2026-02-08T13:49:31.217119Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:49:31.217527Z	▲      created_by: [Object],
2026-02-08T13:49:31.217651Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.217771Z	▲      cover: null,
2026-02-08T13:49:31.217884Z	▲      icon: null,
2026-02-08T13:49:31.218079Z	▲      parent: [Object],
2026-02-08T13:49:31.218363Z	▲      archived: false,
2026-02-08T13:49:31.218502Z	▲      in_trash: false,
2026-02-08T13:49:31.21857Z	▲      is_locked: false,
2026-02-08T13:49:31.218662Z	▲      properties: [Object],
2026-02-08T13:49:31.218739Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d38615f7d4f4007cf0',
2026-02-08T13:49:31.218795Z	▲      public_url: null
2026-02-08T13:49:31.218849Z	▲    },
2026-02-08T13:49:31.218903Z	▲    {
2026-02-08T13:49:31.218957Z	▲      object: 'page',
2026-02-08T13:49:31.219011Z	▲      id: '11ca8c0e-cf8c-80d8-8fda-ee7d75a0e718',
2026-02-08T13:49:31.219071Z	▲      created_time: '2024-10-11T09:38:00.000Z',
2026-02-08T13:49:31.219163Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:31.219274Z	▲      created_by: [Object],
2026-02-08T13:49:31.219367Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.219465Z	▲      cover: null,
2026-02-08T13:49:31.219581Z	▲      icon: null,
2026-02-08T13:49:31.219711Z	▲      parent: [Object],
2026-02-08T13:49:31.219811Z	▲      archived: false,
2026-02-08T13:49:31.219906Z	▲      in_trash: false,
2026-02-08T13:49:31.220042Z	▲      is_locked: false,
2026-02-08T13:49:31.220143Z	▲      properties: [Object],
2026-02-08T13:49:31.22022Z	▲      url: 'https://www.notion.so/11ca8c0ecf8c80d88fdaee7d75a0e718',
2026-02-08T13:49:31.220294Z	▲      public_url: null
2026-02-08T13:49:31.220363Z	▲    },
2026-02-08T13:49:31.220421Z	▲    {
2026-02-08T13:49:31.220476Z	▲      object: 'page',
2026-02-08T13:49:31.22054Z	▲      id: '53b5c5ad-de13-4cf2-a4c1-407d8d117dce',
2026-02-08T13:49:31.220596Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:49:31.220654Z	▲      last_edited_time: '2025-09-02T09:39:00.000Z',
2026-02-08T13:49:31.22073Z	▲      created_by: [Object],
2026-02-08T13:49:31.220786Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.220854Z	▲      cover: null,
2026-02-08T13:49:31.220908Z	▲      icon: null,
2026-02-08T13:49:31.220961Z	▲      parent: [Object],
2026-02-08T13:49:31.221016Z	▲      archived: false,
2026-02-08T13:49:31.221075Z	▲      in_trash: false,
2026-02-08T13:49:31.221166Z	▲      is_locked: false,
2026-02-08T13:49:31.221232Z	▲      properties: [Object],
2026-02-08T13:49:31.221287Z	▲      url: 'https://www.notion.so/53b5c5adde134cf2a4c1407d8d117dce',
2026-02-08T13:49:31.221342Z	▲      public_url: null
2026-02-08T13:49:31.221407Z	▲    },
2026-02-08T13:49:31.221472Z	▲    {
2026-02-08T13:49:31.221533Z	▲      object: 'page',
2026-02-08T13:49:31.221597Z	▲      id: '63f53dc4-0f61-4505-abea-ff1ad51668e3',
2026-02-08T13:49:31.221653Z	▲      created_time: '2024-10-09T07:09:00.000Z',
2026-02-08T13:49:31.221708Z	▲      last_edited_time: '2025-09-05T02:40:00.000Z',
2026-02-08T13:49:31.221762Z	▲      created_by: [Object],
2026-02-08T13:49:31.221816Z	▲      last_edited_by: [Object],
2026-02-08T13:49:31.221873Z	▲      cover: null,
2026-02-08T13:49:31.221927Z	▲      icon: null,
2026-02-08T13:49:31.221988Z	▲      parent: [Object],
2026-02-08T13:49:31.222041Z	▲      archived: false,
2026-02-08T13:49:31.222141Z	▲      in_trash: false,
2026-02-08T13:49:31.222216Z	▲      is_locked: false,
2026-02-08T13:49:31.222272Z	▲      properties: [Object],
2026-02-08T13:49:31.222354Z	▲      url: 'https://www.notion.so/63f53dc40f614505abeaff1ad51668e3',
2026-02-08T13:49:31.22244Z	▲      public_url: null
2026-02-08T13:49:31.222528Z	▲    }
2026-02-08T13:49:31.22261Z	▲  ]
2026-02-08T13:49:31.222695Z	▲  }
2026-02-08T13:49:31.222801Z	▲  [ImageOptimizer] baseName: IMG_1866, pagePath: class
2026-02-08T13:49:31.222888Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.222966Z	▲  '/image/download/class/IMG_1866-md.webp',
2026-02-08T13:49:31.223061Z	▲  '/image/download/class/IMG_1866-sm.webp',
2026-02-08T13:49:31.223172Z	▲  '/image/download/class/IMG_1866-lg.webp',
2026-02-08T13:49:31.223262Z	▲  '/image/download/class/IMG_1866.png',
2026-02-08T13:49:31.223344Z	▲  '/image/download/class/IMG_1866.jpg'
2026-02-08T13:49:31.223425Z	▲  ]
2026-02-08T13:49:31.223504Z	▲  [ImageOptimizer] baseName: IMG_3364, pagePath: class
2026-02-08T13:49:31.223582Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.223674Z	▲  '/image/download/class/IMG_3364-md.webp',
2026-02-08T13:49:31.223758Z	▲  '/image/download/class/IMG_3364-sm.webp',
2026-02-08T13:49:31.223836Z	▲  '/image/download/class/IMG_3364-lg.webp',
2026-02-08T13:49:31.223922Z	▲  '/image/download/class/IMG_3364.png',
2026-02-08T13:49:31.224002Z	▲  '/image/download/class/IMG_3364.jpg'
2026-02-08T13:49:31.224079Z	▲  ]
2026-02-08T13:49:31.224191Z	▲  [ImageOptimizer] baseName: 20240210_110201, pagePath: class
2026-02-08T13:49:31.224284Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.22437Z	▲  '/image/download/class/20240210_110201-md.webp',
2026-02-08T13:49:31.224457Z	▲  '/image/download/class/20240210_110201-sm.webp',
2026-02-08T13:49:31.22456Z	▲  '/image/download/class/20240210_110201-lg.webp',
2026-02-08T13:49:31.224647Z	▲  '/image/download/class/20240210_110201.png',
2026-02-08T13:49:31.224733Z	▲  '/image/download/class/20240210_110201.jpg'
2026-02-08T13:49:31.224817Z	▲  ]
2026-02-08T13:49:31.224893Z	▲  [ImageOptimizer] baseName: IMG_7919, pagePath: class
2026-02-08T13:49:31.224969Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.225044Z	▲  '/image/download/class/IMG_7919-md.webp',
2026-02-08T13:49:31.225148Z	▲  '/image/download/class/IMG_7919-sm.webp',
2026-02-08T13:49:31.225234Z	▲  '/image/download/class/IMG_7919-lg.webp',
2026-02-08T13:49:31.225315Z	▲  '/image/download/class/IMG_7919.png',
2026-02-08T13:49:31.225396Z	▲  '/image/download/class/IMG_7919.jpg'
2026-02-08T13:49:31.225476Z	▲  ]
2026-02-08T13:49:31.225553Z	▲  [ImageOptimizer] baseName: IMG_7892, pagePath: class
2026-02-08T13:49:31.22563Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.225708Z	▲  '/image/download/class/IMG_7892-md.webp',
2026-02-08T13:49:31.225792Z	▲  '/image/download/class/IMG_7892-sm.webp',
2026-02-08T13:49:31.225869Z	▲  '/image/download/class/IMG_7892-lg.webp',
2026-02-08T13:49:31.225946Z	▲  '/image/download/class/IMG_7892.png',
2026-02-08T13:49:31.226036Z	▲  '/image/download/class/IMG_7892.jpg'
2026-02-08T13:49:31.226281Z	▲  ]
2026-02-08T13:49:31.226421Z	▲  [ImageOptimizer] baseName: IMG_3338, pagePath: class
2026-02-08T13:49:31.226547Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.226654Z	▲  '/image/download/class/IMG_3338-md.webp',
2026-02-08T13:49:31.226754Z	▲  '/image/download/class/IMG_3338-sm.webp',
2026-02-08T13:49:31.226867Z	▲  '/image/download/class/IMG_3338-lg.webp',
2026-02-08T13:49:31.22697Z	▲  '/image/download/class/IMG_3338.png',
2026-02-08T13:49:31.227087Z	▲  '/image/download/class/IMG_3338.jpg'
2026-02-08T13:49:31.227221Z	▲  ]
2026-02-08T13:49:31.22734Z	▲  [ImageOptimizer] baseName: IMG_8125, pagePath: class
2026-02-08T13:49:31.227451Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:31.227551Z	▲  '/image/download/class/IMG_8125-md.webp',
2026-02-08T13:49:31.227641Z	▲  '/image/download/class/IMG_8125-sm.webp',
2026-02-08T13:49:31.227741Z	▲  '/image/download/class/IMG_8125-lg.webp',
2026-02-08T13:49:31.227936Z	▲  '/image/download/class/IMG_8125.png',
2026-02-08T13:49:31.22807Z	▲  '/image/download/class/IMG_8125.jpg'
2026-02-08T13:49:31.228205Z	▲  ]
2026-02-08T13:49:31.230783Z	▲  🚫 キャッシュ無効 (schedule): 直接APIから取得します
2026-02-08T13:49:31.23093Z	▲  🚫 キャッシュ無効 (files): 直接APIから取得します
2026-02-08T13:49:31.231009Z	▲  🌐 Notion APIから取得中: schedule
2026-02-08T13:49:31.231755Z	▲  🌐 Notion APIから取得中: files
2026-02-08T13:49:31.591069Z	▲  ✅ API取得完了: schedule (48件)
2026-02-08T13:49:33.206403Z	▲  ✅ API取得完了: files (1件)
2026-02-08T13:49:33.364729Z	▲  already exist.
2026-02-08T13:49:33.481501Z	▲  already exist.
2026-02-08T13:49:33.48172Z	▲  not pdf file
2026-02-08T13:49:42.662434Z	▲  KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'en' }
2026-02-08T13:49:42.720754Z	▲  already exist.
2026-02-08T13:49:42.721033Z	▲  not pdf file
2026-02-08T13:49:42.775774Z	▲  already exist.
2026-02-08T13:49:44.499531Z	▲  KanjiKenteiPage props: { kanjiKenteiData: true, locale: 'en' }
2026-02-08T13:49:44.536802Z	▲  already exist.
2026-02-08T13:49:44.53708Z	▲  not pdf file
2026-02-08T13:49:44.580158Z	▲  already exist.
2026-02-08T13:49:46.569324Z	▲  🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:49:46.569546Z	▲  🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:49:46.569712Z	▲  🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:49:46.569821Z	▲  🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:49:46.569952Z	▲  🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:49:46.57006Z	▲  🌐 Notion APIから取得中: qualification
2026-02-08T13:49:46.570181Z	▲  🌐 Notion APIから取得中: price
2026-02-08T13:49:46.571384Z	▲  🌐 Notion APIから取得中: discountFamily
2026-02-08T13:49:46.572632Z	▲  🌐 Notion APIから取得中: discountStaff
2026-02-08T13:49:46.573879Z	▲  🌐 Notion APIから取得中: enrollment
2026-02-08T13:49:46.71505Z	▲  ✅ API取得完了: qualification (3件)
2026-02-08T13:49:46.769075Z	▲  ✅ API取得完了: discountFamily (3件)
2026-02-08T13:49:46.769276Z	▲  ✅ API取得完了: discountStaff (3件)
2026-02-08T13:49:46.779383Z	▲  ✅ API取得完了: price (8件)
2026-02-08T13:49:50.618769Z	▲  ✅ API取得完了: enrollment (2件)
2026-02-08T13:49:50.633926Z	▲  🚫 キャッシュ無効 (qualification): 直接APIから取得します
2026-02-08T13:49:50.634228Z	▲  🚫 キャッシュ無効 (price): 直接APIから取得します
2026-02-08T13:49:50.634438Z	▲  🚫 キャッシュ無効 (discountFamily): 直接APIから取得します
2026-02-08T13:49:50.634593Z	▲  🚫 キャッシュ無効 (discountStaff): 直接APIから取得します
2026-02-08T13:49:50.634722Z	▲  🚫 キャッシュ無効 (enrollment): 直接APIから取得します
2026-02-08T13:49:50.634842Z	▲  🌐 Notion APIから取得中: qualification
2026-02-08T13:49:50.634979Z	▲  🌐 Notion APIから取得中: price
2026-02-08T13:49:50.635133Z	▲  🌐 Notion APIから取得中: discountFamily
2026-02-08T13:49:50.635278Z	▲  🌐 Notion APIから取得中: discountStaff
2026-02-08T13:49:50.6354Z	▲  🌐 Notion APIから取得中: enrollment
2026-02-08T13:49:50.78722Z	▲  ✅ API取得完了: discountFamily (3件)
2026-02-08T13:49:50.787472Z	▲  ✅ API取得完了: discountStaff (3件)
2026-02-08T13:49:50.827974Z	▲  ✅ API取得完了: qualification (3件)
2026-02-08T13:49:51.102666Z	▲  ✅ API取得完了: enrollment (2件)
2026-02-08T13:49:51.3407Z	▲  ✅ API取得完了: price (8件)
2026-02-08T13:49:51.350855Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:49:51.35838Z	▲  [ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:49:51.358595Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.358736Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:49:51.358852Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:49:51.35897Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:49:51.359121Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:49:51.359235Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:49:51.359334Z	▲  ]
2026-02-08T13:49:51.359444Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:49:51.359551Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.359659Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:49:51.359761Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:49:51.359863Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:49:51.359967Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:49:51.360103Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:49:51.360219Z	▲  ]
2026-02-08T13:49:51.360327Z	▲  [ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:49:51.36044Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.360543Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:49:51.360647Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:49:51.360747Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:49:51.360843Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:49:51.360945Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:49:51.361056Z	▲  ]
2026-02-08T13:49:51.361182Z	▲  [ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:49:51.361288Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.361393Z	▲  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:49:51.361494Z	▲  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:49:51.361593Z	▲  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:49:51.361698Z	▲  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:49:51.361854Z	▲  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:49:51.361957Z	▲  ]
2026-02-08T13:49:51.362065Z	▲  [ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:49:51.362199Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.362314Z	▲  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:49:51.362484Z	▲  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:49:51.362609Z	▲  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:49:51.362681Z	▲  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:49:51.362736Z	▲  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:49:51.362792Z	▲  ]
2026-02-08T13:49:51.362851Z	▲  [ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:49:51.362912Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.362968Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:49:51.363029Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:49:51.363104Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:49:51.363179Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:49:51.363237Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:49:51.363294Z	▲  ]
2026-02-08T13:49:51.363352Z	▲  [ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:49:51.363412Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.363474Z	▲  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:49:51.363531Z	▲  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:49:51.363591Z	▲  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:49:51.363658Z	▲  '/image/download/news/unitymural02.png',
2026-02-08T13:49:51.363716Z	▲  '/image/download/news/unitymural02.jpg'
2026-02-08T13:49:51.36377Z	▲  ]
2026-02-08T13:49:51.363831Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:49:51.363892Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.363949Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:49:51.364014Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:49:51.364343Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:49:51.364447Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:49:51.36453Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:49:51.364634Z	▲  ]
2026-02-08T13:49:51.364736Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:49:51.364847Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.364945Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:49:51.365044Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:49:51.365159Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:49:51.365252Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:49:51.365349Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:49:51.365424Z	▲  ]
2026-02-08T13:49:51.365508Z	▲  [ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:49:51.365611Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.365713Z	▲  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:49:51.365812Z	▲  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:49:51.365901Z	▲  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:49:51.365999Z	▲  '/image/download/news/schooltablechair.png',
2026-02-08T13:49:51.366116Z	▲  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:49:51.366215Z	▲  ]
2026-02-08T13:49:51.366307Z	▲  [ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:49:51.366404Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.366494Z	▲  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:49:51.366587Z	▲  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:49:51.36668Z	▲  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:49:51.366768Z	▲  '/image/download/news/japanesegarden.png',
2026-02-08T13:49:51.366836Z	▲  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:49:51.366918Z	▲  ]
2026-02-08T13:49:51.376059Z	▲  🚀 グローバルキャッシュから取得: event
2026-02-08T13:49:51.378485Z	▲  [ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:49:51.378655Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.378778Z	▲  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:49:51.378882Z	▲  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:49:51.378996Z	▲  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:49:51.379129Z	▲  '/image/download/event/2026kenken.png',
2026-02-08T13:49:51.379238Z	▲  '/image/download/event/2026kenken.jpg'
2026-02-08T13:49:51.379341Z	▲  ]
2026-02-08T13:49:51.379457Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: event
2026-02-08T13:49:51.379561Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:51.379858Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:49:51.379964Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:49:51.380066Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:49:51.380185Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:49:51.380287Z	▲  '/image/download/event/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:49:51.380394Z	▲  ]
2026-02-08T13:49:51.385188Z	▲  🚫 キャッシュ無効 (sponsors): 直接APIから取得します
2026-02-08T13:49:51.385367Z	▲  🚫 キャッシュ無効 (support): 直接APIから取得します
2026-02-08T13:49:51.385497Z	▲  🚫 キャッシュ無効 (sponsor): 直接APIから取得します
2026-02-08T13:49:51.385615Z	▲  🚫 キャッシュ無効 (donation): 直接APIから取得します
2026-02-08T13:49:51.385733Z	▲  🚫 キャッシュ無効 (howto): 直接APIから取得します
2026-02-08T13:49:51.38586Z	▲  🌐 Notion APIから取得中: sponsors
2026-02-08T13:49:51.385965Z	▲  🌐 Notion APIから取得中: support
2026-02-08T13:49:51.386071Z	▲  🌐 Notion APIから取得中: sponsor
2026-02-08T13:49:51.386213Z	▲  🌐 Notion APIから取得中: donation
2026-02-08T13:49:51.386346Z	▲  🌐 Notion APIから取得中: howto
2026-02-08T13:49:51.545921Z	▲  ✅ API取得完了: howto (3件)
2026-02-08T13:49:51.546913Z	▲  ✅ API取得完了: donation (1件)
2026-02-08T13:49:51.558689Z	▲  ✅ API取得完了: sponsors (3件)
2026-02-08T13:49:51.701728Z	▲  ✅ API取得完了: support (1件)
2026-02-08T13:49:54.809398Z	▲  ✅ API取得完了: sponsor (1件)
2026-02-08T13:49:56.212459Z	▲  [ImageOptimizer] baseName: ikkyu, pagePath: sponsor
2026-02-08T13:49:56.212758Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:56.212907Z	▲  '/image/download/sponsor/ikkyu-md.webp',
2026-02-08T13:49:56.213021Z	▲  '/image/download/sponsor/ikkyu-sm.webp',
2026-02-08T13:49:56.213152Z	▲  '/image/download/sponsor/ikkyu-lg.webp',
2026-02-08T13:49:56.213262Z	▲  '/image/download/sponsor/ikkyu.png',
2026-02-08T13:49:56.213389Z	▲  '/image/download/sponsor/ikkyu.jpg'
2026-02-08T13:49:56.213497Z	▲  ]
2026-02-08T13:49:56.213613Z	▲  [ImageOptimizer] baseName: JBAALogo, pagePath: sponsor
2026-02-08T13:49:56.213758Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:56.213859Z	▲  '/image/download/sponsor/JBAALogo-md.webp',
2026-02-08T13:49:56.213969Z	▲  '/image/download/sponsor/JBAALogo-sm.webp',
2026-02-08T13:49:56.214078Z	▲  '/image/download/sponsor/JBAALogo-lg.webp',
2026-02-08T13:49:56.214204Z	▲  '/image/download/sponsor/JBAALogo.png',
2026-02-08T13:49:56.214336Z	▲  '/image/download/sponsor/JBAALogo.jpg'
2026-02-08T13:49:56.214459Z	▲  ]
2026-02-08T13:49:56.214566Z	▲  [ImageOptimizer] baseName: tucsonblossomacpuncture, pagePath: sponsor
2026-02-08T13:49:56.214694Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:56.214802Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-md.webp',
2026-02-08T13:49:56.214912Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-sm.webp',
2026-02-08T13:49:56.215026Z	▲  '/image/download/sponsor/tucsonblossomacpuncture-lg.webp',
2026-02-08T13:49:56.21515Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.png',
2026-02-08T13:49:56.215254Z	▲  '/image/download/sponsor/tucsonblossomacpuncture.jpg'
2026-02-08T13:49:56.21535Z	▲  ]
2026-02-08T13:49:56.229963Z	▲  🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:49:56.230212Z	▲  🌐 Notion APIから取得中: general
2026-02-08T13:49:56.389035Z	▲  ✅ API取得完了: general (1件)
2026-02-08T13:49:56.398155Z	▲  🚫 キャッシュ無効 (opportunity): 直接APIから取得します
2026-02-08T13:49:56.398444Z	▲  🚫 キャッシュ無効 (general): 直接APIから取得します
2026-02-08T13:49:56.398674Z	▲  🌐 Notion APIから取得中: opportunity
2026-02-08T13:49:56.398763Z	▲  🌐 Notion APIから取得中: general
2026-02-08T13:49:56.541638Z	▲  ✅ API取得完了: general (1件)
2026-02-08T13:49:56.568547Z	▲  ✅ API取得完了: opportunity (3件)
2026-02-08T13:49:56.576173Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:49:58.161358Z	▲  [ImageOptimizer] baseName: unitymural02, pagePath: news
2026-02-08T13:49:58.161964Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:49:58.162217Z	▲  '/image/download/news/unitymural02-md.webp',
2026-02-08T13:49:58.162378Z	▲  '/image/download/news/unitymural02-sm.webp',
2026-02-08T13:49:58.162507Z	▲  '/image/download/news/unitymural02-lg.webp',
2026-02-08T13:49:58.162631Z	▲  '/image/download/news/unitymural02.png',
2026-02-08T13:49:58.162753Z	▲  '/image/download/news/unitymural02.jpg'
2026-02-08T13:49:58.16287Z	▲  ]
2026-02-08T13:49:58.168135Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:03.052154Z	▲  [ImageOptimizer] baseName: Oasissep2017, pagePath: news
2026-02-08T13:50:03.052467Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:03.052613Z	▲  '/image/download/news/Oasissep2017-md.webp',
2026-02-08T13:50:03.052737Z	▲  '/image/download/news/Oasissep2017-sm.webp',
2026-02-08T13:50:03.053494Z	▲  '/image/download/news/Oasissep2017-lg.webp',
2026-02-08T13:50:03.053602Z	▲  '/image/download/news/Oasissep2017.png',
2026-02-08T13:50:03.054008Z	▲  '/image/download/news/Oasissep2017.jpg'
2026-02-08T13:50:03.054193Z	▲  ]
2026-02-08T13:50:03.060018Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:03.873678Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:08.636236Z	▲  [ImageOptimizer] baseName: japanesegarden, pagePath: news
2026-02-08T13:50:08.636546Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:08.63669Z	▲  '/image/download/news/japanesegarden-md.webp',
2026-02-08T13:50:08.636813Z	▲  '/image/download/news/japanesegarden-sm.webp',
2026-02-08T13:50:08.636922Z	▲  '/image/download/news/japanesegarden-lg.webp',
2026-02-08T13:50:08.637043Z	▲  '/image/download/news/japanesegarden.png',
2026-02-08T13:50:08.637171Z	▲  '/image/download/news/japanesegarden.jpg'
2026-02-08T13:50:08.637271Z	▲  ]
2026-02-08T13:50:08.642169Z	▲  Generating static pages (91/132)
2026-02-08T13:50:08.643073Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:12.200888Z	▲  [ImageOptimizer] baseName: tucsonundokai2023, pagePath: news
2026-02-08T13:50:12.201211Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:12.201356Z	▲  '/image/download/news/tucsonundokai2023-md.webp',
2026-02-08T13:50:12.201469Z	▲  '/image/download/news/tucsonundokai2023-sm.webp',
2026-02-08T13:50:12.201582Z	▲  '/image/download/news/tucsonundokai2023-lg.webp',
2026-02-08T13:50:12.201701Z	▲  '/image/download/news/tucsonundokai2023.png',
2026-02-08T13:50:12.201825Z	▲  '/image/download/news/tucsonundokai2023.jpg'
2026-02-08T13:50:12.201938Z	▲  ]
2026-02-08T13:50:12.209247Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:13.16633Z	▲  [ImageOptimizer] baseName: notoearthquake1, pagePath: news
2026-02-08T13:50:13.166568Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:13.166656Z	▲  '/image/download/news/notoearthquake1-md.webp',
2026-02-08T13:50:13.167117Z	▲  '/image/download/news/notoearthquake1-sm.webp',
2026-02-08T13:50:13.167213Z	▲  '/image/download/news/notoearthquake1-lg.webp',
2026-02-08T13:50:13.167344Z	▲  '/image/download/news/notoearthquake1.png',
2026-02-08T13:50:13.167441Z	▲  '/image/download/news/notoearthquake1.jpg'
2026-02-08T13:50:13.167569Z	▲  ]
2026-02-08T13:50:13.173637Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:14.408017Z	▲  [ImageOptimizer] baseName: newyearprayer, pagePath: news
2026-02-08T13:50:14.408349Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:14.408489Z	▲  '/image/download/news/newyearprayer-md.webp',
2026-02-08T13:50:14.408618Z	▲  '/image/download/news/newyearprayer-sm.webp',
2026-02-08T13:50:14.408744Z	▲  '/image/download/news/newyearprayer-lg.webp',
2026-02-08T13:50:14.408888Z	▲  '/image/download/news/newyearprayer.png',
2026-02-08T13:50:14.408987Z	▲  '/image/download/news/newyearprayer.jpg'
2026-02-08T13:50:14.409075Z	▲  ]
2026-02-08T13:50:14.413915Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:16.565919Z	▲  [ImageOptimizer] baseName: kanjikentei2024, pagePath: news
2026-02-08T13:50:16.566235Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:16.566407Z	▲  '/image/download/news/kanjikentei2024-md.webp',
2026-02-08T13:50:16.566532Z	▲  '/image/download/news/kanjikentei2024-sm.webp',
2026-02-08T13:50:16.566636Z	▲  '/image/download/news/kanjikentei2024-lg.webp',
2026-02-08T13:50:16.566734Z	▲  '/image/download/news/kanjikentei2024.png',
2026-02-08T13:50:16.566836Z	▲  '/image/download/news/kanjikentei2024.jpg'
2026-02-08T13:50:16.566948Z	▲  ]
2026-02-08T13:50:16.573206Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:18.474053Z	▲  [ImageOptimizer] baseName: schooltablechair, pagePath: news
2026-02-08T13:50:18.474553Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:18.474684Z	▲  '/image/download/news/schooltablechair-md.webp',
2026-02-08T13:50:18.474781Z	▲  '/image/download/news/schooltablechair-sm.webp',
2026-02-08T13:50:18.47502Z	▲  '/image/download/news/schooltablechair-lg.webp',
2026-02-08T13:50:18.475109Z	▲  '/image/download/news/schooltablechair.png',
2026-02-08T13:50:18.475221Z	▲  '/image/download/news/schooltablechair.jpg'
2026-02-08T13:50:18.475323Z	▲  ]
2026-02-08T13:50:18.480987Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:22.488239Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:24.925941Z	▲  [ImageOptimizer] baseName: arizonamatsurilogo, pagePath: news
2026-02-08T13:50:24.926281Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:24.926443Z	▲  '/image/download/news/arizonamatsurilogo-md.webp',
2026-02-08T13:50:24.926557Z	▲  '/image/download/news/arizonamatsurilogo-sm.webp',
2026-02-08T13:50:24.926662Z	▲  '/image/download/news/arizonamatsurilogo-lg.webp',
2026-02-08T13:50:24.926795Z	▲  '/image/download/news/arizonamatsurilogo.png',
2026-02-08T13:50:24.926933Z	▲  '/image/download/news/arizonamatsurilogo.jpg'
2026-02-08T13:50:24.927048Z	▲  ]
2026-02-08T13:50:24.93423Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:29.870264Z	▲  [ImageOptimizer] baseName: supportinghands, pagePath: news
2026-02-08T13:50:29.870585Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:29.870718Z	▲  '/image/download/news/supportinghands-md.webp',
2026-02-08T13:50:29.870839Z	▲  '/image/download/news/supportinghands-sm.webp',
2026-02-08T13:50:29.870951Z	▲  '/image/download/news/supportinghands-lg.webp',
2026-02-08T13:50:29.871074Z	▲  '/image/download/news/supportinghands.png',
2026-02-08T13:50:29.871245Z	▲  '/image/download/news/supportinghands.jpg'
2026-02-08T13:50:29.871364Z	▲  ]
2026-02-08T13:50:29.876203Z	▲  Generating static pages (99/132)
2026-02-08T13:50:29.876848Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:30.933528Z	▲  [ImageOptimizer] baseName: childreninclassroom, pagePath: news
2026-02-08T13:50:30.933835Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:30.934052Z	▲  '/image/download/news/childreninclassroom-md.webp',
2026-02-08T13:50:30.934256Z	▲  '/image/download/news/childreninclassroom-sm.webp',
2026-02-08T13:50:30.934368Z	▲  '/image/download/news/childreninclassroom-lg.webp',
2026-02-08T13:50:30.934513Z	▲  '/image/download/news/childreninclassroom.png',
2026-02-08T13:50:30.934625Z	▲  '/image/download/news/childreninclassroom.jpg'
2026-02-08T13:50:30.934714Z	▲  ]
2026-02-08T13:50:30.940044Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:34.531646Z	▲  [ImageOptimizer] baseName: hitomimcknight, pagePath: news
2026-02-08T13:50:34.531973Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:34.532218Z	▲  '/image/download/news/hitomimcknight-md.webp',
2026-02-08T13:50:34.532357Z	▲  '/image/download/news/hitomimcknight-sm.webp',
2026-02-08T13:50:34.532499Z	▲  '/image/download/news/hitomimcknight-lg.webp',
2026-02-08T13:50:34.532621Z	▲  '/image/download/news/hitomimcknight.png',
2026-02-08T13:50:34.532719Z	▲  '/image/download/news/hitomimcknight.jpg'
2026-02-08T13:50:34.532812Z	▲  ]
2026-02-08T13:50:34.544071Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:41.342662Z	▲  [ImageOptimizer] baseName: kanken2022, pagePath: news
2026-02-08T13:50:41.342922Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:41.343574Z	▲  '/image/download/news/kanken2022-md.webp',
2026-02-08T13:50:41.344077Z	▲  '/image/download/news/kanken2022-sm.webp',
2026-02-08T13:50:41.344256Z	▲  '/image/download/news/kanken2022-lg.webp',
2026-02-08T13:50:41.3446Z	▲  '/image/download/news/kanken2022.png',
2026-02-08T13:50:41.344791Z	▲  '/image/download/news/kanken2022.jpg'
2026-02-08T13:50:41.344897Z	▲  ]
2026-02-08T13:50:41.353967Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:43.503217Z	▲  [ImageOptimizer] baseName: kanjikentei2020, pagePath: news
2026-02-08T13:50:43.50354Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:43.503684Z	▲  '/image/download/news/kanjikentei2020-md.webp',
2026-02-08T13:50:43.503803Z	▲  '/image/download/news/kanjikentei2020-sm.webp',
2026-02-08T13:50:43.503927Z	▲  '/image/download/news/kanjikentei2020-lg.webp',
2026-02-08T13:50:43.504037Z	▲  '/image/download/news/kanjikentei2020.png',
2026-02-08T13:50:43.504159Z	▲  '/image/download/news/kanjikentei2020.jpg'
2026-02-08T13:50:43.504289Z	▲  ]
2026-02-08T13:50:43.510865Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:45.218131Z	▲  [ImageOptimizer] baseName: 2020newyear, pagePath: news
2026-02-08T13:50:45.218706Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:45.218818Z	▲  '/image/download/news/2020newyear-md.webp',
2026-02-08T13:50:45.219083Z	▲  '/image/download/news/2020newyear-sm.webp',
2026-02-08T13:50:45.219242Z	▲  '/image/download/news/2020newyear-lg.webp',
2026-02-08T13:50:45.219379Z	▲  '/image/download/news/2020newyear.png',
2026-02-08T13:50:45.219655Z	▲  '/image/download/news/2020newyear.jpg'
2026-02-08T13:50:45.219819Z	▲  ]
2026-02-08T13:50:45.226166Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:46.74173Z	▲  [ImageOptimizer] baseName: schoolchildrensmiles, pagePath: news
2026-02-08T13:50:46.742056Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:46.742464Z	▲  '/image/download/news/schoolchildrensmiles-md.webp',
2026-02-08T13:50:46.742774Z	▲  '/image/download/news/schoolchildrensmiles-sm.webp',
2026-02-08T13:50:46.742866Z	▲  '/image/download/news/schoolchildrensmiles-lg.webp',
2026-02-08T13:50:46.742927Z	▲  '/image/download/news/schoolchildrensmiles.png',
2026-02-08T13:50:46.742986Z	▲  '/image/download/news/schoolchildrensmiles.jpg'
2026-02-08T13:50:46.743047Z	▲  ]
2026-02-08T13:50:46.75Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:47.916316Z	▲  Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:50:48.51472Z	▲  Skipping non-PDF file: kanjikenteiapplication2023.png (.png)
2026-02-08T13:50:48.518579Z	▲  [ImageOptimizer] baseName: kanjikenteilogo, pagePath: news
2026-02-08T13:50:48.518781Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:48.51889Z	▲  '/image/download/news/kanjikenteilogo-md.webp',
2026-02-08T13:50:48.519011Z	▲  '/image/download/news/kanjikenteilogo-sm.webp',
2026-02-08T13:50:48.51914Z	▲  '/image/download/news/kanjikenteilogo-lg.webp',
2026-02-08T13:50:48.519293Z	▲  '/image/download/news/kanjikenteilogo.png',
2026-02-08T13:50:48.519419Z	▲  '/image/download/news/kanjikenteilogo.jpg'
2026-02-08T13:50:48.519523Z	▲  ]
2026-02-08T13:50:48.527277Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:49.908237Z	▲  [ImageOptimizer] baseName: newyear2021, pagePath: news
2026-02-08T13:50:49.908483Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:49.908783Z	▲  '/image/download/news/newyear2021-md.webp',
2026-02-08T13:50:49.908906Z	▲  '/image/download/news/newyear2021-sm.webp',
2026-02-08T13:50:49.909071Z	▲  '/image/download/news/newyear2021-lg.webp',
2026-02-08T13:50:49.909237Z	▲  '/image/download/news/newyear2021.png',
2026-02-08T13:50:49.909392Z	▲  '/image/download/news/newyear2021.jpg'
2026-02-08T13:50:49.909479Z	▲  ]
2026-02-08T13:50:49.9167Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:53.341981Z	▲  [ImageOptimizer] baseName: tucsonundokai2020, pagePath: news
2026-02-08T13:50:53.342239Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:53.342477Z	▲  '/image/download/news/tucsonundokai2020-md.webp',
2026-02-08T13:50:53.342556Z	▲  '/image/download/news/tucsonundokai2020-sm.webp',
2026-02-08T13:50:53.342614Z	▲  '/image/download/news/tucsonundokai2020-lg.webp',
2026-02-08T13:50:53.342883Z	▲  '/image/download/news/tucsonundokai2020.png',
2026-02-08T13:50:53.34297Z	▲  '/image/download/news/tucsonundokai2020.jpg'
2026-02-08T13:50:53.343032Z	▲  ]
2026-02-08T13:50:53.349588Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:56.765753Z	▲  [ImageOptimizer] baseName: boystudyonline, pagePath: news
2026-02-08T13:50:56.765971Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:56.766052Z	▲  '/image/download/news/boystudyonline-md.webp',
2026-02-08T13:50:56.766143Z	▲  '/image/download/news/boystudyonline-sm.webp',
2026-02-08T13:50:56.766206Z	▲  '/image/download/news/boystudyonline-lg.webp',
2026-02-08T13:50:56.76626Z	▲  '/image/download/news/boystudyonline.png',
2026-02-08T13:50:56.766324Z	▲  '/image/download/news/boystudyonline.jpg'
2026-02-08T13:50:56.766378Z	▲  ]
2026-02-08T13:50:56.774495Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:50:59.472993Z	▲  [ImageOptimizer] baseName: schoolchairtable, pagePath: news
2026-02-08T13:50:59.473257Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:50:59.47352Z	▲  '/image/download/news/schoolchairtable-md.webp',
2026-02-08T13:50:59.473641Z	▲  '/image/download/news/schoolchairtable-sm.webp',
2026-02-08T13:50:59.473904Z	▲  '/image/download/news/schoolchairtable-lg.webp',
2026-02-08T13:50:59.473996Z	▲  '/image/download/news/schoolchairtable.png',
2026-02-08T13:50:59.474059Z	▲  '/image/download/news/schoolchairtable.jpg'
2026-02-08T13:50:59.474155Z	▲  ]
2026-02-08T13:50:59.483847Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:00.1964Z	▲  [ImageOptimizer] baseName: remotelearningkid, pagePath: news
2026-02-08T13:51:00.196921Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:00.197046Z	▲  '/image/download/news/remotelearningkid-md.webp',
2026-02-08T13:51:00.197231Z	▲  '/image/download/news/remotelearningkid-sm.webp',
2026-02-08T13:51:00.197314Z	▲  '/image/download/news/remotelearningkid-lg.webp',
2026-02-08T13:51:00.197373Z	▲  '/image/download/news/remotelearningkid.png',
2026-02-08T13:51:00.197513Z	▲  '/image/download/news/remotelearningkid.jpg'
2026-02-08T13:51:00.197637Z	▲  ]
2026-02-08T13:51:00.204475Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:01.780624Z	▲  [ImageOptimizer] baseName: sponsorthanks, pagePath: news
2026-02-08T13:51:01.780984Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:01.781188Z	▲  '/image/download/news/sponsorthanks-md.webp',
2026-02-08T13:51:01.781298Z	▲  '/image/download/news/sponsorthanks-sm.webp',
2026-02-08T13:51:01.781424Z	▲  '/image/download/news/sponsorthanks-lg.webp',
2026-02-08T13:51:01.781539Z	▲  '/image/download/news/sponsorthanks.png',
2026-02-08T13:51:01.781641Z	▲  '/image/download/news/sponsorthanks.jpg'
2026-02-08T13:51:01.781737Z	▲  ]
2026-02-08T13:51:01.78938Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:03.674445Z	▲  [ImageOptimizer] baseName: kanjikentei2023, pagePath: news
2026-02-08T13:51:03.674797Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:03.674903Z	▲  '/image/download/news/kanjikentei2023-md.webp',
2026-02-08T13:51:03.67497Z	▲  '/image/download/news/kanjikentei2023-sm.webp',
2026-02-08T13:51:03.675031Z	▲  '/image/download/news/kanjikentei2023-lg.webp',
2026-02-08T13:51:03.675105Z	▲  '/image/download/news/kanjikentei2023.png',
2026-02-08T13:51:03.675171Z	▲  '/image/download/news/kanjikentei2023.jpg'
2026-02-08T13:51:03.675233Z	▲  ]
2026-02-08T13:51:03.682084Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:05.415514Z	▲  [ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:51:05.415745Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:05.415835Z	▲  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:51:05.415903Z	▲  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:51:05.41596Z	▲  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:51:05.416016Z	▲  '/image/download/news/emptyschool.png',
2026-02-08T13:51:05.416078Z	▲  '/image/download/news/emptyschool.jpg'
2026-02-08T13:51:05.416199Z	▲  ]
2026-02-08T13:51:05.423401Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:11.662454Z	▲  [ImageOptimizer] baseName: pandemicprevention, pagePath: news
2026-02-08T13:51:11.662749Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:11.662887Z	▲  '/image/download/news/pandemicprevention-md.webp',
2026-02-08T13:51:11.662995Z	▲  '/image/download/news/pandemicprevention-sm.webp',
2026-02-08T13:51:11.663124Z	▲  '/image/download/news/pandemicprevention-lg.webp',
2026-02-08T13:51:11.663244Z	▲  '/image/download/news/pandemicprevention.png',
2026-02-08T13:51:11.663346Z	▲  '/image/download/news/pandemicprevention.jpg'
2026-02-08T13:51:11.663435Z	▲  ]
2026-02-08T13:51:11.670556Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:15.233233Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:20.517876Z	▲  [ImageOptimizer] baseName: mochipounding, pagePath: news
2026-02-08T13:51:20.518249Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:20.518414Z	▲  '/image/download/news/mochipounding-md.webp',
2026-02-08T13:51:20.518524Z	▲  '/image/download/news/mochipounding-sm.webp',
2026-02-08T13:51:20.518674Z	▲  '/image/download/news/mochipounding-lg.webp',
2026-02-08T13:51:20.518788Z	▲  '/image/download/news/mochipounding.png',
2026-02-08T13:51:20.518888Z	▲  '/image/download/news/mochipounding.jpg'
2026-02-08T13:51:20.518982Z	▲  ]
2026-02-08T13:51:20.527843Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:21.586124Z	▲  [ImageOptimizer] baseName: emptyschool, pagePath: news
2026-02-08T13:51:21.586423Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:21.586797Z	▲  '/image/download/news/emptyschool-md.webp',
2026-02-08T13:51:21.586884Z	▲  '/image/download/news/emptyschool-sm.webp',
2026-02-08T13:51:21.586987Z	▲  '/image/download/news/emptyschool-lg.webp',
2026-02-08T13:51:21.587134Z	▲  '/image/download/news/emptyschool.png',
2026-02-08T13:51:21.587234Z	▲  '/image/download/news/emptyschool.jpg'
2026-02-08T13:51:21.587331Z	▲  ]
2026-02-08T13:51:21.594078Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:24.529176Z	▲  [ImageOptimizer] baseName: SAJCClogo, pagePath: news
2026-02-08T13:51:24.529784Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:24.529918Z	▲  '/image/download/news/SAJCClogo-md.webp',
2026-02-08T13:51:24.53Z	▲  '/image/download/news/SAJCClogo-sm.webp',
2026-02-08T13:51:24.530072Z	▲  '/image/download/news/SAJCClogo-lg.webp',
2026-02-08T13:51:24.530173Z	▲  '/image/download/news/SAJCClogo.png',
2026-02-08T13:51:24.530243Z	▲  '/image/download/news/SAJCClogo.jpg'
2026-02-08T13:51:24.530304Z	▲  ]
2026-02-08T13:51:24.538665Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:27.694986Z	▲  [ImageOptimizer] baseName: lastdayofschool2021, pagePath: news
2026-02-08T13:51:27.695312Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:27.695484Z	▲  '/image/download/news/lastdayofschool2021-md.webp',
2026-02-08T13:51:27.695598Z	▲  '/image/download/news/lastdayofschool2021-sm.webp',
2026-02-08T13:51:27.695706Z	▲  '/image/download/news/lastdayofschool2021-lg.webp',
2026-02-08T13:51:27.695799Z	▲  '/image/download/news/lastdayofschool2021.png',
2026-02-08T13:51:27.695902Z	▲  '/image/download/news/lastdayofschool2021.jpg'
2026-02-08T13:51:27.696127Z	▲  ]
2026-02-08T13:51:27.702991Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:31.677436Z	▲  [ImageOptimizer] baseName: tucsonundokai2021, pagePath: news
2026-02-08T13:51:31.677729Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:31.678329Z	▲  '/image/download/news/tucsonundokai2021-md.webp',
2026-02-08T13:51:31.678423Z	▲  '/image/download/news/tucsonundokai2021-sm.webp',
2026-02-08T13:51:31.679028Z	▲  '/image/download/news/tucsonundokai2021-lg.webp',
2026-02-08T13:51:31.679232Z	▲  '/image/download/news/tucsonundokai2021.png',
2026-02-08T13:51:31.679399Z	▲  '/image/download/news/tucsonundokai2021.jpg'
2026-02-08T13:51:31.67948Z	▲  ]
2026-02-08T13:51:31.686358Z	▲  Generating static pages (121/132)
2026-02-08T13:51:31.687294Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:35.016629Z	▲  [ImageOptimizer] baseName: 縦版　ツーソン大運動会ポスター__(9.4.2024), pagePath: news
2026-02-08T13:51:35.016958Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:35.017112Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-md.webp',
2026-02-08T13:51:35.017254Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-sm.webp',
2026-02-08T13:51:35.017365Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024)-lg.webp',
2026-02-08T13:51:35.017482Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).png',
2026-02-08T13:51:35.017595Z	▲  '/image/download/news/縦版　ツーソン大運動会ポスター__(9.4.2024).jpg'
2026-02-08T13:51:35.017707Z	▲  ]
2026-02-08T13:51:35.025853Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:38.20113Z	▲  [ImageOptimizer] baseName: Dangomaking2022, pagePath: news
2026-02-08T13:51:38.201433Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:38.201537Z	▲  '/image/download/news/Dangomaking2022-md.webp',
2026-02-08T13:51:38.2016Z	▲  '/image/download/news/Dangomaking2022-sm.webp',
2026-02-08T13:51:38.201657Z	▲  '/image/download/news/Dangomaking2022-lg.webp',
2026-02-08T13:51:38.201712Z	▲  '/image/download/news/Dangomaking2022.png',
2026-02-08T13:51:38.20177Z	▲  '/image/download/news/Dangomaking2022.jpg'
2026-02-08T13:51:38.201826Z	▲  ]
2026-02-08T13:51:38.209766Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:43.627977Z	▲  [ImageOptimizer] baseName: Kanjikentei2025poster, pagePath: news
2026-02-08T13:51:43.628358Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:43.628716Z	▲  '/image/download/news/Kanjikentei2025poster-md.webp',
2026-02-08T13:51:43.628865Z	▲  '/image/download/news/Kanjikentei2025poster-sm.webp',
2026-02-08T13:51:43.629001Z	▲  '/image/download/news/Kanjikentei2025poster-lg.webp',
2026-02-08T13:51:43.629178Z	▲  '/image/download/news/Kanjikentei2025poster.png',
2026-02-08T13:51:43.629247Z	▲  '/image/download/news/Kanjikentei2025poster.jpg'
2026-02-08T13:51:43.629314Z	▲  ]
2026-02-08T13:51:43.63713Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:46.925726Z	▲  [ImageOptimizer] baseName: Maxzeeks_visit-tjs.jpeg, pagePath: news
2026-02-08T13:51:46.926031Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:46.926188Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-md.webp',
2026-02-08T13:51:46.926303Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-sm.webp',
2026-02-08T13:51:46.92641Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg-lg.webp',
2026-02-08T13:51:46.926527Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.png',
2026-02-08T13:51:46.926642Z	▲  '/image/download/news/Maxzeeks_visit-tjs.jpeg.jpg'
2026-02-08T13:51:46.926748Z	▲  ]
2026-02-08T13:51:46.935357Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:48.988267Z	▲  [ImageOptimizer] baseName: 11th_Annual_Sports_Day_flyer, pagePath: news
2026-02-08T13:51:48.988568Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:48.988767Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-md.webp',
2026-02-08T13:51:48.98889Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-sm.webp',
2026-02-08T13:51:48.988987Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer-lg.webp',
2026-02-08T13:51:48.9892Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.png',
2026-02-08T13:51:48.989292Z	▲  '/image/download/news/11th_Annual_Sports_Day_flyer.jpg'
2026-02-08T13:51:48.98938Z	▲  ]
2026-02-08T13:51:48.998005Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:52.489312Z	▲  [ImageOptimizer] baseName: 2026_new_years_card_contect_flyer, pagePath: news
2026-02-08T13:51:52.489753Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:52.489903Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-md.webp',
2026-02-08T13:51:52.489983Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-sm.webp',
2026-02-08T13:51:52.490051Z	▲  '/image/download/news/2026_new_years_card_contect_flyer-lg.webp',
2026-02-08T13:51:52.490763Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.png',
2026-02-08T13:51:52.490874Z	▲  '/image/download/news/2026_new_years_card_contect_flyer.jpg'
2026-02-08T13:51:52.490973Z	▲  ]
2026-02-08T13:51:52.498378Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:51:58.571505Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:51:58.57185Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:51:58.572073Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:51:58.572616Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:51:58.572792Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:51:58.572915Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:51:58.573018Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:51:58.573312Z	▲  ]
2026-02-08T13:51:58.581649Z	▲  🚀 グローバルキャッシュから取得: news
2026-02-08T13:52:02.254956Z	▲  [ImageOptimizer] baseName: sakura_radio_minnano_gakko, pagePath: news
2026-02-08T13:52:02.255417Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:52:02.255602Z	▲  '/image/download/news/sakura_radio_minnano_gakko-md.webp',
2026-02-08T13:52:02.255717Z	▲  '/image/download/news/sakura_radio_minnano_gakko-sm.webp',
2026-02-08T13:52:02.255795Z	▲  '/image/download/news/sakura_radio_minnano_gakko-lg.webp',
2026-02-08T13:52:02.25592Z	▲  '/image/download/news/sakura_radio_minnano_gakko.png',
2026-02-08T13:52:02.256026Z	▲  '/image/download/news/sakura_radio_minnano_gakko.jpg'
2026-02-08T13:52:02.256156Z	▲  ]
2026-02-08T13:52:02.263932Z	▲  🚀 グローバルキャッシュから取得: event
2026-02-08T13:52:03.635138Z	▲  PDF already exists: 2026kenken.pdf
2026-02-08T13:52:04.581162Z	▲  PDF already exists: 2026kenken.pdf
2026-02-08T13:52:04.589258Z	▲  [ImageOptimizer] baseName: 2026kenken, pagePath: event
2026-02-08T13:52:04.589605Z	▲  [ImageOptimizer] imagePaths: [
2026-02-08T13:52:04.589695Z	▲  '/image/download/event/2026kenken-md.webp',
2026-02-08T13:52:04.589761Z	▲  '/image/download/event/2026kenken-sm.webp',
2026-02-08T13:52:04.589816Z	▲  '/image/download/event/2026kenken-lg.webp',
2026-02-08T13:52:04.58987Z	▲  '/image/download/event/2026kenken.png',
2026-02-08T13:52:04.589944Z	▲  '/image/download/event/2026kenken.jpg'
2026-02-08T13:52:04.59Z	▲  ]
2026-02-08T13:52:04.601539Z	▲  🚀 グローバルキャッシュから取得: event
2026-02-08T13:52:07.668082Z	▲  Error fetching event item: TypeError: Cannot read properties of undefined (reading 'plain_text')
2026-02-08T13:52:07.668406Z	▲  at /opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40199
2026-02-08T13:52:07.66855Z	▲  at Array.map (<anonymous>)
2026-02-08T13:52:07.668715Z	▲  at getStaticProps (/opt/buildhome/repo/.next/server/pages/[[...slug]].js:1:40150)
2026-02-08T13:52:07.668876Z	▲  at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2026-02-08T13:52:07.683132Z	▲  ✓ Generating static pages (132/132)
2026-02-08T13:52:07.774047Z	▲  Finalizing page optimization ...
2026-02-08T13:52:07.774348Z	▲  Collecting build traces ...
2026-02-08T13:52:08.381824Z	▲  
2026-02-08T13:52:08.385309Z	▲  Route (pages)                                                  Size     First Load JS
2026-02-08T13:52:08.385544Z	▲  ┌   /_app                                                      0 B             136 kB
2026-02-08T13:52:08.38568Z	▲  ├ ● /[[...slug]] (351886 ms)                                   17.4 kB         153 kB
2026-02-08T13:52:08.385803Z	▲  ├   ├ /en/program/kanji_kentei (9426 ms)
2026-02-08T13:52:08.385929Z	▲  ├   ├ /news/110a8c0e-cf8c-804e-b7d6-dfe14f5651ea (8357 ms)
2026-02-08T13:52:08.386038Z	▲  ├   ├ /news/110a8c0e-cf8c-80a0-a8aa-e0523eae6b07 (8103 ms)
2026-02-08T13:52:08.386186Z	▲  ├   ├ /en/news/112a8c0e-cf8c-8027-968c-e601184cc884 (6809 ms)
2026-02-08T13:52:08.386294Z	▲  ├   ├ /news/112a8c0e-cf8c-80f1-b6b9-c101f6b58f00 (6585 ms)
2026-02-08T13:52:08.386392Z	▲  ├   ├ /news/110a8c0e-cf8c-80dd-afcb-f422b241bd32 (6429 ms)
2026-02-08T13:52:08.386619Z	▲  ├   ├ /about/staff (6358 ms)
2026-02-08T13:52:08.386694Z	▲  ├   └ [+123 more paths] (avg 2438 ms)
2026-02-08T13:52:08.386751Z	▲  └ ○ /404                                                       485 B           136 kB
2026-02-08T13:52:08.386824Z	▲  + First Load JS shared by all                                  145 kB
2026-02-08T13:52:08.386884Z	▲  ├ chunks/226-d1d7dd7b32ef6b5e.js                             41.7 kB
2026-02-08T13:52:08.38694Z	▲  ├ chunks/636-ec4236f1d6966819.js                             34.5 kB
2026-02-08T13:52:08.386994Z	▲  ├ chunks/main-50cafcd35bca0b7c.js                            136 B
2026-02-08T13:52:08.387054Z	▲  ├ chunks/pages/_app-b263803bead3572a.js                      12.9 kB
2026-02-08T13:52:08.387143Z	▲  ├ chunks/react-e45e43352d762593.js                           44 kB
2026-02-08T13:52:08.387209Z	▲  ├ chunks/webpack-4f8741db61a74775.js                         2.59 kB
2026-02-08T13:52:08.387266Z	▲  └ css/82a031d7c987b531.css                                   8.87 kB
2026-02-08T13:52:08.387378Z	▲  ○  (Static)  automatically rendered as static HTML (uses no initial props)
2026-02-08T13:52:08.387437Z	▲  ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
2026-02-08T13:52:08.728251Z	▲  ⚠ "next export" is no longer needed when "output: export" is configured in next.config.js https://nextjs.org/docs/advanced-features/static-html-export
2026-02-08T13:52:08.728774Z	▲  Export successful. Files written to /opt/buildhome/repo/out
2026-02-08T13:52:08.850274Z	▲  ✨ [next-sitemap] Loading next-sitemap config: file:///opt/buildhome/repo/next-sitemap.js
2026-02-08T13:52:08.860247Z	▲  ✅ [next-sitemap] Generation completed
2026-02-08T13:52:08.861695Z	▲  ┌───────────────┬────────┐
2026-02-08T13:52:08.86188Z	▲  │ (index)       │ Values │
2026-02-08T13:52:08.862006Z	▲  ├───────────────┼────────┤
2026-02-08T13:52:08.862144Z	▲  │ indexSitemaps │ 1      │
2026-02-08T13:52:08.86226Z	▲  │ sitemaps      │ 1      │
2026-02-08T13:52:08.862373Z	▲  └───────────────┴────────┘
2026-02-08T13:52:08.862479Z	▲  -----------------------------------------------------
2026-02-08T13:52:08.862584Z	▲  SITEMAP INDICES 
2026-02-08T13:52:08.862682Z	▲  -----------------------------------------------------
2026-02-08T13:52:08.86279Z	▲  ○ https://tjschool.org/sitemap.xml
2026-02-08T13:52:08.862897Z	▲  -----------------------------------------------------
2026-02-08T13:52:08.862985Z	▲  SITEMAPS 
2026-02-08T13:52:08.863081Z	▲  -----------------------------------------------------
2026-02-08T13:52:08.863191Z	▲  ○ https://tjschool.org/sitemap-0.xml
2026-02-08T13:52:08.863295Z	▲  
2026-02-08T13:52:09.00264Z	▲  Notice: detected `next export`, this de-opts some Next.js features
2026-02-08T13:52:09.002931Z	▲  See more info: https://nextjs.org/docs/advanced-features/static-html-export
2026-02-08T13:52:09.187464Z	▲  Build Completed in .vercel/output [6m]
2026-02-08T13:52:09.291622Z	⚡️ Completed `npx vercel build`.
2026-02-08T13:52:09.332788Z	⚡️ No functions detected (no functions directory generated by Vercel).
2026-02-08T13:52:09.382432Z	
2026-02-08T13:52:09.382627Z	⚡️ Build Summary (@cloudflare/next-on-pages v1.13.16)
2026-02-08T13:52:09.383207Z	⚡️ 
2026-02-08T13:52:09.38338Z	⚡️ Other Static Assets (924)
2026-02-08T13:52:09.383509Z	⚡️   ┌ /404.html
2026-02-08T13:52:09.38362Z	⚡️   ├ /404/index.html
2026-02-08T13:52:09.38371Z	⚡️   ├ /about/governance/index.html
2026-02-08T13:52:09.383802Z	⚡️   ├ /about/index.html
2026-02-08T13:52:09.383894Z	⚡️   └ ... 920 more
2026-02-08T13:52:09.383984Z	
2026-02-08T13:52:09.384852Z	⚡️ Build log saved to '.vercel/output/static/_worker.js/nop-build-log.json'
2026-02-08T13:52:09.385231Z	⚡️ Generated '.vercel/output/static/_worker.js/index.js'.
2026-02-08T13:52:09.385366Z	⚡️ Build completed in 0.09s
2026-02-08T13:52:09.410273Z	Finished
2026-02-08T13:52:10.278424Z	Checking for configuration in a Wrangler configuration file (BETA)
2026-02-08T13:52:10.279264Z	
2026-02-08T13:52:10.27939Z	Found wrangler.toml file. Reading build configuration...
2026-02-08T13:52:10.284138Z	pages_build_output_dir: out
2026-02-08T13:52:10.284325Z	Build environment variables: (none found)
2026-02-08T13:52:11.398485Z	Successfully read wrangler.toml file.
2026-02-08T13:52:11.399424Z	Note: No functions dir at /functions found. Skipping.
2026-02-08T13:52:11.399738Z	Validating asset output directory
2026-02-08T13:52:15.640901Z	Deploying your site to Cloudflare's global network...
2026-02-08T13:52:19.312209Z	Uploading... (669/924)
2026-02-08T13:52:20.55482Z	Uploading... (754/924)
2026-02-08T13:52:20.557294Z	Uploading... (839/924)
2026-02-08T13:52:21.168285Z	Uploading... (924/924)
2026-02-08T13:52:21.16886Z	✨ Success! Uploaded 255 files (669 already uploaded) (2.37 sec)
2026-02-08T13:52:21.169054Z	
2026-02-08T13:52:21.889789Z	✨ Upload complete!
2026-02-08T13:52:28.230777Z	Success: Assets published!
2026-02-08T13:52:30.237431Z	Success: Your site was deployed!