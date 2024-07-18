const image4 = new Proxy({"src":"/_astro/image4.BUqkUGjD.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/image4.png";
							}
							
							return target[name];
						}
					});

export { image4 as default };
