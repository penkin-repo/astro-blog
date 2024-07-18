const image6 = new Proxy({"src":"/_astro/image6.CxT-4ig0.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/image6.png";
							}
							
							return target[name];
						}
					});

export { image6 as default };
