const team1 = new Proxy({"src":"/_astro/team1.CHXq7Isr.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/team1.png";
							}
							
							return target[name];
						}
					});

export { team1 as default };
