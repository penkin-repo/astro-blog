const image5 = new Proxy({"src":"/_astro/image5.BySF4Sar.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/image5.png";
							}
							
							return target[name];
						}
					});

export { image5 as default };
