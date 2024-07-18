const team2 = new Proxy({"src":"/_astro/team2.Ccx9qtIf.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/team2.png";
							}
							
							return target[name];
						}
					});

export { team2 as default };
