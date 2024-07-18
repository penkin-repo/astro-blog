const aboutImage = new Proxy({"src":"/_astro/about.C1FZ3Rbp.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/about.jpg";
							}
							
							return target[name];
						}
					});

export { aboutImage as default };
