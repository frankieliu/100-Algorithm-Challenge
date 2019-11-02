const domainType = (domains: string[]): string[] => {
	const typeMapping = {
		'com': 'Commercial',
		'org': 'Organization',
		'net': 'Network',
		'info': 'Information'
	};

	const returnArray = [];
	domains.forEach(domain => {
		const domainSplit = domain.split('.');
		returnArray.push(typeMapping[domainSplit[domainSplit.length - 1]]);
	});

	return returnArray;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));